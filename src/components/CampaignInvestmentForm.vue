<template>
  <form
    method="post"
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
    <button type="submit" @click="createInvestment">Invest</button>
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
      console.log(this.amount);
      // TODO: replace this with the actual backend API.
      const BACKEND_URL = 'https://jsonplaceholder.typicode.com/todos';
      fetch(BACKEND_URL, {
        method: 'POST',
        body: JSON.stringify({ title: "todo 1" }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      }).then(response => response.json())
        .then(json => {
          console.log(json)
          this.$router.push({
            path: 'investments/:id',
            name: 'SuccessfulInvestmentPage',
            params: { id: json['id'] }
          })
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
