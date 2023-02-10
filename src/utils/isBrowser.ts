/**
 * Determine if the javascript environment is in a browser, or node.js
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}
