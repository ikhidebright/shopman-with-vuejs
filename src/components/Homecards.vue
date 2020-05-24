<template>
<div>
<div class="card mx-auto d-lg-none d-xl-none d-sm-none d-md-none">
  <div class='head d-flex mb-2 pt-n3 mb-2 mt-0'>
 <div class='he mt-n1'>{{ products[0].category }} </div>
 <div class='ml-auto mr-3 mt-n1 see'><router-link :to="`/category/${products[0].category.replace(/[' ']+/g,'-').toLowerCase()}`">SEE ALL</router-link></div>
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


<b-container fluid class="d-none d-lg-block d-xl-block d-sm-block d-md-block">
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
  </div>
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
}

.he {
  font-size: 1.5rem;
}

.head {
  color: black;
  font-weight: 400;
  font-size: 0.5rem;
  background: rgb(255, 165, 0);
  box-sizing: border-box;
}

.link {
  float: right;
  font-weight: 600;
  color: #000000;
}

a {
  color: #000000
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
  color: #000000;
  text-decoration: none;
  box-sizing: border-box;
  font-size: .875rem;
  font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
  box-sizing: border-box;
}

.card {
  width: 100%
}

@media only screen and (min-width: 600px) {

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