import { addons } from '@storybook/addons'
import { CHANNEL_CREATED, STORY_ADDED, STORY_INIT, STORY_RENDER, STORY_CHANGED, STORY_RENDERED, SELECT_STORY, DOCS_RENDERED } from '@storybook/core-events'

addons.register('TitleAddon', api => {
  api.on(STORY_RENDER, story => {
    const title = document.title;
    document.title = title.replace('Storybook', 'Collabur DS');

    parent.postMessage({
      path: window.location.search,
      title: title.replace(' ⋅ Storybook', '').replace(' ⋅ Collabur DS', '')
    }, "*");
  })
  api.on(DOCS_RENDERED, story => {
    document.title = document.title.replace('Storybook', 'Collabur DS');
  })
})