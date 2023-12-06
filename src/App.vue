<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import Header from "@/components/Header/Header.vue";
</script>

<template>
  <Header />
  <MainLayout>
    <router-view />
  </MainLayout>
</template>
