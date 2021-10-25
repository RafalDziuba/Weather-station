const hour = document.querySelector('#hour');
const minute = document.querySelector('#min');


const API_TIMEZONE =
  'https://timezone.abstractapi.com/v1/current_time/?api_key=e32a28f779da429fb199764f6a12efb4&location=';

const getTime = () => {
  const city = input.value;
  const timeRes = API_TIMEZONE + city;
  axios.get(timeRes).then((res) => {
    console.log(res.data);
    let splitedDate = res.data.datetime.split(' ');
    hour.textContent =res.data.timezone_location;
    minute.textContent = splitedDate[1].slice(0, 5);
  });
};

button.addEventListener('click', getTime);

// CURRENT TIME
// const clock = () => {
//   let date = new Date();
//   let hr = date.getHours();
//   let min = date.getMinutes();

//   if (hr < 10) {
//     hr = '0' + hr;
//   }

//   if (min < 10) {
//     min = '0' + min;
//   }

//   hour.textContent = hr;
//   minute.textContent = min;
// };

// let timer = setInterval(clock, 1000);