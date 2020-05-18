<template>
  <div class="hom mb-2">
  <div class=''>


  <!-- image & name -->
  <div class='d-lg-flex d-xs-flex flex-lg-column flex-xs-row details'>
  <img class='bigpic' :src="cart.img" />
  <div class="ml-0">
  <p class="border-top mt-2 ppp">Galaxy A10s 6.2-Inch (2GB,32GB ROM) Android 9.0, (13MP+2MP)+ 8MP Dual SIM 4000mAh 4G LTE Smartphone - Black (BF19)</p>
  <p class="mt-n3 ppp">₦ {{ cart.unitPrice }}</p>
  </div>
  </div>
  <!-- image & name -->

  <b-button size="sm" class="my-2 my-sm-0" type="submit" variant id="searc">BUY</b-button>
            

 </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'Home',
  props: ["cart"],
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
      // changeQty (x) {
      //     alert(x)
      // },
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

.hom {
  width: 230px;
  height: 378px
}

.ppp {
  font-weight: 400
}

.rightalign {
  float: right
}

.bigpic {
  width: 103.19px;
  height: 103.19px
}

.details {
  width: 230px;
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

  #searc {
    display: none
  }

  .hom {
  width: 230px;
  height: 378px;
  padding: 10px
}

.hom:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 450px;
  padding: 15px 10px 15px 10px;
}
  
.ppp {
  width: 230px;
  font-weight: 500
}

.rightalign {
  float: right
}

.bigpic {
  width: 210px;
  height: 210px
}

.details {
  width: 230px;
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