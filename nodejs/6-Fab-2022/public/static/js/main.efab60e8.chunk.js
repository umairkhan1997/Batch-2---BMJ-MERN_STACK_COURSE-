(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(8),i=n.n(s),r=(n(13),n(7)),l=n(2),o=n(4),j=n(0),a={name:"",age:"",skills:"",email:""},h=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(!1),h=Object(o.a)(i,2),u=h[0],d=h[1],b=Object(c.useState)(a),O=Object(o.a)(b,2),f=O[0],x=O[1],p=Object(c.useState)(!1),g=Object(o.a)(p,2),m=g[0],v=g[1];Object(c.useEffect)((function(){d(!0),fetch("http://localhost:3001/users").then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){return console.log("Error",e)})).finally((function(){d(!1)}))}),[]);var k=function(e,t){var n=e.target.value,c=Object(l.a)({},f);c[t]=n,x(c)};return u?Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Loading..."})}):(console.log(f),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Users Dashboard"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Name: ",Object(j.jsx)("input",{type:"text",value:f.name,onChange:function(e){return k(e,"name")}})]}),Object(j.jsxs)("p",{children:["Age: ",Object(j.jsx)("input",{type:"number",value:f.age,onChange:function(e){return k(e,"age")}})]}),Object(j.jsxs)("p",{children:["Email: ",Object(j.jsx)("input",{type:"email",value:f.email,onChange:function(e){return k(e,"email")}})]}),Object(j.jsxs)("p",{children:["Skills (Please add Comma seperated Skills): ",Object(j.jsx)("input",{type:"text",value:f.skills,onChange:function(e){return k(e,"skills")}})]}),m?Object(j.jsx)("button",{onClick:function(){var e=Object(l.a)({},f);console.log(f),e.skills=f.skills.split(","),fetch("http://localhost:3001/users/"+f.id,{method:"PATCH",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.data.user,c=n.findIndex((function(e){return e.id===t.id}));n.splice(c,1,t),s(Object(r.a)(n)),x(a),v(!1),console.log(e)})).catch((function(e){return console.log("Error",e)}))},children:"Update"}):Object(j.jsx)("button",{onClick:function(){var e=Object(l.a)({},f);e.skills=f.skills.split(","),fetch("http://localhost:3001/create-user",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e.data.user;s([].concat(Object(r.a)(n),[t])),x(a),console.log(e)})).catch((function(e){return console.log("Error",e)}))},children:"Save"})]}),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"ID"}),Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Email"}),Object(j.jsx)("th",{children:"Age"}),Object(j.jsx)("th",{children:"Skills"}),Object(j.jsx)("th",{children:"Actions"})]})}),Object(j.jsx)("tbody",{children:n.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.id}),Object(j.jsx)("td",{children:e.name}),Object(j.jsx)("td",{children:e.email}),Object(j.jsx)("td",{children:e.age}),Object(j.jsx)("td",{children:e.skills}),Object(j.jsxs)("td",{children:[Object(j.jsx)("button",{onClick:function(){return t=e.id,void fetch("http://localhost:3001/users/"+t,{method:"DELETE"}).then((function(e){return e.text()})).then((function(e){var c=n.filter((function(e){return e.id!==t}));s(c),console.log(e)})).catch((function(e){return console.log("Error",e)}));var t},children:"Delete"}),Object(j.jsx)("button",{onClick:function(){return function(e){v(!0),x(Object(l.a)(Object(l.a)({},e),{},{skills:e.skills.join()}))}(e)},children:"Edit"})]})]},t)}))})]})]}))};i.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.efab60e8.chunk.js.map