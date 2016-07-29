!function(t,e){"function"==typeof define&&define.amd?define(["../common/HTMLWidget","css!./Select"],e):t.other_Select=e(t.common_HTMLWidget)}(this,function(t){function e(e){t.call(this)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.prototype._class+=" other_Select",e.prototype.publish("label",null,"string","Label for select"),e.prototype.publish("valueColumn",null,"set","Select display value",function(){return this.columns()},{optional:!0}),e.prototype.publish("textColumn",null,"set","Select value(s)",function(){return this.columns()},{optional:!0}),e.prototype.publish("multiple",!1,"boolean","Multiple selection"),e.prototype.publish("optional",!0,"boolean","Optional Select"),e.prototype.publish("selectSize",5,"number","Size of multiselect box",null,{disable:function(t){return!t.multiple()}}),e.prototype.selectData=function(){var t=this._db.rollupView([this.valueColumn(),this.textColumn()]);this._valueRowMap={};var e=[];return this.optional()&&e.push({value:"",text:""}),e.concat(t.entries().map(function(t){return this._valueRowMap[t.key]=t.values.length&&t.values[0].values.length?t.values[0].values[0]:[],{value:t.key,text:t.values.length?t.values[0].key:""}},this).sort(function(t,e){return t.text<e.text?-1:t.text>e.text?1:0}))},e.prototype.enter=function(e,l){t.prototype.enter.apply(this,arguments),this._span=l.append("span"),this._label=this._span.append("label").attr("for",this.id()+"_select");var o=this;this._select=this._span.append("select").attr("id",this.id()+"_select").on("change",function(t){for(var e=[],l=o._select.node().options,n=0;n<l.length;++n){var i=l[n];i.selected&&e.push(i.value)}e.length&&o._valueRowMap[e[0]]?o.click(o.rowToObj(o._valueRowMap[e[0]]),"value",!0):o.click([],"value",!1)})},e.prototype.update=function(e,l){t.prototype.update.apply(this,arguments),this._label.text(this.label()),this._select.attr("multiple",this.multiple()?this.multiple():null).attr("size",this.multiple()&&this.selectSize()?this.selectSize():null);var o=this._select.selectAll(".dataRow").data(this.selectData());o.enter().append("option").attr("class","dataRow"),o.attr("value",function(t){return t.value}).text(function(t){return t.text}),o.exit().remove()},e.prototype.exit=function(e,l){this._span.remove(),t.prototype.exit.apply(this,arguments)},e.prototype.click=function(t,e,l){console.log("Click:  "+JSON.stringify(t)+", "+e+", "+l)},e});