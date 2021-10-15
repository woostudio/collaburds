import { storiesOf } from '@storybook/html';
import centered from '@storybook/addon-centered/html';
import { text, number } from '@storybook/addon-knobs';
import notes from './readme.md';

storiesOf('Form|Range', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Default', () => {
    return `
    <div style="width: 400px">
      <cds-range
        label="${text('Label', 'Range Slider')}"
        min="${number('Min', 0)}"
        max="${number('Max', 100)}"
        value="${number('Value', 10)}"
        step="${number('Step', 1)}"
      >
      </cds-range>
    </div>
  `;
  });
