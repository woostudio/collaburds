import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { boolean, text, select } from '@storybook/addon-knobs';
import { iconList, colorsOption } from '../../../core/common';

storiesOf('Components|Feature', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Feature Item', () => {
    return `
    <div style="width:480px;">
      <cds-feature-item
        class="${text('Class', '')}"
        heading="${text('Heading', 'Transfers are instant')}" 
        description="${text(
          'Description',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.'
        )}"
        icon="${select('icon', ['', ...iconList], 'check')}"
        icon-size="${select('Icon Size', ['', 'small', 'medium', 'large'], '')}"
        icon-color="${select('Icon Color', colorsOption, 'secondary')}"
        icon-with-background="${boolean('Is Icon Background', true)}"
        icon-inverted="${boolean('Icon Inverted', false)}"
        icon-outlined="${boolean('Icon Outlined', false)}"
        icon-light="${boolean('Icon Light', false)}"
        layout="${select('Layout', ['stack', 'stack-center', 'horizontal'], 'horizontal')}"
      >

      </cds-feature-item>
    </div>
    `;
  });
