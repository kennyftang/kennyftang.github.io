webpackJsonp([0],[,,function(t,e,a){"use strict";var n=a(1),s=a(19),r=a(14),i=a.n(r);n.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Home",component:i.a}]})},function(t,e,a){function n(t){a(11)}var s=a(0)(a(5),a(18),n,null,null);t.exports=s.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),s=a(3),r=a.n(s),i=a(2);n.a.config.productionTip=!1,new n.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a(8),e.default={name:"app"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(15),s=a.n(n),r=a(13);e.default={name:"home",components:{Sidebar:s.a},data:function(){return{portrait:r,state:0,projects:[],error:""}},created:function(){var t=this;fetch("https://api.github.com/users/kftang/repos").then(function(t){if(200!==t.status)throw t.status;return t.json()}).then(function(e){e.forEach(function(e){var a={};e.fork||(a.name=e.name,a.stars=e.stargazers_count,a.language=e.language,t.projects.push(a))})}).catch(function(e){403===e&&(t.error="Could not load repos.")})},methods:{popup:function(t){this.src=t},setState:function(t){this.state===t?this.state=0:this.state=t}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(12);e.default={name:"sidebar",data:function(){return{pdf:n}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){t.exports=a.p+"static/files/KennyTangResume.22b30a4.pdf"},function(t,e,a){t.exports=a.p+"static/img/portrait.2a0165a.jpg"},function(t,e,a){function n(t){a(10)}var s=a(0)(a(6),a(17),n,"data-v-6ed3c508",null);t.exports=s.exports},function(t,e,a){function n(t){a(9)}var s=a(0)(a(7),a(16),n,"data-v-263da543",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"sidebar"}},[a("ul",{staticClass:"links"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("li",{staticClass:"rm"},[a("a",{attrs:{href:t.pdf}},[a("i",{staticClass:"fa fa-2x fa-file-text",attrs:{"aria-hidden":"true",title:"Resume"}})])]),t._v(" "),t._m(2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"lin"},[a("a",{attrs:{href:"https://www.linkedin.com/in/kenny-tang/"}},[a("i",{staticClass:"fa fa-2x fa-linkedin",attrs:{"aria-hidden":"true",title:"LinkedIn"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"gh"},[a("a",{attrs:{href:"https://www.github.com/kftang"}},[a("i",{staticClass:"fa fa-2x fa-github-alt",attrs:{"aria-hidden":"true",title:"GitHub"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"em"},[a("a",{attrs:{href:"mailto:kennytang99@gmail.com"}},[a("i",{staticClass:"fa fa-2x fa-envelope",attrs:{"aria-hidden":"true",title:"Email me"}})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("sidebar",{on:{popup:t.popup}}),t._v(" "),a("div",{staticClass:"content"},[a("h1",{class:{slid:0!==t.state}},[t._v("Kenny Tang, Developer")]),t._v(" "),a("br"),t._v(" "),a("a",{on:{click:function(e){t.setState(1)}}},[t._v("About Me")]),t._v(" "),a("transition",{attrs:{name:"scale"}},[1===t.state?a("div",{staticClass:"about"},[a("img",{staticClass:"portrait",attrs:{alt:"Portrait",src:t.portrait}}),t._v(" "),a("p",[t._v("Hello! I am Kenny Tang! I'm an avid developer. I am currently attending college at the Univeristy of Texas at Austin as a Freshman."),a("br"),t._v("\n          I am majoring in Electrical and Computer Engineering. "),a("br"),t._v("\n          I have one year of experience in full stack development using technologies such as Node.js, Express, and Vue.js.\n        ")])]):t._e()]),t._v(" "),a("br"),t._v(" "),a("a",{on:{click:function(e){t.setState(2)}}},[t._v("Projects")]),t._v(" "),a("transition",{attrs:{name:"scale"}},[2===t.state?a("div",{staticClass:"about"},[t.error?a("p",[t._v(t._s(t.error))]):a("ul",{staticClass:"projects"},t._l(t.projects,function(e){return a("li",{key:e.name},[a("a",{attrs:{href:"https://github.com/kftang/"+e.name}},[t._v(t._s(e.name))]),a("br")])}))]):t._e()]),t._v(" "),a("br")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}}],[4]);
//# sourceMappingURL=app.2ae48241dd75da819331.js.map