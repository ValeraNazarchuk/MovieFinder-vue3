<template>
  <span class="loader"></span>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loader",
});
</script>

<style lang="scss">
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
