(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a9b5d5c"],{"9e3a":function(t,e,a){},d98e:function(t,e,a){"use strict";var n=a("9e3a"),o=a.n(n);o.a},f511:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"draw-area"},[a("div",{staticClass:"info"},[t._v("\n            操作说明：用鼠标左键点击地图，选择区域，点击鼠标右键结束选择\n        ")]),a("button",{staticClass:"remove-area",attrs:{id:"removeArea"}},[t._v("清除")]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.canEdit,expression:"canEdit"}],staticClass:"edit-area",attrs:{id:"editArea"}},[t._v("编辑")]),a("button",{staticClass:"save-area",attrs:{id:"saveArea"}},[t._v("保存")]),a("div",{staticClass:"a-map-container",attrs:{id:"aMapContainer"}})])])},o=[],i={data:function(){return{type:"CREATE",canEdit:!1,path:[[116.403322,39.920255],[116.410703,39.897555],[116.402292,39.892353]]}},mounted:function(){this.getArea()},methods:{getArea:function(){this.path.length?(this.initialPolygon(),this.type="EDIT",this.canEdit=!0):(this.canEdit=!1,this.setAMap())},initialPolygon:function(){var t=this,e=new AMap.Map("aMapContainer",{zoom:12,center:[113.246949,23.122186]}),a=this.path,n=new AMap.Polygon({path:a,isOutline:!0,borderWeight:3,strokeColor:"#10c4f9",strokeWeight:6,strokeOpacity:.2,fillOpacity:.4,fillColor:"#54cdfd",zIndex:50});n.setMap(e),e.setFitView([n]),document.getElementById("removeArea").onclick=function(){e.remove(n),t.path=[],t.canEdit=!1,t.setAMap()};var o=new AMap.PolyEditor(e,n);document.getElementById("editArea").onclick=function(){o.open()},document.getElementById("saveArea").onclick=function(){o.close(),console.log(2)},o.on("end",function(e){t.path=e.target.getPath().map(function(t){return[t.lng,t.lat]}),t.handleSavePath()})},setAMap:function(){var t=this,e=new AMap.Map("aMapContainer",{center:[113.246949,23.122186],zoom:12}),a=new AMap.MouseTool(e),n=[];function o(){a.polygon({fillColor:"#54cdfd",strokeColor:"#10c4f9"})}a.on("draw",function(e){n.push(e.obj),a.close(),t.path=n[0].getPath().map(function(t){return[t.lng,t.lat]})}),o(),document.getElementById("removeArea").onclick=function(){e.remove(n),n=[],o(),t.path=[]},document.getElementById("saveArea").onclick=function(){console.log(1),t.handleSavePath()}},handleSavePath:function(){var t=this.path;t.length>1?(this.getArea(),this.$message.success("保存成功")):this.$message.error("设置范围")}}},s=i,c=(a("d98e"),a("2877")),r=Object(c["a"])(s,n,o,!1,null,"4aaa2457",null);r.options.__file="AMap.vue";e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-1a9b5d5c.64ef0282.js.map