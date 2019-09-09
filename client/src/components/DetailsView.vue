<template lang="html">
  <div>
    Name: {{ chosenMural.name}}
    Artist: {{ chosenMural.artist}}
      <img :src="chosenMural.image">
    Details:  {{chosenMural.description}}
    Location: {{chosenMural.location.area}}
    <button @click="addToFavourites()" v-if="!this.favourites.includes(this.chosenMural)">Add to favourites</button>
  </div>

</template>

<script>
import {eventBus} from '@/main.js'
export default {
  name: 'details-view',
  props: ['chosenMural', 'favourites'],
  methods: {
    addToFavourites: function() {eventBus.$emit('mural-favourited', this.chosenMural);
  }
}
}

</script>

<style lang="css" scoped>
</style>


<!-- v-if="!this.favourites.includes(chosenMural)" -->
