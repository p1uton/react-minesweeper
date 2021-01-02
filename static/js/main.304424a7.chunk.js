(this["webpackJsonpreact-minesweeper"]=this["webpackJsonpreact-minesweeper"]||[]).push([[0],[,,function(e,n,t){e.exports={Cell:"Cell_Cell__3a2AI",closed:"Cell_closed__1Vnz5",detonated:"Cell_detonated__3a9rG",mine:"Cell_mine__3rqDz",flag:"Cell_flag__2UxyW",red:"Cell_red__1AnuW",green:"Cell_green__3-pnt",gray:"Cell_gray__2e-41","count-1":"Cell_count-1__w15rZ","count-2":"Cell_count-2___KyXA","count-3":"Cell_count-3__3gyIk","count-4":"Cell_count-4__3iwcL","count-5":"Cell_count-5__3PKEA","count-6":"Cell_count-6__1JEC4","count-7":"Cell_count-7__1mztp","count-8":"Cell_count-8__3Pbsz"}},,,,,,,function(e,n,t){e.exports={Status:"Status_Status__3LbjR","Status-0":"Status_Status-0__20QTR","Status-1":"Status_Status-1__3d6-3","Status-2":"Status_Status-2__1cT-k","Status-3":"Status_Status-3__3jJ5k"}},function(e,n,t){e.exports={Field:"Field_Field__J5WFY","Field-0":"Field_Field-0__1QInY","Field-1":"Field_Field-1__QMBQ8","Field-2":"Field_Field-2__tpg8R"}},function(e,n,t){e.exports={container:"App_container__1m-2P","container-0":"App_container-0__16Oew","container-1":"App_container-1__FUxMw","container-2":"App_container-2__Gzgk_"}},,,function(e,n,t){e.exports={LevelSelector:"LevelSelector_LevelSelector__2V93N"}},function(e,n,t){e.exports={Timer:"Timer_Timer__3HMJo"}},function(e,n,t){e.exports={Counter:"Counter_Counter__3sKWP"}},function(e,n,t){e.exports={TopBar:"TopBar_TopBar__1hGHN"}},,function(e,n,t){e.exports=t(30)},,,,,,,,,,,function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(4),l=t.n(i),u=t(1),o=[{id:0,name:"Beginner",rows:8,cols:8,mines:10},{id:1,name:"Intermediate",rows:16,cols:16,mines:40},{id:2,name:"Expert",rows:16,cols:30,mines:99}],c=function(e){return{type:"SET_STATUS",payload:e}},s=function(e){return{type:"RESET_GAME",payload:e}},f=function(e){return{type:"OPEN_CELLS",payload:e}},_=function(e){return{type:"PRESS_CELLS",payload:e}},d=t(14),p=t.n(d),m=function(e){for(var n=e.rows,t=e.cols,r=e.mines,a=[],i=0;i<n;i++)for(var l=0;l<t;l++)a.push({id:i*t+l,row:i,col:l,isOpen:!1,isMine:!1,isFlag:!1,isPressed:!1,minesNext:0});for(var u=r;u>0;){var o=Math.floor(Math.random()*a.length);a[o].isMine||(a[o].isMine=!0,u--)}return a.map((function(e){return e.minesNext=a.filter((function(n){return v(e,n)&&n.isMine})).length,e})),a},v=function(e,n){var t=Math.abs(e.col-n.col),r=Math.abs(e.row-n.row);return 1===t&&1===r||0===t&&1===r||1===t&&0===r},E=function(e,n){return e.filter((function(e){return e.id===n})).shift()},C=function(e,n){var t=E(e,n);return e.filter((function(e){return v(e,t)&&e.isFlag})).length},g=function e(n,t,r,a){var i=E(n,t),l=n.filter((function(e){return v(e,i)&&!e.isOpen&&!e.isFlag&&-1===r.indexOf(e.id)}));return l.forEach((function(e){r.push(e.id)})),a&&l.filter((function(e){return 0===e.minesNext})).forEach((function(t){return e(n,t.id,r,a).forEach((function(e){return l.push(e)}))})),l},h=function(){var e=Object(u.b)(),n=function(n){e(s(n)),function(e){try{localStorage.setItem("level",e)}catch(n){}}(n)};return a.a.createElement("div",{className:p.a.LevelSelector},o.map((function(e){return a.a.createElement("input",{type:"button",value:e.name,onClick:function(){return n(e.id)},key:e.id})})))},S=t(18),O=t(15),b=t.n(O),j=function(){var e=Object(u.c)((function(e){return e.status})),n=Object(r.useState)(0),t=Object(S.a)(n,2),i=t[0],l=t[1];return Object(r.useEffect)((function(){if(0===e)l(0);else if(1===e){var n=setInterval((function(){l((function(e){return e+1}))}),1e3);return function(){return clearInterval(n)}}}),[e]),a.a.createElement("div",{className:b.a.Timer},i)},y=t(16),F=t.n(y),M=function(){var e=Object(u.c)((function(e){return e.cells}));return a.a.createElement("div",{className:F.a.Counter},e.filter((function(e){return e.isMine})).length-e.filter((function(e){return e.isFlag})).length)},w=t(9),x=t.n(w),L=function(){var e=Object(u.b)(),n=Object(u.c)((function(e){return e.status})),t=Object(u.c)((function(e){return e.level})),r=[x.a.Status,x.a["Status-"+n]];return a.a.createElement("div",null,a.a.createElement("div",{className:r.join(" "),onClick:function(){return e(s(t))}}))},N=t(17),T=t.n(N),k=function(){return a.a.createElement("div",{className:T.a.TopBar},a.a.createElement(M,null),a.a.createElement(L,null),a.a.createElement(j,null))},A=t(2),P=t.n(A),I=function(e){var n=e.cell,t=e.status,r=e.onCellMouseDown,i=e.onCellMouseUp,l=e.onCellClick,u=[P.a.Cell];return 0===t?u.push(P.a.closed):n.isOpen?n.isMine?u.push(P.a.mine,P.a.detonated):0!==n.minesNext&&u.push(P.a["count-"+n.minesNext]):n.isFlag?1===t?u.push(P.a.closed,P.a.flag,P.a.red):2!==t&&3!==t||(n.isMine?u.push(P.a.closed,P.a.flag,P.a.green):u.push(P.a.closed,P.a.flag,P.a.gray)):n.isMine&&3===t?u.push(P.a.mine):n.isPressed||u.push(P.a.closed),a.a.createElement("div",{className:u.join(" "),onMouseDown:function(e){return r(e,n.id)},onMouseUp:function(e){return i(e,n.id)},onClick:function(e){return l(e,n.id)},onContextMenu:function(e){return l(e,n.id)}})},B=t(10),D=t.n(B),G=function(){var e=Object(u.b)(),n=Object(u.c)((function(e){return e.level})),t=Object(u.c)((function(e){return e.cells})),r=Object(u.c)((function(e){return e.status})),i=function(n,a){if(n.preventDefault(),0===r&&e(c(1)),2!==r&&3!==r){var i=E(t,a);2===n.button?i.isOpen||e(function(e){return{type:"FLAG_CELL",payload:e}}(a)):i.isOpen?e(_(g(t,a,[],!1).map((function(e){return e.id})))):i.isFlag||e(_([a]))}},l=function(n,a){if(n.preventDefault(),2!==r&&3!==r){var i=E(t,a);2===n.button||(i.isOpen?(e(_(g(t,a,[],!1).map((function(e){return e.id})))),C(t,a)===i.minesNext&&e(f(g(t,a,[],!0).map((function(e){return e.id}))))):i.isFlag||(e(f([a])),i.isMine?e(c(3)):C(t,a)!==i.minesNext&&0!==i.minesNext||e(f(g(t,a,[],!0).map((function(e){return e.id}))))))}},o=function(n,r){n.preventDefault();var a=function(e){if(0!==e.filter((function(e){return e.isOpen&&e.isMine})).length)return 3;var n=e.filter((function(e){return e.isMine&&!e.isFlag})).length,t=e.filter((function(e){return!e.isMine&&!e.isOpen})).length;return 0===n&&0===t?2:null}(t);null!==a&&e(c(a))},s=[D.a.Field,D.a["Field-"+n]];return a.a.createElement("div",{className:s.join(" ")},t.map((function(e){return a.a.createElement(I,{key:e.id,cell:e,status:r,onCellMouseDown:i,onCellMouseUp:l,onCellClick:o})})))},R=t(11),U=t.n(R);var J=function(){var e=Object(u.c)((function(e){return e.level})),n=[U.a.container,U.a["container-"+e]];return a.a.createElement("div",{className:n.join(" ")},a.a.createElement(k,null),a.a.createElement(G,null),a.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=t(5),z=t(3),Q=Object(W.b)((function(e,n){switch(n.type){case"RESET_GAME":return Object(z.a)({},e,{level:n.payload,status:0,cells:m(o[n.payload])});case"SET_STATUS":return Object(z.a)({},e,{status:n.payload});case"FLAG_CELL":return Object(z.a)({},e,{cells:e.cells.map((function(e){return e.id===n.payload?Object(z.a)({},e,{isFlag:!e.isFlag}):e}))});case"OPEN_CELLS":return Object(z.a)({},e,{cells:e.cells.map((function(e){return-1!==n.payload.indexOf(e.id)?Object(z.a)({},e,{isOpen:!0}):e}))});case"PRESS_CELLS":return Object(z.a)({},e,{cells:e.cells.map((function(e){return-1!==n.payload.indexOf(e.id)?Object(z.a)({},e,{isPressed:!e.isPressed}):e}))});default:return e}}),function(){var e=localStorage.getItem("level"),n=null!==e?e:1;return{level:n,status:0,cells:m(o[n])}}());l.a.render(a.a.createElement(u.a,{store:Q},a.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.304424a7.chunk.js.map