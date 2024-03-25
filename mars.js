function mars(){
    // Clear the content of the .content element
    document.querySelector('.content').innerHTML = '';


    //Change the name of API activating button
    document.querySelector('.switch').textContent = '----';
    document.querySelector('.switch').setAttribute('onclick', '');

    //add msg in the content
    document.querySelector('.content').innerHTML = '' +
        '<h1>MARS WEATHER API CURRENTLY UNAVAILABLE </h1>' +
        '<h1>(THE API IS NO LONGER ONLINE)</h1>'


    //<iframe src='https://mars.nasa.gov/layout/embed/image/insightweather/' width='800' height='530'  scrolling='no' frameBorder='0'></iframe>


    //set bg MARS
    document.body.style.backgroundImage = 'url(\'src/MarsBG.jpg\')';
    document.body.style.backgroundColor = 'var(--coral)';

    //change pic
    document.querySelector('.nav-pic').src = 'src/ISS.png';

    // Properly set the onclick using a function that captures the current value of sessionStorage
    document.getElementById('change').setAttribute('onclick', 'apod()');

    //change UI design to MARS
    document.getElementById('UIset').href = 'MARSui.css';
}