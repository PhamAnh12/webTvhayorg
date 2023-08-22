<template>
  <div >
    <v-toolbar >

      <v-toolbar-title @click="$router.push('/')" style="cursor: pointer">
         <v-icon color="black" size="64px"> mdi-television-classic </v-icon>
          TVHayOrg

      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          text
          link
          v-for="(item, index) in items"
          :key="index"
          :to="item.link"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Movies", link: "/movies" },
        { title: "TV Series", link: "/tvseries" },
        { title: "Actors", link: "/actors" },
      ],
    };
  },
};
</script>

<style lang="css" scoped>

</style>
