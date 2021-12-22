/**
  * Сomparing the given day with the current day
  * @param {Object} day 
  * @returns 
  {boolean} If given day is same or before today calling alert and return false
  else returns true
  */
export const checkDay = (day) => {
  if (day.isSameOrBefore(window.moment())) {
    alert('Невозможно произвести операцию задним числом!');
    return false;
  }
  return true;
};
