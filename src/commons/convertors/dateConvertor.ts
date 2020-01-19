import moment from 'moment';
export const convertDate = (date: Date): string => {
  return moment(date).format("dd/mm/YYYY");
};
