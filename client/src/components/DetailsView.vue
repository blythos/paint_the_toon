<template lang="html">
  <div>
    <div id="title">
      <h1>{{ chosenMural.name}}</h1>
      <h3>{{ chosenMural.artist}}</h3>
    </div>
    <img :src="chosenMural.image" alt="Mural example.">
    <p>{{chosenMural.description}}</p>
    <p><strong>Location: </strong> <a :href="`https://www.google.com/maps/search/?api=1&query=${chosenMural.location.longitude},${chosenMural.location.latitude}`" target="_blank">{{chosenMural.location.area}}</a></p>
    <button @click="addToFavourites()" v-if="!this.favourites.includes(this.chosenMural)">Add to favourites</button>

  </div>

</template>

<script>
import Service from '@/services/Service.js'
import {eventBus} from '@/main.js'
export default {
  name: 'details-view',
  props: ['chosenMural', 'favourites'],
  methods: {
    addToFavourites: function() {
      // let thisMural = this.chosenMural
      // console.log(thisMural);
      // thisMural = {
      //   favourite: true
      // };
      // Service.editTrail(this.chosenMural._id, this.chosenMural);
    

  }
}
}

</script>

<style lang="css" scoped>
h1 {
  padding: 0;
  margin: 0;
  font-size: 2em;
}

h3 {
  padding: 0  1vw;
  margin: 0.2vw 0;
  color: #3E3D3D;
  font-size: 1.5em;
}

p {
  font-size: 1em;
}

img {
  margin-top: 1vw;
  max-width: 46vw;
}

#title {
  display: flex;
  align-items: flex-end;
}

button {
  height: 4vh;
  width: 10vw;
  color: white;
  background: darkcyan;
  font-weight: 600;
  cursor: pointer;
}

a:link, a:visited, a:active {
  color: darkcyan;
  text-decoration: none;
}

a:hover {
  color: black;
  text-decoration: underline;
}
</style>


<!-- v-if="!this.favourites.includes(chosenMural)" -->
