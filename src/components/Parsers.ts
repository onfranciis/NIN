export const dayParser = (day: string): string => {
  const data = parseInt(day) < 10 ? day.slice(1) : day;
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

export const monthParser = (month: string): string => {
  const data = month;
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
