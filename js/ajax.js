const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const gifApi = document.getElementById('gifApi');
const outputDiv = document.getElementById('output');

const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

textButton.addEventListener('click', () => {
    fetch(textURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
        throw Error(response.statusText);
    })
    .then( response => response.text() )
    .then( text => outputDiv.innerText = text )
    .catch( error => console.log('There was an error:', error))
},false);

apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerText = data.value )
    .catch( error => console.log('There was an error:', error))
},false);

gifApi.addEventListener('click', () => {
    fetch("https://api.giphy.com/v1/gifs/search?&q=funnycat&api_key=UWUhUuxLMhfVzD4ejhAOsyERRnPpl10l&limit=40&rating=PG")
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
        throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( _json => outputDiv.innerHTML = 
        `<img src="${_json.data[Math.floor(Math.random() * (39 - 0 + 1)) + 0].images.downsized.url}">` )
    .catch( error => console.log('There was an error:', error))
},false);
