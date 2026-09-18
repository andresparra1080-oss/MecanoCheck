declare module '@opennextjs/core' {
  // Minimal stub types for build-time only. Adjust if you need stronger typing.
  export function defineConfig<T = any>(config: T): T;
  const _default: <T = any>(config: T) => T;
  export default _default;
}

