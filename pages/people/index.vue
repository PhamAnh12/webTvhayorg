<template>
   <div class="container-page">
    <v-container>
    <h2 class="mb-4"> Popular People </h2>

    <v-row v-if="$fetchState.pending">
      <v-col cols="12" xs="12"  sm="6" md="3" v-for="s in 20" :key="s">
        <v-skeleton-loader type="image, list-item-two-line"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else-if="$fetchState.error">
      <h2 class="error">An error occurred!</h2>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12"  sm="6" md="3" v-for=" people in peoples" :key="people.id">
        <PeopleCard :people=" people" />
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

<script>
export default {
  data() {
    return {
      peoples: [],
      totalResults: 1,
      totalPages: 1,
      currentPage:
        parseInt(this.$route.query.page) > 1
          ? parseInt(this.$route.query.page)
          : 1,

    };
  },
  async fetch() {
    await this.$axios
      .$get(`/person/popular?page=${this.currentPage}`)
      .then((response) => {
        this.peoples = response.results;
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

  },
}
</script>

<style>

</style>
