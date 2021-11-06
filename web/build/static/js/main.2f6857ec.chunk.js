(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{171:function(e,a,t){},172:function(e,a,t){},301:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(38),s=t.n(i),o=(t(171),t.p,t(172),"localhost"===window.location.hostname.split(":")[0]?"http://localhost:5001":""),l=t(43),c=t.n(l),d=t(21),u=(t(191),t(336)),h=t(334),j=t(337),m=t.p+"static/media/Website-Loading.ea0c5d2c.gif",b=t(1);var p=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{style:{backgroundColor:"#181415",width:"100%",height:"100vh"},children:Object(b.jsx)("img",{style:{width:"100%",position:"fixed",bottom:"0px"},src:m,alt:""})})})},O=t(92),f=t(340),g=t(335),x=t(338),v=t(50),w=t(8),y=t(5),C=function(e,a){switch(a.type){case"USER_LOGIN":return a.payload.name&&a.payload.email&&a.payload.address&&a.payload._id?Object(y.a)(Object(y.a)({},e),{},{user:a.payload}):(console.log("invalid data in USER_LOGIN reducer "),e);case"USER_LOGOUT":return Object(y.a)(Object(y.a)({},e),{},{user:null});case"TOGGLE_THEME":return Object(y.a)(Object(y.a)({},e),{},{darkTheme:!e.darkTheme});default:return e}},E=Object(r.createContext)("Initial Value"),S={darkTheme:!0,user:void 0};function L(e){var a=e.children,t=Object(r.useReducer)(C,S),n=Object(w.a)(t,2),i=n[0],s=n[1];return Object(b.jsx)(E.Provider,{value:{state:i,dispatch:s},children:a})}var T=v.a({email:v.b("Enter your email").email("Enter a valid email").required("Email is required"),password:v.b("Enter your password").min(8,"Password should be of minimum 8 characters length").max(10,"No more then 10").required("Password is required")});var k=function(){Object(d.f)();var e=Object(r.useContext)(E),a=(e.state,e.dispatch),t=Object(O.a)({validationSchema:T,initialValues:{email:"",password:""},onSubmit:function(e){console.log("values: ",e),c.a.post("".concat(o,"/api/v1/login"),{email:e.email,password:e.password},{withCredentials:!0}).then((function(e){e.data.email&&(a({type:"USER_LOGIN",payload:{name:e.data.name,email:e.data.email,address:e.data.address,_id:e.data._id}}),alert("login successfull"))})).catch((function(e){alert("login unsuccessfull")}))}});return Object(b.jsxs)("div",{style:{margin:"2rem"},children:[Object(b.jsx)("h1",{children:"Login page"}),Object(b.jsx)("form",{onSubmit:t.handleSubmit,children:Object(b.jsxs)(f.a,{spacing:2,children:[Object(b.jsx)(g.a,{fullWidth:!0,color:"primary",id:"outlined-basic",label:"Email",variant:"outlined",name:"email",value:t.values.email,onChange:t.handleChange,error:t.touched.email&&Boolean(t.errors.email),helperText:t.touched.email&&t.errors.email}),Object(b.jsx)(g.a,{fullWidth:!0,color:"primary",id:"filled-basic",label:"Password",variant:"outlined",type:"password",name:"password",value:t.values.password,onChange:t.handleChange,error:t.touched.password&&Boolean(t.errors.password),helperText:t.touched.password&&t.errors.password}),Object(b.jsx)(x.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",children:"Login"})]})})]})},_=v.a({name:v.b("Enter your name").required("Name is required"),email:v.b("Enter your email").email("Enter a valid email").required("Email is required"),password:v.b("Enter your password").min(8,"Password should be of minimum 8 characters length").max(10,"No more then 10").required("Password is required")});var U=function(){var e=Object(d.f)(),a=Object(O.a)({validationSchema:_,initialValues:{name:"",email:"",password:"",address:""},onSubmit:function(a){c.a.post("".concat(o,"/api/v1/signup"),{name:a.name,email:a.email,address:a.address,password:a.password}).then((function(a){alert(a),e.push("/")})).catch((function(e){alert(e.message)}))}});return Object(b.jsxs)("div",{style:{margin:"2rem"},children:[Object(b.jsx)("h1",{children:"Signup page"}),Object(b.jsx)("form",{onSubmit:a.handleSubmit,children:Object(b.jsxs)(f.a,{spacing:2,children:[Object(b.jsx)(g.a,{fullWidth:!0,color:"primary",id:"outlined-basic",label:"Full Name",variant:"outlined",name:"name",value:a.values.name,onChange:a.handleChange,error:a.touched.name&&Boolean(a.errors.name),helperText:a.touched.name&&a.errors.name}),Object(b.jsx)(g.a,{fullWidth:!0,color:"primary",id:"outlined-basic",label:"Address",variant:"outlined",name:"address",value:a.values.address,onChange:a.handleChange,error:a.touched.address&&Boolean(a.errors.address),helperText:a.touched.address&&a.errors.address}),Object(b.jsx)(g.a,{fullWidth:!0,color:"primary",id:"outlined-basic",label:"Email",variant:"outlined",name:"email",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email}),Object(b.jsx)(g.a,{fullWidth:!0,color:"primary",id:"filled-basic",label:"Password",variant:"outlined",type:"password",name:"password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password}),Object(b.jsx)(x.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",children:"Signup"})]})})]})};var P=function(){var e=Object(r.useContext)(E),a=(e.state,e.dispatch),t=Object(r.useState)({}),n=Object(w.a)(t,2),i=n[0],s=n[1];return Object(r.useEffect)((function(){c.a.get("".concat(o,"/api/v1/profile"),{withCredentials:!0}).then((function(e){console.log("res +++: ",e.data),s(e.data)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:" Profile Page "}),Object(b.jsx)("p",{children:JSON.stringify(i)}),Object(b.jsx)(x.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:function(){c.a.get("".concat(o,"/api/v1/profile"),{withCredentials:!0}).then((function(e){console.log("res +++: ",e.data),s(e.data)}))},children:"get profile"}),Object(b.jsx)(x.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:function(){c.a.post("".concat(o,"/api/v1/logout"),{},{withCredentials:!0}).then((function(e){console.log("res +++: ",e.data),a({type:"USER_LOGOUT"})}))},children:"Logout"})]})};var W=function(){var e=Object(d.f)(),a=Object(r.useContext)(E),t=a.state,n=a.dispatch;return Object(r.useEffect)((function(){return c.a.get("".concat(o,"/api/v1/profile"),{withCredentials:!0}).then((function(e){console.log("res: ",e.data),e.data.email?n({type:"USER_LOGIN",payload:{name:e.data.name,email:e.data.email,address:e.data.address,_id:e.data._id}}):n({type:"USER_LOGOUT"})})).catch((function(e){n({type:"USER_LOGOUT"})})),function(){}}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.a,{bg:"light",expand:"lg",children:Object(b.jsxs)(h.a,{children:[Object(b.jsx)(u.a.Brand,{href:"#home",children:"React Login project"}),Object(b.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsx)(u.a.Collapse,{id:"basic-navbar-nav",children:Object(b.jsxs)(j.a,{className:"me-auto",children:[Object(b.jsx)(j.a.Link,{onClick:function(){e.push("/")},children:"Dashboard"}),Object(b.jsx)(j.a.Link,{onClick:function(){e.push("/")},children:"Login"}),Object(b.jsx)(j.a.Link,{onClick:function(){e.push("/signup")},children:"Signup"})]})})]})}),void 0===t.user?Object(b.jsx)(d.c,{children:Object(b.jsx)(d.a,{exact:!0,path:"/",children:Object(b.jsx)(p,{})})}):null,null===t.user?Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{exact:!0,path:"/",component:k}),Object(b.jsx)(d.a,{path:"/signup",component:U})]}):null,t.user?Object(b.jsx)(d.c,{children:Object(b.jsx)(d.a,{exact:!0,path:"/",children:Object(b.jsx)(P,{})})}):null]})},q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,341)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,i=a.getLCP,s=a.getTTFB;t(e),r(e),n(e),i(e),s(e)}))},G=t(84);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(L,{children:Object(b.jsx)(G.a,{children:Object(b.jsx)(W,{})})})}),document.getElementById("root")),q()}},[[301,1,2]]]);
//# sourceMappingURL=main.2f6857ec.chunk.js.map