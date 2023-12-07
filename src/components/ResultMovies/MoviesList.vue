<script setup>
import { defineProps } from "vue";

const emits = defineEmits(["onWatch"]);

const { list } = defineProps({
  movies: {
    type: Array,
    required: true,
  },
});

const watchMovieClick = (movieId) => {
  emits("onWatch", movieId);
};
</script>

<template>
  <ul class="movies__list">
    <li v-for="movie in movies" :key="movie.imdbID" class="movies__list-item">
      <img class="movies__list-poster" :src="movie.Poster" alt="Poster" />
      <div class="movies__list-content">
        <h4 class="movies__list-title">
          {{ movie.Title }}
        </h4>
        <p class="movies__list-text">
          {{ movie.Year }}
        </p>
      </div>
      <PrimaryButton @onClick="watchMovieClick(movie)">Watch</PrimaryButton>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.movies {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 20px;
    &-item {
      display: flex;
      flex-direction: column;
      max-width: 200px;
      width: 100%;
      color: $white;
      border: 1px solid white;
      border-radius: 20px;
    }
    &-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px;
      height: 100%;
    }
    &-title {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;  
      overflow: hidden;
      margin-bottom: 10px;
    }
    &-poster {
      object-fit: cover;
      width: 100%;
      height: 200px;
      border-radius: 20px 20px 0 0;
    }
    &__btn {
      margin: 0 auto;
    }
  }
}

.el-button--primary {
  margin-top: auto;
  justify-self: center;
  border-radius: 0px 0px 20px 20px;
}
</style>
