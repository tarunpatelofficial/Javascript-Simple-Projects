const colors = ["green", "red", "blue","violet","indigo","yellow","orange"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomNumber = GetRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]; 
});

function GetRandomNumber() {
    return  Math.floor(Math.random() * colors.length);
}