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
      type: Number,
      required: true
    },
    multiplierAmount: {
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
      const callback = (response) => {
        this.$router.push({
          path: 'investments/:id',
          name: 'SuccessfulInvestmentPage',
          params: { id: response.data['id'], amount: this.amount }
        })
      }
      ApiClient.createInvestment({ title: 'todo 1' }, callback)
   }
  }
}
</script>
