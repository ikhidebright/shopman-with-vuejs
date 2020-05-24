<template>
  <div class="hom">
  <b-container>
  <br>
  <br>
  <br>
  <br>
  <h4>{{ products[0].category }}</h4>
  <p class="text">{{ products.length }} products</p>
  <br>
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
  computed: {
    // Get products
    products () {
      return this.$store.state.categoryProducts
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