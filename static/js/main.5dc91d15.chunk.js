(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),o=n(9),a=n.n(o),s=(n(16),n(2)),r=(n(7),n(17),n(0));var j=function(e){var t=new XMLHttpRequest;return t.onreadystatechange=function(){4==this.readyState&&e.setPage(e.PageEnum.home)},t.open("GET","https://projekt-pp-backend.herokuapp.com/swagger-ui.html",!0),t.send(),Object(r.jsx)("div",{id:"HerokuWait",children:Object(r.jsx)("div",{id:"container",children:Object(r.jsxs)("div",{id:"box",children:[Object(r.jsx)("div",{className:"lds-dual-ring"}),Object(r.jsx)("h1",{children:"Page is being loaded..."}),Object(r.jsx)("h3",{children:"Server is starting, this can take up to one minute..."}),Object(r.jsx)("h5",{children:"Servers are going to sleep automatically when no load is detected to save server resources."})]})})})};var u=function(){return Object(r.jsxs)("div",{id:"registerForm",children:[Object(r.jsx)("input",{type:"text",id:"login_field",placeholder:"login"}),Object(r.jsx)("input",{type:"password",id:"password_field",placeholder:"has\u0142o"}),Object(r.jsx)("input",{type:"text",id:"email_form",placeholder:"email"}),Object(r.jsx)("button",{type:"button",children:"Zarejestruj"})]})},d=n(4);var l=function(e){return Object(r.jsx)("div",{className:"item",children:e.title})},h=n(3);var p=function(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),i=n[0],o=n[1];return Object(c.useEffect)((function(){fetch("https://projekt-pp-backend.herokuapp.com/section",{method:"GET",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"Bearer "+Object(h.getCookie)("jwt")}}).then((function(t){return t.json().then((function(n){if(200==t.status){var c,i=[],a=Object(d.a)(n);try{var s=function(){var t=c.value;i.push(Object(r.jsx)("div",{onClick:function(){return n=t.id,void fetch("https://projekt-pp-backend.herokuapp.com/section/"+n,{method:"GET",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"Bearer "+Object(h.getCookie)("jwt")}}).then((function(t){return t.json().then((function(n){200==t.status&&(e.setPage(e.PageEnum.section),e.setSectionName(n.name))}))}));var n},children:Object(r.jsx)(l,{title:t.name})}))};for(a.s();!(c=a.n()).done;)s()}catch(j){a.e(j)}finally{a.f()}o(i)}}))}))}),[]),Object(r.jsx)("div",{className:"sections",children:i})},b=n(8),f=n.n(b),O=n(10),m=(n(20),n(11));var g=function(e){var t=Object(c.useState)(Object(h.getCookie)("jwt")),n=Object(s.a)(t,2),i=n[0],o=(n[1],Object(c.useState)("Zaloguj")),a=Object(s.a)(o,2),j=a[0],u=a[1],d=i?Object(m.a)(Object(h.getCookie)("jwt")).sub:"unknown",l=function(){Object(h.setCookie)("jwt","",-1),document.location.reload()},p=function(){e.setPage(e.PageEnum.register)},b=function(){var e=Object(O.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u("Logowanie..."),t={username:document.getElementById("login_field").value,password:document.getElementById("password_field").value},fetch("https://projekt-pp-backend.herokuapp.com/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json().then((function(t){200===e.status?(Object(h.setCookie)("jwt",t.jwt,10),document.location.reload()):alert(e.status)}))}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"sidebar",children:[function(){if(e.page!=e.PageEnum.register)return i?Object(r.jsxs)("div",{id:"login_form",children:[Object(r.jsxs)("p",{children:["@",d]}),Object(r.jsx)("button",{type:"button",onClick:l,children:"Wyloguj"})]}):Object(r.jsxs)("div",{id:"login_form",children:[Object(r.jsx)("input",{type:"text",id:"login_field",placeholder:"login"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"password",id:"password_field",placeholder:"has\u0142o"}),Object(r.jsx)("button",{type:"button",onClick:b,children:j}),Object(r.jsx)("button",{type:"button",onClick:p,children:"Zarejestruj"})]})}(),Object(r.jsx)("input",{type:"text",id:"search_form",placeholder:"wyszukaj"}),Object(r.jsx)("button",{type:"button",className:"wide_button",children:"Najpopularniejsze w\u0105tki"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"W\u0105tek 1"}),Object(r.jsx)("li",{children:"W\u0105tek 2"}),Object(r.jsx)("li",{children:"W\u0105tek 3"})]}),Object(r.jsx)("button",{type:"button",className:"wide_button",children:"Dodaj w\u0105tek"})]})};var x=function(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),i=n[0],o=n[1],a=function(){e.setPage(e.PageEnum.home),e.setSectionName("\u0141adowanie...")};return Object(c.useEffect)((function(){fetch("https://projekt-pp-backend.herokuapp.com/topic",{method:"GET",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"Bearer "+Object(h.getCookie)("jwt")}}).then((function(t){return t.json().then((function(n){if(200==t.status){var c,i=[],s=Object(d.a)(n);try{var j=function(){var t=c.value;i.push(Object(r.jsx)("div",{onClick:function(){return n=t.id,void fetch("https://projekt-pp-backend.herokuapp.com/topic/"+n,{method:"GET",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"Bearer "+Object(h.getCookie)("jwt")}}).then((function(t){return t.json().then((function(n){200==t.status&&(e.setPage(e.PageEnum.thread),e.setThreadName(n.title))}))}));var n},children:Object(r.jsx)(l,{title:t.title,closeSection:a})}))};for(s.s();!(c=s.n()).done;)j()}catch(u){s.e(u)}finally{s.f()}o(i)}}))}))}),[]),Object(r.jsxs)("div",{className:"sections",children:[Object(r.jsx)("div",{onClick:a,children:Object(r.jsx)(l,{title:e.sectionName})}),Object(r.jsx)("div",{className:"threads",children:i})]})};var v=function(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),i=n[0];return n[1],Object(c.useEffect)((function(){fetch("https://projekt-pp-backend.herokuapp.com/topic",{method:"GET",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"Bearer "+Object(h.getCookie)("jwt")}}).then((function(e){return e.json().then((function(t){if(200==e.status){var n,c=Object(d.a)(t);try{for(c.s();!(n=c.n()).done;)n.value}catch(i){c.e(i)}finally{c.f()}}}))}))}),[]),Object(r.jsxs)("div",{className:"sections",children:[Object(r.jsx)("div",{onClick:function(){e.setPage(e.PageEnum.home),e.setSectionName("\u0141adowanie...")},children:Object(r.jsx)(l,{title:e.sectionName})}),Object(r.jsxs)("div",{className:"threads",children:[Object(r.jsx)("div",{onClick:function(){e.setPage(e.PageEnum.section)},children:Object(r.jsx)(l,{title:e.threadName})}),Object(r.jsx)("div",{className:"topics",children:i})]})]})};var k=function(){var e=Object.freeze({heroku_wait:0,home:1,register:2,section:3,thread:4,add_thread:5}),t=Object(c.useState)(e.heroku_wait),n=Object(s.a)(t,2),i=n[0],o=n[1],a=Object(c.useState)("Wczytywanie..."),d=Object(s.a)(a,2),l=d[0],h=d[1],b=Object(c.useState)("Wczytywanie..."),f=Object(s.a)(b,2),O=f[0],m=f[1];return Object(r.jsxs)("div",{id:"app",children:[Object(r.jsx)(g,{page:i,setPage:o,PageEnum:e}),Object(r.jsx)("div",{className:"container",children:function(){switch(i){case e.heroku_wait:return Object(r.jsx)(j,{setPage:o,PageEnum:e});case e.home:return Object(r.jsx)(p,{setPage:o,PageEnum:e,setSectionName:h});case e.register:return Object(r.jsx)(u,{});case e.section:return Object(r.jsx)(x,{setPage:o,PageEnum:e,sectionName:l,setSectionName:h,setThreadName:m});case e.thread:return Object(r.jsx)(v,{setPage:o,PageEnum:e,sectionName:l,setSectionName:h,threadName:O});case e.add_thread:return}}()})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),o(e),a(e)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),w()},3:function(e,t){e.exports.getCookie=function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie).split(";"),c=0;c<n.length;c++){for(var i=n[c];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return""},e.exports.setCookie=function(e,t,n){var c=new Date;c.setTime(c.getTime()+60*n*60*1e3);var i="expires="+c.toUTCString();document.cookie=e+"="+t+";"+i+";path=/"}},7:function(e,t,n){}},[[21,1,2]]]);
//# sourceMappingURL=main.5dc91d15.chunk.js.map