import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { HeroAction } from '../../components/hero/hero';
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

const primaryAction: HeroAction = {
  text: 'Primary',
  color: 'primary',
  link: 'http://www.google.com',
};
const secondaryAction: HeroAction = {
  text: 'Secondary',
  color: 'info',
  link: 'http://www.google.com',
};

storiesOf('Pages|Home Page', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Homepage', () => {
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
    hero.size = 'medium';
    hero.heading = 'Collabur Design System';
    hero.copy =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    hero.image = '/assets/images/hero-image-example.jpg';
    hero.overlay = 'lighten-medium';
    hero.video = 'http://media.w3.org/2010/05/sintel/trailer.mp4';
    hero.embedded = false;
    hero.controls = false;
    hero.primaryAction = primaryAction;
    hero.secondaryAction = secondaryAction;
    wrapper.append(hero);

    // ## Container
    let container = document.createElement('cds-container');

    // ## Stats
    container.innerHTML += `
    <cds-section>
      <cds-stats align="center">
        <cds-stats-item metric="New visits" value-color="info" value-size="2">2658</cds-stats-item>
        <cds-stats-item metric="Total users" value-color="info" value-size="2">1678</cds-stats-item>
        <cds-stats-item metric="Total page views" value-color="info" value-size="2">87509</cds-stats-item>
      </cds-stats>
    </cds-section>
    `;

    // ## Cards
    container.innerHTML += `
    <cds-section>
      <cds-feature-header size="medium">
        <cds-heading slot="heading" size="4">Why Choose Us?</cds-heading>
        <p slot="description" class="has-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </cds-feature-header>
      <div class="pt-8"></div>
      <cds-columns>
        <cds-column>
          <cds-box>
          <cds-feature-item
            layout="stack-center"
            heading="Transfers are instant" 
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
            icon="check-circle"
            icon-color="secondary">
          </cds-feature-item>
          </cds-box>
        </cds-column>
        <cds-column>
          <cds-box>
          <cds-feature-item
            layout="stack-center"
            heading="Transfers are instant" 
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
            icon="check-circle"
            icon-color="secondary">
          </cds-feature-item>
          </cds-box>
        </cds-column>
        <cds-column>
          <cds-box>
          <cds-feature-item
            layout="stack-center"
            heading="Transfers are instant" 
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
            icon="check-circle"
            icon-color="secondary">
          </cds-feature-item>
          </cds-box>
        </cds-column>
      </cds-columns>
    </cds-section>
    `;

    // add container
    wrapper.append(container);

    // ## Image
    let section: any = document.createElement('cds-section');
    section.light = true;
    section.innerHTML = `
    <cds-container>
      <cds-columns is-vcentered="true" gaps="8">
          <cds-column>
            <cds-image>
              <image src="https://via.placeholder.com/800x600?text=image"/>
            </cds-image>
          </cds-column>
          <cds-column>
            <cds-heading size="6" color="grey" transform="uppercase" weight="medium">We are Collabur</cds-heading>
            <cds-heading size="4" class="mb-2">Design System</cds-heading>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
            </p>
          </cds-column>
      </cds-columns>
    </cds-container>
  `;
    // add container
    wrapper.append(section);

    container = document.createElement('cds-container');

    // ## Features
    container.innerHTML += `
      <cds-section>
        <cds-feature>
          <cds-feature-header slot="header">
            <cds-heading slot="heading" size="4">Features</cds-heading>
            <p slot="description">Lorem ipsum dolor sit amet consect adipisicing elit.</p>
          </cds-feature-header>
          <cds-grid columns="2" gap="3" slot="body">
            <cds-grid-item>
              <cds-feature-item
              heading="Transfers are instant" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
              icon="check"
              icon-color="secondary"
              icon-with-background="true">
              </cds-feature-item>
            </cds-grid-item>
            <cds-grid-item>
              <cds-feature-item
              heading="Transfers are instant" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
              icon="check"
              icon-color="secondary"
              icon-with-background="true">
              </cds-feature-item>
            </cds-grid-item>
            <cds-grid-item>
              <cds-feature-item
              heading="Transfers are instant" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
              icon="check"
              icon-color="secondary"
              icon-with-background="true">
              </cds-feature-item>
            </cds-grid-item>
            <cds-grid-item>
              <cds-feature-item
              heading="Transfers are instant" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
              icon="check"
              icon-color="secondary"
              icon-with-background="true">
              </cds-feature-item>
            </cds-grid-item>
          <cds-grid>
        </cds-feature>
      </cds-section>
      `;

    // ## Quote
    container.innerHTML += `
    <cds-section>
      <cds-columns>
        <cds-column>
          <cds-quote footer="John D.">
          <p class="has-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.</p>
          </cds-quote>
        </cds-column>
        <cds-column>
          <cds-quote footer="Jason N.">
          <p class="has-text-grey">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
          </cds-quote>
        </cds-column>
        <cds-column>
          <cds-quote footer="David K.">
          <p class="has-text-grey">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </cds-quote>
        </cds-column>
      </cds-columns>
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

    // ## Cookie Consent
    container.innerHTML += `
        <cds-cookie-consent position="bottom-left">
          By using our site you agree to our use of cookies to deliver a better site experience.
        </cds-cookie-consent>
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
