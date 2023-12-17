<script setup>
import { ref, reactive } from "vue";

const showUpload = ref(true);

const data = reactive({
    title: "",
    poster: null,
    director: "",
    year: "",
});

const validateYear = (rule, value, callback) => {
    const valueLength = value.toString().split("").length;
    if (!value) {
        return callback(new Error("Please input the Year"));
    }
    if (!Number.isInteger(value)) {
        callback(new Error("Year must be a number"));
    } else if (valueLength < 4) {
        callback(new Error("The length should be from 4"));
    } else {
        callback();
    }
};

const ruleFormRef = ref();
const rules = reactive({
    title: [
        {
            required: true,
            message: "Please input title movie",
            trigger: "blur",
        },
        { min: 3, message: "The length should be from 3", trigger: "blur" },
    ],
    director: [
        {
            required: true,
            message: "Please input movie director",
            trigger: "blur",
        },
        { min: 3, message: "The length should be from 3", trigger: "blur" },
    ],
    year: [
        { required: true, message: "Please input year movie", trigger: "blur" },
        { validator: validateYear, trigger: "blur" },
    ],
    poster: [
        { required: true, message: "Please insert poster", trigger: "change" },
    ],
});

const sendForm = async (formEl) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log(`
        Title: ${data.title}
        Poster: ${data.poster}
        Director: ${data.director}
        Year: ${data.year}
        `);

            data.title = "";
            data.poster = null;
            data.director = "";
            data.year = "";

            showUpload.value = false;
        } else {
            console.log("error submit!", fields);
        }
    });
};

const handleImageUploaded = (url) => {
    data.poster = url;
};
</script>

<template>
    <el-form
        ref="ruleFormRef"
        :model="data"
        :rules="rules"
        class="form"
        label-position="top"
        label-width="120px"
        status-icon
        @submit.prevent
    >
        <h3 class="form__title">Sent movie</h3>
        <el-form-item class="form__item" label="Enter Title" prop="title">
            <base-input v-model="data.title" />
        </el-form-item>
        <el-form-item class="form__item" label="Enter Director" prop="director">
            <base-input v-model="data.director" />
        </el-form-item>
        <el-form-item class="form__item" label="Enter Year" prop="year">
            <base-input v-model.number="data.year" />
        </el-form-item>
        <el-form-item class="form__item" label="Enter Poster" prop="poster">
            <form-upload-file
                :show-upload="showUpload"
                @image-uploaded="handleImageUploaded"
            />
        </el-form-item>
        <el-form-item>
            <base-primary-button @click="sendForm(ruleFormRef)">
                Send
            </base-primary-button>
        </el-form-item>
    </el-form>
</template>

<style lang="scss" scoped>
.form {
    margin: 0 auto;
    max-width: 500px;
    &__title {
        color: $fs-white;
        text-align: center;
        font-size: 32px;
        line-height: 46px;
    }
}
</style>
