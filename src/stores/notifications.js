import { defineStore } from "pinia";
import { ElNotification } from "element-plus";
import { useI18n } from "../locales/translations";

const timeoutNotify = (message) => {
  setTimeout(() => {
    ElNotification.error({
      message,
    });
  }, 5);
};

const notify = (message) => {
  ElNotification.error({
    title: useI18n.global.t("notifications.actions.error"),
    message,
  });
};

export const useNotificationStore = defineStore({
  id: "notifications",
  actions: {
    success(notification) {
      if (!notification) return;
      ElNotification.success(notification);
    },
    failed(notification) {
      const error = notification?.response?.data;
      if (error?.violations) {
        notify(error?.violations.title);
        const { violations } = error.violations;
        if (violations) {
          violations.forEach((el) => {
            timeoutNotify(`${el.propertyPath}: ${el.title}`);
          });
        } else {
          const errors = Object.keys(error.violations);
          errors.forEach((el) => {
            error.violations[el] &&
              error.violations[el].forEach((el) => {
                timeoutNotify(el);
              });
          });
        }
      } else {
        notify(error?.errorDescription);
      }
    },
  },
});
