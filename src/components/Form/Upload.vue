<template>
  <el-upload
    class="upload-demo"
    :auto-upload="false"
    :on-change="handleChange"
    :on-remove="handleRemove"
    :limit="1"
  >
    <template #trigger>
      <el-button type="primary">Select file</el-button>
    </template>

    <template #tip>
      <div class="el-upload__tip">
        JPG/PNG files with a size less than 500kb
      </div>
    </template>
  </el-upload>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    handleChange(file) {
      const url = URL.createObjectURL(file.raw);

      this.$emit("image-uploaded", url);
    },
  },
});
</script>

<style lang="scss"></style>
