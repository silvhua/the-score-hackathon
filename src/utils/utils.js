
export default function isSameDate(date1, date2) {
  // console.log(date2)
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);
  const result = date1 - date2 == 0;
  return result;
}

export const formatDate = (dateObject, options = null) => {
    // format a date to the "MM/DD/YYYY"    
    if (options === null) {
        options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    }
    const formattedDate = dateObject.toLocaleDateString('en-CA', options) // format the date to string
        .replace(/,/g, ''); // remove commas
    return formattedDate
}