<template>
<div to='/'>
  <b-card
    :title="`${product.name}`"
    :img-src="`${product.img}`"
    :img-alt="`${product.name}`"
    img-width = 1rem
    img-height = 100rem
    img-top
    to='/'
    tag="article"
    style="max-width: 15rem; max-height: 30rem"
    class="mb-2"
  >
    <b-card-text>
      {{product.price}}
    </b-card-text>

    <b-button
       variant="primary"
       :to="`/product/${product.id}-${product.name.replace(/[' ']+/g,'-').toLowerCase()}`"
       >
       Buy now
       </b-button>
  </b-card>
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