<template>
  <div class="movie-search">
    <h2>{{ msg }}</h2>
    <input type="text" v-model="movie" @change="handleChange" @keyup.enter="handleChange" />
    <ul>
      <li v-for="m in movieList" v-bind:key="m.id">{{ m.title }}</li>
    </ul>
  </div>
</template>

<script>
// https://rapidapi.com/hmerritt/api/imdb-internet-movie-database-unofficial?endpoint=apiendpoint_87760ea6-7bd8-4a18-9339-8a7f7dc681cc
const queryMoviesURI = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/"
const searchMovieIdURI = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/"
export default {
  props: {
    msg: String,
  },
  data: function() {
    return {
      movie: "",
      gotSearchResult: false,
      movieList: [],
    }
  },
  methods: {
    handleChange() {
      // this.gotSearchResult ? null :
      this.queryForMovies()
      this.emitMovieToParent()
    },
    emitMovieToParent() {
      this.$emit("movie-input-change", this.movie)
    },
    queryForMovies() {
      this.gotSearchResult = true
      this.$http
        .get(this.getSearchUrl())
        .then(result => {
          this.movieList = result.data.titles
          this.movieList.forEach(movie => this.searchforMovieId(movie.id))
          console.log(this.movieList)
        })
        .catch(e => {
          this.gotSearchResult = false
          console.log(e)
        })
    },
    getSearchUrl() {
      return queryMoviesURI + this.movie
    },
    searchforMovieId(id) {
      console.log('hi')
      this.$http
        .get(searchMovieIdURI+id)
        .then(res => console.log(res))
        .catch(e => console.log(e))
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 0 0 10px;
}
input {
  border: 3px solid black;
  text-align: center;
  padding: 5px;
}
a {
  color: #42b983;
}
.movie-search {
  border: 3px solid black;
  padding: 30px;
}
</style>
