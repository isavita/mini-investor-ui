<template>
  <div class="container">
    <CampaignList :campaigns="campaigns" :numberOfColumns="numberOfColumns"/>
    <b-pagination
      class="mt-5 justify-content-center"
      size="lg"
      v-model="currentPage"
      @input="loadCampaings"
      :per-page="perPage"
      :total-rows="totalRows"
    >
    </b-pagination>
  </div>
</template>

<script>
import CampaignList from '@/components/CampaignList.vue'
import ApiClient from '@/api-client.js'

export default {
  name: 'CampaignsPage',
  components: {
    CampaignList
  },
  data() {
    return {
      numberOfColumns: 3,
      currentPage: 1,
      perPage: 9,
      totalRows: 0,
      campaigns: []
   };
  },
  methods: {
    loadCampaings() {
      ApiClient.getCampaings(this.currentPage, this.perPage, (response) => {
        if (response.data && response.data['campaigns']) {
          this.totalRows = response.meta['totalEntries']
          this.campaigns = response.data['campaigns'].map(campaign => {
            return {
              id: campaign['id'],
              name: campaign['name'],
              imageUrl: campaign['imageUrl'],
              raisedPrecentage: parseFloat(campaign['raisedPercentage']),
              targetAmount: campaign['targetAmount'] / 100.0,
              sector: campaign['sector'],
              countryName: campaign['countryName'],
              multiplierAmount: campaign['multiplierAmount'] / 100.0
            }
          })
        }
      })
    },
  },
  created() {
    this.loadCampaings()
  }
}
</script>
