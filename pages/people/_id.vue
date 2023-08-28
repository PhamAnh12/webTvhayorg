<template>
  <div class="container-page">
    <v-container>
    <v-row>
      <v-col cols="12" sm="3">
         <LeftPeopleInfo :data =data></LeftPeopleInfo>
      </v-col>
      <v-col cols="12" sm="9">
     <h1>{{  data.name}}</h1>
    <h2 class="mt-4">Biography</h2>
    <span>{{ data.biography.split(".")[0] }} . <p text class="text-decoration-underline" style="cursor: pointer;">See more</p> </span>
    <h2 class="mt-4">Images</h2>
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
    <h2 class="mt-4">Known For</h2>
    <v-row class="mt-2 mb-4">
            <v-slide-group multiple show-arrows>
              <v-slide-item
              v-for="combinedCredit in data.combined_credits.cast"
              :key="combinedCredit.id"
                v-slot="{ toggle }"
              >
                <v-card @click="toggle" class="ma-4" :to="`/${combinedCredit.media_type}/${combinedCredit.id}`" nuxt>
                  <v-img
                    cover
                    width="160"
                    height="160"
                    :src="`https://image.tmdb.org/t/p/w300${combinedCredit.poster_path}`"
                  ></v-img>
                  <p class="text-center mt-2">{{ combinedCredit.title }}</p>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-row>
          <h2 class="mt-4">Acting</h2>
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
  data(){

  },
  methods: {

  },
};
</script>

<style scoped lang="css">

</style>
