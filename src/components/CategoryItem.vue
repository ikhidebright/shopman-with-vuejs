<template>
<b-col class="ll" lg="3" sm="3" md="3" xl="3" col="12">
  <!-- image & name -->
  <div class='d-flex flex-xs-row d-lg-block d-sm-block d-md-block d-xl-block details'>
  <img class='bigpic' :src="cart.img" />
  <div class="ml-0">
  <p class="border-top mt-2 ppp d-none d-lg-block d-sm-block d-md-block d-xl-block">{{ cart.name }}</p>
  <p class="mt-n3 ppp d-none d-lg-block d-sm-block d-md-block d-xl-block">₦ {{ cart.unitPrice }}</p>
  <!--mo-->
  <p class="ml-2 ppp d-block d-lg-none d-sm-none d-md-none d-xl-none">{{ cart.name }}</p>
  <p class="ml-2 mt-n6 ppp d-block d-lg-none d-sm-none d-md-none d-xl-none">₦ {{ cart.unitPrice }}</p>
  </div>
  </div>
  <!-- image & name -->
  <b-button size="sm" class="my-2 my-sm-0 searc" type="submit" variant>BUY</b-button>       
  </b-col>
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
  }
}
</script>

<style scoped>

.searc {
  display: none
}

.ll {
  width: 230px;
  height: auto;
  padding: 10px
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

  .ll .searc {
    display: none
  }

  .ll {
  width: 230px;
  height: 378px;
  padding: 10px
}

.ll:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 378px;
}
.ll:hover .searc {
  display: block;
  background-color: #f68b1e;
  height: 45px;
  border-radius: 5px;
  color: white;
  padding: 0 1vmin 0 1vmin;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
  padding: 12px 16px;
  font-weight: 500;
  outline-color: none;
  outline: none;
  border: none;
}
  
.ppp {
  font-weight: 500
}

.rightalign {
  float: right
}

.bigpic {
  width: 230px;
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