<template>
  <div class="main">
  <b-container>
  <br>
  <div class='d-lg-flex d-sm-flex flex-sm-column flex-lg-row mt-5'>
  <div>
  <h6>CHECKOUT</h6>
     <div class='hee2 mt-3'><h6><i class="fas fa-check-circle done mr-2"></i>1. ADDRESS DETAILS</h6></div>
   <div class='third2'>
 <p>
<b>{{ user.first_name }} {{ user.last_name }}</b>
<br>
{{ user.address }}
<br>
{{ user.phone }}
</p>
 </div>
 <div>
     <div class='hee2 mt-3'><h6><i class="fas fa-check-circle done mr-2"></i>2. DELIVERY METHOD</h6></div>
   <div class='third2'>
   <p>
<b>Door Delivery</b>
<br>
Delivered between Friday 15 May and Thursday 18 June for ₦ {{ shippingAmount.toLocaleString() }}
<br>
</p>
 </div>
 </div>
<div>
     <div class='hee2 mt-3'><h6><i class="fas fa-check-circle done mr-2"></i> 3. PAYMENT METHOD</h6></div>
   <div class='third2'>
   <p>
<b>How do you want to pay for your order?</b>
<br>
<b>Stay Safe, go cashless with ShopmanPay.</b>
<br>
New Customers get 10% additional discount when you pay with your MasterCard capped at N1,000.
<br>
Card payments are supported by all banks.
</p>
<img src="https://static.jumia.com.ng/cms/sprites/reordered-strip.png" />
<br>
<br>


<div>
 <div class="priceDetails">

<!-- style Subtotal -->

<div class='d-flex'>
<p>
Subtotal
</p>

<p class='ml-auto'>
₦ {{ totalPrice.toLocaleString() }}
</p>
</div>


<!-- style Shipping amount -->

<div class='d-flex'>
<p>
Shipping amount
</p>

<p class='ml-auto'>
<b>
₦ {{ shippingAmount.toLocaleString() }}
</b>
</p>
</div>
</div>


<div class='border-bottom pb-2 mb-1 mt-n2'></div>

<div class="priceDetails mb-n1">
<!-- style total payment -->
<div class='d-flex'>
<p>
<b>
Total
</b>
</p>

<p class='ml-auto totalPay'>
₦ {{ totalPayment.toLocaleString() }}
</p>
</div>


 </div>

 </div>
<div>
  <button block class="add" style="background: #ff9900; 
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;" type="button" @click="payWithPaystack()">CONFIRM ORDER 
  </button> 
  </div>
 </div>
 </div>
 </div>
<div>
<h6 class="ml-3 mb-3 d-none d-lg-block d-xl-block d-md-block d-sm-block">ORDER SUMMARY</h6>
<h6 class="mb-3 d-lg-none d-xl-none d-md-none d-sm-none mt-3">ORDER SUMMARY</h6>
   <div class='mt-sm-2 mt-lg-0'>
     <div class='ml-lg-3 hee'>YOUR ORDER ({{ cartQty.toLocaleString() }} items)</div>
   <div class='ml-lg-3 third'>
    <div class="">
    <CheckOutCartItem v-for="cart in cartitem" :key="cart.id" :cart="cart"/>
 </div>
 <div class="priceDetails">

<!-- style Subtotal -->

<div class='d-flex'>
<p>
Subtotal
</p>

<p class='ml-auto'>
₦ {{ totalPrice.toLocaleString() }}
</p>
</div>


<!-- style Shipping amount -->

<div class='d-flex'>
<p>
Shipping amount
</p>

<p class='ml-auto'>
<b>
₦ {{ shippingAmount.toLocaleString() }}
</b>
</p>
</div>
</div>


<div class='border-bottom pb-2 mb-1 mt-n3'></div>

<div class="priceDetails mb-n3">
<!-- style total payment -->
<div class='d-flex'>
<p>
<b>
Total
</b>
</p>

<p class='ml-auto totalPay'>
₦ {{ totalPayment.toLocaleString() }}
</p>
</div>


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
  methods: {
    payWithPaystack () {
    var handler = PaystackPop.setup({
      key: 'pk_test_3b73d6e5a00026130ba91d48b5ef379a71e1485a',
      email: 'ikhidebright@email.com',
      amount: this.totalPayment,
      currency: "NGN",
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      metadata: {
         custom_fields: [
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678"
            }
         ]
      },
      callback: (response) => {
          // alert('success. transaction ref is ' + response.reference);
          this.$router.push("/order")
           this.$store.dispatch({
                type: "setSuccessPage",
                message: "Payment Succesfull",
                show: true
              })
      },
      onClose: () => {
          // alert('window closed');
      }
    });
    handler.openIframe();
  }
  },
   computed: {
     user () {
    return this.$store.state.user
    },
    // get cart order
    cartitem () {
      return this.$store.state.cart
    },
    // get cart qty 
    cartQty () {
      return this.$store.getters.getCartQty
    },
     // get Shipping amount
    shippingAmount () {
      return this.$store.getters.getCartQty * 400
    },
    // get cart total price
    totalPrice () {
      return this.$store.getters.getTotalPrice
    },
     // get cart total payment to be made
    totalPayment () {
        return this.shippingAmount + this.totalPrice
    }
   },
   components: {
    CheckOutCartItem
   }
}
</script>

<style scoped>
.priceDetails {
  width: 89%;
  margin: 0 auto
}

.totalPay {
  color: #f68B1E;
  font-size: 17px;
  font-weight: 600
}

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