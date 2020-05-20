<template>
<b-container fluid>
  <div class="card mx-auto">
  <div class='head d-flex mb-2 pt-n3 mb-2 mt-3'>
 <div class='he mt-n3'>{{ products[0].category }} </div>
 <div class='ml-auto mr-3 see mt-n3'><router-link :to="`/category/${products[0].category.replace(/[' ']+/g,'-').toLowerCase()}`">SEE ALL</router-link></div>
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
  props: ["products"],
  data: () => ({
  }),
  components: {
    ProductCard
  },
  created () {
    console.log(this.products)
  }
}
</script>

<style scoped>
.card {
  margin-bottom: 0.5rem;
 border-radius: 0.2rem;
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
  font-weight: 600;
  color: #f68b1e;
}

a {
  color: #f68b1e
}

a:hover {
  color: #f68b1e;
  text-decoration: none
}

.see {
  margin-top: 0.5rem;
  text-transform: uppercase;
  font-weight: 500;
  padding-bottom: 4px;
  padding-top: 4px;
  align-items: center;
  display: flex;
  color: #f68b1e;
  text-decoration: none;
  box-sizing: border-box;
  font-size: .875rem;
  font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
  box-sizing: border-box;
}

@media only screen and (min-width: 600px) {
  .head {
  padding: 0 0 0 1rem;
  background-color: white;
  color: black;
}

.he {
  font-size: 1.25rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  overflow: hidden;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif
}

.card {
  margin-bottom: 0.5rem;
  padding: 8px;
  height: 335.55px;
  width: 1184px
}
}
</style>