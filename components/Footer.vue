<template>
  <v-footer dark padless>
    <v-card class="flex text-center" flat tile dense>
      <v-card-text class="grey darken-4">
        <strong class="subheading">
          Get connected with us on social network</strong
        >
        <v-btn dark icon v-for="(item, index) in items" :key="index" :href="item.link" target="_blank" >
          <v-icon size="24px">{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="py-2 white-text text-center">
        {{ new Date().getFullYear() }} - <strong>TVHayOrg</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data(){
    return{
      items:[
        {icon:"mdi-youtube" ,link:"https://youtube.com"},
        {icon:"mdi-facebook" ,link:"https://facebook.com"}
      ]
    }
  }
};
</script>

<style>
</style>
