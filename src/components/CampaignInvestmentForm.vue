<template>
  <div>
    <b-form
      @submit.prevent="createInvestment"
      class="justify-content-center align-items-center"
      inline
    >
      <input name="campaign_id" type="hidden" :value="campaignId">
      <b-input
        id="amount"
        type="number"
        v-model="amount"
        name="amount"
        placeholder="Investment Amount"
        :min="investmentMultiplier"
        :step="investmentMultiplier"
        required
      />
      <b-button type="submit">Invest</b-button>
    </b-form>
  </div>
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
      amount: null,
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
