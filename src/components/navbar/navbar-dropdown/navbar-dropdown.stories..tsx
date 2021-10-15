import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text, select, boolean } from '@storybook/addon-knobs';
// import { iconList, colorsOption } from '../../../core/common';

storiesOf('Components|Navbar', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Navbar Item With Dropdown', () => {
    return `
<cds-navbar>
  <cds-navbar-dropdown heading="${text('Heading', 'Navbar Item')}"
    size="${select('Size', ['normal', 'large', 'fullwidth'], 'normal')}"
    position="${select('Position', ['left', 'right', 'center'], 'left')}"
    hoverable="${boolean('Hoverable', false)}"
    active="${boolean('Active', false)}">
      <cds-navbar-dropdown-item
            heading="Navbar Item Full"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="#"
            icon="check-circle"
            icon-color="secondary"
          >
      </cds-navbar-dropdown-item>
      <div class="pt-3"></div>
      <cds-navbar-dropdown-item
            heading="Navbar Item Full"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="#"
            icon="check-circle"
            icon-color="secondary"
          >
      </cds-navbar-dropdown-item>
      <div class="pt-3"></div>
      <cds-navbar-dropdown-item
            heading="Navbar Item Full"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="#"
            icon="check-circle"
            icon-color="secondary"
          >
      </cds-navbar-dropdown-item>
    </cds-navbar-dropdown>
</cds-navbar>

<div style="height: 5rem;"></div>
`;
  })
  .add('Navbar Item With Dropdown Examples', () => {
    return `
<cds-navbar>
  <cds-navbar-dropdown position="center" heading="Navbar Item">
    <cds-navbar-dropdown-item heading="Navbar Item Full" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      link="#" icon="check-circle" icon-color="secondary">
    </cds-navbar-dropdown-item>

    <div class="pt-3"></div>
    <cds-navbar-dropdown-item heading="Navbar Item Full" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      link="#" icon="check-circle" icon-color="secondary">
    </cds-navbar-dropdown-item>

    <div class="pt-3"></div>
    <cds-navbar-dropdown-item heading="Navbar Item Full" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      link="#" icon="check-circle" icon-color="secondary">
    </cds-navbar-dropdown-item>
    <div class="pt-3"></div>
    <cds-navbar-dropdown-item heading="Navbar Item Full" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      link="#" icon="check-circle" icon-color="secondary">
    </cds-navbar-dropdown-item>
  </cds-navbar-dropdown>


  <cds-navbar-dropdown position="center" heading="Navbar Item large" size="large">
    <cds-columns>
      <cds-column>
        <div>
          <cds-navbar-dropdown-item heading="Navbar Item Full"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." link="#" icon="check-circle"
            icon-color="secondary">
          </cds-navbar-dropdown-item>

          <div class="pt-3"></div>
          <cds-navbar-dropdown-item heading="Navbar Item Full"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." link="#" icon="check-circle"
            icon-color="secondary">
          </cds-navbar-dropdown-item>
        </div>
      </cds-column>
      <cds-column>
        <div>
          <cds-navbar-dropdown-item heading="Navbar Item Full"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." link="#" icon="check-circle"
            icon-color="secondary">
          </cds-navbar-dropdown-item>
          <div class="pt-3"></div>
          <cds-navbar-dropdown-item heading="Navbar Item Full"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." link="#" icon="check-circle"
            icon-color="secondary">
          </cds-navbar-dropdown-item>
        </div>
      </cds-column>
    </cds-columns>
  </cds-navbar-dropdown>


  <cds-navbar-dropdown position="center" heading="Navbar Item fullwidth" size="fullwidth">
    <cds-columns>
      <cds-column>
        <cds-navbar-dropdown-item heading="Navbar Item Full"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." link="#" icon="check-circle"
          icon-color="secondary">
        </cds-navbar-dropdown-item>
      </cds-column>
      <cds-column>
        <cds-navbar-dropdown-item heading="Navbar Item Full"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." link="#" icon="check-circle"
          icon-color="secondary">
        </cds-navbar-dropdown-item>
      </cds-column>
      <cds-column>
        <cds-navbar-dropdown-item heading="Navbar Item Full"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." link="#" icon="check-circle"
          icon-color="secondary">
        </cds-navbar-dropdown-item>
      </cds-column>
      <cds-column>
        <cds-navbar-dropdown-item heading="Navbar Item Full"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." link="#" icon="check-circle"
          icon-color="secondary">
        </cds-navbar-dropdown-item>
      </cds-column>
    </cds-columns>
  </cds-navbar-dropdown>
</cds-navbar>

<div style="height: 3rem;"></div>
`;
  });
