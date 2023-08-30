<template>
  <div>
    <v-toolbar>
      <v-toolbar-title
        @click="$router.push('/')"
        style="cursor: pointer"
        class="d-flex align-center"
      >
        <v-icon color="white" size="64px"> mdi-television-classic </v-icon>

        <div class="d-flex align-center">TVHayOrg</div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </span>
      <v-toolbar-items class="hidden-xs-only">
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

      <v-avatar
        class="ml-2 mr-2"
        size="36"
        style="cursor: pointer;">
      <v-img    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"></v-img>
    </v-avatar>
    <v-btn icon @click="$nuxt.$emit('openOverlay', true)"
        ><v-icon>mdi-magnify</v-icon></v-btn
      >
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary left>
      <v-list dense nav>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.link"
        >
          <v-list-item-content>
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Movies", link: "/movie" },
        { title: "TV Show", link: "/tv" },
        { title: "Peopel", link: "/people" },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
</style>
