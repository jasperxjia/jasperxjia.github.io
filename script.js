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
        &limit=10
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

                // add place icon
                    

                    const text = document.createElement('a-link');

                    
                    text.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
                    text.setAttribute('title', place.name);
                    text.setAttribute('image', './assets/map-marker.png');
                    text.setAttribute('scale', '10 10 10');  

                

                    text.addEventListener('loaded', () => {
                        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'));
                                            
                    });

                    var name = text.getAttribute('title');

                    // Change name into a string for web speech api
                    
                    function log() {
                        document.querySelector('.log').innerHTML = name
                        //speechSynthesis.speak(new SpeechSynthesisUtterance(name));
                      };


                      text.addEventListener('mouseenter',  () =>  {
                          log();
                          text.setAttribute('scale', '20 20 20'); 
                          
                    });

                      
                    scene.appendChild(text);


                    

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



                