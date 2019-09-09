<template lang="html">
<div>



<button @click="tab = 'details'">Details</button>
<button @click="tab = 'favourites'">Favourites</button>
  <div v-if="tab === 'details'">
    Name: {{ chosenMural.name}}
    Artist: {{ chosenMural.artist}}
      {{chosenMural.image}}
    Details:  {{chosenMural.description}}
    Location: {{chosenMural.location.area}}
  </div>
  </div>
</template>

<script>
export default {
  name: 'right-pane',
  data(){
    return {
      tab: 'details'
    }
  },

  props: ['chosenMural']
}
</script>

<style lang="css" scoped>
</style>
