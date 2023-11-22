<script>
import MainLayout from "@/layouts/MainLayout.vue";
// import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Header from "@/components/Header/Header.vue";

export default {
  components: {
    MainLayout,
  },
};
</script>

<template>
  <Header />
  <MainLayout>
    <router-view />
  </MainLayout>
</template>
