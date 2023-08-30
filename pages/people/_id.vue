<template>
  <div class="container-page">
    <v-container>
      <v-row>
        <v-col cols="12" sm="3">
          <LeftPeopleInfo :data="data"></LeftPeopleInfo>
        </v-col>
        <v-col cols="12" sm="9">
          <h1>{{ data.name }}</h1>
          <h2 class="mt-4 pink--text">Biography</h2>
          <span
            >{{ data.biography.split(".")[0] }} .
            <p
              text
              class="text-decoration-underline"
              style="cursor: pointer"
              @click="dialog = true"
            >
              See more
            </p>
          </span>
          <v-dialog v-model="dialog" width="800">
            <v-card>
              <v-card-title class="text-h5 pink--text">
                Biography {{ data.name }}
              </v-card-title>

              <v-card-text class="mt-2">
                {{ data.biography }}
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <h2 class="mt-4 pink--text">Images</h2>
          <v-row>
            <v-slide-group multiple show-arrows>
              <v-slide-item
                v-for="(image, index) in data.images.profiles"
                :key="index"
                v-slot="{ toggle }"
              >
                <v-card @click="toggle" class="ma-4">
                  <v-img
                    cover
                    width="120"
                    height="160"
                    :src="`https://image.tmdb.org/t/p/w300${image.file_path}`"
                  ></v-img>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-row>
          <h2 class="mt-4 pink--text">Known For</h2>
          <v-row class="mt-2 mb-4">
            <v-slide-group multiple show-arrows>
              <v-slide-item
                v-for="(combinedCredit, index) in data.combined_credits.cast"
                :key="index"
                v-slot="{ toggle }"
              >
                <v-card
                  width="160"
                  @click="toggle"
                  class="ma-4"
                  :to="`/${combinedCredit.media_type}/${combinedCredit.id}`"
                  nuxt
                >
                  <v-img
                    cover
                    width="160"
                    height="160"
                    :src="`https://image.tmdb.org/t/p/w300${combinedCredit.poster_path}`"
                  ></v-img>
                  <v-card-text
                    class="text-center mt-2"
                    v-if="combinedCredit.media_type == 'movie'"
                    >{{ combinedCredit.title }}</v-card-text
                  >
                  <v-card-text
                    class="text-center mt-2"
                    v-if="combinedCredit.media_type == 'tv'"
                    >{{ combinedCredit.name }}</v-card-text
                  >
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-row>
          <h2 class="mt-4 pink--text">Acting</h2>
          <Acting :data="data.combined_credits.cast"></Acting>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    try {
      const res = await $axios.$get(
        `/person/${params.id}?append_to_response=combined_credits,images`
      );

      return {
        data: res,
      };
    } catch (e) {
      console.log(e);
    }
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {},
};
</script>

<style scoped lang="css">
</style>
