let geoBtn
let rasterBtn
let puzzle
let map = L.map('map')
const main = () => {
    prepareElements()
    prepareEvents()
    generateMap()
}

const prepareElements = () => {
    geoBtn = document.querySelector('.geo-btn')
    rasterBtn = document.querySelector('.raster-btn')
    puzzle = document.querySelector('#puzzle')
}

const prepareEvents = () => {
    geoBtn.addEventListener('click', startLocalization)
    rasterBtn.addEventListener('click', raster)
}

const startLocalization = () => {
    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack)

    geoBtn.style.display = 'none'

}

const randomBetween = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min)
}
const generateMap = () => {

    map.setView([randomBetween(-90, 90), randomBetween(-180, 180)], 10)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

}

const raster = () => {
    leafletImage(map, function (err, canvas) {
        // Create an image element
        const img = new Image();
        img.src = canvas.toDataURL();

        // Clear the puzzle div and append the image
        puzzle.innerHTML = '';
        puzzle.appendChild(img);
    });
}

const successCallBack = (position) => {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude

    map.setView([latitude, longitude], 15)

}

const errorCallBack = (error) => {
    generateMapWithOutLocalization()
}

document.addEventListener('DOMContentLoaded', main)
