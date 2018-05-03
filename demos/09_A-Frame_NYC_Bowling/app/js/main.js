AFRAME.registerComponent('launchpad', {
    init: function () {
        var _this = this;
        var data = this.data;
        var el = this.el;
        var thisY = el.object3D.position.y;
	    var ball = document.querySelector('[bowlingball]');
		var newPos;

        el.setAttribute('material', 'transparent:true; opacity:0.5; src:#grid; repeat:12 8;'); 

        var ballPos = document.createElement("a-entity");
        ballPos.setAttribute('geometry', `primitive: ring; radiusInner: 0.7;radiusOuter: 0.75;`);
        ballPos.setAttribute('material', 'color:#ff2863;opacity:0.1;');
        ballPos.setAttribute('visible', 'false');
        ballPos.setAttribute('position', '0 0 0');
        el.appendChild(ballPos);
        this.ballPos = ballPos;

        var score = document.createElement("a-entity");
        score.setAttribute('geometry', 'primitive: plane; width: 6; height: 1;');
        score.setAttribute('material', 'shader: flat; opacity: 1; color: #ff2863');
        score.setAttribute('rotation', '0 0 0');
        score.setAttribute('position', '0 2.75 0');
        score.setAttribute('text', 'value', 'Click anywhere on the grid to launch the Bowling Ball');
        score.setAttribute('text', 'align', 'center');
        score.setAttribute('text', 'wrapCount', '30');
        this.el.appendChild(score);
        this.score = score;

      	el.addEventListener('mouseenter', function () {
        	el.setAttribute('material', 'opacity:0.3;'); 
	        ballPos.setAttribute('visible', 'true');
      	});
      	el.addEventListener('mouseleave', function () {
        	el.setAttribute('material', 'opacity:0.5;');  
	        ballPos.setAttribute('visible', 'false');
      	});      	
		el.addEventListener('click', function (evt) {
			var nPos = evt.detail.intersection.point;
	        ballPos.setAttribute('visible', 'false');
			ballPos.object3D.position.set(nPos.x, (nPos.y - thisY), nPos.z);
            
            ball.body.velocity.set(0, 0, 0);
            ball.body.angularVelocity.set(0, 0, 0);
            ball.body.quaternion.set(0, 0, 0, 1);
            ball.body.position.set(nPos.x, nPos.y, nPos.z);
			console.log(nPos.x +","+ nPos.y+","+ nPos.z);

		});
    },
});


AFRAME.registerComponent('bowlingball', {
	init: function () {
		this.el.addEventListener('collide', function (e) {
			console.log('bowlingball body #' + e.detail.body.id);

			// e.detail.target.el;  // Original entity (playerEl).
			// e.detail.body.el;    // Other entity, which playerEl touched.
			// e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
			// e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).

		});
	}
})