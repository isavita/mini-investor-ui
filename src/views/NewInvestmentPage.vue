<template>
  <div class="investment">
    <CampaignInvestmentForm
      :campaignId="$route.params.id"
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
