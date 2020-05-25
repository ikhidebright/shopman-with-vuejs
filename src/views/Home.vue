<template>
  <div class="home mt-n4 pb-1">
  <div class="mt-4 home">
  <div class="d-sm-flex flex-sm-column d-lg-flex flex-lg-row">
     <div class="col-12 mt-3">
  <Carousel v-if="electronics.length > 0"/>
    </div>
    </div>
    <div class="text-center roll" v-if="electronics.length < 1">
    <b-spinner class="" label="Spinning"></b-spinner>
    </div>
    <Homecards :products="phones"/>
    <Imageads v-if="electronics.length > 0" :images="images[1]"/>
    <Homecards :products="electronics"/>
    <Imageads v-if="electronics.length > 0" :images="images[0]"/>
     <Homecards :products="home"/>
  </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Homecards from '@/components/Homecards.vue'
import SideBar from '@/components/SideBar.vue'
import Imageads from '@/components/Imageads.vue'
import { mapState } from 'vuex'

export default {                                                                                       
  name: 'Home',
  data: () => ({
    categories: null,
    images: [{
              img1: `${require('@/assets/pic5.jpg')}`,
              img2: `${require('@/assets/pic6.jpg')}`
              },
              {
              img1: `${require('@/assets/pic.jpg')}`,
              img2: `${require('@/assets/pic2.jpg')}`
              }]
  }),
  components: {
    Homecards,
    Imageads,
    Carousel,
    SideBar
  },
  beforeCreate () {
    this.$store.dispatch("setHomepageProducts")
  },
  computed: {
    electronics () {
      return this.$store.getters.products('Electronics') 
    },
     phones () {
      return this.$store.getters.products('Phones') 
    },
     home () {
      return this.$store.getters.products('Home Appliances') 
    }
  }
}
</script>

<style scoped>

.roll {
  padding-top: 50vh;
  background: white;
  width: 100%;
  height: 100vh
}

.home {
  background: url("https://ng.jumia.is/cms/Homepage/2020/W19/Ramdan_BG_2.jpg");
  background-size: 100% 100vh;
}

@media only screen and (min-width: 600px) {
.home {
  background: url("https://ng.jumia.is/cms/Homepage/2020/W19/Ramdan_BG_2.jpg");
  background-size: 100% 100vh
}

}
</style>