/* [강제 이동 치트키: 교차로/학교 납치 완벽 차단 버전] */
(function(){
    try {
        var path = decodeURIComponent(window.location.pathname);
        if (path.indexOf("효빈위키_대문") > -1 || path.indexOf("효빈위키 대문") > -1) {
            window.location.replace("index.html");
        }
    } catch(e) {}
})();

/* HyobinWiki Core - THE FINAL ULTIMATE PATH-SENSITIVE VERSION */
(function(){
  "use strict";

  // 공통 설정: 관리하기 쉽게 상단으로 추출
  var TEMPLATE_STATIONS = ["조천산", "화주", "덕남대", "영목", "주기", "덕남도청", "규암로2가", "박현", "우격", "조전", "조전구청", "삼은", "주성", "원명중앙", "신도"];
  var isSubFolder = window.location.pathname.indexOf('/secret_docs/') > -1;

  function resolvePath(targetHref) {
      if (!targetHref) return "";
      // 이미 절대 경로이거나 외부 링크면 그대로 반환
      if (targetHref.startsWith('http') || targetHref.startsWith('/') || targetHref.startsWith('?')) return targetHref;

      if (!isSubFolder) return targetHref;
      
      // 서브폴더(secret_docs) 내에 있을 때의 처리
      if (targetHref.indexOf('secret_docs/') > -1) {
          // 목적지도 secret_docs 폴더 내부라면 경로 유지
          return targetHref.split('/').pop(); 
      } else {
          // 밖으로 나가는 링크라면 ../ 추가
          return '../' + targetHref;
      }
  }
function autoLinkBusNumbers() {
      var badges = document.querySelectorAll('.bus-badge');
      badges.forEach(function(badge) {
          var nextNode = badge.nextSibling;
          if (nextNode && nextNode.nodeType === 3) { 
              var text = nextNode.nodeValue;
              var linkedHTML = text.replace(/(\d{1,4})/g, function(match) {
                  var num = parseInt(match, 10);
                  var id = (num >= 1 && num <= 9) ? "0" + num : match;
                  // 이제 같은 블록 안에 있으므로 resolvePath를 정상적으로 사용 가능합니다!
                  var url = resolvePath("bus_" + id + ".html");
                  return '<a href="' + url + '" class="wiki-link" style="font-weight:bold;">' + match + '</a>';
              });

              if (text !== linkedHTML) {
                  var newSpan = document.createElement('span');
                  newSpan.innerHTML = linkedHTML;
                  nextNode.parentNode.replaceChild(newSpan, nextNode);
              }
          }
      });
  }
  var BACKUP_ALIASES = {
      "효빈대_중앙환승장역.html": "효빈대_중앙환승장역.html",
      "효빈대중앙환승장": "효빈대_중앙환승장역.html",
      "중앙환승장": "효빈대_중앙환승장역.html",
      "B06": "효빈대_중앙환승장역.html",
      "B15": "효빈대_중앙환승장역.html",
      "교통대학기지": "효빈대_B선_역_템플릿.html?id=B01",
      "중앙도서관": "효빈대_B선_역_템플릿.html?id=B02",
      "사회복지대": "효빈대_B선_역_템플릿.html?id=B03",
      "미술사회대": "효빈대_B선_역_템플릿.html?id=B04",
      "법전원": "효빈대_B선_역_템플릿.html?id=B05",
      "효빈대A선": "효빈대_A선.html",
      "효빈대B선": "효빈대_B선.html",
      "262": "bus_260.html#261"
  };

  function getWikiData() {
      var externalAliases = window.HB_WIKI_ALIASES || {};
      var rawPages = window.HB_WIKI_PAGES || [];
      var finalAliases = Object.assign({}, BACKUP_ALIASES, externalAliases);
      
      var normalizedPages = rawPages.filter(function(p) { return p; }).map(function(p) {
          if (typeof p === "string") return { title: p, href: p + ".html" };
          return { title: p.title || "", href: p.href || (p.title ? p.title + ".html" : "") };
      });
      return { aliases: finalAliases, pages: normalizedPages };
  }

  function norm(s){ return (s||"").toString().trim(); }
  function stripExt(s){ return norm(s).replace(/\.html$/i, ""); }
  function toKey(s){
    if (typeof s !== "string") s = (s || "").toString();
    var base = s.split('?')[0].split('#')[0];
    return stripExt(base).replace(/[_.\s]+/g, "").toLowerCase();        
  }

  function performSmartMove(query) {
      if(!query) return;
      var originalQuery = query.trim();
      var cleanQuery = originalQuery;
      var hasYeok = false;
      
      if (cleanQuery.length > 1 && cleanQuery.endsWith("역")) {
          cleanQuery = cleanQuery.slice(0, -1);
          hasYeok = true;
      }

      // 0순위: 버스 번호
      if(/^\d+$/.test(originalQuery)){
          var n = parseInt(originalQuery, 10);
          var id = (n >= 1 && n <= 9) ? "0" + n : "" + n;
          saveRecent(originalQuery);
          location.href = resolvePath("bus_" + id + ".html");
          return;
      }

      var db = getWikiData();
      var searchKey1 = toKey(originalQuery);
      var searchKey2 = hasYeok ? toKey(cleanQuery) : searchKey1;
      var searchKey3 = !hasYeok ? toKey(originalQuery + "역") : "";
      var target = null;

      // 1순위: 정확한 일치
      if (db.aliases[originalQuery]) target = db.aliases[originalQuery];
      else if (db.aliases[originalQuery + ".html"]) target = db.aliases[originalQuery + ".html"];
      
      if (!target) {
          for (var k in db.aliases) { if (toKey(k) === searchKey1) { target = db.aliases[k]; break; } }
      }
      if (!target) {
          for (var i = 0; i < db.pages.length; i++) {
              var p = db.pages[i];
              // 🔍 수정: p가 존재하고 title이 있을 때만 검사 (에러 방지 핵심)
              if (p && p.title && (toKey(p.title) === searchKey1 || norm(p.title) === norm(originalQuery))) {
                  target = p.href; break;
              }
          }
      }

      // 2순위: 템플릿 역
      if (!target && (TEMPLATE_STATIONS.indexOf(originalQuery) > -1 || TEMPLATE_STATIONS.indexOf(cleanQuery) > -1)) {
          var matchedTemplate = TEMPLATE_STATIONS.indexOf(originalQuery) > -1 ? originalQuery : cleanQuery;
          saveRecent(originalQuery);
          location.href = resolvePath(encodeURI("덕주1호선_역사_템플릿.html") + "?station=" + encodeURIComponent(matchedTemplate));
          return;
      }

      // 3순위: 역 이름 떼고 별칭만 검사
      if (!target && hasYeok) {
          for (var k in db.aliases) { if (toKey(k) === searchKey2) { target = db.aliases[k]; break; } }
      }

      // 4순위: 역 이름 붙여서 검사
      if (!target && !hasYeok && searchKey3) {
          for (var k in db.aliases) { if (toKey(k) === searchKey3) { target = db.aliases[k]; break; } }
          if (!target) {
              for (var i = 0; i < db.pages.length; i++) {
                  var p = db.pages[i];
                  // 🔍 수정: 여기서도 p.title 존재 확인 필수
                  if (p && p.title && toKey(p.title) === searchKey3) { target = p.href; break; }
              }
          }
      }
      
/* ... 기존 로직 생략 ... */

saveRecent(originalQuery);
      
if (target) {
    // 1. 목록이나 별칭에 이미 있는 경우 해당 경로로 이동 (기존과 동일)
    location.href = resolvePath(target);
} else {
    // 2. [수정된 부분] 목록에 없으면 '효빈위키 검색.html'로 쿼리를 던집니다.
    // 이렇게 하면 검색 페이지에서 Firebase까지 싹 뒤져보고, 없으면 "직접 파시던가요" 드립이 나옵니다.
    var searchUrl = "효빈위키 검색.html?q=" + encodeURIComponent(originalQuery);
    location.href = resolvePath(searchUrl);
}
  }

  window.handleSearch = function(inputId){
    var input = document.getElementById(inputId || 'searchInput');
    if(input) performSmartMove(input.value.trim()); 
  };

  // [3] 자동완성
  function attachAutocomplete(inputId, wrapId){
    var input = document.getElementById(inputId);
    if(!input) return;
    var wrap = (wrapId ? document.getElementById(wrapId) : null) || input.parentElement;
    if(wrap && getComputedStyle(wrap).position === "static") wrap.style.position = "relative";

    var dd = wrap.querySelector('.hb-autocomplete');
    if(!dd){
        dd = document.createElement("div");
        dd.className = "hb-autocomplete";
        Object.assign(dd.style, {
            position: "absolute", left: "0", right: "0", top: "100%", marginTop: "5px",
            background: "white", border: "2px solid #7777AA", borderRadius: "8px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)", zIndex: "999999", 
            maxHeight: "350px", overflowY: "auto", display: "none", textAlign: "left"
        });
        wrap.appendChild(dd);
    }

    function doRender(){
        var val = input.value.trim();
        dd.innerHTML = "";
        if(val.length < 1) { dd.style.display="none"; return; }

        var db = getWikiData();
        var key = toKey(val);
        var matchedItems = [];
        var addedKeys = {}; 

        db.pages.forEach(function(p){
            if (!p || !p.title) return; // 🔍 안전장치
            if (toKey(p.title).indexOf(key) > -1 || p.title.indexOf(val) > -1) {
                var k = toKey(p.title);
                if(!addedKeys[k]){
                    addedKeys[k] = true;
                    matchedItems.push({ title: p.title, href: p.href });
                }
            }
        });

        for(var aliasKey in db.aliases){
            var cleanAlias = aliasKey.replace(/\.html$/i, "");
            if(toKey(cleanAlias).indexOf(key) > -1 || cleanAlias.indexOf(val) > -1){
                var k = toKey(cleanAlias);
                if(!addedKeys[k]){
                    addedKeys[k] = true;
                    matchedItems.push({ title: cleanAlias + " ➔ " + stripExt(db.aliases[aliasKey]), href: db.aliases[aliasKey], isAlias: true });
                }
            }
        }

        var matches = matchedItems.slice(0, 10);
        matches.forEach(function(p){
            var btn = document.createElement("div");
            Object.assign(btn.style, { padding: "12px 15px", background: "white", cursor: "pointer", borderBottom: "1px solid #eee", color: "#333", fontSize: "14px", fontWeight: "bold" });

            if(p.href && p.href.indexOf('secret_docs') > -1) {
                btn.innerHTML = "<span style='color:#EE0022;'>🤫 [기밀]</span> " + p.title;
                btn.style.backgroundColor = "#fff5f5";
            } else if (p.isAlias) {
                btn.innerHTML = "<span style='color:#881188;'>🔗 [별칭]</span> " + p.title; 
            } else { 
                btn.innerText = p.title; 
            }

            btn.onmouseover = function(){ btn.style.background = "#f0f0f8"; };
            btn.onmouseout = function(){ 
                btn.style.background = (p.href && p.href.indexOf('secret_docs') > -1) ? "#fff5f5" : "white"; 
            };

            btn.onmousedown = function(e){ 
                e.preventDefault(); 
                location.href = resolvePath(p.href); 
            };
            dd.appendChild(btn);
        });
        dd.style.display = dd.children.length > 0 ? "block" : "none";
    }

    input.addEventListener("input", doRender);
    input.addEventListener("focus", doRender);
    input.addEventListener("blur", function(){ setTimeout(function(){ dd.style.display = "none"; }, 200); });
    
    input.addEventListener("keydown", function(e){ 
        if(e.key === "Enter" || e.keyCode === 13) { 
            e.preventDefault(); 
            dd.style.display = "none";
            performSmartMove(input.value); 
        } 
    });
  }

  // [링크 가로채기]
  function initLinkInterceptor() {
      document.addEventListener("click", function(e) {
          var target = e.target.closest("a");
          if (!target) return;
          var href = target.getAttribute("href");
          if (!href) return;
          if (href.indexOf("#") > -1 || href.indexOf("?") > -1) return;
          if (href.startsWith("http") || href.startsWith("javascript")) return;
          
          if (href.toLowerCase().indexOf(".html") > -1) {
              var filename = decodeURIComponent(href).split("/").pop();
              if (filename === "수정.html" || filename === "역사.html" || filename === "토론.html") return;
              
              var query = filename.replace(/\.html$/i, "");
              var cleanQuery = query.endsWith("역") ? query.slice(0, -1) : query;
              
              var db = getWikiData();
              var targetHref = null;
              
              if (db.aliases[query + ".html"]) targetHref = db.aliases[query + ".html"];
              else if (db.aliases[query]) targetHref = db.aliases[query];
              else if (query !== cleanQuery && db.aliases[cleanQuery]) targetHref = db.aliases[cleanQuery];

              var isTemplate = TEMPLATE_STATIONS.indexOf(query) > -1 || TEMPLATE_STATIONS.indexOf(cleanQuery) > -1;
              var matchedTemplate = TEMPLATE_STATIONS.indexOf(query) > -1 ? query : cleanQuery;

              if (targetHref) {
                  e.preventDefault();
                  location.href = resolvePath(targetHref);
              } else if (isTemplate) {
                  e.preventDefault();
                  location.href = resolvePath(encodeURI("덕주1호선_역사_템플릿.html") + "?station=" + encodeURIComponent(matchedTemplate));
              }
          }
      });
  }

  var RECENT_KEY = "hb_recent_searches";
  function loadRecent(){ try{ return JSON.parse(localStorage.getItem(RECENT_KEY)||"[]") || []; }catch(e){ return []; } }
  function saveRecent(q){ q = norm(q); if(!q) return; var list = loadRecent().filter(function(x){ return x !== q; }); list.unshift(q); try{ localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0,8))); }catch(e){} }

  var init = function() {
      attachAutocomplete("headerSearchInput", "hb-header-search-wrap");
      attachAutocomplete("mainSearchInput", "hb-main-search-wrap");
      attachAutocomplete("searchInput");
      initLinkInterceptor();
  };
  
  if(document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();

// 카테고리 박스 링크 자동 변환
document.addEventListener("DOMContentLoaded", function() {
    const categoryLinks = document.querySelectorAll('.category-box a');
    categoryLinks.forEach(link => {
        const catName = link.innerText.trim();
        link.setAttribute('href', '분류.html#' + encodeURIComponent(catName));
    });
});

// 플로팅 퀵 내비게이션 (목차, 맨 위, 맨 아래) 자동 생성
document.addEventListener("DOMContentLoaded", function() {
    // 이미 버튼이 생성되어 있다면 중복 생성 방지
    if (document.getElementById('hb-quick-nav')) return;

    // 1. 스타일(CSS) 주입 (이미지와 동일한 디자인 적용)
    const style = document.createElement('style');
    style.innerHTML = `
        .hb-quick-nav {
            position: fixed;
            bottom: 30px;
            right: 30px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            z-index: 99999;
        }
        .hb-quick-nav-btn {
            background: #ffffff;
            border: 1px solid #e5e7eb;
            color: #4b5563;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 44px;
            height: 44px;
            transition: all 0.2s ease;
        }
        .hb-quick-nav-btn:hover {
            background: #f3f4f6;
            color: #111827;
        }
        .hb-quick-nav-list {
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .hb-quick-nav-group {
            display: flex;
            flex-direction: column;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            overflow: hidden;
            border: 1px solid #e5e7eb;
        }
        .hb-quick-nav-group .hb-quick-nav-btn {
            border: none;
            border-bottom: 1px solid #e5e7eb;
            border-radius: 0;
            box-shadow: none;
        }
        .hb-quick-nav-group .hb-quick-nav-btn:last-child {
            border-bottom: none;
        }
    `;
    document.head.appendChild(style);

    // 2. 전체 컨테이너 생성
    const nav = document.createElement('div');
    nav.className = 'hb-quick-nav';
    nav.id = 'hb-quick-nav';

// 3. 목차 이동 버튼 (상단 단독 버튼)
    const listBtn = document.createElement('button');
    listBtn.className = 'hb-quick-nav-btn hb-quick-nav-list';
    listBtn.title = '목차로 이동';
    listBtn.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>';
    
    listBtn.onclick = function() {
        // [수정된 핵심 로직] ID가 toc-box이거나, 클래스가 toc이거나, ID가 toc인 요소를 모두 탐색합니다.
        const toc = document.querySelector('#toc-box, .toc, #toc');
        
        if (toc) {
            // 상단 sticky 네비게이션 바에 가려지지 않도록 여백(80px)을 두고 스크롤
            const y = toc.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({top: y, behavior: 'smooth'});
        } else {
            // 나무위키 감성을 살려 목차가 없을 때는 위키 메시지 박스에 살짝 띄우거나 콘솔에 기록합니다.
            const msgBox = document.getElementById('wiki-msg-box');
            if (msgBox) {
                // 필요하다면 이곳에 "이 문서에는 목차가 없습니다" 등의 안내 문구를 넣을 수 있습니다.
            }
        }
    };

    // 4. 맨 위/맨 아래 버튼 그룹 (하단 묶음 버튼)
    const group = document.createElement('div');
    group.className = 'hb-quick-nav-group';

    // 4-1. 맨 위로 버튼
    const upBtn = document.createElement('button');
    upBtn.className = 'hb-quick-nav-btn';
    upBtn.title = '맨 위로';
    // SVG 아이콘 삽입 (위 화살표)
    upBtn.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>';
    upBtn.onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    // 4-2. 맨 아래로 버튼
    const downBtn = document.createElement('button');
    downBtn.className = 'hb-quick-nav-btn';
    downBtn.title = '맨 아래로';
    // SVG 아이콘 삽입 (아래 화살표)
    downBtn.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>';
    downBtn.onclick = function() {
        window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
    };

    // 요소 조립
    group.appendChild(upBtn);
    group.appendChild(downBtn);
    nav.appendChild(listBtn);
    nav.appendChild(group);

    // 문서에 추가
    document.body.appendChild(nav);
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. 방어선: 이미 수동으로 '각주' 모음집을 만들어둔 문서 패스
    if (document.querySelector('.wiki-footnote-section') || document.getElementById('footnote-list')) return;

    const container = document.querySelector('.wiki-container');
    if (!container) return;

    // 2. 완벽 캐치: 모든 속성 총동원
    const rawFootnotes = container.querySelectorAll('.wiki-fn, .wiki-tooltip, .wiki-tooltip-trigger, .fn-ref, .wiki-fn-link, .wiki-fn-trigger, .fn-link, .sup-ref, .custom-fn-link, .footnote-link, .footnote-ref, a[title], span[title], sup[onclick*="wiki-footnote-tooltip"], span[onclick*="wiki-footnote-tooltip"], [data-note]');
    
    const footnotes = Array.from(rawFootnotes).filter(fn => {
        // UI 및 뒤로가기 버튼 거름
        if (fn.closest('.action-group') || fn.closest('nav') || fn.classList.contains('action-btn') || fn.getAttribute('href') === '즐겨찾기.html') return false;
        if (fn.classList.contains('fn-backlink') || fn.classList.contains('footnote-back') || fn.classList.contains('back-link')) return false;
        
        // 데이터 속성이 없으면 버림
        const hasData = fn.hasAttribute('data-tooltip') || fn.hasAttribute('title') || fn.hasAttribute('data-note') || (fn.hasAttribute('onclick') && fn.getAttribute('onclick').includes('innerHTML'));
        if (!hasData) return false;

        // ★ 대참사 방어선: 각주 전용 클래스가 아닌데, 내용도 각주 형태가 아니면 버림! ★
        const isOfficialFnClass = fn.matches('.wiki-fn, .wiki-tooltip, .wiki-tooltip-trigger, .fn-ref, .wiki-fn-link, .wiki-fn-trigger, .fn-link, .sup-ref, .custom-fn-link, .footnote-link, .footnote-ref, [data-note], sup[onclick*="wiki-footnote-tooltip"], span[onclick*="wiki-footnote-tooltip"]');
        const textStr = fn.textContent.trim();
        
        // 텍스트가 대괄호로 감싸져 있거나('[1]'), 별표('*')거나, 비어있는 경우만 진짜 각주로 인정
        const looksLikeFnText = (textStr.startsWith('[') && textStr.endsWith(']')) || textStr === '*' || textStr === '';
        
        if (!isOfficialFnClass && !looksLikeFnText) {
            return false; // 일반 버튼(급행, 간선 등)이 title 속성을 가졌다고 해서 각주로 납치되는 것을 완벽 차단!
        }

        return true;
    });

    if (footnotes.length === 0) return; 

    // 3. 각주 모음집 컨테이너 생성
    const fnSection = document.createElement('div');
    fnSection.className = 'wiki-footnote-section';
    fnSection.style.marginTop = "40px";
    fnSection.style.paddingTop = "20px";
    fnSection.style.borderTop = "1px solid var(--wiki-border)";
    fnSection.innerHTML = '<h2 class="wiki-heading-2" style="margin-top:0; border-bottom:none;">각주</h2><ul class="wiki-footnote-list" style="list-style:none; padding-left:0; font-size:0.85rem; color:var(--wiki-text);"></ul>';
    
    const fnList = fnSection.querySelector('.wiki-footnote-list');

    // 4. 리스트 생성 및 삽입
    footnotes.forEach((fn, index) => {
        let tooltipText = fn.getAttribute('data-tooltip') || fn.getAttribute('data-note') || fn.getAttribute('title');

        if (!tooltipText && fn.hasAttribute('onclick')) {
            const match = fn.getAttribute('onclick').match(/innerHTML\s*=\s*'([^']+)'/);
            if (match) {
                tooltipText = match[1];
            } else {
                tooltipText = "내용 없음"; 
            }
        }

        const fnNumber = index + 1;
        fn.removeAttribute('title'); 

        fn.id = `fn-ref-${fnNumber}`;
        fn.href = `#fn-${fnNumber}`;
        fn.textContent = `[${fnNumber}]`;
        fn.style.textDecoration = "none";

        const li = document.createElement('li');
        li.id = `fn-${fnNumber}`;
        li.style.marginBottom = "8px";
        li.style.display = "flex";
        li.style.alignItems = "flex-start";
        li.style.gap = "8px";
        li.innerHTML = `<a href="#fn-ref-${fnNumber}" class="fn-up-link" title="본문으로 돌아가기" style="color:var(--wiki-link); text-decoration:none; font-weight:bold;">[^]</a> <span>[${fnNumber}] ${tooltipText}</span>`;
        fnList.appendChild(li);
    });

    // 5. 문서 하단에 삽입
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.parentNode.insertBefore(fnSection, footerContainer);
    } else {
        container.appendChild(fnSection);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // 1. 현재 페이지 정보 수집
    const pageTitle = document.title.replace(" - 효빈위키", "").trim();
    const pageUrl = window.location.pathname.split("/").pop();

    // 2. 실제 즐겨찾기 동작 함수
    function toggleBookmark(btnElement) {
        let bookmarks = JSON.parse(localStorage.getItem('hyobinBookmarks')) || [];
        const existingIndex = bookmarks.findIndex(b => b.url === pageUrl);

        if (existingIndex > -1) {
            bookmarks.splice(existingIndex, 1);
            alert('즐겨찾기에서 해제되었습니다.');
            btnElement.style.color = ''; // 색상 초기화
        } else {
            bookmarks.push({ title: pageTitle, url: pageUrl });
            alert('즐겨찾기에 추가되었습니다.');
            btnElement.style.color = '#FFCC11'; // 3호선 노란색으로 칠하기
        }
        localStorage.setItem('hyobinBookmarks', JSON.stringify(bookmarks));
    }

    // 3. 로딩 시 별 색상 칠해주는 함수
    function applyStarColor(btnElement) {
        let bookmarks = JSON.parse(localStorage.getItem('hyobinBookmarks')) || [];
        if (bookmarks.some(b => b.url === pageUrl)) {
            btnElement.style.color = '#FFCC11';
        }
    }

    // --- [작전 1] 화면 전체를 뒤져서 '★' 텍스트를 가진 녀석을 싹 다 납치한다 ---
    const allElements = document.querySelectorAll('a, div, span, button');
    let starFound = false;

    allElements.forEach(el => {
        // 자식 태그가 없고 순수하게 텍스트만 '★'인 요소를 찾음
        if (el.textContent.trim() === '★' && el.children.length === 0) {
            // a 태그일 경우 원래 걸려있던 링크(http://127.0.0.1:5501/%EC%A6%90%EA%B2%A8%EC%B0%BE%EA%B8%B0.html 같은 것) 무력화
            if (el.tagName.toLowerCase() === 'a') {
                el.href = 'javascript:void(0);'; 
            }
            
            // 즐겨찾기 기능 덮어씌우기
            el.style.cursor = 'pointer';
            el.onclick = function(e) {
                e.preventDefault(); // 기본 클릭 이벤트 차단
                toggleBookmark(el);
            };
            
            applyStarColor(el);
            starFound = true;
        }
    });

    // --- [작전 2] 화면에 '★'가 단 하나도 없다면? ---
    if (!starFound) {
        // '역사' 버튼을 찾아내서 그 옆에 기생(?)시킨다.
        const historyBtn = Array.from(allElements).find(el => el.textContent.trim() === '역사');
        
        if (historyBtn && historyBtn.parentElement) {
            // 역사 버튼과 똑같은 태그(a 혹은 div)로 새 버튼 생성
            const newStarBtn = document.createElement(historyBtn.tagName);
            newStarBtn.className = historyBtn.className; // 디자인(클래스) 그대로 복사
            newStarBtn.style.cursor = 'pointer';
            newStarBtn.textContent = '★';
            
            if (newStarBtn.tagName.toLowerCase() === 'a') {
                newStarBtn.href = 'javascript:void(0);';
            }
            
            newStarBtn.onclick = function(e) {
                e.preventDefault();
                toggleBookmark(newStarBtn);
            };
            
            // 역사 버튼 바로 뒤에 찰싹 붙이기
            historyBtn.parentElement.insertBefore(newStarBtn, historyBtn.nextSibling);
            applyStarColor(newStarBtn);
        }
    }
});

// --- [작전 3 - '최근 토론' 옆에 얌전하게 끼워넣기] ---
    
    // 1. 화면에서 '최근 토론' 텍스트를 가진 요소를 찾음
    const navElements = document.querySelectorAll('a, span, li, div');
    let targetNode = null;

    for (let el of navElements) {
        if (el.textContent.trim() === '최근 토론' && el.children.length === 0) {
            targetNode = el;
            break;
        }
    }

    // 2. '최근 토론'을 찾았다면 그 바로 옆에 추가
    if (targetNode && targetNode.parentElement) {
        const myFavLink = document.createElement('a');
        myFavLink.href = '즐겨찾기.html';
        myFavLink.innerHTML = '⭐ 내 즐겨찾기';
        
        // 주변 메뉴(대문, 최근 변경 등)와 위화감 없도록 스타일 조정
        myFavLink.style.marginLeft = '12px'; // 간격 살짝 띄우기
        myFavLink.style.color = '#ffffff'; // 상단바 흰색 텍스트와 맞춤
        myFavLink.style.textDecoration = 'none'; // 기본 밑줄 제거
        myFavLink.style.opacity = '0.9'; // 너무 튀지 않게 투명도 살짝 조절

        // 마우스 올렸을 때만 자연스럽게 강조되도록 설정
        myFavLink.onmouseover = function() { this.style.opacity = '1'; this.style.textDecoration = 'underline'; };
        myFavLink.onmouseout = function() { this.style.opacity = '0.9'; this.style.textDecoration = 'none'; };

        // '최근 토론' 버튼 바로 뒤에 살포시 얹기
        targetNode.parentElement.insertBefore(myFavLink, targetNode.nextSibling);
    }
document.addEventListener("DOMContentLoaded", function() {
    // 1. 현재 페이지 정보 수집
    const pageTitle = document.title.replace(" - 효빈위키", "").trim();
    const pageUrl = window.location.pathname.split("/").pop();

    // 2. 실제 즐겨찾기 동작 함수
    function toggleBookmark(btnElement) {
        let bookmarks = JSON.parse(localStorage.getItem('hyobinBookmarks')) || [];
        const existingIndex = bookmarks.findIndex(b => b.url === pageUrl);

        if (existingIndex > -1) {
            bookmarks.splice(existingIndex, 1);
            alert('즐겨찾기에서 해제되었습니다.');
            btnElement.style.color = ''; // 색상 초기화
        } else {
            bookmarks.push({ title: pageTitle, url: pageUrl });
            alert('즐겨찾기에 추가되었습니다.');
            btnElement.style.color = '#FFCC11'; // 3호선 노란색으로 칠하기
        }
        localStorage.setItem('hyobinBookmarks', JSON.stringify(bookmarks));
    }

    // 3. 로딩 시 별 색상 칠해주는 함수
    function applyStarColor(btnElement) {
        let bookmarks = JSON.parse(localStorage.getItem('hyobinBookmarks')) || [];
        if (bookmarks.some(b => b.url === pageUrl)) {
            btnElement.style.color = '#FFCC11';
        }
    }

    // --- [작전 1] 화면 전체를 뒤져서 '★' 텍스트를 가진 녀석을 싹 다 납치한다 ---
    const allElements = document.querySelectorAll('a, div, span, button');
    let starFound = false;

    allElements.forEach(el => {
        // 자식 태그가 없고 순수하게 텍스트만 '★'인 요소를 찾음
        if (el.textContent.trim() === '★' && el.children.length === 0) {
            // a 태그일 경우 원래 걸려있던 링크(http://127.0.0.1:5501/%EC%A6%90%EA%B2%A8%EC%B0%BE%EA%B8%B0.html 같은 것) 무력화
            if (el.tagName.toLowerCase() === 'a') {
                el.href = 'javascript:void(0);'; 
            }
            
            // 즐겨찾기 기능 덮어씌우기
            el.style.cursor = 'pointer';
            el.onclick = function(e) {
                e.preventDefault(); // 기본 클릭 이벤트 차단
                toggleBookmark(el);
            };
            
            applyStarColor(el);
            starFound = true;
        }
    });

    // --- [작전 2] 화면에 '★'가 단 하나도 없다면? ---
    if (!starFound) {
        // '역사' 버튼을 찾아내서 그 옆에 기생(?)시킨다.
        const historyBtn = Array.from(allElements).find(el => el.textContent.trim() === '역사');
        
        if (historyBtn && historyBtn.parentElement) {
            // 역사 버튼과 똑같은 태그(a 혹은 div)로 새 버튼 생성
            const newStarBtn = document.createElement(historyBtn.tagName);
            newStarBtn.className = historyBtn.className; // 디자인(클래스) 그대로 복사
            newStarBtn.style.cursor = 'pointer';
            newStarBtn.textContent = '★';
            
            if (newStarBtn.tagName.toLowerCase() === 'a') {
                newStarBtn.href = 'javascript:void(0);';
            }
            
            newStarBtn.onclick = function(e) {
                e.preventDefault();
                toggleBookmark(newStarBtn);
            };
            
            // 역사 버튼 바로 뒤에 찰싹 붙이기
            historyBtn.parentElement.insertBefore(newStarBtn, historyBtn.nextSibling);
            applyStarColor(newStarBtn);
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const pageTitle = document.title.replace(" - 효빈위키", "").trim();
    const pageUrl = decodeURIComponent(window.location.pathname.split("/").pop());

    // 1. HTML 태그 다 무시하고 '순수 텍스트'만 냄새 맡고 추적하는 사냥개(TreeWalker) 소환
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let targetNode = null;

    while (walker.nextNode()) {
        const node = walker.currentNode;
        const text = node.nodeValue.trim();
        
        // 텍스트가 '☆'나 '★'로 시작하고, 상단 네비게이션 바(<nav>) 안에 있지 않은 놈을 적발!
        if ((text.startsWith('☆') || text.startsWith('★')) && !node.parentElement.closest('nav')) {
            targetNode = node;
            break; // 찾았으면 추적 종료
        }
    }

    // 2. 범인(별 모양 텍스트)을 찾았다면, 그 글자 자체를 뽑아버리고 버튼으로 개조해서 끼워넣음
    if (targetNode) {
        const originalText = targetNode.nodeValue.trim();
        const numText = originalText.replace(/[☆★]/g, ''); // 뒤에 붙은 숫자나 공백만 분리
        
        // 새롭게 기능을 부여할 span 태그 창조
        const starBtn = document.createElement('span');
        starBtn.style.cursor = 'pointer';
        starBtn.style.display = 'inline-block';
        
        // 혹시 그 글자가 이미 a 태그 안에 있었다면 링크 기능부터 박살냄 (딴 데로 날아가는 것 방지)
        if (targetNode.parentElement.tagName.toLowerCase() === 'a') {
            targetNode.parentElement.href = 'javascript:void(0);';
            targetNode.parentElement.onclick = function(e) { e.preventDefault(); };
        }

        // 즐겨찾기 상태 판별 및 색상(3호선 노란색) 칠하기
        let bookmarks = JSON.parse(localStorage.getItem('hyobinBookmarks')) || [];
        if (bookmarks.some(b => b.url === pageUrl)) {
            starBtn.textContent = '★' + numText;
            starBtn.style.color = '#FFCC11'; 
        } else {
            starBtn.textContent = '☆' + numText;
        }

        // 클릭 이벤트 주입
        starBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // 오작동 방지 절대 방어막
            
            let currentBookmarks = JSON.parse(localStorage.getItem('hyobinBookmarks')) || [];
            const existingIndex = currentBookmarks.findIndex(b => b.url === pageUrl);

            if (existingIndex > -1) {
                currentBookmarks.splice(existingIndex, 1);
                alert('즐겨찾기에서 해제되었습니다.');
                starBtn.textContent = '☆' + numText;
                starBtn.style.color = ''; 
            } else {
                currentBookmarks.push({ title: pageTitle, url: pageUrl });
                alert('즐겨찾기에 추가되었습니다.');
                starBtn.textContent = '★' + numText;
                starBtn.style.color = '#FFCC11'; 
            }
            
            localStorage.setItem('hyobinBookmarks', JSON.stringify(currentBookmarks));
        });

        // 원본 문서에 있던 아무 기능 없던 '☆' 텍스트를 뽑아버리고, 우리가 만든 강력한 새 버튼으로 교체!
        targetNode.parentNode.replaceChild(starBtn, targetNode);
    }
});document.addEventListener("DOMContentLoaded", function() {
    const pageTitle = document.title.replace(" - 효빈위키", "").trim();
    const pageUrl = decodeURIComponent(window.location.pathname.split("/").pop());

    // 1. 별 모양 찾기 (기존 로직)
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let targetNode = null;
    let isNewInsertion = false; // 별이 없어서 무에서 유를 창조해야 하는 상황인지 체크

    while (walker.nextNode()) {
        const node = walker.currentNode;
        const text = node.nodeValue.trim();
        // 상단바(nav)에 있는 별은 건너뛰고 본문 별만 타겟팅
        if ((text.startsWith('☆') || text.startsWith('★')) && !node.parentElement.closest('nav')) {
            targetNode = node;
            break;
        }
    }

    // 2. 맙소사, 별이 아예 없다! -> '역사' 버튼을 멱살 잡고 찾아내기
    let historyBtn = null;
    if (!targetNode) {
        const allElements = document.querySelectorAll('a, button, span, div');
        for (let el of allElements) {
            // 상단바(nav)가 아닌 곳에 있는 '역사' 버튼 적발
            if (el.textContent.trim() === '역사' && !el.closest('nav')) {
                historyBtn = el;
                isNewInsertion = true;
                break;
            }
        }
    }

    // 3. 별을 찾았거나, '역사' 버튼을 찾았다면 작업 시작
    if (targetNode || historyBtn) {
        let numText = '';
        if (targetNode) {
            numText = targetNode.nodeValue.trim().replace(/[☆★]/g, ''); // 뒤에 숫자 있으면 보존
        }

        // 새롭게 만들(혹은 교체할) a 태그 창조
        const starBtn = document.createElement('a');
        starBtn.style.cursor = 'pointer';
        starBtn.href = 'javascript:void(0);'; // 클릭 시 엉뚱한 데로 안 날아가게 고정
        
        // ★ 핵심: 기존 버튼과 위화감이 없도록 '역사' 버튼의 클래스(디자인)를 그대로 베껴옴
        if (historyBtn) {
            starBtn.className = historyBtn.className;
        } else if (targetNode && targetNode.parentElement.tagName.toLowerCase() === 'a') {
            starBtn.className = targetNode.parentElement.className;
        } else if (targetNode) {
            starBtn.className = 'wiki-btn'; // 최후의 보루
        }

        // 로컬 스토리지 확인해서 색상 및 모양 결정
        let bookmarks = JSON.parse(localStorage.getItem('hyobinBookmarks')) || [];
        if (bookmarks.some(b => b.url === pageUrl)) {
            starBtn.textContent = '★' + numText;
            starBtn.style.color = '#FFCC11'; // 3호선 노란색
        } else {
            starBtn.textContent = '☆' + numText;
        }

        // 클릭 이벤트 (즐겨찾기 토글)
        starBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); 
            
            let currentBookmarks = JSON.parse(localStorage.getItem('hyobinBookmarks')) || [];
            const existingIndex = currentBookmarks.findIndex(b => b.url === pageUrl);

            if (existingIndex > -1) {
                currentBookmarks.splice(existingIndex, 1);
                alert('즐겨찾기에서 해제되었습니다.');
                starBtn.textContent = '☆' + numText;
                starBtn.style.color = ''; 
            } else {
                currentBookmarks.push({ title: pageTitle, url: pageUrl });
                alert('즐겨찾기에 추가되었습니다.');
                starBtn.textContent = '★' + numText;
                starBtn.style.color = '#FFCC11'; 
            }
            
            localStorage.setItem('hyobinBookmarks', JSON.stringify(currentBookmarks));
        });

        // 4. 화면에 적용하기
        if (isNewInsertion && historyBtn) {
            // 별이 없어서 새로 만든 경우 -> '역사' 버튼 바로 뒤에 찰싹 붙여넣기
            historyBtn.parentNode.insertBefore(starBtn, historyBtn.nextSibling);
        } else if (targetNode) {
            // 기존에 별이 있던 경우 -> 기존 낡은 별을 뽑아버리고 새 별로 교체
            if (targetNode.parentElement.tagName.toLowerCase() === 'a') {
                 targetNode.parentElement.replaceWith(starBtn); 
            } else {
                 targetNode.parentNode.replaceChild(starBtn, targetNode);
            }
        }
    }
});