import * as wasm from "./code_editor_wasm_bg.wasm";
import { __wbg_set_wasm } from "./code_editor_wasm_bg.js";
__wbg_set_wasm(wasm);
export * from "./code_editor_wasm_bg.js";

wasm.__wbindgen_start();
