import { differenceInDays } from 'date-fns';

const validateDate = (value: string) => {
  const date = new Date(value);
  const minDate = new Date('1900.01.01');
  const current = new Date();

  if (differenceInDays(date, minDate) < 0) throw new Error();
  if (differenceInDays(current, date) < 0) throw new Error();

  return date;
};

export default validateDate;
