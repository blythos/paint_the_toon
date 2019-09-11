<template lang="html">
  <div id="app">
    <header-section />
    <div id="main">
      <VueMap />
      <right-pane :favourites="favourites" :chosenMural="chosenMural"></right-pane>
    </div>
    </div>

  </template>

  <script>
  import {eventBus} from '@/main.js'
  import HeaderSection from '@/components/HeaderSection.vue'
  import VueMap from '@/components/Map.vue'
  import RightPane from  '@/components/RightPane.vue'
  import Service from '@/services/Service.js'
  export default {

    name: 'app',
    data(){
      return{
        chosenMural: null,
        favourites: [],
        recommendations: ""
      }
    },
    mounted(){
      eventBus.$on('mural-selected', (mural) => {
        this.chosenMural = mural;

      })
      eventBus.$on('mural-favourited', (mural) => {
       Service.addFavourite(this.chosenMural);

  })
     Service.getFavourites()
    .then(res => this.favourites = res)

    },
    components: {
      VueMap,
      HeaderSection,
      RightPane
    }
  }

  </script>

  <style lang="css" scoped>
    #app {
      font-family: "lato", sans-serif;
    }

    #main {
      display: flex;
      justify-content: space-between;
    }
  </style>
