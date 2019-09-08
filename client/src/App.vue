<template lang="html">
  <div>
    <header-section />
      <VueMap />
      <right-pane :chosenMural="chosenMural"></right-pane>
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
        chosenMural: null
      }
    },
    mounted(){
      eventBus.$on('mural-selected', (mural) => {
        this.chosenMural = mural;

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
