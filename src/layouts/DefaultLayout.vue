<script>
  import Header from '@/components/Header/Header.vue'
</script>

<template>
  <Header />
  <main class="main">
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
.main {
  background-color: #484747;
  padding: 20px 0;
}
</style>
