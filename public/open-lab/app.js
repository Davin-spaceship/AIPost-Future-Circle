const slides = window.DECK_CONTENT;
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
const lines = v => esc(v).replace(/\n/g, "<br>");
const pad = n => String(n).padStart(2,"0");
const link = s => s ? '<a class="source-link" href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">'+esc(s.label)+' ↗</a>' : "";
const heading = s => '<header class="slide-heading"><h2>'+lines(s.title)+'</h2>'+(s.intro?'<p>'+esc(s.intro)+'</p>':"")+'</header>';
const footer = s => '<footer class="slide-foot">'+(s.note?'<span>'+esc(s.note)+'</span>':"")+link(s.source)+'</footer>';
function waves(){
  return '<svg class="signal" viewBox="0 0 800 620" aria-hidden="true"><defs><linearGradient id="signal-color" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#b8ed2b"/><stop offset=".43" stop-color="#9a67ff"/><stop offset="1" stop-color="#ff693a"/></linearGradient></defs><g fill="none" stroke="url(#signal-color)" stroke-width="1.1">'+Array.from({length:54},(_,i)=>{
    const y=120+i*7;
    return '<path opacity="'+(.35+i/100)+'" d="M-60 '+y+' C190 '+(y+240)+',240 '+(y-180)+',410 '+(y-80)+' S600 '+(y+220)+',880 '+(y-210)+'"/>';
  }).join("")+'</g></svg>';
}
function page(s,i,html,theme="paper"){
  return '<section class="slide '+theme+' slide--'+s.type+'" id="'+s.id+'" data-page="'+i+'" aria-labelledby="'+s.id+'-title"><div class="eyebrow"><span>'+pad(i+1)+' / '+esc(s.label)+'</span><span class="edition">OPEN LAB 2026</span></div>'+html+'</section>';
}
const renders={
  cover:(s,i)=>page(s,i,
    '<div class="cover-type"><p class="cover-host">AI郵報 presents</p><h1><span class="hundred">100K<span class="asterisk">✳</span></span><span class="openlab">OPEN LAB</span></h1><p class="deck-label">'+esc(s.label)+'</p></div>'+waves()+
    '<div class="cover-bottom"><div><h2>'+lines(s.headline)+'</h2><p>'+esc(s.description)+'</p></div><div class="cover-spec"><strong>'+esc(s.date)+'</strong><div class="city-labels">'+s.cities.map(x=>'<span>'+esc(x)+'</span>').join("")+'</div><p><b>'+esc(s.scale)+'</b> '+esc(s.scaleLabel)+'</p></div></div>',"dark"),
  experience:(s,i)=>page(s,i,heading(s)+'<div class="experience-grid"><div class="editorial-list">'+s.items.map((x,j)=>'<article><span>'+pad(j+1)+'</span><div><h3>'+esc(x[0])+'</h3><p>'+esc(x[1])+'</p></div></article>').join("")+'</div><figure><img src="'+s.image+'" alt="AI 生成的 OPEN LAB 活動情境模擬：開放展示區、創作長桌與分享舞台，非實際場地" loading="lazy"><figcaption>'+esc(s.caption)+'</figcaption></figure></div><p class="fact-strip">'+esc(s.facts)+'</p>'),
  reach:(s,i)=>page(s,i,heading(s)+'<div class="reach-grid"><div class="reach-lead"><strong>'+esc(s.lead[0])+'</strong><span>'+esc(s.lead[1])+'</span></div><div class="metric-grid">'+s.metrics.map(x=>'<article><strong>'+esc(x[0])+'</strong><span>'+esc(x[1])+'</span></article>').join("")+'</div></div><p class="reach-foot">'+esc(s.foot)+'</p>'+footer(s),"dark"),
  audience:(s,i)=>page(s,i,heading(s)+'<div class="audience-groups">'+s.groups.map(x=>'<span>'+esc(x)+'</span>').join("")+'</div><div class="stat-columns">'+s.stats.map(x=>'<article><strong>'+esc(x[0])+'</strong><h3>'+esc(x[1])+'</h3><p>'+esc(x[2])+'</p></article>').join("")+'</div>'+footer(s)),
  proof:(s,i)=>page(s,i,heading(s)+'<div class="proof-grid">'+s.cases.map(x=>'<figure><img loading="lazy" src="'+esc(x.image)+'" alt="'+esc(x.name)+' 過往活動照片"><figcaption><span>'+esc(x.kind)+'</span><h3>'+esc(x.name)+'</h3><p>'+esc(x.description)+'</p></figcaption></figure>').join("")+'</div>'+footer(s)),
  cases:(s,i)=>page(s,i,heading(s)+'<div class="case-list">'+s.cases.map((x,j)=>'<a href="'+esc(x.url)+'" target="_blank" rel="noopener noreferrer"><span class="case-no">'+pad(j+1)+'</span><div><small>'+esc(x.category)+'</small><h3>'+esc(x.name)+'</h3></div><p>'+esc(x.description)+'</p><span aria-hidden="true">↗</span></a>').join("")+'</div><div class="partner-names">'+s.partners.map(x=>'<span>'+esc(x)+'</span>').join("")+'</div>'+footer(s),"dark"),
  program:(s,i)=>page(s,i,heading(s)+'<div class="program-grid">'+s.items.map(x=>'<article><span class="program-no">'+esc(x[0])+'</span><h3>'+esc(x[1])+'</h3><p>'+esc(x[2])+'</p><small>'+esc(x[3])+'</small></article>').join("")+'</div>'+footer(s)),
  challenges:(s,i)=>page(s,i,heading(s)+'<div class="challenge-grid">'+s.competitions.map((x,j)=>'<article><span class="mono">CHALLENGE 0'+(j+1)+'</span><h3>'+esc(x.name)+'</h3><h4>'+esc(x.subtitle)+'</h4><p class="example">'+esc(x.example)+'</p><div class="challenge-role"><span>品牌可參與</span><p>'+esc(x.role)+'</p></div></article>').join("")+'</div><p class="fact-strip">'+esc(s.strip)+'</p>',"dark"),
  visibility:(s,i)=>page(s,i,heading(s)+'<div class="channel-strip">'+s.channels.map(x=>'<span>'+esc(x)+'</span>').join("")+'</div><div class="visibility-list">'+s.items.map((x,j)=>'<article><span>'+pad(j+1)+'</span><h3>'+esc(x[0])+'</h3><p>'+esc(x[1])+'</p></article>').join("")+'</div>'+footer(s),"lime"),
  partnerships:(s,i)=>page(s,i,heading(s)+'<div class="table-wrap"><table><thead><tr><th>合作方式</th><th>你帶來</th><th>可以一起做</th></tr></thead><tbody>'+s.rows.map(x=>'<tr>'+x.map((v,j)=>j===0?'<th scope="row">'+esc(v)+'</th>':'<td>'+esc(v)+'</td>').join("")+'</tr>').join("")+'</tbody></table></div>'+footer(s)),
  scope:(s,i)=>page(s,i,heading(s)+'<div class="scope-grid">'+s.items.map((x,j)=>'<article><span class="mono">0'+(j+1)+' / '+esc(x.name)+'</span><h3 class="package-price"><small>NT$</small> '+esc(x.price)+'</h3><p>'+esc(x.highlight)+'</p><div><span class="package-label">現場參與</span>'+esc(x.onsite)+'</div><ul>'+x.media.map(m=>'<li>'+esc(m)+'</li>').join("")+'</ul></article>').join("")+'</div><p class="package-common">'+esc(s.common)+'</p>'+footer(s)),
  contact:(s,i)=>page(s,i,heading(s)+'<div class="contact-grid"><div class="event-stamp"><strong>OPEN<br>INVITATION<span>↗</span></strong><p>'+esc(s.cities)+'<br>'+esc(s.date)+'<br>'+esc(s.scale)+'</p></div><address><span>'+esc(s.name)+'</span><p>'+esc(s.org)+'</p><a class="email" href="mailto:'+esc(s.email)+'">'+esc(s.email)+' ↗</a><a href="tel:+886928910214">'+esc(s.phone)+'</a>'+link(s.link)+'</address></div>'+footer(s),"dark")
};
const deck=document.querySelector("#deck");
deck.innerHTML=slides.map((s,i)=>renders[s.type](s,i)).join("");
document.querySelectorAll(".slide").forEach(el=>{
  const title=el.querySelector("h1,h2");
  if(title)title.id=el.id+"-title";
});
const pages=[...document.querySelectorAll(".slide")];
const counter=document.querySelector("#counter");
const dots=document.querySelector("#dots");
const dialog=document.querySelector("#overview");
const prev=document.querySelector("#prevBtn");
const next=document.querySelector("#nextBtn");
const currentTitle=document.querySelector("#pageTitle");
let current=0,frame=0;
dots.innerHTML=slides.map((s,i)=>'<button aria-label="第 '+(i+1)+' 頁：'+esc(s.title.replaceAll("\n",""))+'" data-index="'+i+'"></button>').join("");
document.querySelector("#overviewGrid").innerHTML=slides.map((s,i)=>'<button data-index="'+i+'"><span>'+pad(i+1)+'</span><strong>'+esc(s.title.replaceAll("\n",""))+'</strong><small>'+esc(s.id)+'</small></button>').join("");
function update(index,hash=true){
  current=index;
  counter.textContent=pad(current+1)+" / "+pad(slides.length);
  currentTitle.textContent=slides[current].title.replaceAll("\n","");
  [...dots.children].forEach((d,i)=>{d.classList.toggle("active",i===current);if(i===current)d.setAttribute("aria-current","page");else d.removeAttribute("aria-current");});
  prev.disabled=current===0;next.disabled=current===slides.length-1;
  if(hash && location.hash!=="#"+slides[current].id)history.replaceState(null,"","#"+slides[current].id);
}
function go(index){
  const target=Math.max(0,Math.min(slides.length-1,index));
  pages[target].scrollIntoView({behavior:"instant",block:"start"});
  update(target);
}
function readHash(){
  const raw=location.hash.slice(1);
  const named=slides.findIndex(s=>s.id===raw);
  const legacy=/^slide-\d+$/.test(raw)?Number(raw.slice(6))-1:-1;
  go(named>=0?named:legacy>=0?legacy:0);
}
prev.onclick=()=>go(current-1);next.onclick=()=>go(current+1);
dots.onclick=e=>{const b=e.target.closest("button[data-index]");if(b)go(Number(b.dataset.index));};
document.querySelector("#overviewBtn").onclick=()=>dialog.showModal();
document.querySelector("#closeOverview").onclick=()=>dialog.close();
document.querySelector("#overviewGrid").onclick=e=>{const b=e.target.closest("button[data-index]");if(b){dialog.close();go(Number(b.dataset.index));}};
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close();});
document.addEventListener("keydown",e=>{
  if(dialog.open||e.altKey||e.ctrlKey||e.metaKey||e.target.closest("input,textarea,select,[contenteditable],button,a"))return;
  if(["ArrowRight","PageDown"," "].includes(e.key)){e.preventDefault();go(current+1);}
  if(["ArrowLeft","PageUp"].includes(e.key)){e.preventDefault();go(current-1);}
  if(e.key==="Home"){e.preventDefault();go(0);}
  if(e.key==="End"){e.preventDefault();go(slides.length-1);}
});
window.addEventListener("scroll",()=>{
  if(frame)return;
  frame=requestAnimationFrame(()=>{
    frame=0;
    const mark=window.innerHeight*.32;
    let found=0;
    pages.forEach((p,i)=>{if(p.getBoundingClientRect().top<=mark)found=i;});
    update(found);
  });
},{passive:true});
window.addEventListener("hashchange",readHash);
window.addEventListener("load",readHash,{once:true});
update(0,false);
