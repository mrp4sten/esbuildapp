require('dotenv').config()
require('esbuild').buildSync({
  entryPoints: ['./src/app.jsx'],
  bundle: true,
  minify: false,
  sourcemap: true,
  target: ['chrome80', 'firefox70', 'safari13', 'edge80'],
  outdir: './src/public/dist',
  define: {
    'process.env.API_NINJA_KEY': JSON.stringify(process.env.API_NINJA_KEY),
    'process.env.API_NINJA_URL': JSON.stringify(process.env.API_NINJA_URL)
  },
  loader: {
    '.js': 'jsx'
  }
})
