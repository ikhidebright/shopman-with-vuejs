<template>
  <div class="main">
  <b-container>
  <br>
  <div class='d-flex mt-5'>
<div class='d-flex d-sm-flex d-sm-column details'>
  <div class='fir'>
  <img class='bigpic' :src="`${pic}`" />
  <div class='d-flex mt-1'>
    <img class='smimg ml-1' src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/02/486062/1.jpg?7638" />
    <img class='smimg ml-1' src="https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/02/486062/2.jpg?7638" />
    <img class='smimg ml-1' src="https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/02/486062/3.jpg?7638" />
    </div>
  </div>
  <div class='ml-3 sec'>
  <p class='pron'> {{ pitem[0].name }} </p>
  <p class='price'>₦ {{ pitem[0].price }} </p>
   <p class='oldprice'>₦ 7,650 - ₦ 7,890 </p>
  <button class="add d-none d-lg-block"> <i class="fas fa-cart-plus"></i> ADD TO CART</button>
  </div>
   </div>
// second section
   dhddhdhdhd
  </div>
  </b-container>

  <div class='mobile d-lg-none'> 
  <button class="phone"> <i class="fas fa-phone"></i></button>
  <button class="add2"> <i class="fas fa-cart-plus"></i> ADD TO CART</button>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    pitem: [],
    products: null,
    pic: null
  }),
  methods: {
    chagepic (img) {
      this.pic = img
    }
  },
  created () {
      this.products = this.$store.state.products
      this.pitem = this.products.filter((item) => {
         return item.id == parseInt(this.$route.params.id)
      })
      this.pic = this.pitem[0].img
  }
}
</script>

<style scoped>
.main {
  background-color: #f1f1f1
}

.sec {
  width: 100%;
}

.bigpic {
  width: 305px;
  height: 305px;
  border-radius: 5px
}

.smimg {
  width: 38px;
  height: 38px
}

.details {
  background-color: white;
  padding: 1rem;
  width: 872px
}

.pron {
  font-size: 20px
}

.price {
  font-size: 24px;
  font-weight: bold
}

.oldprice {
  font-size: 16px;
  color: #75757A;

}

.add {
  width: 100%;
  background: #ff9900;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold
}

.add:hover {
  background: #ffad33;
}

.fa-cart-plus {
font-size: 20px
}

.phone {
  width: 15%;
  background: white;
  color: #ff9900;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold
}

.mobile {
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  padding: 5px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
}


.add:focus {
  outline: none
}

.add2 {
  width: 85%;
  background: #ff9900;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #e5e5e5;
  height: 48px;
  font-weight: bold
}

.add2:hover {
  background: #ffad33;
}

.fa-cart-plus {
font-size: 20px
}

.add2:focus {
  outline: none
}

.fa-cart-plus {
  float: left
}

.oldprice {
  text-decoration: line-through;
  color: gray
}
</style>