<template>
  <div class="movies">
    <h2 class="movies__error" v-if="!movies && !loadingFullWindow">
      No movies found
    </h2>
    <div v-else-if="loading" class="loader-container">
      <Loader />
    </div>
    <div v-else>
      <h2 class="movies__title">Movies</h2>
      <MoviesList :movies="movies" @onWatch="watchMovie" />
      <div v-show="reloading" class="movies__loader">
        <Loader />
      </div>
    </div>
    <div ref="observer"></div>
  </div>
</template>

<script>
import { useSearchStore } from "../stores/movies";
import axios from "axios";
import MoviesList from "../components/ResultMovies/MoviesList.vue";

const searchStore = useSearchStore();

export default {
  components: {
    MoviesList,
  },
  data() {
    return {
      movies: [],
      loadingFullWindow: false,
      reloading: false,
      pageNumber: 1,
    };
  },
  methods: {
    async getMovies(movie, page) {
      this.loadingFullWindow = true;
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${movie}&page=${page}&apikey=738daa61`
        );
        this.movies = response.data.Search;
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        this.loadingFullWindow = false;
      }
    },

    async loadMoreMovies(movie, page) {
      this.reloading = true;
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${movie}&page=${page}&apikey=738daa61`
        );
        this.movies = [...this.movies, ...response.data.Search];
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        this.reloading = false;
      }
    },
    watchMovie(movie) {
      searchStore.moviesId = movie.imdbID;

      this.$router.push("/detailed-movies");
    },
  },
  mounted() {
    this.getMovies(searchStore.searchMovies, this.pageNumber);

    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    const callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        this.pageNumber++;
        this.loadMoreMovies(searchStore.searchMovies, this.pageNumber);
      }
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
};
</script>

<style lang="scss" scoped>
.movies {
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
  &__loader {
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
</style>
