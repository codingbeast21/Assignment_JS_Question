function unix_to_time(timestamp) {
  return new Date(timestamp * 1000).toLocaleTimeString();
}

console.log(unix_to_time(1609459200)); 
