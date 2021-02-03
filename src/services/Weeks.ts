const countWeeks = (
  startMoment: moment.Moment,
  endMoment: moment.Moment,
): number => {
  if (startMoment > endMoment) {
    return startMoment.diff(endMoment, 'weeks');
  } else {
    return endMoment.diff(startMoment, 'weeks');
  }
};

export { countWeeks };
