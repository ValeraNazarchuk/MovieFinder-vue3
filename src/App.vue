<script>
import MainLayout from "@/layouts/MainLayout.vue";
import Header from "@/components/Header/Header.vue";

export default {
  components: {
    MainLayout,
    Header,
  },
};
</script>

<template>
  <Header />
  <MainLayout>
    <router-view />
  </MainLayout>
</template>
