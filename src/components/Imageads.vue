<template>
<div class='catt'>
<b-container fluid="sm">
    <div class='d-flex'>
    <img class='imad' :src="require('@/assets/pic2.jpg')" />
    <img class='imad2' :src="require('@/assets/pic.jpg')" />
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
.imad, .imad2 {
  max-width: 50%;
  height: 18vh;
  border-radius: 4px;
}

.imad {
  margin-right: 0.2rem
}

.imad2 {
  margin-left: 0.2rem
}

.catt {
  box-shadow: 0 0 6px 1px gray;
  padding: 4px
}

@media oly screen and (min-width: 600px) {
  .catt {
  box-shadow: 0 0 0px 0px gray;
  padding: 4px
}
}
</style>
