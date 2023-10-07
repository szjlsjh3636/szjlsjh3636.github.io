(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.位图1 = function() {
	this.initialize(img.位图1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1232,1920);


(lib.位图2 = function() {
	this.initialize(img.位图2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,976,1920);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.spr2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.位图2();
	this.instance.parent = this;
	this.instance.setTransform(-1,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.spr2, new cjs.Rectangle(-1,45,976,1920), null);


(lib.spr1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.位图1();
	this.instance.parent = this;
	this.instance.setTransform(-187,-215.1,1,1,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.spr1, new cjs.Rectangle(-187,-236.6,1265.3,1941.2), null);


(lib.btn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2B2QAdADAHgCQAIgCgBgPIAAg1IhYAAQgUAAgTACIAAgYIAmABIBZAAQAAgLgDgKQALgFANgIIAigWIhhAAIglABIAAgYIAkABICLAAIAAAXIgdAQQgSALgYARIAAALIBVAAIAogBIAAAZQgcgDgMAAIhVAAIAABAQgBAZgOAEQgPAEgdACQgBgMgIgSgAiCg0IABgcIgBgbIB0AAQgJgOgMgLQAKgGALgJQAXAfAFAJIByAAIgCAdIACAZIgZAAIAAgiIjQAAIAAAjg");
	this.shape.setTransform(48.3,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag1COIABhFIgBhFICsAAQgCAUAAAxQAAAwADASIgaAAIAAgaIh6AAIAAAdgAgcBdIB6AAIAAhDIh6AAgAiPByQAUgSAKglQAKglABgyIAChYQA9gBBBgJQBCgJAMgGQAGAOALAOIhZAJQg7AHgwABIAAAoIC0AAIAngBIAAAZIgngBIi0AAIgFAzQgDAcgJAeQgIAfgOAVQgIgGgVgIg");
	this.shape_1.setTransform(15.4,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhfCUQACgbAAgeIAAgqIgCgmIC9AAIgBAmIAAAwIABAxIgbAAIAAgRIiHAAIAAATgAhEBuICHAAIAAgeIiHAAgAhEA9ICHAAIAAgeIiHAAgABcgNIi3AAQgZAAgWACIAAgWQAXACAYAAIAkAAQgKgbgMgQIAVgMIAcArIgTAMIBKAAQAPgjAFgTQAQAHANAEIgOAVIgKAWIAoAAQAZAAAWgCIAAAWQgWgCgZAAgABNhbIibAAQgYABgXABIAAgVQAXABAYAAIA/AAQgBgPgJgQIAbgGQAJAWACAPIBAAAIApgBIAAAVIgpgCg");
	this.shape_2.setTransform(-16,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiOB6QBSgWAIhfIguAAQgaABgSABIAAgYIAsABIBXAAIAAgxIhFAAIgUAnQgKgJgPgCQAegsANg2QAPAHAOADQgGAIgEAJIgJAVIA9AAIgBg3IAbAAIgBA3IAqAAQAZAAAYgCIAAAZIgwgBIgrAAIAAAxIBWAAIArgBIAAAYQgTgBgYgBIgzAAIAABaQgCATASAAIAZAAQALABAFgKQAEgLABgTQAQAKAQACQgLAkgJAHQgIAFgNACIgvAAQgdAAgCgbIAAhpIgxAAQgFBfhXArQgHgKgSgLg");
	this.shape_3.setTransform(-48.1,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("ApUDHIAAmNISpAAIAAGNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.1,-19.9,132.2,39.8);


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhfCUQACgbAAgeIAAgqIgCgmIC9AAIgBAmIAAAwIABAxIgbAAIAAgRIiHAAIAAATgAhEBuICHAAIAAgeIiHAAgAhEA9ICHAAIAAgeIiHAAgABcgNIi3AAQgZAAgWACIAAgWQAXACAYAAIAkAAQgKgbgMgQIAVgMIAcArIgTAMIBKAAQAPgjAFgTQAQAHANAEIgOAVIgKAWIAoAAQAZAAAWgCIAAAWQgWgCgZAAgABNhbIibAAQgYABgXABIAAgVQAXABAYAAIA/AAQgBgPgJgQIAbgGQAJAWACAPIBAAAIApgBIAAAVIgpgCg");
	this.shape.setTransform(48,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag1COIABhFIgBhFICsAAQgCAUAAAxQAAAwADASIgaAAIAAgaIh6AAIAAAdgAgcBdIB6AAIAAhDIh6AAgAiPByQAUgSAKglQAKglABgyIAChYQA9gBBBgJQBCgJAMgGQAGAOALAOIhZAJQg7AHgwABIAAAoIC0AAIAngBIAAAZIgngBIi0AAIgFAzQgDAcgJAeQgIAfgOAVQgIgGgVgIg");
	this.shape_1.setTransform(15.4,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag2B2QAdADAHgCQAIgCgBgPIAAg1IhYAAQgUAAgTACIAAgYIAmABIBZAAQAAgLgDgKQALgFANgIIAigWIhhAAIglABIAAgYIAkABICLAAIAAAXIgdAQQgSALgYARIAAALIBVAAIAogBIAAAZQgcgDgMAAIhVAAIAABAQgBAZgOAEQgPAEgdACQgBgMgIgSgAiCg0IABgcIgBgbIB0AAQgJgOgMgLQAKgGALgJQAXAfAFAJIByAAIgCAdIACAZIgZAAIAAgiIjQAAIAAAjg");
	this.shape_2.setTransform(-15.7,-1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiOB6QBSgWAIhfIguAAQgaABgSABIAAgYIAsABIBXAAIAAgxIhFAAIgUAnQgKgJgPgCQAegsANg2QAPAHAOADQgGAIgEAJIgJAVIA9AAIgBg3IAbAAIgBA3IAqAAQAZAAAYgCIAAAZIgwgBIgrAAIAAAxIBWAAIArgBIAAAYQgTgBgYgBIgzAAIAABaQgCATASAAIAZAAQALABAFgKQAEgLABgTQAQAKAQACQgLAkgJAHQgIAFgNACIgvAAQgdAAgCgbIAAhpIgxAAQgFBfhXArQgHgKgSgLg");
	this.shape_3.setTransform(-48.1,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("ApUDHIAAmNISpAAIAAGNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.1,-19.9,132.2,39.8);


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AinDAQAQgNACgeIAAhXQgZAAgeACIAAgiQAeACAZAAIAAg/QgSAAgUACIAAgaIgPAWQgJgMgRgMQAcghAZgyQAagxAJggQAMAGAZAIQgHAMgZAxQA+AAAhgCIAAAhQgfgChNAAIggA3QAdACAdAAQAgAAAggCIAAAhQgigCgWAAIAAA/QAhAAAkgCIAAAiQgkgCghAAIAABdQAngfAUgTQADAPAKAUQgSAJgdAcQgfAbgWASQgLgSgOgMgACyDOIiqAAQgdAAgfACIAAghQAcACArAAIAPiiQgmAAgWACIAAghQAZACAlAAIAHiGQghAAgkACIAAgiQAiACAhAAICkAAQgDAegCAlIgREgQAWAAAXgCIAAAhQgTgCgfAAgAA3CzIBdAAIAIikIhYAAgABHgOIBXAAIAIiGIhWAAg");
	this.shape.setTransform(21,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhSDBQArgEArgQQAsgRANgOQgqgXgygWQAagkASgpQgmAAgZACIAAghQAbACAXAAIAYAAQAOgbASg9QAUAKAXAGQgKAPgGANQgGANgQAfIB0AAQAfAAAWgCIAAAhQgcgCgZAAIgTAxQgNAdgZAlQAxAZA4AhQgNAOgOAVQgxglg2gfQgSAPgkATQgkATg/ARQgJgTgPgSgAAPBWIBKAhQAcghAVhCIhWAAIglBCgAjLC5QAjACAJgEQAJgEAAgTIAAhsQgkAQgXAOQgJgbgKgKQAZgEA1gXIAAhrQgqAAgcACIAAghQAZABAtAAIAAgwQAAgegCgTIAnAAQgCATAAAcIAAAyQAWAAATgBIAAAhQgWgCgTAAIAABeQAZgKASgLQAEAQAFANQgTAJghARIAACIQACAcgOAKQgNAJgtAGQgCgVgQgWgAgrg4QACgWAAgUQAAgYgCgaIEDAAQgCAeAAAVQAAAUACATIglAAIAAg9Ii4AAIAAA/gAAqjQIAggWQAVAfAQAgQgUAHgPALQgOgigUgZg");
	this.shape_1.setTransform(-28.9,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000CC").s().p("Au1HHIAAuNIdrAAIAAONg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.9,-45.5,190,91);


// stage content:
(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var numx = 5;
		var numy = 11;
		var s1 = this["spr1"];
		var s2 = this["spr2"];
		var tt= this["txt1"];
		var size=400;
		ax1 = 882 / numx;
		ay1 = 1645 / numy;
		
		ax2 = 928 / numx;
		ay2 = 1810 / numy;
		
		s1.scaleX = size / ax1;
		s1.scaleY = size / ay1;
		s2.scaleX = size / ax2;
		s2.scaleY = size / ay2;
		
		
		x01 = 445.7*size / ax1+100;
		y01 = 734*size / ay1+100;
		x02 = 486*size / ax2+100;
		y02 = 910*size / ay2+100;
		
		function setsxy() {
			var s, ax, ay, x0, y0;
			if (si == 1) {
				s = s1;
				ax = ax1;
				ay = ay1;
				x0 = x01;
				y0 = y01;
				s2.visible=false;
				s1.visible = true;
			}
			if (si == 2) {
				s = s2;
				ax = ax2;
				ay = ay2;
				x0 = x02;
				y0 = y02;
				s1.visible=false;
				s2.visible = true;
			}
			s.x = x0-size*xi;
			s.y = y0-size*yi;
		}
		
		function setletter() {
			tt.text=letter[yi][xi]+char[si];
		}
		
		var letter=[
		["a","i","u","e","o"],
		["ka","ki","ku","ke","ko"],
		["sa","shi","su","se","so"],
		["ta","chi","tsu","te","to"],
		["na","ni","nu","ne","no"],
		["ha","hi","fu","he","ho"],
		["ma","mi","mu","me","mo"],
		["ya","???","yu","???","yo"],
		["ra","ri","ru","re","ro"],
		["wa","???","???","???","wo"],
		["n","???","???","???","???"]];
		var char=["???","平","片"];
		
		var si=1,xi=0,yi=0;
		
		function randxy()
		{
			while(true)
			{
				si=Math.floor(Math.random()*2)+1;
				xi=Math.floor(Math.random()*numx);
				yi=Math.floor(Math.random()*numy);
				if(letter[yi][xi]!="???")
				{
					break;
				}
			}
		}
		
		function init()
		{
			s1.visible=false;
			s2.visible=false;
			tt.text="";
		}
		init();
		
		var nowStep=0;
		var type=1;
		
		
		
		this["btn1"].addEventListener("click", function(){
			nowStep+=1;
			if(type==1)
			{
				if(nowStep==1)
				{
					randxy();
					setsxy();
					tt.text="";
				}
				if(nowStep>=2)
				{
					setletter();
					nowStep=0;
				}
			}
			if(type==2)
			{
				if(nowStep==1)
				{
					randxy();
					s1.visible=false;
					s2.visible=false;
					setletter();
				}
				if(nowStep>=2)
				{
					setsxy();
					nowStep=0;
				}
			}
		})
		this["btn2"].addEventListener("click", function(){
			nowStep=0;
			type=1;
			init();
		})
		this["btn3"].addEventListener("click", function(){
			nowStep=0;
			type=2;
			init();
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_4
	this.btn3 = new lib.btn3();
	this.btn3.name = "btn3";
	this.btn3.parent = this;
	this.btn3.setTransform(526.1,710.8);
	new cjs.ButtonHelper(this.btn3, 0, 1, 1);

	this.btn2 = new lib.btn2();
	this.btn2.name = "btn2";
	this.btn2.parent = this;
	this.btn2.setTransform(526.1,636.4);
	new cjs.ButtonHelper(this.btn2, 0, 1, 1);

	this.txt1 = new cjs.Text("", "70px 'SimHei'");
	this.txt1.name = "txt1";
	this.txt1.lineHeight = 72;
	this.txt1.lineWidth = 211;
	this.txt1.parent = this;
	this.txt1.setTransform(230.9,633.2);

	this.btn1 = new lib.btn1();
	this.btn1.name = "btn1";
	this.btn1.parent = this;
	this.btn1.setTransform(101.8,671.1);
	new cjs.ButtonHelper(this.btn1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn1},{t:this.txt1},{t:this.btn2},{t:this.btn3}]}).wait(1));

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgupAK+IAA17MBdTAAAIAAV7g");
	this.shape.setTransform(300,675,1.005,1.068);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgD5Au4MAAAhdvIHzAAMAAABdvg");
	this.shape_1.setTransform(575,300);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EgD5Au4MAAAhdvIHzAAMAAABdvg");
	this.shape_2.setTransform(25,300);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Egu3AD6IAAnzMBdvAAAIAAHzg");
	this.shape_3.setTransform(300,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Egu3AD6IAAnzMBdvAAAIAAHzg");
	this.shape_4.setTransform(300.7,575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层_1
	this.spr1 = new lib.spr1();
	this.spr1.name = "spr1";
	this.spr1.parent = this;
	this.spr1.setTransform(495.7,784,1,1,0,0,0,445.7,734);

	this.timeline.addTween(cjs.Tween.get(this.spr1).wait(1));

	// 图层_5
	this.spr2 = new lib.spr2();
	this.spr2.name = "spr2";
	this.spr2.parent = this;
	this.spr2.setTransform(536,960,1,1,0,0,0,487,1005);

	this.timeline.addTween(cjs.Tween.get(this.spr2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(163,188.4,1265.3,2106.6);
// library properties:
lib.properties = {
	id: '37FE7513ABE4C14A8FAF947C195411B6',
	width: 600,
	height: 750,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/位图1.png", id:"位图1"},
		{src:"images/位图2.png", id:"位图2"}
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
an.compositions['37FE7513ABE4C14A8FAF947C195411B6'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;