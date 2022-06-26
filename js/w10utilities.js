export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

export function getJSON(url) {
    fetch(url)
        .then(function (response) {
            if (response.ok) {
            return response.json();
            }
            throw Error("Network response was not OK");
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log('There was a problem: ', error.message);
    });
}