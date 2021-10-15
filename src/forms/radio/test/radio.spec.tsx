import { newSpecPage } from '@stencil/core/testing';
import { Radio } from '../radio';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [Radio],
    html: `<cds-radio radio-id="accept" radio-name="radioName" checked>Yes</cds-radio> `,
  });

  expect(page.root).toEqualHtml(`
    <cds-radio checked radio-id="accept" radio-name="radioName">
       <input checked class="cds-radio" type="radio" id="accept" name="radioName" /> 
       <label class="radio" htmlFor="accept">Yes</label>
    </cds-radio>
  `);
});
