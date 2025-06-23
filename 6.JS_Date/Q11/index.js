function max_date(dates) {
  return new Date(Math.max(...dates.map(d => new Date(d)))).toISOString().split('T')[0].replace(/-/g, '/');
}

console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03'])); // "2015/02/02"
