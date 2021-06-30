const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
    alert('Yay, love icecream');
    console.log(iceCream);
} else {
    alert('not chocolate');
}

function poking() {
    alert('Ouch! Stop poking me!');
}

  document.querySelector('p').onclick = poking;