<template>
  <v-banner sticky shaped tile>
    <v-img :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`"></v-img>
    <v-card-text class="mt-4"   >
      <!-- <v-dialog v-model="dialog" persistent max-width="800">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="pink"
            block
            depressed
            class="white--text"
            v-bind="attrs"
            v-on="on"
            @click="openYoutubeModal"
             v-if="data.videos"
          >
            <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
            Watch trailer
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline"> {{ data.title }}</span>
            <v-spacer></v-spacer>
           <v-icon @click="closeModal" >mdi-close</v-icon>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <div class="iframe-container">
                  <iframe
                    allowfullscreen
                    :src="mediaUrl"
                    v-if="isVideo"
                  ></iframe>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click="closeModal">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog> -->

      <!--HOMEPAGE BUTTON-->
      <v-btn
        color="yellow"
        block
        depressed
        :href="data.homepage"
        target="_blank"
        class="mt-2"
        v-if="data.homepage"
      >
        <v-icon>mdi-home</v-icon>Homepage
      </v-btn>
    </v-card-text>
  </v-banner>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      dialog: false,
      mediaUrl: "",
      isVideo: false,
    };
  },
  methods: {
    getTrailer() {
      if (!this.data.videos || !this.data.videos.results  ) return;
      else {
        const video = this.data.videos.results.find((e) => {
          return e.type === "Trailer";
        });
        return "https://www.youtube.com/embed/" + video.key;
      }
    },
    closeModal() {
      this.dialog = false;
      this.isVideo = false;
    },
    openYoutubeModal() {
      this.mediaUrl = this.getTrailer();
      this.isVideo = true;
    },
  },
};
</script>

<style>
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}
.iframe-container iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
