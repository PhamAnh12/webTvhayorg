<template>

        <v-card  style="cursor: pointer">
          <v-img height="300" :src ="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"></v-img>
          <v-card-title>
            {{ movie.title }}
          </v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0" no-gutters >
              <v-col cols="12" class="d-flex" md="8">
                <v-rating
                :value="movie.vote_average/2"
                half-increments
                length="5"
                color="yellow"
                dense
                readonly
                size="16"
                ></v-rating>
                <span class="grey--text text--lighten-1 text-caption mr-2 mt-1">{{movie.vote_average }}</span>
              </v-col>
            </v-row>
            
          </v-card-text>
        </v-card>


</template>

<script>
export default {
  props:{
    movie:{
      type:Object,
      required:true
    }
  }
}
</script>

<style>

</style>
