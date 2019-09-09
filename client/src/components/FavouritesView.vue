<template lang="html">
  <div>
<p v-for="chosenMural of this.favourites">{{chosenMural.name}}</p>
</div>
</template>

<script>
export default {
  name: 'favourites-view',
  props: ['favourites']
}
</script>

<style lang="css" scoped>
</style>
