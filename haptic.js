AFRAME.registerComponent('markerhandler', {

  init: function() {
      const animatedMarker = document.querySelector("#animated-marker");
      const aEntity = document.querySelector("#animated-model");

      // every click, we make our model grow in size :)
      animatedMarker.addEventListener('click', function(ev, target){
          const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
          if (aEntity && intersectedElement === aEntity) {
            alert("clicked!");
              //const scale = aEntity.getAttribute('scale');
              //Object.keys(scale).forEach((key) => scale[key] = scale[key] + 0.2);
              //aEntity.setAttribute('scale', scale);
          }
      });
}});
               
               
               
               
               
               // a-image based icon

               /* const icon = document.createElement('a-box');
                icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
                icon.setAttribute('name', place.name);
                icon.setAttribute('color', 'yellow');
                icon.setAttribute('depth', '10');
                icon.setAttribute('height', '10');
                icon.setAttribute('width', '10');
                icon.setAttribute('look-at', '[gps-camera]');
                icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));
                
                ///var name = icon.getAttribute('id');
               
                 // Change name into a string for web speech api
                 //const distanceMsg = document.querySelector('[gps-entity-place]').getAttribute('distanceMsg');
                 /*function log() {
                     document.querySelector('.log').innerHTML = distanceMsg;
                     //speechSynthesis.speak(new SpeechSynthesisUtterance(name));
                   };*/
                   
