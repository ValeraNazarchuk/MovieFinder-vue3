<script setup>
import Navbar from "./NavBar.vue";

const navList = [
  { text: "Home", link: "/" },
  { text: "Form", link: "/form" },
]

</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <a class="header__logo" href="#">MovieFinder</a>
        <Navbar :list="navList" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  color: $fs-white;
  background: $bg-black;
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
