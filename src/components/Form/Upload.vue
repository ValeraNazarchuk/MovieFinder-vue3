<script setup>
import { defineEmits } from "vue";

const emits = defineEmits(["image-uploaded"]);

const handleChange = (file) => {
  const url = URL.createObjectURL(file.raw);

  emits("image-uploaded", url);
};
</script>

<template>
  <el-upload
    class="upload-demo"
    :auto-upload="false"
    :on-change="handleChange"
    :limit="1"
  >
    <template #trigger>
      <el-button type="primary">Select poster</el-button>
    </template>

    <template #tip>
      <div class="el-upload__tip">
        JPG/PNG files with a size less than 500kb
      </div>
    </template>
  </el-upload>
</template>

<style lang="scss" scoped>

.upload-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 0px 20px;
}
</style>
