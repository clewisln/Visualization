(function(e,t){typeof define=="function"&&define.amd?define(["d3","../common/HTMLWidget","amcharts.pie","../api/I2DChart","require"],t):e.amchart_Pie=t(e.d3,e.common_HTMLWidget,e.AmCharts,e.api_I2DChart,e.require)})(this,function(e,t,n,r,i){function s(){t.call(this),this._tag="div",this._chart={},this._selected=null}return s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.prototype._class+=" amchart_Pie",s.prototype.implements(r.prototype),s.prototype.publish("paletteID","default","set","Palette ID",s.prototype._palette.switch(),{tags:["Basic","Shared"]}),s.prototype.publish("fontSize",11,"number","Font Size",null,{tags:["Basic","Shared"]}),s.prototype.publish("fontFamily","Verdana","string","Font Name",null,{tags:["Basic","Shared","Shared"]}),s.prototype.publish("fontColor","#000000","html-color","Font Color",null,{tags:["Basic","Shared"]}),s.prototype.publish("Depth3D",0,"number","3D Depth (px)",null,{tags:["Basic"]}),s.prototype.publish("Angle3D",0,"number","3D Angle (Deg)",null,{tags:["Basic"]}),s.prototype.publish("marginLeft",0,"number","Margin (Left)",null,{tags:["Intermediate"]}),s.prototype.publish("marginRight",0,"number","Margin (Right)",null,{tags:["Intermediate"]}),s.prototype.publish("marginTop",0,"number","Margin (Top)",null,{tags:["Intermediate"]}),s.prototype.publish("marginBottom",0,"number","Margin (Bottom)",null,{tags:["Intermediate"]}),s.prototype.publish("reverseDataSorting",!1,"boolean","Reverse Data Sorting",null,{tags:["Intermediate"]}),s.prototype.publish("holePercent",0,"number","Hole Size (Percent)",null,{tags:["Basic"]}),s.prototype.publish("radius",null,"number","Radius",null,{tags:["Basic"]}),s.prototype.publish("pieAlpha",[],"array","Individual Alpha per Slice",null,{tags:["Private"]}),s.prototype.publish("labelPosition","outside","set","Label Position",["inside","outside"],{tags:["Intermediate"]}),s.prototype.publish("useClonedPalette",!1,"boolean","Enable or disable using a cloned palette",null,{tags:["Intermediate","Shared"]}),s.prototype.publish("selectionMode","simple","set","Selection Mode",["simple","multi"],{tags:["Intermediate"]}),s.prototype.publish("selectionColor","#f00","html-color","Font Color",null,{tags:["Basic"]}),s.prototype.calcRadius=function(e){return Math.min(this._size.width,this._size.height)/2-2},s.prototype.updateChartOptions=function(){this._chart.type="pie",this._chart.labelsEnabled=!0,this.labelPosition()==="inside"?(this._chart.radius="50%",this._chart.labelRadius=-40,this._chart.pullOutRadius="20%"):(this._chart.radius="45%",this._chart.labelRadius=20,this._chart.pullOutRadius="20%"),this._chart.labelFunction=function(e){return e.title},this.marginRight()&&(this._chart.marginRight=this.marginRight()),this.marginLeft()&&(this._chart.marginLeft=this.marginLeft()),this.marginTop()&&(this._chart.marginTop=this.marginTop()),this.marginBottom()&&(this._chart.marginBottom=this.marginBottom()),this._chart.depth3D=this.Depth3D(),this._chart.angle=this.Angle3D(),this._chart.innerRadius=this.holePercent()+"%",this._chart.fontFamily=this.fontFamily(),this._chart.fontSize=this.fontSize(),this._chart.fontSize=this.fontSize(),this._chart.color=this.fontColor(),this._chart.titleField=this.columns()[0],this._chart.valueField=this.columns()[1];var e;return this.reverseDataSorting()?e=function(e,t){return e[1]<t[1]?1:-1}:e=function(e,t){return e[1]>t[1]?1:-1},this.data(this.data().sort(e)),this._chart.colorField="sliceColor",this._chart.dataProvider=this.formatData(this.data()),this._chart.colors=this.data().map(function(e){return this._palette(e[0])},this),this._chart.pullOutOnlyOne=this.selectionMode()==="simple",this.pieAlpha().forEach(function(e,t){typeof this._chart.chartData[t]=="undefined"&&(this._chart.chartData[t]={}),this._chart.chartData[t].alpha=e},this),this._chart},s.prototype.formatData=function(e){var t=[],n=this;return e.forEach(function(e){var r={};n.columns().forEach(function(t,n){r[t]=e[n]}),t.push(r)}),t},s.prototype.enter=function(e,r){t.prototype.enter.apply(this,arguments);var s=this,o={type:"pie",addClassNames:!0,theme:"none"};typeof define=="function"&&define.amd&&(o.pathToImages=i.toUrl("amchartsImg")),this._chart=n.makeChart(e,o),this._chart.addListener("clickSlice",function(e){var t=e.chart.colorField,n=e.dataItem.dataContext;n[t]!==null&&n[t]!==undefined?(delete n[t],s.selectionMode()==="simple"&&(s._selected!==null&&delete s._selected.data[s._selected.field],s._selected=null)):(n[t]=s.selectionColor(),s.selectionMode()==="simple"&&(s._selected!==null&&delete s._selected.data[s._selected.field],s._selected={field:t,data:n})),e.chart.validateData(),s.click(s.rowToObj(s.data()[e.dataItem.index]))})},s.prototype.update=function(e,t){this._palette=this._palette.switch(this.paletteID()),this.useClonedPalette()&&(this._palette=this._palette.cloneNotExists(this.paletteID()+"_"+this.id())),e.style.width=this.size().width+"px",e.style.height=this.size().height+"px",this.updateChartOptions(),this._chart.validateNow(),this._chart.validateData()},s});