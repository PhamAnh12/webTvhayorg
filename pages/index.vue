<template>
  <div class="container-page">
    <!--
    -->
    <Silde :movies ="nowPlaying"></Silde>

    <SectionTitle title="Popular Movies" link="/movies" />
    <SectionMovies v-if="movies.length" :movies="movies" />
    <SectionTitle title="Upcoming Movies" link="/movies" />
    <SectionMovies v-if="upcoming.length" :movies="upcoming" />
    <SectionTitle title="Top Rated" link="/movies" />
    <SectionMovies v-if="topRated.length" :movies="topRated" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const res = await $axios.$get("/movie/popular");
      const res2 = await $axios.$get("/movie/upcoming");
      const res3 = await $axios.$get("/movie/top_rated");
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
#slide-header {
  background: rgb(72, 72, 72);
  background: linear-gradient(
    106deg,
    rgba(72, 72, 72, 1) 10%,
    rgba(91, 85, 85, 1) 60%
  );
}
</style>


