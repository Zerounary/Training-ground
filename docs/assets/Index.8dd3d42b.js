import{d as M,r as c,o as V,c as A,a as v,b as x,e as l,t as m,u as n,w as F,v as S,i as K,F as B,f as D,g as U,n as j,_ as q,h as L}from"./index.cacd73a2.js";let N="q-q-iu,w-w-ei,e-e-e,r-r-uan,t-t-ue,y-y-un,u-sh-u,i-ch-i,o-o-uo:o,p-p-ie,a-a-a,s-s-ong:iong,d-d-ai,f-f-en,g-g-eng,h-h-ang,j-j-an,k-k-uai:ing,l-l-uang:iang,z-z-ou,x-x-ua:ia,c-c-ao,v-zh-\xFCi:\xFC,b-b-in,n-n-iao,m-m-ian",d=N.split(",").map(R),O=[d.slice(0,10),d.slice(10,19),d.slice(19,26)];d.map(s=>s.vs);$(d.map(s=>s.ve));d.map(s=>s.ve);function y(s){let e=[];for(let t=0;t<s;t++)e=[...e,...d];for(let t=e.length-1;t>0;t--){const u=Math.floor(Math.random()*(t+1));[e[t],e[u]]=[e[u],e[t]]}return e}function R(s){let[e,t,u]=s.split("-");return{key:e,vs:t,ve:u.split(":")}}function $(s){return s.reduce((e,t)=>e.concat(t),[])}const H={class:"space-y-30px mt-100px"},I=l("span",{class:"ml-50px ml-100px"},null,-1),T=l("h1",{class:"text-5xl w-300px mx-auto"},"\u5C0F\u9E64\u97F3\u5F62\u6309\u952E",-1),X={class:"w-300px h-100px text-center text-6xl m-auto"},G={class:"flex"},J={class:"mx-auto w-1170px"},P=["src"],Q={class:"text-3xl"},W={class:"text-xl text-red-500 mt-20px"},Y={class:"text-right text-xl text-blue-500"},Z=l("div",{class:"text-xl"},"\u5355\u5143\u8BAD\u7EC3",-1),ee=l("option",{value:"vs"},"\u58F0\u6BCD",-1),te=l("option",{value:"ve"},"\u97F5\u6BCD",-1),le=[ee,te],se=M({setup(s){let e=c("vs"),t=c(!0),u=c(y(3)),_=c(0),i=c(),f=c(""),h=c(),g=()=>{f.value="",_.value++,_.value==u.value.length&&(_.value=0,u.value=y(3)),i.value=u.value[_.value]},k=r=>{var a;r.key==((a=i.value)==null?void 0:a.key)&&g()},z=()=>{_.value=0,u.value=y(3),i.value=void 0,h.value.focus(),w()};V(()=>{h.value.focus()});let C=()=>{z()},E=A(()=>{if(i.value){let r=i.value[e.value];return Array.isArray(r)&&(r=r.join(" ")),r}});function w(){t.value&&g()}return w(),(r,a)=>(v(),x("div",H,[I,T,l("div",null,[l("div",X,m(n(E)),1),l("div",G,[F(l("input",{ref_key:"input",ref:h,class:"w-300px h-50px m-auto border text-center","onUpdate:modelValue":a[0]||(a[0]=o=>K(f)?f.value=o:f=o),onKeyup:a[1]||(a[1]=(...o)=>n(k)&&n(k)(...o)),placeholder:""},null,544),[[S,n(f)]])])]),l("div",J,[(v(!0),x(B,null,D(n(O),(o,b)=>(v(),x("div",{key:b,class:j(["flex relative",`ml-${b*50}px`])},[(v(!0),x(B,null,D(o,p=>(v(),x("div",{key:p.key,class:j(["border h-120px w-120px relative p-10px",`${n(i)==null?"":n(i).key==p.key?"bg-yellow-300":" filter grayscale"}`])},[l("img",{class:"absolute top-0 right-0 z-1",src:`xh/${p.key}.png`},null,8,P),l("div",Q,m(p.key.toUpperCase()),1),l("div",W,m(p.vs),1),l("div",Y,m(p.ve.join(" ")),1)],2))),128))],2))),128)),l("div",null,[Z,F(l("select",{"onUpdate:modelValue":a[2]||(a[2]=o=>K(e)?e.value=o:e=o),onChange:a[3]||(a[3]=(...o)=>n(C)&&n(C)(...o))},le,544),[[U,n(e)]])])])]))}}),ae={};function oe(s,e){const t=se;return v(),x("div",null,[L(t)])}var ue=q(ae,[["render",oe]]);export{ue as default};