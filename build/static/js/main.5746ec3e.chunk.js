(this.webpackJsonpotp=this.webpackJsonpotp||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(4),s=n.n(i),a=(n(9),n(2)),r=n.p+"static/media/logo.6ce24c58.svg",l=(n(10),n(0));var u=function(e){var t=e.isWebAPI,n=void 0===t||t,o=Object(c.useState)(),i=Object(a.a)(o,2),s=i[0],r=i[1];function u(){var e=document.querySelector('input[autocomplete="one-time-code"]');if(e){var t=new AbortController,n=e.closest("form");n&&n.addEventListener("submit",(function(e){t.abort()})),navigator.credentials.get({otp:{transport:["sms"]},signal:t.signal}).then((function(e){r(e.code),alert("SMS Code:",e,e.code),n&&n.submit()})).catch((function(e){alert("cache err:",e),console.log(e)}))}}return Object(c.useEffect)((function(){n&&"OTPCredential"in window&&window.addEventListener("DOMContentLoaded",(function(e){u()}))}),[n]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:n?"isWebAPI":"NOT WebAPI"}),Object(l.jsx)("input",{type:"text",autoComplete:"one-time-code",inputMode:"numeric",value:s}),Object(l.jsx)("div",{onClick:function(){u()},children:"TEST credentials"})]})};var d=function(){var e=Object(c.useState)(!0),t=Object(a.a)(e,2),n=t[0],o=t[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{src:r,className:"App-logo",alt:"logo"}),Object(l.jsx)("span",{className:"App-link",onClick:function(){return o(!1)},children:"OTP-autocomplete"}),Object(l.jsx)("span",{className:"App-link",onClick:function(){return o(!0)},children:"OTP-Web API"})]}),Object(l.jsx)(u,{isWebAPI:n})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),b()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.5746ec3e.chunk.js.map