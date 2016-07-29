!function(t,i){"function"==typeof define&&define.amd?define(["d3","../common/SVGWidget","./Axis","../common/Utility","css!./XYAxis"],i):t.chart_XYAxis=i(t.d3,t.common_SVGWidget,t.chart_Axis,t.common_Utility)}(this,function(t,i,s,e){function o(){i.call(this),e.SimpleSelectionMixin.call(this),this._drawStartPos="origin",this.domainAxis=(new s).orientation_default("bottom").type_default("ordinal").overlapMode_default("stagger").shrinkToFit_default("high").extend_default(0),this.valueAxis=(new s).orientation_default("left").type_default("linear").shrinkToFit_default("high");var o=this;this.xBrush=t.svg.brush().on("brush",function(){return o.brushMoved()}),this.yBrush=t.svg.brush().on("brush",function(){return o.brushMoved()})}return o.prototype=Object.create(i.prototype),o.prototype.constructor=o,o.prototype._class+=" chart_XYAxis",o.prototype.mixin(e.SimpleSelectionMixin),o.prototype.publish("orientation","horizontal","set","Selects orientation for the axis",["horizontal","vertical"]),o.prototype.publish("selectionMode",!1,"boolean","Range Selector"),o.prototype.publishProxy("xAxisTickCount","domainAxis","tickCount"),o.prototype.publishProxy("xAxisTickFormat","domainAxis","tickFormat"),o.prototype.publishProxy("xAxisType","domainAxis","type"),o.prototype.publishProxy("xAxisTypeTimePattern","domainAxis","timePattern"),o.prototype.publish("xAxisDomainLow",null,"string","X-Axis Low",null,{optional:!0,disable:function(t){return"ordinal"===t.xAxisType()}}),o.prototype.publish("xAxisDomainHigh",null,"string","X-Axis High",null,{optional:!0,disable:function(t){return"ordinal"===t.xAxisType()}}),o.prototype.publishProxy("xAxisOverlapMode","domainAxis","overlapMode"),o.prototype.publishProxy("xAxisLabelRotation","domainAxis","labelRotation"),o.prototype.publishProxy("xAxisDomainPadding","domainAxis","extend"),o.prototype.publish("xAxisGuideLines",!1,"boolean","Y-Axis Guide Lines"),o.prototype.publish("xAxisFocus",!1,"boolean","X-Axis Focus",null,{disable:function(t){return"horizontal"!==t.orientation()}}),o.prototype.publish("xAxisFocusHeight",80,"number","X-Axis Focus Height",null,{disable:function(t){return!t.xAxisFocus()}}),o.prototype.publishProxy("yAxisTitle","valueAxis","title"),o.prototype.publishProxy("yAxisTickCount","valueAxis","tickCount"),o.prototype.publishProxy("yAxisTickFormat","valueAxis","tickFormat"),o.prototype.publishProxy("yAxisType","valueAxis","type"),o.prototype.publishProxy("yAxisTypeTimePattern","valueAxis","timePattern"),o.prototype.publishProxy("yAxisTypePowExponent","valueAxis","powExponent"),o.prototype.publishProxy("yAxisTypeLogBase","valueAxis","logBase"),o.prototype.publish("yAxisDomainLow",null,"string","Y-Axis Low",null,{optional:!0,disable:function(t){return"ordinal"===t.yAxisType()}}),o.prototype.publish("yAxisDomainHigh",null,"string","Y-Axis High",null,{optional:!0,disable:function(t){return"ordinal"===t.yAxisType()}}),o.prototype.publishProxy("yAxisDomainPadding","valueAxis","extend"),o.prototype.publish("yAxisGuideLines",!0,"boolean","Y-Axis Guide Lines"),o.prototype.publish("regions",[],"array","Regions"),o.prototype.publish("sampleData","","set","Display Sample Data",["","ordinal","ordinalRange","linear","time-x","time-y"]),o.prototype.resetSelection=function(){return this._prevBrush=null,this},o.prototype.columns=function(t){return i.prototype.columns.apply(this,arguments)},o.prototype.parseData=function(t){return this.domainAxis.parse(t)},o.prototype.parseValue=function(t){return this.valueAxis.parse(t,!0)},o.prototype.formatData=function(t){return this.domainAxis.format(t)},o.prototype.formatValue=function(t){return this.valueAxis.format(t,!0)},o.prototype.parsedData=function(){return this.data().map(function(t){return t.map(function(t,i){return 0===i?this.parseData(t):i>=this.columns().length?t:this.parseValue(t)},this)},this)},o.prototype.enter=function(t,s){i.prototype.enter.apply(this,arguments),this.svg=s.append("g"),this.svgRegions=s.append("g"),this.svgDomainGuide=this.svg.append("g"),this.svgValueGuide=this.svg.append("g"),this.svgData=this.svg.append("g"),this.svgDataClipRect=this.svg.append("clipPath").attr("id",this.id()+"_clippath").append("rect").attr("x",0).attr("y",0),this.svgData=this.svg.append("g").attr("clip-path","url(#"+this.id()+"_clippath)"),this._selection.widgetElement(this.svgData),this.svgFocus=s.append("g"),this.domainAxis.target(this.svg.node()).guideTarget(this.svgDomainGuide.node()),this.valueAxis.target(this.svg.node()).guideTarget(this.svgValueGuide.node()),this.svgBrush=s.append("g").attr("class","brush")},o.prototype.resizeBrushHandle=function(t,i,s){var e,o,n;return"e"===t||"w"===t?(e=+("e"===t),o=e?1:-1,n=s/3,"M"+.5*o+","+n+"A6,6 0 0 "+e+" "+6.5*o+","+(n+6)+"V"+(2*n-6)+"A6,6 0 0 "+e+" "+.5*o+","+2*n+"ZM"+2.5*o+","+(n+8)+"V"+(2*n-8)+"M"+4.5*o+","+(n+8)+"V"+(2*n-8)):(e=+("s"===t),n=e?1:-1,o=i/3,"M"+o+", "+.5*n+"A6,6 0 0 "+(e+1)%2+" "+(o+6)+","+6.5*n+"H"+(2*o-6)+"A6,6 0 0 "+(e+1)%2+" "+2*o+","+.5*n+"ZM"+(o+8)+","+2.5*n+"H"+(2*o-8)+"M"+(o+8)+","+4.5*n+"H"+(2*o-8))},o.prototype.brushMoved=i.prototype.debounce(function(){var t=this.data().filter(function(t){var i=t[0];return"ordinal"===this.xAxisType()&&(i=this.domainAxis.d3Scale(i)+(this.domainAxis.d3Scale.rangeBand?this.domainAxis.d3Scale.rangeBand()/2:0)),"horizontal"===this.orientation()?i>=this.xBrush.extent()[0]&&i<=this.xBrush.extent()[1]:i>=this.yBrush.extent()[0]&&i<=this.yBrush.extent()[1]},this);this.selection(t)},250),o.prototype.dataPos=function(t){return this.domainAxis.scalePos(t)},o.prototype.valuePos=function(t){return this.valueAxis.scalePos(t)},o.prototype.setScaleRange=function(t,i){this.xAxis.width(t),this.yAxis.height(i)},o.prototype.calcMargin=function(t,i,s){for(var e={top:!s&&this.selectionMode()?10:2,right:s&&(this.selectionMode()||this.xAxisFocus())?10:2,bottom:(this.xAxisFocus()?this.xAxisFocusHeight():0)+2,left:2},o=this.width()-e.left-e.right,n=this.height()-e.top-e.bottom,r=30,a=30,h=0;10>h;++h){this.xAxis.width(o-a).height(0);var u=this.xAxis.calcOverflow(i);this.yAxis.width(0).height(n-r);var l=this.yAxis.calcOverflow(i),p=u.depth,x=l.depth;if(p===r&&x===a){r=p,a=x;break}r=p,a=x}return this.xAxis.x(o/2+a/2+e.left).y(n+e.top).width(o-a),this.yAxis.x(e.left).y(n/2-r/2+e.top).height(n-r),e.left+=a,e.bottom+=r,e},o.prototype.updateRegions=function(i,s,e){var o=this,n=this.svgRegions.selectAll(".region").data(this.regions());n.enter().append("rect").attr("class","region"),e?n.attr("x",function(t){return o.dataPos(t.x0)}).attr("y",0).attr("width",function(t){return o.dataPos(t.x1)-o.dataPos(t.x0)}).attr("height",this.height()).style("stroke",function(t){return o._palette(t.colorID)}).style("fill",function(i){return t.hsl(o._palette(i.colorID)).brighter()}):n.attr("x",0).attr("y",function(t){return o.dataPos(t.x0)}).attr("width",this.width()).attr("height",function(t){return o.dataPos(t.x0)-o.dataPos(t.x1)}).style("stroke",function(t){return o._palette(t.colorID)}).style("fill",function(i){return t.hsl(o._palette(i.colorID)).brighter()}),n.exit().remove()},o.prototype.update=function(i,s){var e=this,o="horizontal"===this.orientation();this.updateRegions(i,s,o),this.domainAxis.orientation(o?"bottom":"left").title(this.columns()[0]),this.valueAxis.orientation(o?"left":"bottom"),this.xAxis=o?this.domainAxis:this.valueAxis,this.yAxis=o?this.valueAxis:this.domainAxis;var n=o?this.xBrush:this.yBrush,r=o?this.yBrush:this.xBrush,a=r.extent();switch(this.xAxisType()){case"ordinal":this.domainAxis.ordinals(this.data().map(function(t){return t[0]}));break;default:var h=this.xAxisDomainLow()?this.xAxisDomainLow():this.domainAxis.parseInvert(t.min(this.parsedData(),function(t){return t[0]})),u=this.xAxisDomainHigh()?this.xAxisDomainHigh():this.domainAxis.parseInvert(t.max(this.parsedData(),function(t){return t[0]}));void 0!==h&&void 0!==u&&this.domainAxis.low(h).high(u)}var l=this.yAxisDomainLow()?this.yAxisDomainLow():this.valueAxis.parseInvert(t.min(this.parsedData(),function(i){return t.min(i.filter(function(t,i){return i>0&&e.columns()[i]&&0!==e.columns()[i].indexOf("__")&&null!==t}),function(t){return t instanceof Array?t[0]:t})})),p=this.yAxisDomainHigh()?this.yAxisDomainHigh():this.valueAxis.parseInvert(t.max(this.parsedData(),function(i){return t.max(i.filter(function(t,i){return i>0&&e.columns()[i]&&0!==e.columns()[i].indexOf("__")&&null!==t}),function(t){return t instanceof Array?t[1]:t})}));this.valueAxis.low(l).high(p),this.margin=this.calcMargin(i,s,o);var x=this.width()-this.margin.left-this.margin.right;0>x&&(x=0);var c=this.height()-this.margin.top-this.margin.bottom;0>c&&(c=0);var d=o?x:c,y=o?c:x;if(this.domainAxis.tickLength(this.xAxisGuideLines()?y:0).render(),this.valueAxis.tickLength(this.yAxisGuideLines()?d:0).render(),this.svgDataClipRect.attr("width",x).attr("height",c),this.svgData.transition().attr("transform","translate("+this.margin.left+","+this.margin.top+")"),this.xBrush.x(this.domainAxis.d3Scale),this.yBrush.y(this.domainAxis.d3Scale),this.selectionMode()){if(this._prevXAxisType!==this.xAxisType()&&(this._prevXAxisType=this.xAxisType(),this._prevBrush=null),this._prevBrush){if(this._prevBrush&&this._prevBrush.orientation!==this.orientation())switch(this.xAxisType()){case"ordinal":n.extent([d-a[0]*d/this._prevBrush.maxCurrExtent,d-a[1]*d/this._prevBrush.maxCurrExtent]);break;default:n.extent(a)}}else switch(this.xAxisType()){case"ordinal":n.extent([0,d]);break;default:n.extent(this.domainAxis.d3Scale.domain())}this._prevBrush={orientation:this.orientation(),maxCurrExtent:d}}this.svgBrush.attr("transform","translate("+this.margin.left+", "+this.margin.top+")").style("display",this.selectionMode()?null:"none").call(n).selectAll(".background").transition().attr("width",x).attr("height",c),this.svgBrush.selectAll(".extent, .resize rect").transition().attr(o?"y":"x",0).attr(o?"height":"width",y);var A=this.svgBrush.selectAll(".resize").selectAll("path").data(function(t){return t});A.enter().append("path"),A.transition().attr("d",function(t){return e.resizeBrushHandle(t,x,c)}),this.updateFocusChart(i,s,this.margin,x,c,o),this.updateChart(i,s,this.margin,x,c,o,250)},o.prototype.updateFocusChart=function(t,i,s,e,o,n){function r(){if("ordinal"!==a.focusChart.xAxisType())a.xAxis.domain(a.focusChart.xBrush.extent());else{var t=a.focusChart.xBrush.extent(),i=t[1]-t[0],s=i/e;a.xAxis.range([-t[0]/s,(e-t[0])/s])}a.xAxis.svgAxis.call(a.xAxis.d3Axis),a.xAxis.svgGuides.call(a.xAxis.d3Guides)}var a=this,h=this.svgFocus.selectAll("#"+this.id()+"_focusChart").data(this.xAxisFocus()?[!0]:[]);h.enter().append("g").attr("id",this.id()+"_focusChart").each(function(h){a.focusChart=(new a.constructor).target(this),a.focusChart.xBrush.on("brush.focus",function(){r(),a.updateChart(t,i,s,e,o,n,0)})}),h.each(function(t){a.copyPropsTo(a.focusChart),a.focusChart.xAxisFocus(!1).selectionMode(!0).tooltipStyle("none").orientation("horizontal").xAxisGuideLines(!1).xAxisDomainLow(null).xAxisDomainHigh(null).yAxisGuideLines(!1).x(a.width()/2).y(a.height()-a.xAxisFocusHeight()/2).width(a.width()).height(a.xAxisFocusHeight()).columns(a.columns()).data(a.data()).render(),r()}),h.exit().each(function(t){a.focusChart&&(a.focusChart.target(null),delete a.focusChart)}).remove()},o.prototype.updateChart=function(t,i,s,e,o,n,r){},o.prototype.exit=function(t,s){i.prototype.exit.apply(this,arguments)},o.prototype.selection=function(t){},o});