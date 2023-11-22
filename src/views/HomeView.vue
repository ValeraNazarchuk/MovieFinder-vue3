<template>
  <h1>{{ $t("home") }}</h1>
  <div v-if="store.users">
    <div v-for="item in store.users" :key="item.id">
      <img :src="item.image" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useUsersStore } from "../stores/users";

const store = useUsersStore();

onMounted(async () => {
  await store.getUsers();
});
</script>
