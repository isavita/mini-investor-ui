<template>
  <div>
    <b-form
      @submit.prevent="createInvestment"
      class="justify-content-center align-items-center"
      inline
    >
      <b-alert
        variant="danger"
        dismissible
        fade
        :show="showError" @dismissed="showError=false"
      >
        {{ errorMessage }}
      </b-alert>
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
      errorMessage: '',
      showError: false,
    }
  },
  methods: {
    loadMultiplierAmount() {
      ApiClient.getCampaign(this.campaignId, response => {
        this.multiplierAmount = response["multiplierAmount"] / 100.0
      })
    },
    createInvestment() {
      const callback = (response) => {
        if (!response["errors"]) {
          this.$router.push({
            path: `investments/response['id']`,
            name: 'SuccessfulInvestmentPage',
            params: { amount: (response['amount'] / 100.0) }
          })
        } else {
          this.showError = true
          this.errorMessage = response["errors"]["detail"]
        }
      }
      const data = { campaignId: this.campaignId, amount: parseInt(this.amount * 100) }
      ApiClient.createInvestment(data, callback)
    }
  },
  created() {
    this.loadMultiplierAmount()
  }
}
</script>
