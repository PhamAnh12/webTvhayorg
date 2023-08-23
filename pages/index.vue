<template>
  <div class="container-page">
    <!--
    -->
    <v-carousel>
    <v-carousel-item
      v-for="(item,i) in  nowPlaying"
      :key="i"

      reverse-transition="fade-transition"
      transition="fade-transition"

    >
    <v-card>

    <v-img cover :src="`https://image.tmdb.org/t/p/original/${item.poster_path}`" height="600" ></v-img>
       <v-card-title >{{item.title}}</v-card-title>

    </v-card>
    </v-carousel-item>
  </v-carousel>
    <SectionTitle title="Popular Movies" link="/movies" />

    <v-row v-if="movies.length">
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="3"
        v-for="movie in movies"
        :key="movie.id"
      >
        <MovieCard :movie="movie"></MovieCard>
      </v-col>
    </v-row>
    <SectionTitle title="Upcoming Movies " link="/movies" />

    <v-row v-if="movies.length">
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="3"
        v-for="movie in upcoming"
        :key="movie.id"
      >
        <MovieCard :movie="movie"></MovieCard>
      </v-col>
    </v-row>
    <SectionTitle title="TopRated Movies " link="/movies" />

    <v-row v-if="topRated.length">
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="3"
        v-for="movie in topRated"
        :key="movie.id"
      >
        <MovieCard :movie="movie"></MovieCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const res = await $axios.$get("/movie/popular?language=vi-VN");
      const res2 = await $axios.$get("/movie/upcoming?language=vi-VN");
      const res3 = await $axios.$get("/movie/top_rated?language=vi-VN");
      const res4 = await $axios.$get("/movie/now_playing");
      return {
        movies: res.results.slice(0, 8),
        upcoming: res2.results.slice(0, 8),
        topRated: res3.results.slice(0, 8),
        nowPlaying: res4.results.slice(0, 10),
      };
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style lang="css" scoped>
.container-page {
  max-width: 1200px;
  margin: auto;
}
</style>


