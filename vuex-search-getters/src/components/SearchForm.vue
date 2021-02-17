<template lang="">
  <div class="row">
    <div class="col">
      <div class="form-group mb-2">
        <label class="sr-only">Escribe tu busqueda</label>
        <input type="text" v-model="search" class="form-control" />
      </div>
      <div class="form-check form-check-inline">
        <input
          type="radio"
          :value="true"
          v-model="available"
          class="form-radio-input"
        />
        Disponible
      </div>
      <div class="form-check form-check-inline">
        <input
          type="radio"
          :value="false"
          v-model="available"
          class="form-radio-input"
        />
        No disponible
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    search: {
      get() {
        return this.$store.state.filter.query;
      },
      set(val) {
        this.$store.commit("SET_QUERY", val);
      },
    },
    available: {
      get() {
        return this.$store.state.filter.available;
      },
      set() {
        this.$store.commit("SET_AVAILABLE");
      },
    },
  },
};
</script>
<style lang=""></style>
