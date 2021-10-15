import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

storiesOf('Patterns|Feature', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })
  .add('Default', () => {
    return `
    <cds-container>
      <cds-feature
        layout="${select('Layout', ['left', 'right', 'stack'], 'stack')}"
      >
        <cds-feature-header slot="header">
          <cds-heading slot="category" size="6" color="primary" transform="uppercase">Transaction</cds-heading>
          <cds-heading slot="heading" size="4">A better way to send money</cds-heading>
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
    </cds-container>
    `;
  })
  .add('Example Layout Left', () => {
    return `
    <cds-container>
      <cds-feature layout="left">
        <cds-feature-header align="left" slot="header">
          <cds-heading slot="category" size="6" color="primary" transform="uppercase">Transaction</cds-heading>
          <cds-heading slot="heading" size="4">A better way to send money</cds-heading>
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
    </cds-container>
    `;
  })
  .add('Example Layout Right', () => {
    return `
    <cds-container>
      <cds-feature layout="right">
        <cds-feature-header align="right" slot="header">
          <cds-heading slot="category" size="6" color="primary" transform="uppercase">Transaction</cds-heading>
          <cds-heading slot="heading" size="4">A better way to send money</cds-heading>
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
    </cds-container>
    `;
  })
  .add('Example Complex Feature Page', () => {
    return `
    <cds-container>
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
            </cds-column>
          </cds-columns>
        </div>
      </cds-feature>
    </cds-container>
    `;
  });
