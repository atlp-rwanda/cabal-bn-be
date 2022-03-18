/* eslint-disable import/prefer-default-export */
import isAfter from 'date-fns/isAfter';
import parserISO from 'date-fns/parseISO';

export const validateDate = (date, dateToCompare) => {
  const Formatteddate = parserISO(date);
  const anotherdate = parserISO(dateToCompare);
  const valid = isAfter(Formatteddate, anotherdate);
  return valid;
};