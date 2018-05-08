
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

AFRAME.registerComponent('wall-shadow', {
  schema: {
    // Add properties.
  },

  init: function () {


    var top = document.createElement("a-entity");
    top.setAttribute('geometry', 'primitive: plane; width:1; height:1;');
    top.setAttribute('shadow', 'receive: true');
    top.setAttribute('material', 'shader:flat; opacity:0.3; color: white');
    top.setAttribute('position', '0 1 0.01');
    // top.el.getOrCreateObject3D('mesh').material = new THREE.ShadowMaterial({
    //   // ...
    // });
    // top.material.opacity = 0.3;
    this.el.appendChild(top);

    var left = document.createElement("a-entity");
    left.setAttribute('geometry', 'primitive: plane; width:1; height:1;');
    left.setAttribute('shadow', 'receive: true');
    left.setAttribute('material', 'shader:flat; opacity:0.3; color: white');
    left.setAttribute('position', '-1 0 0.01');
    // left.el.getOrCreateObject3D('mesh').material = new THREE.ShadowMaterial({
    //   // ...
    // });
    // left.material.opacity = 0.3;
    this.el.appendChild(left);

    var right = document.createElement("a-entity");
    right.setAttribute('geometry', 'primitive: plane; width:1; height:1;');
    right.setAttribute('shadow', 'receive: true');
    right.setAttribute('material', 'shader:flat; opacity:0.3; color: white');
    right.setAttribute('position', '1 0 0.01');
    // right.el.getOrCreateObject3D('mesh').material = new THREE.ShadowMaterial({
    //   // ...
    // });
    // right.material.opacity = 0.3;
    this.el.appendChild(right);

    var bottom = document.createElement("a-entity");
    bottom.setAttribute('geometry', 'primitive: plane; width:1; height:1;');
    bottom.setAttribute('shadow', 'receive: true');
    bottom.setAttribute('material', 'shader:flat; opacity:0.3; color: white');
    bottom.setAttribute('position', '0 -1 0.01');
    // bottom.el.getOrCreateObject3D('mesh').material = new THREE.ShadowMaterial({
    //   // ...
    // });
    // bottom.material.opacity = 0.3;
    this.el.appendChild(bottom);


    this.el.setAttribute('geometry', 'primitive: plane; width:0.1; height:0.1;');
    this.el.setAttribute('position', '0 0.5 0.01');
    // this.el.setAttribute('shadow', 'receive: true');

    this.material = this.el.getOrCreateObject3D('mesh').material = new THREE.ShadowMaterial({
      // ...
    });
    this.material.opacity = 0.3;

  },

  update: function () {
    // Update `this.material`.
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
        _01.setAttribute('material', 'shader: flat; color: #EC8F2D');
        this.el.appendChild(_01);

        var _a2 = document.createElement("a-entity");
        _a2.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:43; thetaLength:4;');
        _a2.setAttribute('material', 'shader: flat; color: #EC8F2D');
        this.el.appendChild(_a2);

        var _b2 = document.createElement("a-entity");
        _b2.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:133; thetaLength:4;');
        _b2.setAttribute('material', 'shader: flat; color: #EC8F2D');
        this.el.appendChild(_b2);

        var _c2 = document.createElement("a-entity");
        _c2.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:223; thetaLength:4;');
        _c2.setAttribute('material', 'shader: flat; color: #EC8F2D');
        this.el.appendChild(_c2);

        var _d2 = document.createElement("a-entity");
        _d2.setAttribute('geometry', 'primitive: ring; radiusInner: 0.01; radiusOuter: 0.02; thetaStart:313; thetaLength:4;');
        _d2.setAttribute('material', 'shader: flat; color: #EC8F2D');
        this.el.appendChild(_d2);
    }
});