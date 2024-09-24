export const convertISODateToYYYYMMDD = (isoDateString: string) => {
  // const isoDateString = "2024-09-24T22:55:56.000Z";
  const date = new Date(isoDateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate
}