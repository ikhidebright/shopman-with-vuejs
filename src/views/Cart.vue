<template>
  <div class="home mt-4">
  <br>
  <br>
<b-container fluid>
  <div class="updatealert mt-3" v-if="this.$store.state.cart.length > 0">
Your cart has been updated
</div>
</b-container fluid>
  <b-container>
  <div v-if="this.$store.state.cart.length < 1" class="mx-auto emptycart">
  <br>
  <br>
  <br>
  <br>
 <h4 class="text-center"> <i class="fas fa-shopping-cart"></i></h4>
  <h4 class="text-center">Your cart is empty!</h4>
  <p class="text-center"><router-link to='/'>Add items to your Cart now.</router-link> it's easy!</p>
  <h4 class="text-center ml-3"> <b-button to="/" class="add" style="float: center">START SHOPPING</b-button></h4>
  </div>
  <h4 class="cartcart" v-if="this.$store.state.cart.length > 0">Cart ({{ totalQuantity.toLocaleString() }} items)</h4>
  <br>
  <div class="mx-auto">

  <div class="label d-none d-sm-block d-lg-block d-xl-block d-md-block ml-3 mb-2">
  <p class="labelItem">ITEM</p> 
  <p class="labelQty">QUANTITY</p>	
  <p class="labelPrice">UNIT PRICE</p>	
  <p class="labelSub">SUBTOTAL</p>
  </div>

  <CartItem v-for="cart in cartitem" :key="cart.id" :cart="cart"/>

  </div>
  <b-col lg="10" md="10" xl="10">
  <b-row align-h="end" class="mr-0">
   <div class="text-right mr-1 mt-4" v-if="this.$store.state.cart.length > 0">
  <p class="total ml-3">Total:</p>	<p class="tp">₦ {{ totalPrice.toLocaleString() }} </p>
 <p class="ship mt-n1">Shipping fees not included yet </p> 
 <p class="ship mt-n1">Customs Fee not included yet</p>
  </div>
  </b-row>
  </b-col>
</b-container>
   <div class='cartActions' v-if="this.$store.state.cart.length > 0">


<b-container>
   <!-- for desktop -->
   <div class="ca d-none d-sm-block d-lg-block d-xl-block d-md-block ml-3">
    <div class="connn">
   <b-button class="continueShop" @click="openlogin">CONTINUE SHOPPING</b-button>
   <b-button class="proceedToCheck" @click="checkout">PROCEED TO CHECKOUT</b-button>
   </div>
   </div>


    <!-- for mobile -->
   <div class="ca d-sm-none d-lg-none d-xl-none d-md-none">
    <div class="connn">
   <b-button class="proceedToCheck" @click="checkout">CHECKOUT</b-button>
   <b-button class="continueShop" href="tel:[07064045329]">CALL TO ORDER</b-button>
   </div>
   </div>
   </b-container>
   <!--<b-container>
   <b-col lg="12" md="12" xl="12" xs="12">
   <b-row align-h="end" class="mr-5">
  <div class='d-lg-flex d-sm-flex flex-sm-row flex-lg-row d-xs-block mr-5'>
    <b-button class="add1 mb-2 d-none d-sm-block d-lg-block d-xl-block d-md-block" to="/">CONTINUE SHOPPING</b-button>
    <b-button to="/checkout" class="addd d-none d-sm-block d-lg-block d-xl-block d-md-block">PROCEED TO CHECKOUT</b-button>
    <b-button to="/checkout" class="addd d-sm-none d-lg-none d-xl-none d-md-none">CHECKOUT</b-button>
    <b-button class="add1 mb-2 d-sm-none d-lg-none d-xl-none d-md-none mt-2">CALL TO ORDER</b-button>
  </div>
  </b-row>
  </b-col>
  </b-container> -->
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
      this.$router.push("/")
    },
    checkout () {
      this.$router.push("/checkout")
    },
  },
  data: () => ({
  }),
  computed: {
    // Get cart
    cartitem () {
      return this.$store.state.cart
    },
    // get total cart quantity
    totalQuantity () {
      return this.$store.getters.getCartQty
    },
    // get cart total price
    totalPrice () {
      return this.$store.getters.getTotalPrice
    },
  }
}
</script>

<style scoped>

.connn {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 0 10px;
    position: relative;
    box-sizing: border-box;
    display: block;
    text-align: right;
    line-height: 1.42857;
    color: #555;
    -webkit-tap-highlight-color: transparent;
    direction: ltr;
  }

  .ca {
    background-color: #fff;
    clear: both;
    text-align: right;
    box-sizing: border-box;
    display: block;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-size: 12px;
    line-height: 1.42857;
    color: #555;
    -webkit-tap-highlight-color: transparent;
    direction: ltr;
  }

.continueShop {
    min-width: 100%;
    font-size: 1.34em;
    font-weight: 500;
    padding: 8px 16px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.15);
    background-color: #fff;
    border: 1px solid #fff;
    color: #f68b1e;
    cursor: pointer;
    display: block;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-style: normal;
    line-height: 1.42857;
    position: relative;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    direction: ltr;
    border-radius: 0px!important;
  }

   .proceedToCheck {
    white-space: normal;
    min-width: 100%;
    display: block;
    text-transform: uppercase;
    padding: 8px 16px;
    font-weight: 500;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    border-radius: 0;
    color: #fff;
    background-color: #f68b1e;
    border-color: #f68b1e;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: none;
    margin-bottom: 6px!important;
    box-shadow: 0 2px 8px 0 #ddd;
    box-sizing: border-box;
    background-repeat: no-repeat;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    resize: none;
    outline: 0;
    line-height: 1.42857;
  }


.continueShop:hover {
    min-width: 100%;
    font-size: 1.34em;
    font-weight: 500;
    padding: 8px 16px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.15);
    background-color: #fff;
    border: 1px solid #fff;
    color: #f68b1e;
    cursor: pointer;
    display: block;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-style: normal;
    line-height: 1.42857;
    position: relative;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    direction: ltr;
    border-radius: 0px!important;
  }

   .proceedToCheck:hover {
    white-space: normal;
    min-width: 100%;
    display: block;
    text-transform: uppercase;
    padding: 8px 16px;
    font: 500 /1 Roboto,Helvetica,Arial,sans-serif;
    border-radius: 0;
    color: #fff;
    background-color: #f68b1e;
    border-color: #f68b1e;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: none;
    margin-bottom: 6px!important;
    box-shadow: 0 2px 8px 0 #ddd;
    box-sizing: border-box;
    background-repeat: no-repeat;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    resize: none;
    outline: 0;
  }

.tp {
  box-sizing: border-box;
    background-repeat: no-repeat;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    resize: none;
    outline: 0;
    direction: ltr;
    unicode-bidi: isolate;
    color: #f68b1e;
    font-weight: 700;
    text-align: right!important;
    font-size: 1.3rem;
    font: 1.5rem/1.33;
}

.total {
  box-sizing: border-box;
    background-repeat: no-repeat;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    resize: none;
    outline: 0;
    direction: ltr;
    unicode-bidi: isolate;
    color: #000;
    font-weight: 400;
    text-align: left!important;
    float: left;
    font-size: 1.2rem;
    font: 1.5rem/1.33;
}

.ship {
  position: relative;
    min-height: 1px;
    float: left;
    text-align: right!important;
    box-sizing: border-box;
    background-repeat: no-repeat;
    width: 100%;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    resize: none;
    outline: 0;
    -webkit-appearance: none;
    font-size: .8em;
    color: gray;
}

.cartcart {
  font-size: 22px;
    line-height: 26px;
    font-weight: 700;
    color: #000;
    margin-top: 16px;
}

.updatealert {
border-color: #b0da7c;
    color: #b0da7c;
    border-width: 1px;
    border-style: solid;
    padding: 2px 5px;
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-size: 12px;
    line-height: 1.42857;
}

.fa-shopping-cart {
  font-size: 20vmin;
}

.emptycart {
  width: 96%;
  margin: 0 auto;
  height: 100vh
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

.addd {
  width: 150%;
  background: #ff9900;
  color: white;
  border: none;
  border-radius: 4px;
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
  background-color:#f5f5f5;
  color: #555555;
  min-height: 100vh;
  max-height: auto
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

  .labelSub {
    width: 25%;
    display: table-cell;
    text-align: center;
    box-sizing: border-box;
    color: #8e8e93;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.14;
    text-transform: uppercase;
    border-collapse: collapse;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    -webkit-tap-highlight-color: transparent;
    direction: ltr;
  }

  .labelPrice {
    width: 24.9%;
    display: table-cell;
    text-align: center;
    box-sizing: border-box;
    color: #8e8e93;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.14;
    text-transform: uppercase;
    border-collapse: collapse;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    -webkit-tap-highlight-color: transparent;
    direction: ltr;
  }

  .labelQty {
    width: 14.7%;
    display: table-cell;
    text-align: center;
    box-sizing: border-box;
    color: #8e8e93;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.14;
    text-transform: uppercase;
    border-collapse: collapse;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    -webkit-tap-highlight-color: transparent;
    direction: ltr;

  }

  .labelItem {
    text-align: left;
    width: 51.3%;
    display: table-cell;
    box-sizing: border-box;
    color: #8e8e93;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.14;
    text-transform: uppercase;
    border-collapse: collapse;
        -webkit-tap-highlight-color: transparent;
    direction: ltr;
    font-family: Roboto,Helvetica,Arial,sans-serif;
  }

  .connn {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 10px;
    position: relative;
    box-sizing: border-box;
    display: block;
    text-align: right;
        line-height: 1.42857;
    color: #555;
        -webkit-tap-highlight-color: transparent;
    direction: ltr;
  }

  .ca {
    background-color: #fff;
    clear: both;
    text-align: right;
    box-sizing: border-box;
    display: block;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-size: 12px;
    line-height: 1.42857;
    color: #555;
    -webkit-tap-highlight-color: transparent;
    direction: ltr;
  }

  .labe {
    max-width: 100%;
  }


  .continueShop {
    min-width: 240px;
    font-size: 1.34em;
    font-weight: 500;
    margin-left: 10px;
    padding: 8px 16px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.15);
    background-color: #fff;
    border: 1px solid #fff;
    color: #f68b1e;
    cursor: pointer;
    display: inline-block;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-style: normal;
    line-height: 1.42857;
    position: relative;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    direction: ltr;
    border-radius: 0px!important;
  }

   .proceedToCheck {
    min-width: 240px;
    font-size: 1.34em;
    font-weight: 500;
    margin-left: 10px;
    padding: 8px 16px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.15);
    text-transform: uppercase;
    background: #f68b1e;
    border: 1px solid #f68b1e;
    cursor: pointer;
    display: inline-block;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-style: normal;
    line-height: 1.42857;
    box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    direction: ltr;
    border-radius: 0px!important;
    position: relative;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
  }


.continueShop:hover {
    min-width: 240px;
    font-size: 1.34em;
    font-weight: 500;
    margin-left: 10px;
    padding: 8px 16px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.15);
    background-color: #fff;
    border: 1px solid #fff;
    color: #f68b1e;
    cursor: pointer;
    display: inline-block;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-style: normal;
    line-height: 1.42857;
    position: relative;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    direction: ltr;
    border-radius: 0px!important;
  }

   .proceedToCheck:hover {
    min-width: 240px;
    font-size: 1.34em;
    font-weight: 500;
    margin-left: 10px;
    padding: 8px 16px;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.15);
    text-transform: uppercase;
    background: #f68b1e;
    border: 1px solid #f68b1e;
    cursor: pointer;
    display: inline-block;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-style: normal;
    line-height: 1.42857;
    box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    direction: ltr;
    border-radius: 0px!important;
    position: relative;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
  }


  .tp {
  box-sizing: border-box;
    background-repeat: no-repeat;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    resize: none;
    outline: 0;
    direction: ltr;
    unicode-bidi: isolate;
    color: #f68b1e;
    font-weight: 700;
    text-align: right!important;
    font-size: 1.3rem;
    font: 1.5rem/1.33;
}

.total {
  box-sizing: border-box;
    background-repeat: no-repeat;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    resize: none;
    outline: 0;
    direction: ltr;
    unicode-bidi: isolate;
    color: #000;
    font-weight: 400;
    text-align: left!important;
    float: left;
    font-size: 1.2rem;
    font-weight: 500;
}

.ship {
  clear: both;
    color: #ababab;
    float: right;
    font-size: 14px;
    margin-bottom: 8px!important;
    box-sizing: border-box;
    display: block;
    line-height: 1.42857;
    -webkit-tap-highlight-color: transparent;
    direction: ltr;
}




  .fa-shopping-cart {
  font-size: 20vmin;
}

.emptycart {
  width: 50%;
  margin: 0 auto;
  height: 100vh
}

.cartActions {
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
  min-height: 100vh;
  max-height: auto
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