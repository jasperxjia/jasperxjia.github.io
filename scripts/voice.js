
  
   
   
   
   
   
   
   
   
       <a-cursor color="tomato" material="shader:flat;opacity:0.8" geometry="primitive:ring; radiusOuter:0.016;radiusInner:0.01;segmentsTheta:64" position="-0.5 0 -1"></a-cursor>
   
   
   
   
   
   
   
   
   
   /*AFRAME.registerComponent("clickhandler", {
      init: function() {
        // we add the click event listener to any instance of this component
        this.el.addEventListener("click", () => {
          alert("Clicked!");
        });
      }
    });

    /*
                    text.setAttribute('title', place.name);
                    text.setAttribute('href', '');
                    text.setAttribute('scale', '10 10 10');
                    text.setAttribute('backgroundColor', '#00FFFF');
                    text.setAttribute('image', './assets/icons/map-marker.png');
                    text.setAttribute('on', 'click');


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
