// [PATCH v11] Section 5 station links: even if the visible station name omits '역', link target should be '~역.html'.
(function(){
  function normBase(txt){
    if(!txt) return '';
    let t = txt.replace(/\s+/g,' ').trim();
    // take text before parentheses
    t = t.split('(')[0].trim();
    // remove spaces for filenames
    t = t.replace(/\s+/g,'');
    return t;
  }
  function shouldSkipText(t){
    // terms that should not be treated as station names
    return /호선|선$|승무사업소|차량사업소|차량주박기지|관리역|사업소|연장|계획|공사|상세|노선|권역|전철|공사중|예정|목록|개통/.test(t);
  }
  function fixHref(a){
    try{
      const txt = (a.textContent||'').trim();
      if(!txt) return;
      if(shouldSkipText(txt)) return;
      if(/역/.test(txt)) return; // already shows '역'

      const base = normBase(txt);
      if(!base) return;
      // already station file?
      if(/역\.html$/i.test(a.getAttribute('href')||'')) return;

      const href = (a.getAttribute('href')||'').trim();
      if(!href) return;
      // only rewrite when the current href matches the base word doc (base.html)
      const m = href.match(/([^\/]+)\.html(?:#.*)?$/i);
      if(!m) return;
      const file = m[1];
      if(file !== base) return;
      // rewrite to base+역.html (preserve hash if any)
      const hash = href.includes('#') ? '#' + href.split('#').slice(1).join('#') : '';
      a.setAttribute('href', base + '역.html' + hash);
    }catch(e){}
  }

  // Apply only within section 5 block
  const s5 = document.getElementById('s-5');
  if(!s5) return;
  // section 5 includes following siblings until next h2 with id starting s-6
  let node = s5;
  const targets = [];
  while(node){
    if(node !== s5 && node.tagName && node.tagName.toLowerCase()==='h2' && /^s-6\b/.test(node.id||'')) break;
    if(node.querySelectorAll) targets.push(...node.querySelectorAll('a.wiki-link'));
    node = node.nextElementSibling;
  }
  targets.forEach(fixHref);
})();
