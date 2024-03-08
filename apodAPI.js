function apodAPI() {
    const url = sessionStorage.getItem('deckLink');
    const contentContainer = document.querySelector('.content');

    // Calculate width and height based on viewport size
    let width = window.innerWidth;
    let height = 9*width/16;
    const aspectRatio = 16 / 9; // Standard aspect ratio for 16:9 content

    // Check if the URL ends with an image extension
    if (/\.(jpg|jpeg|png|gif)$/i.test(url)) {
        // If the URL is for an image, create an <img> element
        const imgElement = document.createElement('img');
        imgElement.classList.add('content-image');
        imgElement.alt = 'PicOfTheDay';
        imgElement.src = url;

        // Set the width and height of the image
        imgElement.style.width = `${width}px`;
        imgElement.style.height = `${height}px`;

        // Append the <img> element to the content container
        contentContainer.innerHTML = '';
        contentContainer.appendChild(imgElement);
    } else {
        // If the URL is not for an image, assume it's for a video
        const videoElement = document.createElement('iframe');
        videoElement.src = url; // Assuming 'url' contains YouTube video URL
        videoElement.frameborder = '0';
        videoElement.allowfullscreen = true;

        // Set the width and height of the video
        videoElement.style.width = `${width}px`;
        videoElement.style.height = `${height}px`;

        // Append the <iframe> element to the content container
        contentContainer.innerHTML = '';
        contentContainer.appendChild(videoElement);
    }

    //modify the switch button
    document.querySelector('.switch').textContent = 'OFF';
    document.querySelector('.switch').setAttribute('onclick', 'apodAPIoff()');
}