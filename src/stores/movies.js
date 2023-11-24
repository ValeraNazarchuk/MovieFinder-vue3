import axios from 'axios'
import router from "../router";
import { defineStore } from "pinia";

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=738daa61";

export const useSearchStore = defineStore({
  id: "main",
  state: () => ({
    movies: [],
  }),
  actions: {
    async getMovies(movie) {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${movie}&apikey=738daa61`
        );
        this.movies = response.data.Search;
      } catch (error) {
        console.error("ERROR", error);
      }
    },
  },
});