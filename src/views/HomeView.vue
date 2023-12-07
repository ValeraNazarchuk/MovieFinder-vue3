<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { useSearchStore } from "@/stores/movies.js";

const searchStore = useSearchStore();
const router = useRouter()
const route = useRoute()

const searchMovieValue = ref("");

const searchClick = () => {
  // searchStore.searchMovies = searchMovieValue.value;
  // router.push(`/result-movies/Search=${searchMovieValue.value}`);
  router.push(`/result-movies?search=${searchMovieValue.value}`);
  // router.push({
  //   name: 'result-movies',
  //   params: {
  //     search: searchMovieValue.value
  //   }
  // });
};
</script>

<template>
  <div class="home">
    <h1 class="home__title">Search movie:</h1>
    <div class="home__search-box">
      <FieldInput v-model="searchMovieValue" :placeholder="'Search'" />
      <PrimaryButton @onClick="searchClick"> Search </PrimaryButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &__title {
    color: $white;
    text-align: center;
    font-size: 30px;
    line-height: 42px;
    margin-bottom: 10px;
  }
  &__search-box {
    margin: 0 auto;
    display: flex;
    align-items: center;
    max-width: 500px;
    &-input {
      width: 100%;
    }
  }
}
</style>
