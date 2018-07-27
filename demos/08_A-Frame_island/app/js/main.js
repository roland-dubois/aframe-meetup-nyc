/* global AFRAME, THREE */
if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('teleport-extras', {
  init: function () {
    var targetEl = this.el;

    //Create the touchstart event
    document.querySelector('a-scene').addEventListener('touchstart', function () {
      targetEl.emit('startteleport')
    })

    document.querySelector('a-scene').addEventListener('mousedown', function () {
      targetEl.emit('startteleport')
    })

    document.body.addEventListener('keydown', function (e) {
      if (e.keyCode == 32) {
        console.log('space key pressed!');
        targetEl.emit('startteleport');      
      }  
    })
    
    //Create the touchend event
    document.querySelector('a-scene').addEventListener('touchend', function () {
      targetEl.emit('endteleport')
    })
    
    document.querySelector('a-scene').addEventListener('mouseup', function () {
      targetEl.emit('endteleport')
    })
    
    document.body.addEventListener('keyup', function (e) {
      if (e.keyCode == 32) {
        console.log('space key released!');
        targetEl.emit('endteleport');      
      }  
    })

    
  }
});
