import { boolean, radios } from '@storybook/addon-knobs';
import notes from './readme.md';

export default {
  title: 'Components|Accordion',
};

export const story2 = () => {
  return `
    <cds-accordion
      icon-align="${radios('Icon alignment', { Left: 'left', Right: 'right' }, 'right')}"
      open-multiple-items="${boolean('Open multiple items', false)}">
      <cds-accordion-item drawer-title="Title one for accordion">
        Here is some content for the accordion.
      </cds-accordion-item>
      <cds-accordion-item drawer-title="Title two for accordion">
        Here is some content for the accordion. <a href="http://google.com">Link</a>
      </cds-accordion-item>
      <cds-accordion-item drawer-title="Title three for accordion">
        Here is some content for the accordion. <cds-button color="primary">Button</cds-button>
      </cds-accordion-item>
    </cds-accordion>
  `;
};

story2.story = {
  name: 'Example',
  parameters: {
    notes: notes,
  },
};
