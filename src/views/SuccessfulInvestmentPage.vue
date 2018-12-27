<template>
  <b-alert variant="success" show>
    <h4>You successfully invested: £ {{ amount }}</h4>
  </b-alert>
</template>
<script>
export default {
  name: 'SuccessfulInvestmentPage',
  props: {
    amount: {
      type: Number,
      required: true
    }
  }
}
</script>
