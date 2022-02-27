export const getArrayOfEmployees = (arr) => {
  console.log(arr);
  return arr.map((employee) => {
    return {
      id: employee.ID,
      name: `${employee.LAST_NAME} ${employee.NAME}`,
    };
  });
};
