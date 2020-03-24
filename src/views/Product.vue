<template>
  <div class="container">
  <br>
<div class="card mt-5 col-9" style="width: 70rem; height: 40rem">
  <img :src="`${pic}`" class="card-img-top" style="max-height: 20rem" :alt="`${pitem[0].name} pic`">
  <div class="card-body">
  <div>
  <b-row >
    <b-col v-for="img in pitem[0].moreimg" :key='img'>
    <img :src="`${img}`" @click='chagepic(img)' style="max-height: 10rem; max-width: 4rem; border: 1px solid green" :alt="`${pitem[0].name} pic`"></b-col>
  </b-row>
  </div>
  <br>
    <h3 class="card-title">{{ pitem[0].name }}</h3>
    <p class="card-text">₦ {{ pitem[0].price }}</p>
    <p class="card-text">Description <br> {{ pitem[0].desc }}</p>
    <router-link to="/">Add to cart</router-link>
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
