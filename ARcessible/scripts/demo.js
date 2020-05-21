

//Give this conponenet to marker to show alerts found and lost events
AFRAME.registerComponent('accessible', {
  init: function () {
    var marker = this.el;
    var readmarker = marker.getAttribute('alt'); 
    var scene = document.querySelector('body'); 
    var gesture = new Hammer(scene);

  //Tap behaviour
        gesture.on('tap', function(ev) {
          if(marker.object3D.visible == false){
            speechSynthesis.cancel();
            speechSynthesis.speak(new SpeechSynthesisUtterance('Look Around')); //cue for users to look around for an object
            window.navigator.vibrate(200);} 
      else if(marker.object3D.visible == true) {
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance(readmarker)); //description for object
        window.navigator.vibrate(200);
      }});
 //Double tap behaviour 
      gesture.on('doubletap', function(ev) {
        if(marker.object3D.visible == false){
            speechSynthesis.cancel();
            speechSynthesis.speak(new SpeechSynthesisUtterance('Look Around')); //cue for users to look around for an object
            window.navigator.vibrate(200);} 
      else if(marker.object3D.visible == true) {
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance('page reload')); //description for function
        window.navigator.vibrate(200);
        location.reload();
      }});

  //Behaviour when objects are found
    marker.addEventListener('markerFound', function() {

      var markerId = marker.id;
      speechSynthesis.cancel();
      speechSynthesis.speak(new SpeechSynthesisUtterance(readmarker.concat('Double tap to interact'))); //cue for users to interact with the detected object
        
    });


  //Behaviour when objects are lost 
    marker.addEventListener('markerLost', function() {
      speechSynthesis.cancel();
      speechSynthesis.speak(new SpeechSynthesisUtterance('Nothing here')); //cue for users to figure out where the objects are potentially located in relation to camera 
      window.navigator.vibrate(200);   
      
    });

    

   /* marker.addEventListener('nomarker', function() {
      //alert('markerfound'); // For testing
      scene.addEventListener('click', function () {
      speechSynthesis.cancel();
      speechSynthesis.speak(new SpeechSynthesisUtterance('Look Around')); 
      window.navigator.vibrate(200);          
    });*/
 
  }
});

