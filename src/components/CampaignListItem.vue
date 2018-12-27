<template>
  <router-link
    :to="{ name: 'NewInvestmentPage', params: { id: campaign.id } }"
    class="card-link"
  >
    <b-card
      :img-src="campaign.imageUrl"
      :title="campaign.name"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-4 h-100"
    >
      <b-list-group flush>
       <b-list-group-item>£ {{ campaign.targetAmount}} Target</b-list-group-item>
       <b-list-group-item>£ {{ campaign.multiplierAmount }} Minimum investment</b-list-group-item>
       <b-list-group-item>{{ campaign.sector }}</b-list-group-item>
       <b-list-group-item>{{ campaign.countryName }}</b-list-group-item>
      </b-list-group>
      <b-card-footer class="footer">
        <b-progress height="20px" class="mb-2" :max="max" show-value>
          <b-progress-bar :value="campaign.raisedPrecentage" variant="success"></b-progress-bar>
        </b-progress>
      </b-card-footer>
    </b-card>
  </router-link>
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
  },
  data() {
    return {
      max: 100
    }
  }
}
</script>
<style scoped>
.list-group {
  color: #000;
}
.footer {
  background-color: white;
}
</style>
