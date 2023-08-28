<template>
  <div>
    <v-card style="cursor: pointer" :to="`/tvshow/${tvShow.id}`" nuxt>
      <v-img
        height="300"
        :src="`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`"
      ></v-img>
      <v-card-title>
        {{ tvShow.name }}
      </v-card-title>
      <v-card-text>
        <v-row align-item="center" class="mx-0" no-gutters>
          <v-col cols="12" class="d-flex" md="8">
            <v-rating
              :value="tvShow.vote_average / 2"
              half-increments
              length="5"
              color="yellow"
              dense
              readonly
              size="16"
            ></v-rating>
            <span class="grey--text text--lighten-1 text-caption mr-2 mt-1">{{
              tvShow.vote_average
            }}</span>
          </v-col>
        </v-row>
        <!-- <v-row align-item="center" class="mx-0" no-gutters>
          <v-col cols="12" class="d-flex">
            <span class="grey--text text--lighten-1 text-caption mr-2 mt-1">{{
              convertDate(tvShow.last_air_date)
            }}</span>
          </v-col>
        </v-row> -->
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    tvShow: {
      Type: Object,
    },
  },
  methods: {
    convertDate(date) {
      const dateObj = new Date(date);

      // Lấy ngày, tháng và năm
      const day = dateObj.getDate();
      const month = dateObj.getMonth() + 1; // Tháng bắt đầu từ 0
      const year = dateObj.getFullYear();

      // Định dạng lại thành chuỗi theo định dạng mong muốn
      const formattedDate = `${day}/${month}/${year}`;

      return formattedDate;
    },
  },
};
</script>

<style>
</style>
