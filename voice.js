
AFRAME.registerComponent('markerhandler', {

  init: function() {
      const animatedMarker = document.querySelector("#animated-marker");
      const aEntity = document.querySelector("#animated-model");

      // every click, we make our model grow in size :)
      animatedMarker.addEventListener('click', function(ev, target){
          const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
          if (aEntity && intersectedElement === aEntity) {
              const scale = aEntity.getAttribute('scale');
              Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
              aEntity.setAttribute('scale', scale);
          }
      });
}});




/*function log() {

  var voicetext = text.title;
  document.querySelector('.log').innerHTML = voicetext;

}


/*var synth = window.speechSynthesis;

var inputTxt = document.querySelector(text.title);


function speak(){
    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    if (inputTxt.value !== '') {
    var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }
    
    synth.speak(utterThis);
  }
}

inputTxt.onload = function(event) {
  event.preventDefault();

  speak();

}*/
