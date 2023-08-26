<template>
  <div>
    <div>
      <h4 class="grey--text title">Director</h4>
      <span v-for="(d, i) in getDirector" :key="i">
        {{ d }}
        <span v-if="getDirector.length - 1 != i">, </span>
      </span>
    </div>
    <div class="mt-2">
      <h4 class="grey--text title">Networks</h4>
      <div v-for="(network, i) in data.networks" :key="i"  >
      <img height="30"  :src= "`https://image.tmdb.org/t/p/h30${network.logo_path}`" />
      </div>
    </div>
    <div class="mt-2">
      <h4 class="grey--text title">Start</h4>
      <span v-for="(c, i) in data.credits.cast.slice(0, 4)" :key="i">
        {{ c.name }}
        <span v-if="i != 3">,</span>
      </span>
    </div>
    <div class="mt-2">
      <h4 class="grey--text title">Genres</h4>
      <span v-for="(g, i) in data.genres" :key="i">
        {{ g.name }}
        <span v-if="data.genres.length - 1 != i">,</span>
      </span>
    </div>
    <div class="mt-2">
      <h4 class="grey--text title">Spoken Language</h4>
      <span v-for="(language, i) in data.spoken_languages" :key="i">
        {{ language.name }}
        <span v-if="i != data.spoken_languages.length - 1">,</span>
      </span>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      Type: Object,
    },
  },
  computed: {
    getDirector() {
      let director = [];
      for (const item of this.data.credits.crew) {
        if (item.job === "Director") {
          director.push(item.name);
        }
      }
      return director;
    },
  },
};
</script>

<style>
</style>
