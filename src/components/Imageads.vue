<template>
<div class='catt'>
<b-container fluid="sm">
    <div class='d-flex'>
    <img class='imad' :src="require('@/assets/pic2.jpg')" />
    <img class='imad' :src="require('@/assets/pic.jpg')" />
    </div>
    </b-container>
</div>
</template>

<script>

export default {
  name: 'Imageadd',
  components: {
  }
}
</script>

<style scoped>
.imad {
  max-width: 50%
}
</style>
