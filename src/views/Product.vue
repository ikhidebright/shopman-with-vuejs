<template>
  <div class="main">
  <b-container>
  <br>
  <div class='d-lg-flex d-sm-flex flex-sm-column flex-lg-row mt-5'>
<div class='d-lg-flex d-sm-flex flex-sm-column flex-lg-row details'>
  <div class='fir'>
  <img class='bigpic' :src="`${product.thumb}`" />
  <div class='d-flex mt-1 border-bottom pb-2 mb-1'>
  <!--<div v-for="img in pitem[0].moreimg" :key='img'>
    <img class='smimg ml-1' :src="`${img}`" @click='chagepic(img)' />
  <img class='smimg ml-1' src="https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/02/486062/2.jpg?7638" />
    <img class='smimg ml-1' src="https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/02/486062/3.jpg?7638" /> 
    </div>-->
    </div>
    <div class="d-none d-lg-block d-sm-block d-xl-block d-md-block">
    <p> 
    SHARE THIS PRODUCT 
    <br><i class="fab fa-facebook"> </i> <i class="fab fa-twitter"></i></p>
    </div>
  </div>
  <div class='ml-lg-3 sec'>
  <p class='pron'> {{ product.name }} </p>
  <p class='price mt-n3 border-top'>₦ {{ product.price.toLocaleString() }} </p>
   <p class='oldprice mt-n3'>₦ {{ product.price + 15530}} - ₦ {{ product.price + 22308}} </p>
   <div>
  <b-button v-b-modal.modal-center class="add d-none d-lg-block d-xl-block d-md-block d-sm-block" @click="addtocart(product)"><i class="fas fa-cart-plus"></i> ADD TO CART</b-button>
  <b-modal id="modal-center" ref="modal-center" centered title="Added to Cart" hide-footer hide-header>
  <h4>Added to Cart</h4>
  <br>
  <p>{{ product.name }} added to Cart</p>
  <div class='d-lg-flex d-sm-flex flex-sm-row flex-lg-row d-xs-block'>
    <button class="add1" @click="hideModal">CONTINUE SHOPPING</button>
    <button class="add" @click="opencart">VIEW CART AND CHECKOUT</button>
    </div>
  </b-modal>
</div>
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
  <i class="fas fa-shuttle-van mr-3" style="border: 1px solid #ededed; 
                                              border-radius: 4px; 
                                              padding: 3px; 
                                              fill: #282828;
                                              box-sizing: border-box;
                                              width: 40;
                                              height: 40;
                                              font-size: 30px;
                                              direction: ltr;
                                              -webkit-font-smoothing: antialiased;
                                              color: #888888;
                                              height: 36px;"
                                              ></i><div><h6> Delivery Information</h6>
 <p>
 Normally delivered between Friday 3 Apr and Monday 6 Apr. Please check exact dates in the Checkout page
 </p>
 </div>
 </div>

<div class="d-flex">
  <i class="fab fa-telegram-plane mr-4" style="border: 1px solid #ededed; 
                                              border-radius: 4px; 
                                              padding: 3px; 
                                              fill: #282828;
                                              box-sizing: border-box;
                                              width: 40;
                                              height: 40;
                                              font-size: 30px;
                                              direction: ltr;
                                              -webkit-font-smoothing: antialiased;
                                              color: #888888;
                                              height: 36px;"
                                              ></i><div>
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
{{ product.description }}
</p>
 </div>
 </div>

 <br>
  <br>
   <br>


  </b-container>

  <div class='mobile d-lg-none d-xl-none d-md-none d-sm-none mt-sm-5'> 
  <button class="phone"> <i class="fas fa-phone"></i></button>
  <b-button v-b-modal.modal-center class="add2"  @click="addtocart(product)"><i class="fas fa-cart-plus"></i> ADD TO CART</b-button>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    pic: null
  }),
   computed: {
    cartitem () {
      return this.$store.state.cart
    },
    product () {
      return this.$store.state.productDetails
    }
   },
  methods: {
    setCart () {
      let qty = this.$store.getters.setCartQty
      // this.$store.commit("setCartItemQty", qty) 
      // alert(qty)
    },
    async addtocart (x) {
      let itemExist = false;
      let quantity = null

      //check if item exist
      await this.$store.state.cart.forEach((item) => {
        if(item.id == x.product_id) {
          itemExist = true
          quantity = parseInt(item.quantity) + 1
        }
      })
      if(itemExist) { 
        // remove item if it exist
      let item1 = await this.$store.state.cart.filter((item) => {
            return item.id != x.product_id
        })
      this.$store.commit("setRemoveItemCart", item1)
      // set removed item with its new quantity
      let item = {
        id: x.product_id,
        img: x.thumb,
        name: x.name,
        quantity: quantity,
        unitPrice: x.price,
        subTotal: parseInt(x.price) * quantity
      }
      this.$store.commit("setCart", item)
      this.setCart()
      } else {
      let item = {
        id: x.product_id,
        img: x.thumb,
        name: x.name,
        quantity: 1,
        unitPrice: x.price,
        subTotal: x.price
      }
      this.$store.commit("setCart", item)
      this.setCart()
    }
  },

    opencart () {
      this.$router.push("/cart")
    },

    chagepic (img) {
      this.pic = img
    },

     hideModal() {
        this.$refs['modal-center'].hide()
      },
  }
}
</script>

<style scoped>

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
 background-color: #f68b1e;
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
  background-color: #f68b1e;
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
  font-size: 1.25rem;
  padding-bottom: 4px;
  padding-top: 8px;
  font-weight: 400;
  box-sizing: border-box;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
  color: #282828;
  box-sizing: border-box
}

.price {
  font-size: 24px;
  font-weight: bold
}

.oldprice {
  font-size: 1rem;
  color: #75757A;
  text-decoration: line-through;
  text-align: left;
  direction: ltr;
  unicode-bidi: isolate;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
  box-sizing: border-box

}

.add {
  width: 100%;
  background-color: #f68b1e;
  color: white;
  border: none;
  border-radius: 4px;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-size: .875rem;
  line-height: 1rem;
  text-transform: uppercase;
 font-weight: 500;
 font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
 padding: 16px;
 transition: transform 1s, opacity 1s;
}

.add::after {
    background: radial-gradient(circle, #fff 10%, transparent 10%) center;
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