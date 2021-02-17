<template lang="">
  <div>
    <h1 class="text-center text-muted">Buscador con Vuex</h1>
    <SearchForm />
    <hr />
    <MovieList></MovieList>
  </div>
</template>
<script>
import SearchForm from "./SearchForm";
import MovieList from "./MovieList";
export default {
  components: {
    SearchForm,
    MovieList,
  },
};
</script>
<style lang=""></style>
