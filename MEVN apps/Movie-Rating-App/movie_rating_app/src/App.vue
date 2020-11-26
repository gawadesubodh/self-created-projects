<template>
  <div id="inspire">
    <v-app>
      <v-navigation-drawer fixed v-model="drawer">
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
      <v-toolbar color="indigo" dark fixed >
        <v-toolbar-title>Home</v-toolbar-title> <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text v-bind:to="{ name: 'AddMovies' }">Add Movie</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-main>
        <v-container fluid>
          <div id="app" style="margin-left: 20%;">
            <router-view />
          </div>
        </v-container>
      </v-main>
      <v-footer color="indigo" >
        <span class="white--text">&copy; 2018</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import "./assets/stylesheets/main.css";
export default { data: () => ({ drawer: null }), props: { source: String } };
</script>


