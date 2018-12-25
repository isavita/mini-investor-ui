<template>
  <div>
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
