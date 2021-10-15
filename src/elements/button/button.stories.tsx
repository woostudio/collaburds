import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { select, boolean, text } from '@storybook/addon-knobs';
import { Button } from './button';
import { buttonColorsOption } from '../../core/common';

const sizes: { [key: string]: Button['size'] } = {
  small: 'small',
  normal: 'normal',
  medium: 'medium',
  large: 'large',
  none: undefined,
};

storiesOf('Elements|Button', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return `
    <div style="width: 400px; max-width: 90vh;">
        <cds-button
          tag="${select('Tag', ['a', 'button', 'input'], 'button')}"
          type="${select('Type', ['submit', 'reset', 'button'], 'button')}"
          class="${text('Custom class', '')}"
          href="${text('Link', '')}"
          size="${select('Size', sizes, null)}"
          color="${select('Color', buttonColorsOption, 'primary')}"
          disabled="${boolean('Disabled', false)}"
          fullwidth="${boolean('Full Width', false)}"
          outlined="${boolean('Outlined', false)}"
          light="${boolean('Light', false)}"
          inverted="${boolean('Inverted', false)}"
          rounded="${boolean('Rounded', false)}"
          hovered="${boolean('Hovered', false)}"
          focused="${boolean('Focused', false)}"
          active="${boolean('Active', false)}"
          loading="${boolean('Loading', false)}"
        >
          Button
        </cds-button>
      </div>
    `;
  })
  .add('Icon Begin', () => {
    return `
    <cds-button
      color="primary"
    >
      <cds-icon icon="check-circle"></cds-icon>
      <span>Button</span>
    </cds-button>
    `;
  })
  .add('Icon End', () => {
    return `
    <cds-button
      color="primary"
    >
      <span>Button</span>
      <cds-icon icon="chevron-right"></cds-icon>
    </cds-button>
    `;
  });
