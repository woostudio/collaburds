import { newSpecPage } from '@stencil/core/testing';
import { Quote } from './quote';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Quote],
    html: `
    <cds-quote footer="footer text">
      <p>Quote content !! ##</p>
    </cds-quote>
    `,
  });

  expect(page.root).toEqualHtml(`
  <cds-quote footer="footer text">
  <cds-content>
    <blockquote>
      <p>
        Quote content !! ##
      </p>
      <footer class="quote-footer">
        footer text
      </footer>
    </blockquote>
  </cds-content>
</cds-quote>
  `);
});
