// import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { boolean, select } from '@storybook/addon-knobs';
import { Tabs } from './tabs';

const alignments: { [key: string]: Tabs['align'] } = {
  Centered: 'centered',
  Right: 'right',
  none: undefined,
};

const sizes = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
  none: undefined,
};

const styles = {
  Boxed: 'boxed',
  Toggle: 'toggle',
  none: undefined,
};

storiesOf('Components|Tabs', module)
  // .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <cds-section>
        <cds-container>
          <cds-tabs
            rounded="${boolean('Rounded', false)}
            fullwidth="${boolean('Fullwidth', false)}""
            tab-style="${select('Style', styles, null)}"
            align="${select('Alignment', alignments, null)}"
            size="${select('Size', sizes, null)}"
          >
            <ul>
              <li class="is-active">
                <a>Pictures</a>
              </li>
              <li>
                <a>Music</a>
              </li>
              <li>
                <a>Videos</a>
              </li>
              <li>
                <a>Documents</a>
              </li>
            </ul>
          </cds-tabs>
        </cds-container>
      </cds-section>
    `;
  });
