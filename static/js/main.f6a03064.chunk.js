(this["webpackJsonpreact-minesweeper"]=this["webpackJsonpreact-minesweeper"]||[]).push([[0],{10:function(e,n,t){"use strict";t.r(n);var i=t(0),r=t.n(i),o=t(3),u=t.n(o),a=(t(9),t(1)),c=function(e,n){var t=Math.abs(e.col-n.col),i=Math.abs(e.row-n.row);return 1===t&&1===i||0===t&&1===i||1===t&&0===i},l=function(e,n){return e.filter((function(e){return e.id===n})).shift()},s=function(e,n){if(0!==e.filter((function(e){return e.isOpen&&e.isMine})).length)return 3;var t=e.filter((function(e){return e.isMine&&!e.isFlag})).length,i=e.filter((function(e){return!e.isMine&&!e.isOpen})).length;return 0===t&&0===i?2:n},f=function(e){var n=e.cell,t=e.status,i=e.onClick,o=e.onMouseDown,u=e.onMouseUp,a=["cell"];return 0===t?a.push("cell-closed"):n.isOpen?n.isMine?a.push("cell-mine","cell-detonated"):0!==n.minesNext&&a.push("cell-"+n.minesNext):n.isFlag?1===t?a.push("cell-closed","cell-flag","cell-flag-red"):2!==t&&3!==t||(n.isMine?a.push("cell-closed","cell-flag","cell-flag-green"):a.push("cell-closed","cell-flag","cell-flag-gray")):n.isMine&&3===t?a.push("cell-mine"):n.isMouseDown||a.push("cell-closed"),r.a.createElement("div",{className:a.join(" "),onClick:function(e){return i(e,n.id,!1)},onContextMenu:function(e){return i(e,n.id,!0)},onMouseDown:function(e){return o(e,n.id)},onMouseUp:function(e){return u(e,n.id)}})},m=function(){for(var e=[],n=0;n<16;n++)for(var t=0;t<30;t++)e.push({id:30*n+t,row:n,col:t,isOpen:!1,isMine:!1,isFlag:!1,isMouseDown:!1,minesNext:0});for(var i=99;i>0;){var r=Math.floor(Math.random()*e.length);e[r].isMine||(e[r].isMine=!0,i--)}return e.map((function(n){return n.minesNext=e.filter((function(e){return c(n,e)&&e.isMine})).length,n})),e};var p=function(){var e=Object(i.useState)((function(){return m()})),n=Object(a.a)(e,2),t=n[0],o=n[1],u=Object(i.useState)((function(){return 0})),p=Object(a.a)(u,2),d=p[0],h=p[1],v=Object(i.useState)((function(){return 0})),g=Object(a.a)(v,2),M=g[0],w=g[1];Object(i.useEffect)((function(){if(1===d){var e=setInterval((function(){w((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}}),[d]);var O=function(e,n,i){if(e.preventDefault(),2!==d&&3!==d){0===d&&h(1);var r=t.concat(),u=l(r,n);i?u.isOpen||F(r,n):u.isFlag||(u.isOpen?u.minesNext===function(e,n){var t=l(e,n);return e.filter((function(e){return c(e,t)&&e.isFlag})).length}(r,n)&&(r.filter((function(e){return c(e,u)&&!e.isOpen&&!e.isFlag&&e.isMine})).map((function(e){return b(r,e.id)})),3!==s(r,d)&&r.filter((function(e){return c(e,u)&&!e.isOpen&&!e.isFlag})).map((function(e){return b(r,e.id)}))):b(r,n)),o(r),h((function(e){return s(r,e)}))}},N=function(e,n){e.preventDefault();var i=t.concat(),r=l(i,n);r.isOpen&&(i.filter((function(e){return c(e,r)&&!e.isOpen&&!e.isFlag})).map((function(e){return e.isMouseDown=!0})),o(i))},E=function(e,n){e.preventDefault();var i=t.concat(),r=l(i,n);r.isOpen&&(i.filter((function(e){return c(e,r)&&!e.isOpen&&!e.isFlag})).map((function(e){return e.isMouseDown=!1})),o(i))},F=function(e,n){e.map((function(e){return e.id===n?e.isFlag=!e.isFlag:null}))},b=function e(n,t){n.map((function(e){return e.id===t?e.isOpen=!0:null}));var i=l(n,t);i.isMine||0!==i.minesNext||n.filter((function(e){return c(e,i)&&!e.isOpen&&!e.isFlag})).map((function(t){return e(n,t.id)}))},D=function(){h(0),w(0),o(m())};return r.a.createElement("div",null,r.a.createElement("div",{className:"container",style:{width:600}},r.a.createElement("div",{className:"topbar"},r.a.createElement("div",{className:"mines-left"},t.filter((function(e){return e.isMine})).length-t.filter((function(e){return e.isFlag})).length),r.a.createElement("div",{className:"status",onClick:function(e){return function(e){e.preventDefault(),D()}(e)}},r.a.createElement("div",{className:"status"+d})),r.a.createElement("div",{className:"timer"},M)),r.a.createElement("div",{className:"field",style:{width:600,height:320}},t.map((function(e){return r.a.createElement(f,{key:e.id,cell:e,status:d,onClick:O,onMouseDown:N,onMouseUp:E})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,n,t){e.exports=t(10)},9:function(e,n,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.f6a03064.chunk.js.map