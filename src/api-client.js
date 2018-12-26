const baseUrl = 'http://localhost:4000' //'https://jsonplaceholder.typicode.com'
/*
const headersCORS = {
  'Access-Control-Allow-Origin': 'http://localhost:4000',
  'Access-Control-Allow-Headers': 'Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since,X-CSRF-Token',
  'Content-Type': 'application/x-www-form-urlencoded'//'application/json; charset=UTF-8'
}
*/

export default {
  createInvestment: function(data, success = x => x, failure = x => x) {
  },
  getCampaings: function(page = 1, pageSize = 12, success = x => x, failure = x => x) {
    fetch(`${baseUrl}/api/campaigns?page=${page}&page_size=${pageSize}`)
      .then(response => response.json())
      .then(data => success(data))
      .catch(error => failure(error))
  }
}
