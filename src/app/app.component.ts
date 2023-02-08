import { Component } from '@angular/core';
import { lt_nin_checksum } from '../components/ChecksumValidator';
import { dayParser, monthParser } from 'src/components/Parsers';

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
  dayParser: () => string = () => dayParser(this.day);
  monthParser: () => string = () => monthParser(this.month);

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
}
