require("esbuild")
  .build({
    entryPoints: ["./src/index.jsx"],
    outfile: "./build/build.js",
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
    define: { "process.env.NODE_ENV": "'production'" },
  })
  .catch(() => process.exit(1));
