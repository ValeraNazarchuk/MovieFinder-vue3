<template>
  <div class="home">
    <h1 class="home__title">Search movie:</h1>
    <div class="home__search-box">
      <el-input
        v-model="searchMovie"
        class="home__search-input"
        placeholder="Search"
      >
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
      <el-button type="primary" @click="searchClick"
        >Search</el-button
      >
    </div>
    <ul v-if="data.length !== 0" class="movies__list">
      <li v-for="movie in data" :key="movie.imdbID" class="movies__list-item">
        <img class="movies__list-poster" :src="movie.Poster" alt="">
        <h4 class="movies__list-title">
          {{ movie.Title }}
        </h4>
        <p class="movies__list-text">
          {{ movie.Year }}
        </p>
      </li>
    </ul>
    <div v-else>
      <span class="loader"></span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useSearchStore } from '../stores/movies'

export default {
  data() {
    return {
      loading: false,
      searchMovie: '',
      data: [],
      svg: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
    };
  },
  methods: {
    async fetchData(movie) {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=738daa61`); // замените на ваш конечный путь
        this.data = response.data.Search;
        this.searchMovie = ''
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    },
    searchClick() {
      // this.$router.push('/movies');
      // this.searchStore.getMovies(searchMovie)
      this.fetchData(this.searchMovie)
      this.searchMovie = ''
    }
  }
};
</script>

<style lang="scss">
.home {
  margin: auto 0;
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

.movies {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 20px;
    &-item{
      display: block;
      max-width: 150px;
      // width: 100%;
      color: $white;
    }
    &-title {
      font-size: 18px;
      line-height: 24px;
      margin: 8px 0;
    }
    &-poster {
      // max-width: 100px;
      width: 100%;
      border-radius: 20px;
    }
  }
}

.loader {
    width: 68px;
    height: 68px;
    border: 5px solid #409eff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
</style>
