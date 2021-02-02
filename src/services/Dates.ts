import moment from 'moment';

const getDates = (startDate: moment.Moment, stopDate: Date): any => {
  let dateData = {};

  const now = moment().startOf('day').toDate();
  let targetDate = startDate;

  while (targetDate.isBefore(stopDate)) {
    const targetMoment = moment(targetDate);
    const dateToString = targetMoment.format('YYYY-MM-DD');
    dateData[dateToString] = {
      isPast: targetMoment.isBefore(now),
      isCurrent: moment(now).format('YYYY-MM-DD') === dateToString,
    };
    targetDate = moment(targetDate).add(1, 'days');
  }

  return dateData;
};

export { getDates };
