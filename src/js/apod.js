function apod(){
    // Change BG to ISS BG
    document.body.style.backgroundImage = 'url("src/img/Moon_ISS.png")';
    document.body.style.backgroundColor = 'black';

    //Change the name of API activating button
    document.querySelector('.switch').textContent = 'APOD';
    document.querySelector('.switch').setAttribute('onclick', 'apodAPI()');

    //remove content
    document.querySelector('.content').innerHTML = '';

    //change pic
    document.querySelector('.nav-pic').src = 'src/img/mars.png';

    //change link
    document.getElementById('change').setAttribute('onclick', 'marsAPI()');

    //change UI design to APOD
    document.getElementById('UIset').href = 'APODui.css';
}