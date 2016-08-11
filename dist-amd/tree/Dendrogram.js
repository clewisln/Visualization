!function(t,e){"function"==typeof define&&define.amd?define(["d3","../common/SVGZoomWidget","../common/PropertyExt","../api/ITree","../common/Utility","css!./Dendrogram"],e):t.tree_Dendrogram=e(t.d3,t.common_SVGZoomWidget,t.common_PropertyExt,t.api_ITree,t.common_Utility)}(this,function(t,e,r,n,i){function o(t){r.call(this),this._owner=t}function a(r){e.call(this),n.call(this),i.SimpleSelectionMixin.call(this),this._drawStartPos="origin";var o=this;this._d3LayoutCluster=t.layout.cluster(),this._d3LayoutTree=t.layout.tree(),this._d3Diagonal=t.svg.diagonal().projection(function(t){return"horizontal"===o.orientation()?[t.y,t.x]:[t.x,t.y]}),this._d3DiagonalRadial=t.svg.diagonal.radial().projection(function(t){return[t.y,t.x/180*Math.PI]})}return o.prototype=Object.create(r.prototype),o.prototype.constructor=o,o.prototype._class+=" tree_Dendrogram.Column",o.prototype.publish("column",null,"set","Field",function(){return this._owner?this._owner.columns():[]},{optional:!0}),a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.prototype._class+=" tree_Dendrogram",a.prototype["implements"](n.prototype),a.prototype.mixin(i.SimpleSelectionMixin),a.prototype.Column=o,a.prototype.publish("paletteID","default","set","Palette ID",a.prototype._palette["switch"](),{tags:["Basic","Shared"]}),a.prototype.publish("useClonedPalette",!1,"boolean","Enable or disable using a cloned palette",null,{tags:["Intermediate","Shared"]}),a.prototype.publish("mappings",[],"propertyArray","Source Columns",null,{autoExpand:o}),a.prototype.publish("circleRadius",4.5,"number","Text offset from circle"),a.prototype.publish("separation",240,"number","Leaf Separation"),a.prototype.publish("dendrogram",!0,"boolean","Dendrogram"),a.prototype.publish("radial",!1,"boolean","Radial"),a.prototype.publish("orientation","horizontal","set","Orientation",["horizontal","vertical"],{tags:["Private"],disabled:function(){return this.radial()}}),a.prototype.dendrogramData=function(){function t(e){return{label:e.key,children:e.values.filter(function(t){return!(t instanceof Array)}).map(function(e){return t(e)}),origRows:e.values}}if(!this.mappings().filter(function(t){return t.column()}).length)return this.data();var e=this._db.rollupView(this.mappings().map(function(t){return t.column()})),r={key:"root",values:e.entries()};return t(r)},a.prototype.enter=function(t,r){e.prototype.enter.apply(this,arguments),this._renderElement.attr("opacity",0),this._selection.widgetElement(this._renderElement)},a.prototype.update=function(r,n,i){function o(t){return a.radial()?"rotate("+(t.x-90)+")translate("+t.y+")":"horizontal"===a.orientation()?"translate("+t.y+","+t.x+")":"translate("+t.x+","+t.y+")"}e.prototype.update.apply(this,arguments);var a=this;this._palette=this._palette["switch"](this.paletteID()),this.useClonedPalette()&&(this._palette=this._palette.cloneNotExists(this.paletteID()+"_"+this.id())),this._renderElement.transition().duration(500).attr("opacity",1),this._d3Layout=this.dendrogram()?this._d3LayoutCluster:this._d3LayoutTree,this.radial()?(this._d3Layout.size([360,2*this.separation()]),this._d3Layout.separation(function(t,e){return(t.parent===e.parent?1:2)/t.depth})):(this._d3Layout.nodeSize([14,this.separation()]),this._d3Layout.separation(function(t,e){return t.parent===e.parent?1:2}));var l=this.dendrogramData(),s=this._d3Layout.nodes(l),p=this._d3Layout.links(s),d=this._renderCount?500:0,u=this._renderElement.selectAll(".link").data(p);u.enter().append("path").attr("class","link").attr("d",this.radial()?this._d3DiagonalRadial:this._d3Diagonal),u.transition().duration(d).attr("d",this.radial()?this._d3DiagonalRadial:this._d3Diagonal),u.exit().remove();var c=this.circleRadius()+2,h=this._renderElement.selectAll(".node").data(s);h.transition().duration(d).attr("transform",o),h.enter().append("g").attr("class","node").attr("transform",o).call(this._selection.enter.bind(this._selection)).on("click",function(t){for(var e=t;e.children;)e=e.children[0];t.depth>0&&a.click(a.rowToObj(e.origRows[0]),a.mappings()[t.depth-1].column(),!0)}).each(function(e,r){var n=t.select(this);n.append("circle"),n.append("text")}),h.select("circle").attr("r",this.circleRadius()).style("fill",function(t){return a._palette(t.label)}).append("title").text(function(t){return t.label}),h.select("text").attr("dx",function(t){return a.radial()?t.children?t.x<180?-c:c:t.x<180?c:-c:"vertical"===a.orientation()?t.children?c:-c:t.children?-c:c}).attr("dy","0.25em").style("text-anchor",function(t){return a.radial()?t.children?t.x<180?"end":"start":t.x<180?"start":"end":"vertical"===a.orientation()?t.children?"start":"end":t.children?"end":"start"}).attr("transform",function(t){return a.radial()?t.x<180?null:"rotate(180)":"vertical"===a.orientation()?"rotate(-66)":null}).text(function(t){return t.label}),h.exit().remove(),this._renderCount||a.zoomToFit()},a});