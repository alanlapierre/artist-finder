<template lang="pug">
v-card.artist.ma-3
  v-card-media.ma-2(:src="artist.image[2]['#text']")
  v-card-actions
    v-btn(flat color="orange" :href="artist.url" target="_blank") {{ artist.name }}
</template>

<script>
export default {
  name: 'artist',
  props: [ 'artist' ]
}
</script>
<style lang="stylus">
.artist
  cursor pointer
  transition .15s all ease-in-out
  &:hover
    transform scale(1.1)
</style>


