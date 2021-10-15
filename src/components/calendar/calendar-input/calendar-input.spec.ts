import { newSpecPage } from '@stencil/core/testing';
import { CalendarInput } from './calendar-input';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [CalendarInput],
    html: `<cds-calendar-input format="DD/MM/YYYY" value="20/06/2020">
      <cds-button color="primary">
    </cds-calendar-input>`,
  });

  expect(page.root).toEqualHtml(`
  <cds-calendar-input format="DD/MM/YYYY" value="20/06/2020">
  <cds-button color="primary"></cds-button>
  <div class="calendar-input-alt">
    <cds-input type="text" value="20/06/2020"></cds-input>
  </div>
  <div class="calendar-input">
    <cds-input type="date" value="2020-06-20"></cds-input>
  </div>
</cds-calendar-input>
  `);
});
