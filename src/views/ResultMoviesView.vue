<template>
  <div class="movies">
    <h2 class="movies__error" v-if="!movies && !loading">No movies found</h2>
    <Loader v-else-if="loading" />
    <div v-else>
      <h2 class="movies__title">Movies</h2>
      <MoviesList :movies="movies" @onWatch="watchMovie" />
    </div>
  </div>
</template>

<script>
import { useSearchStore } from "../stores/movies";
import Loader from "../components/Loader/Loader.vue";
import axios from "axios";
import MoviesList from "../components/ResultMovies/MoviesList.vue";

const searchStore = useSearchStore();

export default {
  components: {
    Loader,
    MoviesList,
  },
  data() {
    return {
      movies: [],
      loading: false,
    };
  },
  methods: {
    async getMovies(movie) {
      this.loading = true;
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${movie}&apikey=738daa61`
        );
        this.movies = response.data.Search;
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        this.loading = false;
      }
    },
    watchMovie(movie) {
      searchStore.moviesId = movie.imdbID;

      this.$router.push("/detailed-movies");
    },
  },
  mounted() {
    this.getMovies(searchStore.searchMovies);
  },
};
</script>

<style lang="scss" scoped>
.movies {
  // height: 100%;
  &__error {
    color: $white;
    height: 100%;
    font-size: 32px;
    line-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__title {
    color: $white;
    font-size: 32px;
    line-height: 44px;
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
