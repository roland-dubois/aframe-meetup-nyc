#Agenda

* Welcome to A-Frame NYC - Introduction & Definitions
* VR Market - Current Tools and Gadgets
* Retrospective on VR on the Web
* WebGL & WebVR & A-Frame
* Workshop Session
* Close up Session

---

# Introduction to VR on the Web

---

# VR Setup[^*] 
![inline,fit](images/computerBasedVRSetup.png) 
![inline,fit](images/mobileBasedVRSetup.png) ![inline,fit](images/standaloneVR.png) 

[^*]: Illustrations from Mozilla

---

# VR Experiences
New considerations for VR app development
**Focus on User Experience**
- Stereoscopic vision & interpupillary distance (IPD)
- Head tracking & degrees of freedom (DoF)
- Cone of focus & field of view (FOV)
- 3D positional audio
- Latency & frame rate (frames per second / FPS)
**Focus on User Comfort**
- Eye strain
- Motion sickness

---

### Degrees of Freedom, Stereoscopic Vision & Interpupillary Distance[^*]

![inline,fit](images/positionOrientationVR.png)

![inline,fit](images/FOVrelatedProperties.png) ![inline,fit](images/createStereoscopicImages.png)

[^*]: Illustrations from Mozilla

---

# Native VR Devices (PC & Console )

![inline,fit](images/vive.png)![inline,fit](images/rift.png)![inline,fit](images/psvr.png)![inline,fit](images/windowsmr.png)![inline,fit](images/fove.png)![inline,fit](images/magicleap.png)![inline,fit](images/osvr.png)

HTC Vive (room-scale VR), Oculus Rift, Playstation VR, Windows MR (Acer), Magic Leap, Fove, Razer OSVR

---

# Mobile VR Devices (Smartphone)

![inline,fit](images/gear.png)![inline,fit](images/daydream.png)![inline,fit](images/cardboard.png)![inline,fit](images/bobovr.png)![inline,fit](images/homido.png)![inline,fit](images/wearality.png)![inline,fit](images/homido-mini.png)

Samsung Gear VR
Daydream
Cardboard
Hundreds of third-party headsets

---

# VR Programming 

- Unreal Engine (C++)
- Unity (C#)
- Source Engine (C++)
- WebVR (WebXR Device API)

---

# VR Distribution

- [SteamVR](https://steamcommunity.com/steamvr)
- [Google Play](https://play.google.com/store/search?q=vr&c=apps&hl=en)
- [Oculus Store](https://www.oculus.com/experiences/rift/)
- [The Rift Arcade](http://www.theriftarcade.com/)
- [V](http://www.hellov.io/) "open alternative" to SteamVR

---

![fit](images/webVRExamples.png)

---

# Why WebVR?

* No app store ecosystem, distribution via internet
* Mobile & desktop automatically supported
* Uses current tools and libraries for JS
* Easy switch between VR & non-VR mode
* Interfacing with hardware through the browser

---

### Progressive Enhancement by Arturo Paracuellos 

![autoplay](https://www.youtube.com/watch?v=jMcLQoMR78w)

---

# Virtual Reality on the Web 
## A Retrospective 1/2

* 1994 VRML - first attempt to create an internet-based 3D language. (Mark Pesce presented the Labyrinth demo he developed with Tony Parisi and Peter Kennard.)
* VRML2 (1997) - added many features (animation) and later was succeeded by X3D
Problem of VRML: plugin-based technology that only came preinstalled on IE

---

# Virtual Reality on the Web 
## A Retrospective 2/2

* 2003 OpenGL ES - cross-language and multi-platform 3D graphics API. 
Hardware accelerated rendering of 3D objects.
* WebGL 1.0 introduced by Mozilla based on OpenGL ES uses DOM (canvas element)
* X3D (web3d.org) introduced [X3DOM](https://www.x3dom.org/) 

---

# Most popular WebGL Engines

* [Three.js](https://threejs.org/) by [Ricardo Cabello](http://mrdoob.com/) in 2010
* [Babylon.js](http://www.babylonjs.com/)
* [p5*js](https://p5js.org/)
* [argon.js](https://www.argonjs.io/)
* [Scene.js](http://scenejs.org/)
* [Turbulenz](http://biz.turbulenz.com/developers)

![right,fit](images/webgllibraries.png)

---

### Frameworks & Online WebVR Platforms 
- [A-Frame](https://aframe.io/)
- [ReactVR](https://facebook.github.io/react-vr/)
- [Primrose](https://primrosevr.com/)
- [Janus VR](http://janusvr.com/)
- [AWS Sumerian](https://aws.amazon.com/sumerian/)
- [Vizor.io](https://site.vizor.io/)
- [Clara.io](https://clara.io/)
- [Play Canvas](https://playcanvas.com/)
- [Cl3ver](https://www.cl3ver.com/)

![right,fit](images/webvrplatforms.png)

---

![inline,fit](images/stackchart.png)

**Stackoverflow score growth over time by tag comparison**

[WebGL Framework Comparison](http://bnjm.github.io/WebGL-framework-comparison/)

---

# What is WebVR?
## WebVR is a *experimental* Javascript API that provides interfaces to VR hardware to allow developers to build compelling, comfortable VR experiences on the web.

---

# WebVR 
**WebVR v1.1** (Legacy) *Editor’s Draft, 12/12/17*
- deviceOrientation
- VRDisplay object handles almost everything
- available on multiple platforms

**WebXR Device API (WebVR 2.0)** *Editor’s Draft, 01/11/18*
- not backwards compatible
- device support 
- introduction of VRDevice & VRSession to replace VRDisplay
- read [Explainer doc](https://github.com/w3c/webvr/blob/master/explainer.md)!

---

# Goals of WebVR

* support for accessing virtual reality (VR) and augmented reality (AR) devices, including sensors and head-mounted displays, on the Web.
* Detect available virtual reality devices. 
* Query the device’s capabilities. 
* Poll the device’s position and orientation. 
* Display imagery on the device at the appropriate frame rate.

---

# Non-goals of WebVR

* Define how a virtual reality browser would work. 
* Take full advantage of augmented reality devices. 
* Build “The Metaverse.”

*Check out [https://webvr.rocks/](https://webvr.rocks/) for support updates*

---

# Demo Comparison [A](https://roland-dubois.github.io/aframe-meetup-nyc/demos/01_ThreeJS_photosphere.html) & [B](https://roland-dubois.github.io/aframe-meetup-nyc/demos/02_A-Frame_photosphere.html)

---

# Three.js and WebVR
![left,fill](images/threejs.png)

### comparison with

# A-Frame
![right,inline](images/aframe.png)

---

# A-Frame

* a 3DML (3D markup language) like X3Dom and ReactVR
* DOM-based Entity-Component System => declarative & extensible (similar to Unity/UE4/PlayCanvas)

**The A-Frame Stack**:

![inline](images/aframe_stack.png)

---

# A-Frame
## Entity-Component System

![inline,fit](images/aframe_ecs.png)

---

# A-Frame

- Entities are HTML elements (i.e., `<a-entity> `)
- Components are HTML attributes, set on the entity

```html 
<body>
	<a-scene>
		<a-entity geometry="primitive:box" material="color:#c00">
		</a-entity>
	</a-scene>
</body>
```
---

# Entity

* general purpose objects (e.g. create a player, ball, or field)
* they inherently have a position, rotation and scale in a scene

```html 
	<a-entity 
		geometry="primitive:box; 
				  width:0.2; 
				  height:0.3;
				  depth:0.5;" 
		material="color:#c00" 
		position="0 0 -1" 
		rotation="0 30 30" 
		material="color:#c00">
	</a-entity>

```

---

# Primitives (concise, semantic building blocks)

```html 
	<a-entity geometry="primitive:box; 
						width:0.2; 
						height:0.3; 
						depth:0.5;" 
			  material="color:#c00">
	</a-entity>
```


```html 
	<a-box width="0.2" 
		   height="0.3" 
		   depth="0.5" 
		   material="color:#c00">
	</a-box>
```

---

# Mixins

```html 
	<a-mixin id="box" 
			 geometry="primitive:box; 
					   width:0.2; 
					   height:0.3; 
					   depth:0.5;" 
			 material="color:#c00">					 
	</a-mixin>

	<a-entity mixin="box">
	</a-entity>
```

---

# Custom Components

```javascript 
	AFRAME.registerComponent('foo', {
		schema: {
			bar: {type: 'number'},
			baz: {type: 'string'}
		},
		init: function () {
			// Do something when component is plugged in.
		},
		update: function () {
			// Do something when component's data is updated.
		}
	});
```

---

# Gaze-Based Control

![inline,fit](images/interactivepatterns_displayreticle.png)

---

# Gaze-Based Cursor Interactions

```javascript 
  	AFRAME.registerComponent('clickable', {
    	init: function () {
          	var el = this.el;
          	el.addEventListener('mouseenter', function () {
            	el.setAttribute('color', '#f00');
          	});
          	el.addEventListener('mouseleave', function () {
            	el.setAttribute('color', '#fff');
          	});
          	el.addEventListener('click', function () {
            	el.setAttribute('material', 'src' , 'assets/football.png');
          	});
        } 
  	});
```

```html 
	<a-sphere clickable src="assets/basketball.png" radius="0.5" color="#fff"></a-sphere>
	<a-camera><a-cursor></a-cursor></a-camera>
```

---

# A-Frame Component Registry

![inline,fit](images/registry.png)

---

# https://aframe.io/docs/0.7.0/

![filtered,fill](images/documentation.png)

---

## A-Frame Inspector <br/> `[control]+[option]+[i]`

![filtered,fill](images/inspector.png)

---

# Create responsibly!

![autoplay](https://www.youtube.com/watch?v=E42mNt_vsz8)

--- 

# *It’s code time!* Here’s what we’re building:

* [github.com/roland-dubois/aframe-meetup-nyc](https://roland-dubois.github.io/aframe-meetup-nyc/)
* [XAMPP](https://www.apachefriends.org/index.html), [MAMP](https://www.mamp.info/en/) or ``` $ python -m SimpleHTTPServer ``` 
* [**JSBin**](https://jsbin.com) or [**Glitch**](https://glitch.com/)

![inline,fit](images/scene1.png)![inline,fit](images/scene2.png)![inline,fit](images/scene3.png)

---

# Close up discussion

[Mozilla is hosting a new WebVR Experience Challenge](https://challenges.mozilla.community/webvr-challenge/) 
Submissions close **April 2nd**!

* Group projects
* Challenges / Codathons
* Deeper looks into A-Frame Components

---

# Resources

* [A-Frame Slack](https://aframevr-slack.herokuapp.com/)
* [A-Frame Component Registry](https://aframe.io/aframe-registry/)
* [vr.mozilla.org](https://vr.mozilla.org/)
* [WebVR API](https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API)
* [The UX of VR](http://www.uxofvr.com/)

**Get In Touch**
@rolanddubois | rolanddubois.com