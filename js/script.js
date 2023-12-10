const imgs = document.querySelector('#img');
const img = document.querySelectorAll('#img img');
let idx = 0;
function carrossel(){
    idx++;
    if(idx > img.length -1){
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 100}%)`;
}
setInterval(carrossel, 1900);
function openNav(){
    document.querySelector('#myNav').style.width = '100%';
}
function closeNav(){
    document.querySelector('#myNav').style.width = '0%';
}