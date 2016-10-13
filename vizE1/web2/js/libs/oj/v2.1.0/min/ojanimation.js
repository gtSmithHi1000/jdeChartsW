/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","promise"],function(a,g){a.W={};o_("AnimationUtils",a.W,a);a.W.Yx=function(c,b,d,e,f,h){var k=g(c),l=[].concat(f);return(new Promise(function(c){function g(){s||(k.off("transitionend webkitTransitionEnd",t),c(!0),s=!0)}function t(a){a=l.indexOf(a.originalEvent.propertyName);-1<a&&(1<l.length?l.splice(a,1):g())}var s=!1;null==d.css&&(d.css={});d.css.transition=a.W.Wqa(f,e);var n=a.W.uBa(k,b,d,e,h||f);a.W.z3(k,b,1<n);k.on("transitionend webkitTransitionEnd",t);window.setTimeout(function(){a.W.z3(k,
d,1<n);setTimeout(g,a.W.Y3(k)+100)},20)})).then(function(){b&&b.addClass&&k.removeClass(b.addClass);d&&d.addClass&&k.removeClass(d.addClass);a.W.pBa(k)})};a.W.tba=function(c,b,d,e){for(var f in b)if(b=a.W.A6(f),!(d.hasOwnProperty(b)||e&&-1!=e.indexOf(b))){var g=c[0].style;d[b]=void 0===g[b]?g[a.W.i8(b)]:g[b]}};a.W.uBa=function(c,b,d,e,f){var g=c.data("_ojSavedStyle")||{};b=b&&b.css?b.css:{};d=d&&d.css?d.css:{};e&&"all"===e.persist||(f=null);a.W.tba(c,b,g,f);a.W.tba(c,d,g,f);c.data("_ojSavedStyle",
g);e=c.data("_ojEffectCount")||0;c.data("_ojEffectCount",++e);return e};a.W.pBa=function(a){var b=a.data("_ojEffectCount");if(1<b)a.data("_ojEffectCount",b-1);else if(b=a.data("_ojSavedStyle"))a.css(b),a.removeData("_ojSavedStyle"),a.removeData("_ojEffectCount")};a.W.A6=function(a){if(0<=a.indexOf("-")){var b="";a=a.split("-");for(var d=0;d<a.length;d++){var e=a[d];e&&(b=b?b+(e.charAt(0).toUpperCase()+e.slice(1)):e)}return b}return a};a.W.uta=function(a){return a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()};
a.W.i8=function(a){return"webkit"+a.charAt(0).toUpperCase()+a.slice(1)};a.W.J4=function(c,b,d,e,f){b.css[d]&&(d=a.W.A6(d),(c=c[0].style[d]||c[0].style[a.W.i8(d)])&&0!=c.indexOf(e)&&(b.css[d]=c+f+b.css[d]))};a.W.z3=function(c,b,d){b&&(b.css&&(d&&(a.W.J4(c,b,"transform","none"," "),a.W.J4(c,b,"transition","all",", ")),c.css(b.css)),b.addClass&&c.addClass(b.addClass),b.removeClass&&c.removeClass(b.removeClass))};a.W.X3=function(a,b,d){b=a.css(b);var e=a.css(d+"Delay");d=a.css(d+"Duration");a=e.split(",");
d=d.split(",");b=b.split(",").length;for(var e=a.length,f=d.length,g=0,k=0;k<b;k++){var l=d[k%f],l=-1<l.indexOf("ms")?parseFloat(l):1E3*parseFloat(l);if(0<l)var m=a[k%e],m=-1<m.indexOf("ms")?parseFloat(m):1E3*parseFloat(m),g=Math.max(g,m+l)}return g};a.W.Y3=function(c){var b=a.W.X3(c,"animationName","animation");c=a.W.X3(c,"transitionProperty","transition");return Math.max(b,c)};a.W.msa=function(a,b){a.delay=a.delay||b.delay;a.duration=a.duration||b.duration;a.timingFunction=a.timingFunction||b.timingFunction;
a.persist=a.persist||b.persist};a.W.On=function(c,b,d){return new Promise(function(e){function f(){s=!0;k()}function h(){t=!0;k()}function k(){t&&s&&(l.removeClass(m),l.removeClass(r),e(!0),l.trigger("ojanimateend",{action:b}))}var l=g(c),m="oj-animate-"+b,r=m+"-active",t=!1,s=!1,n=g.Event("ojanimatestart");l.trigger(n,{action:b,endCallback:h});if(!n.isDefaultPrevented()){for(var n=[].concat(d),p=[],q={},u=0;u<n.length;u++){var w=n[u],v="",y;null!=w&&"none"!=w&&("string"==typeof w?(v=w,y={}):"object"==
typeof w&&(v=w.effect,y=g.extend({},w)),a.W.msa(y,q),q=g.extend({},y));v&&a.W[v]&&p.push(a.W[v](c,y))}p.length?Promise.all(p).then(h):h()}l.addClass(m);window.setTimeout(function(){l.addClass(r);setTimeout(f,a.W.Y3(l)+100)},20)})};o_("AnimationUtils.startAnimation",a.W.On,a);a.W.bz=function(c,b){null==a.W.ky&&(a.W.ky=a.td.Of("oj-animation-effect-default-options"));return g.extend({duration:"400ms"},a.W.ky?a.W.ky[c]:null,b)};a.W.Wqa=function(c,b){var d="";if(c)for(var e=0;e<c.length;e++){var f=a.W.uta(c[e]),
d=d+((0<e?", ":"")+f+" "+b.duration);b.timingFunction&&(d+=" "+b.timingFunction);b.delay&&(d+=" "+b.delay)}return d};a.W.W5=function(c,b,d,e,f){b=a.W.bz(d,b);d={css:{opacity:e}};f={css:{opacity:f}};b&&(b.startOpacity&&(d.css.opacity=b.startOpacity),b.endOpacity&&(f.css.opacity=b.endOpacity));return a.W.Yx(c,d,f,b,["opacity"])};a.W.fadeIn=function(c,b){return a.W.W5(c,b,"fadeIn",0,1)};o_("AnimationUtils.fadeIn",a.W.fadeIn,a);a.W.fadeOut=function(c,b){return a.W.W5(c,b,"fadeOut",1,0)};o_("AnimationUtils.fadeOut",
a.W.fadeOut,a);a.W.expand=function(c,b){return a.W.T5(c,b,!0)};o_("AnimationUtils.expand",a.W.expand,a);a.W.collapse=function(c,b){return a.W.T5(c,b,!1)};o_("AnimationUtils.collapse",a.W.collapse,a);a.W.T5=function(c,b,d){b=a.W.bz(d?"expand":"collapse",b);var e={},f={},h=b.direction||"height";c=g(c);var k=c.width(),l=c.height(),m=c.css("maxWidth"),r=c.css("maxHeight"),t=e.css={},s=f.css={};"none"!==m&&(k=m);"none"!==r&&(l=r);m=[];if("both"===h||"height"===h)t.maxHeight=d?0:l,s.maxHeight=d?l:0,m.push("maxHeight");
if("both"===h||"width"===h)t.maxWidth=d?0:k,s.maxWidth=d?k:0,m.push("maxWidth");return a.W.Yx(c[0],e,f,b,m)};a.W.h_=function(c,b){return a.W.xda(c,b,!0)};o_("AnimationUtils.zoomIn",a.W.h_,a);a.W.i_=function(c,b){return a.W.xda(c,b,!1)};o_("AnimationUtils.zoomOut",a.W.i_,a);a.W.xda=function(c,b,d){b=a.W.bz(d?"zoomIn":"zoomOut",b);var e={},f={},h=b.axis||"both";c=g(c);var h="both"===h?"scale":"x"===h?"scaleX":"scaleY",k=e.css={},l=f.css={};k.transform=h+"("+(d?0:1)+") translateZ(0)";l.transform=h+"("+
(d?1:0)+") translateZ(0)";k.transformOrigin=b.transformOrigin||"center";return a.W.Yx(c[0],e,f,b,["transform"])};a.W.DJa=function(c,b){return a.W.So(c,b,!0)};o_("AnimationUtils.slideIn",a.W.DJa,a);a.W.EJa=function(c,b){return a.W.So(c,b,!1)};o_("AnimationUtils.slideOut",a.W.EJa,a);a.W.So=function(c,b,d){b=a.W.bz(d?"slideIn":"slideOut",b);var e={},f={},h=b.direction||"start";c=g(c);var k="0",l="0",m=e.css={},r=f.css={};if(b.offsetX||b.offsetY)b.offsetX&&(k=b.offsetX),b.offsetY&&(l=b.offsetY);else{var t=
c.outerWidth(),s=c.outerHeight(),n="rtl"===a.A.yn();switch(h){case "left":k=(d?t:-t)+"px";break;case "right":k=(d?-t:t)+"px";break;case "top":l=(d?s:-s)+"px";break;case "bottom":l=(d?-s:s)+"px";break;case "end":k=(d?-t:t)*(n?-1:1)+"px";break;default:k=(d?t:-t)*(n?-1:1)+"px"}}d?(m.transform="translate("+k+","+l+") translateZ(0)",r.transform="translate(0,0) translateZ(0)"):(m.transform="translate(0,0) translateZ(0)",r.transform="translate("+k+","+l+") translateZ(0)");return a.W.Yx(c[0],e,f,b,["transform"])};
a.W.oJa=function(c,b){b=a.W.bz("ripple",b);var d={},e={},f=g(c),h=f.outerWidth(),k=f.outerHeight(),l=g("\x3cdiv style\x3d'position:absolute; overflow:hidden'\x3e"),m=g("\x3cdiv class\x3d'oj-animation-effect-ripple oj-animation-rippler'\x3e"),r="static"==f.css("position")?f.position():{left:0,top:0};f.prepend(l);l.css({left:r.left+"px",top:r.top+"px",width:h+"px",height:k+"px"});l.prepend(m);f=d.css={};h=e.css={};a.W.tCa(f,m,l,b);f.transform="scale(0) translateZ(0)";f.opacity=b.startOpacity||m.css("opacity");
h.transform="scale(1) translateZ(0)";h.opacity=b.endOpacity||0;b.persist="all";return a.W.Yx(m[0],d,e,b,["transform","opacity"]).then(function(){l.remove()})};o_("AnimationUtils.ripple",a.W.oJa,a);a.W.tCa=function(c,b,d,e){b=b.width();var f=d.width(),g=d.height();if(e.diameter){var k=e.diameter,l=parseInt(k,10);isNaN(l)||(b="%"==k.charAt(k.length-1)?Math.floor(Math.min(f,g)*(l/100)):l,c.width=b+"px",c.height=b+"px")}d="static"==d.css("position")?d.position():{left:0,top:0};f=a.W.d4(e.offsetX,b,f,
d.left);null!=f&&(c.left=f+"px");f=a.W.d4(e.offsetY,b,g,d.top);null!=f&&(c.top=f+"px");e.color&&(c.backgroundColor=e.color)};a.W.d4=function(a,b,d,e){var f;a=a||"50%";var g=parseInt(a,10);isNaN(g)||(f="%"==a.charAt(a.length-1)?g/100*d-b/2:g-b/2,f=Math.floor(f+e));return f};a.W.nLa=function(c,b){b=b||{};var d={fadeOut:1,collapse:1,zoomOut:1,slideOut:1},e=b.removeEffect||"fadeOut",f=g(".oj-animation-rippler",c);if(0===f.length)console.warn("No rippler so returning");else return e in d?a.W[e](f,b).then(function(){f.remove()}):
f.remove()};a.W.o6=function(c,b,d,e,f){b=a.W.bz(d,b);d={};var g={},k={css:d},l={css:g},m="rotateY(",r="2000px",t="hidden",s="center";b&&("x"===b.axis&&(m="rotateX("),b.startAngle&&(e=b.startAngle),b.endAngle&&(f=b.endAngle),b.perspective&&(r=b.perspective),b.backfaceVisibility&&(t=b.backfaceVisibility),b.transformOrigin&&(s=b.transformOrigin));m="perspective("+r+") "+m;d.transform=m+e+")";d.backfaceVisibility=t;d.transformOrigin=s;g.transform=m+f+")";return a.W.Yx(c,k,l,b,["transform"],["transform",
"backfaceVisibility","transformOrigin"])};a.W.QFa=function(c,b){return a.W.o6(c,b,"flipIn","-180deg","0deg")};o_("AnimationUtils.flipIn",a.W.QFa,a);a.W.RFa=function(c,b){return a.W.o6(c,b,"flipOut","0deg","180deg")};o_("AnimationUtils.flipOut",a.W.RFa,a)});