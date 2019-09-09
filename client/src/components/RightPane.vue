<template lang="html">
<div id="rightPane">
<button @click="tab = 'details'">Details</button>
<button @click="tab = 'favourites'">Favourites</button>
<button @click="tab = 'recommendations'">Nearby</button>
<details-view  :favourites="favourites" v-if="chosenMural && tab === 'details'" :chosenMural="chosenMural" />
<favourites-view :favourites="favourites" v-if="tab === 'favourites'" />
<recommendations-view :recommendations="recommendations" v-if="tab === 'recommendations'"/>
</div>
</template>

<script>
import DetailsView from '@/components/DetailsView';
import FavouritesView from '@/components/FavouritesView';
import RecommendationsView from '@/components/RecommendationsView';
export default {
  name: 'right-pane',
  data() {
    return {
      tab: 'details'
    }
  },
  components: {
    DetailsView,
    FavouritesView,
    RecommendationsView
  },
  props: ['chosenMural', 'favourites', 'recommendations']
}
</script>

<style lang="css" scoped>
#rightPane {
	width:49vw;
	height:80vh;
}

#tabtop {
  background-color: grey;
  height: 4vh;
}
</style>
