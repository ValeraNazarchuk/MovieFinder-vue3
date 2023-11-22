<template>
  <nav class="nav">
    <!-- <div
      class="nav__burger"
      @click="toggleMenu"
      :class="{ 'nav__burger--active': isOpen }"
    >
      <span class="nav__burger-line"></span>
    </div> -->
    <ul class="nav__list">
      <li v-for="(item, index) in list" :key="index" class="nav__list-item">
        <RouterLink class="nav__item-link" :to="item.link">{{
          item.text
        }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  props: {
    list: {
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.nav {
  &__list {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}

</style>
