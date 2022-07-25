import setDateFormat from '@utils/setDateFormat';

const removeEndDot = (date: string) =>
  date[date.length - 1] === '.' ? date.slice(0, date.length - 1) : date;

const changeDateDBFormat = (value: string) => {
  const date = value
    .split('~')
    .map(d => d.replace(/[^\w]/gi, str => (str === ' ' ? '' : '.')))
    .map(d => removeEndDot(d.trim()));

  date.map(d => {
    if (d.replace(/\./g, '').length !== d.length - 2) throw new Error();
    const month = d.split('.')[1];
    const checkMonth = month.length === 1 ? `0${month}` : month;
    if (checkMonth !== setDateFormat(new Date(d)).split('.')[1])
      throw new Error();
  });

  return date.map(item => setDateFormat(new Date(item)));
};

export default changeDateDBFormat;
