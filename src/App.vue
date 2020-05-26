<template>
  <div id="app">
  <div class="mb-5">
  <Header />
  </div>
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
    let isToken = this.$cookies.isKey("sp_tk")
    if (!isToken) {
      // not
    } else {
    let user = await axios.get("https://shopman-backend.herokuapp.com/authuser", {
      headers: { Authorization: this.$cookies.get("sp_tk")},
      })
      this.$store.commit("setUser", user.data)
    }
  }
},
 created () {
    this.authUser()
    let items = JSON.parse(localStorage.getItem("cart"))
    if (items != null) {
    this.$store.commit("setCartReload", items)
    } else {
      // not
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
