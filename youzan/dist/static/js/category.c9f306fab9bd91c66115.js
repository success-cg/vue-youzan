webpackJsonp([6],{0:function(t,a,e){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartAdd:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="http://rapapi.org/mockjsdata/24170"+n[s]);a.a=n},10:function(t,a,e){function n(t){e(9)}var s=e(6)(e(8),e(11),n,null,null);t.exports=s.exports},107:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(13),s=(e.n(n),e(74)),i=(e.n(s),e(1)),r=e(7),o=e.n(r),c=e(0),d=e(2);new i.default({el:"#app",data:function(){return{topLists:null,topIndex:0,subData:null,rankData:null}},created:function(){this.getTopList(),this.getSubList(void 0,0)},methods:{getTopList:function(){var t=this;o.a.post(c.a.topList).then(function(a){t.topLists=a.data.lists}).catch(function(t){})},getSubList:function(t,a){var e=this;this.topIndex=a,0===a?this.getRankData():this.$nextTick(function(){o.a.post(c.a.subList,{id:t}).then(function(t){e.subData=t.data.data}).catch(function(t){})})},getRankData:function(){var t=this;this.$nextTick(function(){o.a.post(c.a.rank).then(function(a){t.rankData=a.data.data})})},toSearch:function(t){location.href="search.html?keyword="+t.name+"&id="+t.id}},mixins:[d.a]})},11:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bottom-nav"},[e("ul",t._l(t.navConfig,function(a,n){return e("li",{class:{active:n===t.curIndex},on:{click:function(e){t.changeNav(a,n)}}},[e("a",[e("i",{class:a.icon}),t._v(" "),e("div",[t._v(t._s(a.name))])])])}))])},staticRenderFns:[]}},13:function(t,a){},2:function(t,a,e){"use strict";var n=e(10),s=e.n(n),i={filters:{currency:function(t){t+="";var a=t.split(".");return a[1]||(a[1]="00"),1===a[1].length&&(a[1]+="0"),a[1].length>1&&(a[1]=a[1].slice(0,2)),a.join(".")}},components:{bottomNav:s.a}};a.a=i},74:function(t,a){},8:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(12),s=e.n(n),i=s.a.parse(location.search.substr(1)),r=i.index,o=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];a.default={data:function(){return{navConfig:o,curIndex:parseInt(r)||0}},methods:{changeNav:function(t,a){location.href=t.href+"?index="+a}}}},9:function(t,a){}},[107]);
//# sourceMappingURL=category.c9f306fab9bd91c66115.js.map