<template>
  <main class="wrapper">
    <list-input />
    <list-output />
  </main>
</template>

<script>
export default {}
</script>

<style lang="sass">
@font-face
  font-family: "Montserrat"
  src: url(../fonts/Montserrat-Regular.ttf) format("truetype")

*
  margin: 0
  padding: 0
  box-sizing: border-box

body
  background-image: url(../static/bg.png)

.wrapper
  display: flex
  margin: 8.125rem auto 0 auto
  max-width: 97.5rem
  justify-content: space-between
</style>
