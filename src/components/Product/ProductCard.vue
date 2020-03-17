<template>
<div class="card" style="width: 13rem;">
  <img :src="`${product.img}`" class="card-img-top" style="max-height: 18rem" :alt="`${product.name} pic`">
  <div class="card-body">
    <h5 class="card-title">{{ product.name }}</h5>
    <p class="card-text">₦ {{ product.price }}</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
</template>

<script>

export default {
  name: 'ProductCard',
  props: ['product'],
  components: {
  }
}
</script>
