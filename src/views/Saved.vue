<template>
  <div class="maindash">
  <b-container>
  <br>
  <div class='d-lg-flex d-sm-flex flex-sm-column flex-lg-row mt-5'>
   <div class='mt-sm-2 mt-lg-0'>
   <div class='ml-lg-3 third'>
      <b-link class="dropdown-item" to="/dashboard"><i class="fas fa-user mr-3"></i> My Shopman Account</b-link>
      <b-link class="dropdown-item" to="/orders"><i class="fas fa-box mr-3"></i>Orders</b-link>
      <b-link class="dropdown-item acc" to="saved"><i class="fas fa-heart mr-3"></i>Saved Items</b-link>
      <div class="dropdown-divider"></div>
      <b-link class="dropdown-item" to="address">Address Book</b-link>
      <b-link class="dropdown-item" to="changepass">Change Password</b-link>
      <div class="dropdown-divider"></div>
      <p class='text-center'><button class='mb-2 changepassword2'>LOGOUT</button></p>
 </div>
   </div>
 
  
<div class='d-lg-flex d-sm-flex flex-sm-column flex-lg-row details'>
<div style="width: 100%">
<p class='mx-3 sidehead'>Saved Products</p>
  <SavedItem v-for="item in savedProducts" :item="item" :key="item.id"/>
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
import ProductCard2 from '@/components/Product/ProductCard2.vue'
import SavedItem from "@/components/Product/SavedItem"

export default {
  name: 'Home',
  data: () => ({
  }),
  components: {
    ProductCard2,
    SavedItem
  },
  computed: {
    products () {
    return this.$store.state.products
    },
    savedProducts () {
    return this.$store.state.savedProducts
    }
  }
}
</script>

<style scoped>

.changepassword {
  background: white; 
  color: #f68B1E;
  border: none;
  padding: 2vmin;
  font-weight: bold;
}

.changepassword:hover {
  background: #ffefd8; 
  color: #ff9900;
  border: none;
  padding: 2vmin;
  font-weight: bold;
}

.changepassword2 {
  background: white; 
  color: #f68B1E;
  border: none;
  border-radius: 0.5vmin;
  padding: 1vmin;
  font-weight: bold;
}

.changepassword2:hover {
  background: #ffefd8; 
  color: #ff9900;
  border: none;
  border-radius: 0.5vmin;
  padding: 1vmin;
  font-weight: bold;
}

.changepassword2:focus {
 outline: none
}

.changepassword:focus {
 outline: none
}

.sidehead {
  font-size: 1.5rem
}

.addd {
  color: #75757A;
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

.maindash {
  background-color: #f1f1f1;
  height: auto
}

.sec {
  width: 100%;
  border: 1px solid #f1f1f1;
  border-radius: 0.5rem;
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
  padding: 0.5rem;
  width: 100%
}

.third2 {
  background-color: white;
  padding: 0.5rem;
  width: 100%;
  border-radius: 4px;
}

.fa-cart-plus {
  float: left
}

.hee {
  background-color: #EDEDED;
  padding: 0.5rem;
  color: #282828;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 100%;
  margin-top: 1rem;
  font-weight: 600;
  border-bottom: 1px solid #f2f2f2
}

.dropdown-item {
  padding: 1rem;
  color: #282828;
  width: 100%;
}

.acc {
  padding: 1rem;
  color: #282828;
  background-color: #EDEDED;
  font-weight: 600;
}

.dropdown-item:hover {
  padding: 1rem;
   background-color: #EDEDED;
  color: #282828;
  width: 100%;
  font-weight: 600;
}

.active {
  padding: 1rem;
  background-color: #EDEDED;
  color: #282828;
  width: 100%;
  font-weight: 600;
}

.hee2 {
  background-color: white;
  padding: 0.5rem;
  color: #282828;
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

.maindash {
  background-color: #f5f5f5;
  height: auto;
}

.sec {
  width: 360px;
  height: 242px
}

.bigpic {
  width: 305px;
  height: 290px;
  border-radius: 5px
}

.smimg {
  width: 38px;
  height: 38px
}

.details {
  background-color: white;
  padding: 1rem;
  width: 872px;
  margin-left: 2vmin
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
  padding: 0.0rem;
  width: 296px
}

.third2 {
  background-color: white;
  padding: 0.5rem;
  width: 100%;
  border-radius: 4px;
}

.fa-cart-plus {
  float: left
}

.hee {
  background-color: #EDEDED;
  padding: 0.5rem;
  color: #282828;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 100%;
  margin-top: 0rem;
  font-weight: 600;
  border-bottom: 1px solid #f2f2f2
}

.hee p {
  font-size: 14px;
  font-family: "Roboto";
  color: #282828;
}

.hee2 {
  background-color: #EDEDED;
  padding: 0.5rem;
  color: #282828;
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
}
</style>