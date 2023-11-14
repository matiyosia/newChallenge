<template>
    <v-layout ref="app" class="rounded rounded-md">
      <NavBar/>
    <Sidebar/>
    <v-main >
        <div class="masterPage">
            <router-view />
        </div>
    </v-main>
    <v-footer
      app
      name="footer"
      style="background-color: rgb(238, 238, 238);"
    >
      <p
        class="footer"
        variant="text"
      >
        COPYRIGTH &copy; 2023 EdMachina
      </p>
    </v-footer>
   </v-layout>
</template>
  
<script setup>
import Sidebar from '../layout/sidebar/Sidebar.vue'
import NavBar from '../layout/navbar/NavBar.vue'
  
  </script>
  