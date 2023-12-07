<script setup>
import { defineProps, defineEmits, reactive } from "vue";

const emits = defineEmits(["update:modelValue"]);

const { modelValue } = defineProps({
  modelValue: String,
  placeholder: {
    type: String,
    default: "Enter text...",
  },
});

const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ]
})
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
