import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text, boolean, select } from "@storybook/addon-knobs";
import { columnGapOption } from "../../core/common";

storiesOf('Grid|Columns', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Basics', () => {
    return `
      <cds-columns
      class="${text('Class', '')}"
      centered="${boolean('centered', false)}"
      mobile="${boolean('mobile', false)}"
      desktop="${boolean('desktop', false)}"
      multiline="${boolean('multiline', false)}"
      gapless="${boolean('gapless', false)}"
      vcentered="${boolean('vcentered', false)}"
      gaps="${select('gaps', columnGapOption, '3')}"
      >
        <cds-column>
          First column
        </cds-column>
        <cds-column>
          Second column
        </cds-column>
        <cds-column>
          Third column
        </cds-column>
        <cds-column>
          Fourth column
        </cds-column>
      </cds-columns>
    `;
  });
