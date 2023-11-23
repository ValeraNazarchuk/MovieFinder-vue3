<script>
import { defineComponent } from "vue";
import Navbar from "./NavBar.vue";

export default defineComponent({
  components: {
    Navbar,
  },
  data() {
    return {
      searchValue: "",
      navList: [
        { text: "Home", link: "/" },
        { text: "Form", link: "/form" },
      ],
    };
  },
  methods: {
    searchClick() {},
  },
});
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <a class="header__logo" href="#">MovieFinder</a>
        <Navbar :list="navList" />
        <div class="header__search-box">
          <el-input
            v-model="searchValue"
            class="header__search-input"
            placeholder="Search"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><search /></el-icon>
            </template>
          </el-input>
          <el-button type="primary" @click="searchClick">Search</el-button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  color: $white;
  background: $black;
  padding: 25px 0px;
  &__logo {
    font-size: 20px;
    line-height: auto;
  }
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__search-box {
    display: flex;
    align-items: center;
    &-input {
      max-width: 250px;
      width: 100%;
    }
  }
}
</style>
