<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FieldInput",
  props: {
    placeholder: {
      type: String,
      default: "Enter text...",
    },
  },
  computed: {
    internalValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
});
</script>

<template>
  <el-input
    class="field-input"
    v-model="internalValue"
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
