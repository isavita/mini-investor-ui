<template>
  <div class="home">
    <img class="investor-logo" alt="Investor logo" src="../assets/logo.jpg">
    <CampaignList/>
  </div>
</template>

<script>
// @ is an alias to /src
import CampaignList from '@/components/CampaignList.vue'

export default {
  name: 'CampaignsPage',
  components: {
    CampaignList
  }
}
</script>
<style>
.investor-logo {
  max-width: 250px;
  height: auto;
}

</style>
