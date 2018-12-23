<template>
  <div>
    <h1>{{ name }}</h1>
    <ul class="campaigns-list">
      <CampaignListItem
        v-for="campaign in campaigns"
        :key="campaign.id"
        :campaign="campaign"
      />
    </ul>
    <button @click="reverseCampaignsList">Reverse campaign list</button>
  </div>
</template>
<script>
import CampaignListItem from '@/components/CampaignListItem.vue'

export default {
  name: 'TodoList',
  components: {
    CampaignListItem
  },
  data() {
    return {
      name: 'January Campaigns',
      campaigns: [
        {
          id: 1,
          name: 'Starling Bank',
          imageUrl: 'https://www.bankingtech.com/files/2017/10/social-image.png',
          precentageRaised: 25,
          targetAmount: 8000000,
          sector: 'Finance',
          contry: 'United Kingdom',
          investmentMultiplier: 12.50
        },
        {
          id: 2,
          name: 'Tesla Roadster',
          imageUrl: 'https://cdn.teslarati.com/wp-content/uploads/2017/04/preisert-tesla-roadster-convertible-rendering.jpg',
          precentageRaised: 81,
          targetAmount: 500000,
          sector: 'Automotive Industry',
          contry: 'USA',
          investmentMultiplier: 50
        },
        {
          id: 3,
          name: 'Uber',
          imageUrl: 'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/614/cached.offlinehbpl.hbpl.co.uk/news/ORP/uber2-2-2016-20160202092201179.jpg',
          precentageRaised: 94,
          targetAmount: 1000000,
          sector: 'Transportation',
          contry: 'USA',
          investmentMultiplier: 11
        },
      ]
    };
  },
  methods: {
    reverseCampaignsList: function() {
      this.campaigns = this.campaigns.reverse();
    }
  }
}
</script>
<style scoped>
.campaigns-list {
  list-style: none;
}
</style>
