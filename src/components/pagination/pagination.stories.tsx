import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { boolean, select } from '@storybook/addon-knobs';
import { Pagination } from './pagination';

const alignments: { [key: string]: Pagination['align'] } = {
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

storiesOf('Components|Pagination', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <cds-section>
        <cds-container>
          <cds-pagination
            rounded="${boolean('Rounded', false)}"
            align="${select('Align', alignments, null)}"
            size="${select('Size', sizes, null)}"
          >
            <a class="pagination-previous">Previous</a>
            <a class="pagination-next">Next page</a>
            <ul class="pagination-list">
              <li>
                <a class="pagination-link" aria-label="Goto page 1">1</a>
              </li>
              <li>
                <span class="pagination-ellipsis">&hellip;</span>
              </li>
              <li>
                <a class="pagination-link" aria-label="Goto page 45">45</a>
              </li>
              <li>
                <a class="pagination-link is-current" aria-label="Page 46" aria-current="page"
                  >46</a
                >
              </li>
              <li>
                <a class="pagination-link" aria-label="Goto page 47">47</a>
              </li>
              <li>
                <span class="pagination-ellipsis">&hellip;</span>
              </li>
              <li>
                <a class="pagination-link" aria-label="Goto page 86">86</a>
              </li>
            </ul>
          </cds-pagination>
        </cds-container>
      </cds-section>
    `;
  });
