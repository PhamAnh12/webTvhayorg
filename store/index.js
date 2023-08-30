export const state =() =>({
    genres: [],
});
export const mutations = {
    SET_GENRES(state, genres){
        state.genres =  genres;
    }
}
export const actions = {
    async loadGenres({ state, commit }) {
    try {
      const data = await this.$axios.$get("/genre/movie/list");
      if (data) {
        commit("SET_GENRES", data.genres);
      }
    } catch (error) {
      console.log(error);
    }
  },
}

