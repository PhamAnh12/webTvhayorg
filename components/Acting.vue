<template>
  <div>
    <v-timeline>
      <v-timeline-item v-for="(item, i) in getTimeLine" :key="i" small>
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold pink--text`"
            v-text="item.year"
          ></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-bold mb-4 pink--text`">
            {{ item.typeMedia }}
          </h2>
          <div>
            {{ item.name }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      Type: Array,
    },
  },

  data() {
    return {};
  },
  computed: {
    getTimeLine() {
      let timeLines = [];
      for (let item of this.data) {
        let timeLine = {};
        if (item.media_type == "movie") {
          timeLine.name = item.title;
          timeLine.year = item.release_date.slice(0, 4);
          timeLine.typeMedia = "Movie";
        } else if (item.media_type == "tv") {
          timeLine.name = item.name;
          timeLine.year = item.first_air_date.slice(0, 4);
          timeLine.typeMedia = "TV Show";
        }
        timeLines.push(timeLine);
      }
      timeLines.sort((a, b) => b.year - a.year);
      return timeLines;
    },
  },
};
</script>

<style>
</style>
