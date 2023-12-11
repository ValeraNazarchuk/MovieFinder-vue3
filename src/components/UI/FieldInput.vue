<script setup>
import { defineProps, defineEmits, reactive } from "vue";

const emits = defineEmits(["update:modelValue"]);

const { modelValue } = defineProps({
  modelValue: String | Number,
});
</script>

<template>
  <el-input
    class="field-input"
    :model-value="modelValue"
    @input="emits('update:modelValue', $event)"
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
