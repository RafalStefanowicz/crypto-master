(window["webpackJsonpcrypto-master"]=window["webpackJsonpcrypto-master"]||[]).push([[5],{252:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r=t(0),a=t.n(r),o=function(){return a.a.createElement("div",null,"Loading")}},253:function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"a",(function(){return l}));var r=t(7),a=t(6);function o(){var n=Object(r.a)(["\n  display: block;\n  margin: 0 auto;\n  padding: 4px 20px;\n  border-color: black;\n  font-size: 18px;\n\n  :hover {\n    background-color: ",";\n    color: white;\n  }\n"]);return o=function(){return n},n}function c(){var n=Object(r.a)(["\n      padding: 6px 20px;\n      font-size: 20px;\n      letter-spacing: 1px;\n    "]);return c=function(){return n},n}function i(){var n=Object(r.a)(["\n  display: block;\n  margin: 0 auto;\n  padding: 8px 30px;\n  border-radius: 50px;\n  border-color: black;\n  font-size: 24px;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n\n  :hover {\n    background-color: ",";\n    color: white;\n  }\n\n  ","\n"]);return i=function(){return n},n}var u=a.d.button(i(),(function(n){return n.theme.color.green}),(function(n){return n.small&&Object(a.c)(c())})),l=a.d.button(o(),(function(n){return n.theme.color.green}))},274:function(n,e,t){n.exports=t.p+"static/media/facebook.c6c0c9ce.png"},275:function(n,e,t){n.exports=t.p+"static/media/google.afb13f7b.png"},276:function(n,e,t){"use strict";t.r(e);var r=t(30),a=t(0),o=t.n(a),c=t(13),i=t.n(c),u=t(22),l=t(20),s=t(4),p=t(10),d=t(37),f=t(33),m=t(16),b=t(14),g=t(11),v=t(7),x=t(6);function O(){var n=Object(v.a)(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: -20px;\n  display: ",";\n"]);return O=function(){return n},n}function w(){var n=Object(v.a)(["\n  position: relative;\n"]);return w=function(){return n},n}function h(){var n=Object(v.a)(["\n  display: block;\n  margin: 4px auto;\n  padding: 4px 22px;\n  font-size: 18px;\n  border: 1px solid black;\n\n  :hover {\n    background-color: ",";\n    color: white;\n  }\n\n  :disabled {\n    border-color: gray;\n    color: gray;\n    cursor: default;\n\n    :hover {\n      background-color: white;\n      color: gray;\n    }\n  }\n"]);return h=function(){return n},n}function j(){var n=Object(v.a)(["\n  font-size: 16px;\n  color: ",";\n"]);return j=function(){return n},n}function E(){var n=Object(v.a)(["\n  margin: 1px;\n  padding: 4px;\n  border: 1px solid black;\n  font-size: 16px;\n"]);return E=function(){return n},n}function y(){var n=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  max-width: 250px;\n  margin: 0 auto;\n"]);return y=function(){return n},n}var P=Object(x.d)(d.c)(y()),k=Object(x.d)(d.b)(E()),z=Object(x.d)(d.a)(j(),(function(n){return n.theme.color.red})),C=x.d.button(h(),(function(n){return n.theme.color.green})),S=x.d.span(w()),D=x.d.span(O(),(function(n){return n.submitting?"inline":"none"})),L=t(41),N=t(260),F=function(n){var e=n.disabled,t=n.text,r=n.submitting;return o.a.createElement(C,{type:"submit",disabled:e},o.a.createElement(S,null,o.a.createElement(D,{submitting:r},o.a.createElement(L.a,{icon:N.b,className:"fa-spin"})),t))};function I(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function T(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?I(t,!0).forEach((function(e){Object(l.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):I(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var B={currentPassword:"",newPassword:""},J=Object(p.compose)(b.a,Object(s.b)(null,{showModal:g.b}))((function(n){var e=n.firebase,t=n.showModal,r=n.toggleIsFormShown;return o.a.createElement(d.d,{initialValues:T({},B),validate:f.a,onSubmit:function(){var n=Object(u.a)(i.a.mark((function n(a,o){var c,u,l;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=a.currentPassword,u=a.newPassword,l=o.setSubmitting,n.prev=2,n.next=5,e.doChangePassword(c,u);case 5:l(!1),r(),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(2),l(!1),t({modalType:m.a.ALERT,modalProps:{alertText:"Please provide actual password"}});case 13:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e,t){return n.apply(this,arguments)}}()},(function(n){var e=n.isSubmitting,t=n.isValid;return o.a.createElement(P,null,o.a.createElement(k,{type:"password",name:"currentPassword",placeholder:"current password"}),o.a.createElement(z,{name:"currentPassword",component:"div"}),o.a.createElement(k,{type:"password",name:"newPassword",placeholder:"new password"}),o.a.createElement(z,{name:"newPassword",component:"div"}),o.a.createElement(F,{disabled:!t||e,submitting:e,text:"Change"}))}))})),M=t(252),V=t(253),A=Object(b.a)((function(n){var e=n.firebase;return o.a.createElement(V.b,{onClick:function(){e.auth.signOut()},small:!0},"Log out")})),R=t(76);function U(){var n=Object(v.a)(["\n  height: 160px;\n"]);return U=function(){return n},n}function Y(){var n=Object(v.a)(["\n  margin: 6px;\n  text-align: center;\n  font-size: 26px;\n\n  @media "," {\n    font-size: 20px;\n  }\n"]);return Y=function(){return n},n}function q(){var n=Object(v.a)(["\n  margin: 30px 0 6px;\n  text-align: center;\n  font-size: 40px;\n  color: ",";\n\n  @media "," {\n    font-size: 24px;\n  }\n"]);return q=function(){return n},n}var G=x.d.h1(q(),(function(n){return n.theme.color.navyBlue}),R.a.mobileL),H=x.d.p(Y(),R.a.mobileL),K=x.d.div(U()),Q=function(n){var e=n.userName,t=n.email,r=n.renderProviderOrChangePass;return o.a.createElement(o.a.Fragment,null,o.a.createElement(G,null,e),o.a.createElement(H,null,t),o.a.createElement(K,null,r()),o.a.createElement(A,null))};function W(){var n=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 15px;\n  align-items: center;\n"]);return W=function(){return n},n}function X(){var n=Object(v.a)(["\n  margin: 4px;\n  max-height: 50px;\n"]);return X=function(){return n},n}function Z(){var n=Object(v.a)(["\n  font-size: 22px;\n"]);return Z=function(){return n},n}var $=x.d.p(Z()),_=x.d.img(X()),nn=x.d.div(W()),en=t(274),tn=t.n(en),rn=t(275),an=t.n(rn),on=function(n){var e="google.com"===n.provider;return o.a.createElement(nn,null,o.a.createElement($,null,"logged by"),o.a.createElement(_,{src:e?an.a:tn.a,alt:e?"google.com":"facebook.com"}))},cn=function(n){var e=n.handleClick;return o.a.createElement(V.a,{onClick:function(){e()}},"Change password")};e.default=Object(b.a)((function(n){var e=function(n){var e=Object(a.useState)({}),t=Object(r.a)(e,2),o=t[0],c=t[1],i=n.getUserId();return Object(a.useEffect)((function(){return i&&n.personalDb(i).once("value",(function(n){c(n.val())})),function(){}}),[n,i]),o}(n.firebase),t=Object(a.useState)(!1),c=Object(r.a)(t,2),i=c[0],u=c[1];if(!("userName"in e))return o.a.createElement(M.a,null);var l=e.userName,s=e.email,p=e.createdBy,d=function(){u(!i)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(Q,{userName:l,email:s,renderProviderOrChangePass:function(){return"firebase.com"!==p?o.a.createElement(on,{provider:p}):i?o.a.createElement(J,{toggleIsFormShown:d}):o.a.createElement(cn,{handleClick:d})}}))}))}}]);
//# sourceMappingURL=5.1940be33.chunk.js.map