export const load=()=>{try{return JSON.parse(localStorage.getItem('aq')||'{}')}catch{return{}}};
export const save=(slug,mode,score,total)=>{try{const d=load();d[slug+':'+mode]={score,total,at:Date.now()};localStorage.setItem('aq',JSON.stringify(d))}catch{}};
