map.on('load', function () {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>United States</strong><p>More than 6.1 million deaths by June 2021  with 41% people fully vaccinated.Case numbers in the United States continue to plummet.</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-95.712891, 37.09024]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Nepal</strong><p>With nearly 3 Lakhs Confirmed Covid Cases, the total deaths have reached to 3061 until the 2nd of June 2021. The patients recovering from Covid -19 is high upto 280000.</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [84.12400799999999, 28.394857]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>India </strong><p> 3.3 Lakhs people already dead with cases bursting uncontrollably with Covid 2.0.Confirmed Cases have reached to 28307832 with 80% of those who have recovered. </p>'
                    },

                    'geometry': {
                        'type': 'Point',
                        'coordinates': [78.96288, 20.593684]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Brazil</strong><p> Upto 17 million confirmed cases with 500 thousand deaths by now. Major Hotspot with peak deaths. </p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-51.92528, -14.235004]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            "<strong>South Africa</strong><p>Only 103 deaths but the confirmed cases higher to 1.6 million. Almost 1.5 millions have already recovered.</p>"
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [22.937506, -30.559482]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Iran</strong><p>Deaths : 65680 </p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [53.688046, 32.427908]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Germany</strong><p>Deaths : 79813</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [10.451526, 51.165691]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            "<strong>Russia</strong><p>Deaths : 104398</p><br><p>Vaccination : Sputnik </p>"
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [105.318756, 61.52401]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Saudi Arabia</strong><p>Deaths : 6781</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [45.079162, 23.885942]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Argentina</strong><p>Deaths : 58542</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-63.61667199999999, -38.416097]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Austria</strong><p>Deaths : 9813</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [14.550072, 47.516231]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>China</strong><p>Deaths : 5000 <br> From Where it all started !</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [104.1954, 35.8617]
                    }
                },
                                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Netherlands</strong><p>Deaths : nearly 17000</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [5.291265999999999, 52.132633]
                    }
                },
                                    {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Bulgaria</strong><p>Deaths : 14871</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [25.48583, 42.733883]
                    }
                },
                                        {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Italy</strong><p>Deaths :115557 <br> Major Damaged City at the Covid 1.0</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [12.56738, 41.87194]
                    }
                },
                                            {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>France</strong><p>Deaths : 100 thousands</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [2.213749, 46.227638]
                    }
                },
                                                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Belgium</strong><p>Deaths : 23603</p>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [4.469936, 50.503887]
                    }
                },
                                                    {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Peru</strong><p>Confirmed cases: 1667737 ,  Total Deaths: 55812,Recovered: 1592937</p> '
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-75.015152, -9.189967]
                }
            },
                                                        {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Ukraine</strong><p>"confirmed": 1903765  "dead": 38658"recovered": 1453766,</p> '
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [31.1655799, 48.379433]
                }
            },
                                                            {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>UK</strong><p>Deaths : 127161</p> '
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-3.435973, 55.378051]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'description':
                        '<strong>Syria</strong><p>Deaths :1402</p> '
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [39, 34.5]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'description':
                    '<strong>Colombia</strong><p>Deaths : 70 thousands</p> '
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [-74, 4.57]
        }
    },
    {
        'type': 'Feature',
        'properties': {
            'description':
                '<strong>Indonesia</strong><p>Deaths : 43000</p> '
    },
    'geometry': {
        'type': 'Point',
        'coordinates': [114, -0.78]
    }
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Chile</strong><p>Deaths : 24500</p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [-71.5, -35.6]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Mexico</strong><p>Deaths : 210812</p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [-102.5,23.6]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Spain</strong><p>Deaths : 76756</p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [-3.74,40.46366700000001]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Turkey</strong><p>Deaths : 34700</p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [35.243322, 38.9]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Poland</strong><p>Deaths : 60612</p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [19,52]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Portugal</strong><p>Deaths : 17K </p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [-8.2,39.39]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Australia</strong><p>Deaths : Only 910 with nearly 30k confirmed cases</p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [133.775136, -25.274398]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Egypt</strong><p>Deaths : 12500</p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [30.8,26.8]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Singapore</strong><p>Only 30 deaths due Covid -19 with more than 60k patients recoverd.</p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [103.8,1.35]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Thailand</strong><p>Less than 100 deaths with 28k recovered cases.</p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [100.992541,15.870032]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>JAPAN</strong><p>Deaths : 9469 with the total number of confirmed cases upto 512169</p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [138.252924, 36.20]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Canada</strong><p>Deaths :23445 with nearly upto 1 millions recovered covid patients.</p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [-106.346771, 56.13]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Philippines</strong><p>Deaths :15594 and 700 thousands recovering.</p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [121.774017, 12.87]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Bangladesh</strong><p>Deaths : 10000 </p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [90.356331, 23.68]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Sweden</strong><p>Deaths : 13720</p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [18.643501,60.128]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Switzerland</strong><p>Deaths : 10488 , Confirmed Cases : 627968</p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [ 8.227511999999999, 46.818]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Iraq</strong><p>Deaths : 14836</p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [43.679291, 43.679291]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Pakistan</strong><p>Deaths : 15872</p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [69.34511599999999, 30.375]
}
},
{
    'type': 'Feature',
    'properties': {
        'description':
            '<strong>Norway</strong><p>Deaths : 706 with 90k patients being recovered.</p> '
},
'geometry': {
    'type': 'Point',
    'coordinates': [8.468945999999999,60.47202399999999]
}
},

                
            ]
    }
    });
// Add a layer showing the places.
map.addLayer({
    'id': 'places',
    'type': 'circle',
    'source': 'places',
    'paint': {
        'circle-color': '#4264fb',
        'circle-radius': 7,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
    }
});

// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mouseenter', 'places', function (e) {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = 'pointer';

    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
});

map.on('mouseleave', 'places', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
});
});




