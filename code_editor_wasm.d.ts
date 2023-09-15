/* tslint:disable */
/* eslint-disable */
/**
*/
export function wasm_start(): void;
/**
* 未保存のactionのqueueのリストを返却する。
* 未保存のものについてundone可能な想定
* @returns {any[]}
*/
export function get_unsaved_action_queue(): any[];
/**
* undone後のworkspaceを返却する
* @returns {CodeEditorWorkspace}
*/
export function undone(): CodeEditorWorkspace;
/**
* redo後のworkspaceを返却する
* @returns {CodeEditorWorkspace}
*/
export function redo(): CodeEditorWorkspace;
/**
* Deserialize string param
* @param {string} param_str
* @returns {ParamKind}
*/
export function deserialize_param_kind(param_str: string): ParamKind;

export type CodeEditorAction =
  | {
      name: "PushInstance",
      target: string,
      payload: {
        target?: string | null | undefined,
        prop_name: string,
        component: string
      }
    }
  | {
      name: "UpdateParameter",
      target: string,
      payload: {
        target: string,
        prop_name: string,
        value:
          | "none"
          | {
              reference: string
            }
          | {
              literal: any
            }
      }
    }
  | {
      name: string,
      target: string,
      payload: any
    }



export interface CodeEditorComponent {
  id: string,
  name: string,
  module_info: string,
  params: Param[],
  body:
    | string
    | null
}



export type Param = {
    id: string,
    name: string,
    kind: string,
    constraints: string,
    default_value?: string | null,
    required: boolean,
}



export type ParamConstraint =
  | {
      kind: "TextStyles",
    }
  | {
      kind: "ViewStyles",
    }
  | {
      kind: "Layout",
    }
  | {
      kind: "Url",
    }
  | {
      kind: string,
    }



export type ParamKind =
  | {
      kind: "String",
    }
  | {
      kind: "Number",
    }
  | {
      kind: "Boolean",
    }
  | {
      kind: "List",
      list: ParamKind
    }
  | {
      kind: "Object",
      object: Param[]
    }
  | {
      kind: "Render",
    }
  | {
      kind: "RenderFunc",
      params: Param[]
    }
  | {
      kind: "Union",
      union: ParamKind[]
    }



export type ParamRef =
  | {
    kind: "Identifier",
    ref: string
  }
  | {
    kind: "Instance",
    // TODO
    ref: any
  }
  | {
    kind: "Literal",
    // TODO
    ref: any
  }


/**
*/
export class CodeEditorWorkspace {
  free(): void;
/**
*/
  constructor();
/**
* @param {string} id
* @returns {string}
*/
  generate_component_code(id: string): string;
/**
* @param {string} id
* @returns {any}
*/
  serialize_component(id: string): any;
/**
* @param {CodeEditorComponent} value
*/
  load_component(value: CodeEditorComponent): void;
/**
* @param {CodeEditorAction} action
*/
  execute(action: CodeEditorAction): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly wasm_start: () => void;
  readonly get_unsaved_action_queue: (a: number) => void;
  readonly undone: () => number;
  readonly redo: () => number;
  readonly deserialize_param_kind: (a: number, b: number, c: number) => void;
  readonly __wbg_codeeditorworkspace_free: (a: number) => void;
  readonly codeeditorworkspace_new: () => number;
  readonly codeeditorworkspace_generate_component_code: (a: number, b: number, c: number, d: number) => void;
  readonly codeeditorworkspace_serialize_component: (a: number, b: number, c: number, d: number) => void;
  readonly codeeditorworkspace_load_component: (a: number, b: number, c: number) => void;
  readonly codeeditorworkspace_execute: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
