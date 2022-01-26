<template>
  <v-app >
    <nav-bar/>
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


    </v-app-bar>
    <v-main>
      <v-container>
      <router-view/>
      </v-container>

      <!--      <HelloWorld/>-->
    </v-main>

  </v-app>





</template>
<script>

import NavBar from "@/components/navBar";
export default {
  name: 'App',

  components: {
    NavBar
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
