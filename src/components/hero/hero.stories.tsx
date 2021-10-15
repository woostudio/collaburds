import { text, object, select, boolean } from '@storybook/addon-knobs';
import { HeroAction } from './hero';
import notes from './readme.md';
import { heroSizesOption, textColorsOption, heroOverlayOption } from '../../core/common';

const primaryAction: HeroAction = {
  text: 'Primary',
  color: 'primary',
  link: 'http://www.google.com',
};
const secondaryAction: HeroAction = {
  text: 'Secondary',
  color: 'secondary',
  link: 'http://www.google.com',
};

export default {
  title: 'Components|Hero',
};

export const story1 = () => {
  const hero: any = document.createElement('cds-hero');
  hero.size = select('Size', ['', ...heroSizesOption], '');
  hero.heading = text('Heading', 'Collabur Design System');
  hero.headingColor = select('Heading Color', [...textColorsOption], 'dark');
  hero.copy = text(
    'Copy',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  );
  hero.copyColor = select('Copy Color', [...textColorsOption], 'dark');
  hero.image = text('Background Image', '');
  hero.overlay = select('Background overlay', ['', ...heroOverlayOption], '');
  hero.video = text('Video', '');
  hero.videoEmbedded = boolean('Video Embedded', true);
  hero.primaryAction = JSON.stringify(object('Primary Action', primaryAction));
  hero.secondaryAction = JSON.stringify(object('Secondary Action', secondaryAction));
  return hero;
};
story1.story = {
  name: 'Default',
  parameters: {
    notes: notes,
  },
};

export const exampleBackgroundImage = () => {
  const hero: any = document.createElement('cds-hero');
  hero.size = 'medium';
  hero.heading = 'Collabur Design System';
  hero.copy =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  hero.image = '/assets/images/hero-image-example.jpg';
  hero.overlay = 'lighten-strong';
  hero.primaryAction = JSON.stringify(primaryAction);
  hero.secondaryAction = JSON.stringify(secondaryAction);
  return hero;
};
exampleBackgroundImage.story = {
  name: 'With Background Image',
  parameters: {
    notes: notes,
  },
};

export const exampleBackgroundImageVideo = () => {
  const hero: any = document.createElement('cds-hero');
  hero.size = 'medium';
  hero.heading = 'Collabur Design System';
  hero.copy =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  hero.image = '/assets/images/hero-image-example.jpg';
  hero.overlay = 'lighten-strong';
  hero.video = 'http://media.w3.org/2010/05/sintel/trailer.mp4';
  hero.embedded = false;
  hero.controls = false;
  hero.primaryAction = JSON.stringify(primaryAction);
  hero.secondaryAction = JSON.stringify(secondaryAction);
  return hero;
};

exampleBackgroundImageVideo.story = {
  name: 'With Background Image & Video',
  parameters: {
    notes: notes,
  },
};

export const exampleHeaderFooter = () => {
  return `<cds-hero
  size="medium"
  heading="Collabur Design System"
  copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

  >
  <div slot="header">
    <cds-navbar>
      <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              Home
            </a>

            <a class="navbar-item">
              Documentation
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider" />
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <cds-buttons>
                <cds-button color="primary">
                  <strong>Sign up</strong>
                </cds-button>
                <cds-button color="light">
                  Log in
                </cds-button>
              </cds-buttons>
            </div>
          </div>
        </div>
      </cds-navbar>
    </div>
    <div slot="footer">
    <cds-heading align="centered">Hero Footer</cds-heading>
    </div>
  </cds-hero>`;
};
exampleHeaderFooter.story = {
  name: 'With Header and Footer',
  parameters: {
    notes: notes,
  },
};
