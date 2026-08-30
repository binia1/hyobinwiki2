(function(){
  function sanitize(term){
    term = (term||'').trim();
    if(!term) return '';
    // 괄호 설명 제거: "효빈역 (1호선)" -> "효빈역"
    term = term.replace(/\s*\([^\)]*\)\s*/g, ' ').trim();
    // 다중 공백 -> underscore (기존 파일명 관례)
    term = term.replace(/\s+/g,'_');
    // 파일명으로 쓰기 곤란한 문자 최소 치환
    term = term.replace(/[\\/\?%\*:|"<>]/g, '-');
    return term;
  }

  function stationToTerm(raw){
    raw = (raw||'').trim();
    if(!raw) return '';
    // 괄호 제거 전처리
    raw = raw.replace(/\s*\([^\)]*\)\s*/g, ' ').trim();

    // '역점' 등 점포명은 역 문서로 강제하지 않음
    if(/역점/.test(raw)) return '';

    // "...역"이 포함되어 있으면, 첫 '역'까지를 역명으로 확정
    if(raw.includes('역')){
      const before = raw.split('역')[0];
      const station = (before + '역').trim();
      // 너무 짧은 오탐 방지
      if(station.length>=2) return station;
    }
    return '';
  }

  function termToFile(term, forceStation){
    term = (term||'').trim();
    if(!term) return null;

    // 역 링크 우선 규칙
    if(forceStation){
      const st = sanitize(forceStation);
      return encodeURIComponent(st) + '.html';
    }

    const clean = sanitize(term);
    if(!clean) return null;
    return encodeURIComponent(clean) + '.html';
  }

  function rewriteWikiLinks(){
    var links = document.querySelectorAll('a.wiki-link, a[data-term], a[data-wiki-term]');
    links.forEach(function(a){
      const href = (a.getAttribute('href')||'').trim();
      if(href.startsWith('#')) return; // 내부 앵커는 그대로
      if(/^https?:/i.test(href)) return; // 외부 링크는 그대로

      var raw = a.getAttribute('data-term') || a.getAttribute('data-wiki-term') || a.textContent;

      // 역명 규칙 적용
      var station = stationToTerm(raw);
      var file = termToFile(raw, station || '');
      if(!file) return;
      a.setAttribute('href', file);
    });
  }

  // 클릭이 씹히는 경우를 대비해 캡처링으로 강제 이동
  // (중요) href를 다시 계산하지 말고, 최종 href 그대로 이동해야 다른 후처리(예: 5문단 역 링크 보정)가 적용됩니다.
  document.addEventListener('click', function(e){
    var a = e.target && e.target.closest ? e.target.closest('a.wiki-link, a[data-term], a[data-wiki-term]') : null;
    if(!a) return;
    const href = (a.getAttribute('href')||'').trim();
    if(!href) return;
    if(href.startsWith('#')) return;
    if(/^https?:/i.test(href)) return;
    e.preventDefault();
    e.stopPropagation();
    window.location.assign(href);
  }, true);

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', rewriteWikiLinks);
  } else {
    rewriteWikiLinks();
  }
})();
