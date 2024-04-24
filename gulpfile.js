const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("compile_css/**/*.scss").pipe(sass()).pipe(dest("css"));
}

function watchTask() {
  watch(["compile_css/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
