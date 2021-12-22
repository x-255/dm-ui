export * from './button'

declare module 'vue' {
  export interface GlobalComponents {
    DmButton: typeof import('dm-ui')['DmButton']
  }
}
