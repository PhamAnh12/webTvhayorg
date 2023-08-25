<template>
   <v-app>
    <Navbar />
     <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
     </v-main>

   <Footer />
   <v-overlay dark opacity="0.95" :value="overlay">
   <Search />
    <v-btn v-if="overlay" @click="overlay = false" >Close</v-btn>
   </v-overlay>

   </v-app>
</template>

<script>

export default {

  name: 'DefaultLayout',
  data () {
    return {
      overlay:false,

    }
  },
  created(){
    this.$nuxt.$on('openOverlay',($event)=>(this.overlay =$event))
  },
  watch:{
    $route(to,from){
        this.overlay =false;
    }
  }
}
</script>
