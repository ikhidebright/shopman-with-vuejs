<template>
  <div class="maindash">
  <b-container>
  <br>
  <div class='d-lg-flex d-sm-flex flex-sm-column flex-lg-row mt-5'>
   <div class='mt-sm-2 mt-lg-0'>
   <div class='ml-lg-3 third mb-3'>
      <b-link class="dropdown-item" to="/dashboard"><i class="fas fa-user mr-3"></i> My Shopman Account</b-link>
      <b-link class="dropdown-item" to="/orders"><i class="fas fa-box mr-3"></i>Orders</b-link>
      <b-link class="dropdown-item" to="saved"><i class="fas fa-heart mr-3"></i>Saved Items</b-link>
      <div class="dropdown-divider"></div>
      <b-link class="dropdown-item acc" to="address">Address Book</b-link>
      <b-link class="dropdown-item" to="changepass">Change Password</b-link>
      <div class="dropdown-divider"></div>
      <p class='text-center'><button class='mb-2 changepassword2' @click="logOut">LOGOUT</button></p>
 </div>
   </div>
<div class='d-lg-flex d-sm-flex flex-sm-column flex-lg-row details'>
<div>
<p class='mx-3 sidehead'>Add Address</p>
    <div class="passch">
     <b-container>
    <br>
    <b-form @submit.prevent="changeaddress">
      <b-form-group
        id="input-group-1"
        label=""
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="address"
          type="text"
          required
          placeholder="Address"
        ></b-form-input>
      </b-form-group>
      <br>
      <b-button type="submit" block class="add" 
      style="background: #ff9900; 
      color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px">SUBMIT</b-button>
    </b-form>
     </b-container>
    </div>
    </div>
 </div>
  </div>


 <div>
   <div class='third2 mt-4'>
     <div class='mx-3 mb-3'><h5>Recommended for you</h5></div>
 <b-row>
    <b-col cols="12" md="12" sm='12'>
    <div class="d-flex flex-sm-row d-lg-flex flex-lg-row flex-wrap">
      <div class="mr-auto" v-for='product in products' :key='product.id'>
  <ProductCard2 :product='product' />
  </div>
  </div>
    </b-col>
    </b-row>
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
import clientApi from '@/Services/EventService.js'

export default {
  name: 'Home',
  data: () => ({
    address: ''
  }),
  components: {
    ProductCard2
  },
  computed: {
    products () {
    return this.$store.state.products
    },
    user () {
    return this.$store.state.user
    }
  },
  methods: {
     logOut () {
      this.$cookies.remove("sp_tk")
      this.$store.dispatch("logOutUser")
      this.$router.push('/')
    },
      showError (message, show) {
        let item = {
          errorMessage: message,
          showError: show
        }
        this.$store.commit("setErrorAlert", item)
      },
    async changeaddress(evt) {
        evt.preventDefault()
        try {
        let res = await clientApi.editUserAddress(this.user.id, this.address)
        console.log(res)
          if (res.status === 200 && res.data.success === true) {
              this.$router.push("/dashboard")
          } else {
              this.showError(res.data.message, true)
          }
        } catch (e) {
          this.showError('Sorry an Error occured', true)
          console.log(e)
        }
      },
  }
}
</script>

<style scoped>

.passch {
  width: 100%
}

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

.passch {
  width: 480px
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