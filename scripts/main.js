let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tanjiro.jfif') {
        myImage.setAttribute('src', 'images/tanjiro2.jfif');
    } else {
       myImage.setAttribute('src', 'images/tanjiro.jfif') 
    }
}