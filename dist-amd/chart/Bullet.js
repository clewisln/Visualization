!function(t,e){"function"==typeof define&&define.amd?define(["d3","../common/HTMLWidget","../common/Utility","d3-bullet","css!./Bullet"],e):t.chart_Bullet=e(t.d3,t.common_HTMLWidget,t.common_Utility,t.d3.bullet)}(this,function(t,e,l,o){function n(t){e.call(this),l.SimpleSelectionMixin.call(this,!0)}return o=o||t.bullet||window.d3.bullet,n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype._class+=" chart_Bullet",n.prototype.publish("titleColumn",null,"set","Title Column",function(){return this.columns()},{optional:!0}),n.prototype.publish("subtitleColumn",null,"set","Subtitle Column",function(){return this.columns()},{optional:!0}),n.prototype.publish("rangesColumn",null,"set","Ranges Column",function(){return this.columns()},{optional:!0}),n.prototype.publish("measuresColumn",null,"set","Measures Column",function(){return this.columns()},{optional:!0}),n.prototype.publish("markersColumn",null,"set","Markers Column",function(){return this.columns()},{optional:!0}),n.prototype.bulletData=function(){function t(t,l){var o=e.indexOf(l);return o>=0?t[o]instanceof Array?t[o]:[t[o]]:[]}var e=this.columns();return this.data().map(function(e){return{title:t(e,this.titleColumn()),subtitle:t(e,this.subtitleColumn()),ranges:t(e,this.rangesColumn()),measures:t(e,this.measuresColumn()),markers:t(e,this.markersColumn()),origRow:e}},this)},n.prototype.enter=function(l,o){e.prototype.enter.apply(this,arguments),t.select(l.parentNode).style("overflow","auto"),this._selection.widgetElement(o)},n.prototype.update=function(l,n){e.prototype.update.apply(this,arguments);var i=this,s={top:8,right:16,bottom:20,left:16},r=this.width()-s.left-s.right,u=50-s.top-s.bottom,a=n.selectAll("svg").data(this.bulletData());a.enter().append("svg").attr("class","bullet").call(this._selection.enter.bind(this._selection)).on("click",function(t){i.click(i.rowToObj(t.origRow),i.titleColumn(),i._selection.selected(this))}).each(function(e){var l=t.select(this),o=l.append("g").attr("class","bulletBar"),n=o.append("g").attr("class","bulletTitle");n.append("text").attr("class","title"),n.append("text").attr("class","subtitle").attr("dy","1em")});var c=a.select(".bulletTitle").style("text-anchor","end").attr("transform","translate(-6,"+u/2+")");c.select(".title").text(function(t){return t.title}),c.select(".subtitle").text(function(t){return t.subtitle});var p=0;c.each(function(){var t=this.getBBox();t.width>p&&(p=t.width)});var m=(new o).width(r-p).height(u);a.attr("width",r).attr("height",u+s.top+s.bottom),a.select(".bulletBar").attr("transform","translate("+(p+s.left)+","+s.top+")").call(m),a.exit().remove()},n.prototype.exit=function(t,l){e.prototype.exit.apply(this,arguments)},n.prototype.click=function(t,e,l){console.log("Click:  "+JSON.stringify(t)+", "+e+","+l)},n});