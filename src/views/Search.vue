<template>
  <div class="hom">
  <b-container>
  <br>
  <br>
  <br>
  <br>
  <h4>Your Search for "{{ this.$route.query.q }}"</h4>
  <p class="text" v-if="products.length > 1">{{ products.length }} search results</p>
  <p class="text" v-if="products.length < 2 && !products.length == 0">{{ products.length }} search result</p>
  <p class="text" v-if="products.length < 1">No product found</p>
  <br>
  <div class="mx-auto text-center mt-1" v-if="products.length < 1">
  <i class="far fa-frown-open mt-5" style="font-size: 15em; color: gray"></i>
  <p style="color: gray">
  Sorry we couldn't Find any Product for your Search "{{ this.$route.query.q }}"
  </p>
  </div>
  <b-row>
  <CategoryItem :cart="cart" v-for="cart in products" :key="cart.id"/>
  </b-row>
</b-container>
</div>
</template>
<script>
import CategoryItem from "@/components/CategoryItem"

export default {
  name: 'Home',
  components: {
    CategoryItem
  },
  methods: {
     openlogin () {
      this.$router.push("/login")
    },
  },
  data: () => ({
  }),
  watch: {
      '$route.query.q' () {
        this.$store.dispatch({
        type: "setSearchProducts",
        search: this.$route.query.q
      })
      }
  },
  created () {
      this.$store.dispatch({
        type: "setSearchProducts",
        search: this.$route.query.q
      })
  },
  computed: {
    // Get products
    products () {
      return this.$store.state.searchProducts
    },
  }
}
</script>

<style scoped>
.hom {
  background: #f5f5f5
}

.fa-shopping-cart {
  font-size: 20vmin;
}

.emptycart {
  width: 96%;
  margin: 0 auto;
}

.cartActions {
  background-color: white;
  padding: 2vmin;
  margin-top: 2vmin
}


.add {
  width: auto;
  background: #ff9900;
  color: white;
  border: none;
  border-radius: 4px;
  margin-bottom: 3rem;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold
}

.add1 {
  width: 150%;
  background: #fff;
  color: #ff9900;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold;
}

.add1:focus {
  outline: none
}

.add:hover {
  background: #ffad33;
  color: white;
}


.home {
  color: #555555;
}

.bigpic {
  width: 60px;
  height: 60px
}

.details {
  width: 422px;
}

a {
  color: #f68b1e;
  font-size: 13px
}

a:hover {
  color: #f68b1e;
  text-decoration: none
}

.fa-heart {
  color: #f68b1e;
  font-size: 13px;
  margin-right: 1vmin
}


.fa-trash {
  color: #f68b1e;
  font-size: 13px;
  margin-right: 1vmin;
  margin-left: 2vmin
}

@media only screen and (min-width: 768px) {

  .hom {
  background: #fff
}

  .fa-shopping-cart {
  font-size: 20vmin;
}

.emptycart {
  width: 50%;
  margin: 0 auto;
}

.cartActions {
  background-color: white;
  padding: 2vmin;
  margin-top: 2vmin
}


.add {
  width: auto;
  background: #ff9900;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold
}

.add1 {
  width: auto;
  background: #fff;
  color: #ff9900;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold;
}

.add1:focus {
  outline: none
}

.add:hover {
  background: #ffad33;
  color: white;
}


.home {
  background-color:#f5f5f5;
  color: #555555;
  height: 100vh
}

.bigpic {
  width: 60px;
  height: 60px
}

.details {
  width: 422px;
}

a {
  color: #f68b1e;
  font-size: 13px
}

a:hover {
  color: #f68b1e;
  text-decoration: none
}

.fa-heart {
  color: #f68b1e;
  font-size: 13px;
  margin-right: 1vmin
}


.fa-trash {
  color: #f68b1e;
  font-size: 13px;
  margin-right: 1vmin;
  margin-left: 2vmin
}
}
</style>