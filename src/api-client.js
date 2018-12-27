const baseUrl = 'http://localhost:4000'

export default {
  createInvestment: function(data, success = x => x, failure = x => x) {
    fetch(`${baseUrl}/api/investments`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => success(data))
      .catch(error => failure(error))
  },
  getCampaign: function(campaignId, success = x => x, failure = x => x) {
    fetch(`${baseUrl}/api/campaigns/${campaignId}`)
      .then(response => response.json())
      .then(data => success(data))
      .catch(error => failure(error))
  },
  getCampaings: function(page, pageSize, success = x => x, failure = x => x) {
    fetch(`${baseUrl}/api/campaigns?page=${page}&page_size=${pageSize}`)
      .then(response => response.json())
      .then(data => success(data))
      .catch(error => failure(error))
  }
}
