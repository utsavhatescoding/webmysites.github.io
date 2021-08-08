function updateMap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude
                longitude = element.longitude
                // countriesAndTerritories=element.countriesAndTerritories;
                // geoId=element.geoId;
                deaths = element.dead;
                x = deaths;
                y = 100;
                z = 6000;
                a = 0;
                b = 255;
                c = (x - y) / (z - y) * (b - a) + a;

                
                color = `rgb(${c},0,0)`
                //Mark on the Map 

                new mapboxgl.Marker({
                    draggable: true,
                    color: color,
                })


               


                    .setLngLat([longitude, latitude])
                    .addTo(map);



            });
            

        })
}
updateMap();