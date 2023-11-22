import { useI18n } from "../locales/translations";

export const formPhoneValidate = (rule, value, callback) => {
  if (!value.match(/^\+?3?8?(0\d{9})$/)) {
    callback(new Error(useI18n.global.t("validation.rules.phoneNumber")));
  } else {
    callback();
  }
};
