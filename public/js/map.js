//    mapboxgl.accessToken = mapToken;
//     const map = new mapboxgl.Map({
//         container: 'map', 
//         style:"mapbox://styles/mapbox/streets-v12",
//         center: listing.geometry.coordinates, 
//         zoom: 8 
//     });
            


//     const marker = new mapboxgl.Marker({color:'red'})
//     .setLngLat(listing.geometry.coordinates) //listing.geometry.coordinates
//     .setPopup(new mapboxgl.Popup({offset:25})
//     .setHTML(`<h4>${listing.title}</h4> <p>Exact location after booking  </p>`))

//     .addTo(map)

    


// mapboxgl.accessToken = mapToken;

// const coordinates = listing?.geometry?.coordinates;

// console.log("Listing:", listing);
// console.log("Coordinates:", coordinates);

// if (
//     listing?.geometry?.type === "Point" &&
//     Array.isArray(coordinates) &&
//     coordinates.length === 2
// ) {
//     const map = new mapboxgl.Map({
//         container: "map",
//         style: "mapbox://styles/mapbox/streets-v12",
//         center: coordinates,
//         zoom: 8
//     });

//     new mapboxgl.Marker({ color: "red" })
//         .setLngLat(coordinates)
//         .setPopup(
//             new mapboxgl.Popup({ offset: 25 }).setHTML(
//                 `<h4>${listing.title}</h4>
//                  <p>Exact location after booking</p>`
//             )
//         )
//         .addTo(map);
// } else {
//     console.error("Invalid listing coordinates:", listing);
// }

mapboxgl.accessToken = mapToken;

const coordinates = listing?.geometry?.coordinates;

if (Array.isArray(coordinates) && coordinates.length === 2) {
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: coordinates,
        zoom: 10
    });

    new mapboxgl.Marker({ color: "red" })
        .setLngLat(coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<h4>${listing.title}</h4>
                 <p>Exact location after booking</p>`
            )
        )
        .addTo(map);
} else {
    document.getElementById("map").innerText =
        "Location is not available for this listing.";
}