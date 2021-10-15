import { newSpecPage } from '@stencil/core/testing';
import { Dropdown } from '../dropdown';
import { Button } from '../../../elements/button/button';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Dropdown, Button],
    html: `
      <cds-dropdown>
        <cds-button slot="trigger">Trigger</cds-button>

        <a href="#" class="dropdown-item">
          Dropdown item
        </a>
      </cds-dropdown>
    `,
  });

  expect(page.root).toEqualHtml(`
    <cds-dropdown>
      <div class="dropdown">
        <div class="dropdown-trigger">
          <cds-button slot="trigger">
            <button class="button">
              Trigger
            </button>
          </cds-button>
        </div>

        <div class="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item">
              Dropdown item
            </a>
          </div>
        </div>
      </div>
    </cds-dropdown>
  `);
});
