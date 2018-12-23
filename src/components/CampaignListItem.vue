<template>
  <li class="campaign-item">
    <p>{{ campaign.name }}</p>
    <router-link
      :to="{ name: 'NewInvestmentPage', params: { campaignId: campaign.id, investmentMultiplier: campaign.investmentMultiplier } }"
    >
      <img :src="campaign.imageUrl" class="campaign-image" alt="No Image"/>
    </router-link>
    <p>{{ campaign.precentageRaised }}% raised</p>
    <p>£ {{ campaign.targetAmount}}</p>
    <p>{{ campaign.sector }}</p>
    <p>{{ campaign.contry }}</p>
    <p>£ {{ campaign.investmentMultiplier }}</p>
  </li>
</template>
<script>
export default {
  name: 'CampaignListItem',
  props: {
    campaign: {
      type: Object,
      required: true,
      validator: function() {
        return true;
      }
    }
  }
}
</script>
<style scoped>
.campaign-image {
  width: 250px;
}
.campaign-item {
  border: 1px solid black;
}
</style>
