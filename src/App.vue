<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { LAYOUTS } from "@/plugins/const";
import MainLayout from "@/layouts/MainLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

import "element-plus/theme-chalk/src/notification.scss";
import "element-plus/theme-chalk/src/message.scss";
import "element-plus/theme-chalk/src/message-box.scss";
import uk from "element-plus/dist/locale/uk.mjs";

export default {
  components: {
    MainLayout,
    DefaultLayout,
  },
  setup() {
    const routeMetaLayout = computed(() => {
      return (useRoute().meta?.layout || "default") + "Layout";
    });

    const locale = computed(() => {
      return useI18n().locale?.value;
    });

    return {
      routeMetaLayout,
      LAYOUTS,
      locale,
      useRoute,
      elementsLocale: uk,
    };
  },
};
</script>

<template>
  <el-config-provider namespace="np" :key="locale" :locale="elementsLocale">
    <template v-if="useRoute().meta.layout">
      <MainLayout v-if="routeMetaLayout === LAYOUTS.mainLayout" />
      <DefaultLayout v-else />
    </template>
  </el-config-provider>
</template>
