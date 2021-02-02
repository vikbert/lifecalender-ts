import moment from 'moment'

class Config{
  birthday: string;
  age: number;

  constructor(birthday: string, age: number)
  {
    this.birthday = birthday;
    this.age = age;
  }

  isValid(): boolean
  {
    const ageByBirthday = moment().diff(
      moment(this.birthday, 'yyyy-mm-dd'),
      'years',
    );

    if (ageByBirthday > this.age) {
      return false;
    }

    return 0 < ageByBirthday && ageByBirthday < 100;
  }
}

export default Config;
