<template>
  <div class="container">
    <CampaignList :currentPage="currentPage" />
    <b-pagination
      class="mt-5 justify-content-center"
      size="lg"
      v-model="currentPage"
      :per-page="perPage"
      :total-rows="100"
    >
    </b-pagination>
  </div>
</template>

<script>
// @ is an alias to /src
import CampaignList from '@/components/CampaignList.vue'

export default {
  name: 'CampaignsPage',
  data() {
    return {
      currentPage: 1,
      perPage: 12,
   };
  },
  components: {
    CampaignList
  }
}
</script>
