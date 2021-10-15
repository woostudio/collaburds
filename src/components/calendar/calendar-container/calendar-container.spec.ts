import { newSpecPage } from '@stencil/core/testing';
import { CalendarContainer } from './calendar-container';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [CalendarContainer],
    html: `<cds-calendar-container></cds-calendar-container>`,
  });

  page.root.currentDate = new Date(2020, 5, 15);

  expect(page.root).toEqualHtml(`
    <cds-calendar-container>
    <div class="calendar-container">
      <div>
        <cds-calendar-content></cds-calendar-content>
        <cds-calendar-content></cds-calendar-content>
        <cds-calendar-content></cds-calendar-content>
      </div>
      <div class="calendar-header">
        <div class="calendar-controls">
          <div class="calendar-control prev">
            <cds-icon icon="arrow-left"></cds-icon>
          </div>
          <div class="calendar-control next">
            <cds-icon icon="arrow-right"></cds-icon>
          </div>
        </div>
        <div class="day-header">
          <div class="day-header-item">
            Su
          </div>
          <div class="day-header-item">
            Mo
          </div>
          <div class="day-header-item">
            Tu
          </div>
          <div class="day-header-item">
            We
          </div>
          <div class="day-header-item">
            Th
          </div>
          <div class="day-header-item">
            Fi
          </div>
          <div class="day-header-item">
            Sa
          </div>
        </div>
      </div>
    </div>
  </cds-calendar-container>
  `);
});
