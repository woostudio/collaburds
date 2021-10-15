import {
  Prop,
  h,
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  Element,
} from '@stencil/core';
import moment from 'moment';

/**
 * @hidden
 */
@Component({
  tag: 'cds-calendar-container',
  styleUrls: ['calendar-container.scss'],
})
export class CalendarContainer implements ComponentInterface {
  private calendarSliderElement: HTMLElement;
  private nextCalendarElement: any;
  private currentCalendarElement: any;
  private prevCalendarElement: any;
  private currentRenderDate: Date;
  private currentView: 'days' | 'months' | 'years' = 'days';

  /**
   * Selected Date
   */
  @Prop({
    mutable: true,
  })
  currentDate: Date;

  /**
   * On date selected
   */
  @Event() selected: EventEmitter;

  @Element() el: HTMLElement;

  componentWillLoad() {
    this.currentRenderDate = this.currentDate || new Date();
  }
  componentDidLoad() {
    // load previous and next months in the background
    // prev
    this.calendarSliderElement.prepend(
      this.createCalendarContent(this.getNewSlidingDate(-1), 'prevContent')
    );
    // current
    this.calendarSliderElement.append(
      this.createCalendarContent(this.currentRenderDate, 'current')
    );
    // next
    this.calendarSliderElement.append(
      this.createCalendarContent(this.getNewSlidingDate(1), 'nextContent')
    );

    this.getMonthElements();
  }

  getMonthElements = () => {
    this.prevCalendarElement = this.calendarSliderElement.childNodes[0] as any;
    this.currentCalendarElement = this.calendarSliderElement.childNodes[1] as any;
    this.nextCalendarElement = this.calendarSliderElement.childNodes[2] as any;
  };
  createCalendarContent = (currentDate: Date, position: string) => {
    const element: any = document.createElement('cds-calendar-content');
    element.displayDate = currentDate;
    element.position = position;
    element.view = this.currentView;
    element.addEventListener('viewUpdated', this.calendarTypeChangeHandle);
    element.addEventListener('gotoTodayClicked', this.gotoTodayHandle);

    element.addEventListener('selected', (e: CustomEvent) => {
      this.selectDate(e.detail);
    });

    element.currentDate = this.currentDate;
    return element;
  };
  calendarTypeChangeHandle = (e: CustomEvent) => {
    // switching between monthly/daily/yearly event
    this.currentView = e.detail;
    // update to background calendar
    this.prevCalendarElement.view = this.currentView;
    this.nextCalendarElement.view = this.currentView;
    this.prevCalendarElement.displayDate = this.getNewSlidingDate(-1);
    this.nextCalendarElement.displayDate = this.getNewSlidingDate(1);
  };
  gotoTodayHandle = () => {
    // switching between monthly/daily/yearly event
    this.currentView = 'days';
    this.currentDate = new Date();
    // update to background calendar
    this.prevCalendarElement.view = this.currentView;
    this.nextCalendarElement.view = this.currentView;
    this.prevCalendarElement.displayDate = this.getNewSlidingDate(-1);
    this.nextCalendarElement.displayDate = this.getNewSlidingDate(1);
    this.selectDate(this.currentDate);
  };

  nextClickHandle = (e: MouseEvent) => {
    e.preventDefault();
    this.currentRenderDate = this.getNewSlidingDate(1);
    this.currentCalendarElement.position = 'prevContent';
    this.nextCalendarElement.position = 'current';
    this.prevCalendarElement.remove();
    this.calendarSliderElement.append(
      this.createCalendarContent(this.getNewSlidingDate(1), 'nextContent')
    );
    this.getMonthElements();
  };
  prevClickHandle = (e: MouseEvent) => {
    e.preventDefault();
    this.currentRenderDate = this.getNewSlidingDate(-1);
    this.currentCalendarElement.position = 'nextContent';
    this.prevCalendarElement.position = 'current';
    this.nextCalendarElement.remove();
    this.calendarSliderElement.prepend(
      this.createCalendarContent(this.getNewSlidingDate(-1), 'prevContent')
    );
    this.getMonthElements();
  };

  getNewSlidingDate = (direction): Date => {
    let unit = 'month';
    if (this.currentView === 'months') {
      unit = 'year';
    } else if (this.currentView === 'years') {
      unit = 'years';
      direction *= 10; // slide by 10 years
    }
    // perform sliding
    const date = moment(this.currentRenderDate)
      .add(direction, unit)
      .toDate();
    return date;
  };

  selectDate = (date: Date) => {
    this.currentDate = date;
    this.selected.emit(date);
  };
  render() {
    return (
      <div class="calendar-container">
        <div ref={ref => (this.calendarSliderElement = ref)}></div>

        <div class="calendar-header">
          <div class="calendar-controls">
            <div class="calendar-control prev" onClick={this.prevClickHandle}>
              <cds-icon icon="arrow-left"></cds-icon>
            </div>
            <div class="calendar-control next" onClick={this.nextClickHandle}>
              <cds-icon icon="arrow-right"></cds-icon>
            </div>
          </div>
          <div class="day-header">
            <div class="day-header-item">Su</div>
            <div class="day-header-item">Mo</div>
            <div class="day-header-item">Tu</div>
            <div class="day-header-item">We</div>
            <div class="day-header-item">Th</div>
            <div class="day-header-item">Fi</div>
            <div class="day-header-item">Sa</div>
          </div>
        </div>
      </div>
    );
  }
}
