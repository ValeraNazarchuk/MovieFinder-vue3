<script setup>
import { onMounted, ref, inject } from "vue";
import { useRouter } from 'vue-router';
import { useSearchStore } from "@/stores/movies";
import axios from "axios";
import MoviesList from "@/components/ResultMovies/MoviesList.vue";

const router = inject('router');
const searchStore = useSearchStore();
const movies = ref([]);
const loadingFullWindow = ref(false);
const reloading = ref(false);
const pageNumber = ref(1);

const watchMovie = (movie) => {
  searchStore.moviesId = movie.imdbID;
  router.push("/detailed-movies");
};

const getMovies = async (movie, page) => {
  loadingFullWindow.value = true;
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${movie}&page=${page}&apikey=738daa61`
    );
    movies.value = response.data.Search;
  } catch (error) {
    console.error("Error fetching movies:", error);
  } finally {
    loadingFullWindow.value = false;
  }
};

const loadMoreMovies = async (movie, page) => {
  reloading.value = true;
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${movie}&page=${page}&apikey=738daa61`
    );
    movies.value = [...movies.value, ...response.data.Search];
  } catch (error) {
    console.error("Error fetching movies:", error);
  } finally {
    reloading.value = false;
  }
};

onMounted(() => {
  getMovies(searchStore.searchMovies, pageNumber.value);

  const options = {
    rootMargin: "0px",
    threshold: 1.0,
  };

  const callback = (entries, observer) => {
    if (entries[0].isIntersecting) {
      pageNumber.value+=1;
      loadMoreMovies(searchStore.searchMovies, pageNumber.value);
    }
  };

  const observerElement = document.getElementById('observerElement');

  const observer = new IntersectionObserver(callback, options);
  observer.observe(observerElement);
});
</script>

<template>
  <div class="movies">
    <h2 class="movies__error" v-if="!movies && !loadingFullWindow">
      No movies found
    </h2>
    <div v-else-if="loadingFullWindow" class="loader-container">
      <Loader />
    </div>
    <div v-else>
      <h2 class="movies__title">Movies</h2>
      <MoviesList :movies="movies" @onWatch="watchMovie" />
      <div v-show="reloading" class="movies__loader">
        <Loader />
      </div>
    </div>
    <div id="observerElement"></div>
  </div>
</template>

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
