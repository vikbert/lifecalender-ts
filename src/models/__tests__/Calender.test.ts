import Calender from '../Calender';
import CalenderConfig from '../CalenderConfig';

it('should ', () => {
  const cal = new Calender(new CalenderConfig('1978-01-01', 90));
  cal.initWeekAmount();

  expect(cal.weekAmount).toBe(4696);
});
