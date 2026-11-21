/* ===== helpers ===== */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let tt;function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>e.classList.remove('on'),2600)}
document.addEventListener('click',e=>{const b=e.target.closest('[data-m]');if(b)toast(b.dataset.m)});

/* terminal */
(function(){const L=["Initialising curiosity.exe...","Loading questionable ideas...","Running user empathy diagnostics...","Product thinking detected.","System ready. Mostly."],el=$('#term');
 if(RM){el.innerHTML=L.map(l=>'&gt; '+l).join('<br>');return}
 let i=0,j=0,out=[];(function tick(){if(i>=L.length){el.innerHTML=out.join('<br>')+'<br>&gt; <i></i>';return}
 const cur=L[i].slice(0,++j);el.innerHTML=out.concat('&gt; '+cur).join('<br>')+'<i></i>';
 if(j>=L[i].length){out.push('&gt; '+L[i]);i++;j=0;setTimeout(tick,420)}else setTimeout(tick,28)})()})();

/* dodging NO */
(function(){const no=$('#no'),ar=$('#arena'),M=["You seem very committed to not hiring me.","That is a surprising amount of effort to say no.","Are we negotiating?","The persistence is noted. Unfortunately, so is your decision."];let n=0,last=0,px=-999,py=-999;
 function say(){$('#msg').textContent=M[n%M.length];n++}
 function dodge(){const now=Date.now();if(now-last<250)return;last=now;
  const bw=no.offsetWidth,bh=no.offsetHeight,W=ar.clientWidth-bw-12,H=ar.clientHeight-bh-12,a=ar.getBoundingClientRect(),y0=$('#yes').getBoundingClientRect();
  let best=null,bd=-1;
  for(let k=0;k<30;k++){const x=6+Math.random()*W,y=6+Math.random()*H,l=a.left+x,t=a.top+y;
   if(l<y0.right+12&&l+bw>y0.left-12&&t<y0.bottom+12&&t+bh>y0.top-12)continue;
   const d=Math.hypot(l+bw/2-px,t+bh/2-py);if(d>bd){bd=d;best=[x,y]}}
  if(!best)best=[W,6];
  no.style.left=best[0]+'px';no.style.top=best[1]+'px';no.style.transform='none';say()}
 ar.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;px=e.clientX;py=e.clientY;const r=no.getBoundingClientRect();if(px>r.left-70&&px<r.right+70&&py>r.top-50&&py<r.bottom+50)dodge()});
 no.addEventListener('pointerenter',e=>{px=e.clientX;py=e.clientY;if(e.pointerType==='mouse')dodge()});
 no.addEventListener('pointerdown',e=>{e.preventDefault();px=e.clientX;py=e.clientY;last=0;dodge()});
 no.addEventListener('click',e=>{e.preventDefault();if(e.detail===0){last=0;dodge();toast('Nice try, keyboard user. The button moved.')}});
 addEventListener('resize',()=>{no.style.left='';no.style.top='';no.style.transform=''})})();

/* projects (published only) */
(function(){const pub=PROJECTS.filter(p=>p.status==='published'),box=$('#projects');
 if(!pub.length){box.innerHTML='<div class="empty" style="grid-column:1/-1"><strong>The receipts are still being printed.</strong><br>Evidence is being compiled. Check back soon.</div>';return}
 pub.forEach(p=>{const b=document.createElement('button');b.className='card rv';b.style.background=p.color;
  b.innerHTML=`<span class="blob"></span><span class="tag">${esc(p.type)} · ${esc(p.category)}</span><h3>${esc(p.title)}</h3><p>${esc(p.short)}</p><span class="btn" style="background:#fff;margin-top:10px">${esc(p.cta)} <span class="ar">→</span></span>`;
  b.onclick=()=>{location.hash='p-'+p.slug};box.appendChild(b)});
 $$('.card',box).forEach(c=>{if(RM)return;c.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(700px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-6px)`});c.addEventListener('pointerleave',()=>c.style.transform='')})})();
function route(){const d=$('#detail'),m=location.hash.match(/^#p-(.+)$/),p=m&&PROJECTS.find(x=>x.slug===m[1]&&x.status==='published');
 if(!p){d.classList.remove('open');d.innerHTML='';return}
 const secs=(p.sections||[]).filter(s=>s.body&&s.body.trim());
 d.innerHTML=`<div class="wrap"><a class="btn alt" href="#work">← Back to the receipts</a><h2 style="margin-top:30px">${esc(p.title)}</h2><p class="kicker">${esc(p.short)}</p><div class="ctas" style="margin-bottom:30px">${(p.links||[]).map(l=>`<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} <span class="ar">↗</span></a>`).join('')}</div><div class="grid">${secs.map(s=>`<div class="card" style="background:${p.color}"><h3>${esc(s.title)}</h3><p>${esc(s.body)}</p></div>`).join('')}</div></div>`;d.classList.add('open');d.scrollTop=0}
addEventListener('hashchange',route);route();

/* timeline */
$('#tl').innerHTML=TIMELINE.map(n=>`<button class="node rv" style="--c:${n.c}" aria-expanded="false"><strong>${esc(n.t)}</strong><small>${esc(n.s)}</small><span class="more"><div><p>${esc(n.d)}</p><em>${esc(n.m)}</em></div></span></button>`).join('');
$$('.node').forEach(n=>n.onclick=()=>n.setAttribute('aria-expanded',n.getAttribute('aria-expanded')!=='true'));

/* about cards */
$('#about').innerHTML=ABOUT.map(a=>`<button class="flip rv" aria-pressed="false"><span class="fi"><span class="face front" style="background:${a[3]}"><span><h3>${esc(a[0])}</h3><p>${esc(a[1])}</p></span><span class="tag">Tap to flip</span></span><span class="face back" style="background:${a[3]}">${a[2]}<span class="tag">The fine print · tap to flip back</span></span></span></button>`).join('');
$$('.flip').forEach(c=>c.onclick=()=>{c.classList.toggle('on');c.setAttribute('aria-pressed',c.classList.contains('on'))});
$('#stickers').innerHTML=STICKS.map(s=>`<button class="stk" style="background:${s[2]}" data-m="${esc(s[1])}">${esc(s[0])}</button>`).join('');

/* resume */
(function(){const r=$('#resume');
 const url=SITE.resumeUrl||'assets/resume/Sakshi_Singh_Resume.pdf';
 r.innerHTML='<p style="font-weight:500;margin:0 0 16px">Sakshi Singh — Resume (PDF, 2 pages)</p><div class="ctas">'+(RESUME_IMGS.length?'<button class="btn alt" id="vw" type="button">View Resume <span class="ar">→</span></button>':'')+'<a class="btn" id="dl" href="'+esc(url)+'" download="Sakshi_Singh_Resume.pdf">Download Resume <span class="ar">↓</span></a></div>';
 const rb=$('#rb'),vw=$('#vw');
 if(vw)vw.onclick=()=>{$$('img',rb).forEach(i=>i.remove());RESUME_IMGS.forEach((u,i)=>{const im=new Image();im.src=u;im.alt='Resume page '+(i+1);rb.appendChild(im)});rb.classList.add('on');$('#rbx').focus()};
 rb.addEventListener('click',e=>{if(e.target===rb||e.target.id==='rbx')rb.classList.remove('on')});addEventListener('keydown',e=>{if(e.key==='Escape')rb.classList.remove('on')});
 $('#dl').addEventListener('click',()=>toast('Retrieving years of academic investment...'))})();

/* certificates */
(function(){if(!CERTS.length)return;const box=$('#certs'),C=['#E6D9FF','#CDE9F4','#FFE0B9','#F6C9D3','#FFF0AE','#D2F0E4'],lb=$('#lb'),li=$('img',lb);let all=false;
 function openLb(c){li.src=c.img;li.alt=c.title+' '+(c.date||'');lb.classList.add('on');$('#lbx').focus()}
 function closeLb(){lb.classList.remove('on');li.removeAttribute('src')}
 lb.addEventListener('click',e=>{if(e.target!==li)closeLb()});addEventListener('keydown',e=>{if(e.key==='Escape')closeLb()});
 function draw(){const list=all?CERTS:CERTS.slice(0,6);
  box.innerHTML=`<h3 style="font-size:30px;margin-bottom:6px">Certificates</h3><p class="kicker" style="margin:0 0 24px">Proof that the learning is not just talk.</p><div class="grid">${list.map((c,i)=>`<button class="card" type="button" data-i="${i}" style="background:${C[i%6]};padding:0"><img src="${c.img}" alt="${esc(c.title)} ${esc(c.date||'')}" style="display:block;width:100%;height:170px;object-fit:cover;object-position:50% 33%"><span style="display:block;padding:20px 22px 22px"><span class="tag">${esc(c.issuer||'')}${c.date?' · '+esc(c.date):''}</span><h3 style="font-size:21px;margin:6px 0 4px">${esc(c.title)}</h3><span style="display:block;font-size:15px">${esc(c.sub||'')}</span><span class="tag" style="display:block;margin-top:12px">View certificate ↗</span></span></button>`).join('')}</div>${CERTS.length>6?`<button class="btn alt" id="mc" type="button" style="margin-top:24px">${all?'Show fewer':'Show all '+CERTS.length}</button>`:''}`;
  $$('.card[data-i]',box).forEach(b=>b.onclick=()=>openLb(list[b.dataset.i]));
  const m=$('#mc');if(m)m.onclick=()=>{all=!all;draw()}}
 draw()})();

/* contact */
(function(){const l=$('#links'),a=[];
 if(SITE.email)a.push(['Open in mail app','mailto:'+SITE.email,'alt']);
 if(SITE.linkedin)a.push(['LinkedIn',SITE.linkedin,'alt']);
 l.innerHTML=(SITE.email?`<p style="width:100%;margin:0 0 6px;font:700 clamp(20px,3.4vw,30px) 'Space Grotesk',sans-serif;word-break:break-all"><span id="em">${esc(SITE.email)}</span></p><button class="btn" id="cp" type="button">Copy email <span class="ar">⧉</span></button>`:'')+(SITE.phone?`<p style="width:100%;margin:14px 0 6px;font:700 clamp(20px,3.4vw,30px) 'Space Grotesk',sans-serif"><span id="ph">${esc(SITE.phone)}</span></p><button class="btn" id="cpp" type="button">Copy number <span class="ar">⧉</span></button>`:'')+a.map(x=>`<a class="btn alt" href="${esc(x[1])}" target="_blank" rel="noopener">${x[0]} <span class="ar">→</span></a>`).join('')||'<div class="empty">Contact details arriving soon.</div>';
 const cpp=$('#cpp');if(cpp)cpp.onclick=async()=>{try{await navigator.clipboard.writeText(SITE.phone);toast('Number copied. Phone, brace yourself.')}catch(e){const r=document.createRange();r.selectNodeContents($('#ph'));const s=getSelection();s.removeAllRanges();s.addRange(r);try{document.execCommand('copy')}catch(_){}toast('Number selected: '+SITE.phone)}};
 const cp=$('#cp');if(cp)cp.onclick=async()=>{try{await navigator.clipboard.writeText(SITE.email);toast('Email copied. Inbox, brace yourself.')}catch(e){const r=document.createRange();r.selectNodeContents($('#em'));const s=getSelection();s.removeAllRanges();s.addRange(r);try{document.execCommand('copy')}catch(_){}toast('Email selected: '+SITE.email)}}})();

/* status widget */
(function(){const w=$('#stat'),b=$('button',w),p=$('#pan');
 p.innerHTML=STATS.map(s=>`<div class="row"><div><b>${s[0]}:</b> ${s[2]===null?'<span class="ld">'+s[1]+'</span>':s[1]}</div>${s[2]!==null?`<div class="bar"><i style="--c:${s[3]}" data-w="${s[2]}"></i></div>`:''}</div>`).join('')+'<small style="opacity:.7">Fictional indicators. Not a professional rating.</small>';
 b.onclick=()=>{const o=w.classList.toggle('open');b.setAttribute('aria-expanded',o);$$('.bar i',p).forEach(i=>i.style.width=o?i.dataset.w+'%':'0')}})();

/* reveal, progress, active nav, top */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
$$('.rv').forEach((e,i)=>{e.style.transitionDelay=(i%4)*80+'ms';io.observe(e)});
$$('section h2,section .kicker').forEach(e=>{e.classList.add('rv');io.observe(e)});
addEventListener('scroll',()=>{const h=document.documentElement;$('#prog').style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+'%'},{passive:true});
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('nav a[data-s]').forEach(a=>a.classList.toggle('on',a.dataset.s===e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
$$('main section').forEach(s=>so.observe(s));
$('#top').onclick=()=>scrollTo({top:0,behavior:RM?'auto':'smooth'});
