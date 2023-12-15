import PrimaryButton from "./PrimaryButton.vue";
import FieldInput from "./FieldInput.vue";
import BaseLoader from "./BaseLoader.vue";

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
        name: "BaseLoader",
        component: BaseLoader,
    },
];

export default {
    install(app) {
        components.forEach(({ name, component }) => {
            app.component(name, component);
        });
    },
};
