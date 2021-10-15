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
  .add('Content', () => {
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
    hero.heading = 'Article Title';
    hero.copy =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.';
    hero.image = '/assets/images/content-image-example.jpg';
    hero.overlay = 'lighten-light';
    wrapper.append(hero);

    // // ## Partner
    // let section: any = document.createElement('cds-section');

    // ## Container
    let container = document.createElement('cds-container');
    container.breakpoint = 'desktop';

    // ## Content
    container.innerHTML += `
    <cds-section>
      <cds-content size="">
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
        eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate
        semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
      </p>
      <h2>Second level</h2>
      <p>
        Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque
        condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus
        venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at
        dignissim dui. Ut et neque nisl.
      </p>
      <ul>
        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
        <li>Ut non enim metus.</li>
      </ul>
    </cds-content>
    </cds-section>
    `;

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
