function min_date(dates) {
  return new Date(Math.min(...dates.map(d => new Date(d)))).toISOString().split('T')[0].replace(/-/g, '/');
}

console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03'])); // "2015/01/03"
