(this["webpackJsonpincremental-game"]=this["webpackJsonpincremental-game"]||[]).push([[0],{22:function(e,t,n){e.exports=n(30)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),i=n.n(c);n(27),n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(2),o=(n(29),n(7)),s=n(18),l=n(16),m=n(14),b=n(13),f=n(33),v=n(32),d=n(34),O=Object(f.a)(1e3/30).pipe(Object(d.a)(new v.a));O.connect();var h=function e(t,n,a){Object(o.a)(this,e),this.name=t,this.initialCount=n||0,this.initialRate=a||0},j=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,null)).config=e,a.count=e.initialCount,a.rate=e.initialRate,O.subscribe((function(){a.count+=1e3/30*a.rate/1e3,a.next(Object(b.a)(a))})),a}return Object(m.a)(n,[{key:"update",value:function(e){if(!e)return!1;this.updateCount(e.count),this.updateRate(e.rate)}},{key:"updateCount",value:function(e){if(!e)return!1;this.count+=e,this.next(this)}},{key:"updateRate",value:function(e){if(!e)return!1;this.rate+=e,this.next(this)}}]),n}(v.a),E=[new h("a"),new h("b"),new h("c",2)].reduce((function(e,t){return e[t.name]=new j(t),e}),{});var p=function(e){var t=e.resource,n=Object(a.useState)(0),c=Object(u.a)(n,2),i=c[0],o=c[1],s=Object(a.useState)(0),l=Object(u.a)(s,2),m=l[0],b=l[1];return Object(a.useEffect)((function(){var e=E[t].subscribe((function(e){o(Math.floor(e.count)),b(Math.floor(e.rate))}));return function(){e.unsubscribe()}}),[t]),r.a.createElement("div",null,r.a.createElement("p",null,t,": ",i," (",m,"/s)"))};function w(){var e=JSON.parse(localStorage.getItem("saved-game"));return!!e&&Object.entries(e).reduce((function(e,t){var n=Object(u.a)(t,2),a=n[0],r=n[1];return!!(e&&E[a]&&r&&void 0!==r.count&&void 0!==r.rate)}),!0)}var g=function(e){var t=e.saveInterval;return Object(a.useEffect)((function(){var e=Object(f.a)(1e3*t).subscribe((function(){return function(){var e=Object.entries(E).reduce((function(e,t){var n=Object(u.a)(t,2),a=n[0],r=n[1];return e[a]={count:r.count,rate:r.rate},e}),{});localStorage.setItem("saved-game",JSON.stringify(e))}()}));return function(){return e.unsubscribe()}}),[t]),null},N=function(){function e(t,n,a){Object(o.a)(this,e),this.name=t,this.price=n,this.result=a}return Object(m.a)(e,[{key:"isAffordable",value:function(){return Object.entries(this.price).reduce((function(e,t){var n=Object(u.a)(t,2),a=n[0],r=n[1];return e&&r<=E[a].count}),!0)}},{key:"buy",value:function(){if(!this.isAffordable())return!1;Object.entries(this.price).forEach((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return E[n].updateCount(-a)})),Object.entries(this.result).forEach((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return E[n].update(a)}))}}]),e}(),k=[new N("a++",{c:2},{a:{rate:1}}),new N("b++",{c:10},{b:{rate:1}}),new N("click",{},{b:{count:1}}),new N("convert",{a:5,b:5},{c:{count:1}})].reduce((function(e,t){return e[t.name]=t,e}),{});var y=function(e){var t=e.recipe;return r.a.createElement("div",{className:"row mb-4"},r.a.createElement("div",{className:"col-3"},r.a.createElement("button",{className:"btn btn-primary btn-block",onClick:function(){return k[t].buy()}},t)),r.a.createElement("div",{className:"col-auto"},"Costs:",Object.entries(k[t].price).map((function(e){var n=Object(u.a)(e,2),a=n[0],c=n[1];return r.a.createElement("div",{key:"".concat(t,"_entries_").concat(a)},"".concat(a,": ").concat(c))}))),r.a.createElement("div",{className:"col-auto"},"Produces:",Object.entries(k[t].result).map((function(e){var n=Object(u.a)(e,2),a=n[0],c=n[1];return r.a.createElement("div",{key:"".concat(t,"_results_").concat(a)},a,":",r.a.createElement("br",null),Object.entries(c).map((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return"".concat(n,": ").concat(a)})))}))))};var C=function(e){var t=e.recipes;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"container-fluid p-0"},t.map((function(e){return r.a.createElement(y,{recipe:e,key:e})}))))},S=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).render=function(){return r.a.createElement("div",{className:"container game-container"},r.a.createElement(g,{saveInterval:5}),r.a.createElement("div",{className:"row"},r.a.createElement(p,{resource:"a"})),r.a.createElement("div",{className:"row"},r.a.createElement(p,{resource:"b"})),r.a.createElement("div",{className:"row"},r.a.createElement(p,{resource:"c"})),r.a.createElement(C,{recipes:Object.keys(k)}))},e}return n}(r.a.Component);var I=function(e){var t=e.setInGame;return r.a.createElement("div",{className:"main-menu"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t(!0)}},"New Game"),r.a.createElement("button",{className:"btn btn-primary".concat(w()?"":" d-none"),onClick:function(){!function(){var e=JSON.parse(localStorage.getItem("saved-game"));Object.entries(e).forEach((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];E[n].count=a.count,E[n].rate=a.rate}))}(),t(!0)}},"Continue"))};var x=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",{className:"bg-dark vh-100"},r.a.createElement("div",{className:"container text-light"},r.a.createElement("div",{className:"row pt-3"},r.a.createElement("h1",null,"Untitled Incremental Game")),n?r.a.createElement(S,null):r.a.createElement(I,{setInGame:c})))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f54ed496.chunk.js.map