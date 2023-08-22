<template>
  <div class="container-page">
    <SectionTitle title="Now Playing Movies" link="/movies" />
    <v-row v-if="movies.length">
      <v-col
        cols="12"
        xs="12"
        sm="6"
        md="3"
        v-for="movie in nowPlaying"
        :key="movie.id"
      >
        <MovieCard :movie="movie"></MovieCard>
      </v-col>
    </v-row>
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

    <v-row v-if="movies.length">
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
      const res4 = await $axios.$get("/movie/now_playing?language=vi-VN");
      return {
        movies: res.results.slice(0, 8),
        upcoming: res2.results.slice(0, 8),
        topRated: res3.results.slice(0, 8),
        nowPlaying: res4.results.slice(0, 8),
      };
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style lang="css" scoped>
.container-page{
  max-width: 1200px;
  margin: auto;
}
</style>


