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
import axios from "axios"

export default {
  name: 'App',
  components: {
    Header,
    Error
  },
  methods: {
     async authUser () {
    let user = await axios.get("http://localhost:6060/authuser", {
      headers: { Authorization: this.$cookies.get("sp_tk")},
      })
      this.$store.commit("setUser", user.data)
      console.log(user.data)
    }
  },
  created () {
    this.authUser()
    let items = JSON.parse(localStorage.getItem("cart"))
    if (items != null) {
    this.$store.commit("setCartReload", items)
    } else {
      // console.log("No items")
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
