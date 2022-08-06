import esbuild from "esbuild";

esbuild.build({
    entryPoints: ['./src/index.tsx'],
    outfile: './dist/bundle.js',
    bundle: true,
    minify: true,
    // globalName: 'bar',
    // footer: {
    //     js: "var var = bar.default"
    // },
    
    // platform: "browser",
    // format: "iife",
    // target: ""
});