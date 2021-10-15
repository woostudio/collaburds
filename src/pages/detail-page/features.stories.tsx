import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { LinksProp, SocialLinkProp } from '../../layout/footer/footer';

const Links: LinksProp = [
  {
    text: 'Products',
    links: [
      {
        text: 'Link 1',
        link: 'http://example.com',
      },
      {
        text: 'Link 2',
        link: 'http://example.com',
      },
      {
        text: 'Link 3',
        link: 'http://example.com',
      },
      {
        text: 'Link 4',
        link: 'http://example.com',
      },
    ],
  },
  {
    text: 'Services',
    links: [
      {
        text: 'Link 1',
        link: 'http://example.com',
      },
      {
        text: 'Link 2',
        link: 'http://example.com',
      },
      {
        text: 'Link 3',
        link: 'http://example.com',
      },
      {
        text: 'Link 4',
        link: 'http://example.com',
      },
    ],
  },
  {
    text: 'Company',
    links: [
      {
        text: 'Link 1',
        link: 'http://example.com',
      },
      {
        text: 'Link 2',
        link: 'http://example.com',
      },
      {
        text: 'Link 3',
        link: 'http://example.com',
      },
      {
        text: 'Link 4',
        link: 'http://example.com',
      },
      {
        text: 'Link 5',
        link: 'http://example.com',
      },
    ],
  },
  {
    text: 'Support',
    links: [
      {
        text: 'Link 1',
        link: 'http://example.com',
      },
      {
        text: 'Link 2',
        link: 'http://example.com',
      },
      {
        text: 'Link 3',
        link: 'http://example.com',
      },
    ],
  },
];

const socialLinks: SocialLinkProp = [
  {
    icon: 'facebook',
    link: 'http://example.com',
  },
  {
    icon: 'instagram',
    link: 'http://example.com',
  },
  {
    icon: 'twitter',
    link: 'http://example.com',
  },
  {
    icon: 'github',
    link: 'http://example.com',
  },
];
storiesOf('Pages|Detail Page', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Features', () => {
    const wrapper = document.createElement('div');

    // ## NAVBAR
    wrapper.innerHTML = `
      <style type="text/css">
        body {
          margin: 0!important;
          padding: 0!important;
          padding-top: 3.25rem!important;
        }
      </style>
   

      <cds-navbar color="secondary" fixed-position="is-fixed-top"
        logo-image="/assets/images/logo.svg" logo-link="/">
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
    `;

    // ## HERO
    const hero: any = document.createElement('cds-hero');
    hero.heading = 'Features';
    hero.headingColor = 'white';
    hero.copy =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.';
    hero.copyColor = 'grey-light';
    hero.image = '/assets/images/news-image-example.jpg';
    hero.overlay = 'darken-medium';
    wrapper.append(hero);

    // ## Partner
    let section: any = document.createElement('cds-section');
    section.light = true;
    section.size = 'is-small';
    section.innerHTML = `
      <cds-columns gaps="5" is-centered="true">
        <cds-column narrow="true">
          <cds-image size="64x64">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </cds-image>
        </cds-column>
        <cds-column narrow="true">
          <cds-image size="64x64">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </cds-image>
        </cds-column>
        <cds-column narrow="true">
          <cds-image size="64x64">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </cds-image>
        </cds-column>
        <cds-column narrow="true">
          <cds-image size="64x64">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </cds-image>
        </cds-column>
        <cds-column narrow="true">
          <cds-image size="64x64">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </cds-image>
        </cds-column>
        <cds-column narrow="true">
          <cds-image size="64x64">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </cds-image>
        </cds-column>
      </cds-columns>
    `;
    wrapper.append(section);

    // ## Container
    let container = document.createElement('cds-container');

    // ## Main Features
    container.innerHTML += `
    <cds-section>
      <cds-feature-header size="medium">
        <cds-heading slot="heading" size="4">Main Features</cds-heading>
        <p slot="description" class="has-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </cds-feature-header>
      <div class="pt-8"></div>
      <cds-grid columns="3">
      <cds-grid-item>
        <cds-feature-item
          heading="Feature Item" 
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
          icon="list"
          icon-color="info"
          icon-with-background="true"
          >
        </cds-feature-item>
        </cds-grid-item>
        <cds-grid-item>
          <cds-feature-item
            heading="Feature Item" 
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
            icon="list"
            icon-color="info"
            icon-with-background="true"
            >
          </cds-feature-item>
        </cds-grid-item>
        <cds-grid-item>
          <cds-feature-item
            heading="Feature Item" 
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
            icon="list"
            icon-color="info"
            icon-with-background="true"
            >
          </cds-feature-item>
        </cds-grid-item>
      </cds-grid>
    </cds-section>
    `;

    // ## Feature Details
    container.innerHTML += `
    <cds-section>
      <cds-feature>
      <cds-feature-header align="center" size="large" slot="header">
        <cds-heading slot="category" size="6" color="primary" transform="uppercase">Transaction</cds-heading>
        <cds-heading slot="heading" size="4">A better way to send money</cds-heading>
        <p slot="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.
        </p>
      </cds-feature-header>
      <div slot="body">
        <div class="pt-8"></div>
          <cds-columns gaps="6">
            <cds-column>
              <cds-feature>
                <cds-feature-header align="left" slot="header">
                  <cds-heading slot="heading" size="4">Feature heading</cds-heading>
                  <p slot="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit.
                  </p>
                </cds-feature-header>
                <cds-grid columns="1" slot="body">
                  <cds-grid-item>
                    <cds-feature-item
                    heading="Transfers are instant" 
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
                    icon="check"
                    icon-color="info"
                    icon-with-background="true"
                    icon-outlined="true"
                    >
                    </cds-feature-item>
                  </cds-grid-item>
                  <cds-grid-item>
                    <cds-feature-item
                    heading="Transfers are instant" 
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
                    icon="check"
                    icon-color="info"
                    icon-with-background="true"
                    icon-outlined="true">
                    </cds-feature-item>
                  </cds-grid-item>
                  <cds-grid-item>
                    <cds-feature-item
                    heading="Transfers are instant" 
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
                    icon="check"
                    icon-color="info"
                    icon-with-background="true"
                    icon-outlined="true">
                    </cds-feature-item>
                  </cds-grid-item>
                  <cds-grid-item>
                    <cds-feature-item
                    heading="Transfers are instant" 
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
                    icon="check"
                    icon-color="info"
                    icon-with-background="true"
                    icon-outlined="true">
                    </cds-feature-item>
                  </cds-grid-item>
                <cds-grid>
              </cds-feature>
            </cds-column>
            <cds-column>
              <cds-image>
                <img src="https://via.placeholder.com/400x500?text=image"/>
              </cds-image>
            </cds-column>
          </cds-columns>
          <div class="pt-8 pb-8"></div>
          <cds-columns gaps="6">
            <cds-column>
              <cds-image>
                <img src="https://via.placeholder.com/400x500?text=image"/>
              </cds-image>
            </cds-column>
            <cds-column>
              <cds-feature>
                <cds-feature-header align="left" slot="header">
                  <cds-heading slot="heading" size="4">Feature heading</cds-heading>
                  <p slot="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit.
                  </p>
                </cds-feature-header>
                <cds-grid columns="1" slot="body">
                  <cds-grid-item>
                    <cds-feature-item
                    heading="Transfers are instant" 
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
                    icon="check"
                    icon-color="info"
                    icon-with-background="true"
                    icon-outlined="true">
                    </cds-feature-item>
                  </cds-grid-item>
                  <cds-grid-item>
                    <cds-feature-item
                    heading="Transfers are instant" 
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
                    icon="check"
                    icon-color="info"
                    icon-with-background="true"
                    icon-outlined="true">
                    </cds-feature-item>
                  </cds-grid-item>
                  <cds-grid-item>
                    <cds-feature-item
                    heading="Transfers are instant" 
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
                    icon="check"
                    icon-color="info"
                    icon-with-background="true"
                    icon-outlined="true">
                    </cds-feature-item>
                  </cds-grid-item>
                  <cds-grid-item>
                    <cds-feature-item
                    heading="Transfers are instant" 
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
                    icon="check"
                    icon-color="info"
                    icon-with-background="true"
                    icon-outlined="true">
                    </cds-feature-item>
                  </cds-grid-item>
                <cds-grid>
              </cds-feature>
            </cds-column>
          </cds-columns>
        </div>
      </cds-feature>
    </cds-section>
    `;

    // add container
    wrapper.append(container);

    // ## Need Help
    section = document.createElement('cds-section');
    section.background = 'dark';
    section.innerHTML = `
      <cds-container>
        <cds-feature-header>
          <cds-heading slot="heading" color="white" size="4">Need Help?</cds-heading>
          <p slot="description">Lorem ipsum dolor sit amet consect adipisicing elit.</p>
        </cds-feature-header>
      </cds-container>
    `;
    wrapper.append(section);

    container = document.createElement('cds-container');
    // ## Back to top
    container.innerHTML += `
        <cds-back-to-top float-position="bottom-right" icon="chevron-up" color="dark">
        </cds-back-to-top>
      `;
    wrapper.append(container);

    // ## Footer
    const footer: any = document.createElement('cds-footer');
    footer.layout = 'content-left';
    footer.color = 'white';
    footer.disclaimer = '© Collabur Design System.';
    footer.disclaimerPosition = 'left';
    footer.links = Links;
    footer.socialLinks = socialLinks;
    footer.innerHTML = `
      <h6 class="mb-3">SUBSCRIBE TO OUR NEWSLETTER</h6>
      <cds-input label="The latest news, articles, and resources, sent to your inbox weekly."></cds-input>
    `;
    wrapper.append(footer);

    // add to body
    return wrapper;
  });
