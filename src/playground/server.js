const axios = require('axios');
const basePath = 'http://127.0.0.1:3000'

const getExpenses = () => {
  return axios.get(`${basePath}/expense`)
  .then(response => {
    console.log(response.data)
    return response.data
  })
  .catch(error => {
    console.log(error);
  });
}

export default getExpenses