# cds-carousel



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                   | Description                                                                                   | Type                                                      | Default           |
| ----------------------- | --------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------------- |
| `carouselType`          | `carousel-type`             | 'default'                                                                                     | `"default" \| "fixed-width" \| "on-boarding" \| "slider"` | `'default'`       |
| `fixedWidthPixels`      | `fixed-width-pixels`        | Fixes width of slide to pixels Used to customise the width of the  'offer-card' type carousel | `number`                                                  | `undefined`       |
| `gradientColourRgb`     | `gradient-colour-rgb`       | Gradient colour (as rgb values eg '255, 255, 255')                                            | `string`                                                  | `'255, 255, 255'` |
| `heading`               | `heading`                   | Heading that sits on top of carousel                                                          | `string`                                                  | `''`              |
| `hidePaginationMobile`  | `hide-pagination-mobile`    | Hide pagination on mobiles                                                                    | `boolean`                                                 | `false`           |
| `hidePrevNextForMobile` | `hide-prev-next-for-mobile` | Hide prev/next buttons for mobile devies                                                      | `boolean`                                                 | `undefined`       |
| `scrollerPaddingBottom` | `scroller-padding-bottom`   | Padding bottom on carousel scroller                                                           | `string`                                                  | `undefined`       |
| `showDismiss`           | `show-dismiss`              | Show dismiss link                                                                             | `boolean`                                                 | `false`           |
| `showPagination`        | `show-pagination`           | Show pagination                                                                               | `boolean`                                                 | `false`           |
| `showPrevNext`          | `show-prev-next`            | Show prev and next buttons                                                                    | `boolean`                                                 | `false`           |
| `showPrevNextGradient`  | `show-prev-next-gradient`   | Show gradient under previous / next buttons                                                   | `boolean`                                                 | `undefined`       |
| `slides`                | `slides`                    | Slides (only applicable for on-boarding and slider carousel types)                            | `string`                                                  | `''`              |


## Events

| Event              | Description                            | Type               |
| ------------------ | -------------------------------------- | ------------------ |
| `afterSlideScroll` | Triggered at the end of gallery        | `CustomEvent<any>` |
| `dismissSlider`    | Triggers when dismiss is clicked       | `CustomEvent<any>` |
| `slideCtaClick`    | Triggers when cta on slide is clicked. | `CustomEvent<any>` |


## Slots

| Slot | Description   |
| ---- | ------------- |
|      | Slide Content |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
