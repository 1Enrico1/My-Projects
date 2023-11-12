let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
let firstImage = document.getElementsByClassName('hidden1')[0];
let secondImage = document.getElementsByClassName('hidden2')[0];
let thirdImage = document.getElementsByClassName('hidden3')[0];

function changeDisplay(element){
    if (element.style.display === 'block'){
        element.style.display = 'none';
    }else{
        element.style.display = 'block';
    }
}

first.addEventListener('click', () => changeDisplay(firstImage));
second.addEventListener('click', () => changeDisplay(secondImage));
third.addEventListener('click', () => changeDisplay(thirdImage));

