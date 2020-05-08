<template>
  <div class="home">
  <b-container>
  <br>
  <br>
  <br>
  <div v-if="this.$store.state.cart.length < 1" class="mx-auto emptycart">
  <br>
  <br>
  <br>
  <br>
 <h4 class="text-center"> <i class="fas fa-shopping-cart"></i></h4>
  <h4 class="text-center">Your cart is empty!</h4>
  <p class="text-center">Already have an account? <router-link to='/login'>login</router-link> to see the items in your cart.</p>
   <h4 class="text-center"> <b-button to="/" class="add" style="float: center">START SHOPPING</b-button></h4>
    </div>
  <h4 v-if="this.$store.state.cart.length > 0">Cart ({{ totalQuantity }} items)</h4>
  <br>
  <div v-for="cart in cartitem" :key="cart.id">
  <CartItem :cart="cart"/>
  </div>
  <b-col lg="10" md="10" xl="10">
  <b-row align-h="end">
   <div class="text-right ml-n2" v-if="this.$store.state.cart.length > 0">
  <h5>Total:	₦ {{ totalPrice }} </h5>
 Shipping fees not included yet <br> 
 Customs Fee not included yet
  </div>
  </b-row>
  </b-col>
</b-container>
   <div class='cartActions' v-if="this.$store.state.cart.length > 0">
   <b-container>
   <b-col lg="12" md="12" xl="12">
   <b-row align-h="end">
  <div class='d-lg-flex d-sm-flex flex-sm-row flex-lg-row d-xs-block'>
    <button class="add1" @click="hideModal">CONTINUE SHOPPING</button>
    <button class="add" v-if="this.$store.state.loggedIn" @click="opencart">PROCEED TO CHECKOUT</button>
    <button to="/login" v-if="!this.$store.state.loggedIn" class="add">PROCEED TO CHECKOUT</button>
  </div>
  </b-row>
  </b-col>
  </b-container>
  </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem"

export default {
  name: 'Home',
  components: {
    CartItem
  },
  methods: {
     openlogin () {
      this.$router.push("/login")
    },
  },
  data: () => ({
    categories: null,
    totalQuantity: null,
    totalPrice: null
  }),
  mounted () {

    // calcu;late total quantity in cart
    let totalQuantity = []
    this.$store.state.cart.forEach((item) => {
           totalQuantity.push(item.quantity)
    })
    let total = totalQuantity.reduce((a, b) => {
      return a + b
    })
    this.totalQuantity = total

    // calculate total price
    let totalPrice = []
    this.$store.state.cart.forEach((item) => {
           totalPrice.push(item.subTotal)
    })
    let totalP = totalPrice.reduce((a, b) => {
      return a + b
    })
    this.totalPrice = totalP
  },
  computed: {
    cartitem () {
      return this.$store.state.cart
    }
  }
}
</script>

<style scoped>

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
</style>