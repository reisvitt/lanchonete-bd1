/* eslint-disable radix, no-restricted-globals */

export const isValidDateExp = (value) => {
  const regex = /(^[0-9]{2})\/([0-9]{2})$/;
  if (!value || !regex.test(value)) return false;

  const data = value.match(regex);
  const currMonth = Number(data[1]);
  const currYear = parseInt(`20${Number(data[2])}`);

  if (isNaN(currMonth) || isNaN(currYear)) return false;

  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  if (currYear < year) return false;
  if (currYear === year && currMonth <= month) return false;
  return currMonth >= 1 && currMonth <= 12;
};
