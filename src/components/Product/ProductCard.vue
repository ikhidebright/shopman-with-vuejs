<template>
<div to='/'>
<div 
class='product'
to='/'>
<img 
:src="`${ product.img }`" 
class='pic' 
alt='' />
<div class='details'>
<p class='name'>{{ product.name }} <br> <b> ₦ {{ product.price }}</b> </p>
</div>
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

<style scoped>
.pic {
  width: 150px;
  height: 150px
}

p {
  color: #282828;
}

.price {
  margin: 0;
}

.product {
  margin: 2px;
  margin-bottom: 1rem
}

.product, .price {
  cursor: pointer;
}

.product:hover {
  background-color: #f1f1f1;
  border-radius: 5px;
} 


.details {
  padding: 5px
}

@media only screen and (min-width: 600px) {
.pic {
  width: 185px;
  height: 185px
}

p {
  color: #282828;
}

.price {
  margin: 0;
}
}
</style>