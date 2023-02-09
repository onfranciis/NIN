/**
 * Confirm If All The Digits In A String Are Numbers
 *
 * @param {string} value String to be checked
 * @return {boolean} Returns true if all values are numbers
 */

export const numberValidator = (value: string): boolean => {
  const length = value.length;
  let i;
  let member;
  for (i = 0; i < length; i++) {
    const element = value[i];
    member = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(
      element
    );
    if (!member) break;
  }
  if (member) {
    return true;
  } else {
    return false;
  }
};
