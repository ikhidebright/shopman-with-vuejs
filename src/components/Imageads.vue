<template>
<div class='catt'>
<b-container fluid="sm">
<div class='catt2'>
    <div class='d-flex'>
    <img class='imad' :src="require('@/assets/pic2.jpg')" />
    <img class='imad2' :src="require('@/assets/pic.jpg')" />
    </div>
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
  height: 15vh;
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

.catt2 {
  background-color: white;
  padding: 0px 6px 0px 0px;
  border-radius: 0px
}

@media only screen and (min-width: 600px) {
  .catt {
  box-shadow: 0 0 0px 0px gray;
  padding: 4px
}

.imad, .imad2 {
  max-width: 50%;
  height: 40vh;
  border-radius: 4px;
}

.catt2 {
  background-color: white;
  padding: 10px 16px 10px 10px;
  border-radius: 4px
}
}
</style>
