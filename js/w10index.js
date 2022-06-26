// YOU MIGHT NEED TO CHAGE THIS LOCATION
import { getJSON, getLocation } from './w10utilities.js';

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

let quakes = [];

async function testGetQuakesForLocation() {
    let location = await getLocation();

    const radius = 100;
    const query = baseUrl +
        `&latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&maxradiuskm=${radius}`;
    // use the url to request the correct quakes 
    // fetch the data
    quakes = await getJSON(query);
    
    // get the element we will render the list in
    const listElement = document.querySelector("#quakeList");
    // render the list of quakes
    // how did I know to look at quakes.features? I looked at the returned data from the fetch!
    const listHtml = quakes.features.map((quake) => {
        console.log("QUAKES " + typeof(quake));
        return `
        ${quake.properties.title} 
        ${new Date(
            quake.properties.time
            )}
        `;
    });

    listElement.innerHTML = listHtml.join("");
    // attach a listener to watch for a click on the quake. If it sees one then render out the details of the quake
    listElement.addEventListener("click", (event) => {
        console.log(event.currentTarget); // note the difference between target and currentTarget
        console.log(event.target);
        const quakeId = event.target.dataset.id;
        // find the quake with that ID
        const quake = quakes.features.find((item) => item.id === quakeId);
        // render details
        const detailsElement = document.querySelector("#quakeDetails");
        // our quake information is inside of an object called properties. Objects are sometimes hard to iterate over...below is a nice way to convert an object into an array.
        const quakeProperties = Object.entries(quake.properties);
        detailsElement.innerHTML = quakeProperties
        .map((item) => {
            if (item[0] === "time" || item[0] === "updated") {
            return `
            ${item[0]}: ${new Date(item[1])}
            `;
                    } else return `
            ${item[0]}: ${item[1]}
            `;
        })
        .join("");
    });
    }
testGetQuakesForLocation();
