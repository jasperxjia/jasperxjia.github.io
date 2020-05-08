





function log() {
  document.getElementById("log").innerHTML = place.name;
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

}
