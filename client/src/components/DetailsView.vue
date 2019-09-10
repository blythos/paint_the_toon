<template lang="html">
  <div>
    <div id="title">
      <h1>{{ chosenMural.name}}</h1>
      <h3>{{ chosenMural.artist}}</h3>
    </div>
    <img :src="chosenMural.image">
    <p>{{chosenMural.description}}</p>
    <p>Location: {{chosenMural.location.area}}</p>
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
h1 {
  padding: 0;
  margin: 0;
}

h3 {
  padding: 0  1vw;
  margin: 0.2vw 0;
  color: dimgrey;
}

img {
  margin-top: 1vw;
  max-width: 46vw;
}

#title {
  display: flex;
  align-items: flex-end;
  /* justify-content: space-around; */
}
</style>


<!-- v-if="!this.favourites.includes(chosenMural)" -->
