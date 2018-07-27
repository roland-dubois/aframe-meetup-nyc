/* global AFRAME, THREE */
if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

//////////////////////////////////////////////////////////////////////////////
//      arjs-hit-testing
//////////////////////////////////////////////////////////////////////////////
AFRAME.registerComponent('arjs-portal-door', {
    schema: {
        url : {     // Url of the content - may be video or image
            type: 'string',
        },
        doorWidth : {   // width of the door
            type: 'number',
            default: 1,
        },
        doorHeight : {  // height of the door
            type: 'number',
            default: 2,
        },
    },
    init: function () {
        var _this = this

        var doorWidth = this.data.doorWidth
        var doorHeight = this.data.doorHeight
        var imageURL = this.data.url

        var portalDoor = new THREEx.Portal360(imageURL, doorWidth, doorHeight)
        this._portalDoor = portalDoor

        this.el.object3D.add(portalDoor.object3d)
    },
    tick: function(){
        this._portalDoor.update()
    }
})

AFRAME.registerComponent('shadow-material', {
    init() {
        this.material = new THREE.ShadowMaterial();
        this.el.getOrCreateObject3D('mesh').material = this.material;
        this.material.opacity = 0.3;
    }
});

AFRAME.registerComponent("hoverable", {
    init: function () {
        var el = this.el,
            logo1 = document.getElementById('logo1'),
            logo2 = document.getElementById('logo2'),
            bulb = document.getElementById('bulb');
        el.addEventListener("mouseenter", function () {
            this.setAttribute("scale", " 0.35 0.35 0.35");
            bulb.setAttribute("position", "0 0.5 0");
            bulb.setAttribute("radius", "0.15");
            logo1.setAttribute("radius", "0.5");
            logo2.setAttribute("radius", "0.5");
            logo1.setAttribute("height", "0.5");
            logo2.setAttribute("height", "0.5");
            bulb.components.light.light.intensity = 0.75;
        });
        el.addEventListener("mouseleave", function () {
            this.setAttribute("scale", "0.25 0.25 0.25");
            bulb.setAttribute("position", "0 0.25 0");
            bulb.setAttribute("radius", "0.085");
            logo1.setAttribute("radius", "0.05");
            logo2.setAttribute("radius", "0.05");
            logo1.setAttribute("height", "0.05");
            logo2.setAttribute("height", "0.05");
            bulb.components.light.light.intensity = 0.25;
        });

    }
});

//Optical crosshair (Custom Cursor Element).
AFRAME.registerComponent("crosshair", {
    init: function () {
        //Base Ring Background.
        var _00 = document.createElement("a-entity");
        _00.setAttribute('geometry', 'primitive: ring; radiusInner: 0.017; radiusOuter: 0.021;');
        _00.setAttribute('material', 'shader: flat; color: #fff');
        this.el.appendChild(_00);

        //Four Corners of crosshair background.
        var _a1 = document.createElement("a-entity");
        _a1.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:41; thetaLength:8;');
        _a1.setAttribute('material', 'shader: flat; color: #fff');
        this.el.appendChild(_a1);

        var _b1 = document.createElement("a-entity");
        _b1.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:131; thetaLength:8;');
        _b1.setAttribute('material', 'shader: flat; color: #fff');
        this.el.appendChild(_b1);

        var _c1 = document.createElement("a-entity");
        _c1.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:221; thetaLength:8;');
        _c1.setAttribute('material', 'shader: flat; color: #fff');
        this.el.appendChild(_c1);

        var _d1 = document.createElement("a-entity");
        _d1.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:311; thetaLength:8;');
        _d1.setAttribute('material', 'shader: flat; color: #fff');
        this.el.appendChild(_d1);

        //Base ring foreground.
        var _01 = document.createElement("a-entity");
        _01.setAttribute('geometry', 'primitive: ring; radiusInner: 0.018; radiusOuter: 0.02;');
        _01.setAttribute('material', 'shader: flat; color: #EE5C4E');
        this.el.appendChild(_01);

        var _a2 = document.createElement("a-entity");
        _a2.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:43; thetaLength:4;');
        _a2.setAttribute('material', 'shader: flat; color: #EE5C4E');
        this.el.appendChild(_a2);

        var _b2 = document.createElement("a-entity");
        _b2.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:133; thetaLength:4;');
        _b2.setAttribute('material', 'shader: flat; color: #EE5C4E');
        this.el.appendChild(_b2);

        var _c2 = document.createElement("a-entity");
        _c2.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:223; thetaLength:4;');
        _c2.setAttribute('material', 'shader: flat; color: #EE5C4E');
        this.el.appendChild(_c2);

        var _d2 = document.createElement("a-entity");
        _d2.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:313; thetaLength:4;');
        _d2.setAttribute('material', 'shader: flat; color: #EE5C4E');
        this.el.appendChild(_d2);
    }
});