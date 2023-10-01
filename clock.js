const myName = document.querySelector('#myName'); 
let getName = prompt('Lütfen isminizi giriniz...');

getName = getName.replace(`${getName[0]}`, getName.slice(0,1).toLocaleUpperCase());

myName.innerHTML = getName;

let myClock = document.querySelector('#myClock');
let dayOfWeek = ['Pazar','Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

function showTime() {

  let watch = new Date();
  let h = watch.getHours();
  let m = watch.getMinutes();
  let s = watch.getSeconds();

  if (m < 10) {
    m = `0${m}`;
  }else if (s < 10) {
    s = `0${s}`;
  }

  myClock.innerHTML = h + ':' + m + ':' + s + ' ' + dayOfWeek[watch.getUTCDay()];
  setTimeout(showTime ,1000);
};

showTime();
