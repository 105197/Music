webpackJsonp([5],{BRgg:function(t,e,n){"use strict";e.b=function(){var t=o()({},c.b,{uin:0,platform:"h5",needNewCode:1,g_tk:5381});return Object(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,c.c)},e.a=function(t){var e=o()({},c.b,{topid:t,platform:"h5",needNewCode:1,tpl:3,type:"top",page:"detail",format:"json"});return u.a.get("/api/getMusicList",{params:e}).then(function(t){return i.a.resolve(t.data)})};var s=n("//Fk"),i=n.n(s),a=n("woOf"),o=n.n(a),r=n("Gak4"),c=n("T452"),l=n("mtWM"),u=n.n(l)},Kjo5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),i=n.n(s),a=n("BRgg"),o=n("T452"),r=n("qwAB"),c=n("y/jF"),l=n("F4+m"),u=n("NYxO"),p={mixins:[l.b],data:function(){return{TopList:[]}},created:function(){this._getTopList()},methods:i()({selectSong:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)},handlePlaylist:function(t){var e=t.length>0?"60px":"0";this.$refs.rank.style.bottom=e,this.$refs.toplist.refresh()},_getTopList:function(){var t=this;Object(a.b)().then(function(e){e.code===o.a&&(t.TopList=e.data.topList)})}},Object(u.d)({setTopList:"SET_TOPLIST"})),components:{Scroll:r.a,Loading:c.a}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"rank",staticClass:"rank"},[n("scroll",{ref:"toplist",staticClass:"toplist"},[n("ul",t._l(t.TopList,function(e){return n("li",{key:e.id,staticClass:"item",on:{click:function(n){t.selectSong(e)}}},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100"}})]),t._v(" "),n("ul",{staticClass:"songlist"},t._l(e.songList,function(e,s){return n("li",{key:e.index,staticClass:"song"},[n("span",[t._v(t._s(s+1))]),t._v(" "),n("span",[t._v(t._s(e.songname)+"-"+t._s(e.singername))])])}))])})),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.TopList.length,expression:"!TopList.length"}],staticClass:"loading-container"},[n("loading")],1)]),t._v(" "),n("router-view")],1)},staticRenderFns:[]};var f=n("VU/8")(p,d,!1,function(t){n("PHbb")},"data-v-3616e9f8",null);e.default=f.exports},PHbb:function(t,e){}});
//# sourceMappingURL=5.3d6ab289f840bb2a3bc1.js.map