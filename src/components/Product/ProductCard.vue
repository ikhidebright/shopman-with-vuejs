<template>
<div to='/'>
<div 
class='product'
@click='open(product)'>
<img 
:src="`${ product.thumb }`" 
class='pic' 
alt='' />
<div class='details'>
<p class='name' v-if="product.name.length >= 19">{{ product.name.split('').slice(0, -Math.round(product.name.length/250)).join('') + '...' }} <br> 
<b> ₦ {{ product.price.toLocaleString() }}</b> </p>
<p class='discount mt-n4 ml-2 d-none d-lg-block d-md-block d-xl-block d-sm-block'>₦ {{ discount.toLocaleString() }}</p>
</div>
</div>
</div>
</template>

<script>

export default {
  name: 'ProductCard',
  props: ['product'],
  components: {
  },
  computed: {
    discount () {
      let diff = this.product.price * 30 /100
      return this.product.price + diff
    }
  },
  methods: {
    open (product) {
      let name = product.name.replace(/[' ']+/g,'-').toLowerCase()
      this.$router.push({ name: 'Product', params: { id: product.product_id, name: name } })
    }
  }
}
</script>

<style scoped>
.pic {
  width: 104px;
  height: auto;
  border-style: none;
  box-sizing: border-box;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
}

p {
  color: #282828;
}

.price {
  margin: 0;
  font-size: .75rem;
  text-overflow: ellipsis;
  padding-left: 16px;
  font-family: -apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",Arial,sans-serif;
  font-weight: 400
}

.product {
  margin: 2px;
  margin-bottom: 1rem
}

.product, .price {
  cursor: pointer;
}

.product:hover {
  box-shadow: 0px 0px 10px 0px #e5e5e5;
} 


.details {
  padding: 5px
}

.name {
  text-align: center;
}


@media only screen and (min-width: 600px) {

  .discount {
    font-size: .75rem;
    font-weight: 400;
    color: #75757a;
    text-decoration: line-through;
  }

  .name {
  text-align: left;
  font-size: 14px;
  padding: 8px 8px 4px;
  color: #282828
}

.product {
  margin: 4px;
  margin-bottom: 1rem;
  border-radius: 4px;
  overflow: hidden;
  padding: 0px 0px 8px;
  width: 185.33px;
  height: 255.33px;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}

.pic {
  width: 185.33px;
  height: 185.33px
}

p {
  color: #282828;
}

.price {
  margin: 0;
  font-size: 16px;
  padding: 4px 8px 16px;
  color: #282828
}
}
</style>