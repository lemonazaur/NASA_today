function apod( url ){
    // Change BG to pic of the day
    document.body.style.backgroundImage = 'url("src/Moon_ISS.png")';
    document.body.style.backgroundColor = 'black';

    // Clear the content of the .content element
    // document.querySelector('.msg').innerHTML = '<h1 style="margin: 12px 0">\n' +
    //     '                GREETINGS CAPITAN !\n' +
    //     '            </h1>\n' +
    //     '            <h3 style="margin: 6px 0">THIS IS THE PICTURE OF THE DAY</h3>\n' +
    //     '            <h3 style="margin: 6px 0">FROM ONE OF OUR COLONIES</h3>' +
    //     '            <h3 style="margin: 6px 0">TO SEE THE FORECAST, CLICK ON MARS !!!</h3>';

    document.querySelector('.content').innerHTML = '';
       // `<div class="image-container">
       //     <img class="content-image" alt="PicOfTheDay" src="${url}">
       // </div>`;



    //change pic
    document.querySelector('.nav-pic').src = 'src/MARS.png';

    //change link
    document.getElementById('change').setAttribute('onclick', 'mars()');

    //change UI design to APOD
    document.getElementById('UIset').href = 'APODui.css';
}