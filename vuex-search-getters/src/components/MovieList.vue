<template lang="">
  <div class="row" v-if="movies.length > 0">
    <Movie :movie="movie" v-for="movie in movies" :key="movie.id"></Movie>
  </div>
  <div v-else="" class="alert alert-danger">
    No hay peliculas disponibles
  </div>
</template>
<script>
import Movie from "./MovieItem";
import { mapGetters } from "vuex";

export default {
  components: {
    Movie,
  },
  computed: {
    ...mapGetters({
      movies: "filteredMovies",
    }),
  },
};
</script>
<style lang=""></style>
