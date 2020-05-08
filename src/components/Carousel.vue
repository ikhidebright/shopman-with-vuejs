<template>
  <div class="top pr-0" id="carousel">
    <carousel
      :per-page="1"
      :mouse-drag="true"
      :autoplay="true"
      :loop="true"
      :speed="2000"
    >
      <slide v-for="slide in images" :key="slide.path" class="carousel">
        <b-img :src="slide.path" fluid-grow alt="Fluid-grow image"></b-img>
        <!-- <img style="display: block; width: 60%; height: 400px; margin: 0 auto;" :src="slide.path" /> -->
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: "esther",
  data() {
    return {
      images: [
        {
          path: 1
        },
        {
          path: 1
        },
        {
          path: 1
        },
        {
          path: 1
        },
        {
          path: 1
        },
        {
          path: 1
        }
      ]
    };
  }
};
</script>
<style>
.top {
  margin-top: 40px;
}

.carousel {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
}
</style>