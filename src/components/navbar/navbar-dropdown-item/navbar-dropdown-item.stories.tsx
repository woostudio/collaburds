import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import centered from '@storybook/addon-centered/html';
import { text, select } from '@storybook/addon-knobs';
import { iconList, colorsOption } from '../../../core/common';

storiesOf('Components|Navbar', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Dropdown Item', () => {
    return `
      <div style="width: 400px; max-width: 95vw">
        <cds-navbar>
          <cds-navbar-dropdown-item
            heading="${text('Heading', 'Navbar Item')}"
            description="${text(
              'Description',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            )}"
            link="${text('Link', '#')}"
            icon="${select('Icon', ['', ...iconList], 'check-circle')}"
            icon-color="${select('Icon Color', colorsOption, 'secondary')}"
            icon-background-style="${select(
              'Icon Background',
              ['transparent', 'solid', 'light'],
              'solid'
            )}"
            layout="${select('Layout', ['horizontal', 'stack'], 'horizontal')}"
          >
          </cds-navbar-dropdown-item>
        </cds-navbar>
      </div>
    `;
  })
  .add('Dropdown Item Examples', () => {
    return `
    <div class="pt-5"></div>
      <div style="width: 400px; max-width: 95vw">
        <cds-navbar>
          <cds-navbar-dropdown-item
            heading="Nav Item Simple"
            link="#"
          >
          </cds-navbar-dropdown-item>
        </cds-navbar>

        <div class="pt-3"></div>

        <cds-navbar>
          <cds-navbar-dropdown-item
            heading="Navbar Item With Description"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="#"
          >
          </cds-navbar-dropdown-item>
        </cds-navbar>

        
        <div class="pt-3"></div>

        <cds-navbar>
          <cds-navbar-dropdown-item
            heading="Navbar Item With Icon"
            link="#"
            icon="check-circle"
            icon-color="dark"
          >
          </cds-navbar-dropdown-item>
        </cds-navbar>

        <div class="pt-3"></div>

        <cds-navbar>
          <cds-navbar-dropdown-item
            heading="Navbar Item Full"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="#"
            icon="check-circle"
            icon-color="secondary"
          >
          </cds-navbar-dropdown-item>
        </cds-navbar>

        <div class="pt-3"></div>

        <cds-navbar>
          <cds-navbar-dropdown-item
            heading="Navbar Item Full"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="#"
            icon="check-circle"
            icon-color="secondary"
            icon-background-style="solid"
            layout="horizontal"
          >
          <a href="#">Learn more </a>
          </cds-navbar-dropdown-item>
        </cds-navbar>

        <div class="pt-3"></div>

        <cds-navbar>
          <cds-navbar-dropdown-item
            heading="Navbar Item Stack"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="#"
            icon="check-circle"
            icon-color="secondary"
            icon-background-style="solid"
            layout="stack"
          >
          <a href="#">Learn more </a>
          </cds-navbar-dropdown-item>
        </cds-navbar>

      </div>
      
    <div class="pt-5"></div>
    `;
  });
