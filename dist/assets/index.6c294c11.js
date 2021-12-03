import{r as a,R as u,j as m,a as g}from"./vendor.c10d32c1.js";const v=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=c(r);fetch(r.href,n)}};v();async function x(e){return await new Promise((t,c)=>{try{fetch(e).then(s=>s.json()).then(s=>{t(s)})}catch(s){console.log("Fetch error",s),c()}})}function h(e){const t=a.exports.useRef();return a.exports.useEffect(()=>{t.current=e},[e]),t.current}async function R(e){let t;return await new Promise(c=>{for(let s=e.length-1;s>=0;s--)for(let r=s-1;r>=0;r--)e[s].score>e[r].score&&(t=e[r],e[r]=e[s],e[s]=t);c(e)})}function w(e,t,c){requestAnimationFrame(()=>{e.style.transform="translateY("+t+"px)",e.style.transition="transform 0s",requestAnimationFrame(()=>{e.style.transform="",e.style.transition="transform "+c+"ms"})})}const S=({children:e})=>{const[t,c]=a.exports.useState({}),[s,r]=a.exports.useState({}),n=h(e);return a.exports.useEffect(()=>{const o={};u.Children.forEach(e,i=>{o[i.key]=i.ref.current.getBoundingClientRect()}),c(o)},[e]),a.exports.useEffect(()=>{const o={};u.Children.forEach(n,i=>{o[i.key]=i.ref.current.getBoundingClientRect()}),r(o)},[n]),a.exports.useEffect(()=>{Object.keys(s).length&&u.Children.forEach(e,i=>{const f=i.ref.current,p=s[i.key],y=t[i.key],d=p.top-y.top;d&&w(f,d,i.props.refreshTime)})},[t,s,e]),e},j=({score:e})=>{let t=h(e);t||(t=e);let[c,s]=a.exports.useState(e);return a.exports.useEffect(()=>{if(t){let r=e-t,n=0;const o=60,i=setInterval(()=>{n++;const f=n/o;let p=r*f;s(t+p),n===o&&clearInterval(i)},1)}},[e]),Math.floor(c)},l=m.exports.jsx,E=m.exports.jsxs,N=a.exports.forwardRef(({ranking:e,displayName:t,picture:c,score:s},r)=>E("div",{ref:r,className:"streamer",children:[l("div",{className:"ranking-no",children:e}),l("div",{className:"picture",children:l("img",{alt:t,src:c})}),l("div",{className:"display-name",children:t}),l("div",{className:"score",children:l(j,{score:s,children:s})})]})),b=({rankingData:e,refreshTime:t})=>{const c=o=>(o!==void 0&&(e[o].score+=Math.floor(Math.random()*1e3)),e),s=()=>{let o=Math.floor(Math.random()*e.length),i=c(o);R(i).then(f=>{n({rankingData:f})})},[r,n]=a.exports.useState({rankingData:c()});return a.exports.useEffect(()=>{setTimeout(()=>{s()},t)}),l("div",{children:l(S,{children:r.rankingData.map((o,i)=>l(N,{ref:a.exports.createRef(),refreshTime:t,ranking:i+1,picture:o.picture,displayName:o.displayName,score:o.score},o.userID))})})};const M="/ranking_sorting_swap_animation_demo_react_js/testData.json",P=300;function k(){const[e,t]=a.exports.useState([]);return a.exports.useEffect(()=>{x(M).then(c=>{t(c)})},[]),l("div",{children:e.length>0&&l(b,{refreshTime:P,rankingData:e})})}g.render(l(u.StrictMode,{children:l(k,{})}),document.getElementById("root"));