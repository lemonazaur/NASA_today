function apod( url ){
    // Change BG to pic of the day
    document.body.style.backgroundImage = `url('${url}')`;

    // Clear the content of the .content element
    document.querySelector('.content').innerHTML = '';

    //change UI design to APOD
    document.getElementById('UIset').href = 'APODui.css';
}