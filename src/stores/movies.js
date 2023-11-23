import { defineStore } from "pinia";
// import api from "@/plugins/axios";
import axios from 'axios'
import router from "../router";

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=738daa61";

export const useStore = defineStore({
  id: "main",
  state: () => ({
    movies: [],
  }),
  actions: {
    async fetchMovies() {
      try {
        const response = await axios.get(url);
        this.movies = response.data;
      } catch (error) {
        console.error("ERROR", error);
      }
    },
  },
});