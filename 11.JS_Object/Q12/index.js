function parse_URL(url) {
  const a = document.createElement('a');
  a.href = url;

  const query = {};
  a.search.replace(/^\?/, '').split('&').forEach(part => {
    const [key, value] = part.split('=');
    if (key) query[key] = value;
  });

  return {
    source: url,
    protocol: a.protocol.replace(':', ''),
    host: a.hostname,
    port: a.port,
    query: a.search,
    params: query,
    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
    hash: a.hash.replace('#', ''),
    path: a.pathname,
    relative: a.pathname + a.search + a.hash,
    segments: a.pathname.replace(/^\//, '').split('/')
  };
}

console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));
