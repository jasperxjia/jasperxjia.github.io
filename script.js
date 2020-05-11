const loadPlaces = function (coords) {
    // COMMENT FOLLOWING LINE IF YOU WANT TO USE STATIC DATA AND ADD COORDINATES IN THE FOLLOWING 'PLACES' ARRAY
    const method = 'api';

    const PLACES = [
        {
            name: "Your place name",
            location: {
                lat: 0, // add here latitude if using static data
                lng: 0, // add here longitude if using static data
            }
        },
    ];

    if (method === 'api') {
        return loadPlaceFromAPIs(coords);
    }

    return Promise.resolve(PLACES);
};

// getting places from REST APIs
function loadPlaceFromAPIs(position) {
    const params = {
        radius: 300,    // search places not farther than this value (in meters)
        clientId: 'YWZGWLNCFMGGIDF5FABJITRA0J04P2TRANBIXLWNHZIAF4A5', // Bindou Web AR App ID
        clientSecret: 'DJLNEE3G0GKV0Y0KHA1UTMINYQE20PVCDULSWXJR0WAV0SV4', // Bindou Web AR App Secret
        version: '20300101',    // foursquare versioning, required but unuseful for this demo
    };

    // CORS Proxy to avoid CORS problems
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';

    // Foursquare API
    const endpoint = `${corsProxy}https://api.foursquare.com/v2/venues/search?intent=checkin
        &ll=${position.latitude},${position.longitude}
        &radius=${params.radius}
        &client_id=${params.clientId}
        &client_secret=${params.clientSecret}
        &limit=20
        &v=${params.version}`;
    return fetch(endpoint)
        .then((res) => {
            return res.json()
                .then((resp) => {
                    return resp.response.venues;
                })
        })
        .catch((err) => {
            console.error('Error with places API', err);
        })
};


window.onload = () => {
    const scene = document.querySelector('a-scene');

    // first get current user location
    return navigator.geolocation.getCurrentPosition(function (position) {

        // than use it to load from remote APIs some places nearby
        loadPlaces(position.coords)
            .then((places) => {
                places.forEach((place) => {
                    const latitude = place.location.lat;
                    const longitude = place.location.lng;

                // a-link based icon
                    
/*
                    
                    // add place name
                    const text = document.createElement('a-link');
                    text.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
                    text.setAttribute('title', place.name);
                    text.setAttribute('href', '');
                    text.setAttribute('scale', '10 10 10');
                   
                    text.addEventListener('loaded', () => {
                        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
                    });


                    
                    const name = text.getAttribute('title');
                   
 */
                  
                // a-image based icon

                   const icon = document.createElement('a-box');
                   icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
                   icon.setAttribute('id', place.name);
                   icon.setAttribute('src', './assets/map-marker.png');
                   
           
                   // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
                   icon.setAttribute('depth', '10');
                   icon.setAttribute('height', '10');
                   icon.setAttribute('width', '10');
                   icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
                   
                   //var name = icon.getAttribute('id');

                   const clickListener = function (ev) {
                    ev.stopPropagation();
                    ev.preventDefault();
        
                    const name = ev.target.getAttribute('id');
        
                    const el = ev.detail.intersection && ev.detail.intersection.object.el;
        
                    if (el && el === ev.target) {
                        const label = document.createElement('span');
                        const container = document.createElement('div');
                        container.setAttribute('id', 'place-label');
                        label.innerText = name;
                        container.appendChild(label);
                        document.p.appendChild(container);
        
                        setTimeout(() => {
                            container.parentElement.removeChild(container);
                        }, 1500);
                    }
                };
        
                icon.addEventListener('click', clickListener);
                  
                    // Change name into a string for web speech api
                    
                    /*function log() {
                        document.querySelector('.log').innerHTML = name;
                        //speechSynthesis.speak(new SpeechSynthesisUtterance(name));
                      };


                    icon.addEventListener('cursor-hovered', log());*/

                    scene.appendChild(icon);


                    

                });
            })
    },
        /*(err) => console.error('Error in retrieving position', err),
        {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 27000,
        }*/
    );


};



                