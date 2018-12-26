<template>
  <div class="container">
    <b-row class="mb-4" v-for="row in rowCount" :key="row">
      <b-col v-for="col in numberOfColumns" :key="`${row}${col}`">
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

export default {
  name: 'CampaignList',
  components: {
    CampaignListItem
  },
  props: {
    campaigns: {
      type: Array,
      required: true,
    },
    numberOfColumns: {
      type: Number,
      required: true,
    }
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
  },
}
</script>
