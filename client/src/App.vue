<template lang="html">
  <div>
    <header-section />
      <VueMap />
      <right-pane :favourites="favourites" :chosenMural="chosenMural"></right-pane>
    </div>

  </template>

  <script>
  import {eventBus} from '@/main.js'
  import HeaderSection from '@/components/HeaderSection.vue'
  import VueMap from '@/components/Map.vue'
  import RightPane from  '@/components/RightPane.vue'
  export default {

    name: 'app',
    data(){
      return{
        chosenMural: null,
        favourites: []
      }
    },
    mounted(){
      eventBus.$on('mural-selected', (mural) => {
        this.chosenMural = mural;

      })
      eventBus.$on('mural-favourited', (mural) => {
    this.favourites.push(mural);
  })
    },
    components: {
      VueMap,
      HeaderSection,
      RightPane
    }
  }

  </script>

  <style lang="css" scoped>
  </style>
