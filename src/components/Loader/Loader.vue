<template>
  <div class="loader-container">
    <span class="loader"></span>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loader",
});
</script>

<style lang="scss">
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.loader {
  width: 68px;
  height: 68px;
  border: 5px solid #409eff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
