<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useMoviesStore } from "@/stores/movies";
// import axios from "axios";
import CarouselMovies from "@/components/ResultMovies/CarouselMovies.vue";

const router = useRouter();
const route = useRoute();
const moviesStore = useMoviesStore();
// const movies = ref([]);
// const loadingFullWindow = ref(false);
// const reloading = ref(false);
const pageNumber = ref(1);
// const pageNumber = route.query.page;

const watchMovie = (movie) => {
  router.push(`/detailed-movies/${movie.imdbID}`);
  // router.push({
  //   name: 'detailed-movies',
  //   params: {
  //     id: movie.imdbID
  //   }
  // });
};

// const changePage = (newPage) => {
//   router.push({
//     path: route.path,
//     query: {
//       ...route.query,  // Копирование текущих параметров
//       page: newPage
//     }
//   });
// }

let setTimer;

const startPageSwitchTimer = (index) => {
  setTimer = setTimeout(() => {
    // getMovies(pageNumber);
    // moviesStore.getListMovies(route.query.search, pageNumber.value);
    // changePage(pageNumber.value++)
    // router.push({
    //   path: route.path,
    //   query: {
    //     ...route.query,  // Копирование текущих параметров
    //     page: pageNumber.value++
    //   }
    // });
    // pageNumber.value++
    if (index > 8) {
      pageNumber.value++;
    }else {
      pageNumber.value--;
    }
    router.push(
      `/result-movies?search=${route.query.search}&page=${pageNumber.value}`
    );

    // Як правильно зробити шоб не було затримки через route.query.page
    moviesStore.getListMovies(route.query.search, pageNumber.value);
  }, 3000);
};

const handleIndexUpdate = (index) => {
  if (index > 8) {
    // pageNumber.value++;
    // clearTimeout(setTimer);
    startPageSwitchTimer(index);
  } else if (pageNumber.value > 1 && index === 0) {
    // pageNumber.value--;
    // clearTimeout(setTimer);
    startPageSwitchTimer();
  } else {
    clearTimeout(setTimer);
  }
};

// const getMovies = async (page) => {
//   loadingFullWindow.value = true;
//   try {
//     const response = await axios.get(
//       `http://www.omdbapi.com/?s=${route.query.search}&page=${page.value}&apikey=738daa61`
//     );
//     movies.value = response.data.Search;
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//   } finally {
//     loadingFullWindow.value = false;
//   }
// };

// const loadMoreMovies = async (movie, page) => {
//   reloading.value = true;
//   try {
//     const response = await axios.get(
//       // `http://www.omdbapi.com/?s=${route.params.search}&page=${page}&apikey=738daa61`
//       `http://www.omdbapi.com/?s=${route.query}&page=${page}&apikey=738daa61`
//     );
//     movies.value = [...movies.value, ...response.data.Search];
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//   } finally {
//     reloading.value = false;
//   }
// };

// console.log(route.query);

onMounted(() => {
  // getMovies(pageNumber.value);
  // moviesStore.getListMovies(route.query.search, pageNumber.value);
  moviesStore.getListMovies(route.query.search, route.query.page);
});
</script>

<template>
  <div class="movies">
    <h2
      class="movies__error"
      v-if="!moviesStore.movies && !moviesStore.loading"
    >
      No movies found
    </h2>
    <div v-else-if="moviesStore.loading" class="loader-container">
      <Loader />
    </div>
    <div v-else>
      <h2 class="movies__title">Movies</h2>
      <CarouselMovies
        :movies="moviesStore.movies"
        @updateIndex="handleIndexUpdate"
        @onWatch="watchMovie"
      >
      </CarouselMovies>
      <div v-show="moviesStore.loading" class="movies__loader">
        <Loader />
      </div>
    </div>
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
