function escape_HTML(html) {
  return html.replace(/&/g, "&amp;").replace(/</g, "&lt;")
             .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
             .replace(/'/g, "&#039;");
}
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));