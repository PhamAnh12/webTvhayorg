<template>
   <v-container>
    <v-row>
      <v-col  cols="12" sm="3">
        <LeftMovieInfo :data=data />
      </v-col>
      <v-col cols="12" sm="9">
          <div class="d-md-flex align-center">
            <h2 class="display-1 font-weight-bold">
              {{data.title}}
            </h2>
            <span class="display-1 ml-2 grey--text font-weight-light">
              {{data.release_date.slice(0,4)}}
            </span>
            <v-spacer></v-spacer>
            <Rating :data = data />
          </div>
          <SocialShare />
          <v-divider class="mt-8"></v-divider>
          <v-row class="mt-2">
            <v-col cols="12" sm="8">
              <h4 class="pink--text font-weight-bold title"> Overview</h4>
              <p class="grey--text-darken">
                {{dataVn.overview}}
              </p>
               <h4 class="pink--text font-weight-bold title" >Images</h4>
               <v-slide-group multiple show-arrows>
                <v-slide-item v-for="(image,index) in data.images.backdrops" :key="index" v-slot="{ toggle }">
                  <v-card @click="toggle" class="ma-4">
                    <v-img cover width="120" height="160" :src="`https://image.tmdb.org/t/p/w300${image.file_path}`" ></v-img>
                  </v-card>
                </v-slide-item>
               </v-slide-group>
            </v-col>
          </v-row>
      </v-col>
    </v-row>

   </v-container>
</template>

<script>
export default {
 async asyncData({params, $axios}){
       try{
        const res = await $axios.$get(`/movie/${params.id}?append_to_response=credits,videos,images`);
        const resVn = await $axios.$get(`/movie/${params.id}?language=vi-VN`)
         return{
          data: res,
          dataVn:resVn,
         }
       }catch(e){
       console.log(e)
       }
  }
}
</script>

<style>

</style>
