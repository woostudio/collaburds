import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text, select, object, boolean } from '@storybook/addon-knobs';
import { footerLayoutOption, footerDisclaimerPositionOption } from '../../core/common';
import { LinksProp, SocialLinkProp } from './footer';

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

storiesOf('Layout|Footer', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    const footer: any = document.createElement('cds-footer');
    footer.class = text('Custom Class', '');
    footer.color = select('Color', ['dark', 'white'], 'white');
    footer.layout = select('Layout', footerLayoutOption, 'content-left');
    footer.disclaimer = text('Disclaimer', '© Collabur Design System.');
    footer.disclaimerPosition = select(
      'Disclaimer Position',
      footerDisclaimerPositionOption,
      'left'
    );
    footer.links = JSON.stringify(object('Links', Links));
    footer.socialLinks = JSON.stringify(object('Social Links', socialLinks));
    footer.socialBelowContent = boolean('Social Below Content', false);
    footer.innerHTML = `
      <h6 class="mb-3">SUBSCRIBE TO OUR NEWSLETTER</h6>
      <cds-input label="The latest news, articles, and resources, sent to your inbox weekly."></cds-input>
  `;
    return footer;
  })
  .add('Example Social Links Only', () => {
    const footer: any = document.createElement('cds-footer');
    footer.layout = 'social-link-only';
    footer.disclaimer = '© Collabur Design System.';
    footer.disclaimerPosition = select(
      'Disclaimer Position',
      footerDisclaimerPositionOption,
      'left'
    );
    footer.socialLinks = socialLinks;
    return footer;
  })
  .add('Example Simple Centered', () => {
    const footer: any = document.createElement('cds-footer');
    footer.layout = 'simple-center';
    footer.disclaimer = '© Collabur Design System.';
    footer.links = Links;
    footer.socialLinks = socialLinks;
    return footer;
  })
  .add('Example Full Content', () => {
    const footer: any = document.createElement('cds-footer');
    footer.layout = select('Layout', footerLayoutOption, 'content-left');
    footer.color = select('Color', ['dark', 'white'], 'white');
    footer.disclaimer = text('Disclaimer', '© Collabur Design System.');
    footer.disclaimerPosition = select(
      'Disclaimer Position',
      footerDisclaimerPositionOption,
      'left'
    );
    footer.links = Links;
    footer.socialLinks = socialLinks;
    footer.socialBelowContent = boolean('Social Below Content', false);
    footer.innerHTML = `
      <h6 class="mb-3">SUBSCRIBE TO OUR NEWSLETTER</h6>
      <cds-input label="The latest news, articles, and resources, sent to your inbox weekly."></cds-input>
    `;
    return footer;
  });
