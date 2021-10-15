import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text, optionsKnob as options, boolean } from '@storybook/addon-knobs';
import moment from 'moment';

const inputStatuses = {
  Success: 'success',
  Warning: 'danger',
};

const inputSizes = {
  Small: 'small',
  Normal: 'normal',
  Medium: 'medium',
  Large: 'large',
};

storiesOf('Components|Calendar', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Calendar Input', () => {
    return `
      <cds-calendar-input
        format="${text('Format', 'DD/MM/YYYY')}"
        value="${text('Value', moment().format('DD/MM/YYYY'))}"
        input-id="startDate"
        label="${text('Label', 'Start Date')}"
        placeholder="${text('Placeholder', 'Select Date')}"
        message="${text('Message', '')}"
        input-status="${options('Status', inputStatuses, '', { display: 'inline-radio' })}"
        size="${options('Size', inputSizes, '', { display: 'inline-radio' })}"
        loading="${boolean('Loading', false)}"
        static="${boolean('Is static', false)}"
        rounded="${boolean('Rounded', false)}"
        disabled="${boolean('Disabled', false)}"
        readonly="${boolean('Read only', false)}"
      >
      </cds-calendar-input>
    `;
  })
  .add('Calendar with Custom Trigger', () => {
    return `
    <cds-calendar
      format="${text('Format', 'DD/MM/YYYY')}"
      value="${text("Value", moment().format('DD/MM/YYYY'))}"
    >
      <cds-button color="primary">
        <cds-icon icon="calendar"></cds-icon>
        <span>Calendar</span>
      </cds-button>

    </cds-calendar>
  `;
  });
