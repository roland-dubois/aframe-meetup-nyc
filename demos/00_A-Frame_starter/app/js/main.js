/* global AFRAME, THREE */
if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('custom-component', {
  init: function () {
    var targetEl = this.el;    
  }
});
