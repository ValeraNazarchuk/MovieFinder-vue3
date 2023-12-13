<script setup>
import { defineProps } from "vue";
import MovieInfo from './MovieInfo.vue'

const emits = defineEmits(["onWatch", "updateIndex"]);

const { list } = defineProps({
  movies: {
    type: Array,
    required: true,
  },
});

const handleCarouselChange = (carouselIndex) => {
  emits("updateIndex", carouselIndex);
};

const watchMovieClick = (movieId) => {
  emits("onWatch", movieId);
};
</script>

<template>
  <el-carousel
    class="carousel"
    arrow="always"
    @change="handleCarouselChange"
    :interval="5000"
    type="card"
    height="500px"
  >
    <el-carousel-item
      class="carousel__item"
      v-for="movie in movies"
      :key="movie"
    >
    <MovieInfo :movie="movie" />
      <!-- <img
        v-if="movie.Poster !== 'N/A'"
        class="carousel__poster"
        :src="movie.Poster"
        alt="Poster"
      />
      <el-empty
        v-else
        image-size="200"
        class="carousel__poster"
        description="No photo"
      />
      <div class="carousel__content">
        <h4 class="carousel__title">
          {{ movie.Title }}
        </h4>
        <p class="carousel__text">
          {{ movie.Year }}
        </p>
      </div> -->
      <PrimaryButton @onClick="watchMovieClick(movie)">Watch</PrimaryButton> 
    </el-carousel-item>
  </el-carousel>
</template>

<style lang="scss" scoped>
.carousel {
  font-size: 20px;
  line-height: 26px;
  &__item {
    display: flex;
    flex-direction: column;
    color: $fs-white;
    border: 1px solid $border-white;
    background-color: $bg-gray;
    border-radius: 20px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    height: 100%;
  }
  &__title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 10px;
  }
  &__poster {
    object-fit: cover;
    width: 100%;
    height: 70%;
    border-radius: 20px 20px 0 0;
  }
  &__btn {
    margin: 0 auto;
  }
}

.el-button--primary {
  margin-top: auto;
  justify-self: center;
  border-radius: 0px 0px 20px 20px;
}
</style>
