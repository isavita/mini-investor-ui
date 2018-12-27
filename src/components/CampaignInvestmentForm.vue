<template>
  <div>
    <b-form
      @submit.prevent="createInvestment"
      class="justify-content-center align-items-center"
      inline
    >
      <b-input
        id="amount"
        type="number"
        v-model="amount"
        name="amount"
        placeholder="Investment Amount Pennies"
        :min="multiplierAmount"
        :step="multiplierAmount"
        required
      />
      <b-button type="submit">Invest</b-button>
    </b-form>
  </div>
</template>
<script>
import ApiClient from '@/api-client'

export default {
  name: 'CampaignInvestmentForm',
  props: {
    campaignId: {
      required: true
    }
  },
  data() {
    return {
      amount: null,
      multiplierAmount: null,
    }
  },
  methods: {
    loadMultiplierAmount() {
      ApiClient.getCampaign(this.campaignId, response => {
        this.multiplierAmount = response["multiplierAmount"]
      })
    },
    createInvestment() {
      const callback = (response) => {
        this.$router.push({
          path: `investments/response['id']`,
          name: 'SuccessfulInvestmentPage',
          params: { amount: response['amount'] }
        })
      }
      const data = { campaignId: this.campaignId, amount: parseInt(this.amount) }
      ApiClient.createInvestment(data, callback)
    }
  },
  created() {
    this.loadMultiplierAmount()
  }
}
</script>
