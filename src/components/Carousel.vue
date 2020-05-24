<template>
<div class="goback">
  <div class="home2 mt-n3">
    <div class="wrapper">
      <b-container
        fluid
        class="p-0 content-mt custom-container d-none d-md-block"
        v-if="!smallScreen"
      >
        <b-row class="m-0 py-3">
          <b-col
            lg="2"
            md="3"
            sm="3"
            class=" p-0 pl-3 d-none d-md-block category-wrapper"
          >
            <b-card-group>
              <b-card
                no-body
                style="border: none; font-size: 16px;"
                class="text-left h3"
              >
                <b-list-group class="text-left">
                  <b-list-group-item
                    style="border: none; 
                          text-overflow: ellipsis;
                          white-space: nowrap;
                          overflow: hidden;
                          box-sizing: border-box;
                          font-size: .75rem;
                          color: #282828;
                          font-weight: 400;
                          font-family: Roboto,-apple-system,BlinkMacSystemFont,Arial,sans-serif;
                          direction: ltr;
                          -webkit-font-smoothing: antialiased;"
                    v-for="item in categories"
                    :key="item"
                    :href="`/category/${item.replace(/[' ']+/g,'-').toLowerCase()}`"
                    class="links"
                  >
                    {{ item }}
                  </b-list-group-item>
                </b-list-group>
              </b-card>
            </b-card-group>
          </b-col> 
          <b-col lg="8" sm="12" md="9">
            <b-row class="px-3 pb-3">
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="3000"
                fade
                controls
                indicators
                background="#ababab"
                style="text-shadow: 1px 1px 2px #333; width: 100%; z-index: 0;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <!-- Text slides with image -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W21/Slider--Office-Consumables.jpg"
                      alt="image slot"
                    />
                  </template>
                  ></b-carousel-slide>

                <!-- Slides with custom text -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W21/Slider-samsung.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W21/FLOORS/eid.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>

                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W21/FLOORS/Self-care.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>

                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W21/BRANDDAY/0-Slider.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </b-row>
                </b-card>
              </b-col>
            
<b-col cols="2" class="p-0 pr-3 d-none d-sm-none d-lg-block">
            <b-row class="m-0">
              <b-col cols="12 p-0">
                <b-card
                  class="mb-3 card-right-height card-right-background"
                ></b-card>
              </b-col>
              <b-col cols="12 p-0">
                <b-card
                  class="card-right-height card-right-background-2"
                ></b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
          </b-col> 
        </b-row>
      </b-container>
      <!-- for smaalscreens -->
      <b-container
        v-else
        fluid
        class="p-0 content-mt-sm custom-container d-md-none"
      >
        <b-row class="m-0 pb-3">
          <b-col>
            <b-row class="pb-3 mt-5 mb-n3">
              
            <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="3000"
                fade
                controls
                indicators
                background="#ababab"
                style="text-shadow: 1px 1px 2px #333; width: 100%;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W21/Slider--Office-Consumables.jpg"
                      alt="image slot"
                    />
                  </template>
                  ></b-carousel-slide
                >
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W21/Slider-samsung.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>

                <Slides with image only 
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W21/FLOORS/eid.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>

               <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/8-18/stay-safe/updated/s-ss.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>

                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W21/FLOORS/Self-care.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
  </div>
</template>
<style scoped>
.remove-border {
  border: none;
}
</style>


<script>
export default {
  name: 'Home',
  data() {
    return {
      categoriesclass: '',
      contentClass: '',
      slide: 0,
      categories: ['Electronics', 'Mobile Phones', 'Home Appliances'],
      sliding: null,
      smallScreen: true,
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
  },
  methods: {
    onResize() {
      if (window.innerWidth < 768) {
        this.smallScreen = true
      } else {
        this.smallScreen = false
      }
    },
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
  },
  created() {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
}
</script>
<style scoped>

.goback {  
  z-index: -1;
}

.card-right-background {
  background-image: url('https://ng.jumia.is//cms/Homepage/2020/W13/1TechWeek_BSB_2pm+9pm-(1).gif');
  background-size: contain;
}
.card-right-background-2 {
  background-image: url('https://ng.jumia.is//cms/Homepage/2020/W21/FLOORS/BSB_FreeDelivery.jpg');
  background-size: contain;
}
.custom-container {
  max-width: 1200px;
  z-index: 0
}
.content-mt {
  margin-top: 56px;
}
.product-sm-px {
  padding: 0 0.5rem !important;
}
.content-mt-sm {
  margin-top: 52px;
}
.category-wrapper {
  position: -webkit-sticky;
  position: sticky;
  top: 62px;
  z-index: 0;
  height: 402px;
}
.my-card-title .card-header {
  text-align: left;
  font-size: 1.3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #14191f;
}
.my-card-title .card-body {
  padding-bottom: 0;
}
.flash-sales-title,
.recommendation-sales-title {
  border: none;
}
.flash-sales-title .card-header {
  color: #fff;
  background-color: red;
}
.recommendation-sales-title .card-header {
  color: #fff;
  background-color: rgb(50, 116, 50);
}
.card-right-height {
  height: 193px;
}
.product-title {
  margin-bottom: 0.3rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product-link {
  text-decoration: none;
  color: rgb(31, 29, 29);
  cursor: pointer;
}
.carousel-container-height {
  min-height: 22.04724409448819vh;
  z-index: 0;
}
.carousel-img-height {
  height: 100%;
}
.md-mt-height {
  margin-top: 56px;
}

@media only screen and (max-width: 768px) {
.carousel-container-height {
  height: 22.04724409448819vh;
 }
}
</style>