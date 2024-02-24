function mars(){
    // Clear the content of the .content element
    document.querySelector('.content').innerHTML = '';

    //set bg MARS
    document.body.style.backgroundImage = 'url(\'src/MarsBG.jpg\')';

    //change UI design to MARS
    document.getElementById('UIset').href = 'MARSui.css';
}