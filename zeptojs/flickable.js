/**
 * Flickable: a Zepto plugin for making elements flickable on a touch device
 * 2012, Tom Longo
 *
 * Licensed under the Whatever License. Use it for whatever you want!
 * 
 * @author thetomlongo@gmail.com
 * @version 1.0.4
 * 
 * @requires 
 * Zepto JavaScript Library
 */
(function(a){function r(){var c="";for(var d=0;d<3;d++){c+=b.eventLog[d]+" | "}var e="<pre> \n\t\tlast 3 events: "+c+"<br /> \n\t\tstart: {x:"+b.start.x+", y:"+b.start.y+",time: "+b.start.time+"}<br /> \n\t\t\tdelta: {<br /> \n\t\t\tprevPos: {"+b.delta.prevPos.x+", "+b.delta.prevPos.y+"}<br /> \n\t\t\tdist: {"+b.delta.dist.x+", "+b.delta.dist.y+"}<br /> \n\t\t\tdir: {"+b.delta.dir.x+", "+b.delta.dir.y+"}<br /> \n\t\t\t}<br /> \n\t\tend: {<br /> \n\t\t\tspeed: {"+b.end.speed.x+", "+b.end.speed.y+"}<br /> \n\t\t\tflick: {"+b.end.flick.x+", "+b.end.flick.y+"}<br /> \n\t\t\tduration: "+b.end.duration+"<br /> \n\t\t} \n\t\t</pre>";a("#flickableDebugger").html(e)}function q(a){if(h){console.log(a);b.eventLog.splice(0,0,a);r()}}function p(){if(!a("#flickableDebugger").length){h=true;b=c;b.eventLog=[];var d='<div id="flickableDebugger" style="position: fixed; bottom: 0; margin: 0 auto; padding: 10px; width: 100%; background: #000; color: #fff; font-family: courier, sans-serif;">Debugger</div>';a("body").append(d)}}function o(a){var b=document.createElement("div"),c="Khtml Ms O Moz Webkit".split(" "),d=c.length;return function(a){if(a in b.style)return true;a=a.replace(/^[a-z]/,function(a){return a.toUpperCase()});while(d--){if(c[d]+a in b.style){return true}}return false}}function n(a,b){if(!parseInt(b)){var b,c=a.data("segments"),d=m(a,a.data("flickDirection"));d=="y"?b=a.height()/c:b=a.width()/c}return b}function m(a,b){if(b!=="x"&&b!=="y"){a.height()>a.width()?b="y":b="x"}return b}function l(a){var c=a.timeStamp-b.start.time,d=Math.abs(Math.round(b.delta.dist.x/c*100)/100),e=Math.abs(Math.round(b.delta.dist.y/c*100)/100),i=b.delta.dir.x,j=b.delta.dir.y,k=0,l=0;if(d>f){Math.abs(b.delta.dist.x)>=g?k=i:k=0}else if(e>f){Math.abs(b.delta.dist.y)>=g?l=j:l=0}b.end.duration=c;b.end.speed={x:d,y:e};b.end.flick={x:k,y:l};if(h){q("Touch end");r()}}function k(a){var c,d;typeof a.touches[0].pageX!="undefined"?c=a.touches[0].pageX:c=a.pageX;typeof a.touches[0].pageY!="undefined"?d=a.touches[0].pageY:d=a.pageY;var e,f,g=c,i=d,j=c-b.start.x,k=d-b.start.y;if(c>b.delta.prevPos.x){e=1}else if(c<b.delta.prevPos.x){e=-1}else{e=0}if(d>b.delta.prevPos.y){f=1}else if(d<b.delta.prevPos.y){f=-1}else{f=0}b.delta.prevPos={x:g,y:i};b.delta.dist={x:j,y:k};b.delta.dir={x:e,y:f};if(h){r()}}function j(a){var d,e;typeof a.touches[0].pageX!="undefined"?d=a.touches[0].pageX:d=a.pageX;typeof a.touches[0].pageY!="undefined"?e=a.touches[0].pageY:e=a.pageY;b=c;b.start={x:d,y:e,time:a.timeStamp};b.delta.prevPos={x:d,y:e};k(a);if(h){r()}}var b,c={start:{x:0,y:0,time:0},delta:{prevPos:{x:0,y:0},dist:{x:0,y:0},dir:{x:0,y:0}},end:{duration:0,speed:{x:0,y:0},flick:{x:0,y:0}}},d=false,e=0,f=.7,g=5,h=false;var i={init:function(b){var c=a.extend({enableDebugger:false,segments:5,snapSpeed:.3,flickSnapSpeed:.3,flickThreshold:false,segmentPx:"auto",flickDirection:"auto",preventDefault:true,onCreate:false,onFlick:false,onFlickLeft:false,onFlickRight:false,onFlickUp:false,onFlickDown:false,onScroll:false,onScrollNext:false,onScrollPrev:false,onMove:false,onStart:false,onEnd:false},b);return this.each(function(){var b=a(this),e=b.data("isAlive");if(!e){var g=c.segments,i=m(b,c.flickDirection);b.data("isAlive",true).data("pos",0).data("snapSpeed",parseFloat(c.snapSpeed)).data("flickSnapSpeed",parseFloat(c.flickSnapSpeed)).data("segment",0).data("segments",g).data("flickDirection",i).data("segmentPx",n(b,c.segmentPx));a(b).bind({onStart:function(){a(this).flickable("start",c.onStart)},onMove:function(){a(this).flickable("move",c.onMove)},onEnd:function(){a(this).flickable("finished",c.onEnd)},onScroll:function(){a(this).flickable("scrollToSegment",c.onScroll)},onScrollPrev:function(){a(this).flickable("prevSegment",c.onScrollPrev)},onScrollNext:function(){a(this).flickable("nextSegment",c.onScrollNext)},onFlick:function(){a(this).flickable("flick",c.onFlick)},onFlickLeft:function(){a(this).flickable("flickLeft",c.onFlickLeft)},onFlickRight:function(){a(this).flickable("flickRight",c.onFlickRight)},onFlickUp:function(){a(this).flickable("flickUp",c.onFlickUp)},onFlickDown:function(){a(this).flickable("flickDown",c.onFlickDown)},touchstart:function(b){j(b);a(this).trigger("onStart")},touchmove:function(b){if(c.preventDefault){b.preventDefault()}k(b);a(this).trigger("onMove")},touchend:function(b){l(b);a(this).trigger("onEnd")}});if(!o("transform")){d=true}if(parseInt(c.flickThreshold)){f=parseInt(c.flickThreshold)}if(h||c.enableDebugger){p()}b.flickable("create",c.onCreate)}})},create:function(d){var f=a(this);b=c;e++;q("It's alive!");if(!f.attr("id")){f.attr("id","flickable"+e)}f.flickable("scrollToSegment");if(typeof d=="function"){d.call(this,e)}},start:function(c){q("Touch start");var d=a(this),e=parseInt(d.data("segment")),f=parseInt(d.data("segmentPx")),g=-(f*e);d.data("anchor",g);if(typeof c=="function"){c.call(this,b)}},segment:function(b){var c=a(this),d=parseInt(c.data("segments")),e=parseInt(c.data("segment"));if(typeof b!="undefined"){if(b>=d){b=d-1}else if(b<0){b=0}if(b!==e){c.data("segment",b).trigger("onScroll")}else{c.flickable("scrollToSegment")}}return parseInt(c.data("segment"))},move:function(c){var e=a(this),f,g,h=e.data("flickDirection"),i=parseInt(e.data("anchor")),f=i+b.delta.dist[h];if(d){if(h=="y"){e.css("top",f)}else{e.css("left",f)}}else{h=="y"?g="(0,"+f+"px,0)":g="("+f+"px,0,0)";if(typeof document.getElementById(e.attr("id")).style.webkitTransform!="undefined"){document.getElementById(e.attr("id")).style.webkitTransform="translate3d"+g}else if(typeof document.getElementById(e.attr("id")).style.mozTransform!="undefined"){document.getElementById(e.attr("id")).style.mozTransform="translate3d"+g}else{document.getElementById(e.attr("id")).style.transform="translate3d"+g}}a(this).data("pos",f);if(typeof c=="function"){c.call(this,b)}},scrollNext:function(){a(this).trigger("onScrollNext")},scrollPrev:function(){a(this).trigger("onScrollPrev")},nextSegment:function(c){q("Next segment");var d=a(this),e=parseInt(d.data("segment"))+1;d.flickable("segment",e);if(typeof c=="function"){c.call(this,b,e)}},prevSegment:function(c){q("Previous segment");var d=a(this),e=parseInt(d.data("segment"))-1;d.flickable("segment",e);if(typeof c=="function"){c.call(this,b,e)}},flick:function(c){q("You flicked");var d=a(this);switch(b.end.flick.x){case-1:d.trigger("onFlickLeft");break;case 1:d.trigger("onFlickRight");break}switch(b.end.flick.y){case-1:d.trigger("onFlickUp");break;case 1:d.trigger("onFlickDown");break}if(typeof c=="function"){c.call(this,b)}},flickLeft:function(c){q("Flicked left");var d=a(this),e=parseInt(d.data("segment"));d.trigger("onScrollNext");if(typeof c=="function"){c.call(this,b,e)}},flickRight:function(c){q("Flicked right");var d=a(this),e=parseInt(d.data("segment"));d.trigger("onScrollPrev");if(typeof c=="function"){c.call(this,b,e)}},flickUp:function(c){q("Flicked up");var d=a(this),e=parseInt(d.data("segment"));d.trigger("onScrollNext");if(typeof c=="function"){c.call(this,b,e)}},flickDown:function(c){q("Flicked down");var d=a(this),e=parseInt(d.data("segment"));d.trigger("onScrollPrev");if(typeof c=="function"){c.call(this,b,e)}},scrollToSegment:function(c){var e=a(this),f,g=e.data("flickDirection"),h=parseFloat(e.data("snapSpeed")),i=parseFloat(e.data("flickSnapSpeed")),j=parseInt(e.data("segments")),k=parseInt(e.data("segment")),l=parseInt(e.data("segmentPx")),m=-(l*k),n="ease-out";q("Sliding to segment "+k);if(b.end.flick.x||b.end.flick.y){h=i;n="cubic-bezier(0, .70, .35, 1)"}e.data("anchor",m).data("pos",m).data("segment",k);if(d){if(g=="y"){e.anim({top:m},h,n)}else{e.anim({left:m},h,n)}}else{g=="y"?f="0px, "+m+"px, 0px":f=m+"px, 0px, 0px";e.anim({translate3d:f},h,n)}if(typeof c=="function"){c.call(this,b,k)}},finished:function(c){var d=a(this),e=d.data("flickDirection"),f=parseInt(d.data("segments")),g=parseInt(d.data("segment")),h=parseInt(d.data("segmentPx")),i=parseInt(d.data("anchor")),j=parseInt(d.data("pos"));var k;j<0?k=Math.abs(Math.round(j/h)):k=0;q("Nearest segment is "+k);if(typeof c=="function"){c.call(this,b,g)}if(g==k){if(b.end.flick[e]){return d.trigger("onFlick")}}if(k==g+1){d.trigger("onScrollNext")}else if(k==g-1){d.trigger("onScrollPrev")}else{d.flickable("segment",k)}}};a.fn.flickable=function(b){if(i[b]){return i[b].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof b==="object"||!b){return i.init.apply(this,arguments)}else{a.error("Method "+b+" does not exist")}}})(Zepto)