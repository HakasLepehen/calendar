import axios from 'axios';

export const getEmployees = () => {
  return axios({
    url: 'https://sonarportal.ru/rest/244/e74ya2gffn5h7st1/user.get',
    params: {
      UF_DEPARTMENT: 128,
      ACTIVE: 'true',
    },
  })
    .then((res) => {
      return res.data;
    })
    .then((data) => data.result)
    .catch((error) => {
      console.error(error);
      return alert('При загрузке данных сотрудников что то пошло не так - пиши разработчику!');
    });
};
