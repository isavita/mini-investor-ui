<template>
  <div class="container" :key="currentPage">
    <b-row class="mb-4" v-for="row in rowCount">
      <b-col v-for="col in numberOfColumns">
        <CampaignListItem
          v-if="campaigns.length >= layoutCount(row, col)"
          :key="campaignsLookup(row, col).id"
          :campaign="campaignsLookup(row, col)"
        />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import CampaignListItem from '@/components/CampaignListItem.vue'
import ApiClient from '@/api-client.js'

export default {
  name: 'TodoList',
  components: {
    CampaignListItem
  },
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {
      numberOfColumns: 3,
      campaigns: []
    };
  },
  computed: {
    rowCount() {
      return Math.floor((this.campaigns.length - 1) / this.numberOfColumns) + 1
    }
  },
  methods: {
    loadCampaings(page, limit) {
      ApiClient.getCampaings(page, limit, xs => {
        this.campaigns = Array(xs.data.length).fill({
          id: 1,
          name: 'Starling Bank',
          imageUrl: 'https://www.bankingtech.com/files/2017/10/social-image.png',
          precentageRaised: 25,
          targetAmount: 8000000,
          sector: 'Finance',
          contry: 'United Kingdom',
          investmentMultiplier: 12.50
        })
      })
    },
    layoutCount(row, col) {
      return (row - 1) * this.numberOfColumns + col;
    },
    campaignsLookup(row, col) {
      return this.campaigns[this.layoutCount(row, col) - 1];
    }
  },
  created() {
    this.loadCampaings(this.currentPage, this.limit)
  },
  beforeUpdate() {
    this.loadCampaings(this.currentPage, this.limit)
  }
}
</script>
