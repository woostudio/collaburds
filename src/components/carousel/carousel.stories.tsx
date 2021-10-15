import { storiesOf } from '@storybook/html';
import notes from './readme.md';
import { boolean, radios } from '@storybook/addon-knobs';

const carouselOptions = {
  Default: 'default',
  OnBoarding: 'on-boarding',
  Dismissible: 'dismissible',
};

storiesOf('Components|Carousel', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Default', () => {
    return `<cds-carousel
        class="column is-full is-paddingless"       
        show-prev-next="${boolean('Show prev next buttons', true)}"
        show-pagination="${boolean('Show pagination circles', true)}"
        carousel-type="${radios('Carousel type', carouselOptions, 'default')}">
            <cds-card class="slide"
            >
              <cds-card-content>
                <h2>Test heading</h2>
                <h3>Test title</h3>
                Test content 1
              </cds-card-content>
            </cds-card>
            <cds-card class="slide"
            >
                <cds-card-content>
                <h2>Test heading</h2>
                <h3>Test title</h3>
                Test content 2
              </cds-card-content>
            </cds-card>                          
            <cds-card class="slide"
            >
               <cds-card-content>
                <h2>Test heading</h2>
                <h3>Test title</h3>
                Test content 3
              </cds-card-content>
            </cds-card>
      </cds-carousel>
    `;
  });
