

var _window$popmotion = window.popmotion,
styler = _window$popmotion.styler,
spring = _window$popmotion.spring,
listen = _window$popmotion.listen,
pointer = _window$popmotion.pointer,
value = _window$popmotion.value;

window.onload=function(){
var ball = document.querySelector('.box');
var divStyler = styler(ball);
var ballXY = value({ x: 0, y: 0 }, divStyler.set);


listen(ball, 'mousedown touchstart').start(function (e) {
e.preventDefault();
pointer(ballXY.get()).start(ballXY);
});

listen(document, 'mouseup touchend').start(function () {
ballXY.stop();
});
//Footer box
var ballFooter = document.querySelector('.boxFooter');
var divStylerF = styler(ballFooter);
var ballFooterXY = value({ x: 0, y: 0 }, divStylerF.set);


listen(ballFooter, 'mousedown touchstart').start(function (e) {
e.preventDefault();
pointer(ballFooterXY.get()).start(ballFooterXY);
});

listen(document, 'mouseup touchend').start(function () {
ballFooterXY.stop();
});




}