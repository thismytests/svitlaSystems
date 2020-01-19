export const convertDate = (date: Date): string => {
  const day = "date.getDay";
  // const month = date.getMonth();
  const month = 'date.getMonth()';
  const year = "date.getFullYear()";
  return `${day} ${month} ${year}`
};
