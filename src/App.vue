<template>
  <v-app>
    <v-app-bar height="70" clipped-left app color="#7CB9B2" dark class="lg:tw-pl-[60px] lg:tw-pr-[60px] ">

      <!--        <v-btn v-if="$vuetify.breakpoint.mdAndDown" icon class="mr-3">
        <v-icon>mdi-menu </v-icon>
      </v-btn>-->
      <v-img
          alt="Vuetify Logo"
          class="shrink mr-6 tw-cursor-pointer"
          src="@/assets/airQualityLogo.jpg"
          transition="scale-transition"
          width="100"
          @click="$router.push({ name: `home` }).catch(()=>{})"
      />
      <v-toolbar-title v-if="$vuetify.breakpoint.lgAndUp"
                       class="tw-cursor-pointer" @click="$router.push({ name: `home` }).catch(()=>{})"
                       style="text-underline-offset: 8px;">Air Quality
        Monitor System
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="tw-space-x-10 ">

        <span class="tw-cursor-pointer tw-text-xl hover:tw-underline-offset-8 hover:tw-underline"
              style="text-underline-offset: 8px;"
              @click="$router.push({ name: `ESG` }).catch(()=>{})">What is ESG?</span>

      </div>
    </v-app-bar>
    <v-main>
      <v-container class="tw-h-full tw-p-[24px]">
        <router-view/>
      </v-container>

      <!--      <HelloWorld/>-->
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",
  components: {},

  data: () => ({
    showNav: null,
  }),
  methods: {
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
