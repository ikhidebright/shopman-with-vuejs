<template>
<div>
<div class='cardcol'>
<div class='card mx-auto'>
    <img class='img' :src="require('@/assets/pic2.jpg')" />
    <img class='img2' :src="require('@/assets/pic.jpg')" />
</div>
</div>
  </div>
</template>

<script>
import ProductCard from '@/components/Product/ProductCard.vue'

export default {
  name: 'Home',
  props: ["products"],
  data: () => ({
  })
}
</script>

<style scoped>
.cardcol {
  box-sizing: border-box;
  display: block;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  flex-basis: 100%;
  max-width: 100%;
  min-width: 100%;
  width: 100%;
}

.img {
  height: 100%;
  width: 50%;
  top: 0;
  padding: 4px;
  left: 0;
  position: absolute;
  border-style: none;
  box-sizing: border-box;
  border-radius: 4px;
  color: inherit;
  cursor: pointer;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
}

.img2 {
  height: 100%;
  width: 50%;
  padding: 4px;
  top: 0;
  right: 0;
  position: absolute;
  border-style: none;
  box-sizing: border-box;
  border-radius: 4px;
  color: inherit;
  cursor: pointer;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
}

.card {
  margin-bottom: 0.5rem;
  padding: 8px;
  height: 140px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  border-radius: 0px;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  font-size: .875rem;
  font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
}
@media only screen and (min-width: 600px) {

.cardcol {
  padding: 8px;
  box-sizing: border-box;
  display: block;
  direction: ltr;
    -webkit-font-smoothing: antialiased;
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%;
    width: 100%;
}

.img {
  border-radius: 4px;
  height: 100%;
  width: 50%;
  top: 0;
  padding: 4px;
  left: 0;
  position: absolute;
  border-style: none;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
}

.img2 {
  border-radius: 4px;
  height: 100%;
  width: 50%;
  padding: 4px;
  top: 0;
  right: 0;
  position: absolute;
  border-style: none;
  box-sizing: border-box;
  color: inherit;
  cursor: pointer;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
}

.card {
  margin-bottom: 0.5rem;
  padding: 8px;
  height: 266.2px;
  width: 1184px;
  display: flex;
  box-sizing: border-box;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  font-size: .875rem;
  font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
}
}
</style>
