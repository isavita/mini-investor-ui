<template>
  <div class="investment">
    <CampaignInvestmentForm
      :campaignId="this.$route.params.campaignId"
      :multiplierAmount="this.$route.params.multiplierAmount"
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
