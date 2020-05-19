<template>
  <div class="home">
  <div class="mt-4 home">
  <div class="d-sm-flex flex-sm-column d-lg-flex flex-lg-row">
     <div class="col-12 mt-3">
  <Carousel />
    </div>
    </div>
    <Homecards :type="mobile"/>
    <Imageads />
    <Homecards :type="electro"/>
    <Imageads />
    <Homecards :type="homeapp"/>
  </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Homecards from '@/components/Homecards.vue'
import SideBar from '@/components/SideBar.vue'
import Imageads from '@/components/Imageads.vue'

export default {
  name: 'Home',
  data: () => ({
    categories: null,
    electro: 'Electronics',
    mobile: 'Mobile Phones',
    homeapp: 'Home Appliances'
  }),
  components: {
    Homecards,
    Imageads,
    Carousel,
    SideBar
  }
}
</script>

<style scoped>
.home {
  background: url("https://ng.jumia.is/cms/Homepage/2020/W19/Ramdan_BG_2.jpg");
  background-size: 100% 100vh
}

@media only screen and (min-width: 600px) {
.home {
  background: url("https://ng.jumia.is/cms/Homepage/2020/W19/Ramdan_BG_2.jpg");
  background-size: 100% 100vh
}

}
</style>