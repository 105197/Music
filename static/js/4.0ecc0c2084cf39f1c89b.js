webpackJsonp([4],{NSSj:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),o=e("kvay"),a=e("NYxO"),r=e("m40h"),c=e("T452"),u=e("PvFA"),d={data:function(){return{songs:[]}},computed:s()({title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}},Object(a.c)(["disc"])),created:function(){this._getSong()},methods:{_getSong:function(){var t=this;this.disc.dissid?Object(r.c)(this.disc.dissid).then(function(n){n.code===c.a&&(t.songs=t._normalSong(n.cdlist[0].songlist))}):this.$router.push("/recommend")},_normalSong:function(t){var n=[];return t.forEach(function(t){t.songid&&t.albumid&&n.push(Object(u.a)(t))}),n}},components:{MusicList:o.a}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:this.title,bgImage:this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var m=e("VU/8")(d,f,!1,function(t){e("wia0")},"data-v-4ac28c7b",null);n.default=m.exports},m40h:function(t,n,e){"use strict";n.b=function(){var t=a()({},c.b,{uin:0,platform:"h5",needNewCode:1});return Object(r.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,c.c)},n.a=function(){var t=a()({},c.b,{platform:"yqq",needNewCode:0,categoryId:1e7,sortId:5,sin:0,ein:29,hostUin:0,uin:0,format:"json",rnd:Math.random()});return d.a.get("/api/getDiscList",{params:t}).then(function(t){return s.a.resolve(t.data)})},n.c=function(t){var n=a()({},c.b,{disstid:t,type:1,json:1,utf8:1,onlysong:0,needNewCode:0,hostUin:0,platform:"yqq",loginUin:0,format:"json"});return d.a.get("/api/getSong",{params:n}).then(function(t){return s.a.resolve(t.data)})};var i=e("//Fk"),s=e.n(i),o=e("woOf"),a=e.n(o),r=e("Gak4"),c=e("T452"),u=e("mtWM"),d=e.n(u)},wia0:function(t,n){}});
//# sourceMappingURL=4.0ecc0c2084cf39f1c89b.js.map