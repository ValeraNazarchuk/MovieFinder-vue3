<template>
  <el-button type="primary" @click="handleClick"><slot /></el-button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PrimaryButton",
  methods: {
    handleClick() {
      this.$emit("onClick");
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
