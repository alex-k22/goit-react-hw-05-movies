"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{7673:function(e,t,r){r.d(t,{v:function(){return u}});var n=r(1413),a=r(5861),s=r(7757),o=r.n(s),c=r(1243),u=function(){var e=(0,a.Z)(o().mark((function e(t,r){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"b3232dec66f7bb298b28583e91fb7fbe","https://api.themoviedb.org/3/",a={api_key:"b3232dec66f7bb298b28583e91fb7fbe",language:"en-US",page:"1"},e.next=5,c.Z.get("".concat("https://api.themoviedb.org/3/").concat(t),{params:(0,n.Z)((0,n.Z)({},a),{},{query:r})});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},5881:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var n=r(5861),a=r(9439),s=r(7757),o=r.n(s),c=r(1087),u=r(7689),i=r(2791),l=r(7673),p=r(9126),m=r(7425),f=r(8174),h=(r(5462),"Movies_SearchForm__EKSZc"),v="Movies_SearchFormButton__yo7B9",d="Movies_SearchForm-button-label__mUtId",_="Movies_SearchForm-input__27oAB",b="Movies_link__MzAfU",g="Movies_list__hqYjd",x="Movies_item__Ba4aJ",j="Movies_icon__5yLpa",k=r(184),S=function(){var e,t=(0,c.lr)(""),r=(0,a.Z)(t,2),s=r[0],S=r[1],y=(0,i.useState)([]),w=(0,a.Z)(y,2),M=w[0],Z=w[1],F=(0,i.useState)(""),N=(0,a.Z)(F,2),C=N[0],q=N[1],B=(0,u.TH)(),U=null!==(e=s.get("query"))&&void 0!==e?e:"";(0,i.useEffect)((function(){if(""!==U){q(U);var e="".concat(U),t=function(){var t=(0,n.Z)(o().mark((function t(){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.v)("search/movie",e);case 3:r=t.sent,n=r.data,Z(n.results),0===n.results.length&&f.Am.error("Sorry, but nothing found"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}}),[U]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault(),S({query:e.target.elements.input.value.trim()})},children:[(0,k.jsx)("input",{className:_,type:"text",autoComplete:"off",autoFocus:!0,name:"input",required:!0,placeholder:"Search movies",onChange:function(e){q(e.target.value)},value:C}),(0,k.jsxs)("button",{type:"submit",className:v,children:[(0,k.jsx)(p.dVI,{}),(0,k.jsx)("span",{className:d,children:"Search"})]})]}),(0,k.jsx)("ul",{className:g,children:M.map((function(e){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("li",{className:x,children:(0,k.jsxs)(c.rU,{to:"/movies/".concat(e.id),state:{from:B},className:b,children:[(0,k.jsx)(m.TRU,{className:j}),e.title||e.name]})},e.id),(0,k.jsx)(f.Ix,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"})]})}))})]})}}}]);
//# sourceMappingURL=881.1f83d805.chunk.js.map