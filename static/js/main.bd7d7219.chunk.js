(this["webpackJsonpreact-crud-app"]=this["webpackJsonpreact-crud-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),l=a(8),i=a(2),u=[{id:1,name:"Frank",occupation:"Teacher"},{id:2,name:"Susan",occupation:"Dance Instructor"},{id:3,name:"Mary",occupation:"Bar Tender"},{id:4,name:"Dan",occupation:"Physician"},{id:5,name:"Ivan",occupation:"Chef"}],m=function(e){var t=e.users,a=e.deleteUser,n=e.editMode,r=e.editUser,o=t.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",{className:"user__name"},e.name),c.a.createElement("td",{className:"user__occupation"},e.occupation),c.a.createElement("td",null,c.a.createElement("button",{className:"edit btn btn-primary",onClick:function(){return r(e)}},"Edit"),n?c.a.createElement("button",{className:"delete btn btn-danger disabled"},"Delete"):c.a.createElement("button",{className:"delete btn btn-danger",onClick:function(){return a(e.id)}},"Delete")))}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Users"),c.a.createElement("table",{className:"table table-striped table-hover"},c.a.createElement("thead",{className:"thead-dark"},c.a.createElement("tr",null,c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Occupation"),c.a.createElement("th",null,"Action"))),c.a.createElement("tbody",null,0===t.length?c.a.createElement("tr",null,c.a.createElement("th",{colSpan:3},"No Data Available")):o)))},s=a(1),d=a(3),b=function(e){return c.a.createElement("form",{onSubmit:e.submitFn,autoComplete:"off"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:e.nameId},"Name"),c.a.createElement("input",{type:"text",name:"name",value:e.name,id:e.nameId,className:"form-control form-control-lg",onChange:e.changeFn,onBlur:e.blurFn})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:e.occupationId},"Occupation"),c.a.createElement("input",{type:"text",name:"occupation",value:e.occupation,id:e.occupationId,className:"form-control form-control-lg",onChange:e.changeFn,onBlur:e.blurFn})),"edit"===e.formType?c.a.createElement("div",{className:"ctrl__btns"},c.a.createElement("span",{className:"btn btn-secondary",onClick:function(){return e.closeEdit()}},"Cancel"),c.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Edit"})):c.a.createElement("input",{type:"submit",className:"btn btn-success",value:"Add"}))},p=function(e){var t=e.addUser,a={name:"",occupation:""},r=Object(n.useState)(a),o=Object(i.a)(r,2),l=o[0],u=o[1];return c.a.createElement("div",{className:"add-user"},c.a.createElement("h3",null,"Add User"),c.a.createElement(b,{nameId:"add__name",occupationId:"add__occupation",name:l.name,occupation:l.occupation,submitFn:function(e){e.preventDefault(),l.name&&l.occupation&&(t(l),u(a))},changeFn:function(e){var t=e.target,a=t.name,n=t.value;u(Object(d.a)({},l,Object(s.a)({},a,n)))},blurFn:function(e){var t=e.target,a=t.name,n=t.value;u(Object(d.a)({},l,Object(s.a)({},a,n.trim())))}}))},E=function(e){var t=e.userToEdit,a=e.editUser,r=e.closeEdit,o=Object(n.useState)(t),l=Object(i.a)(o,2),u=l[0],m=l[1];Object(n.useEffect)((function(){m(t)}),[t]);return c.a.createElement("div",{className:"edit-user"},c.a.createElement("h3",null,"Edit User"),c.a.createElement(b,{formType:"edit",nameId:"edit__name",occupationId:"edit__occupation",name:u.name,occupation:u.occupation,closeEdit:r,submitFn:function(e){e.preventDefault(),u.name&&u.occupation&&a(u)},changeFn:function(e){var t=e.target,a=t.name,n=t.value;m(Object(d.a)({},u,Object(s.a)({},a,n)))},blurFn:function(e){var t=e.target,a=t.name,n=t.value;m(Object(d.a)({},u,Object(s.a)({},a,n.trim())))}}))},f=(a(14),a(15),function(){var e={id:null,name:"",occupation:""},t=Object(n.useState)(u),a=Object(i.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(!1),d=Object(i.a)(s,2),b=d[0],f=d[1],v=Object(n.useState)(e),h=Object(i.a)(v,2),g=h[0],N=h[1];return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Personnel Manager"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"form-container col-md-5"},b?c.a.createElement(E,{userToEdit:g,editUser:function(t){var a=r.map((function(e){return e.id===t.id?t:e}));o(a),f(!1),N(e)},closeEdit:function(){f(!1),N(e)}}):c.a.createElement(p,{addUser:function(e){var t=r.length,a=0===t?1:r[t-1].id+1;e.id=a,o([].concat(Object(l.a)(r),[e]))}})),c.a.createElement("div",{className:"table-responsive-md col-md-7"},c.a.createElement(m,{users:r,editMode:b,deleteUser:function(e){o(r.filter((function(t){return t.id!==e})))},editUser:function(e){f(!0),N(e)}}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.bd7d7219.chunk.js.map