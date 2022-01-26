<template>
  <v-navigation-drawer clipped app >
    <v-list
        nav
        dense
    >
      <v-list-item-group
          v-model="selectedItem"
          color="primary"
      >
        <v-list-item
            @click="navTo(item.router)"
            v-for="(item, i) in items"
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
  data(){
    return{
      selectedItem: 0,
      items: [
        { text: 'Real Time Statistics', icon: 'mdi-history',router:'home' },
        { text: 'ESG', icon: 'mdi-account-multiple' },
        { text: 'test', icon: 'mdi-account-multiple',router:'test' },
      ],
    }
  },
  methods:{
    navTo(x){
      this.$router.push({name:x})
    }
  },
}
</script>

<style scoped>

</style>