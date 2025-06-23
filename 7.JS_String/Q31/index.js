function escape_html(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
}
console.log(escape_html('PHP & MySQL'));
console.log(escape_html('3 > 2'));