<template>
  <div v-if="loadingFullWindow" class="loader-container">
    <Loader />
  </div>
  <div v-else class="movie">
    <div class="movie__inner">
      <div class="movie__content">
        <PrimaryButton @onClick="$router.push('/result-movies')"
          >Back</PrimaryButton
        >
        <h3 class="movie__content-title">{{ movie.Title }}</h3>
        <p>
          IMDb: <strong>{{ movie.imdbRating }}</strong>
        </p>
        <p>
          Year: <strong>{{ movie.Year }}</strong>
        </p>
        <p>
          Plot: <strong> {{ movie.Plot }} </strong>
        </p>
        <p>
          Writer: <strong> {{ movie.Writer }} </strong>
        </p>
      </div>
      <div class="movie__images">
        <img :src="movie.Poster" alt="poster" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useSearchStore } from "../stores/movies";

const searchStore = useSearchStore();

export default {
  data() {
    return {
      movie: {},
      loadingFullWindow: false,
    };
  },
  methods: {
    async getMovies(movie) {
      this.loadingFullWindow = true;
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${movie}&apikey=738daa61`
        );
        this.movie = response.data;
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        this.loadingFullWindow = false;
      }
    },
  },
  mounted() {
    this.getMovies(searchStore.moviesId);
  },
};
</script>

<style lang="scss" scoped>
.movie {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  &__content {
    color: $white;
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
