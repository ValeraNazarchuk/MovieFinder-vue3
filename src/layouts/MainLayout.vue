<template>
  <div class="layout">
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
.layout {
  display: flex;
  height: 100%;
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
}
</style>
