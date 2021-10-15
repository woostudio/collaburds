import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { select, text } from '@storybook/addon-knobs';
import { imageRatioOption, imageSizesOption } from '../../core/common';

storiesOf('Elements|Image', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Sizes', () => {
    return `
      <cds-image
        class="${text('Class', '')}"
        size="${select('Size', imageSizesOption, '128x128')}"
        ratio="${select('Ratio', imageRatioOption, '128x128')}"
      >
        <img src="https://bulma.io/images/placeholders/128x128.png" />
      </cds-image>
    `;
  });
