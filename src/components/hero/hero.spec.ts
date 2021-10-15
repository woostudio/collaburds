import { newSpecPage } from '@stencil/core/testing';
import { Hero } from './hero';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Hero],
    html: `<cds-hero heading="hero heading" copy="hero copy" heading-color="dark">
            <div slot="header">hero header</div>
            <div slot="footer">hero footer</div>
           </cds-hero>`,
  });

  expect(page.root).toEqualHtml(`
  <cds-hero copy='hero copy' heading='hero heading' heading-color="dark">
    <section class='hero'>
      <div class='hero-head'>
        <div slot='header'>
          hero header
        </div>
      </div>
      <div class='hero-body'>
        <div class="container">
          <div class='has-text-centered'>
            <h1 class='has-text-dark is-size-1 is-spaced title'>
              hero heading
            </h1>
            <h2 class='subtitle'>
              hero copy
            </h2>
          </div>
        </div>
      </div>
      <div class='hero-head'>
        <div slot='footer'>
          hero footer
        </div>
      </div>
    </section>
  </cds-hero>
  `);
});
