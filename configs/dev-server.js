require("esbuild")
  .build({
    entryPoints: ["./src/index.jsx"],
    outdir: "./public",
    minify: true,
    bundle: true,
    loader: {
      ".js": "jsx",
      ".otf": "file",
      ".ttf": "file",
      ".png": "file",
      ".jpg": "file",
      ".jpeg": "file",
      ".svg": "file",
      ".gif": "file",
      ".mp4": "file",
    },
    define: { "process.env.NODE_ENV": "'development'" },
  })
  .catch(() => process.exit(1));
