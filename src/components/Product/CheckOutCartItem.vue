<template>
  <div class="hom mb-2">
  <b-col lg="12" md="12" xl="12">
  <b-card bg-variant="white" text-variant="red">
  <div class='d-lg-flex d-sm-flex flex-sm-column flex-lg-row'>
  <!-- image & name -->
  <div class='d-flex details'>
  <img class='bigpic' :src="cart.img" />
  <div class="ml-2">
  <p>{{ cart.name}}</p>
  <p class="mt-n3 color">₦ {{ cart.unitPrice }}</p>
  <p class="mt-n3 mb-n3">Qty: {{ quantity }}</b></p>
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

.color {
color: #f68b1e;
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
</style>