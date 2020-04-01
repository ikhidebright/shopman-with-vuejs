<template>
<b-container fluid="sm">
  <div class="mt-4 card">
  <div class='head d-flex mb-4'>
 <div class='he'>Breakfast </div>
 <div class='ml-auto mr-3'> SEE ALL</div>
  </div>
  <b-row>
    <b-col cols="12" md="12" sm='12'>
    <div class="d-flex flex-sm-row d-lg-flex flex-lg-row flex-wrap">
      <div class="mr-auto" v-for='product in products' :key='product.id'>
  <ProductCard :product='product' />
  </div>
  </div>
    </b-col>
    </b-row>
  </div>
  </b-container>
</template>

<script>
import ProductCard from '@/components/Product/ProductCard.vue'

export default {
  name: 'Home',
  data: () => ({
    products : null
  }),
  components: {
    ProductCard
  },
  created () {
    this.products = this.$store.state.products
    this.categories = this.$store.state.categories
  }
}
</script>

<style scoped>
.card {
  margin-bottom: 2rem;
 
  padding: 0rem 0 0 0;
}

.he {
  font-size: 1.5rem;
  font-weight: regular
}

.head {
  padding: 0 0 0 1rem;
  color: white;
  background-color: #ff9900;
}

.link {
  float: right
}

@media only screen and (min-width: 600px) {
  .head {
  padding: 0 0 0 1rem;
  background-color: white;
  color: black;
}

.card {
  margin-bottom: 2rem;
  padding: 0.5rem 0 0 0;
}
}
</style>