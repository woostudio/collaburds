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
import { getWeeksOfMonth } from '../../../core/services';

/**
 * @hidden
 */
@Component({
  tag: 'cds-calendar-content',
})
export class CalendarContent implements ComponentInterface {
  /**
   * Display Date (Current Display Month)
   */
  @Prop() displayDate: Date = new Date();

  /**
   * Current Date
   */
  @Prop() currentDate: Date;

  /**
   * view
   */
  @Prop() view: 'days' | 'months' | 'years' = 'days';

  /**
   * Position
   */
  @Prop() position: 'current' | 'prevContent' | 'nextContent' = 'current';

  /**
   * On date selected
   */
  @Event() selected: EventEmitter;

  /**
   * On view updated
   */
  @Event() viewUpdated: EventEmitter;

  /**
   * on go to today click
   */
  @Event() gotoTodayClicked: EventEmitter;

  @Element() el: HTMLElement;

  selectDate = (date: Date) => {
    this.selected.emit(date);
  };

  updateView = (newView: 'days' | 'months' | 'years') => {
    this.view = newView;
    this.viewUpdated.emit(newView);
  };

  gotoTodayClickHandle = (e: MouseEvent) => {
    e.preventDefault();
    this.view = 'days';
    this.currentDate = new Date();
    this.displayDate = new Date();
    this.gotoTodayClicked.emit();
  };

  renderWeek = (days: moment.Moment[]) => {
    return (
      <tr>
        {days.map(day =>
          !!day ? (
            <td
              class={{
                selected: !!this.currentDate && moment(day).isSame(this.currentDate, 'day'),
              }}
              role="button"
              aria-disabled="false"
              aria-label={day.format('dddd, MMMM Do YYYY')}
              onClick={e => {
                e.preventDefault();
                this.selectDate(day.toDate());
              }}
            >
              {day.date()}
            </td>
          ) : (
            <td class="empty"></td>
          )
        )}
      </tr>
    );
  };
  renderDaysGrid = () => {
    const weeks = getWeeksOfMonth(this.displayDate);
    return (
      <div>
        <div class="calendar-content-header">
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              this.updateView('months');
            }}
          >
            {moment(this.displayDate).format('MMMM YYYY')}
          </a>
        </div>
        <table class="day-table">
          <tbody>{weeks.map(this.renderWeek)}</tbody>
        </table>
      </div>
    );
  };
  renderMonthCell = (month: number) => {
    const myMoment = moment()
      .set('day', 1)
      .set('month', month)
      .clone();
    return (
      <td
        role="button"
        aria-disabled="false"
        aria-label={myMoment.format('MMMM YYYY')}
        onClick={e => {
          e.preventDefault();
          this.updateView('days');
          this.displayDate = myMoment.toDate();
        }}
      >
        {myMoment.format('MMM')}
      </td>
    );
  };
  renderMonthsGrid = () => {
    const myMoment = moment(this.displayDate);
    return (
      <div>
        <div class="calendar-content-header">
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              this.updateView('years');
            }}
          >
            {myMoment.format('YYYY')}
          </a>
        </div>
        <table class="month-table">
          <tbody>
            <tr>{[0, 1, 2, 3].map(m => this.renderMonthCell(m))}</tr>
            <tr>{[4, 5, 6, 7].map(m => this.renderMonthCell(m))}</tr>
            <tr>{[8, 9, 10, 11].map(m => this.renderMonthCell(m))}</tr>
          </tbody>
        </table>
        <div class="goto-today">
          <a href="#" onClick={this.gotoTodayClickHandle}>
            Go to Today
          </a>
        </div>
      </div>
    );
  };

  renderYearCell = (year: number) => {
    return (
      <td
        role="button"
        aria-disabled="false"
        aria-label={year}
        onClick={e => {
          e.preventDefault();
          this.updateView('months');
          this.displayDate = new Date(year, 0, 1);
        }}
      >
        {year}
      </td>
    );
  };
  renderYearsGrid = () => {
    // start of decade
    const startYear = Math.floor(this.displayDate.getFullYear() / 10) * 10;
    return (
      <div>
        <div class="calendar-content-header">
          <div>
            {startYear} - {startYear + 11}
          </div>
        </div>
        <table class="year-table">
          <tbody>
            <tr>{[0, 1, 2, 3].map(m => this.renderYearCell(startYear + m))}</tr>
            <tr>{[4, 5, 6, 7].map(m => this.renderYearCell(startYear + m))}</tr>
            <tr>{[8, 9, 10, 11].map(m => this.renderYearCell(startYear + m))}</tr>
          </tbody>
        </table>
        <div class="goto-today">
          <a href="#" onClick={this.gotoTodayClickHandle}>
            Go to Today
          </a>
        </div>
      </div>
    );
  };

  render() {
    console.log('render', this.view, this.displayDate);
    return (
      <div
        class={{
          'calendar-content': true,
          [this.position]: Boolean(this.position),
        }}
      >
        {this.view === 'days' && this.renderDaysGrid()}
        {this.view === 'months' && this.renderMonthsGrid()}
        {this.view === 'years' && this.renderYearsGrid()}
      </div>
    );
  }
}
