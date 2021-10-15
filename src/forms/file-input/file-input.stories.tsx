import { boolean, text } from '@storybook/addon-knobs';
import notes from './readme.md';

export default {
  title: 'Form|Input file',
};

export const story1 = () => {
  return `
    <cds-file-input 
       input-id="testId" 
       accept="${text('Accept', 'image/png, image/jpeg')}"
       multiple="${boolean('Multiple', true)}"
       add-button-label="${text('Add button label', 'Add files')}"
       add-button-class="${text('Add button class', 'is-primary')}"
       icon="${text('Add button icon', 'upload-cloud')}"
       label-title="${text('Label title', 'Upload')}"
       label-description="${text('Label description', 'Choose images to upload (PNG, JPG)')}"
       >       
    </cds-file-input>`;
};

story1.story = {
  name: 'Styled standard file input',
  parameters: {
    notes: notes,
  },
};

export const story2 = () => {
  return `
    <cds-file-input 
       drag-drop="true"
       input-id="testId" 
       icon="${text('Add button icon', 'upload-cloud')}"
       >       
    </cds-file-input>`;
};

story2.story = {
  name: 'Drop zone populating input field',
  parameters: {
    notes: notes,
  },
};
