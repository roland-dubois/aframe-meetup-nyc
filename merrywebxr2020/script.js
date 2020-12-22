/* global AFRAME, THREE */
if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

var scene = document.querySelector('a-scene');
var soundsStarted = false;
var triggerSnd = document.querySelector('#triggersnd');


var playSounds = function () {
  var jingleSnd = document.querySelector('[sound]');
  jingleSnd.components.sound.playSound();
  soundsStarted = true;
}

var clickBody = function () {
  console.log("body click.");
  if (soundsStarted !== true) {
      playSounds();
      triggerSnd.style.display = "none";
  }
}


AFRAME.registerComponent('wobble-normal', {
	schema: {},
	tick: function (t) {
		if (!this.el.components.material.material.normalMap) return;
		this.el.components.material.material.normalMap.offset.x += 0.0001 * Math.sin(t/5000);
		this.el.components.material.material.normalMap.offset.y += 0.0001 * Math.cos(t/4000);
		this.el.components.material.material.normalScale.x = 0.5 + 0.5 * Math.cos(t/1000);
		this.el.components.material.material.normalScale.x = 0.5 + 0.5 * Math.sin(t/1200);
	}
})

AFRAME.registerPrimitive('a-ocean-plane', {
	defaultComponents: {
		geometry: {
			primitive: 'circle',
			radius: 0.98
    },
		rotation: '-90 0 0',
		material: {
			shader: 'standard',
			color: '#78c6d2',
			metalness: 0.7,
			roughness: 0.2,
			normalMap: 'url(https://cdn.glitch.com/ebd68b9a-c8b4-4979-b001-4a28d54aa04c%2Fwaternormals.jpg?v=1608182336081)',
			normalTextureRepeat: '4 4',
			normalTextureOffset: '0 0',
			normalScale: '0.5 0.5',
      emissive: '#002c33',
      side: 'double',
			opacity: 0.75
		},
		'wobble-normal': {}
	},
});


scene.addEventListener('loaded', function () {
      triggerSnd.style.display = "block"; 
});

