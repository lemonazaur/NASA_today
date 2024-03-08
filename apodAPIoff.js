function apodAPIoff() {
    document.querySelector('.content').innerHTML = '';
    document.querySelector('.switch').textContent = 'APOD';
    document.querySelector('.switch').setAttribute('onclick', 'apodAPI()');
}