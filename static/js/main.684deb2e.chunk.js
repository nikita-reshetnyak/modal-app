(this["webpackJsonpmy-popup"]=this["webpackJsonpmy-popup"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(4),o=c.n(i),a=(c(9),c(2)),l=(c(10),c(11),c(0)),r=function(e){return Object(l.jsx)("button",{className:"popup-form__btn",onClick:e.getInputValue,children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"})},b=(c(13),function(e){return Object(l.jsx)("div",{className:"form-block",children:Object(l.jsxs)("div",{className:"form-block-item",children:[Object(l.jsx)("input",{className:"form-block-input",id:e.id,type:"checkbox"}),Object(l.jsxs)("label",{htmlFor:e.htmlFor,children:[e.tax," \u0440\u0443\u0431\u043b\u0435\u0439 ",Object(l.jsxs)("span",{children:["\u0432 ",e.year,"-\u044b\u0439 \u0433\u043e\u0434"]})]})]})})}),j=(c(14),function(e){var t=Object(n.useState)([]),c=Object(a.a)(t,2),i=c[0],o=c[1],j=Object(n.useState)(!1),p=Object(a.a)(j,2),u=p[0],d=p[1],A=Object(n.useState)(!0),h=Object(a.a)(A,2),O=h[0],m=h[1],x=Object(n.useState)(""),f=Object(a.a)(x,2),v=f[0],g=f[1],k=function(){e.setDisabled(!1),d(!1)},N=s.a.createRef(),C=function(e,t){t.preventDefault(),function(e){var t=26e4,c=12*e*.13,n=parseInt(t/c),s=t-c*n,i=Array(n).fill(c);0!==s&&(i.push(s),o(i)),d(!0)}(e),g("")},S=i.map((function(e,t){return Object(l.jsx)(b,{tax:e,id:t,year:t+1,htmlFor:t},t)}));return Object(l.jsx)("div",{className:e.disabled?"popup active":"popup ",onClick:k,children:Object(l.jsxs)("div",{className:"popup-content",onClick:function(e){return e.stopPropagation()},children:[Object(l.jsx)("div",{className:"btn-close",onClick:k,children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD9SURBVHgBlZSxDcIwEEXvTMMKdCkDFSOEETICG7ABMAITMArZAEpKd0hQkB5hc45iyQb7zpyU6GJ/P99F38YH1FsAtbFg9RtsO4OrhoJ4Ql29AI+UNgi4wzvMbTDvYCsJNkJOlFbjUK/o1QWaakKCGwn/gFCgVlTBmkrSJbAUxA5dmBbdh1ukSIDRLnGbOYgZNegHOdiUEg4yNBeWnoP5lnOQHxADAw6SBHGwHMSFSoGmmR2Su+bm0j6JImlalCDeY5w1IhDnE5dLPkMJ4oWSabEE4oOD0elfnGnpUoIIsE6VVBKGm3Oar4PeKAvm4Kmm4C4KYfSLL/T0FnD/AR0gxfT3gMd4AAAAAElFTkSuQmCC",alt:""})}),Object(l.jsxs)("div",{className:"popup__block-text",children:[Object(l.jsx)("h3",{children:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442"}),Object(l.jsx)("p",{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0433\u0430\u0441\u0438\u0442\u044c \u0438\u043f\u043e\u0442\u0435\u043a\u0443 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u043e. \u0420\u0430\u0437\u043c\u0435\u0440 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u0432\u044b\u0447\u0435\u0442\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 13% \u043e\u0442 \u0441\u0432\u043e\u0435\u0433\u043e \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0433\u043e\u0434\u043e\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430."})]}),Object(l.jsx)("div",{className:"popup__form",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("h4",{children:"\u0412\u0430\u0448\u0430 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u043c\u0435\u0441\u044f\u0446"}),Object(l.jsx)("input",{className:"form-input",type:"text",value:v,onChange:function(e){g(e.target.value),console.log(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",ref:N}),Object(l.jsx)(r,{getInputValue:function(e){return C(N.current.value,e)}})]})}),Object(l.jsxs)("div",{className:!1===u?"form-down":"form-down active",children:[Object(l.jsx)("h4",{children:"\u0418\u0442\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043d\u0435\u0441\u0442\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u044b\u0445:"}),S]}),Object(l.jsxs)("div",{className:"popup__choise-block",children:[Object(l.jsx)("h4",{children:"\u0427\u0442\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u043c?"}),Object(l.jsxs)("div",{className:"popup__choise-block-btns",children:[Object(l.jsx)("div",{className:O?"popup__choise-block-btn active":"popup__choise-block-btn ",onClick:function(){return m(!O)},children:"\u041f\u043b\u0430\u0442\u0435\u0436"}),Object(l.jsx)("div",{className:"popup__choise-block-btn",children:"\u0421\u0440\u043e\u043a"})]})]}),Object(l.jsx)("div",{className:"popup-button",children:Object(l.jsx)("button",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})})}),p=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"btn-wrapper",children:Object(l.jsx)("button",{className:"btn-open-popup",onClick:function(){return s(!0)},children:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442"})}),Object(l.jsx)(j,{disabled:c,setDisabled:s})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),i(e),o(e)}))};o.a.render(Object(l.jsx)(p,{}),document.getElementById("root")),u()}],[[15,1,2]]]);
//# sourceMappingURL=main.684deb2e.chunk.js.map