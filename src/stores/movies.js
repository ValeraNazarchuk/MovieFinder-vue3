import axios from "axios";
import { defineStore } from "pinia";

export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    searchMovies: "",
    moviesId: "",


    // Отримання данних в pinia
    // movies: [],
    // loading: false,
  }),
  // actions: {
  //   async getMovies(movie) {
  //     this.loading = true;
  //     try {
  //       const response = await axios.get(
  //         `http://www.omdbapi.com/?s=${movie}&apikey=738daa61`
  //       );
  //       this.movies = response.data.Search;
  //     } catch (error) {
  //       console.error("Error fetching movies:", error);
  //     } finally {
  //       this.loading = false;
  //     }
  //   },
  // },
});
