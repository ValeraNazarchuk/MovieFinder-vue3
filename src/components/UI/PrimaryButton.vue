<script setup>
const emits = defineEmits(["onClick"]);

const handleClick = () => {
  emits("onClick");
};
</script>

<template>
  <el-button type="primary" @click="handleClick"><slot /></el-button>
</template>

<style lang="scss" scoped></style>
