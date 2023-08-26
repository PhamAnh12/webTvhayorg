<template>
  <div class="container-page">
    <v-container>
    <h2>{{ titleMovie }} Movies</h2>
    <div class="text-center my-4">
      <v-btn class="mr-2" value="popular" @click="handleGetBY('popular','Popular')" >Popular</v-btn>
      <v-btn class="mr-2" value="now_playing" @click="handleGetBY('now_playing','Now Playing')" >Now Playing</v-btn>
      <v-btn class="mr-2" value="upcoming" @click="handleGetBY('upcoming','Upcoming')"  >Upcoming</v-btn>
      <v-btn class="mr-2" value="top_rated" @click="handleGetBY('top_rated','Top Rated')"  >Top Rated</v-btn>

    </div>
    <v-row v-if="$fetchState.pending">
      <v-col cols="12" xs="12"  sm="6" md="3" v-for="s in 20" :key="s">
        <v-skeleton-loader type="image, list-item-two-line"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else-if="$fetchState.error">
      <h2 class="error">An error occurred!</h2>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12"  sm="6" md="3" v-for="movie in movies" :key="movie.id">
        <MovieCard :movie="movie" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="text-center">
          <v-pagination
            :total-visible="10"
            v-model="currentPage"
            :length="totalPages"
            @input="handlePageChange"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
  </div>

</template>

<script >
export default {
  data() {
    return {
      movies: [],
      totalResults: 1,
      totalPages: 1,
      currentPage:
        parseInt(this.$route.query.page) > 1
          ? parseInt(this.$route.query.page)
          : 1,
      getById:'popular',
      titleMovie :'Popular'
    };
  },
  async fetch() {
    await this.$axios
      .$get(`/movie/${this.getById}?page=${this.currentPage}`)
      .then((response) => {
        this.movies = response.results;
        this.totalPages = response.total_pages;
        this.totalResults = response.total_results;
        this.$router.push({ query: { page: this.currentPage } });
      });
  },
  methods: {
    handlePageChange(value) {
      this.currentPage = value;
      this.$fetch();
    },
    handleGetBY(value,titleMovie){
       this.getById =  value;
       this.titleMovie = titleMovie;
       this.$fetch();
    }
  },
};
</script>

<style>

</style>
