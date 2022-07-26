import { format } from 'date-fns';

const setDateFormat = (date: Date) => format(date, 'yyyy.MM.dd');

export default setDateFormat;
