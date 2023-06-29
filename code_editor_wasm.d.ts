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
  namespace: string,
  params: {
    id: string,
    name: string,
    kind: any,
    required: boolean,
  }[],
  body:
    | {
        kind: "Instance",
        content: any[]
      }
    | {
        kind: "Custom",
        content: string
      }
    | {
        kind: "Module",
      }
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
