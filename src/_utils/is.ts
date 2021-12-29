import { Plugin } from 'vue'

export const isObject = (target: unknown): target is AnyObject =>
  target !== null && typeof target === 'object'

export const isFunction = (target: unknown): target is AnyFunction =>
  typeof target === 'function'

export const isVuePlugin = (target: unknown): target is Plugin =>
  isObject(target) && isFunction(target.install)
