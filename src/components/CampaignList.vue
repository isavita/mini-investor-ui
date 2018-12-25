<template>
  <div class="container">
    <b-row v-for="row in rowCount">
      <b-col v-for="col in numberOfColumns">
        <CampaignListItem
          v-if="campaigns.length >= layoutCount(row, col)"
          :key="campaignsLookup(row, col).id"
          :campaign="campaignsLookup(row, col)"
        />
      </b-col>
    </b-row>
   <!--
    <b-pagination size="md" :total-rows="100" v-model="currentPage" :per-page="12">
    </b-pagination>
   -->
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
      numberOfColumns: 3,
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
  computed: {
    rowCount() {
      return Math.floor((this.campaigns.length - 1) / this.numberOfColumns) + 1
    }
  },
  methods: {
    layoutCount(row, col) {
      return (row - 1) * this.numberOfColumns + col;
    },
    campaignsLookup(row, col) {
      return this.campaigns[this.layoutCount(row, col) - 1];
    }
  }
}
</script>
<style scoped>
.campaigns-list {
  list-style: none;
}
</style>
