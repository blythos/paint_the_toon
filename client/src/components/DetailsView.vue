<template lang="html">
  <div>
    Name: {{ chosenMural.name}}
    Artist: {{ chosenMural.artist}}
    <img :src="chosenMural.image">
    Details:  {{chosenMural.description}}
    Location: {{chosenMural.location.area}}
  </div>
</template>

<script>
export default {
  name: 'details-view',
  props: ['chosenMural']
}
</script>

<style lang="css" scoped>
</style>
