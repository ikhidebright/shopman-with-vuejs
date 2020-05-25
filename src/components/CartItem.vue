<template>
  <div class="hom mb-2">
  <b-col lg="12" md="10" xl="10" xs="12">
  <b-card  text-variant="red">
  <div class='d-lg-flex d-sm-flex flex-sm-column flex-lg-row'>
  <!-- image & name -->
  <div class='d-flex details'>
  <img class='bigpic' :src="cart.img" />
  <div class="ml-2">
  <p class="seller d-none d-lg-block d-xl-block d-md-block d-sm-block">Seller: Shopman</p>
  <p class="name" @click="open(cart)">{{ cart.name}}</p>
  <!-- price on mobile-->
   <div class='mt-n3 d-lg-none d-xl-none d-md-none d-sm-none'>
  <p class="subTotal mt-1">₦ {{ subTotal.toLocaleString() }}</p>
  <p class="disM d-inline mt-1 ml-2">₦ {{ discountM.toLocaleString() }}</p>
  </div>
  <div class="d-none d-lg-block d-xl-block d-md-block d-sm-block">
<i class="fas fa-heart"></i>  <router-link to='' @click.native="save(cart)">MOVE TO SAVED ITEMS</router-link> <i class="fas fa-trash"></i>   <router-link to='' @click.native="remove(cart)">REMOVE</router-link>
</div>
  </div>
  </div>
  <!-- image & name -->
  <div class='border-right pl-3 pr-3 pt-2 d-none d-lg-block d-xl-block d-md-block d-sm-block select'>
  <b-form-select
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0"
      v-model="quantity"
      :options="[{ text: '1', value: 1 }, { text: '2', value: 2 }, '3', '4', '5', '6', '7', '8', '9', '10']"
      :value="null"
      @change="changeQty(cart)"
    ></b-form-select>
    </div>
  <div class='border-right pl-5 pr-5 pt-3 d-none d-lg-block d-xl-block d-md-block d-sm-block prices'>
  <p class="unitPrice mb-n4 ml-n3">₦ {{ cart.unitPrice.toLocaleString() }}</p>
  <p class="disPrice mt-n3 ml-1">₦ {{ discount.toLocaleString() }}</p>
  <p class="save mt-n3 ml-n3">Savings: ₦ {{ savings.toLocaleString() }}</p>
  </div>
  <div class='pl-5 pt-3 pl-5 d-none d-lg-block d-xl-block d-md-block d-sm-block'>
  <p class="subTotal">₦ {{ subTotal.toLocaleString() }}</p>
  </div>
  

<!-- actions for mobile-->
<div class="d-flex d-lg-none d-xl-none d-md-none d-sm-none border-top mt-2 mb-n3">
 <div class='mt-3'>
 <router-link class="border-right pr-2" to='' @click.native="save(cart)"><i class="fas fa-heart"></i></router-link> <i class="fas fa-trash"></i>   <router-link to='' @click.native="remove(cart)">REMOVE</router-link>
    </div>
<div class='ml-auto mt-2'>
  <b-form-select
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0"
      v-model="quantity"
      :options="[{ text: '1', value: 1 }, { text: '2', value: 2 }, '3', '4', '5', '6', '7', '8', '9', '10']"
      :value="null"
      @change="changeQty(cart)"
    ></b-form-select>
    </div>
</div>


 </div>
</b-card>
</b-col>
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
    },
    discount () {
      let diff = this.cart.unitPrice * 30 /100
      return this.cart.unitPrice + diff
    },
    discountM () {
      let diff = Math.round(this.subTotal * 30 /100)
      return this.subTotal + diff
    },
    savings () {
      return this.discount - this.cart.unitPrice
    }
  },
  methods: {
      open (product) {
      let name = product.name.replace(/[' ']+/g,'-').toLowerCase()
      this.$router.push({ name: 'Product', params: { id: product.product_id, name: name } })
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
            product_id: x.product_id,
            name: x.name,
            price: x.unitPrice,
            description: x.description,
            customer_id: this.user.id,
            thumb: x.thumb
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
        let item = this.$store.state.cart.filter((item) => {
            return item.id != x.id
        })
        this.$store.commit("setRemoveItemCart", item)
      },
       async changeQty (x) {
        let quantity = await document.getElementById("inline-form-custom-select-pref").value;
        // remove item 
        let item1 = await this.$store.state.cart.filter((item) => {
            return item.id != x.id
        })
      await this.$store.commit("setRemoveItemCart", item1)
      // set removed item with its new quantity
      let item = {
        id: x.id,
        img: x.img,
        name: x.name,
        quantity: parseInt(quantity),
        unitPrice: x.unitPrice,
        subTotal: parseInt(x.unitPrice) * quantity
      }
      await this.$store.commit("setCart", item)
  }
  }
}
</script>

<style scoped>

.disM {
  line-height: inherit;
    vertical-align: inherit;
    box-sizing: border-box;
    background-repeat: no-repeat;
    -webkit-tap-highlight-color: transparent;
    resize: none;
    outline: 0;
    direction: ltr;
    unicode-bidi: isolate;
    font-size: .7em;
    color: gray;
    text-decoration: line-through;
}

.subTotal {
   line-height: inherit;
    vertical-align: inherit;
    display: inline-block;
    box-sizing: border-box;
    background-repeat: no-repeat;
    color: #f68b1e;
    resize: none;
    outline: 0;
    font: 1.5rem/1.33;
    -webkit-tap-highlight-color: transparent;
  }

.name {
text-align: left;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
max-height: 4.824em;
max-width: 12.824em;
cursor: pointer;
  font: 1.5rem/1.33;
-webkit-tap-highlight-color: transparent;
direction: ltr;
 /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;

  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
    color: #000;
    text-decoration: none;
    background-color: transparent;
    box-sizing: border-box;
    background-repeat: no-repeat;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    resize: none;
    outline: 0;
    direction: ltr;
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

.name:hover {
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
  .select {
    width: 104px
  }

  .prices {
    width: 172px
  }

  .seller {
    color: #ababab;
    font-size: 14px;
    line-height: 1;
    margin-bottom: 6px!important;
    text-align: left;
    -webkit-tap-highlight-color: transparent;
    direction: ltr;
  }

  .subTotal {
    display: inline-block;
    box-sizing: border-box;
    direction: ltr;
    unicode-bidi: isolate;
    color: #f68b1e;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
  }
  
  .save {
    color: #7ed321;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    direction: ltr;
    width: 108px
  }

  .disPrice {
    text-decoration: line-through;
    display: inline-block;
    box-sizing: border-box;
    color: #ababab;
    font-weight: 400;
    font-size: 13px;
    direction: ltr;
    unicode-bidi: isolate;
    text-align: center;
    border-collapse: collapse;
  }

  .unitPrice {
    -webkit-tap-highlight-color: transparent;
    line-height: 1.42857;
    border-collapse: collapse;
    text-align: center;
    width: 108px;
    color: #000;
    font-size: 15px;
    direction: ltr;
    unicode-bidi: isolate;
    display: inline-block;
    box-sizing: border-box;
  }

  .name {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    margin-bottom: 6px!important;
    display: inline-block!important;
    color: #000;
    max-width: 20.824em;
    text-decoration: none;
    background-color: transparent;
    box-sizing: border-box;
    text-align: left;
    border-collapse: collapse;
    cursor: pointer;
  }

  .name:hover {
  color: #f68b1e;
  text-decoration: none
}

  
.rightalign {
  float: right
}

.bigpic {
  width: 60px;
  height: 60px
}

.details {
  width: 422px;
  border-right: 1px solid #e5e5e5;
  height: auto
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