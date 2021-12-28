/**
  * Сomparing given day with the current day
  * @param {Object} 
  * moment object of day 
  * @returns 
  {boolean} If given day is same or before today return false else true
  */
export const checkDay = (day) => {
  return day.isSameOrBefore(window.moment()) ? false : true;
};
