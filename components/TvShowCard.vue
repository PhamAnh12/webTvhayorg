<template>
 <div>
  <v-card style="cursor: pointer" :to="`/tvshow/${tvShow.id}`" nuxt >
    <v-img
      height="300"
      :src="`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`"
    ></v-img>
    <v-card-title>
      {{tvShow.name }}
    </v-card-title>
    <v-card-text>
      <v-row align-item="center" class="mx-0" no-gutters>
        <v-col cols="12" class="d-flex" md="8">
          <v-rating
            :value="tvShow.vote_average / 2"
            half-increments
            length="5"
            color="yellow"
            dense
            readonly
            size="16"
          ></v-rating>
          <span class="grey--text text--lighten-1 text-caption mr-2 mt-1">{{
            tvShow.vote_average
          }}</span>
        </v-col>
      </v-row>
      </v-card-text>
  </v-card>
 </div>
</template>

<script>
export default {
  props:{
    tvShow:{
      Type:Object
    }
  }
}
</script>

<style>

</style>
