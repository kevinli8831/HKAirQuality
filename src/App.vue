<template>
  <v-app>
<!--    <nav-bar :show-nav="showNav" @switchNav="switchNav" />-->
    <v-app-bar height="70" clipped-left app color="#7CB9B2" dark>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mdAndDown"
        @click.stop="switchNav()"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <!--        <v-btn v-if="$vuetify.breakpoint.mdAndDown" icon class="mr-3">
          <v-icon>mdi-menu </v-icon>
        </v-btn>-->
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-6"
          src="@/assets/airQualityLogo.jpg"
          transition="scale-transition"
          width="100"
        />
        <h2 v-if="$vuetify.breakpoint.mdAndUp">Air Quality Monitor System</h2>
        <h3 v-else>Air Quality Monitor System</h3>
      </div>
    </v-app-bar>
    <v-main>
      <v-container class="tw-h-full tw-p-[24px]">
        <router-view />
      </v-container>

      <!--      <HelloWorld/>-->
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",
  components: {
  },

  data: () => ({
    showNav: null,
  }),
  methods: {
    switchNav() {
      this.showNav = !this.showNav;
    },
  },
};
</script>
<style lang="scss">
main {
  color: #304455;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
