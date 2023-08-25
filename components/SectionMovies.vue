<template>
  <v-row>
    <v-col cols="12" xs="12"  sm="6" md="3"    v-for="movie in movies" :key="movie.id">
      <MovieCard :movie="movie"  />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
    },
  },
  data(){
    return{
     
    }
  },

};
</script>

<style></style>
