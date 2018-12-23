<template>
  <div class="investment">
    <CampaignInvestmentForm
      :campaignId="this.$route.params.campaignId"
      :investmentMultiplier="this.$route.params.investmentMultiplier"
    />
  </div>
</template>
<script>
import CampaignInvestmentForm from '@/components/CampaignInvestmentForm.vue'

export default {
  name: 'NewInvestmentPage',
  components: {
    CampaignInvestmentForm
  }
}
</script>
