<template>
  <div class="hom mb-2">
  <b-col lg="12" md="10" xl="10" xs="12">
  <b-card bg-variant="white" text-variant="red">
  <div class='d-lg-flex d-sm-flex flex-sm-column flex-lg-row'>
  <!-- image & name -->
  <div class='d-flex details'>
  <img class='bigpic' :src="item.thumb" />
  <div class="ml-2">
  <p ><b>{{ item.name }}</b></p>
   <div class='mt-n3'>
  ₦ {{ item.price }}
  </div>
  <!--<div class="d-none d-lg-block d-xl-block d-md-block d-sm-block">
<i class="fas fa-heart"></i>  <router-link to='' @click.native="save(cart)">MOVE TO SAVED ITEMS</router-link> <i class="fas fa-trash"></i>   <router-link to='' @click.native="remove(cart)">REMOVE</router-link>
</div> -->
  </div>
  </div>
  <!-- image & name -->
  <!--<div class='border-right pl-3 pr-3 pt-2 d-none d-lg-block d-xl-block d-md-block d-sm-block'>
  <b-form-select
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0"
      v-model="quantity"
      :options="[{ text: '1', value: 1 }, { text: '2', value: 2 }, '3', '4', '5', '6', '7', '8', '9', '10']"
      :value="null"
      @change="changeQty(quantity)"
    ></b-form-select>
    </div>-->
  <!--<div class='border-right pl-5 pr-5 pt-3 d-none d-lg-block d-xl-block d-md-block d-sm-block'>
  ₦ {{ item.price }}
  </div> -->
  <div class='ml-9 d-none d-lg-block d-xl-block d-md-block d-sm-block'>
  <b-button size="sm" class="mb-3" type="submit" variant id="search" @click="addtocart(item)">BUY NOW</b-button>
  
  <b-button size="sm" class="mt-9 changepassword2" type="submit" variant @click='deleteItem(item)'><i class="fas fa-trash"></i> REMOVE</b-button>
  </div>
  

<!-- actions for mobile-->
<div class="d-flex d-lg-none d-xl-none d-md-none d-sm-none border-top mt-2 mb-n3">
  <b-button size="sm" class="mb-3 mt-3" type="submit" variant id="search2" @click="addtocart(item)">BUY NOW</b-button>
  
  <b-button size="sm" class="mt-9 ml-auto changepassword2" type="submit" variant @click='deleteItem(item)'><i class="fas fa-trash"></i> REMOVE</b-button>

<!--<div class='ml-auto mt-2'>
  <b-form-select
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0"
      v-model="quantity"
      :options="[{ text: '1', value: 1 }, { text: '2', value: 2 }, '3', '4', '5', '6', '7', '8', '9', '10']"
      :value="null"
      @change="changeQty(quantity)"
    ></b-form-select>
    </div>-->
</div> 


 </div>
</b-card>
</b-col>
  </div>
</template>

<script>
import axios from "axios"
import clientApi from '@/Services/EventService.js'

export default {
  name: 'Home',
  props: ["item"],
  data: () => ({
    categories: null
  }),
  
  computed: {
    cartitem () {
      return this.$store.state.cart
    },
    user () {
      return this.$store.state.user
    },
    quantity () {
        return this.cart.quantity
    },
    subTotal () {
       return this.cart.subTotal
    },
    loggedIn () {
      return this.$store.state.loggedIn
    }
  },
  methods: {
      setCart () {
      let qty = this.$store.getters.setCartQty
      // this.$store.commit("setCartItemQty", qty) 
      // alert(qty)
    },
      addtocart (x) {
      let itemExist = false;
      let quantity = null

      //check if item exist
      this.$store.state.cart.forEach((item) => {
        if(item.id === x.product_id) {
          itemExist = true
          quantity = item.quantity + 1
        }
      })
      if(itemExist) { 

        // remove item if it exist
      let item1 = this.cartitem.filter((item) => {
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
    this.$router.push("/cart")
  },
  async deleteItem (x) {
    let res = await clientApi.deleteSavedProduct(x.id)
    if (res.status === 200 && res.data.success === true) {
      this.showSuccess(`${x.name} removed from saved items`, true)
        let saved = await clientApi.getSavedProduct(this.user.id)
        this.$store.commit("setSavedProducts", saved.data)
    } else {
      this.showError(`Error removing ${x.name} from saved items`, true)
    }
  },
       showError (message, show) {
        let item = {
          errorMessage: message,
          showError: show
        }
        this.$store.commit("setErrorAlert", item)
    },
      showSuccess (message, show) {
        let item = {
          successMessage: message,
          showSuccess: show
        }
        this.$store.commit("setSuccessAlert", item)
      },
     async save (x) {
        if (!this.loggedIn) {
          this.$router.push('/login')
        } else {
          let save = await axios.post(`${this.$store.state.url}/wishlist`, {
            product_id: x.id,
            name: x.name,
            price: x.unitPrice,
            description: x.name,
            customer_id: this.user.id,
            thumb: x.img
          })
          console.log(save)
          if (save.status === 200 && save.data.result.affectedRows === 1) {
            this.showSuccess(`Saved ${x.name}`, true)
          } else {
            if (save.data.errorcode === 1062) {
              this.showError(`${x.name} already saved`, true)
            } else {
              this.showError(`Error adding ${x.name} to saved items`)
            }
          }
        }
      },
      remove (x) {
        let item = this.cartitem.filter((item) => {
            return item.id != x.id
        })
        this.$store.commit("setRemoveItemCart", item)
        this.$router.go()
      },

    //    changeQuantity (x) {
    //     let item = this.cartitem.filter((item) => {
    //         return item.id != x.id
    //     })
    //     this.$store.commit("setRemoveItemCart", item)
    //     this.$router.go()
    //   }
  }
}
</script>

<style scoped>

#search {
  background-color: #f68b1e;
  float: right;
  border-radius: 5px;
  color: white;
  padding: 1vmin;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
  padding: 12px 16px;
  outline-color: none;
  outline: none;
  border: none;
  font-weight: bold;
}

#search2 {
  background-color: #f68b1e;
  float: left;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  outline-color: none;
  outline: none;
  border: none;
  font-weight: bold;
}


.changepassword2 {
  float: right;
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

.rightalign {
  float: right
}

.bigpic {
  width: 60px;
  height: 60px
}

.details {
  width: 100%;
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

@media only screen and (min-width: 760px) {
  
.rightalign {
  float: right
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