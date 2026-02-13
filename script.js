let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function display(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hr2 = 30*h + m/2;
    let mr = 6*m;
    let sr = 6*s;

    hr.style.transform = `rotate(${hr2}deg)`;
    min.style.transform = `rotate(${mr}deg)`;
    sec.style.transform = `rotate(${sr}deg)`;

}

setInterval(display,1000)
