(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(2863)}])},2863:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});var s=a(5893),n=a(9008),r=a.n(n),c=a(7294),d=a(7160),i=a.n(d),l=a(9547),o=a.n(l),x=a(2814),u=a(9398),m=a(7686),f=a.n(m);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,s=new Array(t);a<t;a++)s[a]=e[a];return s}function j(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=1e4;function v(e){var t=e.defender,a=e.attacker,n=e.defenderPAtt,r=e.attackerPAtt,c=e.setData,d=e.setLoading,i=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=e,c=t,d=new(f()),i={status:0,matches:[]},l=0,o=function(a,n){return{id:++l-1,defender:{total:parseInt(e),current:parseInt(s),rolls:j(a)},attacker:{total:parseInt(t),current:parseInt(c),rolls:j(n)}}},x=function(e){a||console.log(e)},u=function(e){for(var t=[],a=0;a<e;a++)t.push(Math.ceil(6*d()));return t.sort((function(e,t){return t-e}))};c>0&&s>0;){var m=void 0,h=void 0;h="x1"===r?1:"x2"===r?c>=2?2:c:c>=3?3:c;var p=0,v=0,b=u(m="x2"===n?s>=2?2:s:1);x("Defender rolled ".concat(b));var N=u(h);x("Attacker rolled ".concat(N)),i.matches.push(o(b,N)),b[0]>=N[0]?(x("[0] Defender won (D ".concat(b[0]," >= A ").concat(N[0],")")),c--,v++):b[0]<N[0]&&(x("[0] Attacker won (D ".concat(b[0]," >= A ").concat(N[0],")")),s--,p++),m>1&&(b[1]>=N[1]?(x("[1] Defender won (D ".concat(b[1]," >= A ").concat(N[1],")")),c--,v++):b[1]<N[1]&&(x("[1] Attacker won (D ".concat(b[1]," >= A ").concat(N[1],")")),s--,p++)),i.matches[l-1].defender.fallen=p,i.matches[l-1].attacker.fallen=v}return i.status=s>0?0:1,i.createdAt=(new Date).toLocaleTimeString(),i},l=function(e){return e>0&&e<=1e3?e:1},o=function(e){x=e,d(e)},x=!1;return(0,s.jsx)("button",{className:"btn btn-success w-100",onClick:function(){if(!x){o(!0);var e=l(t),s=l(a),n=[];n=[i(e,s)];for(var r=1;r<p;r++)n=j(n).concat([i(e,s,!0)]);c(n),o(!1)}},children:"FIGHT!"})}function b(e){var t,a,n=e.data,r=e.changeData,c=function(e){"defenderInfo"===e.target.id?r(0):"attackerInfo"===e.target.id&&r(1)};return t=n.map((function(e){return e.status})).reduce((function(e,t){return e+(0===t?1:0)})),a=p>t?p-t:t-p,t=t/p*100,a=a/p*100,(0,s.jsxs)("div",{style:{bottom:0,left:0,width:"100%"},className:"jsx-b16d4f9dba125273 position-absolute",children:[(0,s.jsx)(o(),{id:"b16d4f9dba125273",children:".pointer.jsx-b16d4f9dba125273{cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;-moz-user-select:none}"}),(0,s.jsxs)("div",{className:"jsx-b16d4f9dba125273 d-flex justify-content-between",children:[(0,s.jsxs)("div",{id:"defenderInfo",onClick:c,className:"jsx-b16d4f9dba125273 d-flex bd-highlight pointer bg-primary flex-nowrap",children:[(0,s.jsx)("div",{id:"defenderInfo",className:"jsx-b16d4f9dba125273 order-1 p-2",children:"Defender"}),(0,s.jsxs)("div",{id:"defenderInfo",className:"jsx-b16d4f9dba125273 order-2 p-2",children:["~",t.toFixed(1),"%"]})]}),(0,s.jsxs)("div",{id:"attackerInfo",onClick:c,className:"jsx-b16d4f9dba125273 d-flex bd-highlight pointer bg-danger flex-nowrap",children:[(0,s.jsx)("div",{id:"attackerInfo",className:"jsx-b16d4f9dba125273 order-2 p-2",children:"Attacker"}),(0,s.jsxs)("div",{id:"attackerInfo",className:"jsx-b16d4f9dba125273 order-1 p-2",children:["~",a.toFixed(1),"%"]})]})]})]})}function N(e){var t=e.dataChunk,a=(0,c.useState)(t[0]),n=a[0],r=a[1];return(0,c.useEffect)((function(){r(t[0])}),[t]),(0,s.jsxs)("div",{className:"jsx-442266310d54c197 card bg-secondary",children:[(0,s.jsx)(o(),{id:"442266310d54c197",children:".shadow-black.jsx-442266310d54c197{text-shadow:2px 2px 5px black}.custom-white.jsx-442266310d54c197{font-size:12px;text-shadow:-1px -1px 1px rgba(0,0,0,.3);color:#ccc}"}),(0,s.jsxs)("div",{className:"jsx-442266310d54c197 table-responsive",children:[(0,s.jsxs)("div",{style:{right:10},className:"jsx-442266310d54c197 position-absolute custom-white m-1",children:["Generated at ",n.createdAt]}),(0,s.jsxs)("div",{className:"jsx-442266310d54c197 card-body pb-4 position-relative text-center text-white",children:[(0,s.jsxs)("h1",{style:{textShadow:"2px 2px 5px ".concat(0==(null===n||void 0===n?void 0:n.status)?"darkblue":"darkred")},className:"jsx-442266310d54c197 "+"display-3 ".concat(0==(null===n||void 0===n?void 0:n.status)?"text-primary":"text-danger"),children:[" ",0==(null===n||void 0===n?void 0:n.status)?"DEFENDER WON!":"ATTACKER WON!"," "]}),(0,s.jsx)("span",{className:"jsx-442266310d54c197 shadow-black",children:0==(null===n||void 0===n?void 0:n.status)?(0,s.jsxs)("p",{className:"jsx-442266310d54c197",children:["Defender lost ",(null===n||void 0===n?void 0:n.matches[n.matches.length-1].defender.current)-(null===n||void 0===n?void 0:n.matches[0].defender.total)," troop(s)"]}):(0,s.jsxs)("p",{className:"jsx-442266310d54c197",children:["Attacker lost ",(null===n||void 0===n?void 0:n.matches[n.matches.length-1].attacker.current)-(null===n||void 0===n?void 0:n.matches[0].attacker.total)," troop(s)"]})}),(0,s.jsx)(b,{data:t,changeData:function(e){if(0===e){var a=t.find((function(e){return 0===e.status}));void 0!==a&&r(a)}else if(1===e){var s=t.find((function(e){return 1===e.status}));void 0!==s&&r(s)}}})]}),(0,s.jsxs)("table",{className:"jsx-442266310d54c197 table table-sm table-dark table-striped m-0",children:[(0,s.jsx)("thead",{className:"jsx-442266310d54c197",children:(0,s.jsxs)("tr",{className:"jsx-442266310d54c197",children:[(0,s.jsx)("th",{className:"jsx-442266310d54c197",children:"Defender"}),(0,s.jsx)("th",{className:"jsx-442266310d54c197"}),(0,s.jsx)("th",{className:"jsx-442266310d54c197"}),(0,s.jsx)("th",{className:"jsx-442266310d54c197",children:"Attacker"}),(0,s.jsx)("th",{className:"jsx-442266310d54c197"})]})}),(0,s.jsx)("tbody",{className:"jsx-442266310d54c197",children:null===n||void 0===n?void 0:n.matches.map((function(e){return(0,s.jsxs)("tr",{className:"jsx-442266310d54c197",children:[(0,s.jsxs)("td",{className:"jsx-442266310d54c197 text-nowrap",children:[e.defender.current," / ",e.defender.total," ",(0,s.jsx)(x.G,{icon:u.NdV,className:"fa-xs"})]}),(0,s.jsxs)("td",{className:"jsx-442266310d54c197 text-nowrap",children:["(",(0,s.jsx)(x.G,{icon:u.RJo,className:"fa-sm"})," ",e.defender.rolls.join(","),")"]}),(0,s.jsxs)("td",{className:"jsx-442266310d54c197 text-nowrap",children:[e.defender.fallen<=0?(0,s.jsx)("span",{className:"jsx-442266310d54c197 text-success p-1",children:"0"}):(0,s.jsxs)("span",{className:"jsx-442266310d54c197 text-danger p-1",children:["-",e.defender.fallen]}),"/",e.attacker.fallen<=0?(0,s.jsx)("span",{className:"jsx-442266310d54c197 text-success p-1",children:"0"}):(0,s.jsxs)("span",{className:"jsx-442266310d54c197 text-danger p-1",children:["-",e.attacker.fallen]})]}),(0,s.jsxs)("td",{className:"jsx-442266310d54c197 text-nowrap",children:[e.attacker.current," / ",e.attacker.total," ",(0,s.jsx)(x.G,{icon:u.NdV,className:"fa-xs"})]}),(0,s.jsxs)("td",{className:"jsx-442266310d54c197 text-nowrap",children:["(",(0,s.jsx)(x.G,{icon:u.RJo,className:"fa-sm"})," ",e.attacker.rolls.join(","),")"]})]},e.id)}))})]})]})]})}function k(){var e=function(e){switch(e.target.name){case"defenderUnitAmount":n(parseInt(e.target.value));break;case"attackerUnitAmount":o(parseInt(e.target.value));break;case"defenderUnitPerAttack":["x1","x2"].includes(e.target.value)&&m(e.target.value);break;case"attackerUnitPerAttack":["x1","x2","x3"].includes(e.target.value)&&j(e.target.value);break;default:console.log(e.target.name,"? What are you doing ?")}},t=(0,c.useState)(1),a=t[0],n=t[1],d=(0,c.useState)(1),l=d[0],o=d[1],x=(0,c.useState)("x2"),u=x[0],m=x[1],f=(0,c.useState)("x3"),h=f[0],j=f[1],p=(0,c.useState)(null),b=p[0],k=p[1],g=(0,c.useState)(!1),w=g[0],A=g[1];return(0,s.jsxs)("div",{className:"container-fluid bg-dark",children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{children:"Risk battle simulator"}),(0,s.jsx)("meta",{name:"description",content:"Risk board game battle simulator"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)("div",{className:"row pb-3",children:(0,s.jsxs)("h1",{className:i().title,children:["Click to ",(0,s.jsx)("span",{children:"Risk!"})]})}),(0,s.jsxs)("div",{className:"row justify-content-md-center",children:[(0,s.jsx)("div",{className:"col col-lg-3",children:(0,s.jsxs)("div",{className:"card text-white bg-primary",children:[(0,s.jsx)("h2",{className:"card-header",children:"Defender"}),(0,s.jsx)("div",{className:"card-body",children:(0,s.jsxs)("p",{className:"card-text",children:[(0,s.jsx)("label",{htmlFor:"defender",children:"Defender troop amount"}),(0,s.jsx)("br",{}),(0,s.jsx)("input",{className:"w-75 d-inline",type:"number",id:"defender",name:"defenderUnitAmount",value:a,onChange:e,min:1,max:1e3}),(0,s.jsxs)("select",{className:"form-control form-control-sm d-inline w-auto",name:"defenderUnitPerAttack",onChange:e,children:[(0,s.jsx)("option",{children:"x2"}),(0,s.jsx)("option",{children:"x1"})]})]})})]})}),(0,s.jsx)("div",{className:"col col-lg-3",children:(0,s.jsxs)("div",{className:"card text-white bg-danger",children:[(0,s.jsx)("h2",{className:"card-header",children:"Attacker"}),(0,s.jsx)("div",{className:"card-body",children:(0,s.jsxs)("p",{className:"card-text",children:[(0,s.jsx)("label",{htmlFor:"attacker",children:"Attacker troop amount"}),(0,s.jsx)("br",{}),(0,s.jsx)("input",{className:"w-75 d-inline",type:"number",id:"attacker",name:"attackerUnitAmount",value:l,onChange:e,min:1,max:1e3}),(0,s.jsxs)("select",{className:"form-control form-control-sm d-inline w-auto",name:"attackerUnitPerAttack",onChange:e,children:[(0,s.jsx)("option",{children:"x3"}),(0,s.jsx)("option",{children:"x2"}),(0,s.jsx)("option",{children:"x1"})]})]})})]})})]}),(0,s.jsx)("div",{className:"row justify-content-md-center p-3",children:(0,s.jsx)("div",{className:"col col-md-auto",children:(0,s.jsx)(v,{defender:a,attacker:l,defenderPAtt:u,attackerPAtt:h,setData:k,loading:w,setLoading:A})})}),b&&(0,s.jsx)("div",{className:"row justify-content-md-center",children:(0,s.jsx)("div",{className:"col-lg-auto",children:(0,s.jsx)(N,{dataChunk:b})})})]})}},7160:function(e){e.exports={title:"Home_title__T09hD",description:"Home_description__41Owk"}}},function(e){e.O(0,[523,737,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);