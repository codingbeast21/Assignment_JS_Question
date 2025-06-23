function strip_html_tags(str) {
  return str.replace(/<[^>]*>/g, '');
}
console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));