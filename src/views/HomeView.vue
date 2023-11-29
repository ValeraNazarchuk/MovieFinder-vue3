<template>
  <div class="home">
    <h1 class="home__title">Search movie:</h1>
    <div class="home__search-box">
      <el-input
        v-model="searchMovieValue"
        class="home__search-input"
        placeholder="Search"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
      <PrimaryButton @onClick="searchClick"> Search </PrimaryButton>
    </div>
  </div>
</template>

<script>
import { useSearchStore } from "../stores/movies.js";

const searchStore = useSearchStore();

export default {
  data() {
    return {
      searchMovieValue: "",
    };
  },
  methods: {
    searchClick() {
      searchStore.searchMovies = this.searchMovieValue;
      this.$router.push("/result-movies");
      this.searchMovieValue = "";
    },
  },
};
</script>

<style lang="scss">
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
