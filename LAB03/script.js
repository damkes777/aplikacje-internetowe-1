let geoBtn
let rasterBtn
let puzzle
let map

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
    rasterBtn.addEventListener('click', raster)
    geoBtn.addEventListener('click', getGeolocation)
}


const generateMap = () => {
    map = L.map('map').setView([53, 14], 18)
    L.tileLayer.provider('Esri.WorldImagery').addTo(map)
}

const getGeolocation = () => {j
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position)

        let lat = position.coords.latitude
        let lon = position.coords.longitude

        map.setView([lat, lon])
        geoBtn.classList.add('hidden')

    }, positionError => {
        console.log(positionError)
    })
}

const raster = () => {
    leafletImage(map, function (err, canvas) {
        let rasterMap = document.querySelector('#rasterMap')
        let rasterContent = rasterMap.getContext('2d')
        rasterMap.classList.remove('hidden')
        rasterBtn.classList.add('hidden')
        // map.classList.add('hidden')

        rasterContent.drawImage(canvas, 0, 0, 300, 150)

    })
}

// const raster = () => {
//     console.log('raster')
//     leafletImage(map, function (err, canvas) {
//         let rasterMap = document.querySelector('#rasterMap')
//         let rasterContent = rasterMap.getContext('2d')
//
//         rasterContent.drawImage(canvas, 0, 0, 300, 150);
//     })
// }

document.addEventListener('DOMContentLoaded', main)
