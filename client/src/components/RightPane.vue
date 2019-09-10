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
  min-height:70vh;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  background: white;

}

.tabs label {
  order: 1;
  display: block;
  padding: 1rem 2rem;
  margin-right: 0.2rem;
  cursor: pointer;
  background:  slategrey;
  color: snow;
  font-weight: bold;
  transition: ease 0.2s;
}

.tabs .tab {
  order: 99;
  flex-grow: 1;
  width: 100%;
  display: none;
  padding: 1rem;
  background: #fff;
}

.tabs input[type="radio"] {
  display: none;
}

.tabs input[type="radio"]:checked + label {
  background: #fff;
  color: black;
  /* border: 1px solid black; */
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
