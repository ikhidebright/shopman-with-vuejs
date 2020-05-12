<template>
  <div class="main">
  <b-container>
  <br>
  <div class='d-lg-flex d-sm-flex flex-sm-column flex-lg-row mt-5'>
  <div>
  <h6>CHECKOUT</h6>
     <div class='hee2 mt-3'><h6>1. ADDRESS DETAILS</h6></div>
   <div class='third2'>
 <p>
bright ikhide
<br>
Opposite. Railway Station Bassan Airport Village, Abuja, ABUJA AIRPORT <br> 
ROAD- SAUKA/IMMIGRATION HQ, Federal Capital Territory
<br>
+2349067998961
</p>
 </div>
 <div>
     <div class='hee2 mt-3'><h6>2. DELIVERY METHOD</h6></div>
   <div class='third2'>
   <b>How do you want your order delivered?</b>
 <b>
<br>
<br>
* Large items (e.g. Freezers) may arrive 2 business days later than other products.
<br>
<br>
* Living in Lagos, Abuja or Ibadan, SHOPMAN PRIME Members enjoy Free Delivery on Shopman Express Items (excluding bulky items).
<br>
<br>
Kindly confirm your delivery address is accessible before placing your order
<br>
<br>
We are prioritizing groceries and essential products, deliveries may be delayed on other products.
<br>
<br>
We are unable to deliver to Borno and Yobe due to the COVID 19 pandemic lockdown restrictions
</b>
<br>
<br>
<div>
<p class="text-center">You will be able to add a voucher in the next step</p>
 <b-button type="submit" block class="add" style="background: #ff9900; 
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold">
PROCEED TO NEXT STEP
</b-button>
  </div>
 </div>
 </div>
<div>
     <div class='hee2 mt-3'><h6>3. PAYMENT METHOD</h6></div>
  </div>
 </div>
<div>
<h6 class="ml-3 mb-3">ORDER SUMMARY</h6>
   <div class='mt-sm-2 mt-lg-0'>
     <div class='ml-lg-3 hee'>YOUR ORDER ({{ cartQty }} items)</div>
   <div class='ml-lg-3 third'>
    <div class="">
    <CheckOutCartItem v-for="cart in cartitem" :key="cart.id" :cart="cart"/>
 </div>
 </div>
   <p class='text-center'><b-button class='mt-2 changepassword2' to='/cart'>MODIFY CART</b-button></p>
 </div>
 </div>
 </div>
 <br>
  <br>
   <br>
  </b-container>
  </div>
</template>

<script>
import CheckOutCartItem from "@/components/Product/CheckOutCartItem.vue"

export default {
  name: 'Home',
  data: () => ({
  }),
   computed: {
    // get cart order
    cartitem () {
      return this.$store.state.cart
    },
    // get cart qty 
    cartQty () {
      return this.$store.getters.getCartQty
    }
   },
   components: {
    CheckOutCartItem
   }
}
</script>

<style scoped>
.changepassword2 {
    background-color: #f1f1f1;
  color: #f68B1E;
  border: none;
  border-radius: 0.5vmin;
  padding: 1vmin;
  font-weight: bold;
}

.changepassword2:hover {
    background-color: #f1f1f1;
  color: #f68B1E;
  border: none;
  border-radius: 0.5vmin;
  padding: 1vmin;
  font-weight: bold;
}

.changepassword2:focus {
 outline: none
}

.fa-star {
  color: black
}

a {
  font-size: 0.9rem
}

.fa-facebook, .fa-twitter {
  font-size: 20px;
  margin-top: 5px
}

.fa-shuttle-van, .fa-telegram-plane {
  font-size: 26px
}

.fa-telegram-plane {
  font-size: 30px
}

.main {
  background-color: #f1f1f1;
  height: auto
}

.sec {
  width: 100%;
}

.bigpic {
  width: 305px;
  height: 305px;
  border-radius: 5px
}

.smimg {
  width: 38px;
  height: 38px
}

.details {
  background-color: white;
  padding: 1rem;
  width: 100%;
  border-radius: 1vmin
}

.pron {
  font-size: 20px
}

.price {
  font-size: 24px;
  font-weight: bold
}

.oldprice {
  font-size: 16px;
  color: #75757A;

}

.add {
  width: 100%;
  background: #ff9900;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold
}

.add1 {
  width: 100%;
  background: #fff;
  color: #ff9900;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold;
  margin-bottom: 1rem;
}

.add1:focus {
  outline: none
}

.add:hover {
  background: #ffad33;
}

.fa-cart-plus {
font-size: 20px
}

.phone {
  width: 15%;
  background: white;
  color: #ff9900;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
   margin-right: 1vmin;
  font-weight: bold
}

.phone:focus {
 outline: none
}

.mobile {
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  margin-top: 2rem;
  padding: 9px 9px 9px 9px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
}


.add:focus {
  outline: none
}

.add2 {
  width: 85%;
  background: #ff9900;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold
}

.add2:hover {
  background: #ffad33;
}

.fa-cart-plus {
font-size: 20px
}

.add2:focus {
  outline: none
}

.third {
  background-color: white;
  padding: 0.5rem 0 0.5rem 0;
  width: 100%
}

.third2 {

  background-color: white;
  padding: 0.5rem;
  width: 100%
}

.fa-cart-plus {
  float: left
}

.hee {
  background-color: white;
  padding: 0.5rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 100%;
  margin-top: 1rem;
  font-weight: 600;
  border-bottom: 1px solid #f2f2f2
}

.hee2 {
  background-color: white;
  padding: 0.5rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 100%;
  font-weight: 600;
  border-bottom: 1px solid #f2f2f2
}

.oldprice {
  text-decoration: line-through;
  color: gray
}

p {
  font-size: 14px;
  color: #282828
}


@media only screen and (min-width: 600px) {

.add1 {
  width: 100%;
  background: #fff;
  color: #ff9900;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold;
  margin-right: 0.1rem;
}

.add {
  margin-left: 0.1rem;
}
  
.fa-facebook, .fa-twitter {
  font-size: 20px;
  margin-top: 5px
}

.fa-shuttle-van, .fa-telegram-plane {
  font-size: 26px
}

.fa-telegram-plane {
  font-size: 30px
}

.main {
  background-color: #f1f1f1;
  height: auto
}

.sec {
  width: 100%;
}

.bigpic {
  width: 305px;
  height: 305px;
  border-radius: 5px
}

.smimg {
  width: 38px;
  height: 38px
}

.details {
  background-color: white;
  padding: 1rem;
  width: 872px
}

.pron {
  font-size: 20px
}

.price {
  font-size: 24px;
  font-weight: bold
}

.oldprice {
  font-size: 16px;
  color: #75757A;

}

.add {
  width: 100%;
  background: #ff9900;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold
}

.add:hover {
  background: #ffad33;
}

.fa-cart-plus {
font-size: 20px
}

.phone {
  width: 15%;
  background: white;
  color: #ff9900;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
 
  font-weight: bold
}

.mobile {
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  padding: 5px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
}


.add:focus {
  outline: none
}

.add2 {
  width: 85%;
  background: #ff9900;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold
}

.add2:hover {
  background: #ffad33;
}

.fa-cart-plus {
font-size: 20px
}

.add2:focus {
  outline: none
}

.third {
  background-color: white;
  padding: 0.5rem 0 0.5rem 0;
  width: 296px
}

.third2 {
  background-color: white;
  padding: 0.5rem;
  width: 800px
}

.fa-cart-plus {
  float: left
}

.hee {
  background-color: white;
  padding: 0.5rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 296px;
  margin-top: 0rem;
  font-weight: 600;
  border-bottom: 1px solid #f2f2f2
}

.hee p {
  font-size: 14px;
  font-family: "Roboto"
}

.hee2 {
  background-color: white;
  padding: 0.5rem;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 800px;
  font-weight: 600;
  border-bottom: 1px solid #f2f2f2
}

.oldprice {
  text-decoration: line-through;
  color: gray
}

p {
  font-size: 14px;
  color: #282828
}
}
</style>