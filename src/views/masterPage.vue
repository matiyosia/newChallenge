<template>
  <v-layout ref="app" class="rounded rounded-md">
    <NavBar />
    <DrawerMenu />
    <v-main>
      <div class="masterPage">
        <router-view />
      </div>
    </v-main>
    <v-footer app name="footer" class="footer">
      <p class="footer" variant="text">COPYRIGTH &copy; 2023 EdMachina</p>
    </v-footer>
  </v-layout>
</template>

<script setup>
import NavBar from "../layout/navbar/NavBar.vue";
import DrawerMenu from "@/layout/sidebar/DrawerMenu.vue";
</script>
