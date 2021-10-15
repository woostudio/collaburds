import { storiesOf } from '@storybook/html';
import centered from '@storybook/addon-centered/html';
import { boolean, text, select } from '@storybook/addon-knobs';
import notes from './readme.md';

const sizes = {
  normal: '',
  small: 'small',
  medium: 'medium',
  large: 'large',
};

storiesOf('Form|Switch', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Default', () => {
    return `
      <cds-switch 
        checked="${boolean('Switch is checked', false)}"
        disabled="${boolean('Switch is disabled', false)}"
        switch-id="${text('Unique id of the switch', 'switchId')}"
        outlined="${boolean('Switch is outlined', false)}"
        size="${select('Size', sizes, 'normal')}"
      >${text('Label', 'Toggle me')}
      </cds-switch>

`;
  });
