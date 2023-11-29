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
      <PrimaryButton @onClick="watchMovie(movie)">Watch</PrimaryButton>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MoviesList",
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
  methods: {
    watchMovie(movieId) {
      this.$emit("onWatch", movieId);
    },
  },
};
</script>

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
