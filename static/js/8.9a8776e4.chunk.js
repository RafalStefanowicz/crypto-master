(window["webpackJsonpcrypto-master"]=window["webpackJsonpcrypto-master"]||[]).push([[8],{252:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),c=function(){return a.a.createElement("div",null,"Loading")}},278:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),l=n(10),m=function(e){var t=e.infoText;return a.a.createElement("h1",null,t)},s=n(30),u=n(14),i=n(252),o=n(261),v=n(74),f=function(e){var t=e.cryptoSymbols;return a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e},a.a.createElement(o.Link,{to:e,spy:!0,smooth:!0},a.a.createElement("img",{src:v.a[e],alt:v.a[e]})))})))},E=function(e){var t=e.investments,n=e.renderInvestmentsList,r=Object.keys(t);return a.a.createElement("div",null,a.a.createElement(f,{cryptoSymbols:r}),a.a.createElement(o.Link,{to:"investments",spy:!0,smooth:!0},"TOP"),n())},p=n(78),y=function(e){var t=e.investments,n=e.renderInvestmentItem,r=Object.keys(t);return a.a.createElement("ul",null,r.map((function(e){var r=Object.keys(t[e]);return a.a.createElement("li",{id:e,key:e},a.a.createElement("img",{src:v.a[e],alt:e}),a.a.createElement("span",null,p.a[e]),a.a.createElement("ul",null,r.map((function(r){var c=t[e][Number(r)];return a.a.createElement("li",{key:r},n({investment:c,cryptoSymbol:e,investmentTime:r}))}))))})))},b=n(104),d=function(e){var t=e.investmentTime,n=e.investment,r=e.cryptoSymbol;return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,t," "),a.a.createElement("span",null,"".concat(n.cryptoAmount," ").concat(r)," "),a.a.createElement("span",null,"for ".concat(n.buyPrice," usd")))},T=function(e){e.investmentTime;var t=e.investment;e.cryptoSymbol;return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,t.buyTime),a.a.createElement("p",null,t.buyPrice),a.a.createElement("p",null,t.sellTime),a.a.createElement("p",null,t.sellPrice),a.a.createElement("p",null,t.sellCryptoAmount),a.a.createElement("p",null,t.roi))},O=function(e){var t=e.investments,n=e.userNameParams,c=Object(r.useState)(!0),l=Object(s.a)(c,2),u=l[0],i=l[1];return a.a.createElement("div",{id:"investments"},n?a.a.createElement(m,{infoText:n}):null,a.a.createElement(b.a,{leftActive:u,changeActive:function(e){return function(){i(e)}},leftText:"Current",rightText:"Completed"}),u?a.a.createElement(E,{investments:t.current,renderInvestmentsList:function(){return a.a.createElement(y,{investments:t.current,renderInvestmentItem:function(e){return a.a.createElement(d,e)}})}}):"completed"in t?a.a.createElement(E,{investments:t.completed,renderInvestmentsList:function(){return a.a.createElement(y,{investments:t.completed,renderInvestmentItem:function(e){return a.a.createElement(T,e)}})}}):a.a.createElement(m,{infoText:"No completed investments so far"}))};t.default=Object(l.compose)(Object(c.b)((function(e){return{userNames:e.userNames}})),u.a)((function(e){var t=e.firebase,n=e.match,c=e.userNames,l=n.params.userName,u=null;l&&(u=c[l]);var o=function(e,t){var n=Object(r.useState)({}),a=Object(s.a)(n,2),c=a[0],l=a[1];return Object(r.useEffect)((function(){if(e)return t.investmentsDb(e).on("value",(function(e){l(e.val())})),function(){t.investmentsDb(e).off()}}),[e,t]),c}(u||t.getUserId(),t);return null===o?a.a.createElement(m,{infoText:l?"User ".concat(l," has no investments"):"You don't have any investments"}):Object.keys(c).length&&"current"in o?void 0===u?a.a.createElement(m,{infoText:"User ".concat(l," doesn't exist")}):a.a.createElement(O,{investments:o,userNameParams:l}):a.a.createElement(i.a,null)}))}}]);
//# sourceMappingURL=8.9a8776e4.chunk.js.map