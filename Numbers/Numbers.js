(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.btn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(10,1,1).p("Egk1gLtMBJrAAAQCOAAAACHIAATNQAACHiOAAMhJrAAAQiOAAAAiHIAAzNQAAiHCOAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("Egk0ALuQiPAAAAiHIAAzNQAAiHCPAAMBJpAAAQCPAAAACHIAATNQAACHiPAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF00").s().p("Egk0ALuQiPAAAAiHIAAzNQAAiHCPAAMBJpAAAQCPAAAACHIAATNQAACHiPAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},2).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255,-80,510,160);


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AuBrtIcDAAQBmAAAABnIAAUNQAABnhmAAI8DAAQhmAAAAhnIAA0NQAAhnBmAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AuBLuQhmAAAAhnIAA0NQAAhnBmAAIcDAAQBmAAAABnIAAUNQAABnhmAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("AqhrtIVDAAQBMAAAABnIAAUNQAABnhMAAI1DAAQhMAAAAhnIAA0NQAAhnBMAAg");
	this.shape_2.setTransform(0,0,1.333,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66CC00").s().p("AqgLuQhNAAAAhnIAA0NQAAhnBNAAIVBAAQBNAAAABnIAAUNQAABnhNAAg");
	this.shape_3.setTransform(0,0,1.333,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-77,204,154);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AqhrtIVDAAQBMAAAABnIAAUNQAABnhMAAI1DAAQhMAAAAhnIAA0NQAAhnBMAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900FF").s().p("AqgLuQhNAAAAhnIAA0NQAAhnBNAAIVBAAQBNAAAABnIAAUNQAABnhNAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66CC00").s().p("AqgLuQhNAAAAhnIAA0NQAAhnBNAAIVBAAQBNAAAABnIAAUNQAABnhNAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},2).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-77,154,154);


// stage content:
(lib.测试1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		th=this;
		th.stop();
		th.bs.addEventListener("click",start);
		function start() {
			th.gotoAndStop(1);
			th.bs.removeEventListener("click",start);
		}
	}
	this.frame_1 = function() {
		var timeTick,timeNum,addMinusBond,
		mulDivBond,addMinusMax,mulDivMax,
		score,t1n,t2t,t3n,correct,t5p,t5len;
		function init() {
			addMinusBond=40;
			mulDivBond=14;
			addMinusMax=4000000;
			mulDivMax=3000;
			score=0;
			t1n=0;
			t2t=0;
			t3n=0;
			correct=0;
			th.t1.text="";
			th.t2.text="";
			th.t3.text="";
			th.tf.text="得分"+String(score);
			newGame();
		}
		init();
		th.addEventListener("tick",step);
		function step() {
			timeTick++;
			if(timeTick>=24) {
				timeTick-=24;
				timeNum-=1;
				th.tm.text=String(timeNum);
				if(timeNum<=0) {
					lose();
				}
			}
		}
		th.b0.addEventListener("click",p0);
		th.b1.addEventListener("click",p1);
		th.b2.addEventListener("click",p2);
		th.b3.addEventListener("click",p3);
		th.b4.addEventListener("click",p4);
		th.b5.addEventListener("click",p5);
		th.b6.addEventListener("click",p6);
		th.b7.addEventListener("click",p7);
		th.b8.addEventListener("click",p8);
		th.b9.addEventListener("click",p9);
		function p0(){putN(0);}
		function p1(){putN(1);}
		function p2(){putN(2);}
		function p3(){putN(3);}
		function p4(){putN(4);}
		function p5(){putN(5);}
		function p6(){putN(6);}
		function p7(){putN(7);}
		function p8(){putN(8);}
		function p9(){putN(9);}
		th.bb.addEventListener("click",back);
		function back(){
			if(t5len>=1) {
				t5len-=1;
				t5p=Math.trunc(t5p/10);
				th.t5.text=String(t5p);
			}
		}
		th.be.addEventListener("click",enter);
		function enter(){
			if(t5p==correct) {
				score++;
				th.tf.text="得分"+String(score);
				addMinusBond=Math.trunc(addMinusBond*1.2);
				if(addMinusBond>addMinusMax) {
					addMinusBond=addMinusMax;
				}
				mulDivBond+=3;
				if(mulDivBond>mulDivMax) {
					mulDivBond=mulDivMax;
				}
				newGame();
			} else {
				lose();
			}
		}
		function lose() {
			window.cor=correct;
			th.removeEventListener("tick",step);
			th.b0.removeEventListener("click",p0);
			th.b1.removeEventListener("click",p1);
			th.b2.removeEventListener("click",p2);
			th.b3.removeEventListener("click",p3);
			th.b4.removeEventListener("click",p4);
			th.b5.removeEventListener("click",p5);
			th.b6.removeEventListener("click",p6);
			th.b7.removeEventListener("click",p7);
			th.b8.removeEventListener("click",p8);
			th.b9.removeEventListener("click",p9);
			th.bb.removeEventListener("click",back);
			th.be.removeEventListener("click",enter);
			th.gotoAndStop(2);
		}
		function putN(n) {
			if(t5len>=8) {
			} else {
				if(putN==0 && t5p==0) {
					return;
				}
				t5len++;
				t5p=t5p*10+n;
				th.t5.text=String(t5p);
			}
		}
		function newGame() {
			var a1,a2,a3;
			timeTick=0;
			timeNum=15;
			th.tm.text=String(timeNum);
			t5p=0;
			t5len=0;
			th.t5.text="0";
			t2t=Math.trunc(Math.random()*4);
			if(t2t==0 || t2t==1) {
				a1=Math.trunc(Math.random()*addMinusBond)+1;
				a2=Math.trunc(Math.random()*addMinusBond)+1;
				a3=a1+a2;
				if(t2t==0) {
					t1n=a1;
					t3n=a2;
					correct=a3;
					th.t2.text="+"
				}else{
					t1n=a3;
					t3n=a1;
					correct=a2;
					th.t2.text="-"
				}
			}else{
				a1=Math.trunc(Math.random()*mulDivBond)+1;
				a2=Math.trunc(Math.random()*mulDivBond)+1;
				a3=a1*a2;
				if(t2t==2) {
					t1n=a1;
					t3n=a2;
					correct=a3;
					th.t2.text="*"
				}else{
					t1n=a3;
					t3n=a1;
					correct=a2;
					th.t2.text="/"
				}
			}
			th.t1.text=String(t1n);
			th.t3.text=String(t3n);
		}
	}
	this.frame_2 = function() {
		th.tx.text="真笨！应是"+String(window.cor);
		th.br.addEventListener("click",restart);
		function restart() {
			th.br.removeEventListener("click",restart);
			th.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// 图层_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkGFuQC3g2AqhUQAzhLgBj3IgsAAQgeABgyAFIAAhAQAwAFAgABIFyAAQAlgBArgFIAABAQgsgFgkgBIhhAAIAAGFQgBAeANAGQAIAIAuAAQA6ACAKgVQANgOAAgzIgBgeQAZAmAtAGQgPBRgbAWQgZAZhKAAQhPACgagRQgbgQABgzIAAmZIh1AAQABEBgyBUQgnBYi9BfQgZgxgdgPgAnJDfQBBgHBWgYIAAkbIgrAAQgiABgvAFIAAhAQAuAFAhABIAtAAIAAjaIg8AAQgiABguAFIAAhAQArAFAlABICjAAQAkgBAsgFIAABAQgsgFgjgBIgvAAIAADaIAcAAQAhgBAwgFIAABAQgugFgjgBIgcAAIAAEMQBagYA3gXQgIAcAAAVIABASQjoA9hUAqgAEblzIkKAAQgfABgxAFIAAhAQAwAFAgABIEKAAQAggBAygFIAABAQgxgFghgBg");
	this.shape.setTransform(699.8,568.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AF5GzIrsAAQgcgBgjAIIAAg9QAdAIAhgBIFfAAIAAhZIjrAAQgZgBglAIIAAg9QAfAIAbgBIDvAAIAAhHIjRAAQgcgBgpAGQAIgggBgdIAAjEQABgbgIgkQAlAGAfgBIDSAAIAAg/IliAAQgbgBgmAHIAAg8QAgAIAegCIFlAAIAAhRQhiAKjHAIQgSgwgTgVQBGAGBNAAQBoAABogKQCxgVBggrIAuA7QAIALAAAEIAAACQgCADgFAAIgLgCQgRgDgNAAQgLAAgLACQhaAQiFATIAABZIFXAAQAfACAdgIIAAA8QgegHgdABIlYAAIAAA/IDVAAQAbABAmgGQgGAjAAAdIAADBQAAAgAGAfQgkgGgcABIjWAAIAABHIDyAAQAegBAggGIAAA9QglgIgaABIjxAAIAABZIFYAAQAbABAjgIIAAA9QgigIgdABgAAiCHIDaAAIAAhXIjaAAgAjuCHIDZAAIAAhXIjZAAgAAiADIDaAAIAAhWIjaAAgAjuADIDZAAIAAhWIjZAAg");
	this.shape_1.setTransform(599.8,562.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(1));

	// 图层_5
	this.tf = new cjs.Text("得分10000", "100px 'DengXian'");
	this.tf.name = "tf";
	this.tf.lineHeight = 106;
	this.tf.lineWidth = 632;
	this.tf.parent = this;
	this.tf.setTransform(19.9,213.6);
	this.tf._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1).to({_off:false},0).wait(2));

	// aaa
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNHPQAEguABgkIAAkDQgBgngEg0QA9AFAiAAIDAAAQAgAABEgFQgHA+AAAcIAAEAQABAeAGAyIhFAAQAFgiACgpIkLAAQACAtAFAkgAAtFNIELAAIAAj2IkLAAgAnCGbQCGhMA4hqQg2g7hZgyQAjhPAojAIghADQggABgpAHIgCg/QAyAGAWgBIAsgCQATiGAGhuIBdAcQAGABgBAFQgBAEgKADQgcAHgGAzIgUCRIBdgCQAlgCAsgFQgIArgFAzQgZDTg5B4QBMBBAjAgQgUAWgbAeQgrg1gygtQhQByhZBMQgcgfgpgPgAkQiXQghCkgXBVQA6AuAmAhQA8h0ARjWgAFshlQhzAEiPAOQhuAJghAKQgMgsgPgdQAmgJAqhEQBcicAchbIBRAiQAKADgBAFQgBAEgNACQgaAEgaAvQhkC5gnAuIDNgIIBugGQgrg7gxhBIAyghQBMBeBQB9Ig4Amg");
	this.shape_2.setTransform(674.4,465.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AmrF5QDpiLAEkHIilAAQgqAAgrAFIAAhAQAtAHAoAAICqAAQAEgYAAglIAAjhIhqAAQglAAgrAHIAAhAQAtAFAjAAIJFAAQArAAAjgFIAABAQgogHgmAAIhjAAIAAEeICYAAQArAAAzgHIAABAQgwgFguAAIiYAAIAAFYQAAAnAGA2IhGAAQAGgxAAgsIAAlYIkMAAQAED6jfDEQgpgcgkgQgAh9hNIEGAAIAAkeIkGAAg");
	this.shape_3.setTransform(574.9,468.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#33FF00").ss(4,1,1).p("Egq8gIcMBV5AAAIAAQ5MhV5AAAg");
	this.shape_4.setTransform(967.4,266.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_4}]},1).wait(2));

	// 图层_1
	this.bs = new lib.btn3();
	this.bs.name = "bs";
	this.bs.parent = this;
	this.bs.setTransform(624.2,468.4);
	new cjs.ButtonHelper(this.bs, 0, 1, 2, false, new lib.btn3(), 3);

	this.tm = new cjs.Text("10", "100px 'DengXian'", "#990000");
	this.tm.name = "tm";
	this.tm.textAlign = "right";
	this.tm.lineHeight = 106;
	this.tm.lineWidth = 135;
	this.tm.parent = this;
	this.tm.setTransform(1267.9,13);

	this.t5 = new cjs.Text("24690", "100px 'DengXian'");
	this.t5.name = "t5";
	this.t5.lineHeight = 106;
	this.t5.lineWidth = 546;
	this.t5.parent = this;
	this.t5.setTransform(694.6,214.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjpCSIAAg0IHTAAIAAA0gAjpheIAAgzIHTAAIAAAzg");
	this.shape_5.setTransform(947.6,134.6);

	this.t2 = new cjs.Text("+", "100px 'DengXian'");
	this.t2.name = "t2";
	this.t2.textAlign = "center";
	this.t2.lineHeight = 106;
	this.t2.lineWidth = 100;
	this.t2.parent = this;
	this.t2.setTransform(465.1,82.5);

	this.t3 = new cjs.Text("12345", "100px 'DengXian'");
	this.t3.name = "t3";
	this.t3.lineHeight = 106;
	this.t3.lineWidth = 391;
	this.t3.parent = this;
	this.t3.setTransform(519.1,82.5);

	this.t1 = new cjs.Text("12345", "100px 'DengXian'");
	this.t1.name = "t1";
	this.t1.textAlign = "right";
	this.t1.lineHeight = 106;
	this.t1.lineWidth = 391;
	this.t1.parent = this;
	this.t1.setTransform(411.1,82.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bs}]}).to({state:[{t:this.t1},{t:this.t3},{t:this.t2},{t:this.shape_5},{t:this.t5},{t:this.tm}]},1).wait(2));

	// 图层_8
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AlKEvQCShQAOjEIA3ANQALACgBADQAAACgMAIQgLAGgFAWQgGAdgKAjQAoBPBjAbIAAkgIiEAAQgVgBgiAFIAAgtQAeAFAZAAIEwAAQAXAAAhgFIAAAtQgjgFgVABIiEAAIAABtICmAAQAaABAegGIAAAtQgegEgaAAIimAAIAACXQBVAJBJAAQBJAABGgJQgPASgDAmQkFgChPgXQhVgSg3hRQgtBUhGA7QgRgTgfgOgAD5hSQAFghgBgYIAAgxIneAAIAAAtQAAAXAEAiIgwAAQADgiAAgXIAAgbQACgZgFgiQAfAGAcgBID1AAQgngig/gmIAagnQA8AlA0ApIgWAhIC+AAQAXAAAkgFQgFAhABAYIAAAhQgBAUAFAlg");
	this.shape_6.setTransform(1162,604);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiBE6QB7hbgEi9IAAh2IgBgPIgCgUIggAhIgKAJQgYgSgfgIQB7hRA1iZIAzAVQALAEgBADQABABgKADQgNAEgIAKQgIAKgIASIB5AAQATAAA2gEQgXAqg9BUIBCAAQAPAAArgEIgEA9IAAFfQAAAjgWANQgSAMhFAGQgHgZgWghQAmAHAVAAQANAAAGgCQAWgFgBgZIAAh/IhpAAIAABHQgBAUAFAqIgwAAQAEghAAgcIAAhIIhmAAQgIBshgBrQgVgQgdgIgACnBZIBpAAIAAhUIhpAAgAAbBZIBkAAIAAhUIhkAAgACngdIBpAAIAAhOIhpAAgAAbgdIBkAAIAAhOIhkAAgAADiQQAVADASAAIBlAAIAcgrIAcgsIiLAAQgUAgglA0gAjuD5QAEgZAAgkIAAi8IgdArQgVgMgfgLQBkhMAdidIgyAAQgYAAgeAEIAAguQAZAEAcAAICYAAQAeAAAXgEIAAAuQgegFgXABIg4AAQgXBbghA7IBGAAQAzgCAIgBQgCAKgCAvIAACxQgBAoAFAVIgxAAQAGgUAAgRIAAgJIhTAAIAAAJQAAAgAFAZgAjDCWIBUAAIAAiwIhUAAg");
	this.shape_7.setTransform(1088.4,604.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AkKEnQAEgmAAgaIAAnLQAAgVgEgtQAsAEAcAAIGFAAQAcAAAsgEQgCAbgBAqIAAG2QAAAmADAfIgxAAQADgXABgYIm7AAIAEA8gAjdDHIG7AAIAAnFIm7AAgAA7BXIh6AAQgZAAgqAFQADglABgZIAAh5QgBgagDglQApAEAXAAIB8AAIBGgEQgFAmAAAXIAAB4QAAAXAFAqQgpgFgcAAgAhXAzICsAAIAAilIisAAg");
	this.shape_8.setTransform(1162.4,426.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhoFPQAFgpAAgeIAAjXQAAgbgFggQAmAFAWgBIBKAAQAbABAkgFQgEAeAAAbIAADzQA1gyAphMQgshcgUhwIAmgIQAJBYAhBOQAYhfAEiPIhBAAIggA8QgRgLgWgKQA9hRAWiqIAtANQAOADAAAEQAAAEgPAJQgIAEgDARQgVBTgMAnIBSAAQAeAAAigFIAAAtQgggEgUAAQgQDMgeBOQAxBcBAAlQggAJgTAUQgsg6gmg/QglBBguA3QgPgKgRgDQgFAShFAJQgEgXgMgdQAVAGALAAQAIgBADgCQALgDgBgXIAAgtIhuAAIAAAzQAAAgAEAngAg8CzIBuAAIAAg5IhuAAgAg8BYIBuAAIAAg8IhuAAgAklEZIAfACQATAAAGgEQANgEgBgZIAAi9QglATgoAYIgggtQAugMA/gdIAAiSIgnAAQgYAAgfADIAAgsQAgAEAXAAIAnAAIAAhaQAAgggEgoIA4AIQAJABAAAEQAAADgIAGQgOALAAAnIAABaIAIAAQAeAAAbgEIAAAsQgfgDgaAAIgIAAIAACBQAbgMAdgTQgCAYAAAYQgbAKgbAOIAADeQABAlgSAMQgPANg5AGQgFgZgNgagAA6g3QiFAKgUAKIgSgrQAggBAthpIgVAAQgaAAgjAEIAAgtQAgAFAdAAIBsAAQAiAAAegFIAAAtQgfgEghAAIgvAAQgUAwgjA0QAyAAAugDQgHgUgOgdIAjgNIAmBgIAEAKIgjAPQgDgOgFgNgAg2k5IAfgVQAiAoAeApIggAXQgZgogmgrg");
	this.shape_9.setTransform(1090.8,424);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AijEJQg3hZAAiwQAAizA2hXQA1hXBxAAQBuAAA1BXQA2BZAACxQAACsg4BbQg4BbhrAAQhtAAg2hZgAh3jlQglBJAACcQAACaAmBKQAmBJBQAAQBPAAAnhLQAmhMAAiWQAAidgkhIQglhJhSAAQhTAAglBJg");
	this.shape_10.setTransform(909.4,604.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjIDjIA7gNQANAtAgAWQAgAVAuAAQCiAAAFkrQgUAqgtAbQgsAbg5AAQhYAAg0g+Qg0g9AAhnQAAhpA3g9QA2g8BiAAQBnAAA3BVQA2BUAACqQAAC0g7BeQg6BehxAAQiPAAglh/gAhtj/QglAuAABRQAABUAlAtQAmAuBCAAQBCAAAogrQAogqAAhEQAAhZgog1Qgog1hBAAQhEAAglAug");
	this.shape_11.setTransform(708.9,604.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AicEtQg4g0AAhfQAAhDAkgtQAkgtA7gMIAAgCQg2gOgfgtQgfgsAAg8QAAhOA1gvQA1gwBaAAQBcAAA1AwQA1AwAABOQAAA+ggArQggAsg0AMIAAACQA8AMAkArQAkAtAABFQAABgg3A0Qg3A1hnAAQhkAAg4g1gAhtAuQgoAnAABAQAABLAnAoQAnAoBIAAQBLAAAlgnQAlgogBhOQAAhBgnglQgngmhHAAQhGAAgnAngAhjkPQgjAgAAA/QAAA/AkAkQAjAkA/AAQBAAAAkgkQAhgjABhAQgBhAgiggQgkghhAABQhAgBgiAig");
	this.shape_12.setTransform(517.8,602.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhPFYQAAiJA7igQA5ifBwivIlnAAIAAg4IGlAAIAAA2Qh2C4g2CaQg2CcAACLg");
	this.shape_13.setTransform(320.2,604.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiYENQg5hWAAinQAAi4A7hcQA7hdBwAAQBGAAApAeQArAeASA/Ig6AOQgahWhcAAQhPABgqBMQgrBMgBCUQAZguArgYQAqgZA1AAQBZAAA1A7QA0A4ABBkQgBBug2A+Qg3A/heAAQhnAAg3hVgAhFgcQghASgTAhQgSAhgBAtQAABXApA5QAoA5BAAAQBDAAAmgwQAlgwAAhTQAAhQglgrQgnguhFAAQgmAAghASg");
	this.shape_14.setTransform(127.9,604.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AjRDDIA+gJQAQA8AiAZQAhAZA7ABQBIgBAngtQAoguAAhVQAAhJgmgrQgngqhEAAQgnAAgdAMQgfAMgfAaIg6AAIAVloIFVAAIAAA1IkdAAIgQD5QAjgZAggJQAhgKAlAAQBbAAA2A4QA1A3ABBgQgBBug5A9Qg6A9hnAAQimAAgiiag");
	this.shape_15.setTransform(911.4,425.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ABOFYIAAilIk1AAIAAgwIEvnaIBDAAIAAHXIBdAAIAAAzIhdAAIAAClgAipCAID3AAIAAmFg");
	this.shape_16.setTransform(708.3,425.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AjWCwIA/gHQARCECIAAQBJAAAmglQAnglAAhIQAAhBgtghQgvgihRAAIgvAAIAAg4IAtAAQAtAAAkgPQAjgPAUgeQAVgdAAgsQAAhAghgkQgjgjhBAAQg7AAglAfQgmAegGA/Ig+gGQAKhRA1gtQA2gsBVAAQBdAAA0AvQAzAwAABWQAAA/gkAsQgkArhCAOIAAACQBJAJAqArQApArAABCQAABfg4A0Qg3A0hmAAQjBAAgXiyg");
	this.shape_17.setTransform(519.1,425.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AjPFdIAAgsQAWg4Arg4QAqg4BThIQBUhJAigyQAigyAAg3QAAhAgjgiQglgig/AAQg5gBgkAjQglAigHA6Ig+gIQAIhNA2gvQA2gvBUAAQBdAAA0AvQA0AwABBWQAAAsgQAmQgQAngfAnQgfAlhLBDQiDB1gjBQIFZAAIAAA3g");
	this.shape_18.setTransform(320.2,424.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AjAFYIAAg0ICvAAIAAo7IidBpIAAg4ICkhxIA1AAIAAJ7ICXAAIAAA0g");
	this.shape_19.setTransform(128.2,425.2);

	this.tx = new cjs.Text("", "100px 'DengXian'");
	this.tx.name = "tx";
	this.tx.textAlign = "center";
	this.tx.lineHeight = 106;
	this.tx.lineWidth = 1037;
	this.tx.parent = this;
	this.tx.setTransform(635.8,374.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.tx}]},1).wait(1));

	// 图层_7
	this.be = new lib.btn2();
	this.be.name = "be";
	this.be.parent = this;
	this.be.setTransform(1128.7,606.1);
	new cjs.ButtonHelper(this.be, 0, 1, 2, false, new lib.btn2(), 3);

	this.bb = new lib.btn2();
	this.bb.name = "bb";
	this.bb.parent = this;
	this.bb.setTransform(1128.7,427);
	new cjs.ButtonHelper(this.bb, 0, 1, 2, false, new lib.btn2(), 3);

	this.b0 = new lib.btn();
	this.b0.name = "b0";
	this.b0.parent = this;
	this.b0.setTransform(912.1,606.1);
	new cjs.ButtonHelper(this.b0, 0, 1, 2, false, new lib.btn(), 3);

	this.b5 = new lib.btn();
	this.b5.name = "b5";
	this.b5.parent = this;
	this.b5.setTransform(912.1,427);
	new cjs.ButtonHelper(this.b5, 0, 1, 2, false, new lib.btn(), 3);

	this.b9 = new lib.btn();
	this.b9.name = "b9";
	this.b9.parent = this;
	this.b9.setTransform(715.6,606.1);
	new cjs.ButtonHelper(this.b9, 0, 1, 2, false, new lib.btn(), 3);

	this.b4 = new lib.btn();
	this.b4.name = "b4";
	this.b4.parent = this;
	this.b4.setTransform(715.6,427);
	new cjs.ButtonHelper(this.b4, 0, 1, 2, false, new lib.btn(), 3);

	this.b8 = new lib.btn();
	this.b8.name = "b8";
	this.b8.parent = this;
	this.b8.setTransform(520.8,606.1);
	new cjs.ButtonHelper(this.b8, 0, 1, 2, false, new lib.btn(), 3);

	this.b3 = new lib.btn();
	this.b3.name = "b3";
	this.b3.parent = this;
	this.b3.setTransform(520.8,427);
	new cjs.ButtonHelper(this.b3, 0, 1, 2, false, new lib.btn(), 3);

	this.b7 = new lib.btn();
	this.b7.name = "b7";
	this.b7.parent = this;
	this.b7.setTransform(324.5,606.1);
	new cjs.ButtonHelper(this.b7, 0, 1, 2, false, new lib.btn(), 3);

	this.b2 = new lib.btn();
	this.b2.name = "b2";
	this.b2.parent = this;
	this.b2.setTransform(324.5,427);
	new cjs.ButtonHelper(this.b2, 0, 1, 2, false, new lib.btn(), 3);

	this.b6 = new lib.btn();
	this.b6.name = "b6";
	this.b6.parent = this;
	this.b6.setTransform(129.7,606.1);
	new cjs.ButtonHelper(this.b6, 0, 1, 2, false, new lib.btn(), 3);

	this.b1 = new lib.btn();
	this.b1.name = "b1";
	this.b1.parent = this;
	this.b1.setTransform(129.7,427);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.btn(), 3);

	this.br = new lib.btn3();
	this.br.name = "br";
	this.br.parent = this;
	this.br.setTransform(655.3,569.3);
	new cjs.ButtonHelper(this.br, 0, 1, 2, false, new lib.btn3(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.b1},{t:this.b6},{t:this.b2},{t:this.b7},{t:this.b3},{t:this.b8},{t:this.b4},{t:this.b9},{t:this.b5},{t:this.b0},{t:this.bb},{t:this.be}]},1).to({state:[{t:this.br}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1009.2,748.4,510,160);
// library properties:
lib.properties = {
	id: 'A3B0A64AB82E0844AADF82E2F31D350C',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FF9900",
	opacity: 1.00,
	manifest: [],
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
an.compositions['A3B0A64AB82E0844AADF82E2F31D350C'] = {
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
