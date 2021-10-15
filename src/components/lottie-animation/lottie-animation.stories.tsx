import { storiesOf } from '@storybook/html';
import notes from './readme.md';
import { text, boolean } from '@storybook/addon-knobs';

storiesOf('Components|Lottie Animation', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Default', () => {
    return `
      <cds-lottie-animation
        animation-path="${text('Animation Path', './assets/data/wapple-data.json')}"
        width="${text('Width', '200px')}"
        height="${text('Height', '200px')}"
        loop="${boolean('Loop', true)}"
        autoplay="${boolean('Autoplay', true)}"
      ></cds-lottie-animation>
    `;
  });
