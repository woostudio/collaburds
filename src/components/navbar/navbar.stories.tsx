import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { select, boolean, text } from '@storybook/addon-knobs';
import { colorsOption } from '../../core/common';
import centered from '@storybook/addon-centered/html';

storiesOf('Components|Navbar', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Navbar', () => {
    return `
  <div style="width:100%;">
    <cds-navbar color="${select('Color', ['', ...colorsOption], null)}"
    spaced="${boolean('Spaced', false)}"
    transparent="${boolean('Transparent', false)}"
    fixed-position="${select(
      'Fixed position',
      {
        top: 'is-fixed-top',
        bottom: 'is-fixed-bottom',
        'Not fixed': null,
      },
      null
    )}" logo-image="${text('Logo Image', '/assets/images/logo.svg')}" logo-link="${text(
      'Logo Link',
      '/'
    )}">
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>

        <a class="navbar-item">
          Doc
        </a>
  
        <cds-navbar-dropdown position="center" heading="Normal">
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


        <cds-navbar-dropdown position="center" heading="Large" size="large">
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
  
        
        <cds-navbar-dropdown position="center" heading="Full Width" size="fullwidth">
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
      </div>
      <div class="navbar-end">
          <div class="navbar-item">
            <cds-buttons>
              <cds-button color="primary">Log in</cds-button>
              <cds-button color="light">Sign up</cds-button>
            </cds-buttons>
          </div>
        </div>
    </div>
  </cds-navbar>
    <cds-content>
      <cds-heading size="6">Lorem ipsum dolor sit amet</cds-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.</p>
      <cds-heading size="6">Lorem ipsum dolor sit amet</cds-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.</p>
      <cds-heading size="6">Lorem ipsum dolor sit amet</cds-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.</p>
      <cds-heading size="6">Lorem ipsum dolor sit amet</cds-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.</p>
      <cds-heading size="6">Lorem ipsum dolor sit amet</cds-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.</p>
      <cds-heading size="6">Lorem ipsum dolor sit amet</cds-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.</p>
    </cds-content>
  </div>
  `;
  })
  .add('Navbar With Custom Ipad Content', () => {
    return `
  <div style="width:100%;">
    <cds-navbar color="${select('Color', ['', ...colorsOption], null)}"
    spaced="${boolean('Spaced', false)}"
    transparent="${boolean('Transparent', false)}"
    fixed-position="${select(
      'Fixed position',
      {
        top: 'is-fixed-top',
        bottom: 'is-fixed-bottom',
        'Not fixed': null,
      },
      null
    )}" logo-image="${text('Logo Image', '/assets/images/logo.svg')}" logo-link="${text(
      'Logo Link',
      '/'
    )}">

    <div class="navbar-menu is-hidden-touch">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>

        <a class="navbar-item">
          Doc
        </a>
  
        <cds-navbar-dropdown position="center" heading="Normal">
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


        <cds-navbar-dropdown position="center" heading="Large" size="large">
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
  
        
        <cds-navbar-dropdown position="center" heading="Full Width" size="fullwidth">
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

      </div>
      
      <div class="navbar-end">
        <div class="navbar-item">
          <cds-buttons>
            <cds-button color="primary">Log in</cds-button>
            <cds-button color="light">Sign up</cds-button>
          </cds-buttons>
        </div>
      </div>
    </div>

    <div class="navbar-menu is-hidden-desktop">
      <div class="navbar-start">
        <cds-navbar-dropdown-item
          heading="Navbar Item"
          link="#"
          icon="check-circle"
          icon-color="secondary"
        >
        </cds-navbar-dropdown-item>
        <div class="pt-3"></div>
        <cds-navbar-dropdown-item
          heading="Navbar Item"
          link="#"
          icon="check-circle"
          icon-color="secondary"
          icon-background-style="light"
        >
        </cds-navbar-dropdown-item>
        <div class="pt-3"></div>
        <cds-navbar-dropdown-item
          heading="Navbar Item"
          link="#"
          icon="check-circle"
          icon-color="secondary"
          icon-background-style="solid"
        >
        </cds-navbar-dropdown-item>
        <div class="pt-3"></div>
        <cds-navbar-dropdown-item
          heading="Navbar Item"
          link="#"
        >
        </cds-navbar-dropdown-item>

      </div>
      
      <div class="navbar-end">
        <hr/>
        <cds-columns mobile="true">
          <cds-column>
            <a class="navbar-item">Other Nav Item</a>
          </cds-column>
          <cds-column>
            <a class="navbar-item">Other Nav Item</a>
          </cds-column>
        </cds-columns>
        <cds-columns mobile="true">
          <cds-column>
            <a class="navbar-item">Other Nav Item</a>
          </cds-column>
          <cds-column>
            <a class="navbar-item">Other Nav Item</a>
          </cds-column>
        </cds-columns>
        
        <cds-columns mobile="true">
          <cds-column>
            <cds-button class="navbar-item" fullwidth="true" color="primary">Log in</cds-button>
          </cds-column>
          <cds-column>
            <cds-button class="navbar-item" fullwidth="true" color="light">Sign up</cds-button>
          </cds-column>
        </cds-columns>
      </div>
    </div>
  </cds-navbar>
    <cds-content>
      <cds-heading size="6">Lorem ipsum dolor sit amet</cds-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.</p>
      <cds-heading size="6">Lorem ipsum dolor sit amet</cds-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.</p>
      <cds-heading size="6">Lorem ipsum dolor sit amet</cds-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.</p>
      <cds-heading size="6">Lorem ipsum dolor sit amet</cds-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.</p>
      <cds-heading size="6">Lorem ipsum dolor sit amet</cds-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.</p>
      <cds-heading size="6">Lorem ipsum dolor sit amet</cds-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.</p>
    </cds-content>
  </div>
  `;
  });
