(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(81),i=t.n(a),r=t(645),s=t.n(r)()(i());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;700;900&display=swap);"]),s.push([e.id,"body {\n    height: 100vh;\n    margin: 0px;\n    padding: 0px;\n    /* overflow-y: hidden ; */\n    user-select: none;\n\n}\n\nsvg {\n    height: 0.8rem;\n    width: auto;\n}\n\n:root {\n    font-size: calc(1vh + 1vw);\n    font-family: 'Inter', sans-serif;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.head {\n    background-color: green;\n    font-size: 1.5rem;\n    padding: 10px;\n    padding-left: 20px;\n    color: white;\n    font-family: 'Playfair Display';\n    position: sticky;\n    top: 0px;\n\n\n}\n\n.foot {\n    margin-top: auto;\n    font-size: 0.5rem;\n    text-align: center;\n    background-color: green;\n    padding: 5px;\n    color: white;\n    font-family: 'Playfair Display';\n\n}\n\n.mid {\n    flex: 1 1 0;\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n\n}\n\n.tasks {\n    padding-left: 2rem;\n    padding-top: 1rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.lists {\n    padding-top: 1rem;\n    border-left: 1px solid gray; \n    padding-left: 1rem;\n}\n\n.actual {\n    padding-left: 1rem;\n    padding-top: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    height: 90%;\n}\n\n.emp {\n    font-weight: 700;\n}\n\n.heading {\n    text-transform: capitalize;\n    font-weight: 900;\n}\n\n.add-button {\n    margin-top: auto;\n    padding-bottom: 10px;\n    display: flex;\n    width: 80%;\n}\n\n.add-button > div {\n    margin-left: auto;\n    height: 1.5rem;\n    width: 1.5rem;\n    border-radius: 5px;\n    background-color: green;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add-button svg {\n    height: 1rem;\n    width: 1rem;\n    fill: white;\n}\n\n.task {\n    background-color: rgb(223, 223, 223) ;\n    width: 70%;\n    border-radius: 10px;\n    height: 2rem;\n    display: grid;\n    grid-template-columns: 1fr 10fr 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n    margin-bottom: 0.5rem;\n    user-select: none;\n\n}\n\n.task-title {\n    justify-self: left;\n}\n\n.list {\n    background-color:rgb(238, 238, 238);\n    width: 80%;\n    display: grid;\n    font-size: 0.9rem;\n    grid-template-columns: 1fr 90fr;\n    margin-bottom: 10px;\n    column-gap: 10px;\n    height: 2rem;\n    user-select: none;\n}\n\n.selected {\n    background-color: rgb(211, 211, 211);\n\n}\n\n.selected div:nth-child(1) {\n    background-color: green;\n}\n\n.selected div:nth-child(2) {\n    font-size: 0.8rem;\n    font-weight: 600;\n}\n\n.list div:nth-child(2) {\n    display: flex;\n    /* justify-content: center; */\n    align-items: center;\n}\n\n.expanded-task {\n    background-color: rgb(223, 223, 223) ;\n    width: 70%;\n    border-radius: 10px;\n    padding-top: 0.7rem;\n    padding-bottom: 1rem;\n    margin-bottom: 0.5rem;\n    user-select: none;\n\n\n}\n\n.expanded-task > .top {\n    display: grid;\n    grid-template-columns: 1fr 10fr 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n    margin-bottom: 0.5rem;\n    \n}\n\n.expanded-task > .exp-body {\n    padding-left: 1rem;\n}\n\n.list-name {\n    font-size: 0.5rem;\n    font-weight: 600;\n    color: green;\n}\n\n\n.exp-title {\n    margin: 0.5rem 0px;\n}\n\n.details, .time-date, .sub-tasks {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: 10px;\n}\n\n.details > span, .time-date > span, .sub-tasks > span {\n    font-size: 0.7rem;\n    margin-left: 15px;\n}\n\n.create-task {\n    margin-top: auto;\n    background-color: rgb(223, 223, 223) ;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    width: 70%;\n    user-select: none;\n}\n\n.create-task > form {\n    padding-left: 1rem;\n    padding-top: 0.5rem;\n}\n\n.create-task  input {\n    background-color: rgb(223, 223, 223) ;\n    border: 0px;\n    width: 70%;\n}\n\n.create-task input:focus {\n    outline: none;\n}\n\n.create-task .btm {\n    display: flex;\n    width: 95%;\n    margin: 15px 0px;\n    align-items: center;\n}\n.create-task .btm svg {\n    margin-right: 10px;\n}\n\n.create-task .btm div {\n    \n    margin-left: auto;\n}\n\n.btm div button {\n    border: 0px;\n    font-size: 0.7rem;\n    font-weight: 600;\n    background-color: rgb(223, 223, 223) ;\n    color: green;\n}\n\n.btm div .cancel {\n    color: red;\n}\n\n#tnam {\n    font-size: 0.8rem\n}\n\n#tdetail {\n    font-size: 0.6rem;\n}\n\n.show-date {\n    font-size: 0.6rem;\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid gray;\n    width: 6rem;\n    text-align: center;\n    margin: 10px 0px;\n}\n\n\n.complete {\n    margin-top: 1rem;\n    border-top: 1px solid gray;\n    padding-top: 5px;\n    width: 70%;\n    user-select: none;\n}\n\n.complete > .top {\n    font-size: 0.8rem;\n    display: flex;\n}\n\n.complete > .top > svg {\n    margin-left: auto;\n    margin-bottom: 20px;\n}\n\n.complete .midd {\n    margin-top: 10px;\n    width: 98%;\n}\n\n.complete-task svg {\n    margin-right: 1rem;\n}\n\n.complete-task {\n    display: flex;\n    background-color: rgb(223, 223, 223) ;\n    border-radius: 5px;\n    width: 100%;\n    padding-left: 0.5rem;\n    font-size: 0.7rem;\n    height: 1.4rem;\n    align-items: center;\n    margin-bottom: 0.5rem;\n\n\n}\n\n.complete-title {\n    text-decoration: line-through;\n}\n\n.create-list-button {\n    width: 80%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 0.7rem;\n    background-color:rgb(247, 247, 247);\n    height: 1.5rem;\n    border-radius: 10px;\n    margin-bottom: 10px;\n    user-select: none;\n}\n\n.create-list-button:hover {\n    background-color: rgb(221, 221, 221);\n\n}\n\n.list:hover {\n    background-color: rgb(211, 211, 211);\n}\n\n.del-svg:hover {\n    fill: red;\n}\n\n.create-list {\n    background-color: rgb(223, 223, 223) ;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n    width: 80%;\n}\n\n.create-list > form > input {\n    border: 0px;\n    background-color: rgb(223, 223, 223) ;\n    margin-left: 15px;\n    font-size: 0.7rem;\n    padding: 0px;\n}\n\n.create-list > form > input:focus {\n    outline: none;\n}\n\n.create-list button {\n    margin-left: 15px;\n    margin-bottom: 15px;\n    background-color: rgb(223, 223, 223) ;\n    color: green;\n    font-weight: 600;\n    border: 0px;\n    font-size: 0.8rem;\n    padding: 0px;\n}\n\n.create-list div {\n    margin-top: 15px;\n    display: flex;\n    width: 100%;\n}\n.create-list .cancel {\n    margin-left: auto;\n    margin-right: 15px;\n    color: red;\n}\n\n.task:hover {\n    background-color: rgb(187, 187, 187);\n\n}\n\n.important-svg:hover {\n    fill: green;\n}\n\n.add-button div:hover {\n    background-color: rgb(0, 97, 0);\n}\n\n.submt:hover {\n    color: rgb(0, 90, 0);\n}\n\n.cancel:hover {\n    color: rgb(168, 0, 0);\n}\n\n.complete .top svg:hover {\n    fill: green;\n}\n\n.hide {\n    display: none;\n}\n\n.circle:hover {\n    fill: green;\n}\n\n.back:hover {\n    fill: red;\n}\n\n.add-importance {\n    fill: rgb(189, 154, 0);\n}\n\n.add-importance:hover {\n    fill: rgb(189, 154, 0);\n}\n\n.add-details:hover {\n    fill: green;\n}\n\n.formatted {\n    width: auto;\n}\n\n.incl-date {\n    height: 4rem;\n}\n\n.norm-task-top {\n    justify-self: left;\n}\n\n.deadline-soon {\n    border: 1px solid red;\n}\n\n.complete-task > svg {\n    fill: green;\n}",""]);const o=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var o=0;o<this.length;o++){var d=this[o][0];null!=d&&(s[d]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);a&&s[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),n.push(c))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},s=[],o=0;o<e.length;o++){var d=e[o],l=a.base?d[0]+a.base:d[0],c=r[l]||0,m="".concat(l," ").concat(c);r[l]=c+1;var p=t(m),v={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(v);else{var h=i(v,a);a.byIndex=o,n.splice(o,0,{identifier:m,updater:h,references:1})}s.push(m)}return s}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var r=a(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var o=t(r[s]);n[o].references--}for(var d=a(e,i),l=0;l<r.length;l++){var c=t(r[l]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),i=t.n(a),r=t(569),s=t.n(r),o=t(565),d=t.n(o),l=t(216),c=t.n(l),m=t(589),p=t.n(m),v=t(426),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=c(),n()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;let u=[];function g(e){for(let n=0;n<u.length;++n)u[n].nodeRef==e?u[n].selected=!0:u[n].selected=!1}function f(){let e;return u.forEach((n=>{n.selected&&(e=n)})),e}const w=function(e){return{name:e,selected:!1,tasks:[],addTask:function(){},makeList:function(){u.push(this)},nodeRef:null}};function k(e,n){for(let t=0;t<u.length;++t)if(u[t].name==n)for(let n=0;n<u[t].tasks.length;++n)u[t].tasks[n].name==e&&u[t].tasks.splice(n,1)}function x(e,n){for(let t=0;t<u.length;++t)u[t].name==n&&u[t].tasks.push(e)}let b=[],T=[];function q(e){for(let n=0;n<b.length;n++)if(b[n].nodeRef==e)return b[n]}let y=function(){let e=document.querySelector(".create-list-button"),n=document.querySelector(".create-list"),t=document.querySelector(".create-list .submt"),a=document.querySelector(".create-list .cancel"),i=document.querySelector(".add-list");return e.onclick=function(){n.removeAttribute("hidden")},t.addEventListener("click",(t=>{t.preventDefault(),n.setAttribute("hidden","hidden"),e.removeAttribute("hidden");let a=document.querySelector(".create-list form input").value.substring(0,20),i=w(a);i.makeList(),L.makeListDOM(i),document.querySelector(".create-list form").reset()})),a.addEventListener("click",(e=>{e.preventDefault(),n.setAttribute("hidden","hidden"),document.querySelector(".create-list form").reset()})),{createListButton:e,createListDiv:n,createListSubmit:t,createListCancel:a,addListDiv:i,makeListeners:function(){let e=Array.from(document.querySelectorAll(".list"));for(let n=0;n<e.length;++n)e[n].onclick=function(){this.classList.contains("selected")||(e.forEach((e=>{e.classList.remove("selected")})),this.classList.add("selected"),g(this),Z.resetTaskForm(),L.renderTasksFromSelectedList())}}}}(),L=function(){let e=null;function n(e){let n=document.createElement("div");n.classList.add("task");let t="";e.dueDate&&(t=e.getFormattedDate(),n.classList.add("incl-date")),e.important?n.innerHTML=`<svg class="circle" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>\n            <div class="norm-task-top">\n                <div class="task-title">${e.name}</div>\n                <div class="${t?"show-date formatted deadline-soon":""}">${t}</div>\n            </div>\n            <svg class="important-svg add-importance" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/></svg>\n            <svg class="del-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>\n            `:n.innerHTML=`<svg class="circle" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>\n            <div class="norm-task-top">\n                <div class="task-title">${e.name}</div>\n                <div class="${t?"show-date formatted deadline-soon":""}">${t}</div>\n            </div>\n            <svg class="important-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>\n            <svg class="del-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>\n            `,e.nodeRef=n,Z.completeDiv.before(n),Z.makeTaskListeners()}function t(){document.querySelector(".complete .top > div").textContent=`Completed (${T.length})`}function a(){Array.from(document.querySelectorAll(".task")).forEach((e=>{e.remove()})),Array.from(document.querySelectorAll(".expanded-task")).forEach((e=>{e.remove()})),f().tasks.forEach((e=>{n(e)})),Z.makeTaskListeners()}return{makeListDOM:function(e){let n=document.createElement("div");n.appendChild(document.createElement("div"));let t=document.createElement("div");t.innerHTML=e.name,n.appendChild(t),n.classList.add("list"),y.createListButton.before(n),y.makeListeners(),e.nodeRef=n},makeTaskDOM:n,initialize:function(){t();let n=w("Important");return n.makeList(),function(e){let n=document.createElement("div");n.classList.add("list"),n.innerHTML='<div class=""></div>\n        <div>\n           <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>\n        </div>',y.createListButton.before(n),e.nodeRef=n}(n),e=w("My Tasks"),e.makeList(),L.makeListDOM(e),function(e){e.selected=!0,e.nodeRef.classList.add("selected")}(e),e},renderTasksFromSelectedList:a,expandTaskDOM:function(e){e.nodeRef.classList.remove("task"),e.nodeRef.classList.remove("incl-date"),e.nodeRef.classList.add("expanded-task"),e.important?e.nodeRef.innerHTML=`<div class="top">\n            <svg class="back" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>\n            <div></div>\n            <svg class="important-svg add-importance" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/></svg>\n            <svg class="del-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>\n            </div>\n            <div class="exp-body">\n            <div class="list-name">${e.listName}</div>\n            <div class="exp-title">${e.name}</div>\n            <div class="details">\n                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"/></svg>\n                <span>${e.details}</span>\n            </div>\n            <div class="time-date">\n                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>\n                <span class="show-date formatted" >${e.getFormattedDate()}</span>\n            </div>\n            <div class="sub-tasks">\n                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z"/></svg>\n                <span>Add subtasks</span>\n            </div>\n            </div>`:e.nodeRef.innerHTML=`<div class="top">\n            <svg class="back" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>\n            <div></div>\n            <svg class="important-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>\n            <svg class="del-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>\n            </div>\n            <div class="exp-body">\n            <div class="list-name">${e.listName}</div>\n            <div class="exp-title">${e.name}</div>\n            <div class="details">\n                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"/></svg>\n                <span>${e.details}</span>\n            </div>\n            <div class="time-date">\n                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>\n                <span class="show-date formatted" >${e.getFormattedDate()}</span>\n            </div>\n            <div class="sub-tasks">\n                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z"/></svg>\n                <span>Add subtasks</span>\n            </div>\n            </div>`,Z.makeExpandedListeners()},minimizeTaskDOM:function(e,n){let t=document.createElement("div");t.classList.add("task");let a="";e.dueDate&&(a=e.getFormattedDate(),t.classList.add("incl-date")),e.important?t.innerHTML=`<svg class="circle" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>\n            <div class="norm-task-top">\n                <div class="task-title">${e.name}</div>\n                <div class="${a?"show-date formatted deadline-soon":""}">${a}</div>\n            </div>\n            <svg class="important-svg add-importance" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/></svg>\n            <svg class="del-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>\n            `:t.innerHTML=`<svg class="circle" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>\n            <div class="norm-task-top">\n                <div class="task-title">${e.name}</div>\n                <div class="${a?"show-date formatted deadline-soon":""}">${a}</div>\n            </div>\n            <svg class="important-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>\n            <svg class="del-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>\n            `,n.parentElement.parentElement.parentElement.replaceChild(t,n.parentNode.parentNode),e.nodeRef=t,Z.makeTaskListeners()},markImportantTaskDOM:function(e){e.innerHTML='<path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/>',e.classList.add("add-importance"),e.parentElement.classList.contains("btm")||(e.parentElement.classList.contains("task")?q(e.parentElement).makeImportant():q(e.parentElement.parentElement).makeImportant())},deleteTaskDOM:function(e){e.parentElement.classList.contains("task")?(q(e.parentElement).deleteTask(),e.parentElement.remove()):(q(e.parentElement.parentElement).deleteTask(),e.parentElement.parentElement.remove())},removeImportanceDOM:function(e){e.innerHTML='<path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/>',e.classList.remove("add-importance"),e.parentElement.classList.contains("btm")||(e.parentElement.classList.contains("task")?q(e.parentElement).removeImportance():q(e.parentElement.parentElement).removeImportance(),"Important"==f().name&&a())},defaultList:e,completeTaskDOM:function(e){let n=q(e),a=document.createElement("div");a.classList.add("complete-task"),a.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>\n        <div class="complete-title">${n.name}</div>`,n.completeTask(),e.remove(),t(),document.querySelector(".complete .midd").appendChild(a)}}}();L.defaultList=L.initialize();let Z=function(){let e=document.getElementById("tdetail"),n=document.querySelector(".create-task .show-date"),t=document.querySelector(".add-button div"),a=document.querySelector(".create-task");t.onclick=function(){a.hasAttribute("hidden")&&(a.removeAttribute("hidden"),window.scrollTo(0,document.body.scrollHeight),"Important"==f().name&&L.markImportantTaskDOM(document.querySelector(".btm .important-svg")),p())};let i=document.querySelector(".create-task form");i.addEventListener("submit",(e=>{e.preventDefault();let n=document.getElementById("tdetail").value;""==n&&(n="No Details");let t={name:document.getElementById("tnam").value.substring(0,40),details:n,dueDate:"No Due date",listName:"",expandTask:function(){},minimizeTask:function(){},deleteTask:function(){this.important&&k(this.name,"Important"),k(this.name,this.listName),b.splice(b.indexOf(this),1)},makeImportant:function(){this.important=!0,x(this,"Important")},completeTask:function(){T.push({name:this.name}),this.nodeRef=null,this.deleteTask()},makeTask:function(){b.push(this)},nodeRef:null,important:!1,removeImportance:function(){this.important=!1,k(this.name,"Important")},getFormattedDate:function(){if(""==this.dueDate)return"No Due Date";let e=this.dueDate.match(/^(\d{4})-(\d{2})-(\d{2})$/),n=new Date(Number(e[1]),Number(e[2])-1,Number(e[3]));return`${["Sun","Mon","Tue","Wed","Thur","Fri","Sat"][n.getDay()]}, ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()]} ${e[3]}`}};t.dueDate=document.getElementById("tduedate").value,document.querySelector(".btm > .important-svg").classList.contains("add-importance")&&(t.important=!0,x(t,"Important")),"Important"==f().name?(x(t,L.defaultList.name),t.listName=L.defaultList.name):(f().tasks.push(t),t.listName=f().name),t.makeTask(),L.makeTaskDOM(t),s()}));let r=document.querySelector(".create-task .cancel");function s(){let t=document.querySelector(".btm .important-svg");t.classList.remove("add-importance"),t.innerHTML='<path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/>',a.setAttribute("hidden","hidden"),i.reset(),e.setAttribute("hidden","hidden"),n.setAttribute("hidden","hidden")}r.addEventListener("click",(e=>{e.preventDefault(),s()})),document.querySelector(".create-task .btm .add-details").onclick=function(n){n.stopPropagation(),e.removeAttribute("hidden")},document.querySelector(".create-task .btm .add-date").onclick=function(e){e.stopPropagation(),n.removeAttribute("hidden")};let o=document.querySelector(".expand"),d=document.querySelector(".minimize"),l=document.querySelector(".complete .midd"),c=document.querySelector(".complete");function m(){let e=document.querySelectorAll(".del-svg");Array.from(e).forEach((e=>{e.onclick=function(e){e.stopPropagation(),L.deleteTaskDOM(this)}}))}function p(){let e=document.querySelectorAll(".important-svg");Array.from(e).forEach((e=>{e.onclick=function(n){n.stopPropagation(),e.classList.contains("add-importance")?L.removeImportanceDOM(this):L.markImportantTaskDOM(this)}}))}return o.onclick=function(){o.classList.add("hide"),d.classList.remove("hide"),l.classList.remove("hide")},d.onclick=function(){d.classList.add("hide"),o.classList.remove("hide"),l.classList.add("hide")},{addTaskButton:t,createTaskDiv:a,createTaskForm:i,createTaskCancel:r,expandButton:o,minimizeButton:d,completeDivMid:l,completeDiv:c,makeTaskListeners:function(){let e=document.querySelectorAll(".task");Array.from(e).forEach((e=>{e.addEventListener("click",(()=>{L.expandTaskDOM(q(e))}))}));let n=document.querySelectorAll(".circle");Array.from(n).forEach((e=>{e.addEventListener("click",(n=>{n.stopPropagation(),L.completeTaskDOM(e.parentNode)}))})),m(),p()},makeExpandedListeners:function(){let e=document.querySelectorAll(".expanded-task");Array.from(e).forEach((e=>{e.childNodes[0].childNodes[1].onclick=function(n){n.stopPropagation(),L.minimizeTaskDOM(q(e),this)}})),m(),p()},resetTaskForm:s}}()})()})();