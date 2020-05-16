

//Give this conponenet to marker to show alerts found and lost events
AFRAME.registerComponent('markerevents', {
    init: function () {
      var marker = this.el;
      var readmarker = marker.getAttribute('alt');
      var scene = document.querySelector('body');   
       

      marker.addEventListener('markerFound', function() {

        var markerId = marker.id;
        //alert('markerfound'); // For testing
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance(readmarker.concat('found')));
        speechSynthesis.speak(new SpeechSynthesisUtterance('Double Click to interact'));
        window.navigator.vibrate(200);


        scene.addEventListener('click', function () {
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance(readmarker)); 
        window.navigator.vibrate(200);});
          
      });

      marker.addEventListener('markerLost', function() {
        //alert('markerLost');// For testing
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance('Nothing here')); //show left/right relative position through rotation-reader 
        window.navigator.vibrate(200);   
        
      });

      marker.addEventListener('nomarker', function() {

        //alert('markerfound'); // For testing
        scene.addEventListener('click', function () {
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance('Look Around')); 
        window.navigator.vibrate(200);

      });
          
      });

    }
  });


  AFRAME.registerComponent('rotation-reader', {
/**
* We use IIFE (immediately-invoked function expression) to only allocate one
* vector or euler and not re-create on every tick to save memory.
*/
tick: (function () {
var position = new THREE.Vector3();
var quaternion = new THREE.Quaternion();

return function () {
  this.el.object3D.getWorldPosition(position);
  this.el.object3D.getWorldQuaternion(quaternion);
  // position and rotation now contain vector and quaternion in world space.
};
})
});

//Give this conponenet to clickable objects 

/*  AFRAME.registerComponent('clickable-model', {
  init: function () {

    let model = this.el;
    let readmodel = model.getAttribute('alt');

               //Use this line if no text needed

    model.addEventListener('click', function (event) {
      speechSynthesis.speak(new SpeechSynthesisUtterance(readmodel)); 
        window.navigator.vibrate(200);


        /* enable rest when text needed

    const textbox = document.getElementById('text-box');
    var text = textbox.setAttribute('value',readmodel);   
    const readtext = textbox.getAttribute('value');

    model.addEventListener('click', function (event) {
      if(textbox.object3D.visible == false && event.detail.cursorEl){
        textbox.object3D.visible = true;
        speechSynthesis.speak(new SpeechSynthesisUtterance(readmodel)); 
        window.navigator.vibrate(200);}

      else{
        textbox.object3D.visible = false;
        speechSynthesis.speak(new SpeechSynthesisUtterance(readmodel)); 
        window.navigator.vibrate(200);
      
      } });

      textbox.addEventListener('click', function (event) {
        speechSynthesis.speak(new SpeechSynthesisUtterance(readmodel)); 
        window.navigator.vibrate(200);
      } );  
       

    });

  }
}); */ 