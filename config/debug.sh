WORKDIR=$(dirname "$0")
ROOT=$WORKDIR/..

mkdir -p $ROOT/dist

cp $ROOT/src/index.html $ROOT/dist/

# node $WORKDIR/esbuild.bundle.js
node $WORKDIR/esbuild.debug.js