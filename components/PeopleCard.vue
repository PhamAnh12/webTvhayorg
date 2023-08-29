<template>
  <div>
    <v-card style="cursor: pointer" :to="`/people/${people.id}`" nuxt>
      <v-img
        height="300"
        :src="`https://image.tmdb.org/t/p/w500${people.profile_path}`"
      ></v-img>
      <v-card-title>
        {{ people.name }}
      </v-card-title>
      <v-card-text>
        <v-row align-item="center" >
          <span class="grey--text text--lighten-1 text-caption mr-2 " v-for="(knownFor, index) in  people.known_for.slice(0,4) " :key =index >{{
            knownFor.original_title
            }}
           <span v-if="index  != 2 &&  knownFor.original_title ">,</span>
            </span>

        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    people: {
      Type: Object,
    },
  },
};
</script>

<style>
</style>
