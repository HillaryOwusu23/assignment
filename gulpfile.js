const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purge = require("gulp-purgecss")

function buildStyles() {
  return src("styles_css/**/*.scss").pipe(sass()).pipe(purge({content:['*.html']})).pipe(dest("css"));
}

function watchTask() {
  watch(["styles_css/**/*.scss","*.html"], buildStyles);
}
// Define the "build" task to run buildStyles
exports.build = buildStyles;
exports.default = series(buildStyles, watchTask);
