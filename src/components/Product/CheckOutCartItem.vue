<template>
  <div class="hom mb-2">
  <b-col lg="12" md="12" xl="12">
  <b-card bg-variant="white" text-variant="red">
  <div class='d-lg-flex d-sm-flex flex-sm-column flex-lg-row'>
  <!-- image & name -->
  <div class='d-flex details'>
  <img class='bigpic' :src="cart.img" />
  <div class="ml-2">
  <p class="mt-n3 name mb-n1" @click="open(cart)">{{ cart.name}}</p>
  <p class="mt-2 price">₦ {{ cart.unitPrice.toLocaleString() }}</p>
  <p class="mt-n2 mb-n3 qty">Qty: {{ quantity.toLocaleString() }}</b></p>
 </div>
  </div>
  </div>
</b-card>
</b-col>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: ["cart"],
  data: () => ({
  }),

  methods: {
   open (x) {
      let name = x.name.replace(/[' ']+/g,'-').toLowerCase()
      let id = x.id
      this.$router.push({ name: 'Product', path: "/product", params: { id: id, name: x.name.replace(/[' ']+/g,'-').toLowerCase() } })
    },
  },
  
  computed: {
    cartitem () {
      return this.$store.state.cart
    },
    // compute qty of the particular item
    quantity () {
        return this.cart.quantity
    },
    // compute qty of the particular item
    subTotal () {
       return this.cart.subTotal
    }
  }
}
</script>

<style scoped>

.details {
  width: auto;
}


.name {
text-align: left;
color: #282828;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
max-height: 2.824em;
max-width: 15.824em;
cursor: pointer;
font-size: 13px;
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
}

.name:hover {
  color: #f68b1e;
  text-decoration: none
}

.price {
  color: #f68b1e;
  display: inline-block;
  box-sizing: border-box;
  direction: ltr;
  unicode-bidi: isolate;
  font-size: 13px;
  -webkit-tap-highlight-color: transparent;
}

.qty {
  color: gray;
  font-size: 13px;
  line-height: 1.42857;
  -webkit-tap-highlight-color: transparent;
  direction: ltr;
}


.bigpic {
  width: 60px;
  height: 60px
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
</style>