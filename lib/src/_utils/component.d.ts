import { Component, App } from 'vue';
/**补全组件名前缀 */
export declare const compNameCompetion: (comp: Component) => string;
/** 注册组件 */
export declare const registerComponent: (app: App, comp: Component) => void;
