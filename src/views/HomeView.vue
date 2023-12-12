<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
// import { useMovieStore } from "@/stores/movies.js";

// const searchStore = useMovieStore();
const router = useRouter();

const ruleFormRef = ref();
const rules = reactive({
  movieValue: [
    { required: true, message: "Please input name movie", trigger: "blur" },
    { min: 3, message: "The length should be from 3", trigger: "blur" },
  ],
});
const ruleForm = reactive({
  movieValue: "",
});

const searchClick = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      // searchStore.getMovies(ruleForm.movieValue, '1')
      router.push(`/result-movies?search=${ruleForm.movieValue}`);
    } else {
      console.log("error submit!", fields);
    }
  });
};

// const searchClick = async () => {
//   // searchStore.searchMovies = searchMovieValue.value;
//   // router.push(`/result-movies/Search=${searchMovieValue.value}`);
//   // router.push(`/result-movies?search=${searchMovieValue.value}`);
//   // router.push({
//   //   name: 'result-movies',
//   //   params: {
//   //     search: searchMovieValue.value
//   //   }
//   // });
// };
</script>

<template>
  <div class="home">
    <h1 class="home__title">Search movie:</h1>
    <el-form
      ref="ruleFormRef"
      class="home__form"
      :model="ruleForm"
      :rules="rules"
      labelPosition="top"
      status-icon
      @submit.prevent
      @keyup.enter.native="searchClick(ruleFormRef)"
    >
      <el-form-item label="Search Movie" prop="movieValue">
        <FieldInput v-model="ruleForm.movieValue" />
      </el-form-item>
      <el-form-item>
        <PrimaryButton @onClick="searchClick(ruleFormRef)">
          Search
        </PrimaryButton>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.home {
  &__form {
    margin: 0 auto;
    max-width: 500px;
    display: flex;
    flex-direction: column;
  }
  &__title {
    color: $white;
    text-align: center;
    font-size: 30px;
    line-height: 42px;
    margin-bottom: 10px;
  }
}
</style>
