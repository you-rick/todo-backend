(this["webpackJsonptodo-frontend"]=this["webpackJsonptodo-frontend"]||[]).push([[0],{138:function(e,t,n){e.exports={spinnerWrap:"Preloader_spinnerWrap__2iQF-",spinner:"Preloader_spinner__3OKRr","sk-rotateplane":"Preloader_sk-rotateplane__3oJWZ"}},198:function(e,t,n){e.exports={mainFooter:"Footer_mainFooter__1jrcT"}},239:function(e,t,n){e.exports=n(384)},285:function(e,t,n){},383:function(e,t,n){},384:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),i=n.n(o),c=n(16),l=n(18),u=n(17),s=n(20),m={msg:"",type:"info",error:!1,success:!1},d=function(e){return{type:"SET_NOTE",body:e}},p=function(){return{type:"HIDE_NOTE"}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTE":return Object(s.a)(Object(s.a)({},e),t.body);case"HIDE_NOTE":return Object(s.a)(Object(s.a)({},e),{},{msg:null,type:"info",error:!1,success:!1});default:return e}},E=n(193),h=function(){var e=localStorage.getItem("token");return e?{Authorization:"Bearer "+e}:{}},b=E.create({baseURL:"http://localhost:4200/"}),g=function(e){return b.post("auth/login",e)},T=function(e){return b.post("auth/register",e)},O=function(){return b.get("auth/profile",{headers:h()})},_={getTodos:function(){return b.get("todos",{headers:h()})},addTodo:function(e){return b.post("todos",e,{headers:h()})},updateTodo:function(e){return b.put("todos/".concat(e._id),e,{headers:h()})},deleteTodo:function(e){return b.delete("todos/".concat(e),{headers:h()})}},v=n(27),y=n(45),j={_id:null,name:null,username:null,address:null,birthday:null,phone:null,isAuth:!1},S=function(e){return{type:"SET_PROFILE_DATA",data:e}},w=function(e){return{type:"SET_AUTH_STATUS",isAuth:e}},N=function(){return function(e){O().then((function(t){var n=t.data;n.status&&(e(S(n.user)),e(w(!0)))}))}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PROFILE_DATA":return Object(s.a)(Object(s.a)({},e),t.data);case"SET_AUTH_STATUS":return Object(s.a)(Object(s.a)({},e),{},{isAuth:t.isAuth});default:return e}},I={initialized:!1,isDataFetching:!1},D=function(e){return{type:"TOGGLE_IS_FETCHING",isDataFetching:e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{initialized:!0});case"TOGGLE_IS_FETCHING":return Object(s.a)(Object(s.a)({},e),{},{isDataFetching:t.isDataFetching});default:return e}},C=n(138),W=n.n(C),k=function(){return r.a.createElement("div",{className:W.a.spinnerWrap},r.a.createElement("div",{className:W.a.spinner}))},x=n(415),F=n(416),P=n(417),U=n(418),B=n(389),z=n(419),L=n(38),q=n(194),H=n.n(q)()((function(){return{link:{marginLeft:"20px"}}})),G=Object(u.c)((function(e){return{isAuth:e.profile.isAuth}}),{logout:function(){return function(e){e(w(!1)),e(S(j)),localStorage.removeItem("token"),e(Object(v.d)("/login"))}}})((function(e){var t=H();return r.a.createElement(x.a,{position:"static"},r.a.createElement(F.a,null,r.a.createElement(P.a,{maxWidth:"lg"},r.a.createElement(U.a,{container:!0,justify:"space-between",alignItems:"center"},r.a.createElement(U.a,{item:!0},r.a.createElement(B.a,{variant:"h6"},"Todo App")),r.a.createElement(U.a,{item:!0},!e.isAuth&&r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{color:"inherit",component:L.a,className:t.link,to:"/login"},"Login"),r.a.createElement(z.a,{color:"inherit",component:L.a,className:t.link,to:"/register"},"Sign Up")),e.isAuth&&r.a.createElement(z.a,{color:"inherit",className:t.link,onClick:function(){e.logout()}},"Log Out"))))))})),M=n(198),X=n.n(M),Y=function(){return r.a.createElement("footer",{className:X.a.mainFooter},r.a.createElement(P.a,{maxWidth:"lg"},r.a.createElement(U.a,{container:!0,spacing:5,justify:"space-between",alignItems:"center"},r.a.createElement(U.a,{item:!0},r.a.createElement(B.a,{variant:"body2",component:"p"},"\xa9 Todo App 2020")),r.a.createElement(U.a,{item:!0},r.a.createElement(B.a,{variant:"body2",component:"p"},"All rights reserved")))))},Z=n(83),J=n(426),K=n(424),Q=function(e){return r.a.createElement(K.a,Object.assign({elevation:6,variant:"filled"},e))},V=Object(u.c)((function(e){return{}}),{hideNote:p})((function(e){var t=e.type,n=e.msg,o=e.hideNote,i=Object(a.useState)(!1),c=Object(Z.a)(i,2),l=c[0],u=c[1];Object(a.useEffect)((function(){u(!1),n&&u(!0)}),[n]);var s=function(e,t){"clickaway"!==t&&(o(),u(!1))};return r.a.createElement(r.a.Fragment,null,n&&t&&r.a.createElement(J.a,{open:l,autoHideDuration:3e3,onClose:s},r.a.createElement(Q,{onClose:s,severity:t},n)))})),$=n(427),ee=n(428),te=n(421),ne=n(189),ae=n(190),re=n(143),oe=(n(285),n(423)),ie=function(e){var t=e.label,n=e.input,a=e.meta,o=a.touched,i=a.invalid,c=a.error,l=Object(re.a)(e,["label","input","meta"]);return r.a.createElement(oe.a,Object.assign({label:t,placeholder:t,error:o&&i,helperText:o&&c},n,l))},ce=function(e){var t=e.input,n=e.label,a=e.meta,o=a.touched,i=a.error,c=a.invalid,l=e.children,u=Object(re.a)(e,["input","label","meta","children"]);return r.a.createElement(oe.a,Object.assign({select:!0,label:n,placeholder:n,error:o&&c,helperText:o&&i},t,u),l)},le={list:[],currentTodo:{_id:null,title:null,status:0,author:null}},ue=function(){return{type:"RESET_CURRENT_TODO"}},se=function(){return function(e){_.getTodos().then((function(t){t.status&&e({type:"SET_TODOS",todos:t.data})}))}},me=function(e,t,n){e(D(!0)),e({type:"HIDE_NOTE"}),n(t).then((function(t){var n=t.data;e(D(!1)),n.status?(e(d({msg:n.message,type:"success",error:!1,success:!0})),e(Object(y.a)("todos")),e(se()),e({type:"RESET_CURRENT_TODO"})):e(d({msg:n.message,type:"error",error:!0,success:!1}))})).catch((function(t){e(D(!1)),t.response&&e(d({msg:t.response.data.message,type:"error",error:!0,success:!1}))}))},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TODOS":return Object(s.a)(Object(s.a)({},e),{},{list:t.todos});case"SET_CURRENT_TODO":return Object(s.a)(Object(s.a)({},e),{},{currentTodo:t.data});case"RESET_CURRENT_TODO":return Object(s.a)(Object(s.a)({},e),{},{currentTodo:le.currentTodo});default:return e}},pe=function(e){var t={};return e.title||(t.title="Required field"),e.status||(t.status="Required field"),t},fe=n(84),Ee=n.n(fe),he=[{id:1,title:"created"},{id:2,title:"in progress"},{id:3,title:"completed"}],be=Object(ae.a)({form:"todos",validate:pe})((function(e){var t=e.handleSubmit,n=e.currentTodo,o=e.resetCurrentTodo,i=e.todos,c=Object(a.useState)(""),l=Object(Z.a)(c,2),u=l[0],s=l[1],m=Object(a.useState)(!1),d=Object(Z.a)(m,2),p=d[0],f=d[1];Object(a.useEffect)((function(){E()}),[i]),Object(a.useEffect)((function(){n._id&&(e.initialize({_id:n._id,title:n.title,status:n.status}),s(n.status),f(!0))}),[n]);var E=function(){o(),s(n.status),f(!1),s(""),e.initialize({})};return r.a.createElement($.a,{p:"1rem 0 0"},r.a.createElement("form",{onSubmit:t},r.a.createElement(U.a,{container:!0,justify:"space-between",alignItems:"flex-start"},r.a.createElement(ne.a,{name:"title",label:"To do",variant:"outlined",margin:"normal",className:Ee.a.fieldBox,component:ie}),r.a.createElement(ne.a,{name:"status",label:"select status",variant:"outlined",margin:"normal",inputProps:{value:u},className:Ee.a.fieldBox,onChange:function(e){s(e.target.value)},component:ce},he.map((function(e){return r.a.createElement(ee.a,{key:e.id,value:e.id},e.title)}))),r.a.createElement(te.a,{type:"submit",className:Ee.a.submit,variant:"contained",color:"primary"},p?"Update":"Add"),p&&r.a.createElement(te.a,{type:"button",className:Ee.a.submit,variant:"outlined",color:"primary",onClick:E},"Cancel"))))})),ge=Object(u.c)((function(e){return{authorId:e.profile._id,currentTodo:e.todos.currentTodo,todos:e.todos.list}}),{postTodo:function(e){return function(t){me(t,e,_.addTodo.bind(_))}},updateTodo:function(e){return function(t){me(t,e,_.updateTodo.bind(_))}},resetCurrentTodo:ue})((function(e){return r.a.createElement(be,{onSubmit:function(t){t.author=e.authorId,e.currentTodo._id?e.updateTodo(t):e.postTodo(t)},currentTodo:e.currentTodo,todos:e.todos,resetCurrentTodo:e.resetCurrentTodo})})),Te=n(420),Oe=n(202),_e=n.n(Oe),ve=n(201),ye=n.n(ve),je=n(85),Se=n.n(je),we=Object(u.c)((function(e){return{}}),{deleteTodo:function(e){return function(t){me(t,e,_.deleteTodo.bind(_))}},setCurrentTodo:function(e){return{type:"SET_CURRENT_TODO",data:e}}})((function(e){var t=he.filter((function(t){return t.id===e.status}));return r.a.createElement(U.a,{container:!0,justify:"space-between",alignItems:"center",className:Se.a.todoWrap,"data-status":"todoLabel_".concat(t[0].id)},r.a.createElement(B.a,{className:Se.a.task},e.title),r.a.createElement(B.a,null,t[0].title),r.a.createElement("div",null,r.a.createElement(Te.a,{"aria-label":"edit",color:"primary",className:Se.a.iconBtn,onClick:function(){e.setCurrentTodo(e),window.scrollTo(0,0)}},r.a.createElement(ye.a,{fontSize:"small"})),r.a.createElement(Te.a,{"aria-label":"delete",color:"secondary",className:Se.a.iconBtn,onClick:function(){e.deleteTodo(e._id)}},r.a.createElement(_e.a,{fontSize:"small"}))))})),Ne=Object(u.c)((function(e){return{isAuth:e.profile.isAuth,name:e.profile.name,todos:e.todos.list}}),{requestTodos:se})((function(e){return Object(a.useEffect)((function(){e.requestTodos()}),[]),e.isAuth?r.a.createElement($.a,{p:"4rem 0"},r.a.createElement(P.a,{maxWidth:"md"},r.a.createElement(B.a,{variant:"h5",component:"h1",gutterBottom:!0},"Hello ",r.a.createElement("strong",null,e.name),", here is your Todos list"),r.a.createElement(ge,null),r.a.createElement($.a,{p:"2rem 0 0"},e.todos.map((function(e){return r.a.createElement(we,Object.assign({key:e._id},e))}))))):r.a.createElement(c.a,{to:"/login"})})),Ae=function(e){var t={};return e.username||(t.username="Required field"),e.password||(t.password="Required field"),t},Ie=Object(ae.a)({form:"login",validate:Ae})((function(e){var t=e.handleSubmit;return r.a.createElement($.a,{p:"4rem 0"},r.a.createElement(P.a,{maxWidth:"xs"},r.a.createElement(B.a,{variant:"h4",component:"h1",align:"center",gutterBottom:!0},"Sign In"),r.a.createElement("form",{onSubmit:t},r.a.createElement(ne.a,{name:"username",label:"Username",variant:"outlined",margin:"normal",fullWidth:!0,component:ie}),r.a.createElement(ne.a,{name:"password",label:"Password",type:"password",variant:"outlined",margin:"normal",fullWidth:!0,component:ie}),r.a.createElement($.a,{m:"1rem 0 0"},r.a.createElement(te.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Sign In")),r.a.createElement($.a,{m:"2rem 0 0"},r.a.createElement(U.a,{container:!0,justify:"center"},r.a.createElement(U.a,{item:!0},r.a.createElement(z.a,{component:L.a,to:"/register",variant:"body2"},"Don't have an account? Sign Up")))))))})),De=Object(u.c)((function(e){return{isFetching:e.profile.isFetching,isAuth:e.profile.isAuth}}),{login:function(e,t){return function(n){n(D(!0)),n({type:"HIDE_NOTE"}),g(e,t).then((function(e){n(D(!1));var t=e.data;t.status&&(localStorage.setItem("token",t.token),setTimeout((function(){n(N()),n(Object(v.d)("/"))}),100))})).catch((function(e){console.log(e.response),n(D(!1)),n(d({msg:e.response.data.message,type:"error",error:!0,success:!1}))}))}}})((function(e){return e.isAuth?r.a.createElement(c.a,{to:"/"}):r.a.createElement(Ie,{onSubmit:function(t){e.login(t)}})})),Re=n(203),Ce=function(e){var t={};return e.username||(t.username="Required field"),e.name||(t.name="Required field"),e.password?e.password.length<5&&(t.password="Password should be at least 4 digits"):t.password="Required field",e.repeatPassword?e.password!==e.repeatPassword&&(t.repeatPassword="Passwords should match"):t.repeatPassword="Required field",e.phone&&e.phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)||(t.phone="Wrong phone format"),t},We=Object(Re.createTextMask)({pattern:"(999) 999-9999"}),ke=Object(ae.a)({form:"register",validate:Ce})((function(e){var t=e.handleSubmit;return r.a.createElement($.a,{p:"4rem 0"},r.a.createElement(P.a,{maxWidth:"xs"},r.a.createElement(B.a,{variant:"h4",component:"h1",align:"center",gutterBottom:!0},"Sign Up"),r.a.createElement("form",{onSubmit:t},r.a.createElement(ne.a,{name:"name",label:"Name",variant:"outlined",margin:"normal",fullWidth:!0,component:ie}),r.a.createElement(ne.a,{name:"username",label:"Username",variant:"outlined",margin:"normal",fullWidth:!0,component:ie}),r.a.createElement(ne.a,{name:"password",label:"Password",type:"password",variant:"outlined",margin:"normal",fullWidth:!0,component:ie}),r.a.createElement(ne.a,{name:"repeatPassword",label:"Repeat Password",type:"password",variant:"outlined",margin:"normal",fullWidth:!0,component:ie}),r.a.createElement(ne.a,{name:"birthday",label:"Date of Birth (MM/DD/YYYY)",variant:"outlined",margin:"normal",fullWidth:!0,component:ie}),r.a.createElement(ne.a,Object.assign({name:"phone",label:"Phone number",variant:"outlined",margin:"normal",type:"tel"},We,{fullWidth:!0,component:ie})),r.a.createElement(ne.a,{name:"address",label:"Address",variant:"outlined",margin:"normal",fullWidth:!0,component:ie}),r.a.createElement($.a,{m:"1rem 0 0"},r.a.createElement(te.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary"},"Register")),r.a.createElement($.a,{m:"2rem 0 0"},r.a.createElement(U.a,{container:!0,justify:"center"},r.a.createElement(U.a,{item:!0},r.a.createElement(z.a,{component:L.a,to:"/login",variant:"body2"},"Already have account? Sign In")))))))})),xe=Object(u.c)((function(e){return{isFetching:e.profile.isFetching,isAuth:e.profile.isAuth}}),{register:function(e){return function(t){t(D(!0)),t({type:"HIDE_NOTE"}),T(e).then((function(e){var n=e.data;t(D(!1)),n.status?(t(d({msg:n.message,type:"success",error:!1,success:!0})),t(Object(y.a)("register")),t(Object(v.d)("/login"))):t(d({msg:n.message,type:"error",error:!0,success:!1}))})).catch((function(e){t(D(!1)),t(d({msg:e.response.data.message,type:"error",error:!0,success:!1}))}))}}})((function(e){return e.isAuth?r.a.createElement(c.a,{to:"/"}):r.a.createElement(ke,{onSubmit:function(t){e.register(t)}})})),Fe=function(){return r.a.createElement(P.a,{maxWidth:"md"},r.a.createElement($.a,{p:"4rem 0 0"},r.a.createElement(U.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(B.a,{variant:"h4",component:"h1",gutterBottom:!0},"Page not found :("),r.a.createElement(B.a,{variant:"body1",component:"p",align:"center"},"Maybe the page you are looking for has been removed, or you typed in the wrong URL"))))},Pe=Object(l.d)(c.h,Object(u.c)((function(e){return{notification:e.notification,initialized:e.app.initialized,isDataFetching:e.app.isDataFetching}}),{hideNote:p,initializeApp:function(){return function(e){var t=[];localStorage.getItem("token")&&t.push(e(N())),e(D(!0)),Promise.all(t).then((function(){setTimeout((function(){e(D(!1)),e({type:"INITIALIZED_SUCCESS"})}),500)}))}}}))((function(e){return Object(a.useEffect)((function(){e.initializeApp()}),[]),e.initialized?r.a.createElement("div",{className:"appWrapper"},r.a.createElement(G,null),r.a.createElement("div",{className:"mainContainer"},r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/",render:function(){return r.a.createElement(Ne,null)}}),r.a.createElement(c.b,{path:"/login",render:function(){return r.a.createElement(De,null)}}),r.a.createElement(c.b,{path:"/register",render:function(){return r.a.createElement(xe,null)}}),r.a.createElement(c.b,{path:"/404",render:function(){return r.a.createElement(Fe,null)}}),r.a.createElement(c.a,{to:"/404"}))),r.a.createElement(Y,null),r.a.createElement(V,{type:e.notification.type,msg:e.notification.msg,hideNote:e.hideNote})):r.a.createElement(k,null)})),Ue=(n(383),n(422)),Be=n(59),ze=n(188),Le=n(204),qe=n(30),He=n(191),Ge=function(e){return Object(l.c)({router:Object(Be.b)(e),app:R,todos:de,notification:f,profile:A,form:He.a})},Me=Object(qe.a)(),Xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,Ye=Object(l.e)(Ge(Me),Xe(Object(l.a)(Object(ze.a)(Me),Le.a)));window.__store__=Ye;var Ze=Ye,Je=function(){var e=Object(c.g)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null};i.a.render(r.a.createElement(u.a,{store:Ze},r.a.createElement(Be.a,{history:Me},r.a.createElement(Ue.a,null),r.a.createElement(Pe,null),r.a.createElement(Je,null))),document.getElementById("root"))},84:function(e,t,n){e.exports={fieldBox:"TodosForm_fieldBox__1kwXu",submit:"TodosForm_submit__1Az8C"}},85:function(e,t,n){e.exports={iconBtn:"Todo_iconBtn__13GWB",todoWrap:"Todo_todoWrap___aSqP",task:"Todo_task__2rXzZ"}}},[[239,1,2]]]);
//# sourceMappingURL=main.fb00ca32.chunk.js.map