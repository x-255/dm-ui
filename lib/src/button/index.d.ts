import { SFCWithInstall } from '../_utils';
declare const DmButton: SFCWithInstall<import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>>;
export { DmButton };
declare module 'vue' {
    interface GlobalComponents {
        DmButton: typeof import('./src/index.vue').default;
    }
}
