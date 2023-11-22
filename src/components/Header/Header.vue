<script>
import { defineComponent } from "vue";
import { Search } from "@element-plus/icons-vue";
import Navbar from "./NavBar.vue";

export default defineComponent({
  components: {
    Navbar,
  },
  data() {
    return {
      navList: [
        { text: "Home", link: "/" },
        { text: "Form", link: "/form" },
      ],
    };
  },
});
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <a class="logo header__logo" href="#">MovieFinder</a>
        <Navbar :list="navList" />
        <el-input v-model="input4" class="input" placeholder="Search">
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  // display: flex;
  // justify-content: center;
  color: $white;
  background: $black;
  padding: 25px 0px;
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.input {
  max-width: 250px;
  width: 100%;
}
</style>
