import PrimaryButton from "./PrimaryButton.vue";
import FieldInput from "./FieldInput.vue";
import Loader from "./Loader.vue";

const components = [
  {
    name: "FieldInput",
    component: FieldInput,
  },
  {
    name: "PrimaryButton",
    component: PrimaryButton,
  },
  {
    name: "Loader",
    component: Loader,
  },
];

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};
