<template>
  <div class="container mt-4">
  <div class="d-sm-flex flex-sm-column d-lg-flex flex-lg-row">
    <div class="col-3 mt-5 d-none d-lg-block">
    <h6 class=""> Category </h6>
  <div v-for='category in categories' :key='category'>
  <SideBar :category='category' />
  </div>
    </div>
     <div class="col-9 mt-3">
  <Carousel />
    </div>
    </div>
    <div class="col-12">
    <div class="d-sm-flex flex-sm-column d-lg-flex flex-lg-row flex-wrap">
      <div class="mr-auto" v-for='product in products' :key='product.id'>
  <ProductCard :product='product' />
  </div>
  </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import ProductCard from '@/components/Product/ProductCard.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'Home',
  data: () => ({
    products : null,
    categories: null
  }),
  components: {
    ProductCard,
    Carousel,
    SideBar
  },
  created () {
    this.products = this.$store.state.products
    this.categories = this.$store.state.categories
  }
}
</script>
