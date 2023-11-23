<template>
  <div>
    <ul>
      <!-- <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li> -->
      <li>{{ data }}</li>
      <img :src="data.Poster" alt="">
      <p>{{ data.Title }}</p>
      <p>{{ data.Year }}</p>
      <p>{{ data.Released }}</p>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "../stores/movies";
import axios from 'axios'

export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      store.fetchMovies();
    });

    return {
      movies: store.movies,
    };
  },

data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=738daa61'); // замените на ваш конечный путь
        this.data = response.data;
        console.log(this.data.Title);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
        this.data = error
      }
    },
  },
};
</script>
