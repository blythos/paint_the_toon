<template lang="html">
<div>
<button @click="tab = 'details'">Details</button>
<button @click="tab = 'favourites'">Favourites</button>
<details-view v-if="chosenMural && tab === 'details'" :chosenMural="chosenMural" />
<favourites-view v-if="tab === 'favourites'" />
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
  props: ['chosenMural']
}
</script>

<style lang="css" scoped>
</style>
