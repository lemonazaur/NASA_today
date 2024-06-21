async function marsAPI() {
    // Clear the content of the .content element
    document.querySelector('.content').innerHTML = '';

    //Change the name of API activating button
    document.querySelector('.switch').textContent = '----';
    document.querySelector('.switch').setAttribute('onclick', '');

    //set bg MARS
    document.body.style.backgroundImage = 'url(\'src/img/MarsBG.jpg\')';
    document.body.style.backgroundColor = 'var(--coral)';

    //change pic
    document.querySelector('.nav-pic').src = 'src/img/ISS.png';

    // Properly set the onclick using a function that captures the current value of sessionStorage
    document.getElementById('change').setAttribute('onclick', 'apod()');

    //change UI design to MARS
    document.getElementById('UIset').href = 'src/styles/MARSui.css';

    // Fetch and display Mars weather data
    const apiKey = 'D9bYhAo3CXc89kfradaPKZNvXt3RwbmYvdbC3wgO'; // Replace with your actual API key
    const apiUrl = `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`;

    try {
        const response = await fetch(apiUrl);
        console.log(fetch(apiUrl));
        const data = await response.json();
        const solKeys = data.sol_keys;
        const latestSol = solKeys[solKeys.length - 1];
        const solData = data[latestSol];

        const contentContainer = document.querySelector('.content');
        contentContainer.innerHTML = ''; // Clear any existing content

        const temperature = solData.AT ? solData.AT.av : 'N/A';
        const windSpeed = solData.HWS ? solData.HWS.av : 'N/A';
        const windDirection = solData.WD && solData.WD.most_common ? solData.WD.most_common.compass_point : 'N/A';

        const weatherInfo = `
            <h2>Mars Weather Report for Sol ${latestSol}</h2>
            <p>Average Temperature: ${temperature} °C</p>
            <p>Average Wind Speed: ${windSpeed} m/s</p>
            <p>Most Common Wind Direction: ${windDirection}</p>
        `;

        contentContainer.innerHTML = weatherInfo;

    } catch (error) {
        console.error('Error fetching Mars weather data:', error);
        document.querySelector('.content').innerHTML = '' +
            '<h1>MARS WEATHER API CURRENTLY UNAVAILABLE </h1>' +
            '<h1>(THE API IS NO LONGER ONLINE)</h1>';
    }
}