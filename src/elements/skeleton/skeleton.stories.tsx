import { storiesOf } from '@storybook/html';
import { text, number, boolean } from '@storybook/addon-knobs';
import notes from './readme.md';

storiesOf('Components|Skeleton', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return `
      <cds-skeleton
        count="${number('Skeleton element repeat count', 3)}"
        duration="${number('Animation duration', 1.2)}"
        width="${text('Width', '')}"
        height="${text('Height', '')}"
        circle="${boolean('Display as a circle', false)}"
        squared="${boolean('Display squared', false)}"
        color="${text('Base color', '')}"
        highlight-color="${text('Highlight color', '')}"
      ></cds-skeleton>
    `;
  });
