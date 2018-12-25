<template>
  <b-alert variant="success" show>
    <h4>You successfully invested: £ {{ this.$route.params.amount }}</h4>
  </b-alert>
</template>
<script>
export default {
  name: 'SuccessfulInvestmentPage'
}
</script>
