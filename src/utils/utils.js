
export default function isSameDate(date1, date2) {
  // console.log(date2)
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);
  const result = date1 - date2 == 0;
  return result;
}