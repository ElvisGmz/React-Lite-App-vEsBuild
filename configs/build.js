require("esbuild")
  .build({
    entryPoints: ["./src/index.jsx"],
    outdir: "./build",
    minify: true,
    bundle: true,
    loader: { ".js": "jsx" },
    define: { "process.env.NODE_ENV": "'production'" },
  })
  .catch(() => process.exit(1));
