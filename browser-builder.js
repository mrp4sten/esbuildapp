require('esbuild').buildSync({
  entryPoints: ['./src/app.jsx'],
  bundle: true,
  minify: false,
  sourcemap: true,
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  outdir: './src/public/dist'
})
