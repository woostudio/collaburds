# Collabur Design System Boilerplate

## Installing Collabur DS packages in your app

You can use various Collabur properties and components as packages via NPM, within your Angular, Vue, React, or Static apps!

### Install NPM Packages into your app's repo

```bash
npm install [npm package name]
```

## Using Collabur DS packages in your app

Once you've installed the relevant Collabur node packages into your repo, simply do one of the following (depending on what kind of app you're building):

### Add the component(s) to the dependencies

Add the component to the app dependencies in package.json:

```bash
// package.json

"dependencies": {
  ...
  "@collabur-ds/core": "^0.3.2",
  "@collabur-ds/forms": "^0.3.2",
  "@collabur-ds/balance": "^0.3.2"
}
```

### Integration with Frameworks

#### Angular

Using a Stencil built web component collection within an Angular CLI project is a two-step process. We need to:

1. Include the `CUSTOM_ELEMENTS_SCHEMA` in the modules that use the components.
2. Call `defineCustomElements(window)` from `main.ts` (or some other appropriate place).

## Including the Custom Elements Schema

Including the `CUSTOM_ELEMENTS_SCHEMA` in the module allows the use of the web components in the HTML markup without the compiler producing errors this code should be added into the `AppModule` and in every other modules that use your custom elements.
Here is an example of adding it to `AppModule`:

```tsx
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

The `CUSTOM_ELEMENTS_SCHEMA` needs to be included in any module that uses custom elements.

## Calling defineCustomElements

A component collection built with Stencil includes a main function that is used to load the components in the collection. That function is called `defineCustomElements()` and it needs to be called once during the bootstrapping of your application. One convenient place to do this is in `main.ts` as such:

```tsx
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Note: loader import location set using "esmLoaderPath" within the output target confg
import { defineCustomElements } from 'test-components/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
defineCustomElements(window);
```

## Edge and IE11 polyfills

If you want your custom elements to be able to work on older browser, you should add the `applyPolyfills()` that surrond the `defineCustomElements()` function.

```tsx
import { applyPolyfills, defineCustomElements } from 'collabur-ds/dist/loader';
...
applyPolyfills().then(() => {
  defineCustomElements(window)
})

```

## Accessing components using ViewChild and ViewChildren

Once included, components could be referenced in your code using `ViewChild` and `ViewChildren` as in the following example:

```tsx
import { Component, ElementRef, ViewChild } from '@angular/core';

import 'collabur-ds';

@Component({
  selector: 'app-home',
  template: ` <test-components #test></test-components> `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('test') myTestComponent: ElementRef<HTMLTestComponentElement>;

  async onAction() {
    await this.myTestComponent.nativeElement.testComponentMethod();
  }
}
```

#### React

With an application built using the `create-react-app` script the easiest way to include the component library is to call `defineCustomElements(window)` from the `index.js` file.
Note that in this scenario `applyPolyfills` is needed if you are targeting Edge or IE11.

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// test-component is the name of our made up Web Component that we have
// published to npm:
import { applyPolyfills, defineCustomElements } from 'test-components/loader';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

applyPolyfills().then(() => {
  defineCustomElements(window);
});
```

Following the steps above will enable your web components to be used in React, however there are some additional complexities that must also be considered. https://custom-elements-everywhere.com/ describes them well.

#### Nuxt.js

Create a plugin, (e.g collabur.ts):

```ts
import Vue from 'vue';

import { defineCustomElements } from 'collabur-ds/dist/loader/index.cjs';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/rds-\w*/];

// Bind the custom elements to the window object
defineCustomElements(window);
```

```ts
// nuxt.config.ts
{
  plugins: [
    { src: '~/plugins/collabur.ts', mode: 'client' },
  ],
}
```

Then, use it in any component!

```vue
<template>
  <div>
    <rds-barcode member-id="978020137962"></rds-barcode>
  </div>
</template>
```

#### Without a framework

Integrating a component built with Stencil to a project without a JavaScript framework is straight forward. If you're using a simple HTML page, you can add your component via a script tag. For example, if we published a component to npm, we could load the component through unpkg like this:

```markup
<!DOCTYPE html>
<html lang="en">
<head>
  <script src="https://unpkg.com/test-components/latest/dist/test-components.js"></script>
</head>
<body>
  <test-component></test-component>
</body>
</html>
```

Alternatively, if you wanted to take advantage of ES Modules, you could include the components using an import statement. Note that in this scenario `applyPolyfills` is needed if you are targeting Edge or IE11.

```markup
<!DOCTYPE html>
<html lang="en">
<head>
  <script type="module">
    import { applyPolyfills, defineCustomElements } from 'https://unpkg.com/test-components/latest/dist/esm/es2017/test-components.define.js';
    applyPolyfills().then(() => {
      defineCustomElements(window);
    });
  </script>
</head>
<body>
  <test-component></test-component>
</body>
</html>
```

## Passing object props from a non-JSX element

### Setting the prop manually

```tsx
import { Prop } from '@stencil/core';

export class TodoList {
  @Prop() myObject: object;
  @Prop() myArray: Array<string>;
}
```

```tsx
<todo-list></todo-list>
<script>
  const todoListElement = document.querySelector('todo-list');
  todoListElement.myObject = {};
  todoListElement.myArray = [];
</script>
```

### Watching props changes

```tsx
import { Prop, State, Watch } from '@stencil/core';

export class TodoList {
  @Prop() myObject: string;
  @Prop() myArray: string;
  @State() myInnerObject: object;
  @State() myInnerArray: Array<string>;

  componentWillLoad() {
    this.parseMyObjectProp(this.myObject);
    this.parseMyArrayProp(this.myArray);
  }

  @Watch('myObject')
  parseMyObjectProp(newValue: string) {
    if (newValue) this.myInnerObject = JSON.parse(newValue);
  }

  @Watch('myArray')
  parseMyArrayProp(newValue: string) {
    if (newValue) this.myInnerArray = JSON.parse(newValue);
  }
}
```

```tsx
<todo-list my-object="{}" my-array="[]"></todo-list>
```
