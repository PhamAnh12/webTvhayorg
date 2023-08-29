<template>
  <div id="slide-header">
    <v-window show-arrows >
      <template v-slot:prev="{ on, attrs }">
        <v-btn fab small v-bind="attrs" v-on="on">
          <v-icon> mdi-chevron-left</v-icon>
        </v-btn>
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn fab small v-bind="attrs" v-on="on">
          <v-icon> mdi-chevron-right</v-icon></v-btn
        >
      </template>
      <v-window-item v-for="(item, index) in movies" :key="index">
        <v-card height="400" class="d-flex justify-center align-center">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="12" sm="3">
              <v-card   :to="`/movie/${item.id}`" nuxt>
                <v-img
                :src="`https://image.tmdb.org/t/p/w500/${item.poster_path}`"
              ></v-img>
              </v-card>

            </v-col>
            <v-col cols="12" sm="7" class="ml-6 hidden-xs-only">
              <strong
                class="white--text display-2 text-center font-weight-bold"
              >
                {{ item.title }}
              </strong>
             <h3> {{ item.release_date.slice(0,4) }} </h3>
              <Rating :data="item" />
              <strong
                class="white--text display-2 text-center"
                v-if="item.overview"
              >
                Overview
              </strong>
              <p class="white--text" v-if="item.overview">
                {{ item.overview }}
              </p>
              <v-btn
                color="pink"
                class="white--text"
                rounded
                :to="`/movie/${item.id}`"
                >More detail</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
export default {
  props: {
    movies: {
      Type: Array,
    },
  },
};
</script>

<style >
#slide-header {
  background: rgb(72, 72, 72);
  background: linear-gradient(
    106deg,
    rgba(72, 72, 72, 1) 10%,
    rgba(91, 85, 85, 1) 60%
  );
}
</style>
