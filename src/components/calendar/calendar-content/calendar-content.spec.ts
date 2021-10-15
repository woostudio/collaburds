import { newSpecPage } from '@stencil/core/testing';
import { CalendarContent } from './calendar-content';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [CalendarContent],
    html: `<cds-calendar-content></cds-calendar-content>`,
  });

  page.root.displayDate = new Date(2020, 5, 1);

  expect(page.root.tagName).toEqual('CDS-CALENDAR-CONTENT');
});
