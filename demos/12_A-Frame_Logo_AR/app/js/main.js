/* global AFRAME, THREE */
if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}


AFRAME.registerComponent('tube', {
  schema: {
    color: {type: 'string', default: '#ff0000'},
    inner: {type: 'number', default: 0.8},
    outer: {type: 'number', default: 1},
    height: {type: 'number', default: 1}
  },
	init: function () {
	    var data = this.data;
		var el = this.el;  

        el.setAttribute('geometry', `primitive: cylinder; segmentsRadial:72; openEnded:true; height: ${data.height}; radius: ${data.outer};`);
        el.setAttribute('material', `side:front; color:${data.color};`);

        var inner = document.createElement("a-entity");
        inner.setAttribute('geometry', `primitive: cylinder; segmentsRadial:72; openEnded:true; height: ${data.height}; radius: ${data.inner};`);
        inner.setAttribute('material', `side:back; color:${data.color};`);
        el.appendChild(inner);

        var top = document.createElement("a-entity");
        top.setAttribute('geometry', `primitive: ring; segmentsTheta:72; radiusInner: ${data.inner}; radiusOuter: ${data.outer};`);
        top.setAttribute('material', `color:${data.color};`);
        top.setAttribute('rotation', '-90 0 0');
        top.setAttribute('position', `0 ${data.height/2} 0`);
        inner.appendChild(top);
	}
});

AFRAME.registerComponent('tubeset', {
  	schema: {
		radius: {type: 'number', default: 0.22},
		width: {type: 'number', default: 0.02},
		height: {type: 'number', default: 0.01}
  	},
	init: function () {
	    var data = this.data;
		var el = this.el;  
        var colors = [
            '#ee4c9b',
            '#ed2336',
            '#71a343',
            '#ede412',
            '#487cab',
            '#30a4d9',
            '#1f4f98']

        for(i = 0; i < colors.length; i++){
            var t = document.createElement("a-entity");
            t.setAttribute('tube', `color:${colors[i]}; height:${data.height}; outer:${data.radius-data.width*i}; inner:${data.radius-data.width*(i+1)};`);
            t.setAttribute('animation',`property: scale.y; delay:${600-(i*100)}; dur: 2000; easing: easeInOutElastic; from:20; to:1; elasticity:1000; startEvents:wave;`);
            el.appendChild(t);
        }
	}
});

AFRAME.registerComponent('barset', {
  	schema: {
		width: {type: 'number', default: 0.02},
		depth: {type: 'number', default: 0.73},
		height: {type: 'number', default: 0.011}
  	},
	init: function () {
	    var data = this.data;
		var el = this.el;  
        var colors = [
            '#ee4c9b',
            '#ed2336',
            '#71a343',
            '#ede412',
            '#487cab',
            '#30a4d9',
            '#1f4f98']

        for(i = 0; i < colors.length; i++){
            var b = document.createElement("a-entity");
            b.setAttribute('geometry', `primitive:box; width:${data.width}; height:${data.height}; depth:${data.depth};`);
            b.setAttribute('position', `${data.width*i} 0 0`)
            b.setAttribute('material', `color:${colors[i]};`);
            b.setAttribute('animation',`property: scale.y; delay:${i*100}; dur: 2000; easing: easeInOutElastic; from:20; to:1; elasticity:1000; startEvents:wave;`);
            el.appendChild(b);
        }   
	}

});

AFRAME.registerComponent('chime', {
    schema: {
        width: {type: 'number', default: 0.5},
        depth: {type: 'number', default: 0.5},
        pos: {type: 'string', default: '0 0 0'},
        snd: {type: 'string', default: ''}
    },  
    init: function () {
        var data = this.data;
        var el = this.el;  

        var box = document.createElement("a-entity");
        box.setAttribute('geometry', `primitive:box; width:${data.width}; height:0.25; depth:${data.depth};`);
        box.setAttribute('position', `${data.pos}`)
        box.setAttribute('material', `color:#fff;opacity:0`);
        el.appendChild(box);
        if(data.snd != ''){
            el.setAttribute('sound', `src: ${data.snd}; poolSize:10;`);
        }

        el.addEventListener('click', function (evt) {

            for(i = 0; i < el.children.length; i++){
                if(el.children[i].children.length > 0){
                    console.dir(el.children[i].children);
                    for(j = 0; j < el.children[i].children.length; j++){
                        el.children[i].children[j].emit('wave');
                    }
                }
            }

            this.components.sound.playSound();

        });       

    }

});