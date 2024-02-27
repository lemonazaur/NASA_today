function mars(){
    // Clear the content of the .content element
    //document.querySelector('.msg').innerHTML = '';

    document.querySelector('.content').innerHTML = '';
        // '<div class="image-container">' +
        // '<iframe src=\'https://mars.nasa.gov/layout/embed/image/insightweather/\' width=\'800\' height=\'530\'  scrolling=\'yes\' frameborder=\'0\'></iframe>' +
        // '</div>';


    //<iframe src='https://mars.nasa.gov/layout/embed/image/insightweather/' width='800' height='530'  scrolling='no' frameBorder='0'></iframe>


    //set bg MARS
    document.body.style.backgroundImage = 'url(\'src/MarsBG.jpg\')';
    document.body.style.backgroundColor = 'var(--coral)';

    //change pic
    document.querySelector('.nav-pic').src = 'src/ISS.png';

    // Properly set the onclick using a function that captures the current value of sessionStorage
    document.getElementById('change').onclick = function() { apod(sessionStorage.getItem('deckLink')); };

    //change UI design to MARS
    document.getElementById('UIset').href = 'MARSui.css';
}