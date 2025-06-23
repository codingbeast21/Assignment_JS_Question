const days=["Sunday", 
    "Monday", "Tuesday",
     "Wednesday", "Thursday",
      "Friday", "Saturday"];

const today = new Date().getDay();
console.log(`Today is : ${days[today]}.`);


const options = { timeZone: 'Asia/Kolkata' };
const now = new Date().toLocaleString('en-US', options);

let hour = new Date(now).getHours();
const min = new Date(now).getMinutes();
const sec = new Date(now).getSeconds();

const period = hour >= 12 ? 'PM' : 'AM';
hour = hour % 12 || 12; 

console.log(`${hour}  ${period} : ${min} : ${sec}`);
