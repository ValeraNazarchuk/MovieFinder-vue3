<script setup>
import { onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router'
// import axios from "axios";
import { useMoviesStore } from "@/stores/movies";

const router = useRouter()
const route = useRoute()
const movieStore = useMoviesStore();
// const movie = movieStore.movie
// const loadingFullWindow = ref(false);

// const getMovies = async (movieId) => {
  // loadingFullWindow.value = true;
  // try {
  //   const response = await axios.get(
  //     `http://www.omdbapi.com/?i=${route.params.id}&apikey=738daa61`
  //   );
  //   movie.value = response.data;
  // } catch (error) {
  //   console.error("Error fetching movies:", error);
  // } finally {
  //   loadingFullWindow.value = false;
  // }
// };

onMounted(() => {
  // getMovies(searchStore.moviesId);
  movieStore.getDetailedMovie(route.params.id)
});
</script>

<template>
  <div v-if="movieStore.loading" class="loader-container">
    <Loader />
  </div>
  <div v-else class="movie">
    <div class="movie__inner">
      <div class="movie__content">
        <PrimaryButton @onClick="router.push(`/result-movies`)"
          >Back</PrimaryButton
        >
        <h3 class="movie__content-title">{{ movieStore.movie.Title }}</h3>
        <p>
          IMDb: <strong>{{ movieStore.movie.imdbRating }}</strong>
        </p>
        <p>
          Year: <strong>{{ movieStore.movie.Year }}</strong>
        </p>
        <p>
          Plot: <strong> {{ movieStore.movie.Plot }} </strong>
        </p>
        <p>
          Writer: <strong> {{ movieStore.movie.Writer }} </strong>
        </p>
      </div>
      <div class="movie__images">
        <img v-if="movieStore.movie.Poster !== 'N/A'" :src="movieStore.movie.Poster" alt="poster" />
          <el-empty
            v-else
            :image-size="200"
            description="No photo"
          />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  &__content {
    color: $fs-white;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 600px;

    &-title {
      font-size: 30px;
      line-height: 38px;
    }

    strong {
      font-size: 16px;
    }
  }

  &__images {
    max-width: 400px;
    img {
      margin-left: 20px;
      border-radius: 30px;
    }
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
.el-button--primary {
  width: 100px;
}
</style>
