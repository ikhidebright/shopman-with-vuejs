<template>
<b-container fluid="sm">
  <div class="mt-1 card">
  <div class='head d-flex mb-4'>
 <div class='he'>Breakfast </div>
 <div class='ml-auto mr-3 see'>SEE ALL</div>
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
  margin-bottom: 0.5rem;
 border-radius: 0.2rem;
 box-shadow: 1px 1px 5px 0px #f2f2f2;
  padding: 0rem 0 0 0;
}

.he {
  font-size: 1.5rem;
}

.head {
  padding: 0 0 0 1rem;
  color: black;
  font-weight: 600;
  border-top-left-radius: 0.2rem;
 border-top-right-radius: 0.2rem;
  background-color: #ff9900;
}

.link {
  float: right;
  font-weight: 600
}

.see {
  margin-top: 0.5rem
}

@media only screen and (min-width: 600px) {
  .head {
  padding: 0 0 0 1rem;
  background-color: white;
  color: black;
}

.card {
  margin-bottom: 0.5rem;
  padding: 0.5rem 0 0 0;
 box-shadow: 0px 0px 0px 0px gray;
}
}
</style>