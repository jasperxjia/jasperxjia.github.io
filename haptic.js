                // a-image based icon

                const icon = document.createElement('a-box');
                icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
                icon.setAttribute('name', place.name);
                icon.setAttribute('color', 'yellow');
                icon.setAttribute('depth', '10');
                icon.setAttribute('height', '10');
                icon.setAttribute('width', '10');
                icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
                
                ///var name = icon.getAttribute('id');
               
                 // Change name into a string for web speech api
                 //const distanceMsg = document.querySelector('[gps-entity-place]').getAttribute('distanceMsg');
                 /*function log() {
                     document.querySelector('.log').innerHTML = distanceMsg;
                     //speechSynthesis.speak(new SpeechSynthesisUtterance(name));
                   };*/
                   

                 scene.appendChild(icon);
                 look-at="[gps-camera]"