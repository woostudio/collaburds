import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';

storiesOf('Components|Menu', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Default', () => {
    return `
      <cds-menu 
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
        active-item-path="${text('Active Subnav Item path', '/product')}"
        class=""
      ></cds-menu>
    `;
  });
