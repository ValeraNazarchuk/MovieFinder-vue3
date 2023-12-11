<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
</script>

<template>
  <DefaultLayout/>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>
