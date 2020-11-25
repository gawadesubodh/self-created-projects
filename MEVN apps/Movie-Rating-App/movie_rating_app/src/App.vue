<template>
  <div id="inspire">
    <v-app>
      <v-navigation-drawer fixed v-model="drawer" app>
        <v-list dense>
          <router-link v-bind:to="{ name: 'Home' }" class="side_bar_link">
            <v-list-item>
              <v-list-item-action>
                <v-icon>home</v-icon>
              </v-list-item-action>
              <v-list-item-content>Home</v-list-item-content>
            </v-list-item>
          </router-link>
          <router-link v-bind:to="{ name: 'Contact' }" class="side_bar_link">
            <v-list-item>
              <v-list-item-action>
                <v-icon>contact_mail</v-icon>
              </v-list-item-action>
              <v-list-item-content>Contact</v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-title>Home</v-toolbar-title> <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text v-bind:to="{ name: 'AddMovies' }">Add Movie</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <div id="app">
            <router-view />
          </div>
        </v-container>
      </v-content>
      <v-footer color="indigo" app>
        <span class="white--text">&copy; 2018</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import "./assets/stylesheets/home.css";
export default { data: () => ({ drawer: null }), props: { source: String } };
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#inspire {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.container.fill-height {
  align-items: normal;
}

a.side_bar_link {
  text-decoration: none;
}
</style>
