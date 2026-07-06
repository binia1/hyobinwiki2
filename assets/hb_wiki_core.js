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
      "262": "bus_261.html"
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
