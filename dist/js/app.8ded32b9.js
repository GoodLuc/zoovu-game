(function(e){function t(t){for(var o,i,s=t[0],u=t[1],a=t[2],f=0,l=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var d=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0b66":function(e,t,n){},1965:function(e,t,n){e.exports=n.p+"img/zoovu-o.987e802d.svg"},"2d26":function(e,t,n){e.exports=n.p+"img/zoovu-z.98d275b2.svg"},"4e6e":function(e,t,n){"use strict";n("0b66")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t){var n=Object(o["u"])("router-view");return Object(o["p"])(),Object(o["d"])(n,{key:e.$route.params})}n("da0a");const c={};c.render=r;var i=c,s=n("6c02"),u={class:"flex j-center a-center column vmin100"},a=Object(o["g"])("p",null,[Object(o["g"])("strong",null,"Hello friend, tell me your name...")],-1),d=Object(o["f"])("Let's go");function f(e,t,n,r,c,i){var s=this,f=Object(o["u"])("router-link");return Object(o["p"])(),Object(o["d"])("div",u,[a,Object(o["B"])(Object(o["g"])("input",{onKeyup:t[1]||(t[1]=Object(o["C"])((function(e){return s.$router.push({name:"Game",params:{friend:s.friend}})}),["enter"])),"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.friend=t}),type:"text",placeholder:"Your name here"},null,544),[[o["y"],e.friend]]),Object(o["g"])(f,{class:"button go",to:{name:"Game",params:{friend:this.friend}}},{default:Object(o["A"])((function(){return[d]})),_:1},8,["to"])])}var l={name:"Login",data:function(){return{friend:""}}};n("4e6e");l.render=f;var p=l,b=n("6661"),g=n.n(b),h={class:"flex j-between w100"},j=Object(o["g"])("p",null,"Pick up the right cards",-1),O={class:"t-right"},v={class:"score flex a-center"},m=Object(o["g"])("img",{src:g.a,alt:"Timer"},null,-1),z=Object(o["f"])(),w=Object(o["g"])("p",null,"The faster the better!",-1),y={key:0,id:"zone1",class:"zone flex j-between w100"},x={key:0},k={key:1,id:"won",class:"flex w100 j-center a-center t-center"},D=Object(o["g"])("strong",null,"Congratulations!",-1),I=Object(o["g"])("br",null,null,-1),S=Object(o["f"])("You won."),_=Object(o["g"])("br",null,null,-1),P={key:2,class:"t-left w100"},T={id:"zone2",class:"zone flex j-between w100"},$={key:0},M={key:3,class:"t-center"};function C(e,t,r,c,i,s){return Object(o["p"])(),Object(o["d"])("div",{class:"container flex wrap j-center a-center vmin100",onDrop:t[4]||(t[4]=Object(o["D"])((function(){}),["prevent"]))},[Object(o["g"])("div",h,[Object(o["g"])("div",null,[Object(o["g"])("p",null,[Object(o["g"])("strong",null,"Good luck, "+Object(o["w"])(e.friend)+"!",1)]),j]),Object(o["g"])("div",O,[Object(o["g"])("p",v,[m,z,Object(o["g"])("strong",null,"Your score: "+Object(o["w"])(e.score)+" seconds",1)]),w])]),e.won?(Object(o["p"])(),Object(o["d"])("div",k,[Object(o["g"])("p",null,[D,I,S,_,Object(o["f"])("Score: "+Object(o["w"])(e.score),1)])])):(Object(o["p"])(),Object(o["d"])("div",y,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["t"])(e.zone1,(function(e){return Object(o["p"])(),Object(o["d"])("div",{class:"slot",key:e.pos,draggable:"true",onDragStart:function(t){return s.drag(t,"zone1",e.pos)}},[""!=e.content?(Object(o["p"])(),Object(o["d"])("figure",x,[Object(o["g"])("img",{src:n("a3b6")("./zoovu-"+e.content+".svg"),alt:"Card"},null,8,["src"])])):Object(o["e"])("",!0)],40,["onDragStart"])})),128))])),e.won?Object(o["e"])("",!0):(Object(o["p"])(),Object(o["d"])("p",P,"...and drop them here to make the logo great again!")),Object(o["g"])("div",T,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["t"])(e.zone2,(function(e){return Object(o["p"])(),Object(o["d"])("div",{class:"slot",key:e.pos,draggable:"true",onDragStart:function(t){return s.drag(t,"zone2",e.pos)},id:e.pos,onDrop:t[1]||(t[1]=function(e){return s.drop(e)}),onDragenter:t[2]||(t[2]=Object(o["D"])((function(){}),["prevent"])),onDragover:t[3]||(t[3]=Object(o["D"])((function(){}),["prevent"]))},[""!=e.content?(Object(o["p"])(),Object(o["d"])("figure",$,[Object(o["g"])("img",{src:n("a3b6")("./zoovu-"+e.content+".svg"),alt:"Card"},null,8,["src"])])):Object(o["e"])("",!0)],40,["onDragStart","id"])})),128))]),e.wins>0?(Object(o["p"])(),Object(o["d"])("p",M,Object(o["w"])(e.wins)+" wins",1)):Object(o["e"])("",!0)],32)}n("c740");var G=n("2909"),L={data:function(){return{friend:"",won:!1,wins:0,score:0,timer:null,dragfrom:"zone1",dragcard:null,zone1:[{pos:1,content:"z"},{pos:2,content:"o"},{pos:3,content:"o"},{pos:4,content:"v"},{pos:5,content:"u"}],zone2:[{pos:1,content:""},{pos:2,content:""},{pos:3,content:""},{pos:4,content:""},{pos:5,content:""}],solution:["z","o","o","v","u"]}},mounted:function(){this.$route.params.friend?this.friend=this.$route.params.friend:this.$router.push("/"),this.$route.params.wins&&(this.wins=this.$route.params.wins),this.timer=setInterval(this.doTime,1e3);var e=this.shuffleArray(["z","o","o","v","u"]);this.zone1[0].content=e[0],this.zone1[1].content=e[1],this.zone1[2].content=e[2],this.zone1[3].content=e[3],this.zone1[4].content=e[4]},methods:{shuffleArray:function(e){var t=Object(G["a"])(e),n=e.length;while(0!==n){var o=Math.floor(Math.random()*n);n-=1;var r=e[n];e[n]=e[o],e[o]=r}if(t!=e)return e},doTime:function(){this.score+=1},drag:function(e,t,n){this.dragfrom=t,this.dragcard=n},drop:function(e){var t,n=this;if(t=""!=e.target.id?e.target.id:event.target.closest("div").id,"zone1"==this.dragfrom)""==this.zone2[this.zone2.findIndex((function(e){return e.pos==t}))].content&&(this.zone2[this.zone2.findIndex((function(e){return e.pos==t}))].content=this.zone1[this.zone1.findIndex((function(e){return e.pos==n.dragcard}))].content,this.zone1[this.zone1.findIndex((function(e){return e.pos==n.dragcard}))].content="");else if("zone2"==this.dragfrom){var o=this.zone2[this.zone2.findIndex((function(e){return e.pos==t}))].content;this.zone2[this.zone2.findIndex((function(e){return e.pos==t}))].content=this.zone2[this.zone2.findIndex((function(e){return e.pos==n.dragcard}))].content,this.zone2[this.zone2.findIndex((function(e){return e.pos==n.dragcard}))].content=o}if(this.zone2[this.zone2.findIndex((function(e){return e.pos==t}))].content!=this.solution[t-1])this.score=this.score+10;else if("z"==this.zone2[0].content&&"o"==this.zone2[1].content&&"o"==this.zone2[2].content&&"v"==this.zone2[3].content&&"u"==this.zone2[4].content){clearInterval(this.timer),this.won=!0,this.wins=parseInt(this.wins)+1;var r=this;setTimeout((function(){r.$router.push({name:"Game",params:{friend:r.friend,wins:r.wins}})}),1e4)}}}};n("9e6d");L.render=C;var A=L,U=[{path:"/",name:"Login",component:p},{path:"/game",name:"Game",component:A}],Y=Object(s["a"])({history:Object(s["b"])(),routes:U}),E=Y;Object(o["c"])(i).use(E).mount("#app")},6661:function(e,t,n){e.exports=n.p+"img/timer.d9687eec.svg"},"71a3":function(e,t,n){},"97a3":function(e,t,n){},"9e6d":function(e,t,n){"use strict";n("97a3")},a0a8:function(e,t,n){e.exports=n.p+"img/zoovu-v.f04e5e7e.svg"},a3b6:function(e,t,n){var o={"./zoovu-o.svg":"1965","./zoovu-u.svg":"cef2","./zoovu-v.svg":"a0a8","./zoovu-z.svg":"2d26"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=c,e.exports=r,r.id="a3b6"},cef2:function(e,t,n){e.exports=n.p+"img/zoovu-u.509452d2.svg"},da0a:function(e,t,n){"use strict";n("71a3")}});
//# sourceMappingURL=app.8ded32b9.js.map