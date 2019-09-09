<template lang="html">
<div>
<button @click="tab = 'details'">Details</button>
<button @click="tab = 'favourites'">Favourites</button>
<details-view  :favourites="favourites" v-if="chosenMural && tab === 'details'" :chosenMural="chosenMural" />
<favourites-view :favourites="favourites" v-if="tab === 'favourites'" />
</div>
</template>

<script>
import DetailsView from '@/components/DetailsView';
import FavouritesView from '@/components/FavouritesView';
export default {
  name: 'right-pane',
  data() {
    return {
      tab: 'details'
    }
  },
  components: {
    DetailsView,
    FavouritesView
  },
  props: ['chosenMural', 'favourites']
}
</script>

<style lang="css" scoped>
</style>
