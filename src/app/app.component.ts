import { Component } from '@angular/core';
import { lt_nin_checksum } from '../components/ChecksumValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  value = '';
  error: boolean = false;
  gender: string = '';
  year: string = '';
  month: string = '';
  day: string = '';
  nnn: string = '';
  checksum: string = '';
  clickedOnce: boolean = false;
  validated: boolean = false;

  verify = () => {
    console.log(this.value);
    const data = this.value;
    if (data.length == 11) {
      this.clickedOnce = false;
      this.validated = true;
      this.gender = parseInt(data.slice(0, 1)) % 2 == 0 ? 'Female' : 'Male';
      this.year = data.slice(1, 3);
      this.month = data.slice(3, 5);
      this.day = data.slice(5, 7);
      this.checksum = data.slice(9, 10);
      if (lt_nin_checksum(data.slice(0, 10)) == parseInt(this.checksum)) {
        // The checksum is valid
        this.error = false;
      } else {
        // The checksum is not valid
        this.error = true;
      }
    } else {
      this.error = true;
      this.clickedOnce = true;
      this.validated = false;
    }
  };

  dayParser = () => {
    const data = parseInt(this.day) < 10 ? this.day.slice(1) : this.day;
    switch (data) {
      case '1':
        return `${data}st`;
        break;

      case '2':
        return `${data}nd`;
        break;

      case '3':
        return `${data}rd`;
        break;

      default:
        return `${data}th`;
        break;
    }
  };

  monthParser = () => {
    const data = this.month;
    switch (data) {
      case '01':
        return 'January';
        break;

      case '02':
        return 'February';
        break;

      case '03':
        return 'March';
        break;

      case '04':
        return 'April';
        break;

      case '05':
        return 'May';
        break;

      case '06':
        return 'June';
        break;

      case '07':
        return 'July';
        break;

      case '08':
        return 'August';
        break;

      case '09':
        return 'September';
        break;

      case '10':
        return 'October';
        break;

      case '11':
        return 'November';
        break;

      case '12':
        return 'December';
        break;

      default:
        return '';
        break;
    }
  };
}
