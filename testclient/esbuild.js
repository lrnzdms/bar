import esbuild from "esbuild";

const build = async () => {

    await esbuild.build({
        entryPoints: ['./index.tsx'],
        outfile: './bundle.js',
        bundle: true,
        minify: true
    });

    esbuild.serve({
        host: "::1",
        servedir: './',
        port: 3001
    }, {});
}

build()