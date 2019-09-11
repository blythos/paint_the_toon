<template lang="html">
<div id="rightPane">
  <div class="tabs">
    <input type="radio" name="tabs" id="tabone" checked="checked" @click="tab = 'details'">
    <label for="tabone">Details</label>
    <div class="tab">
      <details-view  :favourites="favourites" v-if="chosenMural && tab === 'details'" :chosenMural="chosenMural" />
    </div>

    <input type="radio" name="tabs" id="tabtwo" @click="tab = 'favourites'">
    <label for="tabtwo">Favourites</label>
    <div class="tab">
      <favourites-view :favourites="favourites" v-if="tab === 'favourites'" />
    </div>

    <input type="radio" name="tabs" id="tabthree" @click="tab = 'recommendations'">
    <label for="tabthree">Nearby</label>
    <div class="tab">
      <recommendations-view :recommendations="recommendations" v-if="tab === 'recommendations'"/>
    </div>
  </div>
</div>
</template>

<script>
import {eventBus} from '@/main.js'
import DetailsView from '@/components/DetailsView';
import FavouritesView from '@/components/FavouritesView';
import RecommendationsView from '@/components/RecommendationsView';
export default {
  name: 'right-pane',
  mounted() {
    eventBus.$on('mural-selected', () => {
      this.tab = 'details';
    })
  },
  data() {
    return {
      isActive: true,
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

.tab {
  height:70vh;
  overflow-y: scroll;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
}

.tabs label {
  order: 1;
  display: block;
  padding: 1rem 2rem;
  margin-right: 0.2rem;
  cursor: pointer;
  background:  darkcyan;
  color: snow;
  font-weight: bold;
  font-size: 1em;
  transition: ease 0.2s;
}

.tabs .tab {
  order: 99;
  flex-grow: 1;
  width: 100%;
  display: none;
  padding: 1rem;
  background: #f0f0f0;
}

.tabs input[type="radio"] {
  display: none;
}

.tabs input[type="radio"]:checked + label {
  background: #f0f0f0;
  color: black;
}

.tabs input[type="radio"]:checked + label + .tab {
  display: block;
}

@media (max-width: 45em) {
  .tabs .tab,
  .tabs label {
    order: initial;
  }

  .tabs label {
    width: 100%;
    margin-right: 0;
    margin-top: 0.2rem;
  }
}

body {
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 10vh;
  font-weight: 300;
  line-height: 1.5;
  max-width: 60rem;
  margin: 0 auto;
  font-size: 112%;
}
</style>
