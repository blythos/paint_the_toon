<template lang="html">
  <div id="heading">
    <img src="@/assets/logo.png" alt="Paint The Toon">
    <h1>Follow Glasgow's Graffiti Trail</h1>
  </div>
</template>

<script>
export default {
  name: 'header-section'
}
</script>

<style lang="css" scoped>
#heading {
  display: flex;
}

img {
  max-height: 15vh;
}

h1 {
  margin-left: 2vw;
  margin-top: 4vh;
  color: dimgrey;
  font-size: 2.3em;
}
</style>
