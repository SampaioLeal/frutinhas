(this.webpackJsonpfrutinhas3d=this.webpackJsonpfrutinhas3d||[]).push([[0],{40:function(e,t,n){e.exports=n(71)},45:function(e,t,n){},68:function(e,t){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),s=n.n(c),o=(n(45),n(1));function l(e){var t=e.state,n=new o.d(20,20,20),a=new o.l({color:874086}),r=new o.k(n,a);r.receiveShadow=!0;var c=new o.i(16777147,526368,.6);return t.scene.add(c),r.position.set(9.5,9.5,-10.5),t.scene.add(r),null}var i=n(3),u=n(36),d=n.n(u)()("https://api-frutinhas.sampaioleal.dev.br/frutinhas/",{forceNew:!0,autoConnect:!0});function m(e){d.emit("movePlayer",e)}var p=Object(i.a)((function(e){var t=e.state;function n(){console.log("Welcome to Frutinhas 3D!"),console.log("You joined with ID:",d.id),d.emit("addPlayer")}return Object(a.useEffect)((function(){d.on("update",(function(e){e.players.map((function(e){e.id===d.id&&(e.current=!0)})),t.updatePlayers(e.players),t.updateFruits(e.fruits)}))}),[]),Object(a.useEffect)((function(){t.playable&&t.started&&(d.on("welcome",(function(){n()})),n())}),[t.started,t.playable]),null}));var f=Object(i.a)((function(e){var t=e.state;return Object(a.useEffect)((function(){t.playable&&t.started&&(console.log("Starting Key Listener..."),window.addEventListener("keydown",(function(e){switch(e.keyCode){case 87:m("w");break;case 65:m("a");break;case 68:m("d");break;case 83:m("s")}})))}),[t.started,t.playable]),null}));var w=Object(i.a)((function(e){var t=e.state,n=new o.d(1,1,1),a=new o.h;return a.name="Players",t.players&&(t.scene.children.map((function(e,n){return e.name===a.name&&t.scene.children.splice(n,1),null})),a.children=[],t.players.map((function(e){var t=new o.l({color:new o.f(e.color)}),r=new o.k(n,t);return r.name=e.id,r.castShadow=!0,r.position.set(e.x,e.y,e.z),e.current?r.name="currentPlayer":r.name=e.id,a.add(r),null})),t.scene.add(a)),null}));var y=Object(i.a)((function(e){var t=e.state,n=new o.d(.9,.9,.9),a=new o.l({color:1030107});a.transparent=!0,a.opacity=.8;var r=new o.h;return r.name="Fruits",t.fruits&&(t.scene.children.map((function(e,n){return e.name===r.name&&t.scene.children.splice(n,1),null})),r.children=[],t.fruits.map((function(e){var t=new o.k(n,a);return t.castShadow=!0,t.position.set(e.x,e.y,e.z),r.add(t)})),t.scene.add(r)),null})),h=n(39),v=n(37);function b(e){var t=e.children,n=e.state;n.scene=new o.s;var c=(new o.u).load("./background.png");n.scene.background=c;var s=document.createElement("canvas"),l=s.getContext("webgl2",{alpha:!1});n.renderer=new o.y({canvas:s,context:l}),n.renderer.shadowMap.enabled=!0,n.renderer.shadowMap.type=o.o,n.renderer.setSize(window.innerWidth,window.innerHeight),n.renderer.domElement.style.position="absolute",document.querySelector("#root").appendChild(n.renderer.domElement);var i=new h.a(n.renderer);function u(){requestAnimationFrame(u),i.render()}return i.setSize(window.innerWidth,window.innerHeight),Object(a.useEffect)((function(){var e=new v.a(n.scene,n.camera);i.addPass(e),u()})),r.a.createElement(r.a.Fragment,null,t)}function k(e){var t=e.state,n=window.innerWidth/window.innerHeight;t.camera=new o.n(-20*n,20*n,20,-20,1,2e3),t.camera.position.set(40,40,20),t.camera.lookAt(10,10,-10);var a=new o.g(16777215,.5);a.position.set(30,30,10);var r=new o.m;r.position.set(10,10,-10),a.target=r;var c=new o.q(16777215,1.5,100);return c.castShadow=!0,c.position.set(40,40,20),c.shadow.bias=1e-4,c.shadow.mapSize.width=2048,c.shadow.mapSize.height=2048,t.scene.add(a,r,c),null}var E=n(15);var g=Object(i.a)((function(e){var t=e.state,n=Object(a.useState)(!1),r=Object(E.a)(n,2),c=r[0],s=r[1],l=new o.c,i=new o.b;return Object(a.useEffect)((function(){t.camera.add(i),t.setSoundtrack(new o.a(i))}),[]),Object(a.useEffect)((function(){t.soundtrack&&!c&&l.load("./Disconnected.mp3",(function(e){t.soundtrack.setBuffer(e),t.soundtrack.setLoop(!0),t.soundtrack.setVolume(.5),t.soundtrack.play(),console.log("Soundtrack loaded!"),i.context.suspend(),s(!0)}))}),[c]),t.started&&c&&i.context.resume(),null}));var j=Object(i.a)((function(e){var t=e.state,n=Object(a.useState)(!0),c=Object(E.a)(n,2),s=c[0],o=c[1];return r.a.createElement("div",{className:"gui"},r.a.createElement("div",{className:"api"},r.a.createElement("br",null),t.players&&t.players.map((function(e,t){return r.a.createElement("div",{style:{color:e.color},key:t},r.a.createElement("b",null,e.id,": ",e.points))}))),r.a.createElement("div",{className:"controls"},t.soundtrack&&s?r.a.createElement("img",{onClick:function(){t.soundtrack.pause(),o(!1)},src:"./mute.png",alt:"Mute Music"}):r.a.createElement("img",{onClick:function(){t.soundtrack.play(),o(!0)},src:"./unmute.png",alt:"Play Music"})))}));var O=Object(i.a)((function(e){var t=e.state;return r.a.createElement(b,{state:t},r.a.createElement(j,{state:t}),r.a.createElement(k,{state:t}),r.a.createElement(g,{state:t}),r.a.createElement(l,{state:t}),r.a.createElement(w,{state:t}),r.a.createElement(y,{state:t}),r.a.createElement(p,{state:t}),r.a.createElement(f,{state:t}))}));var S=Object(i.a)((function(e){var t=e.state,n=Object(a.useRef)(null);function c(){n.current.style.opacity>0?(requestAnimationFrame(c),n.current.style.opacity-=.05):n.current.style.display="none"}return window.innerWidth>900&&t.setPlayable(),window.onload=function(){document.querySelector(".menu img").style.display="block",document.querySelector(".menu .title").style.display="block",document.querySelector(".menu p").style.display="block"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:n,className:"menu"},r.a.createElement("h2",{className:"title"},"Frutinhas 3D"),r.a.createElement("p",null,"por"," ",r.a.createElement("a",{href:"https://sampaioleal.github.io",target:"_blank",rel:"noopener noreferrer"},"Sampaio Leal")),r.a.createElement("img",{onClick:function(){n.current.style.opacity=1,c(),t.setStart()},src:"./play.png",alt:"Play button"})),r.a.createElement(O,{state:t}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=n(8),F=n(38),C=n(2),q=function(){function e(){Object(P.a)(this,e),this.playable=!1,this.started=!1,this.scene=null,this.renderer=null,this.camera=null,this.soundtrack=null,this.currentPlayer=null,this.players=null,this.fruits=null}return Object(F.a)(e,[{key:"updatePlayers",value:function(e){this.players=e}},{key:"updateFruits",value:function(e){this.fruits=e}},{key:"setPlayable",value:function(){this.playable=!0}},{key:"setStart",value:function(){this.started=!0}},{key:"setSoundtrack",value:function(e){this.soundtrack=e}},{key:"setCurrentPlayer",value:function(e){this.currentPlayer=e}}]),e}();Object(C.h)(q,{scene:C.m,renderer:C.m,camera:C.m,players:C.m,fruits:C.m,playable:C.m,started:C.m,soundtrack:C.m,currentPlayer:C.m});var x=window.state=new q;s.a.render(r.a.createElement(S,{state:x}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.155c5bd4.chunk.js.map