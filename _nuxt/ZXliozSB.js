const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./D91FO2I9.js","./ByZJXml-.js","./Bn6OCmIH.js","./DNtAUjog.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{s as f,P as p,_ as v,a as g,Q as d,R as l,q as h,E as _,H as r}from"./ByZJXml-.js";import{u as y}from"./BaYwz_Xy.js";import{q as C,w as m,e as w,s as P,j as $,u as N}from"./Bn6OCmIH.js";import{u as j}from"./DNtAUjog.js";import{_ as E}from"./UJ8oMQYQ.js";const T=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await v(()=>import("./D91FO2I9.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await y(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=_(),{navigation:a}=e,s=o=>r(E,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),O=D;export{O as default};