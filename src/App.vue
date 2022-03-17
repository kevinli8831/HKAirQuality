<template>
  <v-app>
    <v-app-bar
      height="70"
      clipped-left
      app
      color="#7CB9B2"
      dark
      class="lg:tw-pl-[60px] lg:tw-pr-[60px] tw-relative"
    >
      <!--      <v-btn v-if="$vuetify.breakpoint.mdAndDown" icon class="mr-3">
        <v-icon>mdi-menu </v-icon>
      </v-btn>-->
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-6 tw-cursor-pointer"
        src="@/assets/airQualityLogo.jpg"
        transition="scale-transition"
        width="100"
        @click="$router.push({ name: `home` }).catch(() => {})"
      />

      <v-toolbar-title
        v-if="$vuetify.breakpoint.lgAndUp"
        class="tw-cursor-pointer tw-mr-20 tw-text-3xl"
        @click="$router.push({ name: `home` }).catch(() => {})"
        style="text-underline-offset: 8px"
        >Air Quality Monitor System
      </v-toolbar-title>

      <span
        class="tw-cursor-pointer tw-text-xl hover:tw-underline-offset-8 hover:tw-underline mr-5"
        style="text-underline-offset: 8px"
        @click="$router.push({ name: `Google` }).catch(() => {})"
        >Google Map</span
      >

      <span
        class="tw-cursor-pointer tw-text-xl hover:tw-underline-offset-8 hover:tw-underline"
        style="text-underline-offset: 8px"
        @click="$router.push({ name: `ESG` }).catch(() => {})"
        >What is ESG?</span
      >

      <v-spacer></v-spacer>

      <div>
        <v-btn
          large
          icon
          @click="showWeather = !showWeather"
          :color="showWeather ? `yellow` : ``"
        >
          <v-icon> thunderstorm </v-icon>
        </v-btn>
        <span class="tw-text-lg"> {{ currentWeather.meanTemperature }}°C </span>
      </div>
      <!--      <v-fade-transition>      </v-fade-transition>-->
      <transition name="slide-fade">
        <WeatherCard
          class="tw-absolute tw-top-[70px] tw-right-0"
          v-if="showWeather"
          :weather="currentWeather"
        />
      </transition>
    </v-app-bar>

    <v-main>
      <v-container class="tw-h-full tw-p-[24px]">
        <v-overlay :value="dialog">
          <v-dialog v-model="dialog" hide-overlay persistent width="300">
            <v-card color="#7CB9B2" dark>
              <v-card-text>
                Loading Please Wait!
                <v-progress-linear
                  indeterminate
                  color="white"
                  class="mb-0"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-overlay>

        <transition name="fade">
          <router-view />
        </transition>
      </v-container>

      <!--      <HelloWorld/>-->
    </v-main>
  </v-app>
</template>
<script>
import { delay } from "lodash";
import WeatherCard from "./components/WeatherCard";
import { getCurrentWeather } from "./api/api";
export default {
  name: "App",
  components: { WeatherCard },

  data: () => ({
    dialog: true,
    showWeather: false,
    currentWeather: {},
  }),
  async beforeMount() {
    this.currentWeather = await getCurrentWeather();

    delay(() => {
      this.dialog = false;
    }, 2500);
  },
  methods: { delay },
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-70px);
  opacity: 0;
}
</style>
