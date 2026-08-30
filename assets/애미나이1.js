(function(){
  function sanitize(name){
    name = (name||'').trim();
    if(!name) return '';
    name = name.replace(/\s*\([^\)]*\)\s*/g,' ').trim();
    name = name.replace(/\s+/g,'_');
    name = name.replace(/[\\/\?%\*:|"<>]/g,'-');
    return name;
  }
  function toStationFile(label){
    label = (label||'').trim();
    if(!label) return null;
    // 역점(점포) 등은 제외
    if(/역점/.test(label)) return null;
    // 명백히 역이 아닌 시설명 제외
    if(/사업소|승무|차량|기지|센터|본사/.test(label)) return null;
    // 이미 '역'으로 끝나면 유지, 아니면 '역'을 붙여 파일명 구성
    let base = label.replace(/\s*\([^\)]*\)\s*/g,' ').trim();
    if(!base.endsWith('역')) base = base + '역';
    base = sanitize(base);
    if(!base) return null;
    return encodeURIComponent(base) + '.html';
  }
  function fixTable(table){
    const headerRow = table.querySelector('tr');
    if(!headerRow) return;
    const ths = Array.from(headerRow.querySelectorAll('th')).map(th=> (th.textContent||'').trim());
    const idxStart = ths.indexOf('기점');
    const idxEnd = ths.indexOf('종점');
    if(idxStart<0 || idxEnd<0) return;

    const rows = Array.from(table.querySelectorAll('tr')).slice(1);
    rows.forEach(tr=>{
      const tds = tr.querySelectorAll('td');
      [idxStart, idxEnd].forEach(i=>{
        const td = tds[i];
        if(!td) return;
        td.querySelectorAll('a.wiki-link').forEach(a=>{
          const label = (a.textContent||'').trim();
          const file = toStationFile(label);
          if(file) a.setAttribute('href', file);
        });
      });
    });
  }
  function run(){
    const h2 = document.getElementById('s-5');
    if(!h2) return;
    let node = h2.nextElementSibling;
    while(node && node.tagName !== 'H2'){
      if(node.tagName === 'TABLE') fixTable(node);
      node = node.nextElementSibling;
    }
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
})();
