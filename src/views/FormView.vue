<script>
import Upload from "@/components/Form/Upload.vue";
export default {
  components: {
    Upload,
  },
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
    sendForm() {
      console.log(`
          Title: ${this.data.title}
          Poster: ${this.data.poster}
          Director: ${this.data.director}
          Year: ${this.data.year}
        `);
      this.data = {
        title: "",
        poster: null,
        director: "",
        year: "",
      };
    },
    handleImageUploaded(url) {
      this.data.poster = url;
    },
  },
};
</script>

<template>
  <form class="form" @submit.prevent>
    <div class="form__inner">
      <h3 class="form__title">Sent movie</h3>
      <div class="form__box">
        <FieldInput v-model="data.title" :placeholder="'Enter Title'" />
        <FieldInput v-model="data.director" :placeholder="'Enter Director'" />
        <FieldInput v-model="data.year" :placeholder="'Enter Year'" />
        <Upload @image-uploaded="handleImageUploaded" />
        <PrimaryButton @click="sendForm"> Send </PrimaryButton>
      </div>
    </div>
  </form>
</template>

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
  .upload-demo {
    display: inline-block;
    margin-right: 20px;
  }
}
</style>
