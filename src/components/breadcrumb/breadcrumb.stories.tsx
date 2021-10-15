import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

const separators = {
  'has-arrow-separator': 'has-arrow-separator',
  'has-bullet-separator': 'has-bullet-separator',
  'has-dot-separator': 'has-dot-separator',
  'has-succeeds-separator': 'has-succeeds-separator',
  none: undefined,
};

const sizes = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
  none: undefined,
};

storiesOf('Components|Breadcrumb', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <cds-section>
        <cds-container>
          <cds-breadcrumb
            align="${select(
              'Align',
              { centered: 'centered', right: 'right', 'Not set': null },
              null
            )}"
            separator="${select('Separator', separators, null)}"
            size="${select('Size', sizes, null)}"
          >
            <ul>
              <li><a href="#">Collabur</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Components</a></li>
              <li class="active"><a href="#" aria-current="page">Breadcrumb</a></li>
            </ul>
          </cds-breadcrumb>
        </cds-container>
      </cds-section>
    `;
  });
