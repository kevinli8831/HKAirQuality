<template>
  <v-app >
    <v-navigation-drawer clipped app >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
            <router-link to="/">Home</router-link> |
            <router-link to="/test">test</router-link>
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

    </v-navigation-drawer>

    <v-app-bar clipped-left
               app
               color="#7CB9B2"
               dark
    >
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-6"

            src="@/assets/airQualityLogo.jpg"
            transition="scale-transition"
            width="100"
        />
        <h2>
          Air Quality Monitor System

        </h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
<!--      <HelloWorld/>-->
    </v-main>

  </v-app>





</template>
<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
main{
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
