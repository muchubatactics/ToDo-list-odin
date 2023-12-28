(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>o});var r=t(81),i=t.n(r),a=t(645),s=t.n(a)()(i());s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;700;900&display=swap);"]),s.push([n.id,"body {\n    height: 100vh;\n    margin: 0px;\n    padding: 0px;\n    /* overflow-y: hidden ; */\n\n}\n\nsvg {\n    height: 0.8rem;\n    width: auto;\n}\n\n:root {\n    font-size: calc(1vh + 1vw);\n    font-family: 'Inter', sans-serif;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.head {\n    background-color: green;\n    font-size: 1.5rem;\n    padding: 10px;\n    padding-left: 20px;\n    color: white;\n    font-family: 'Playfair Display';\n    position: sticky;\n    top: 0px;\n\n\n}\n\n.foot {\n    margin-top: auto;\n    font-size: 0.5rem;\n    text-align: center;\n    background-color: green;\n    padding: 5px;\n    color: white;\n    font-family: 'Playfair Display';\n\n}\n\n.mid {\n    flex: 1 1 0;\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n\n}\n\n.tasks {\n    padding-left: 2rem;\n    padding-top: 1rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.lists {\n    padding-top: 1rem;\n    border-left: 1px solid gray; \n    padding-left: 1rem;\n}\n\n.actual {\n    padding-left: 1rem;\n    padding-top: 0.5rem;\n    display: flex;\n    flex-direction: column;\n    height: 90%;\n}\n\n.emp {\n    font-weight: 700;\n}\n\n.heading {\n    text-transform: capitalize;\n    font-weight: 900;\n}\n\n.add-button {\n    margin-top: auto;\n    padding-bottom: 10px;\n    display: flex;\n    width: 80%;\n}\n\n.add-button > div {\n    margin-left: auto;\n    height: 1.5rem;\n    width: 1.5rem;\n    border-radius: 5px;\n    background-color: green;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add-button svg {\n    height: 1rem;\n    width: 1rem;\n    fill: white;\n}\n\n.task {\n    background-color: rgb(223, 223, 223) ;\n    width: 70%;\n    border-radius: 10px;\n    height: 2rem;\n    display: grid;\n    grid-template-columns: 1fr 10fr 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n    margin-bottom: 0.5rem;\n    user-select: none;\n\n}\n\n.task-title {\n    justify-self: left;\n}\n\n.list {\n    background-color:rgb(238, 238, 238);\n    width: 80%;\n    display: grid;\n    font-size: 0.9rem;\n    grid-template-columns: 1fr 90fr;\n    margin-bottom: 10px;\n    column-gap: 10px;\n    height: 2rem;\n    user-select: none;\n}\n\n.selected {\n    background-color: rgb(211, 211, 211);\n\n}\n\n.selected div:nth-child(1) {\n    background-color: green;\n}\n\n.selected div:nth-child(2) {\n    font-size: 0.8rem;\n    font-weight: 600;\n}\n\n.list div:nth-child(2) {\n    display: flex;\n    /* justify-content: center; */\n    align-items: center;\n}\n\n.expanded-task {\n    background-color: rgb(223, 223, 223) ;\n    width: 70%;\n    border-radius: 10px;\n    padding-top: 0.7rem;\n    padding-bottom: 1rem;\n    margin-bottom: 0.5rem;\n    user-select: none;\n\n\n}\n\n.expanded-task > .top {\n    display: grid;\n    grid-template-columns: 1fr 10fr 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n    margin-bottom: 0.5rem;\n    \n}\n\n.expanded-task > .exp-body {\n    padding-left: 1rem;\n}\n\n.list-name {\n    font-size: 0.5rem;\n    font-weight: 600;\n    color: green;\n}\n\n\n.exp-title {\n    margin: 0.5rem 0px;\n}\n\n.details, .time-date, .sub-tasks {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: 10px;\n}\n\n.details > span, .time-date > span, .sub-tasks > span {\n    font-size: 0.7rem;\n    margin-left: 15px;\n}\n\n.create-task {\n    margin-top: auto;\n    background-color: rgb(223, 223, 223) ;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    width: 70%;\n    user-select: none;\n}\n\n.create-task > form {\n    padding-left: 1rem;\n    padding-top: 0.5rem;\n}\n\n.create-task  input {\n    background-color: rgb(223, 223, 223) ;\n    border: 0px;\n    width: 70%;\n}\n\n.create-task input:focus {\n    outline: none;\n}\n\n.create-task .btm {\n    display: flex;\n    width: 95%;\n    margin: 15px 0px;\n    align-items: center;\n}\n.create-task .btm svg {\n    margin-right: 10px;\n}\n\n.create-task .btm div {\n    \n    margin-left: auto;\n}\n\n.btm div button {\n    border: 0px;\n    font-size: 0.7rem;\n    font-weight: 600;\n    background-color: rgb(223, 223, 223) ;\n    color: green;\n}\n\n.btm div .cancel {\n    color: red;\n}\n\n#tnam {\n    font-size: 0.8rem\n}\n\n#tdetail {\n    font-size: 0.6rem;\n}\n\n.show-date {\n    font-size: 0.6rem;\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid gray;\n    width: 6rem;\n    text-align: center;\n    margin: 10px 0px;\n}\n\n\n.complete {\n    margin-top: 1rem;\n    border-top: 1px solid gray;\n    padding-top: 5px;\n    width: 70%;\n}\n\n.complete > .top {\n    font-size: 0.8rem;\n    display: flex;\n}\n\n.complete > .top > svg {\n    margin-left: auto;\n    margin-bottom: 20px;\n}\n\n.complete .midd {\n    margin-top: 10px;\n    width: 98%;\n}\n\n.complete-task svg {\n    margin-right: 1rem;\n}\n\n.complete-task {\n    display: flex;\n    background-color: rgb(223, 223, 223) ;\n    border-radius: 5px;\n    width: 100%;\n    padding-left: 0.5rem;\n    font-size: 0.7rem;\n    height: 1.4rem;\n    align-items: center;\n    margin-bottom: 0.5rem;\n\n\n}\n\n.complete-title {\n    text-decoration: line-through;\n}\n\n.create-list-button {\n    width: 80%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 0.7rem;\n    background-color:rgb(247, 247, 247);\n    height: 1.5rem;\n    border-radius: 10px;\n    margin-bottom: 10px;\n    user-select: none;\n}\n\n.create-list-button:hover {\n    background-color: rgb(221, 221, 221);\n\n}\n\n.list:hover {\n    background-color: rgb(211, 211, 211);\n}\n\n.del-svg:hover {\n    fill: red;\n}\n\n.create-list {\n    background-color: rgb(223, 223, 223) ;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n    width: 80%;\n}\n\n.create-list > form > input {\n    border: 0px;\n    background-color: rgb(223, 223, 223) ;\n    margin-left: 15px;\n    font-size: 0.7rem;\n    padding: 0px;\n}\n\n.create-list > form > input:focus {\n    outline: none;\n}\n\n.create-list button {\n    margin-left: 15px;\n    margin-bottom: 15px;\n    background-color: rgb(223, 223, 223) ;\n    color: green;\n    font-weight: 600;\n    border: 0px;\n    font-size: 0.8rem;\n    padding: 0px;\n}\n\n.create-list div {\n    margin-top: 15px;\n    display: flex;\n    width: 100%;\n}\n.create-list .cancel {\n    margin-left: auto;\n    margin-right: 15px;\n    color: red;\n}\n\n.task:hover {\n    background-color: rgb(187, 187, 187);\n\n}\n\n.important-svg:hover {\n    fill: green;\n}\n\n.add-button div:hover {\n    background-color: rgb(0, 97, 0);\n}\n\n.submt:hover {\n    color: rgb(0, 90, 0);\n}\n\n.cancel:hover {\n    color: rgb(168, 0, 0);\n}\n\n.complete .top svg:hover {\n    fill: green;\n}\n\n.hide {\n    display: none;\n}\n\n.circle:hover {\n    fill: green;\n}\n\n.back:hover {\n    fill: red;\n}\n\n.add-importance {\n    fill: rgb(189, 154, 0);\n}\n\n.add-importance:hover {\n    fill: rgb(189, 154, 0);\n}\n\n.add-details:hover {\n    fill: green;\n}",""]);const o=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var o=0;o<this.length;o++){var d=this[o][0];null!=d&&(s[d]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);r&&s[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},s=[],o=0;o<n.length;o++){var d=n[o],l=r.base?d[0]+r.base:d[0],c=a[l]||0,m="".concat(l," ").concat(c);a[l]=c+1;var p=t(m),v={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(v);else{var h=i(v,r);r.byIndex=o,e.splice(o,0,{identifier:m,updater:h,references:1})}s.push(m)}return s}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var s=0;s<a.length;s++){var o=t(a[s]);e[o].references--}for(var d=r(n,i),l=0;l<a.length;l++){var c=t(a[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),i=t.n(r),a=t(569),s=t.n(a),o=t(565),d=t.n(o),l=t(216),c=t.n(l),m=t(589),p=t.n(m),v=t(426),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=c(),e()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;let u=[];function g(n){for(let e=0;e<u.length;++e)u[e].nodeRef==n?u[e].selected=!0:u[e].selected=!1}function f(){let n;return u.forEach((e=>{e.selected&&(n=e)})),n}const w=function(n){return{name:n,selected:!1,tasks:[],addTask:function(){},makeList:function(){u.push(this)},nodeRef:null}};function x(n,e){for(let t=0;t<u.length;++t)if(u[t].name==e)for(let e=0;e<u[t].tasks.length;++e)u[t].tasks[e].name==n&&u[t].tasks.splice(e,1)}function k(n,e){for(let t=0;t<u.length;++t)u[t].name==e&&u[t].tasks.push(n)}let b=[];function T(n){for(let e=0;e<b.length;e++)if(b[e].nodeRef==n)return b[e]}let q=function(){let n=document.querySelector(".create-list-button"),e=document.querySelector(".create-list"),t=document.querySelector(".create-list .submt"),r=document.querySelector(".create-list .cancel"),i=document.querySelector(".add-list");return n.onclick=function(){e.removeAttribute("hidden")},t.addEventListener("click",(t=>{t.preventDefault(),e.setAttribute("hidden","hidden"),n.removeAttribute("hidden");let r=document.querySelector(".create-list form input").value,i=w(r);i.makeList(),y.makeListDOM(i),document.querySelector(".create-list form").reset()})),r.addEventListener("click",(n=>{n.preventDefault(),e.setAttribute("hidden","hidden"),document.querySelector(".create-list form").reset()})),{createListButton:n,createListDiv:e,createListSubmit:t,createListCancel:r,addListDiv:i,makeListeners:function(){let n=Array.from(document.querySelectorAll(".list"));for(let e=0;e<n.length;++e)n[e].onclick=function(){this.classList.contains("selected")||(n.forEach((n=>{n.classList.remove("selected")})),this.classList.add("selected"),g(this),L.resetTaskForm(),y.renderTasksFromSelectedList())}}}}(),y=function(){let n=null;function e(n){let e=document.createElement("div");e.classList.add("task"),n.important?e.innerHTML=`<svg class="circle" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>\n            <div class="task-title">${n.name}</div>\n            <svg class="important-svg add-importance" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/></svg>\n            <svg class="del-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>\n            `:e.innerHTML=`<svg class="circle" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>\n            <div class="task-title">${n.name}</div>\n            <svg class="important-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>\n            <svg class="del-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>\n            `,n.nodeRef=e,L.completeDiv.before(e),L.makeTaskListeners()}function t(){Array.from(document.querySelectorAll(".task")).forEach((n=>{n.remove()})),Array.from(document.querySelectorAll(".expanded-task")).forEach((n=>{n.remove()})),f().tasks.forEach((n=>{e(n)})),L.makeTaskListeners()}return{makeListDOM:function(n){let e=document.createElement("div");e.appendChild(document.createElement("div"));let t=document.createElement("div");t.innerHTML=n.name,e.appendChild(t),e.classList.add("list"),q.createListButton.before(e),q.makeListeners(),n.nodeRef=e},makeTaskDOM:e,initialize:function(){let e=w("Important");return e.makeList(),function(n){let e=document.createElement("div");e.classList.add("list"),e.innerHTML='<div class=""></div>\n        <div>\n           <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>\n        </div>',q.createListButton.before(e),n.nodeRef=e}(e),n=w("My Tasks"),n.makeList(),y.makeListDOM(n),function(n){n.selected=!0,n.nodeRef.classList.add("selected")}(n),n},renderTasksFromSelectedList:t,expandTaskDOM:function(n){n.nodeRef.classList.remove("task"),n.nodeRef.classList.add("expanded-task"),n.important?n.nodeRef.innerHTML=`<div class="top">\n            <svg class="back" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>\n            <div></div>\n            <svg class="important-svg add-importance" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/></svg>\n            <svg class="del-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>\n            </div>\n            <div class="exp-body">\n            <div class="list-name">${n.listName}</div>\n            <div class="exp-title">${n.name}</div>\n            <div class="details">\n                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"/></svg>\n                <span>${n.details}</span>\n            </div>\n            <div class="time-date">\n                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>\n                <span>${n.dueDate}</span>\n            </div>\n            <div class="sub-tasks">\n                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z"/></svg>\n                <span>Add subtasks</span>\n            </div>\n            </div>`:n.nodeRef.innerHTML=`<div class="top">\n            <svg class="back" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>\n            <div></div>\n            <svg class="important-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>\n            <svg class="del-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>\n            </div>\n            <div class="exp-body">\n            <div class="list-name">${n.listName}</div>\n            <div class="exp-title">${n.name}</div>\n            <div class="details">\n                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"/></svg>\n                <span>${n.details}</span>\n            </div>\n            <div class="time-date">\n                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>\n                <span>${n.dueDate}</span>\n            </div>\n            <div class="sub-tasks">\n                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z"/></svg>\n                <span>Add subtasks</span>\n            </div>\n            </div>`,L.makeExpandedListeners()},minimizeTaskDOM:function(n,e){let t=document.createElement("div");t.classList.add("task"),n.important?t.innerHTML=`<svg class="circle" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>\n            <div class="task-title">${n.name}</div>\n            <svg class="important-svg add-importance" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/></svg>\n            <svg class="del-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>\n            `:t.innerHTML=`<svg class="circle" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>\n            <div class="task-title">${n.name}</div>\n            <svg class="important-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/></svg>\n            <svg class="del-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>\n            `,e.parentElement.parentElement.parentElement.replaceChild(t,e.parentNode.parentNode),n.nodeRef=t,L.makeTaskListeners()},markImportantTaskDOM:function(n){n.innerHTML='<path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/>',n.classList.add("add-importance"),n.parentElement.classList.contains("btm")||(n.parentElement.classList.contains("task")?T(n.parentElement).makeImportant():T(n.parentElement.parentElement).makeImportant())},deleteTaskDOM:function(n){n.parentElement.classList.contains("task")?(T(n.parentElement).deleteTask(),n.parentElement.remove()):(T(n.parentElement.parentElement).deleteTask(),n.parentElement.parentElement.remove())},removeImportanceDOM:function(n){n.innerHTML='<path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/>',n.classList.remove("add-importance"),n.parentElement.classList.contains("btm")||(n.parentElement.classList.contains("task")?T(n.parentElement).removeImportance():T(n.parentElement.parentElement).removeImportance(),"Important"==f().name&&t())},defaultList:n}}();y.defaultList=y.initialize();let L=function(){let n=document.getElementById("tdetail"),e=document.querySelector(".create-task .show-date"),t=document.querySelector(".add-button div"),r=document.querySelector(".create-task");t.onclick=function(){r.hasAttribute("hidden")&&(r.removeAttribute("hidden"),window.scrollTo(0,document.body.scrollHeight),"Important"==f().name&&y.markImportantTaskDOM(document.querySelector(".btm .important-svg")),p())};let i=document.querySelector(".create-task form");i.addEventListener("submit",(n=>{n.preventDefault();let e=document.getElementById("tdetail").value;""==e&&(e="No Details");let t={name:document.getElementById("tnam").value,details:e,dueDate:"No Due date",listName:"",expandTask:function(){},minimizeTask:function(){},deleteTask:function(){this.important&&x(this.name,"Important"),x(this.name,this.listName),b.splice(b.indexOf(this),1)},makeImportant:function(){this.important=!0,k(this,"Important")},completeTask:function(){},makeTask:function(){b.push(this)},nodeRef:null,important:!1,removeImportance:function(){this.important=!1,x(this.name,"Important")}};console.log(y.defaultList),document.querySelector(".btm > .important-svg").classList.contains("add-importance")&&(t.important=!0,k(t,"Important")),"Important"==f().name?(k(t,y.defaultList.name),t.listName=y.defaultList.name):(f().tasks.push(t),t.listName=f().name),t.makeTask(),y.makeTaskDOM(t),s()}));let a=document.querySelector(".create-task .cancel");function s(){let t=document.querySelector(".btm .important-svg");t.classList.remove("add-importance"),t.innerHTML='<path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-350Z"/>',r.setAttribute("hidden","hidden"),i.reset(),n.setAttribute("hidden","hidden"),e.setAttribute("hidden","hidden")}a.addEventListener("click",(n=>{n.preventDefault(),s()})),document.querySelector(".create-task .btm .add-details").onclick=function(e){e.stopPropagation(),n.removeAttribute("hidden")},document.querySelector(".create-task .btm .add-date").onclick=function(n){n.stopPropagation(),e.removeAttribute("hidden")};let o=document.querySelector(".expand"),d=document.querySelector(".minimize"),l=document.querySelector(".complete .midd"),c=document.querySelector(".complete");function m(){let n=document.querySelectorAll(".del-svg");Array.from(n).forEach((n=>{n.onclick=function(n){n.stopPropagation(),y.deleteTaskDOM(this)}}))}function p(){let n=document.querySelectorAll(".important-svg");Array.from(n).forEach((n=>{n.onclick=function(e){e.stopPropagation(),n.classList.contains("add-importance")?y.removeImportanceDOM(this):y.markImportantTaskDOM(this)}}))}return o.onclick=function(){o.classList.add("hide"),d.classList.remove("hide"),l.classList.remove("hide")},d.onclick=function(){d.classList.add("hide"),o.classList.remove("hide"),l.classList.add("hide")},{addTaskButton:t,createTaskDiv:r,createTaskForm:i,createTaskCancel:a,expandButton:o,minimizeButton:d,completeDivMid:l,completeDiv:c,makeTaskListeners:function(){let n=document.querySelectorAll(".task");Array.from(n).forEach((n=>{n.addEventListener("click",(()=>{y.expandTaskDOM(T(n))}))}));let e=document.querySelectorAll(".circle");Array.from(e).forEach((n=>{n.addEventListener("click",(n=>{n.stopPropagation()}))})),m(),p()},makeExpandedListeners:function(){let n=document.querySelectorAll(".expanded-task");Array.from(n).forEach((n=>{n.childNodes[0].childNodes[1].onclick=function(e){e.stopPropagation(),y.minimizeTaskDOM(T(n),this)}})),m(),p()},resetTaskForm:s}}()})()})();