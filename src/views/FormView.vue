<template>
  <form class="form" @submit.prevent>
    <div class="form__inner">
      <h3 class="form__title">Sent movie</h3>
      <div class="form__box">
        <FieldInput v-model="data.title" :placeholder="'Title'" />
        <FieldInput v-model="data.director" :placeholder="'Director'" />
        <FieldInput v-model="data.year" :placeholder="'Year'" />
        <!-- <el-upload
          v-model:file-list="poster"
          class="upload-demo"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          multiple
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :limit="1"
          :on-exceed="handleExceed"
        >
          <el-button type="primary">Click to upload</el-button>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png files with a size less than 500KB.
            </div>
          </template>
        </el-upload> -->
        <PrimaryButton @click="sendForm"> Send </PrimaryButton>
      </div>
    </div>
  </form>
</template>

<script>
import { ElMessage, ElMessageBox } from "element-plus";

// import type { UploadProps, UploadUserFile } from 'element-plus'

export default {
  data() {
    return {
      data: {
        title: "",
        poster: null,
        director: "",
        year: "",
      },
    };
  },
  methods: {
    // handlePreview() {
    //   console.log(this.data.poster);
    // },
    sendForm() {
      console.log(`
          Title: ${this.data.title}
          PosterUrl: ${this.data.poster}
          Director: ${this.data.director}
          Year: ${this.data.year}
        `);
      this.data = {
        title: '',
        poster: null,
        director: '',
        year: ''
      }
    },
  },
};
</script>

<style lang="scss">
.form {
  &__inner {
  }
  &__title {
    color: $white;
    text-align: center;
    font-size: 32px;
    line-height: 46px;
  }
  &__box {
    margin: 0 auto;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
