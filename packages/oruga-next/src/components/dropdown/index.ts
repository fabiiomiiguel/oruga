import type { App, Plugin } from "vue";

import Dropdown from "./Dropdown.vue";
import DropdownItem from "./DropdownItem.vue";

import { registerComponent } from "@/utils/plugins";

/** export dropdown specific types */
export type * from "./types";

/** export dropdown plugin */
export default {
    install(app: App) {
        registerComponent(app, Dropdown);
        registerComponent(app, DropdownItem);
    },
} as Plugin;

/** export dropdown components */
export { Dropdown as ODropdown, DropdownItem as ODropdownItem };
