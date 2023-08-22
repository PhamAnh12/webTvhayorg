<template>
  <v-toolbar outlined short flat class="my-4">
    <v-toolbar-title> {{ title }} </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text color="green" :to="link"
      >See more
      <v-icon right>mdi-chevron-double-right</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>

<style></style>
