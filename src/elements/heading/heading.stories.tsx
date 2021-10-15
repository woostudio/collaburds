import { storiesOf } from '@storybook/html';
import { select, text, boolean } from '@storybook/addon-knobs';
import notes from './readme.md';
import {
  textColorsOption,
  textAlignmentsOption,
  textTransformationsOption,
  textFontFamiliesOption,
} from '../../core/common';

storiesOf('Elements|Heading', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Default', () => {
    return `<cds-heading 
    class="${text('Class', '')}"
    size="${select('Size', ['1', '2', '3', '4', '5', '6'], '6')}"
    subtitle="${boolean('Is Subtitle', false)}"
    color="${select('Color', ['', ...textColorsOption], '')}"
    align="${select('Alignment', ['', ...textAlignmentsOption], '')}"
    transform="${select('Transform', ['', ...textTransformationsOption], '')}"
    font-family="${select('Font Family', ['', ...textFontFamiliesOption], '')}"
    no-margin="${boolean('Is No Margin', false)}"
    >
    ${text('Text', 'Collabur Design System')}
    </cds-heading>`;
  });
