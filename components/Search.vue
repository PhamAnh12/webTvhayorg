<template>
  <div>
    <v-text-field
      append-icon="mdi-magnify"
      placeholder="Search movie, tv here"
      single-line
      hide-details
      clearable
      @input="debounceSearch()"
      v-model="searchInput"
    ></v-text-field>
    <v-expand-transition v-if="searching">
      <p>Searching...</p>
    </v-expand-transition>
    <v-expand-transition v-else-if="!results.length && searchInput">
      <p color="warning" warning >No result found</p>
    </v-expand-transition>
    <v-expand-x-transition v-else>
      <v-list color="transparent">
        <v-list-item
          v-for="item in results"
          :key="item.id"
          :to="`/${item.media_type}/${item.id}`"
        >
          <v-list-item-avatar>
            <v-img
              :src="
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
                  : ''
              "
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-if="item.title"> {{ item.title }} </v-list-item-title>
            <v-list-item-title v-if="item.name"> {{ item.name }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-expand-x-transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
      results: [],
      searching: false,
      debounce: null,
    };
  },
  methods: {
    debounceSearch() {
      if (this.debounce) clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.getResults(this.searchInput);
      }, 500);
    },
    async getResults(query) {
      if (!query) {
        this.results = [];
        this.searching = false;
        return false;
      }
      this.searching = true;
      await this.$axios
        .$get(`/search/multi?query=${query}`)
        .then((response) => {
          this.results = response.results.slice(0, 10);
          this.searching = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style></style>
