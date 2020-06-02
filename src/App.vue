<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div class="movie-search-container">
      <movie msg="movie 1:" @movie-input-change="updateMovie1" />
      <movie msg="movie 2:" @movie-input-change="updateMovie2" />
    </div>
    <button @click="handleClick">Search</button>
  </div>
</template>

<script>
const baseURI =
  "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception";
import movie from "./components/movie.vue";
export default {
  name: "App",
  components: {
    movie
  },
  data() {
    return {
      movie1: "",
      movie2: ""
    };
  },
  methods: {
    updateMovie1(e) {
      this.movie1 = e;
    },
    updateMovie2(e) {
      this.movie2 = e;
    },
    handleClick() {
      console.log("1:", this.movie1, "2:", this.movie2, baseURI);
    }
  },

  // mounted: function() {
  //   this.$http.get(baseURI).then(result => {
  //     console.log(result);
  //   });
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  --color: white;

  color: var(--color);
  border: 2px solid var(--color);

  background: rgb(0, 1, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 1, 255, 1) 0%,
    rgba(0, 189, 255, 1) 100%
  );
  margin: 35px;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 20px;

  outline: none;
  user-select: none;
}
.movie-search-container{
  display: flex;
  justify-content: space-evenly;

}
</style>
