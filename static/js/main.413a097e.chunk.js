(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),c=n(6),s=n.n(c),a=(n(12),n(2)),o=(n(5),n(13),n(0));var d=function(e){var t=new XMLHttpRequest;return t.onreadystatechange=function(){4==this.readyState&&e.setPage(e.PageEnum.home)},t.open("GET","https://projekt-pp-backend.herokuapp.com",!0),t.send(),Object(o.jsx)("div",{id:"HerokuWait",children:Object(o.jsx)("div",{id:"container",children:Object(o.jsxs)("div",{id:"box",children:[Object(o.jsx)("div",{class:"lds-dual-ring"}),Object(o.jsx)("h1",{children:"Page is being loaded..."}),Object(o.jsx)("h3",{children:"Server is starting, this can take up to one minute..."}),Object(o.jsx)("h5",{children:"Servers are going to sleep automatically when no load is detected to save server resources."})]})})})};var j=function(){return Object(o.jsxs)("div",{id:"registerForm",children:[Object(o.jsx)("input",{type:"text",id:"login_field",placeholder:"login"}),Object(o.jsx)("input",{type:"password",id:"password_field",placeholder:"has\u0142o"}),Object(o.jsx)("input",{type:"text",id:"email_form",placeholder:"email"}),Object(o.jsx)("button",{type:"button",children:"Zarejestruj"})]})},u=n(4),l=n.n(u),b=n(7);n(16),n(17);function h(e,t,n){var i=new Date;i.setTime(i.getTime()+60*n*60*1e3);var r="expires="+i.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"}var p=function(e){var t=Object(i.useState)(!1),n=Object(a.a)(t,2),r=n[0],c=n[1],s=Object(i.useState)("Zaloguj"),d=Object(a.a)(s,2),j=d[0],u=d[1],p=function(){h("jwt","",-1),document.location.reload()},O=function(){e.setPage(e.PageEnum.register)},g=function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u("Logowanie..."),t={username:document.getElementById("login_field").value,password:document.getElementById("password_field").value},fetch("https://projekt-pp-backend.herokuapp.com/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json().then((function(t){200===e.status?(h("jwt",t.jwt,10),c(!0)):alert(e.status)}))}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"sidebar",children:[function(){if(e.page!=e.PageEnum.register)return r?Object(o.jsxs)("div",{id:"login_form",children:[Object(o.jsxs)("p",{children:["@","nazwa_u\u017cytkownika"]}),Object(o.jsx)("button",{type:"button",onClick:p,children:"Wyloguj"})]}):Object(o.jsxs)("div",{id:"login_form",children:[Object(o.jsx)("input",{type:"text",id:"login_field",placeholder:"login"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"password",id:"password_field",placeholder:"has\u0142o"}),Object(o.jsx)("button",{type:"button",onClick:g,children:j}),Object(o.jsx)("button",{type:"button",onClick:O,children:"Zarejestruj"})]})}(),Object(o.jsx)("input",{type:"text",id:"search_form",placeholder:"wyszukaj"}),Object(o.jsx)("button",{type:"button",class:"wide_button",children:"Najpopularniejsze w\u0105tki"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"W\u0105tek 1"}),Object(o.jsx)("li",{children:"W\u0105tek 2"}),Object(o.jsx)("li",{children:"W\u0105tek 3"})]}),Object(o.jsx)("button",{type:"button",class:"wide_button",children:"Dodaj w\u0105tek"})]})};var O=function(){return Object(o.jsx)("div",{className:"sections",children:"Hello world"})};var g=function(){var e=Object.freeze({heroku_wait:0,home:1,register:2,section:3,thread:4,add_thread:5}),t=Object(i.useState)(e.heroku_wait),n=Object(a.a)(t,2),r=n[0],c=n[1];return Object(o.jsxs)("div",{id:"app",children:[Object(o.jsx)(p,{page:r,setPage:c,PageEnum:e}),Object(o.jsx)("div",{className:"container",children:function(){switch(r){case e.heroku_wait:return Object(o.jsx)(d,{setPage:c,PageEnum:e});case e.home:return Object(o.jsx)(O,{});case e.register:return Object(o.jsx)(j,{});case e.section:case e.thread:case e.add_thread:return}}()})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),i(e),r(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),x()},5:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.413a097e.chunk.js.map