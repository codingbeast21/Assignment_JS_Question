function showClock() {
  setInterval(() => {
    const now = new Date();
    const time = now.toTimeString().split(" ")[0];
    console.log(time);
  }, 1000);
}

showClock(); 
