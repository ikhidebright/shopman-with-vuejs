<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
  <div class="container">
  
  <div class="containe d-lg-none" @click="change(this)">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div>
  <a class="navbar-brand" href="#">Shopman</a>

  <b-button variant="p" to="/cart">
   <i class="fas fa-cart-plus"></i>
    
  </b-button><b-badge variant="l" class="cartcount"> {{ this.$store.state.cart.length }}</b-badge>
 <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> -->
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
    </ul>
  </div>
</div>
</nav>
</template>

<script>

export default {
  name: 'Header',
  components: {
  },
  methods: {
    change (x) {
  alert('hey')
}
  },
  computed: {
    cartcount () {
      return this.$store.state.cart.length
    }
  }
}
</script>


<style scoped>
.cartcount {
  margin-bottom: 1rem;
  margin-left: -4.5rem
}

@media only screen and (min-width: 600px) {
  .cartcount {
  margin-bottom: 1rem;
  margin-left: -0.8rem
}
}
<style>
.containe {
  display: inline-block;
  cursor: pointer;
  margin-right: 5rem
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.navbar-brand {
margin-left: 1rem
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
</style>