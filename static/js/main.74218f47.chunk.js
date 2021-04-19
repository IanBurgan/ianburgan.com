(this["webpackJsonpslide-puzzle"]=this["webpackJsonpslide-puzzle"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(5),c=n.n(i),s=(n(10),n(3)),o=n(2),l=(n(11),n(0));var u=function(e){var t,n=e.startTime,a=e.stopTime,i=Object(r.useState)(0),c=Object(o.a)(i,2),s=c[0],u=c[1];return Object(r.useEffect)((function(){var e=void 0;return n?a?u(a.getTime()-n.getTime()):e=window.setInterval((function(){var e=(new Date).getTime();u(e-n.getTime())}),50):u(0),function(){return clearInterval(e)}}),[n,a]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:Object(l.jsx)("strong",{children:"Time"})}),Object(l.jsx)("div",{className:"TimerElapsed",children:(t=s,(Math.round(t/100)/10).toFixed(1))})]})};function d(e,t,n){var r=24,a=Math.PI/2,i=Math.PI;n.fillStyle="#4438CF",n.beginPath(),n.arc(r,r,r,i,-1*a),n.arc(e-r,r,r,-1*a,0),n.arc(e-r,e-r,r,0,a),n.arc(r,e-r,r,a,i),n.fill(),n.font="64px -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen",n.textBaseline="middle",n.textAlign="center",n.fillStyle="white",n.fillText(t,e/2,e/2)}function f(){for(var e=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null],t=e.length-2;t>0;t-=1){var n=Math.floor(Math.random()*t),r=e[t];e[t]=e[n],e[n]=r}for(var a={0:{},1:{},2:{},3:{}},i=0;i<4;i+=1)for(var c=0;c<4;c+=1)a[i][c]=e.shift();return a}var j=function(){var e=Object(r.useRef)(null),t=Math.floor(.5*window.innerHeight),n=Object(r.useState)(f()),a=Object(o.a)(n,2),i=a[0],c=a[1],j=Object(r.useState)(),h=Object(o.a)(j,2),v=h[0],b=h[1],O=Object(r.useState)(),m=Object(o.a)(O,2),w=m[0],g=m[1],x=Object(r.useState)(0),p=Object(o.a)(x,2),y=p[0],M=p[1],k=function(e){for(var t=0;t<4;t+=1)for(var n=0;n<4;n+=1)if(null===e[t][n])return[t,n];return[3,3]};return Object(r.useEffect)((function(){var n=function(e,t){v||b(new Date);var n=0;c((function(r){var a=k(r),i=Object(o.a)(a,2),c=i[0],l=i[1],u={0:Object(s.a)({},r[0]),1:Object(s.a)({},r[1]),2:Object(s.a)({},r[2]),3:Object(s.a)({},r[3])};if(e!==c)for(var d=Math.sign(e-c);c!==e;)u[c][l]=u[c+d][l],u[c+d][l]=null,c+=d,n+=1;else for(var f=Math.sign(t-l);l!==t;)u[c][l]=u[c][l+f],u[c][l+f]=null,l+=f,n+=1;for(var j=!0,h=0;h<4;h+=1)for(var v=0;v<4;v+=1){var b=4*h+(v+1);16===b&&(b=null),u[h][v]!==b&&(j=!1)}return j&&g(new Date),u})),M((function(e){return e+n}))},r=e.current;if(r){r.width=2*r.clientWidth,r.height=2*r.clientHeight;var a=r.getContext("2d"),l=function(e){if(!w){var t=Math.floor(4*e.offsetY/r.clientHeight),a=Math.floor(4*e.offsetX/r.clientWidth),c=k(i),s=Object(o.a)(c,2);t===s[0]!==(a===s[1])&&n(t,a)}},u=function(e){if(!w){var t=k(i),r=Object(o.a)(t,2),a=r[0],c=r[1];switch(e.key){case"ArrowUp":3!==a&&n(a+1,c);break;case"ArrowDown":0!==a&&n(a-1,c);break;case"ArrowLeft":3!==c&&n(a,c+1);break;case"ArrowRight":0!==c&&n(a,c-1)}}};return a&&(r.addEventListener("mousedown",l),document.addEventListener("keydown",u),a.fillStyle="#D9D9D9",a.fillRect(0,0,r.width,r.height),function(e,t,n){for(var r=.03*e,a=(e-5*r)/4,i=0;i<4;i+=1){n.translate(r,(i+1)*r+i*a);for(var c=0;c<4;c+=1)null!==t[i][c]&&d(a,t[i][c],n),n.translate(a+r,0);n.setTransform(1,0,0,1,0,0)}}(2*t,i,a)),function(){r&&(r.removeEventListener("mousedown",l),document.removeEventListener("keydown",u))}}}),[i,v,w,t]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"TimerContainer",children:Object(l.jsx)(u,{startTime:v,stopTime:w})}),Object(l.jsxs)("div",{className:"MovesContainer",children:[Object(l.jsx)("div",{children:Object(l.jsx)("strong",{children:"Moves"})}),Object(l.jsx)("div",{className:"MoveCount",children:y})]}),Object(l.jsx)("div",{className:"ButtonRow",style:{width:t},children:Object(l.jsx)("button",{onClick:function(){b(void 0),g(void 0),M(0),c(f())},children:w?"Play again":"Reset"})}),Object(l.jsx)("div",{className:"CanvasContainer",style:{height:t,width:t},children:Object(l.jsx)("canvas",{style:{height:t,width:t},ref:e})}),Object(l.jsx)("a",{href:"https://twitter.com/ianburgan",className:"ContactLink",children:"Developed by Ian Burgan"}),Object(l.jsx)("div",{className:"Instructions",children:"Click tiles or use arrow keys to move"})]})};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.74218f47.chunk.js.map