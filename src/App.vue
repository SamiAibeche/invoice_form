<template>
  <div id="app">
    <router-view class="InvoiceHeader" name="InvoiceHeader"></router-view>
    <router-view/>
    <router-view class="InvoiceFooter" name="InvoiceFooter"></router-view>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
