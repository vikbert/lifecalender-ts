import moment from 'moment';
import { countWeeks } from '../services/Weeks';
import type CalenderConfig from './CalenderConfig';

class Calender {
  config: CalenderConfig;
  weekAmount: number = 0;

  constructor(config: CalenderConfig) {
    this.config = config;
  }

  initWeekAmount(): void {
    const birthMoment = moment(this.config.birthday);
    const startMoment = moment(this.config.birthday);

    this.weekAmount = countWeeks(startMoment, birthMoment.add(90, 'years'));
  }
}

export default Calender;
