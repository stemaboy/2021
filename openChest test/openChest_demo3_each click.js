(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"openChest_demo3_each click_atlas_1", frames: [[991,902,628,142],[0,0,1600,900],[0,902,989,768]]},
		{name:"openChest_demo3_each click_atlas_2", frames: [[0,0,1600,900],[0,902,1600,900]]},
		{name:"openChest_demo3_each click_atlas_3", frames: [[0,0,1600,900],[0,902,1600,900]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib.CachedBmp_1 = function() {
	this.initialize(ss["openChest_demo3_each click_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.giphy_0 = function() {
	this.initialize(ss["openChest_demo3_each click_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.giphy_3 = function() {
	this.initialize(ss["openChest_demo3_each click_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.giphy_4 = function() {
	this.initialize(ss["openChest_demo3_each click_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.giphy_5 = function() {
	this.initialize(ss["openChest_demo3_each click_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.giphy_6 = function() {
	this.initialize(ss["openChest_demo3_each click_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.giphy_7 = function() {
	this.initialize(ss["openChest_demo3_each click_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.btn1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_3
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-146,-74,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("A7TMYIAA4wMA2nAAAIAAYwg");
	this.shape.setTransform(-6.65,-22.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.4,-101.9,349.5,158.5);


// stage content:
(lib.openChest_demo3_eachclick = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {open:1,close:14};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,7,13,23];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.NextBtn1.addEventListener("click", fl_MouseClickHandler.bind(this));
		var count=0
		function fl_MouseClickHandler()
		{
			// 啟動您的自訂程式碼
			// 範例程式碼會在輸出面板中顯示「已按下滑鼠」字樣。
			//alert("已按下滑鼠");
			// 結束您的自訂程式碼
			
			//this.nextFrame();
			//this.gotoAndPlay("open")
			var frameNumber = this.currentFrame+1
			this.gotoAndStop(frameNumber);
		}
	}
	this.frame_7 = function() {
		this.stop()
		
		this.NextBtn2.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// 啟動您的自訂程式碼
			// 範例程式碼會在輸出面板中顯示「已按下滑鼠」字樣。
		//	alert("已按下滑鼠");
			// 結束您的自訂程式碼
			this.gotoAndPlay("close")
		}
	}
	this.frame_13 = function() {
		this.stop()
		
		this.NextBtn2.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// 啟動您的自訂程式碼
			// 範例程式碼會在輸出面板中顯示「已按下滑鼠」字樣。
		//	alert("已按下滑鼠");
			// 結束您的自訂程式碼
			this.gotoAndPlay("close")
		}
	}
	this.frame_23 = function() {
		this.gotoAndStop(1)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(6).call(this.frame_13).wait(10).call(this.frame_23).wait(2));

	// 圖層_1
	this.instance = new lib.giphy_0();
	this.instance.setTransform(41,182,0.3533,0.3533);

	this.instance_1 = new lib.giphy_3();
	this.instance_1.setTransform(41,182,0.3533,0.3533);

	this.instance_2 = new lib.giphy_4();
	this.instance_2.setTransform(41,182,0.3533,0.3533);

	this.instance_3 = new lib.giphy_5();
	this.instance_3.setTransform(41,182,0.3533,0.3533);

	this.instance_4 = new lib.giphy_6();
	this.instance_4.setTransform(41,182,0.3533,0.3533);

	this.instance_5 = new lib.giphy_7();
	this.instance_5.setTransform(41,182,0.5716,0.5716);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(17));

	// btn
	this.NextBtn2 = new lib.btn1();
	this.NextBtn2.name = "NextBtn2";
	this.NextBtn2.setTransform(326.9,760.95);
	this.NextBtn2._off = true;
	new cjs.ButtonHelper(this.NextBtn2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.NextBtn2).wait(7).to({_off:false},0).wait(1).to({_off:true},1).wait(16));

	// btn
	this.NextBtn1 = new lib.btn1();
	this.NextBtn1.name = "NextBtn1";
	this.NextBtn1.setTransform(326.9,760.95);
	new cjs.ButtonHelper(this.NextBtn1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.NextBtn1).to({_off:true},13).wait(12));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,606.4,817.5);
// library properties:
lib.properties = {
	id: '6ED4E59429F89B40AFAA6F8FB86CB2DB',
	width: 640,
	height: 1136,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/openChest_demo3_each click_atlas_1.png", id:"openChest_demo3_each click_atlas_1"},
		{src:"images/openChest_demo3_each click_atlas_2.png", id:"openChest_demo3_each click_atlas_2"},
		{src:"images/openChest_demo3_each click_atlas_3.png", id:"openChest_demo3_each click_atlas_3"}
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
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6ED4E59429F89B40AFAA6F8FB86CB2DB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
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
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;