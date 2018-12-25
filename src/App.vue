<template>
  <div id="app">
    <b-navbar variant="dark" type="dark" class="mb-4">
      <b-navbar-brand tag="h1" class="mb-0" to="/">
        Campaigns
      </b-navbar-brand>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
