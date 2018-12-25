import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com'

const headersCORS = {
  'Access-Control-Allow-Origin': 'https://jsonplaceholder.typicode.com',
  'Content-type': 'application/json; charset=UTF-8'
}

export default {
  createInvestment: function(data, success = x => x, failure = x => x) {
    axios
      .post(`${baseUrl}/todos`, data, {headers: headersCORS})
      .then(response => success(response))
      .catch(error => failure(error))
  },
  getCampaings: function(page = 1, limit = 12, success = x => x, failure = x => x) {
    axios
      .get(`${baseUrl}/todos?_limit=${limit}&_page=${page}`)
      .then(response => success(response))
      .catch(error => failure(error))
  }
}
