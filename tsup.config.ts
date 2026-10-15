import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['react'],
  // Next.js App Router: el botón es un componente cliente y tiene que poder
  // usarse directo desde un layout de servidor.
  banner: { js: '"use client";' },
});
