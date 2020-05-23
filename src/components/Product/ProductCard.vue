<template>
<div to='/'>
<div 
class='product mb-4'
@click='open(product)'>


<img 
:src="`${ product.thumb }`" 
class='pic d-none d-lg-block d-md-block d-xl-block d-sm-block' 
:alt="`${ product.name }`" />

<img 
:src="`${ product.thumb }`" 
class='pic ml-3 d-lg-none d-md-none d-xl-none d-sm-none' 
:alt="`${ product.name }`" />


<div class='details'>
<p class='name mb-3 mt-n2'>{{ product.name }}</p>
<p class='price mt-n2 ml-2 d-lg-none d-md-none d-xl-none d-sm-none'>₦ {{ product.price.toLocaleString() }}</p>
<p class='priceee mt-n2 ml-2 d-none d-lg-block d-md-block d-xl-block d-sm-block'>₦ {{ product.price.toLocaleString() }}</p>
<p class='discount mt-n3 ml-2 d-none d-lg-block d-md-block d-xl-block d-sm-block'>₦ {{ discount.toLocaleString() }}</p>
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
  margin: 0 auto;
  height: auto;
  border-style: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

p {
  color: #282828;
}

.price {
  margin: 0;
  font-size: .875rem;
  text-overflow: ellipsis;
  font-family: -apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",Arial,sans-serif;
  font-weight: 500;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
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
text-align: left;
color: #282828;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
max-height: 2.824em;
max-width: 9.824em;
cursor: pointer;
font-size: 13px;
-webkit-tap-highlight-color: transparent;
direction: ltr;
 /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;

  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  text-align: center;
}


@media only screen and (min-width: 600px) {

  .priceee {
    font-size: .875rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    font-weight: 700;
    font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
  }

  .discount {
    font-size: .75rem;
    font-weight: 400;
    color: #75757a;
    text-decoration: line-through;
  }

  .name {
  text-align: left;
  font-size: 14px;
  padding-left: 8px;
  color: #282828;
   color: #000;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
max-height: 2.824em;
cursor: pointer;
font-size: 13px;
-webkit-tap-highlight-color: transparent;
direction: ltr;
 /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
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