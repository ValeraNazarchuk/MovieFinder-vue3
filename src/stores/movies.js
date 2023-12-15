import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const useMoviesStore = defineStore("moviesStore", () => {
    const loading = ref(false);
    const movies = ref([]);
    const movie = ref({});

    const getListMovies = async (movie, page) => {
        loading.value = true;
        try {
            const response = await axios.get(
                `${BASE_URL}?s=${movie}&page=${page}&${API_KEY}`
            );
            movies.value = response.data.Search;
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            loading.value = false;
        }
    };

    const getDetailedMovie = async (movieId) => {
        loading.value = true;
        try {
            const response = await axios.get(
                `${BASE_URL}?i=${movieId}&${API_KEY}`
            );
            movie.value = response.data;
        } catch (error) {
            console.error("Error fetching movie:", error);
        } finally {
            loading.value = false;
        }
    };

    return {
        loading,
        movies,
        movie,
        getListMovies,
        getDetailedMovie,
    };
});
