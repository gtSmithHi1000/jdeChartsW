/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtDiagram"],function(a,g,c,b,d){a.Na("oj.ojDiagram",g.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{optionChange:null,beforeExpand:null,expand:null,beforeCollapse:null,collapse:null},Qh:function(b){this.options._logger=a.r;this.options._templateFunction&&(this.options.renderer=this.pJ(this.options._templateFunction));this.options.renderer&&(this.options._contextHandler=this.BS());return this._super(b)},
pJ:function(a){var b=this;return function(c){var d=document.createElement("div");d.style.display="none";d.yC=b.$f;b.element.append(d);a({parentElement:d,data:c.data});return(c=d.children[0])&&"http://www.w3.org/2000/svg"===c.namespaceURI?(d.removeChild(c),g(d).remove(),c):c?b.AB(c):null}},BS:function(){var b=this;return function(c,d,g,l,m,r){return{component:a.Components.Kf(b.element),parentElement:c,rootElement:d,content:g,data:l,state:m,previousState:r,id:l.id,type:"node",label:l.label}}},renderDefaultHover:function(a){a.previousState&&
a.state.hovered==a.previousState.hovered||this.AB(this.element).processDefaultHoverEffect(a.id,a.state.hovered)},renderDefaultSelection:function(a){a.previousState&&a.state.selected==a.previousState.selected||this.AB(this.element).processDefaultSelectionEffect(a.id,a.state.selected)},renderDefaultFocus:function(a){a.previousState&&a.state.focused==a.previousState.focused||this.AB(this.element).processDefaultFocusEffect(a.id,a.state.focused)},yg:function(a,b,c){return d.Diagram.newInstance(a,b,c)},
tk:function(a){var b=a.subId;"oj-diagram-link"==b?b="link["+a.index+"]":"oj-diagram-node"==b?b="node["+a.index+"]":"oj-diagram-tooltip"==b&&(b="tooltip");return b},Mh:function(a){var b={};0==a.indexOf("link")?(b.subId="oj-diagram-link",b.index=this.wk(a)):0==a.indexOf("node")?(b.subId="oj-diagram-node",b.index=this.wk(a)):"tooltip"==a&&(b.subId="oj-diagram-tooltip");return b},Cf:function(){var a=this._super();a.push("oj-diagram");return a},uk:function(){var a=this._super();a["oj-diagram-node-label"]=
{path:"styleDefaults/nodeDefaults/labelStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-diagram-node oj-selected"]={path:"styleDefaults/nodeDefaults/selectionColor",property:"border-color"};a["oj-diagram-node oj-hover"]=[{path:"styleDefaults/nodeDefaults/hoverOuterColor",property:"border-top-color"},{path:"styleDefaults/nodeDefaults/hoverInnerColor",property:"border-bottom-color"}];a["oj-diagram-link"]={path:"styleDefaults/linkDefaults/color",property:"color"};a["oj-diagram-link-label"]={path:"styleDefaults/linkDefaults/labelStyle",
property:"CSS_TEXT_PROPERTIES"};a["oj-diagram-link oj-selected"]={path:"styleDefaults/linkDefaults/selectionColor",property:"border-color"};a["oj-diagram-link oj-hover"]=[{path:"styleDefaults/linkDefaults/hoverOuterColor",property:"border-top-color"},{path:"styleDefaults/linkDefaults/hoverInnerColor",property:"border-bottom-color"}];return a},tj:function(){return["optionChange","beforeExpand","beforeCollapse","expand","collapse"]},tl:function(a){var b=a.type;"beforeExpand"===b?this.expand(a.id,!0):
"beforeCollapse"===b?this.collapse(a.id,!0):"expand"===b||"collapse"===b?this._trigger(b,null,{nodeId:a.id}):this._super(a)},_setOptions:function(a,b){a.expanded&&this.xa.clearDisclosedState();this._superApply(arguments)},Mi:function(){var a=this.options.translations,b=this._super();b["DvtDiagramBundle.PROMOTED_LINK"]=a.promotedLink;b["DvtDiagramBundle.PROMOTED_LINKS"]=a.promotedLinks;b["DvtDiagramBundle.PROMOTED_LINK_ARIA_DESC"]=a.promotedLinkAriaDesc;b["DvtUtilBundle.DIAGRAM"]=a.componentName;return b},
eo:function(){null==this.options._resources&&(this.options._resources={});var b=this.options._resources;"rtl"===a.A.yn()?(b.collapse_ena={src:a.ga.gb("resources/internal-deps/dvt/diagram/container-collapse-button-ena_rtl.svg"),width:20,height:20},b.collapse_ovr={src:a.ga.gb("resources/internal-deps/dvt/diagram/container-collapse-button-ovr_rtl.svg"),width:20,height:20},b.collapse_dwn={src:a.ga.gb("resources/internal-deps/dvt/diagram/container-collapse-button-dwn_rtl.svg"),width:20,height:20},b.expand_ena=
{src:a.ga.gb("resources/internal-deps/dvt/diagram/container-expand-button-ena_rtl.svg"),width:20,height:20},b.expand_ovr={src:a.ga.gb("resources/internal-deps/dvt/diagram/container-expand-button-ovr_rtl.svg"),width:20,height:20},b.expand_dwn={src:a.ga.gb("resources/internal-deps/dvt/diagram/container-expand-button-dwn_rtl.svg"),width:20,height:20}):(b.collapse_ena={src:a.ga.gb("resources/internal-deps/dvt/diagram/container-collapse-button-ena.svg"),width:20,height:20},b.collapse_ovr={src:a.ga.gb("resources/internal-deps/dvt/diagram/container-collapse-button-ovr.svg"),
width:20,height:20},b.collapse_dwn={src:a.ga.gb("resources/internal-deps/dvt/diagram/container-collapse-button-dwn.svg"),width:20,height:20},b.expand_ena={src:a.ga.gb("resources/internal-deps/dvt/diagram/container-expand-button-ena.svg"),width:20,height:20},b.expand_ovr={src:a.ga.gb("resources/internal-deps/dvt/diagram/container-expand-button-ovr.svg"),width:20,height:20},b.expand_dwn={src:a.ga.gb("resources/internal-deps/dvt/diagram/container-expand-button-dwn.svg"),width:20,height:20})},collapse:function(a,
b){var c=this._trigger("beforeCollapse",null,{nodeId:a});b&&!1===c||this.xa.collapse(a)},expand:function(a,b){var c=this._trigger("beforeExpand",null,{nodeId:a});b&&!1===c||this.xa.expand(a)},getNodeCount:function(){return this.xa.getAutomation().getNodeCount()},getNode:function(a){return this.xa.getAutomation().getNode(a)},getLinkCount:function(){return this.xa.getAutomation().getLinkCount()},getLink:function(a){return this.xa.getAutomation().getLink(a)},getPromotedLink:function(a,b){return this.xa.getAutomation().getPromotedLink(a,
b)},getContextByNode:function(a){return(a=this.getSubIdByNode(a))&&"oj-diagram-tooltip"!==a.subId?a:null},vk:function(){return{root:["nodes","links"]}}});a.Qf=function(){};o_("DiagramUtils",a.Qf,a);a.Qf.gM=function(b){return function(c){if(b.nodes&&0<c.getNodeCount())for(var d=a.Qf.JR(b.nodes),g=b.nodeDefaults&&b.nodeDefaults.labelLayout?b.nodeDefaults.labelLayout:null,l=0;l<c.getNodeCount();l++){var m=c.getNodeByIndex(l),r=d[m.getId()];a.Qf.X$(m.getChildNodes(),r?r.nodes:null,c,g);a.Qf.Y$(m,r,c,
g)}if(b.links&&0<c.getLinkCount())for(d=a.Qf.JR(b.links),l=b.linkDefaults&&b.linkDefaults.path?b.linkDefaults.path:null,g=b.linkDefaults&&b.linkDefaults.labelLayout?b.linkDefaults.labelLayout:null,m=0;m<c.getLinkCount();m++){var r=c.getLinkByIndex(m),t=d[r.getId()];t&&t.path?r.setPoints(t.path):l&&l instanceof Function&&r.setPoints(l(c,r));t&&t.coordinateSpace&&r.setCoordinateSpace(t.coordinateSpace);t.labelLayout?a.Qf.kE(r,t.labelLayout):g&&g instanceof Function&&a.Qf.kE(r,g(c,r))}}};o_("DiagramUtils.getLayout",
a.Qf.gM,a);a.Qf.JR=function(a){var b={};if(a)for(var c=0;c<a.length;c++)b[a[c].id]=a[c];return b};a.Qf.X$=function(b,c,d,g){if(b&&c){c=a.Qf.JR(c);for(var l=0;l<b.length;l++){var m=b[l],r=c[m.getId()];a.Qf.X$(m.getChildNodes(),r?r.nodes:null,d,g);a.Qf.Y$(m,r,d,g)}}};a.Qf.Y$=function(b,c,d,g){b&&c&&(b.setPosition({x:c.x,y:c.y}),c.labelLayout?a.Qf.kE(b,c.labelLayout):g&&g instanceof Function?a.Qf.kE(b,g(d,b)):g&&a.Qf.kE(b,g,b.getPosition()))};a.Qf.kE=function(a,b,c){c=c?c:{x:0,y:0};a.setLabelPosition({x:b.x+
c.x,y:b.y+c.y});var d=b.rotationPointX,g=b.rotationPointY;isNaN(d)||isNaN(g)||a.setLabelRotationPoint({x:d+c.x,y:g+c.y});a.setLabelRotationAngle(b.angle);a.setLabelHalign(b.halign);a.setLabelValign(b.valign)};a.Components.Ua("ojDiagram","dvtBaseComponent",{properties:{animationOnDataChange:{type:"string"},animationOnDisplay:{type:"string"},expanded:{type:"Array\x3cstring\x3e|string"},focusRenderer:{},hiddenCategories:{type:"Array\x3cstring\x3e"},highlightedCategories:{type:"Array\x3cstring\x3e"},
highlightMatch:{type:"string"},hoverBehavior:{type:"string"},hoverRenderer:{},layout:{},linkHighlightMode:{type:"string"},links:{type:"Array\x3cobject\x3e"},maxZoom:{type:"number"},minZoom:{type:"number"},nodeHighlightMode:{type:"string"},nodes:{type:"Array\x3cobject\x3e"},panDirection:{type:"string"},panning:{type:"string"},renderer:{},selection:{type:"Array\x3cstring\x3e"},selectionMode:{type:"string"},selectionRenderer:{},styleDefaults:{type:"object"},tooltip:{type:"object"},touchResponse:{type:"string"},
zooming:{type:"string"},zoomRenderer:{}},methods:{collapse:{},expand:{},getContextByNode:{},getLink:{},getLinkCount:{},getNode:{},getNodeCount:{},getPromotedLink:{},renderDefaultFocus:{},renderDefaultHover:{},renderDefaultSelection:{}},extension:{_widgetName:"ojDiagram"}});a.Components.register("oj-diagram",a.Components.getMetadata("ojDiagram"))});