<template>
  <div class="main">
  <div class="container main mt-5">
  <br>
  <b-row>
    <b-col>
    <img :src="`${pic}`" class="img" style="max-height: 35rem; max-width: 20rem" :alt="`${pitem[0].name} pic`">
     <br>
     <b-row >
    <b-col v-for="img in pitem[0].moreimg" :key='img'>
    <img :src="`${img}`" @click='chagepic(img)' style="max-height: 10rem; max-width: 4rem; border: 1px solid green" :alt="`${pitem[0].name} pic`"></b-col>
  </b-row>
  <b-row>
  <h6>SHARE THIS PRODUCT</h6>

    </b-row>
    </b-col>
    <b-col>
    <h1 class="card-title">{{ pitem[0].name }}</h1>
    <h3 class="card-text">₦ {{ pitem[0].price }}</h3>
    <p class="card-text oldprice">₦ {{ pitem[0].price }}</p>
    <b-button variant="" class="add"> <i class="fas fa-cart-plus"></i> Add to cart</b-button>
    </b-col>

    </b-col>
    <b-col>
    <h5>DELIVERY & RETURNS</h5>
    Delivery Information
Normally delivered between Wednesday 1 Apr and Friday 3 Apr. Please check exact dates in the Checkout page.See more

Return Policy
Free return within 15 days for Jumia Mall items and 7 days for other eligible items.See more
    </b-col>
  </b-row>
  <br>
   <div class="card-body">
  <br>
    <p class="card-text">Description <br> {{ pitem[0].desc }}</p>
</div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    pitem: [],
    products: null,
    pic: null
  }),
  methods: {
    chagepic (img) {
      this.pic = img
    }
  },
  created () {
      this.products = this.$store.state.products
      this.pitem = this.products.filter((item) => {
         return item.id == parseInt(this.$route.params.id)
      })
      this.pic = this.pitem[0].img
  }
}
</script>

<style scoped>
.main {
  background-color: #f2f2f2
}

.add {
  width: 100%;
  background: green;
  color: white
}

.fa-cart-plus {
  float: left
}

.oldprice {
  text-decoration: line-through;
  color: gray
}
</style>