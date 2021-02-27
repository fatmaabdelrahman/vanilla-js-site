const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function (){
   //get random number between 0-3
    const randomNumber= getRandomNumber(3);
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    console.log(colors[randomNumber]);
    color.textContent = colors[randomNumber];
});

function getRandomNumber(max){
    return Math.floor(Math.random() * Math.floor(max)) ;
}