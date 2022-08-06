import esbuild from "esbuild";

esbuild.serve({
    host: "::1",
    servedir: './dist',
    port: 3000
}, {
    entryPoints: ['./src/index.tsx'],
    outfile: './dist/bundle.js',
    bundle: true,
    minify: true,
})