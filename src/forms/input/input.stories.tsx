import { text, object, optionsKnob as options, boolean } from '@storybook/addon-knobs';
import notes from './readme.md';

const inputStatuses = {
  Success: 'success',
  Warning: 'danger',
};

const inputTypes = {
  Text: 'text',
  Number: 'number',
  Email: 'email',
  Password: 'password',
  Date: 'date',
};

const inputSizes = {
  Small: 'small',
  Normal: 'normal',
  Medium: 'medium',
  Large: 'large',
};

export default {
  title: 'Form|Input text',
};

export const story1 = () => {
  return `
    <cds-input
      input-id="firstName"
      label="${text('Label', 'First name')}"
      placeholder="${text('Placeholder', 'Please enter first name')}"
      message="${text('Message', '')}"
      input-status="${options('Status', inputStatuses, '', { display: 'inline-radio' })}"
      type="${options('Type', inputTypes, '', { display: 'inline-radio' })}"
      size="${options('Size', inputSizes, '', { display: 'inline-radio' })}"
      loading="${boolean('Loading', false)}"
      static="${boolean('Is static', false)}"
      rounded="${boolean('Rounded', false)}"
      disabled="${boolean('Disabled', false)}"
      readonly="${boolean('Read only', false)}"
      >
    </cds-input>
    `;
};
story1.story = {
  name: 'Example',
  parameters: {
    notes: notes,
  },
};

export const story2 = () => {
  return `
      <cds-input
      input-id="Address"
      label="Address"
      placeholder="Please enter address"
      message="No PO boxes"
      ></cds-input>
    `;
};
story2.story = {
  name: 'Help message',
  parameters: {
    notes: notes,
  },
};

export const story3 = () => {
  return `
  <cds-input
  inputId="email"
  label="Email"
  type="email"
  placeholder="Please enter email"
  message="Email already taken"
  input-status="danger"
  ></cds-input>
    `;
};
story3.story = {
  name: 'Error message',
  parameters: {
    notes: notes,
  },
};

export const story4 = () => {
  return `
  <cds-input
  inputId="username"
  label="Username"
  type="email"
  message="This username is available"
  input-status="success"
  ></cds-input>
    `;
};

story4.story = {
  name: 'Success message',
  parameters: {
    notes: notes,
  },
};

const inputAttributes = {
  type: 'text',
  color: 'red',
};

export const story9 = () => {
  const listBlock: any = document.createElement('cds-input');

  listBlock.label = text('Label', 'First name');
  listBlock.inputAttributes = object('Input attributes', inputAttributes);
  listBlock.type = 'email';
  return listBlock;
};
story9.story = {
  name: 'Custom attributes',
  parameters: {
    notes: notes,
  },
};
