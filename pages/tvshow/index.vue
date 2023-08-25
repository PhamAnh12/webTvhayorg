<template>
  <div class="container-page">
    <v-container>
    <h2>{{ titleTvShow }}  </h2>
    <div class="text-center my-4">
      <v-btn class="mr-2" value="popular" @click="handleGetBY('popular','Popular TV Shows')">Popular</v-btn>
      <v-btn class="mr-2" value="airing_today" @click="handleGetBY('airing_today',' TV Shows Airing Today')">Airing Today</v-btn>
      <v-btn class="mr-2" value="on_the_air" @click="handleGetBY('on_the_air','Currently Airing TV Shows')">On TV</v-btn>
      <v-btn class="mr-2" value="top_rated" @click="handleGetBY('top_rated','Top Rated TV Shows')">Top Rated</v-btn>

    </div>
    <v-row v-if="$fetchState.pending">
      <v-col cols="12" sm="3" v-for="s in 20" :key="s">
        <v-skeleton-loader type="image, list-item-two-line"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else-if="$fetchState.error">
      <h2 class="error">An error occurred!</h2>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3" v-for="tvShow in tvShows" :key="tvShow.id">
        <TvShowCard :tvShow="tvShow" />
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
      tvShows: [],
      totalResults: 1,
      totalPages: 1,
      currentPage:
        parseInt(this.$route.query.page) > 1
          ? parseInt(this.$route.query.page)
          : 1,
      getById:'popular',
      titleTvShow :'Popular TV Shows'
    };
  },
  async fetch() {
    await this.$axios
      .$get(`/tv/${this.getById}?page=${this.currentPage}`)
      .then((response) => {
        this.tvShows = response.results;
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
    handleGetBY(value,titleTvShow){
       this.getById =  value;
       this.titleTvShow = titleTvShow;
       this.$fetch();
    }
  },
};
</script>

<style>

</style>
