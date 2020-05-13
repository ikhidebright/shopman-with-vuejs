<template>
  <div id="app">
   <Header />
   <Error />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Error from '@/components/Error.vue'

export default {
  name: 'App',
  components: {
    Header,
    Error
  },
  created () {
    this.$cookies.set("shopman_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX")
    let items = JSON.parse(localStorage.getItem("cart"))
    if (items.length > 0) {
    this.$store.commit("setCartReload", items)
    } else {
      console.log("No items")
    }
  }
}
</script>

<style>

.done {
  color: green
}

a {
  text-decoration: none;
  color: #ff9900;
}

.head {
  text-decoration: none;
  color: #ff9900;
  font-weight: bold;
  margin-top: 9vmin
}

a:hover {
  text-decoration: none;
  color: #ff9900;
}

@media only screen and (min-width: 768px) {
  a {
  text-decoration: none;
  color: #ff9900;
}

.head {
  text-decoration: none;
  color: #ff9900;
  font-weight: bold;
}

a:hover {
  text-decoration: none;
  color: #ff9900;
}
}
</style>
