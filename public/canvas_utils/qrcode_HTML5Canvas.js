/** Canvas realization **/

function playSound(id, loop, offset) {
	return createjs.Sound.play(id, {'interrupt':createjs.Sound.INTERRUPT_EARLY, 'loop': loop, 'offset': offset});
}

(function (cjs, an) {

let p; // shortcut to reference prototypes
const lib={};const ss={};const img={};
lib.ssMetadata = [
		{name:"qrcode_HTML5 Canvas_atlas_1", frames: [[0,0,1596,1520]]},
		{name:"qrcode_HTML5 Canvas_atlas_2", frames: [[965,935,972,194],[965,610,209,114],[0,1131,972,194],[965,726,209,114],[974,1131,972,194],[1487,1603,209,114],[0,1327,972,194],[1698,1603,209,114],[1041,1683,289,78],[1332,1719,283,78],[0,1638,1039,102],[0,1523,1092,113],[974,1327,1072,140],[965,842,214,51],[0,610,963,222],[0,834,963,222],[1094,1603,391,78],[1094,1469,798,132],[1883,0,143,144],[1202,0,679,549],[0,0,1200,608],[1202,551,750,382]]}
];

(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:

(lib.CachedBmp_17 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();

(lib.CachedBmp_16 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();

(lib.CachedBmp_15 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();

(lib.CachedBmp_14 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();

(lib.CachedBmp_13 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();

(lib.CachedBmp_12 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();

(lib.CachedBmp_11 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();

(lib.CachedBmp_10 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();

(lib.CachedBmp_9 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();

(lib.CachedBmp_8 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();

(lib.CachedBmp_7 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();

(lib.CachedBmp_6 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();

(lib.CachedBmp_5 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();

(lib.CachedBmp_4 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();

(lib.CachedBmp_3 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();

(lib.CachedBmp_2 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();

(lib.CachedBmp_1 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();

(lib.Bitmap9 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();

(lib.form = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();

(lib.Headervcard11 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();

(lib.Headervcard2 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();

(lib.QRCodeTrendsfor2020 = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();

(lib.QRкод = function() {
	this.initialize(ss["qrcode_HTML5 Canvas_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	const clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	const prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
}

(lib.SymbolButton22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	const props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D43E47").ss(48.2,1,1).p("EglfgQPMBK/AAAMAAAAgfMhK/AAAg");
	this.shape.setTransform(240,104);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D43E47").s().p("EglfAQQMAAAggfMBK/AAAMAAAAgfg");
	this.shape_1.setTransform(240,104);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SymbolButton22, new cjs.Rectangle(-24.1,-24.1,528.2,256.2), null);

(lib.SymbolButton2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	const props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF444F").ss(51.4,1,1).p("EglfgQPMBK/AAAMAAAAgfMhK/AAAg");
	this.shape.setTransform(240,104);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF444F").s().p("EglfAQQMAAAggfMBK/AAAMAAAAgfg");
	this.shape_1.setTransform(240,104);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SymbolButton2, new cjs.Rectangle(-25.7,-25.7,531.4,259.4), null);

(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	const props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Headervcard2();
	this.instance.setTransform(0,0,0.5696,0.5575);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,386.8,306.1), null);

(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	const props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.QRкод();
	this.instance.setTransform(0,0,0.7148,0.7225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,536.1,276), null);

(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	const props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.form();
	this.instance.setTransform(0,0,0.2078,0.2149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,331.7,326.7), null);

(lib.Symbol_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	const props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(0,0,0.4763,0.4242);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol_logo, new cjs.Rectangle(0,0,380.1,56), null);

(lib.QRCode = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	const props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Headervcard11();
	this.instance.setTransform(4,0.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D43E47").ss(1,1,1).p("AryrjIXlAAIAAXHI3lAAg");
	this.shape.setTransform(75.5,73.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AryLkIAA3HIXlAAIAAXHg");
	this.shape_1.setTransform(75.5,73.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.QRCode, new cjs.Rectangle(-1,-1,153,150), null);

(lib.SymbolForm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	const props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(165.8,163.3,1,1,0,0,0,165.8,163.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SymbolForm, new cjs.Rectangle(0,0,331.7,326.7), null);

(lib.SymbolButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	const props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.SymbolButton2();
	this.instance.setTransform(240,104,1,1,0,0,0,240,104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SymbolButton, new cjs.Rectangle(-25.7,-25.7,531.4,259.4), null);

(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	const props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(-156,46.3,0.5,0.5);

	this.instance_1 = new lib.SymbolButton();
	this.instance_1.setTransform(80.2,97.95,1.0125,0.8172,0,0,0,239.8,104);

	this.instance_2 = new lib.CachedBmp_10();
	this.instance_2.setTransform(30.3,18.25,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_13();
	this.instance_3.setTransform(-156,46.3,0.5,0.5);

	this.instance_4 = new lib.SymbolButton22();
	this.instance_4.setTransform(80.4,97.95,1.0125,0.8173,0,0,0,240,104);

	this.instance_5 = new lib.CachedBmp_12();
	this.instance_5.setTransform(29.85,48.1,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_15();
	this.instance_6.setTransform(-156,46.3,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_14();
	this.instance_7.setTransform(29.85,48.1,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_17();
	this.instance_8.setTransform(-156,46.3,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_16();
	this.instance_9.setTransform(29.85,18.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{regY:104,scaleY:0.8172,y:97.95}},{t:this.instance}]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},1).to({state:[{t:this.instance_7},{t:this.instance_4},{t:this.instance_6}]},1).to({state:[{t:this.instance_9},{t:this.instance_1,p:{regY:103.8,scaleY:0.8173,y:97.8}},{t:this.instance_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.6,-8,538,212);

// stage content:
(lib.qrcode_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	const props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [128,163,443];
	// timeline functions:
	this.frame_128 = function() {
		this.stop();
		
		let _this = this;
		_this.botton.on('onclick', function(){
		_this.play();
		});

		_this.botton.on('click', function(){
		_this.play();
		});
	}
	this.frame_163 = function() {
		playSound("music_logo");
	}
	this.frame_443 = function() {
		playSound("music_logo");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(128).call(this.frame_128).wait(35).call(this.frame_163).wait(280).call(this.frame_443).wait(276));

	// textForm
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-396.8,323.25);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180).to({_off:false},0).wait(1).to({x:-328.95,y:323.1071},0).wait(1).to({x:-261.1,y:322.9643},0).wait(1).to({x:-193.25,y:322.8214},0).wait(1).to({x:-125.4,y:322.6786},0).wait(1).to({x:-57.55,y:322.5357},0).wait(1).to({x:10.3,y:322.3929},0).wait(1).to({x:78.15,y:322.25},0).wait(47).to({x:30.855},0).wait(1).to({x:-16.44},0).wait(1).to({x:-63.735},0).wait(1).to({x:-111.03},0).wait(1).to({x:-158.325},0).wait(1).to({x:-205.62},0).wait(1).to({x:-252.915},0).wait(1).to({x:-300.21},0).wait(1).to({x:-347.505},0).wait(1).to({x:-394.8},0).to({_off:true},1).wait(475));

	// logo
	this.instance_1 = new lib.Symbol_logo();
	this.instance_1.setTransform(277.1,222,1,1,0,0,0,190.1,28);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(623).to({_off:false},0).wait(81).to({alpha:0.9333},0).wait(1).to({alpha:0.8667},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7333},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5333},0).wait(1).to({alpha:0.4667},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.2667},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1333},0).wait(1).to({alpha:0.0667},0).wait(1).to({alpha:0},0).wait(1));

	// botton
	this.botton = new lib.button();
	this.botton.name = "botton";
	this.botton.setTransform(420.5,341.9,0.3547,0.2415,0,0,0,0.7,1.2);
	this.botton._off = true;
	new cjs.ButtonHelper(this.botton, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.botton).wait(127).to({_off:false},0).to({_off:true},36).wait(556));

	// textGenerate
	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(57.9,275.4,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(57.9,275.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},272).to({state:[{t:this.instance_3}]},14).to({state:[]},44).wait(389));

	// form
	this.instance_4 = new lib.SymbolForm();
	this.instance_4.setTransform(270.8,183.3,0.6201,0.6632,0,0,0,165.8,163.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(163).to({_off:false},0).wait(1).to({regY:163.3,scaleX:0.8101,scaleY:0.8316,y:183.35,alpha:0.5},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(15).to({regX:165.9,regY:163.5,scaleX:0.9217,scaleY:0.9327,x:269.95,y:173.7},0).wait(73).to({regX:166},0).wait(1).to({regX:165.8,regY:163.3,scaleX:1.0393,scaleY:1.0466,x:269.25,y:152.3},0).wait(1).to({scaleX:1.1569,scaleY:1.1606,x:268.75,y:131.05},0).wait(1).to({scaleX:1.2745,scaleY:1.2745,x:268.25,y:109.85},0).wait(1).to({scaleX:1.3921,scaleY:1.3885,x:267.75,y:88.6},0).wait(1).to({scaleX:1.5097,scaleY:1.5025,x:267.25,y:67.35},0).wait(1).to({scaleX:1.6273,scaleY:1.6164,x:266.85,y:46.1},0).wait(1).to({scaleX:1.745,scaleY:1.7304,x:266.35,y:24.9},0).wait(1).to({scaleX:1.8626,scaleY:1.8444,x:265.85,y:3.7},0).wait(1).to({scaleX:1.9802,scaleY:1.9583,x:265.35,y:-17.55},0).wait(1).to({scaleX:2.0978,scaleY:2.0723,x:264.85,y:-38.8},0).wait(1).to({scaleX:2.2154,scaleY:2.1862,x:264.35,y:-60.05},0).wait(1).to({scaleX:2.333,scaleY:2.3002,x:263.9,y:-81.3},0).wait(1).to({scaleX:2.4506,scaleY:2.4142,x:263.4,y:-102.5},0).wait(1).to({scaleX:2.5682,scaleY:2.5281,x:262.9,y:-123.7},0).wait(1).to({scaleX:2.6858,scaleY:2.6421,x:262.4,y:-144.95},0).wait(1).to({scaleX:2.8034,scaleY:2.756,x:261.9,y:-166.2},0).wait(1).to({scaleX:2.921,scaleY:2.87,x:261.4,y:-187.45},0).wait(1).to({scaleX:3.0386,scaleY:2.984,x:260.95,y:-208.65},0).wait(1).to({scaleX:3.1563,scaleY:3.0979,x:260.45,y:-229.9},0).wait(57).to({_off:true},1).wait(389));

	// Collueagues
	this.instance_5 = new lib.QRCodeTrendsfor2020();
	this.instance_5.setTransform(2,2,0.455,0.5314);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(529).to({_off:false},0).to({_off:true},94).wait(96));

	// textEnjoy
	this.instance_6 = new lib.CachedBmp_4();
	this.instance_6.setTransform(180.05,131.85);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(623).to({_off:false},0).wait(1).to({x:180.0375,y:131.8375},0).wait(1).to({x:180.025,y:131.825},0).wait(1).to({x:180.0125,y:131.8125},0).wait(1).to({x:180,y:131.8},0).wait(1).to({x:179.9875,y:131.7875},0).wait(1).to({x:179.975,y:131.775},0).wait(1).to({x:179.9625,y:131.7625},0).wait(1).to({x:179.95,y:131.75},0).wait(1).to({x:179.9375,y:131.7375},0).wait(1).to({x:179.925,y:131.725},0).wait(1).to({x:179.9125,y:131.7125},0).wait(1).to({x:179.9,y:131.7},0).wait(1).to({x:179.8875,y:131.6875},0).wait(1).to({x:179.875,y:131.675},0).wait(1).to({x:179.8625,y:131.6625},0).wait(1).to({x:179.85,y:131.65},0).wait(1).to({x:179.8375,y:131.6375},0).wait(1).to({x:179.825,y:131.625},0).wait(1).to({x:179.8125,y:131.6125},0).wait(1).to({x:179.8,y:131.6},0).wait(1).to({x:179.7875,y:131.5875},0).wait(1).to({x:179.775,y:131.575},0).wait(1).to({x:179.7625,y:131.5625},0).wait(1).to({x:179.75,y:131.55},0).wait(1).to({x:179.7375,y:131.5375},0).wait(1).to({x:179.725,y:131.525},0).wait(1).to({x:179.7125,y:131.5125},0).wait(1).to({x:179.7,y:131.5},0).wait(1).to({x:179.6875,y:131.4875},0).wait(1).to({x:179.675,y:131.475},0).wait(1).to({x:179.6625,y:131.4625},0).wait(1).to({x:179.65,y:131.45},0).wait(1).to({x:179.6375,y:131.4375},0).wait(1).to({x:179.625,y:131.425},0).wait(1).to({x:179.6125,y:131.4125},0).wait(1).to({x:179.6,y:131.4},0).wait(1).to({x:179.5875,y:131.3875},0).wait(1).to({x:179.575,y:131.375},0).wait(1).to({x:179.5625,y:131.3625},0).wait(1).to({x:179.55,y:131.35},0).wait(1).to({x:179.5375,y:131.3375},0).wait(1).to({x:179.525,y:131.325},0).wait(1).to({x:179.5125,y:131.3125},0).wait(1).to({x:179.5,y:131.3},0).wait(1).to({x:179.4875,y:131.2875},0).wait(1).to({x:179.475,y:131.275},0).wait(1).to({x:179.4625,y:131.2625},0).wait(1).to({x:179.45,y:131.25},0).wait(1).to({x:179.4375,y:131.2375},0).wait(1).to({x:179.425,y:131.225},0).wait(1).to({x:179.4125,y:131.2125},0).wait(1).to({x:179.4,y:131.2},0).wait(1).to({x:179.3875,y:131.1875},0).wait(1).to({x:179.375,y:131.175},0).wait(1).to({x:179.3625,y:131.1625},0).wait(1).to({x:179.35,y:131.15},0).wait(1).to({x:179.3375,y:131.1375},0).wait(1).to({x:179.325,y:131.125},0).wait(1).to({x:179.3125,y:131.1125},0).wait(1).to({x:179.3,y:131.1},0).wait(1).to({x:179.2875,y:131.0875},0).wait(1).to({x:179.275,y:131.075},0).wait(1).to({x:179.2625,y:131.0625},0).wait(1).to({x:179.25,y:131.05},0).wait(1).to({x:179.2375,y:131.0375},0).wait(1).to({x:179.225,y:131.025},0).wait(1).to({x:179.2125,y:131.0125},0).wait(1).to({x:179.2,y:131},0).wait(1).to({x:179.1875,y:130.9875},0).wait(1).to({x:179.175,y:130.975},0).wait(1).to({x:179.1625,y:130.9625},0).wait(1).to({x:179.15,y:130.95},0).wait(1).to({x:179.1375,y:130.9375},0).wait(1).to({x:179.125,y:130.925},0).wait(1).to({x:179.1125,y:130.9125},0).wait(1).to({x:179.1,y:130.9},0).wait(1).to({x:179.0875,y:130.8875},0).wait(1).to({x:179.075,y:130.875},0).wait(1).to({x:179.0625,y:130.8625},0).wait(1).to({x:179.05,y:130.85},0).wait(1).to({x:152.6467,y:130.6867},0).wait(1).to({x:126.2433,y:130.5233},0).wait(1).to({x:99.84,y:130.36},0).wait(1).to({x:73.4367,y:130.1967},0).wait(1).to({x:47.0333,y:130.0333},0).wait(1).to({x:20.63,y:129.87},0).wait(1).to({x:-5.7733,y:129.7067},0).wait(1).to({x:-32.1767,y:129.5433},0).wait(1).to({x:-58.58,y:129.38},0).wait(1).to({x:-84.9833,y:129.2167},0).wait(1).to({x:-111.3867,y:129.0533},0).wait(1).to({x:-137.79,y:128.89},0).wait(1).to({x:-164.1933,y:128.7267},0).wait(1).to({x:-190.5967,y:128.5633},0).wait(1).to({x:-217,y:128.4},0).wait(1));

	// textColleagues
	this.instance_7 = new lib.CachedBmp_5();
	this.instance_7.setTransform(35.05,325.1,0.5,0.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(529).to({_off:false},0).to({_off:true},94).wait(96));

	// newContact
	this.instance_8 = new lib.Symbol3();
	this.instance_8.setTransform(276.3,153,1,1,0,0,0,193.3,153);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(430).to({_off:false},0).wait(1).to({regX:193.4,x:276.4},0).wait(79).to({scaleX:0.9676,scaleY:0.9656,alpha:0.9474},0).wait(1).to({scaleX:0.9352,scaleY:0.9312,x:276.35,alpha:0.8947},0).wait(1).to({scaleX:0.9028,scaleY:0.8968,y:152.95,alpha:0.8421},0).wait(1).to({scaleX:0.8704,scaleY:0.8624,x:276.4,alpha:0.7895},0).wait(1).to({scaleX:0.838,scaleY:0.8281,x:276.35,y:153,alpha:0.7368},0).wait(1).to({scaleX:0.8056,scaleY:0.7937,alpha:0.6842},0).wait(1).to({scaleX:0.7732,scaleY:0.7593,x:276.4,y:152.95,alpha:0.6316},0).wait(1).to({scaleX:0.7407,scaleY:0.7249,x:276.35,alpha:0.5789},0).wait(1).to({scaleX:0.7083,scaleY:0.6905,y:153,alpha:0.5263},0).wait(1).to({scaleX:0.6759,scaleY:0.6561,x:276.4,alpha:0.4737},0).wait(1).to({scaleX:0.6435,scaleY:0.6217,x:276.35,y:152.95,alpha:0.4211},0).wait(1).to({scaleX:0.6111,scaleY:0.5873,alpha:0.3684},0).wait(1).to({scaleX:0.5787,scaleY:0.5529,alpha:0.3158},0).wait(1).to({scaleX:0.5463,scaleY:0.5186,y:153,alpha:0.2632},0).wait(1).to({scaleX:0.5139,scaleY:0.4842,alpha:0.2105},0).wait(1).to({scaleX:0.4815,scaleY:0.4498,y:152.95,alpha:0.1579},0).wait(1).to({scaleX:0.4491,scaleY:0.4154,alpha:0.1053},0).wait(1).to({scaleX:0.4167,scaleY:0.381,y:153,alpha:0.0526},0).wait(1).to({scaleX:0.3843,scaleY:0.3466,alpha:0},0).to({_off:true},1).wait(190));

	// textScan
	this.instance_9 = new lib.CachedBmp_6();
	this.instance_9.setTransform(7,321,0.5,0.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(330).to({_off:false},0).to({_off:true},100).wait(289));

	// textNewContact
	this.instance_10 = new lib.CachedBmp_7();
	this.instance_10.setTransform(15.9,318.6,0.5,0.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(430).to({_off:false},0).to({_off:true},99).wait(190));

	// scan
	this.instance_11 = new lib.Symbol2();
	this.instance_11.setTransform(275,172,1,1,0,0,0,268,138);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(330).to({_off:false},0).wait(75).to({scaleX:0.9137,scaleY:0.914,x:274.95},0).wait(1).to({scaleX:0.8273,scaleY:0.828,y:171.95},0).wait(1).to({scaleX:0.741,scaleY:0.7419,x:275,y:172},0).wait(1).to({scaleX:0.6546,scaleY:0.6559,y:171.95},0).wait(1).to({scaleX:0.5683,scaleY:0.5699,x:274.95,y:172},0).wait(1).to({scaleX:0.482,scaleY:0.4839,y:171.95},0).wait(1).to({scaleX:0.3956,scaleY:0.3978,x:275},0).wait(1).to({scaleX:0.3824,scaleY:0.3837,alpha:0.9444},0).wait(1).to({scaleX:0.3691,scaleY:0.3696,alpha:0.8889},0).wait(1).to({scaleX:0.3559,scaleY:0.3555,x:274.95,alpha:0.8333},0).wait(1).to({scaleX:0.3426,scaleY:0.3415,alpha:0.7778},0).wait(1).to({scaleX:0.3294,scaleY:0.3274,alpha:0.7222},0).wait(1).to({scaleX:0.3161,scaleY:0.3133,y:172,alpha:0.6667},0).wait(1).to({scaleX:0.3029,scaleY:0.2992,alpha:0.6111},0).wait(1).to({scaleX:0.2896,scaleY:0.2851,alpha:0.5556},0).wait(1).to({scaleX:0.2764,scaleY:0.271,alpha:0.5},0).wait(1).to({scaleX:0.2631,scaleY:0.2569,y:171.95,alpha:0.4444},0).wait(1).to({scaleX:0.2499,scaleY:0.2428,alpha:0.3889},0).wait(1).to({scaleX:0.2366,scaleY:0.2287,alpha:0.3333},0).wait(1).to({scaleX:0.2234,scaleY:0.2146,alpha:0.2778},0).wait(1).to({scaleX:0.2101,scaleY:0.2005,alpha:0.2222},0).wait(1).to({scaleX:0.1969,scaleY:0.1864,y:172,alpha:0.1667},0).wait(1).to({scaleX:0.1836,scaleY:0.1723,alpha:0.1111},0).wait(1).to({scaleX:0.1704,scaleY:0.1582,alpha:0.0556},0).wait(1).to({scaleX:0.1571,scaleY:0.1441,alpha:0},0).to({_off:true},1).wait(289));

	// welcome
	this.instance_12 = new lib.CachedBmp_8();
	this.instance_12.setTransform(-281.8,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({x:-269.6559,y:20.8706},0).wait(1).to({x:-257.5118,y:20.8412},0).wait(1).to({x:-245.3676,y:20.8118},0).wait(1).to({x:-233.2235,y:20.7824},0).wait(1).to({x:-221.0794,y:20.7529},0).wait(1).to({x:-208.9353,y:20.7235},0).wait(1).to({x:-196.7912,y:20.6941},0).wait(1).to({x:-184.6471,y:20.6647},0).wait(1).to({x:-172.5029,y:20.6353},0).wait(1).to({x:-160.3588,y:20.6059},0).wait(1).to({x:-148.2147,y:20.5765},0).wait(1).to({x:-136.0706,y:20.5471},0).wait(1).to({x:-123.9265,y:20.5176},0).wait(1).to({x:-111.7824,y:20.4882},0).wait(1).to({x:-99.6382,y:20.4588},0).wait(1).to({x:-87.4941,y:20.4294},0).wait(1).to({x:-75.35,y:20.4},0).wait(1).to({x:-63.2059,y:20.3706},0).wait(1).to({x:-51.0618,y:20.3412},0).wait(1).to({x:-38.9176,y:20.3118},0).wait(1).to({x:-26.7735,y:20.2824},0).wait(1).to({x:-14.6294,y:20.2529},0).wait(1).to({x:-2.4853,y:20.2235},0).wait(1).to({x:9.6588,y:20.1941},0).wait(1).to({x:21.8029,y:20.1647},0).wait(1).to({x:33.9471,y:20.1353},0).wait(1).to({x:46.0912,y:20.1059},0).wait(1).to({x:58.2353,y:20.0765},0).wait(1).to({x:70.3794,y:20.0471},0).wait(1).to({x:82.5235,y:20.0176},0).wait(1).to({x:94.6676,y:19.9882},0).wait(1).to({x:106.8118,y:19.9588},0).wait(1).to({x:118.9559,y:19.9294},0).wait(1).to({x:131.1,y:19.9},0).wait(1).to({x:131.1004,y:19.9004},0).wait(1).to({x:131.1009,y:19.9008},0).wait(1).to({x:131.1013,y:19.9013},0).wait(1).to({x:131.1017,y:19.9017},0).wait(1).to({x:131.1021,y:19.9021},0).wait(1).to({x:131.1026,y:19.9025},0).wait(1).to({x:131.103,y:19.9029},0).wait(1).to({x:131.1034,y:19.9034},0).wait(1).to({x:131.1038,y:19.9038},0).wait(1).to({x:131.1043,y:19.9042},0).wait(1).to({x:131.1047,y:19.9046},0).wait(1).to({x:131.1051,y:19.9051},0).wait(1).to({x:131.1055,y:19.9055},0).wait(1).to({x:131.106,y:19.9059},0).wait(1).to({x:131.1064,y:19.9063},0).wait(1).to({x:131.1068,y:19.9067},0).wait(1).to({x:131.1072,y:19.9072},0).wait(1).to({x:131.1077,y:19.9076},0).wait(1).to({x:131.1081,y:19.908},0).wait(1).to({x:131.1085,y:19.9084},0).wait(1).to({x:131.1089,y:19.9088},0).wait(1).to({x:131.1094,y:19.9093},0).wait(1).to({x:131.1098,y:19.9097},0).wait(1).to({x:131.1102,y:19.9101},0).wait(1).to({x:131.1106,y:19.9105},0).wait(1).to({x:131.1111,y:19.911},0).wait(1).to({x:131.1115,y:19.9114},0).wait(1).to({x:131.1119,y:19.9118},0).wait(1).to({x:131.1123,y:19.9122},0).wait(1).to({x:131.1128,y:19.9126},0).wait(1).to({x:131.1132,y:19.9131},0).wait(1).to({x:131.1136,y:19.9135},0).wait(1).to({x:131.114,y:19.9139},0).wait(1).to({x:131.1145,y:19.9143},0).wait(1).to({x:131.1149,y:19.9147},0).wait(1).to({x:131.1153,y:19.9152},0).wait(1).to({x:131.1157,y:19.9156},0).wait(1).to({x:131.1162,y:19.916},0).wait(1).to({x:131.1166,y:19.9164},0).wait(1).to({x:131.117,y:19.9169},0).wait(1).to({x:131.1174,y:19.9173},0).wait(1).to({x:131.1179,y:19.9177},0).wait(1).to({x:131.1183,y:19.9181},0).wait(1).to({x:131.1187,y:19.9185},0).wait(1).to({x:131.1191,y:19.919},0).wait(1).to({x:131.1196,y:19.9194},0).wait(1).to({x:131.12,y:19.9198},0).wait(1).to({x:131.1204,y:19.9202},0).wait(1).to({x:131.1209,y:19.9206},0).wait(1).to({x:131.1213,y:19.9211},0).wait(1).to({x:131.1217,y:19.9215},0).wait(1).to({x:131.1221,y:19.9219},0).wait(1).to({x:131.1226,y:19.9223},0).wait(1).to({x:131.123,y:19.9228},0).wait(1).to({x:131.1234,y:19.9232},0).wait(1).to({x:131.1238,y:19.9236},0).wait(1).to({x:131.1243,y:19.924},0).wait(1).to({x:131.1247,y:19.9244},0).wait(1).to({x:131.1251,y:19.9249},0).wait(1).to({x:131.1255,y:19.9253},0).wait(1).to({x:131.126,y:19.9257},0).wait(1).to({x:131.1264,y:19.9261},0).wait(1).to({x:131.1268,y:19.9265},0).wait(1).to({x:131.1272,y:19.927},0).wait(1).to({x:131.1277,y:19.9274},0).wait(1).to({x:131.1281,y:19.9278},0).wait(1).to({x:131.1285,y:19.9282},0).wait(1).to({x:131.1289,y:19.9286},0).wait(1).to({x:131.1294,y:19.9291},0).wait(1).to({x:131.1298,y:19.9295},0).wait(1).to({x:131.1302,y:19.9299},0).wait(1).to({x:131.1306,y:19.9303},0).wait(1).to({x:131.1311,y:19.9308},0).wait(1).to({x:131.1315,y:19.9312},0).wait(1).to({x:131.1319,y:19.9316},0).wait(1).to({x:131.1323,y:19.932},0).wait(1).to({x:131.1328,y:19.9324},0).wait(1).to({x:131.1332,y:19.9329},0).wait(1).to({x:131.1336,y:19.9333},0).wait(1).to({x:131.134,y:19.9337},0).wait(1).to({x:131.1345,y:19.9341},0).wait(1).to({x:131.1349,y:19.9345},0).wait(1).to({x:131.1353,y:19.935},0).wait(1).to({x:131.1357,y:19.9354},0).wait(1).to({x:131.1362,y:19.9358},0).wait(1).to({x:131.1366,y:19.9362},0).wait(1).to({x:131.137,y:19.9367},0).wait(1).to({x:131.1374,y:19.9371},0).wait(1).to({x:131.1379,y:19.9375},0).wait(1).to({x:131.1383,y:19.9379},0).wait(1).to({x:131.1387,y:19.9383},0).wait(1).to({x:131.1391,y:19.9388},0).wait(1).to({x:131.1396,y:19.9392},0).wait(1).to({x:131.14,y:19.9396},0).wait(1).to({x:123.2181,y:19.9638},0).wait(1).to({x:115.2962,y:19.9881},0).wait(1).to({x:107.3742,y:20.0123},0).wait(1).to({x:99.4523,y:20.0366},0).wait(1).to({x:91.5304,y:20.0608},0).wait(1).to({x:83.6085,y:20.085},0).wait(1).to({x:75.6865,y:20.1093},0).wait(1).to({x:67.7646,y:20.1335},0).wait(1).to({x:59.8427,y:20.1577},0).wait(1).to({x:51.9208,y:20.182},0).wait(1).to({x:43.9988,y:20.2062},0).wait(1).to({x:36.0769,y:20.2305},0).wait(1).to({x:28.155,y:20.2547},0).wait(1).to({x:20.2331,y:20.2789},0).wait(1).to({x:12.3112,y:20.3032},0).wait(1).to({x:4.3892,y:20.3274},0).wait(1).to({x:-3.5327,y:20.3517},0).wait(1).to({x:-11.4546,y:20.3759},0).wait(1).to({x:-19.3765,y:20.4001},0).wait(1).to({x:-27.2985,y:20.4244},0).wait(1).to({x:-35.2204,y:20.4486},0).wait(1).to({x:-43.1423,y:20.4728},0).wait(1).to({x:-51.0642,y:20.4971},0).wait(1).to({x:-58.9862,y:20.5213},0).wait(1).to({x:-66.9081,y:20.5456},0).wait(1).to({x:-74.83,y:20.5698},0).wait(1).to({x:-82.7519,y:20.594},0).wait(1).to({x:-90.6738,y:20.6183},0).wait(1).to({x:-98.5958,y:20.6425},0).wait(1).to({x:-106.5177,y:20.6668},0).wait(1).to({x:-114.4396,y:20.691},0).wait(1).to({x:-122.3615,y:20.7152},0).wait(1).to({x:-130.2835,y:20.7395},0).wait(1).to({x:-138.2054,y:20.7637},0).wait(1).to({x:-146.1273,y:20.7879},0).wait(1).to({x:-154.0492,y:20.8122},0).wait(1).to({x:-161.9712,y:20.8364},0).wait(1).to({x:-169.8931,y:20.8607},0).wait(1).to({x:-177.815,y:20.8849},0).wait(1).to({x:-185.7369,y:20.9091},0).wait(1).to({x:-193.6588,y:20.9334},0).wait(1).to({x:-201.5808,y:20.9576},0).wait(1).to({x:-209.5027,y:20.9819},0).wait(1).to({x:-217.4246,y:21.0061},0).wait(1).to({x:-225.3465,y:21.0303},0).wait(1).to({x:-233.2685,y:21.0546},0).wait(1).to({x:-241.1904,y:21.0788},0).wait(1).to({x:-249.1123,y:21.103},0).wait(1).to({x:-257.0342,y:21.1273},0).wait(1).to({x:-264.9562,y:21.1515},0).wait(1).to({x:-272.8781,y:21.1758},0).wait(1).to({x:-280.8,y:21.2},0).to({_off:true},1).wait(538));

	// welcomeQRCode
	this.instance_13 = new lib.CachedBmp_9();
	this.instance_13.setTransform(-283.05,98.65);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(24).to({_off:false},0).wait(1).to({x:-271.6959,y:98.623},0).wait(1).to({x:-260.3419,y:98.5959},0).wait(1).to({x:-248.9878,y:98.5689},0).wait(1).to({x:-237.6338,y:98.5419},0).wait(1).to({x:-226.2797,y:98.5149},0).wait(1).to({x:-214.9257,y:98.4878},0).wait(1).to({x:-203.5716,y:98.4608},0).wait(1).to({x:-192.2176,y:98.4338},0).wait(1).to({x:-180.8635,y:98.4068},0).wait(1).to({x:-169.5095,y:98.3797},0).wait(1).to({x:-158.1554,y:98.3527},0).wait(1).to({x:-146.8014,y:98.3257},0).wait(1).to({x:-135.4473,y:98.2986},0).wait(1).to({x:-124.0932,y:98.2716},0).wait(1).to({x:-112.7392,y:98.2446},0).wait(1).to({x:-101.3851,y:98.2176},0).wait(1).to({x:-90.0311,y:98.1905},0).wait(1).to({x:-78.677,y:98.1635},0).wait(1).to({x:-67.323,y:98.1365},0).wait(1).to({x:-55.9689,y:98.1095},0).wait(1).to({x:-44.6149,y:98.0824},0).wait(1).to({x:-33.2608,y:98.0554},0).wait(1).to({x:-21.9068,y:98.0284},0).wait(1).to({x:-10.5527,y:98.0014},0).wait(1).to({x:0.8014,y:97.9743},0).wait(1).to({x:12.1554,y:97.9473},0).wait(1).to({x:23.5095,y:97.9203},0).wait(1).to({x:34.8635,y:97.8932},0).wait(1).to({x:46.2176,y:97.8662},0).wait(1).to({x:57.5716,y:97.8392},0).wait(1).to({x:68.9257,y:97.8122},0).wait(1).to({x:80.2797,y:97.7851},0).wait(1).to({x:91.6338,y:97.7581},0).wait(1).to({x:102.9878,y:97.7311},0).wait(1).to({x:114.3419,y:97.7041},0).wait(1).to({x:125.6959,y:97.677},0).wait(1).to({x:137.05,y:97.65},0).wait(68).to({x:129.0144,y:97.675},0).wait(1).to({x:120.9788,y:97.7},0).wait(1).to({x:112.9433,y:97.725},0).wait(1).to({x:104.9077,y:97.75},0).wait(1).to({x:96.8721,y:97.775},0).wait(1).to({x:88.8365,y:97.8},0).wait(1).to({x:80.801,y:97.825},0).wait(1).to({x:72.7654,y:97.85},0).wait(1).to({x:64.7298,y:97.875},0).wait(1).to({x:56.6942,y:97.9},0).wait(1).to({x:48.6587,y:97.925},0).wait(1).to({x:40.6231,y:97.95},0).wait(1).to({x:32.5875,y:97.975},0).wait(1).to({x:24.5519,y:98},0).wait(1).to({x:16.5163,y:98.025},0).wait(1).to({x:8.4808,y:98.05},0).wait(1).to({x:0.4452,y:98.075},0).wait(1).to({x:-7.5904,y:98.1},0).wait(1).to({x:-15.626,y:98.125},0).wait(1).to({x:-23.6615,y:98.15},0).wait(1).to({x:-31.6971,y:98.175},0).wait(1).to({x:-39.7327,y:98.2},0).wait(1).to({x:-47.7683,y:98.225},0).wait(1).to({x:-55.8038,y:98.25},0).wait(1).to({x:-63.8394,y:98.275},0).wait(1).to({x:-71.875,y:98.3},0).wait(1).to({x:-79.9106,y:98.325},0).wait(1).to({x:-87.9462,y:98.35},0).wait(1).to({x:-95.9817,y:98.375},0).wait(1).to({x:-104.0173,y:98.4},0).wait(1).to({x:-112.0529,y:98.425},0).wait(1).to({x:-120.0885,y:98.45},0).wait(1).to({x:-128.124,y:98.475},0).wait(1).to({x:-136.1596,y:98.5},0).wait(1).to({x:-144.1952,y:98.525},0).wait(1).to({x:-152.2308,y:98.55},0).wait(1).to({x:-160.2663,y:98.575},0).wait(1).to({x:-168.3019,y:98.6},0).wait(1).to({x:-176.3375,y:98.625},0).wait(1).to({x:-184.3731,y:98.65},0).wait(1).to({x:-192.4087,y:98.675},0).wait(1).to({x:-200.4442,y:98.7},0).wait(1).to({x:-208.4798,y:98.725},0).wait(1).to({x:-216.5154,y:98.75},0).wait(1).to({x:-224.551,y:98.775},0).wait(1).to({x:-232.5865,y:98.8},0).wait(1).to({x:-240.6221,y:98.825},0).wait(1).to({x:-248.6577,y:98.85},0).wait(1).to({x:-256.6933,y:98.875},0).wait(1).to({x:-264.7288,y:98.9},0).wait(1).to({x:-272.7644,y:98.925},0).wait(1).to({x:-280.8,y:98.95},0).to({_off:true},1).wait(538));

	// QRcodeSymbol
	this.instance_14 = new lib.QRCode();
	this.instance_14.setTransform(-90.05,249.4,1,1,0,0,0,75.5,74);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(33).to({_off:false},0).wait(1).to({x:-73.95,y:249.65},0).wait(1).to({x:-57.85,y:249.9},0).wait(1).to({x:-41.75,y:250.15},0).wait(1).to({x:-25.65,y:250.45},0).wait(1).to({x:-9.55,y:250.7},0).wait(1).to({x:6.5,y:250.95},0).wait(1).to({x:22.6,y:251.25},0).wait(1).to({x:38.7,y:251.5},0).wait(1).to({x:54.8,y:251.75},0).wait(1).to({x:70.9,y:252.05},0).wait(1).to({x:86.95,y:252.3},0).wait(1).to({x:103,y:252.55},0).wait(1).to({x:119.1,y:252.8},0).wait(1).to({x:135.2,y:253.1},0).wait(1).to({x:151.3,y:253.35},0).wait(1).to({x:167.4,y:253.6},0).wait(1).to({x:183.5,y:253.9},0).wait(1).to({x:199.55,y:254.15},0).wait(1).to({x:215.65,y:254.4},0).wait(1).to({x:231.75,y:254.7},0).wait(1).to({x:247.85,y:254.95},0).wait(1).to({x:263.95,y:255.2},0).wait(1).to({x:280.05,y:255.5},0).wait(1).to({scaleX:0.9985,scaleY:0.9987,x:280,y:255.3},0).wait(1).to({scaleX:0.9971,scaleY:0.9974,y:255.1},0).wait(1).to({scaleX:0.9956,scaleY:0.9961,x:279.9,y:254.9},0).wait(1).to({scaleX:0.9941,scaleY:0.9947,y:254.75},0).wait(1).to({scaleX:0.9926,scaleY:0.9934,y:254.55},0).wait(1).to({scaleX:0.9912,scaleY:0.9921,x:279.85,y:254.35},0).wait(1).to({scaleX:0.9897,scaleY:0.9908,x:279.8,y:254.2},0).wait(1).to({scaleX:0.9882,scaleY:0.9895,y:254},0).wait(1).to({scaleX:0.9868,scaleY:0.9882,x:279.75,y:253.8},0).wait(1).to({scaleX:0.9853,scaleY:0.9869,y:253.7},0).wait(1).to({scaleX:0.9838,scaleY:0.9855,y:253.5},0).wait(1).to({scaleX:0.9823,scaleY:0.9842,x:279.65,y:253.3},0).wait(1).to({scaleX:0.9809,scaleY:0.9829,y:253.1},0).wait(1).to({scaleX:0.9794,scaleY:0.9816,y:252.95},0).wait(1).to({scaleX:0.9779,scaleY:0.9803,x:279.6,y:252.75},0).wait(1).to({scaleX:0.9765,scaleY:0.979,x:279.55,y:252.55},0).wait(1).to({scaleX:0.975,scaleY:0.9777,y:252.4},0).wait(1).to({scaleX:0.9735,scaleY:0.9764,x:279.5,y:252.2},0).wait(1).to({scaleX:0.972,scaleY:0.975,y:252},0).wait(1).to({scaleX:0.9706,scaleY:0.9737,y:251.85},0).wait(1).to({scaleX:0.9691,scaleY:0.9724,x:279.4,y:251.65},0).wait(1).to({scaleX:0.9676,scaleY:0.9711,y:251.45},0).wait(1).to({scaleX:0.9662,scaleY:0.9698,y:251.25},0).wait(1).to({scaleX:0.9647,scaleY:0.9685,x:279.35,y:251.1},0).wait(1).to({scaleX:0.9632,scaleY:0.9672,x:279.3,y:250.9},0).wait(1).to({scaleX:0.9617,scaleY:0.9658,y:250.7},0).wait(1).to({scaleX:0.9603,scaleY:0.9645,x:279.25,y:250.55},0).wait(1).to({scaleX:0.9588,scaleY:0.9632,y:250.4},0).wait(1).to({scaleX:0.9573,scaleY:0.9619,y:250.2},0).wait(1).to({scaleX:0.9559,scaleY:0.9606,x:279.15,y:250.05},0).wait(1).to({scaleX:0.9544,scaleY:0.9593,y:249.85},0).wait(1).to({scaleX:0.9529,scaleY:0.958,y:249.65},0).wait(1).to({scaleX:0.9514,scaleY:0.9566,x:279.1,y:249.5},0).wait(1).to({scaleX:0.95,scaleY:0.9553,x:279.05,y:249.3},0).wait(1).to({scaleX:0.9485,scaleY:0.954,y:249.1},0).wait(1).to({scaleX:0.947,scaleY:0.9527,x:279,y:248.9},0).wait(1).to({scaleX:0.9455,scaleY:0.9514,y:248.75},0).wait(1).to({scaleX:0.9441,scaleY:0.9501,y:248.55},0).wait(1).to({scaleX:0.9426,scaleY:0.9488,x:278.9,y:248.35},0).wait(1).to({scaleX:0.9411,scaleY:0.9475,y:248.2},0).wait(1).to({scaleX:0.9397,scaleY:0.9461,y:248},0).wait(1).to({scaleX:0.9382,scaleY:0.9448,x:278.85,y:247.8},0).wait(1).to({scaleX:0.9367,scaleY:0.9435,x:278.8,y:247.65},0).wait(1).to({scaleX:0.9352,scaleY:0.9422,y:247.45},0).wait(1).to({scaleX:0.9338,scaleY:0.9409,x:278.75,y:247.25},0).wait(1).to({scaleX:0.9323,scaleY:0.9396,y:247.1},0).wait(1).to({scaleX:0.9308,scaleY:0.9383,y:246.95},0).wait(1).to({scaleX:0.9294,scaleY:0.9369,x:278.65,y:246.75},0).wait(1).to({scaleX:0.9279,scaleY:0.9356,y:246.55},0).wait(1).to({scaleX:0.9264,scaleY:0.9343,y:246.4},0).wait(1).to({scaleX:0.9249,scaleY:0.933,x:278.6,y:246.2},0).wait(1).to({scaleX:0.9235,scaleY:0.9317,x:278.55,y:246},0).wait(1).to({scaleX:0.922,scaleY:0.9304,y:245.85},0).wait(1).to({scaleX:0.9205,scaleY:0.9291,x:278.5,y:245.65},0).wait(1).to({scaleX:0.9191,scaleY:0.9277,y:245.45},0).wait(1).to({scaleX:0.9176,scaleY:0.9264,y:245.3},0).wait(1).to({scaleX:0.9161,scaleY:0.9251,x:278.4,y:245.1},0).wait(1).to({scaleX:0.9146,scaleY:0.9238,y:244.9},0).wait(1).to({scaleX:0.9132,scaleY:0.9225,y:244.7},0).wait(1).to({scaleX:0.9117,scaleY:0.9212,x:278.35,y:244.55},0).wait(1).to({scaleX:0.9102,scaleY:0.9199,x:278.3,y:244.35},0).wait(1).to({scaleX:0.9088,scaleY:0.9185,y:244.15},0).wait(1).to({scaleX:0.9073,scaleY:0.9172,x:278.25,y:244},0).wait(1).to({scaleX:0.9058,scaleY:0.9159,y:243.85},0).wait(1).to({scaleX:0.9043,scaleY:0.9146,y:243.65},0).wait(1).to({scaleX:0.9029,scaleY:0.9133,x:278.15,y:243.5},0).wait(1).to({scaleX:0.9014,scaleY:0.912,y:243.3},0).wait(1).to({scaleX:0.8999,scaleY:0.9107,y:243.1},0).wait(1).to({scaleX:0.8985,scaleY:0.9094,x:278.1,y:242.9},0).wait(1).to({scaleX:0.897,scaleY:0.908,x:278.05,y:242.75},0).wait(1).to({scaleX:0.8955,scaleY:0.9067,y:242.55},0).wait(1).to({scaleX:0.894,scaleY:0.9054,x:278,y:242.35},0).wait(1).to({scaleX:0.8961,scaleY:0.9072,x:270.95,y:242.55},0).wait(1).to({scaleX:0.8981,scaleY:0.909,x:263.9,y:242.65},0).wait(1).to({scaleX:0.9002,scaleY:0.9109,x:256.85,y:242.85},0).wait(1).to({scaleX:0.9022,scaleY:0.9127,x:249.75,y:243},0).wait(1).to({scaleX:0.9042,scaleY:0.9145,x:242.7,y:243.15},0).wait(1).to({scaleX:0.9063,scaleY:0.9163,x:235.65,y:243.3},0).wait(1).to({scaleX:0.9083,scaleY:0.9181,x:228.65,y:243.5},0).wait(1).to({scaleX:0.9103,scaleY:0.92,x:221.55,y:243.65},0).wait(1).to({scaleX:0.9124,scaleY:0.9218,x:214.5,y:243.8},0).wait(1).to({scaleX:0.9144,scaleY:0.9236,x:207.45,y:243.95},0).wait(1).to({scaleX:0.9165,scaleY:0.9254,x:200.4,y:244.15},0).wait(1).to({scaleX:0.9185,scaleY:0.9272,x:193.3,y:244.25},0).wait(1).to({scaleX:0.9205,scaleY:0.9291,x:186.25,y:244.45},0).wait(1).to({scaleX:0.9226,scaleY:0.9309,x:179.2,y:244.6},0).wait(1).to({scaleX:0.9246,scaleY:0.9327,x:172.1,y:244.75},0).wait(1).to({scaleX:0.9266,scaleY:0.9345,x:165.05,y:244.9},0).wait(1).to({scaleX:0.9287,scaleY:0.9363,x:158,y:245.1},0).wait(1).to({scaleX:0.9307,scaleY:0.9382,x:150.95,y:245.2},0).wait(1).to({scaleX:0.9328,scaleY:0.94,x:143.85,y:245.4},0).wait(1).to({scaleX:0.9348,scaleY:0.9418,x:136.85,y:245.55},0).wait(1).to({scaleX:0.9368,scaleY:0.9436,x:129.8,y:245.75},0).wait(1).to({scaleX:0.9389,scaleY:0.9454,x:122.75,y:245.85},0).wait(1).to({scaleX:0.9409,scaleY:0.9472,x:115.65,y:246.05},0).wait(1).to({scaleX:0.9429,scaleY:0.9491,x:108.6,y:246.2},0).wait(1).to({scaleX:0.945,scaleY:0.9509,x:101.55,y:246.35},0).wait(1).to({scaleX:0.947,scaleY:0.9527,x:94.45,y:246.5},0).wait(1).to({scaleX:0.9491,scaleY:0.9545,x:87.4,y:246.7},0).wait(1).to({scaleX:0.9511,scaleY:0.9563,x:80.35,y:246.8},0).wait(1).to({scaleX:0.9531,scaleY:0.9582,x:73.3,y:247},0).wait(1).to({scaleX:0.9552,scaleY:0.96,x:66.25,y:247.15},0).wait(1).to({scaleX:0.9572,scaleY:0.9618,x:59.2,y:247.3},0).wait(1).to({scaleX:0.9592,scaleY:0.9636,x:52.15,y:247.45},0).wait(1).to({scaleX:0.9613,scaleY:0.9654,x:45.15,y:247.65},0).wait(1).to({scaleX:0.9633,scaleY:0.9673,x:38.05,y:247.8},0).wait(1).to({scaleX:0.9654,scaleY:0.9691,x:31,y:247.95},0).wait(1).to({scaleX:0.9674,scaleY:0.9709,x:23.95,y:248.1},0).wait(1).to({scaleX:0.9694,scaleY:0.9727,x:16.9,y:248.3},0).wait(1).to({scaleX:0.9715,scaleY:0.9745,x:9.8,y:248.4},0).wait(1).to({scaleX:0.9735,scaleY:0.9764,x:2.75,y:248.6},0).wait(1).to({scaleX:0.9755,scaleY:0.9782,x:-4.3,y:248.75},0).wait(1).to({scaleX:0.9776,scaleY:0.98,x:-11.4,y:248.9},0).wait(1).to({scaleX:0.9796,scaleY:0.9818,x:-18.45,y:249.05},0).wait(1).to({scaleX:0.9817,scaleY:0.9836,x:-25.5,y:249.25},0).wait(1).to({scaleX:0.9837,scaleY:0.9854,x:-32.55,y:249.35},0).wait(1).to({scaleX:0.9857,scaleY:0.9873,x:-39.65,y:249.55},0).wait(1).to({scaleX:0.9878,scaleY:0.9891,x:-46.65,y:249.7},0).wait(1).to({scaleX:0.9898,scaleY:0.9909,x:-53.7,y:249.9},0).wait(1).to({scaleX:0.9918,scaleY:0.9927,x:-60.75,y:250},0).wait(1).to({scaleX:0.9939,scaleY:0.9945,x:-67.85,y:250.2},0).wait(1).to({scaleX:0.9959,scaleY:0.9964,x:-74.9,y:250.35},0).wait(1).to({scaleX:0.998,scaleY:0.9982,x:-81.95,y:250.5},0).wait(1).to({scaleX:1,scaleY:1,x:-89.05,y:250.7},0).to({_off:true},1).wait(538));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-121.8,-535.8,905.5999999999999,937.0999999999999);
// library properties:
lib.properties = {
	id: '8C99FDDA396B42C4AE615FC0B7DBE3AB',
	width: 550,
	height: 400,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/qrcode_HTML5 Canvas_atlas_1.png?1643724918878", id:"qrcode_HTML5 Canvas_atlas_1"},
		{src:"images/qrcode_HTML5 Canvas_atlas_2.png?1643724918879", id:"qrcode_HTML5 Canvas_atlas_2"},
		{src:"sounds/music_logo.mp3?1643724918962", id:"music_logo"}
	],
	preloads: []
};

// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(const i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8C99FDDA396B42C4AE615FC0B7DBE3AB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(const j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	let lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		const w = lib.properties.width, h = lib.properties.height;			
		const iw = window.innerWidth, ih=window.innerHeight;			
		const pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		const stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		const target = event.target;
		if(target){
			if(target.filterCacheList){
				for(const index = 0; index < target.filterCacheList.length ; index++){
					const cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}
let canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

	(function() {
		canvas = document.getElementById("canvas");
		anim_container = document.getElementById("animation_container");
		dom_overlay_container = document.getElementById("dom_overlay_container");
		const comp=AdobeAn.getComposition("8C99FDDA396B42C4AE615FC0B7DBE3AB");
		const lib=comp.getLibrary();
		const loader = new createjs.LoadQueue(false);
		loader.installPlugin(createjs.Sound);
		loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
		loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
		loader.loadManifest(lib.properties.manifest);

		function handleFileLoad(evt, comp) {
			const images=comp.getImages();	
			if (evt && (evt.item.type == "image")) { 
				images[evt.item.id] = evt.result; 
			}	
		}

		function handleComplete(evt,comp) {
			const lib=comp.getLibrary();
			const ss=comp.getSpriteSheet();
			const queue = evt.target;
			const ssMetadata = lib.ssMetadata;
			for(i=0; i<ssMetadata.length; i++) {
				ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
			}
			const preloaderDiv = document.getElementById("_preload_div_");
			preloaderDiv.style.display = 'none';
			canvas.style.display = 'block';
			exportRoot = new lib.qrcode_HTML5Canvas();
			stage = new lib.Stage(canvas);
			stage.enableMouseOver();

			fnStartAnimation = function() {
				stage.addChild(exportRoot);
				createjs.Ticker.framerate = lib.properties.fps;
				createjs.Ticker.addEventListener("tick", stage);
			}	    

			AdobeAn.makeResponsive(false,'both',false,1,[canvas,preloaderDiv,anim_container,dom_overlay_container]);	
			AdobeAn.compositionLoaded(lib.properties.id);
			fnStartAnimation();
		}
	})();
})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;