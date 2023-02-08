/**
 *
 * @param code Receives a 10 digit number
 * @returns number
 */
export const lt_nin_checksum = (code: string): number => {
  let b: number = 1,
    c: number = 3,
    d: number = 0,
    e: number = 0,
    i: number,
    digit: number;
  for (i = 0; i < 10; i++) {
    digit = parseInt(code[i]);
    d += digit * b;
    e += digit * c;
    b++;
    if (b == 10) b = 1;
    c++;
    if (c == 10) c = 1;
  }
  d = d % 11;
  e = e % 11;
  if (d < 10) return d;
  else if (e < 10) return e;
  else return 0;
};
