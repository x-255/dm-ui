export * from './example'

declare module 'vue' {
  export interface GlobalComponents {
    DmExample: typeof import('dm-ui')['DmExample']
  }
}
