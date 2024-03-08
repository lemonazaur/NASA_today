function apod(){
    // Change BG to ISS BG
    document.body.style.backgroundImage = 'url("src/Moon_ISS.png")';
    document.body.style.backgroundColor = 'black';

    //Change the name of API activating button
    document.querySelector('.switch').textContent = 'APOD';
    document.querySelector('.switch').setAttribute('onclick', 'apodAPI()');

    //remove content
    document.querySelector('.content').innerHTML = '';

    //change pic
    document.querySelector('.nav-pic').src = 'src/mars.png';

    //change link
    document.getElementById('change').setAttribute('onclick', 'mars()');

    //change UI design to APOD
    document.getElementById('UIset').href = 'APODui.css';
}