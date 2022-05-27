function readLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function writeLocalStorage(key, item) {
    localStorage.setItem(key, JSON.stringify(item));
}

function removeFromLocalStorage(key) {
    console.log(`Key passed to removeFromLocalStorage :: ${key}`);
    localStorage.removeItem(key);
}

export {
    readLocalStorage,
    writeLocalStorage,
    removeFromLocalStorage
}