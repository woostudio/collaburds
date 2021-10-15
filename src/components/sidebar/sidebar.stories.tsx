import { storiesOf } from '@storybook/html';
import { text, number } from '@storybook/addon-knobs';
import notes from './readme.md';

storiesOf('Components|Sidebar', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return `
      <cds-sidebar
        slideoutDuration="${number('Slide out/in animation duration', 200)}"
        subnavTitle="${text('Subnav Title', 'Subnav Title')}"
        subnav="${text(
          'Subnav',
          JSON.stringify([
            {
              items: [
                {
                  title: 'Product',
                  path: '/product',
                  order: 0,
                  parent: '/',
                  items: [
                    {
                      title: 'Test',
                      path: '/product/test',
                      order: 0,
                      parent: '/product',
                    },
                  ],
                },
                {
                  title: 'Test',
                  path: '/test',
                  order: 1,
                  parent: '/',
                },
              ],
            },
            {
              title: 'Product',
              items: [
                {
                  title: 'Product',
                  path: '/product',
                  order: 0,
                  parent: '/',
                  items: [
                    {
                      title: 'Test',
                      path: '/product/test',
                      order: 0,
                      parent: '/product',
                    },
                  ],
                },
                {
                  title: 'Test',
                  path: '/test',
                  order: 1,
                  parent: '/',
                },
              ],
            },
          ])
        )}"
        active-item-path="${text('Active Subnav Item path', '')}"
        logoPath="${text('Logo image path', './assets/images/wapple.svg')}"
        logoHref="${text('Logo href', '/')}"
      ></cds-sidebar>
    `;
  });
