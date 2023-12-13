JXG.Options.text.useMathJax = true;
var b1 = JXG.JSXGraph.initBoard('jxgbox', {boundingbox:[-10,10,10,-10], axis:true});
b1.suspendUpdate();
var a = b1.create('slider',[[-5,-2],[5,-2],[-5,1,5]],{name:'a', snapWidth:0.1});
var b = b1.create('slider',[[-5,-3],[5,-3],[-5,0,5]],{name:'b', snapWidth:0.1});
var c = b1.create('slider',[[-5,-4],[5,-4],[-5,0,5]],{name:'c', snapWidth:0.1});
var d = b1.create('slider',[[-5,-5],[5,-5],[-5,1,5]],{name:'d', snapWidth:0.1});

var v = b1.create('point',[2,2],{face:'o', size:2, name:'v'});
var va = b1.create('arrow',[[0,0],v]);

var v2 = b1.create('point',[
    function() {return a.Value()*v.X()+b.Value()*v.Y();},
    function() {return c.Value()*v.X()+d.Value()*v.Y();}],{face:'o', size:2, name:"v'", fillColor: 'black', strokeColor: 'black'});
var va2 = b1.create('arrow',[[0,0],v2],{strokeColor:'black', strokeWidth:1});

var t = b1.create('text',[-8, 5, 
        function(){ return '\\[ M = \\left(\\begin{matrix}' 
                    + (a.Value()).toFixed(2) + '&'
                    + (b.Value()).toFixed(2) + '\\\\'
                    + (c.Value()).toFixed(2) +'&' 
                    + (d.Value()).toFixed(2)+'\\end{matrix}\\right)\\]';}]);

var t2 = b1.create('text',[-8,2,
            function(){ return "\\[\\lambda = \\frac{|v'|}{|v|} = " 
                + (
                    JXG.Math.Geometry.distance([0,0],[v2.X(),v2.Y()])/
                    JXG.Math.Geometry.distance([0,0],[v.X(),v.Y()])
                ).toFixed(3) 
                + "\\]";}]);
b1.unsuspendUpdate();

showTrace = false;
var toggleTrace = function() {
  showTrace = !showTrace;
  v.setProperty({trace: showTrace});
  v2.setProperty({trace: showTrace});
  var b = document.getElementById("toggleButton");
  if (showTrace) {
     b.value = "Hide trace";
  } else {
     b.value = "Show trace";
     v.clearTrace();
     v2.clearTrace();
  }
};