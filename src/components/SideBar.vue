<template>
<div class='cat'>
<router-link :to="`/${category.toLowerCase()}`">
{{ category }}
</router-link>
</div>
</template>

<script>

export default {
  name: 'Sidebar',
  props: ['category'],
  components: {
  }
}
</script>
