/**
  * Сomparing given day with the current day
  * @param {Object} 
  * moment object of day 
  * @returns 
  {boolean} If given day is same or before today calling alert and return false
  else true
  */
export const checkDay = (day) => {
  if (day.isSameOrBefore(window.moment())) {
    return false;
  }
  return true;
};
