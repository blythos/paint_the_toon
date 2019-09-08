<template lang="html">
<div>
  Name: {{ chosenMural.name}}
  Artist: {{ chosenMural.artist}}
    {{chosenMural.image}}
  Details:  {{chosenMural.description}}
  Location: {{chosenMural.location.area}}
</div>
</template>

<script>
export default {
  name: 'right-pane',
  props: ['chosenMural']
}
</script>

<style lang="css" scoped>
</style>
