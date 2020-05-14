<template>
  <div class="home">
  <div class="mt-4 home">
  <div class="d-sm-flex flex-sm-column d-lg-flex flex-lg-row">
    <div class="col-3 mt-5 d-none d-lg-block">
    <h6 class=""> Category </h6>
  <div v-for='category in categories' :key='category'>
  <SideBar :category='category' />
  </div>
    </div>
     <div class="col-9 mt-3">
  <Carousel />
    </div>
    </div>
    <Homecards />
    <Imageads />
    <Homecards />
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
    categories: null
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
  background: url("https://ng.jumia.is/cms/Homepage/2020/W19/Ramdan_BG_2.jpg")
}

@media only screen and (min-width: 600px) {
.home {
  background: url("https://ng.jumia.is/cms/Homepage/2020/W19/Ramdan_BG_2.jpg")
}

}
</style>