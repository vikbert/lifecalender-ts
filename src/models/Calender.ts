import moment from 'moment';
import { getDates } from '../services/Dates';
import type Config from './Config';

class Calender {
  config: Config;
  dates: string[] = [];
  currentDate: string = moment().startOf('day').format('YYYY-MM-DD');

  constructor(config: Config) {
    this.config = config;
  }

  createDays(): void {
    const birthDate = new Date(this.config.birthday);
    const yearLater = moment(birthDate).add(this.config.age, 'year').startOf('day').toDate();

    this.dates = getDates(moment(birthDate), yearLater);
  }
}

export default Calender;
