<template>
  <div class="home mt-n4">
  <div class="mt-4 home">
  <div class="d-sm-flex flex-sm-column d-lg-flex flex-lg-row">
     <div class="col-12 mt-3">
  <Carousel />
    </div>
    </div>
    <Homecards :products="phones"/>
    <Imageads />
    <Homecards :products="electronics"/>
    <Imageads />
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