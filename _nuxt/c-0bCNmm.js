import{r as d,a0 as _,aj as g,af as k,d as y,u as b,b as l,c as m,F as x,ak as B,n as h,e as C,t as H,K as S,al as A,Y as q,f as M,l as T}from"./DNK6g3Bd.js";const $=()=>{const a=d(),s=d([]),c=d([]),u=e=>e.forEach(t=>{const r=t.target.id;t.isIntersecting?s.value.push(r):s.value=s.value.filter(n=>n!==r)}),i=e=>e.forEach(t=>{a.value.observe(t)});return _(s,(e,t)=>{e.length===0?c.value=t:c.value=e},{deep:!0}),g(()=>a.value=new IntersectionObserver(u)),k(()=>{var e;return(e=a.value)==null?void 0:e.disconnect()}),{visibleHeadings:s,activeHeadings:c,updateHeadings:i}},w={class:"docs-toc-links"},D=["href","onClick"],E=y({__name:"DocsTocLinks",props:{links:{type:Array,default:()=>[]}},emits:["move"],setup(a,{emit:s}){const c=s,u=b(),{activeHeadings:i,updateHeadings:e}=$();setTimeout(()=>{e([...document.querySelectorAll(".document-driven-page h1, .docus-content h1"),...document.querySelectorAll(".document-driven-page h2, .docus-content h2"),...document.querySelectorAll(".document-driven-page h3, .docus-content h3"),...document.querySelectorAll(".document-driven-page h4, .docus-content h4")])},300);function t(n){u.push(`#${n}`),c("move",n)}function r(n){c("move",n)}return(n,v)=>{const f=I;return l(),m("ul",w,[(l(!0),m(x,null,B(a.links,o=>(l(),m("li",{key:o.text,class:h([`depth-${o.depth}`])},[C("a",{href:`#${o.id}`,class:h([S(i).includes(o.id)&&"active"]),onClick:A(p=>t(o.id),["prevent"])},H(o.text),11,D),o.children?(l(),q(f,{key:0,links:o.children,onMove:v[0]||(v[0]=p=>r(p))},null,8,["links"])):M("",!0)],2))),128))])}}}),I=T(E,[["__scopeId","data-v-68e104d1"]]);export{I as default};