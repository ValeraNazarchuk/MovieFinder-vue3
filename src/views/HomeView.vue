<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

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
            router.push(`/result-movies?search=${ruleForm.movieValue}&page=1`);
        } else {
            console.log("error submit!", fields);
        }
    });
};
</script>

<template>
    <div class="home">
        <h1 class="home__title">Search movie:</h1>
        <el-form
            ref="ruleFormRef"
            class="home__form"
            :model="ruleForm"
            :rules="rules"
            label-position="top"
            status-icon
            @submit.prevent
            @keyup.enter="searchClick(ruleFormRef)"
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
        color: $fs-white;
        text-align: center;
        font-size: 30px;
        line-height: 42px;
        margin-bottom: 10px;
    }
}
</style>
