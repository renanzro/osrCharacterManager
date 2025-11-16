<template>
  <v-app>
    <AppNavbar />

    <v-main class="bg-background">
      <RouterView />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
  import AppNavbar from './components/AppNavbar.vue';
  import AppFooter from './components/AppFooter.vue';
</script>
