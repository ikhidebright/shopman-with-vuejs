<template>
  <div id="app">
   <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  created () {
    let items = JSON.parse(localStorage.getItem("cart"))
    if (items.length > 0) {
    this.$store.commit("setCartReload", items)
    } else {
      console.log("No items")
    }
  }
}
</script>

<style lang="scss">
</style>
