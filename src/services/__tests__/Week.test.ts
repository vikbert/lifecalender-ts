import { countWeeks } from '../Weeks';
import moment from 'moment';

it('should count the weeks between two dates', () => {
  const AMOUNT_WEEKS_PRO_YEAR = 52;
  const result = countWeeks(moment('1999-01-01'), moment('2000-01-01'));

  expect(result).toBe(AMOUNT_WEEKS_PRO_YEAR);
});
