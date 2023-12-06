<script setup>
import { defineProps, defineEmits } from "vue";

const emits = defineEmits(["update:modelValue"]);

const { modelValue } = defineProps({
  modelValue: String,
  placeholder: {
    type: String,
    default: "Enter text...",
  },
});
</script>

<template>
  <el-input
    class="field-input"
    :model-value="modelValue"
    @input="emits('update:modelValue', $event)"
    :placeholder="placeholder"
  />
</template>

<style lang="scss" scoped>
.field-input {
  color: $white;
  &::placeholder {
    color: $white;
  }
}
</style>
