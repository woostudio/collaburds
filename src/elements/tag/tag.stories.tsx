import centered from '@storybook/addon-centered/html';
import { storiesOf } from '@storybook/html';
import { select, text, boolean } from '@storybook/addon-knobs';
import notes from './readme.md';
import { colorsOption } from '../../core/common';

const sizes = {
  normal: 'normal',
  medium: 'medium',
  large: 'large',
  none: undefined,
};

const modifiers = {
  rounded: 'rounded',
  delete: 'delete',
  none: undefined,
};

storiesOf('Elements|Tag', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <cds-tag
        color="${select('Color', colorsOption, 'primary')}"
        size="${select('Size', sizes, null)}"
        tag="${text('Tag', 'a')}"
        modifier="${select('Modifier', modifiers, null)}"
      >
        Tag
      </cds-tag>
    `;
  })
  .add('Colors', () => {
    return `
      <cds-tags>
        <cds-tag
          color="black"
        >
          Black
        </cds-tag>
        <cds-tag
          color="dark"
        >
          Dark
        </cds-tag>
        <cds-tag
          color="light"
        >
          Light
        </cds-tag>
        <cds-tag
          color="white"
        >
          White
        </cds-tag>
        <cds-tag
          color="primary"
        >
          Primary
        </cds-tag>
        <cds-tag
          color="link"
        >
          Link
        </cds-tag>
        <cds-tag
          color="info"
        >
          Info
        </cds-tag>
        <cds-tag
          color="success"
        >
          Success
        </cds-tag>
        <cds-tag
          color="warning"
        >
          Warning
        </cds-tag>
        <cds-tag
          color="danger"
        >
          Danger
        </cds-tag>
      </cds-tags>
    `;
  })
  .add('Sizes', () => {
    return `
      <cds-tags>
        <cds-tag color="link" size="normal">
          Normal
        </cds-tag>
        <cds-tag color="primary" size="medium">
          Medium
        </cds-tag>
        <cds-tag
          color="info"
          size="large"
        >
          Large
        </cds-tag>
      </cds-tags>
    `;
  })
  .add('Other', () => {
    return `
      <cds-tags>
        <cds-tag color="link" size="normal" rounded>
          Rounded
        </cds-tag>
        <cds-tag tag="a" href="https://www.google.com.au" color="primary" light>
          Link tag
        </cds-tag>
      </cds-tags>
    `;
  })
  .add('Add-ons', () => {
    return `
      <cds-tags
        size="${select('Size', sizes, null)}"
        has-addons="${boolean('Has addons', true)}">
        <cds-tag color="primary">
          Primary
        </cds-tag>
        <cds-tag tag="a" delete>
        </cds-tag>
      </cds-tags>
    `;
  });
