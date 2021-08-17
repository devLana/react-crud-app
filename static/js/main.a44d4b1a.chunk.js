(this["webpackJsonpreact-crud-app"]=this["webpackJsonpreact-crud-app"]||[]).push([[0],{177:function(e,t,n){e.exports=n(376)},375:function(e,t,n){},376:function(e,t,n){"use strict";n.r(t);n(178),n(187);var a=n(1),c=n.n(a),r=n(175),o=n.n(r),i=n(176),l=n(39),u=n(41),s=[{id:1,name:"Frank",occupation:"Teacher"},{id:2,name:"Susan",occupation:"Dance Instructor"},{id:3,name:"Mary",occupation:"Bar Tender"},{id:4,name:"Dan",occupation:"Physician"},{id:5,name:"Ivan",occupation:"Chef"}],m=function(e){var t=e.users,n=e.deleteUser,a=e.editMode,r=e.editUser,o=t.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",{className:"user__name"},e.name),c.a.createElement("td",{className:"user__occupation"},e.occupation),c.a.createElement("td",null,c.a.createElement("button",{className:"edit btn btn-primary",onClick:function(){return r(e)}},"Edit"),a?c.a.createElement("button",{className:"delete btn btn-danger disabled"},"Delete"):c.a.createElement("button",{className:"delete btn btn-danger",onClick:function(){return n(e.id)}},"Delete")))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Users"),c.a.createElement("table",{className:"table table-striped table-hover"},c.a.createElement("thead",{className:"thead-dark"},c.a.createElement("tr",null,c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Occupation"),c.a.createElement("th",null,"Action"))),c.a.createElement("tbody",null,0===t.length?c.a.createElement("tr",null,c.a.createElement("th",{colSpan:3},"No Data Available")):o)))},d=n(40),p=function(e){return c.a.createElement("form",{onSubmit:e.submitFn,autoComplete:"off"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:e.nameId},"Name"),c.a.createElement("input",{type:"text",name:"name",value:e.name,id:e.nameId,className:"form-control form-control-lg",onChange:e.changeFn,onBlur:e.blurFn})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:e.occupationId},"Occupation"),c.a.createElement("input",{type:"text",name:"occupation",value:e.occupation,id:e.occupationId,className:"form-control form-control-lg",onChange:e.changeFn,onBlur:e.blurFn})),"edit"===e.formType?c.a.createElement("div",{className:"ctrl__btns"},c.a.createElement("span",{className:"btn btn-secondary",onClick:function(){var t;return null===(t=e.closeEdit)||void 0===t?void 0:t.call(e)}},"Cancel"),c.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Edit"})):c.a.createElement("input",{type:"submit",className:"btn btn-success",value:"Add"}))},f=function(e){var t=e.addUser,n={name:"",occupation:""},r=Object(a.useState)(n),o=Object(u.a)(r,2),i=o[0],s=o[1];return c.a.createElement("div",{className:"add-user"},c.a.createElement("h3",null,"Add User"),c.a.createElement(p,{nameId:"add__name",occupationId:"add__occupation",name:i.name,occupation:i.occupation,submitFn:function(e){e.preventDefault(),i.name&&i.occupation&&(t(i),s(n))},changeFn:function(e){var t=e.target,n=t.name,a=t.value;s(Object(l.a)({},i,Object(d.a)({},n,a)))},blurFn:function(e){var t=e.target,n=t.name,a=t.value;s(Object(l.a)({},i,Object(d.a)({},n,a.trim())))}}))},b=function(e){var t=e.userToEdit,n=e.editUser,r=e.closeEdit,o=Object(a.useState)(t),i=Object(u.a)(o,2),s=i[0],m=i[1];Object(a.useEffect)((function(){m(t)}),[t]);return c.a.createElement("div",{className:"edit-user"},c.a.createElement("h3",null,"Edit User"),c.a.createElement(p,{formType:"edit",nameId:"edit__name",occupationId:"edit__occupation",name:s.name,occupation:s.occupation,closeEdit:r,submitFn:function(e){e.preventDefault(),s.name&&s.occupation&&n(s)},changeFn:function(e){var t=e.target,n=t.name,a=t.value;m(Object(l.a)({},s,Object(d.a)({},n,a)))},blurFn:function(e){var t=e.target,n=t.name,a=t.value;m(Object(l.a)({},s,Object(d.a)({},n,a.trim())))}}))},v=(n(374),n(375),function(){var e={id:0,name:"",occupation:""},t=Object(a.useState)(s),n=Object(u.a)(t,2),r=n[0],o=n[1],d=Object(a.useState)(!1),p=Object(u.a)(d,2),v=p[0],E=p[1],h=Object(a.useState)(e),g=Object(u.a)(h,2),N=g[0],w=g[1];return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Personnel Manager"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"form-container col-md-5"},v?c.a.createElement(b,{userToEdit:N,editUser:function(t){var n=r.map((function(e){return e.id===t.id?t:e}));o(n),E(!1),w(e)},closeEdit:function(){E(!1),w(e)}}):c.a.createElement(f,{addUser:function(e){var t=r.length,n=0===t?1:r[t-1].id+1,a=Object(l.a)({},e,{id:n});o([].concat(Object(i.a)(r),[a]))}})),c.a.createElement("div",{className:"table-responsive-md col-md-7"},c.a.createElement(m,{users:r,editMode:v,deleteUser:function(e){o(r.filter((function(t){return t.id!==e})))},editUser:function(e){E(!0),w(e)}}))))}),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-crud-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-crud-app","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(t,e)}))}}()}},[[177,1,2]]]);
//# sourceMappingURL=main.a44d4b1a.chunk.js.map