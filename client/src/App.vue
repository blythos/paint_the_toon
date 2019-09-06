<template lang="html">
  <div>
    <header-section />
      <VueMap />
    </div>

  </template>

  <script>
  import HeaderSection from '@/components/HeaderSection.vue'
  import VueMap from '@/components/Map.vue'
  export default {
    name: 'app',
    components: {
      VueMap,
      HeaderSection
    }
  }

  </script>

  <style lang="css" scoped>
  </style>
