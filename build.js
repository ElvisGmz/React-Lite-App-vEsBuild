require("esbuild").build({
  entryPoints: ["./src/index.jsx"],
  outfile: "./build/bundle.js",
  minify: true,
  bundle: true,
  define: { "process.env.NODE_ENV": "'production'" },
}).catch(() => process.exit(1));