(this.webpackJsonpblynk=this.webpackJsonpblynk||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(7),l=a.n(o),r=(a(14),a(2)),i=a(5),m=a(1),u=(a(15),function(e){var t=e.addTodo,a=Object(n.useState)(""),o=Object(m.a)(a,2),l=o[0],i=o[1],u={id:"",active:!1,value:"",comments:[]};return c.a.createElement("form",{className:"form-add-item",onSubmit:function(e){e.preventDefault(),t(Object(r.a)(Object(r.a)({},u),{},{value:l,id:Math.floor(1e9*Math.random())})),i("")}},c.a.createElement("input",{required:!0,value:l,onChange:function(e){i(e.target.value)},className:"form-input new-todo",placeholder:"Type name here..."}),c.a.createElement("button",{className:"btn btn-primary"},"Add New"))}),s=a(8),d=a.n(s),v=(a(16),function(e){var t=e.id,a=e.value,n=e.comments,o=e.activeId,l=e.deleteItem,r=e.handleActiveItem;return c.a.createElement("div",{className:d()("todo-item",{active:o===t})},c.a.createElement("div",{className:"todo-input-value",onClick:function(){return r(t)}},a),c.a.createElement("div",{className:"todo-item-info"},c.a.createElement("span",{className:"count-comments"},n.length),c.a.createElement("span",{className:"btn btn-danger",onClick:function(){return l(t)}},"Delete")))}),f=function(e){var t=e.todos,a=e.deleteItem,n=e.activeId,o=e.handleActiveItem;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement(v,Object.assign({activeId:n,handleActiveItem:o,deleteItem:a,key:e.id},e))})))},b=(a(17),function(e){var t=e.activeTodo,a=e.newComment,o=0,l=[];t&&(o=t.id,l=t.comments);var r=Object(n.useState)(""),i=Object(m.a)(r,2),u=i[0],s=i[1],d=Object(n.useState)("#000"),v=Object(m.a)(d,2),f=v[0],b=v[1],p=Object(n.useCallback)((function(e){"Enter"===e.code&&e.ctrlKey&&(a(f,u),s(""),b("#000"))}),[f,u,a]);Object(n.useEffect)((function(){return document.addEventListener("keypress",p),function(){document.removeEventListener("keypress",p)}}),[p]);return c.a.createElement("div",{className:"block"},c.a.createElement("h4",{className:"block-title"},"Comments #",o," "),l.map((function(e){var t=e.color,a=e.valueComment;return c.a.createElement("div",{key:t+a,className:"comments-item"},c.a.createElement("input",{disabled:!0,className:"color",type:"color",value:t}),c.a.createElement("span",{className:"comment-value"},a))})),c.a.createElement("form",{className:"form-add-comment",onSubmit:function(e){e.preventDefault(),a(f,u),s(""),b("#000")}},c.a.createElement("input",{className:"color",value:f,onChange:function(e){b(e.target.value)},type:"color"}),c.a.createElement("input",{className:"color-text",required:!0,value:u,onChange:function(e){s(e.target.value)},type:"text"}),c.a.createElement("button",{className:"btn btn-primary"},"Add new")))}),p=(a(18),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(null),s=Object(m.a)(l,2),d=s[0],v=s[1];Object(n.useEffect)((function(){var e,t;localStorage.getItem("todo-list")&&(e=JSON.parse(localStorage.getItem("todo-list")||"")),localStorage.getItem("active-todo")&&(t=JSON.parse(localStorage.getItem("active-todo")||"")),e&&(o(e),v(t))}),[]),Object(n.useEffect)((function(){localStorage.setItem("todo-list",JSON.stringify(a)),localStorage.setItem("active-todo",JSON.stringify(d)),a.length&&!a.find((function(e){return e.id===(null===d||void 0===d?void 0:d.id)}))&&v(a[a.length-1])}),[a,d]);return c.a.createElement("div",{className:"container-app"},c.a.createElement("div",{className:"block todo-app"},c.a.createElement("h4",{className:"block-title"},"Items"),c.a.createElement(u,{addTodo:function(e){o([].concat(Object(i.a)(a),[e]))}}),c.a.createElement(f,{activeId:null===d||void 0===d?void 0:d.id,handleActiveItem:function(e){var t=a.find((function(t){return t.id===e}))||a[a.length-1];v(t)},deleteItem:function(e){o(a.filter((function(t){return t.id!==e})))},todos:a})),c.a.createElement(b,{newComment:function(e,t){var n=a.map((function(a){if(a.id===(null===d||void 0===d?void 0:d.id)){var n=Object(r.a)(Object(r.a)({},a),{},{comments:[].concat(Object(i.a)(a.comments),[{color:e,valueComment:t}])});return v(n),n}return a}));o(n)},activeTodo:d}))});l.a.render(c.a.createElement(p,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.f5260542.chunk.js.map