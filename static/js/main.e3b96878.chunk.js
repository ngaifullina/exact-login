(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{25:function(n,e,t){n.exports={card:"Profile_card__1Ldrf"}},30:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),i=t(9),a=t.n(i),c=(t(30),t(2)),d=t(8),s=d.c,l=t(10),p="developer21",u="123456";function b(n,e){return n===p&&e===u}var x,g,f,h=Object(l.b)({name:"user",initialState:{login:"",password:"",disabledButton:!0},reducers:{loginChange:function(n,e){n.login=e.payload,b(n.login,n.password)?n.disabledButton=!1:n.disabledButton=!0},passwordChange:function(n,e){n.password=e.payload,b(n.login,n.password)?n.disabledButton=!1:n.disabledButton=!0}}}),j=function(n){return n.user.password},m=function(n){return n.user.login},w=function(n){return n.user.disabledButton},v=h.actions,O=v.loginChange,y=v.passwordChange,k=h.reducer,B=t(11),C=t(12),z=function(n,e){return Object(C.a)(x||(x=Object(B.a)(["\n  white-space: nowrap;\n  display: inline-block;\n  border-radius: 5px;\n  padding: 5px 15px;\n  font-size: 16px;\n  color: white;\n  &:visited {\n    color: white;\n  }\n  background-image: linear-gradient(",", ",");\n  border: 1px solid ",";\n  &:hover {\n    background-image: linear-gradient(",", ",");\n    &[disabled] {\n      background-image: linear-gradient(",", ",");\n    }\n  }\n  &:visited {\n    color: black;\n  }\n  &[disabled] {\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n"])),n,e,e,n,e,n,e)},_=Object(C.a)(g||(g=Object(B.a)(["\n  "," color: #555;\n"])),z("#ffffff","#d5d5d5")),q=z("#4f93ce","#285f8f"),J=C.b.div(f||(f=Object(B.a)(['\n  font-family: sans-serif;\n  & > div {\n    text-align: center;\n  }\n\n  form {\n    max-width: 500px;\n    margin: 10px auto;\n    border: 1px solid #ccc;\n    padding: 20px;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n    border-radius: 3px;\n\n    & > div {\n      display: flex;\n      flex-flow: row nowrap;\n      line-height: 2em;\n      margin: 5px;\n      & > label {\n        color: #333;\n        width: 110px;\n        font-size: 1em;\n        line-height: 32px;\n      }\n      & > input,\n      & > select,\n      & > textarea {\n        flex: 1;\n        padding: 3px 5px;\n        font-size: 1em;\n        margin-left: 15px;\n        border: 1px solid #ccc;\n        border-radius: 3px;\n      }\n      & > input[type="checkbox"] {\n        margin-top: 7px;\n      }\n      & > div {\n        margin-left: 16px;\n        & > label {\n          display: block;\n          & > input {\n            margin-right: 3px;\n          }\n        }\n      }\n    }\n    & > .buttons {\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n      margin-top: 15px;\n    }\n    button {\n      margin: 0 21px;\n      &[type="submit"] {\n        ',';\n      }\n      &[type="button"] {\n        ',";\n      }\n    }\n    pre {\n      border: 1px solid #ccc;\n      background: rgba(0, 0, 0, 0.1);\n      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);\n      padding: 20px;\n    }\n  }\n"])),q,_),L=t(1);function N(){var n=Object(d.b)(),e=s(m),t=s(j),r=s(w),o=Object(c.f)();return Object(L.jsx)(J,{children:Object(L.jsxs)("form",{children:[Object(L.jsx)("div",{children:Object(L.jsx)("input",{value:e,onChange:function(e){n(O(e.target.value))},type:"login",placeholder:"Login",required:!0})}),Object(L.jsx)("div",{children:Object(L.jsx)("input",{value:t,onChange:function(e){n(y(e.target.value))},type:"password",placeholder:"password",required:!0})}),Object(L.jsx)("button",{type:"submit",disabled:r,onClick:function(){o.push("/profile")},children:"\u0412\u043e\u0439\u0442\u0438"})]})})}var S=t(25),W=t.n(S);function A(){return Object(L.jsx)("div",{className:W.a.card,children:Object(L.jsx)("h1",{children:p})})}var E=t(15);var I=function(){return Object(L.jsx)("div",{className:"App",children:Object(L.jsx)(E.a,{children:Object(L.jsxs)(c.c,{children:[Object(L.jsx)(c.a,{exact:!0,path:"/",component:N}),Object(L.jsx)(c.a,{exact:!0,component:A,path:"/profile"})]})})})},M=Object(l.a)({reducer:{user:k}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(L.jsx)(o.a.StrictMode,{children:Object(L.jsx)(d.a,{store:M,children:Object(L.jsx)(I,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.e3b96878.chunk.js.map