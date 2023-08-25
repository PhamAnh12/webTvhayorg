<template>
  <v-card style="cursor: pointer" :to="`/movie/${movie.id}`" nuxt>
    <v-img
      height="300"
      :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
    ></v-img>
    <v-card-title>
      {{ movie.title }}
    </v-card-title>
    <v-card-text>
      <v-row align-item="center" class="mx-0" no-gutters>
        <v-col cols="12" class="d-flex" md="8">
          <v-rating
            :value="movie.vote_average / 2"
            half-increments
            length="5"
            color="yellow"
            dense
            readonly
            size="16"
          ></v-rating>
          <span class="grey--text text--lighten-1 text-caption mr-2 mt-1">{{
            movie.vote_average
          }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-chip
            v-for="genre in movie.genre_ids"
            :key="genre"
            label
            small
            color="pink"
            class="white--text mr-1 md-sm-2 mt-1"
          >
        {{  genreTypeName(genre) }}
        </v-chip>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data(){
    return{
      genres:[]
    }
  },
  methods: {
    genreTypeName(genId){
        for(const item of this.genres){
          if(item.id  == genId){
            return item.name
          }
        }
    }
  },
  async fetch(){
    await this.$axios.$get('/genre/movie/list')
    .then(response =>{
      this.genres = response.genres;
    })
    .catch(e =>{
      console.log(e);
    })
  }
};
</script>

<style>
</style>
