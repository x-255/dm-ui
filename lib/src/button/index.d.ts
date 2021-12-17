import { SFCWithInstall } from '../_utils';
declare const Button: SFCWithInstall<import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {}>>;
export default Button;
export { Button as DmButton };
declare module 'vue' {
    interface GlobalComponents {
        DmButton: typeof import('./src/index.vue').default;
    }
}
