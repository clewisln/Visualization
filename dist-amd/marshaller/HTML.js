(function(e,t){typeof define=="function"&&define.amd?define(["d3","../layout/Grid","./HipieDDL","../layout/Surface","../layout/Cell"],t):e.marshaller_HTML=t(e.d3,e.layout_Grid,e.marshaller_HipieDDL,e.layout_Surface,e.layout_Cell)})(this,function(e,t,n,r,i){function s(){t.call(this)}function o(e,t){t instanceof Object||t&&(t=JSON.parse(t));var r=null,i={};return e.accept({visit:function(e){e instanceof n.Dashboard?(r={dashboard:e,visualizations:[]},i[e.getQualifiedID()]=r):e instanceof n.DataSource?e.databomb&&t[e.id]&&e.comms.databomb(t[e.id]):e instanceof n.Output?e.dataSource.databomb&&e.dataSource.comms.databombOutput(e.from):e instanceof n.Visualization&&e.widget&&r.visualizations.push(e)}}),i}return s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.prototype._class+=" marshaller_HTML",s.prototype.publish("ddlUrl","","string","DDL URL",null,{tags:["Private"]}),s.prototype.publish("databomb","","string","Data Bomb",null,{tags:["Private"]}),s.prototype.publish("proxyMappings",{},"object","Proxy Mappings",null,{tags:["Private"]}),s.prototype.render=function(r){function s(){var e=o(i.marshaller,i.databomb());if(i.marshaller.widgetMappings().empty())for(var n in e){var s=0,u=0,a=Math.floor(Math.sqrt(e[n].visualizations.length));e[n].visualizations.forEach(function(e,t){t&&t%a===0&&(s++,u=0),e.widget.size({width:0,height:0}),i.setContent(s,u,e.widget,e.title),u++})}t.prototype.render.call(i,function(t){for(var n in e)for(var i in e[n].dashboard.datasources)e[n].dashboard.datasources[i].fetchData({},!0);r&&r(t)})}if(this.ddlUrl()===""||this.ddlUrl()===this._prev_ddlUrl&&this.databomb()===this._prev_databomb)return t.prototype.render.apply(this,arguments);this._prev_ddlUrl&&this._prev_ddlUrl!==this.ddlUrl()&&this.clearContent(),this._prev_ddlUrl=this.ddlUrl(),this._prev_databomb=this.databomb(),this.marshaller=(new n.Marshaller).proxyMappings(this.proxyMappings()).widgetMappings(e.map(this.content().map(function(e){return e.widget()}),function(e){return e.id()}));var i=this;return this.ddlUrl()[0]==="["||this.ddlUrl()[0]==="{"?this.marshaller.parse(this.ddlUrl(),function(){s()}):this.marshaller.url(this.ddlUrl(),function(){s()}),this},s});