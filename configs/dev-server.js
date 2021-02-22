require("esbuild")
  .build({
    entryPoints: ["./src/index.jsx"],
    outdir: "./public",
    minify: true,
    bundle: true,
    loader: { ".js": "jsx" },
    define: { "process.env.NODE_ENV": "'development'" },
  })
  .catch(() => process.exit(1));
