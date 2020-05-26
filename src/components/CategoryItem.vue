<template>
<b-col class="ll" lg="3" sm="3" md="3" xl="3" col="12">
  <!-- image & name -->
  <div class='d-lg-block d-sm-block d-md-block d-xl-block details'>
  <img class='bigpic' :src="cart.thumb" />
  <div class="ml-0">
  <p class="mt-2 ppp d-none d-lg-block d-sm-block d-md-block d-xl-block name">{{ cart.name }}</p>
  <b-link class="mt-2 mb-2 ppp d-lg-none d-sm-none d-md-none d-xl-none name" :to="`/product/${cart.product_id}-${cart.name.replace(/[' ']+/g,'-').toLowerCase()}`">{{ cart.name }}</b-link>
  <p class="mt-n2  d-lg-block d-sm-block d-md-block d-xl-block priceee ml-2">₦ {{ cart.price }}</p>
  <p class='discount mt-n3 ml-2  d-lg-block d-md-block d-xl-block d-sm-block'>₦ {{ discount.toLocaleString() }}</p>
  <!--mo-->
  </div>
  </div>
  <!-- image & name -->
  <b-button size="sm" class="my-2 my-sm-0 searc" type="submit" variant @click="addtocart(cart)">BUY</b-button>       
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
    discount () {
      let diff = this.cart.price * 30 /100
      return this.cart.price + diff
    },
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
      this.showSuccess(`${x.name} Succesfully added to Cart`, true)
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
      this.showSuccess(`${x.name} Succesfully added to Cart`, true)
    }
  },
  }
}
</script>

<style scoped>

.name2 {
  width: 100%
}

.searc {
  display: none;
}

.ll {
  width: 230px;
  height: auto;
  padding: 10px;
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

.name {
  text-align: left;
  font-size: 14px;
  padding-left: 8px;
  color: #282828;
   color: #000;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
max-width: 7.824em;
max-height: 2.95em;
cursor: pointer;
font-size: 13px;
-webkit-tap-highlight-color: transparent;
direction: ltr;
 /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}


.priceee {
    font-size: .875rem;
    text-overflow: ellipsis;
  width: 103px;
    white-space: nowrap;
    line-height: 1;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    font-weight: 700;
    font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
  }

.discount {
    font-size: .75rem;
    font-weight: 400;
    color: #75757a;
    text-decoration: line-through;
  }


@media only screen and (min-width: 760px) {

.name {
  text-align: left;
  font-size: 14px;
  padding-left: 8px;
  color: #282828;
   color: #000;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
max-width: 15.824em;
max-height: 2.95em;
cursor: pointer;
font-size: 13px;
-webkit-tap-highlight-color: transparent;
direction: ltr;
 /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}


.priceee {
    font-size: .875rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    font-weight: 700;
    font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
  }

.discount {
    font-size: .75rem;
    font-weight: 400;
    color: #75757a;
    text-decoration: line-through;
  }


  .ll .searc {
    display: none
  }

  .ll {
  width: 230px;
  height: 378px;
  padding: 10px;
  cursor: pointer
}

.ll:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: auto;
  cursor: pointer
}
.ll:hover .searc {
  display: block;
  background-color: #f68b1e;
  height: 45px;
  border-radius: 5px;
  color: white;
  width: 100%;
  padding: 0 1vmin 0 1vmin;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 14px;
  padding: 12px 16px;
  font-weight: 500;
  outline-color: none;
  outline: none;
  border: none;
  cursor: pointer
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