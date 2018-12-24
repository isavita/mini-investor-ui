<template>
  <form
    @submit.prevent="createInvestment"
  >
    <input name="campaign_id" type="hidden" :value="campaignId">
    <p>
      <label for="amount">Investment Amount</label>
      <input
        type="number"
        v-model="amount"
        name="amount"
        :min="investmentMultiplier"
        :step="investmentMultiplier"
      >
    </p>
    <button type="submit">Invest</button>
  </form>
</template>
<script>
export default {
  name: 'CampaignInvestmentForm',
  props: {
    campaignId: {
      type: Number,
      required: true
    },
    investmentMultiplier: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      amount: 0,
    }
  },
  methods: {
    createInvestment() {
      // TODO: replace this with the actual backend API.
      const BACKEND_URL = 'https://jsonplaceholder.typicode.com/todos';
      fetch(BACKEND_URL, {
        method: 'POST',
        body: JSON.stringify({ title: 'todo 1' }),
        headers: {
          'Access-Control-Allow-Origin': 'https://jsonplaceholder.typicode.com',
          'Content-type': 'application/json; charset=UTF-8'
        }
      }).then(response => response.json())
        .then(json => {
          this.$router.push({
            path: 'investments/:id',
            name: 'SuccessfulInvestmentPage',
            params: { id: json['id'], amount: this.amount }
          })
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
