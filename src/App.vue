<template lang="pug">
v-app.mt-0(dark)
  v-container
    img(src='dist/logo.png')
    h1.display-3.white--text ArtistFinder
      v-select(:items="countries" v-model="selectedCountry" label="Seleccione el país" single-line)
    h1.display-2.white--text Seleccione un país del listado para ver los artistas TOP.
    
    spinner(v-show="loading")
    v-layout.mt-3(row, wrap)
      v-flex(v-for="artist in artists" v-bind:key="artist.mbid" xs12, sm6, md4)
        artist(v-bind:artist="artist")
</template>

<script>
import getArtists from './api'
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'

export default {
  name: 'app',
  data () {
    return {
      loading: true,
      artists: [],
      selectedCountry:'argentina',
      countries: [
        { text: 'Argentina', value: 'argentina'},
        { text: 'Colombia', value: 'colombia'},
        { text: 'España', value: 'spain'}
      ]
    }
  },
  components: { Artist, Spinner },
  methods: {
    refreshArtists () {
      this.loading = true
      this.artists = []
      const self = this
      getArtists(this.selectedCountry)
        .then(function (artists) {
          self.artists = artists
          self.loading = false
        })
    }
  },
  mounted () {
    this.refreshArtists()
  },
  watch: {
    selectedCountry: function () {
      this.refreshArtists()
    }
  }
}
</script>

<style lang="stylus">
#app 
	font-family 'Avenir', Helvetica, Arial, sans-serif
	-webkit-font-smoothing antialiased
	-moz-osx-font-smoothing grayscale
	text-align center
	color #2c3e50
	margin-top 60px
h1, h2 
	font-weight normal
ul 
	list-style-type none
	padding 0
li 
	display inline-block
	margin 0 10px
a 
	color #42b983
</style>
