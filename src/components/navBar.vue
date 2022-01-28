<template>
  <v-navigation-drawer
    clipped
    app
    :value="showNav"
    v-click-outside="hideDrawer"
  >
    <v-list nav dense>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          @click="navTo(item.router)"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "navBar",
  props: {
    showNav: {
      type: Boolean,
      default: null,
    },
  },
  data() {
    return {
      selectedItem: 0,
      items: [
        { text: "Real Time Statistics", icon: "mdi-history", router: "home" },
        { text: "ESG", icon: "mdi-account-multiple", router: "ESG" },
        { text: "test", icon: "mdi-account-multiple", router: "test" },
      ],
    };
  },
  methods: {
    hideDrawer(e) {
      if (e.target.className === "v-overlay__scrim") {
        this.$emit("switchNav");
      }
    },
    test() {
      console.log("test");
    },
    navTo(x) {
      if (!this.$vuetify.breakpoint.lgAndUp) this.$emit("switchNav");
      this.$router.push({ name: x });
    },
  },
};
</script>

<style scoped></style>
