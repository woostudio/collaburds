import moment from 'moment';

export const getWeeksOfMonth = (date: Date): moment.Moment[][] => {
  if (!date) {
    return [];
  }

  const startDate = moment(date).startOf('month');
  const endDate = moment(date).endOf('month');
  const startOfFirstWeek = startDate.clone().startOf('week');
  const weeks = [];
  let currentDate = startOfFirstWeek;

  while (currentDate <= endDate) {
    const startOfWeek = currentDate.clone().startOf('week');
    const endOfWeek = currentDate.clone().endOf('week');

    const days = [];
    let currentDayOfWeek = startOfWeek;

    while (currentDayOfWeek <= endOfWeek) {
      if (currentDayOfWeek <= endDate && currentDayOfWeek >= startDate) {
        days.push(currentDayOfWeek);
      } else {
        days.push(null);
      }
      currentDayOfWeek = currentDayOfWeek.clone().add(1, 'd');
    }
    weeks.push(days);
    currentDate = currentDate.add(7, 'days');
  }
  return weeks;
};

export const stringToDateString = (
  value: string,
  valueFormat: string,
  outputFormat: string
): string => {
  let result = '';
  const myMoment = moment(value, valueFormat);
  if (myMoment.isValid()) {
    result = myMoment.format(outputFormat);
  }
  return result;
};

export const stringToDate = (value: string, valueFormat: string, defaultDate?): Date => {
  let result = defaultDate;
  const myMoment = moment(value, valueFormat);
  if (myMoment.isValid()) {
    result = myMoment.toDate();
  }
  return result;
};
