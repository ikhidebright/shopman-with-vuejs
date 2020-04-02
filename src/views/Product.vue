<template>
  <div class="main">
  <b-container>
  <br>
  <div class='d-lg-flex d-sm-flex flex-sm-column flex-lg-row mt-5'>
<div class='d-lg-flex d-sm-flex flex-sm-column flex-lg-row details'>
  <div class='fir'>
  <img class='bigpic' :src="`${pic}`" />
  <div class='d-flex mt-1 border-bottom pb-2 mb-1'>
  <div v-for="img in pitem[0].moreimg" :key='img'>
    <img class='smimg ml-1' :src="`${img}`" @click='chagepic(img)' />
  <!--  <img class='smimg ml-1' src="https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/02/486062/2.jpg?7638" />
    <img class='smimg ml-1' src="https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/02/486062/3.jpg?7638" /> -->
    </div>
    </div>
    <p> 
    SHARE THIS PRODUCT 
    <br><i class="fab fa-facebook"> </i> <i class="fab fa-twitter"></i></p>
  </div>
  <div class='ml-lg-3 sec'>
  <p class='pron'> {{ pitem[0].name }} </p>
  <p class='price'>₦ {{ pitem[0].price }} </p>
   <p class='oldprice'>₦ 7,650 - ₦ 7,890 </p>
  <button class="add d-none d-lg-block"> <i class="fas fa-cart-plus"></i> ADD TO CART</button>
  <hr/>

  <h6>PROMOTIONS</h6>
<router-link to='/'> <i class="fas fa-shield-alt"></i> Stay Safe, Go cashless with ShopmanPay.</router-link>
<br>
<br>
<router-link to='/'> <i class="fas fa-star"></i> Enjoy unlimited Free Delivery with Shopman Prime </router-link>
<br>
<br>
<router-link to='/'><i class="fas fa-star"></i> Buy airtime and data on Shopman One and get up to N500 cash back. Use code WELCOME50 </router-link>
  </div>
   </div>
   <div class='mt-sm-2 mt-lg-0'>
     <div class='ml-lg-3 hee'>DELIVERY & RETURNS</div>
   <div class='ml-lg-3 third'>
    <div class="d-flex">
  <i class="fas fa-shuttle-van mr-3"></i><div><h6> Delivery Information</h6>
 <p>
 Normally delivered between Friday 3 Apr and Monday 6 Apr. Please check exact dates in the Checkout page
 </p>
 </div>
 </div>


<div class="d-flex">
  <i class="fab fa-telegram-plane mr-4"></i></i><div>
  <h6> Return Policy</h6>
<p>Free return within 15 days for Jumia Mall items and 7 days for other eligible items.</p>
   </div>
 </div>
 </div>

   <div class='ml-lg-3 hee mt-3'>SELLER INFORMATION</div>
   <div class='ml-lg-3 third'>
  <h6> 
 KODDS</h6>
 <p>
80%Positive Seller Score
2730 Followers</p>

<h6> Return Policy</h6>
<p>Free return within 15 days for Jumia Mall items and 7 days for other eligible items.</p>
   </div>

 <div class='ml-lg-3 third mt-3'>
  <h6> Have one to sell?</h6>
<p>Click here to list your product</p>
</div>
   </div>
  </div>

  
 <div>
     <div class='hee2 mt-3'><h6>Product details</h6></div>
   <div class='third2'>
 <p>
{{ pitem[0].desc }}
</p>
 </div>
 </div>

 <br>
  <br>
   <br>


  </b-container>

  <div class='mobile d-lg-none mt-sm-5'> 
  <button class="phone"> <i class="fas fa-phone"></i></button>
  <button class="add2"> <i class="fas fa-cart-plus"></i> ADD TO CART</button>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    pitem: [],
    products: null,
    pic: null
  }),
  methods: {
    chagepic (img) {
      this.pic = img
    }
  },
  created () {
      this.products = this.$store.state.products
      this.pitem = this.products.filter((item) => {
         return item.id == parseInt(this.$route.params.id)
      })
      this.pic = this.pitem[0].img
  }
}
</script>

<style scoped>

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
  background-color: #f1f1f1
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
  width: 100%
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
  margin-top: 2rem;
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
  padding: 0.5rem;
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
  background-color: #f1f1f1
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
  padding: 0.5rem;
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