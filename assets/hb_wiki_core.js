/* [강제 이동 치트키: 교차로/학교 납치 완벽 차단 버전] */
(function(){
    try {
        var path = decodeURIComponent(window.location.pathname);
        if (path.indexOf("효빈위키_대문") > -1 || path.indexOf("효빈위키 대문") > -1) {
            window.location.replace("index.html");
        }
    } catch(e) {}
})();

// =====================================================================
// 🚨 [추가된 절대 방어막] 버스 문서의 지하철 뱃지 & 정류장 링크 납치 원천 차단 
// =====================================================================
document.addEventListener("click", function(e) {
    var target = e.target.closest("a");
    if (!target) return;

    if (target.classList.contains("subway-badge-rect") || target.classList.contains("subway-badge")) {
        e.preventDefault();
        e.stopPropagation(); 
        var station = "";
        if (target.childNodes.length > 1) {
            station = target.childNodes[1].textContent.trim();
        } else {
            station = target.innerText.replace(/^[A-Za-z0-9가-힣]+\s*/, "").trim(); 
        }
        station = station.replace("역", "");
        window.location.href = station + "역.html";
        return;
    }

    if (target.closest(".stop-item")) {
        e.preventDefault();
        e.stopPropagation();
        var station = target.innerText.trim().replace("역", "");
        window.location.href = station + "역.html";
        return;
    }
}, true);

/* HyobinWiki Core - THE FINAL ULTIMATE PATH-SENSITIVE VERSION (WITH FUSE.JS) */
(function(){
  "use strict";

  var TEMPLATE_STATIONS = ["조천산", "화주", "덕남대", "영목", "주기", "덕남도청", "규암로2가", "박현", "우격", "조전", "조전구청", "삼은", "주성", "원명중앙", "신도"];
  var isSubFolder = window.location.pathname.indexOf('/secret_docs/') > -1;

  function resolvePath(targetHref) {
      if (!targetHref) return "";
      if (targetHref.startsWith('http') || targetHref.startsWith('/') || targetHref.startsWith('?')) return targetHref;
      if (!isSubFolder) return targetHref;
      if (targetHref.indexOf('secret_docs/') > -1) {
          return targetHref.split('/').pop(); 
      } else {
          return '../' + targetHref;
      }
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

  // 🚀 Fuse.js 전역 인스턴스 (한 번만 로드)
  let wikiFuseEngine = null;
  function initFuseEngine(dbPages) {
      if (wikiFuseEngine || typeof Fuse === 'undefined') return;
      wikiFuseEngine = new Fuse(dbPages, {
          keys: ["title"],
          threshold: 0.35, // 오타 허용치 (0.35면 적당함)
          includeScore: true
      });
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
      initFuseEngine(db.pages);

      // 1순위: 하드코딩된 ALIAS 정확한 일치
      if (db.aliases[originalQuery]) {
          saveRecent(originalQuery);
          location.href = resolvePath(db.aliases[originalQuery]);
          return;
      }
      if (db.aliases[originalQuery + ".html"]) {
          saveRecent(originalQuery);
          location.href = resolvePath(db.aliases[originalQuery + ".html"]);
          return;
      }
      if (hasYeok && db.aliases[cleanQuery]) {
          saveRecent(originalQuery);
          location.href = resolvePath(db.aliases[cleanQuery]);
          return;
      }

      // 2순위: 템플릿 역
      if (TEMPLATE_STATIONS.indexOf(originalQuery) > -1 || TEMPLATE_STATIONS.indexOf(cleanQuery) > -1) {
          var matchedTemplate = TEMPLATE_STATIONS.indexOf(originalQuery) > -1 ? originalQuery : cleanQuery;
          saveRecent(originalQuery);
          location.href = resolvePath(encodeURI("덕주1호선_역사_템플릿.html") + "?station=" + encodeURIComponent(matchedTemplate));
          return;
      }

      // 3순위: Fuse.js 퍼지 검색 (오타 교정)
      if (wikiFuseEngine) {
          var searchTarget = hasYeok ? cleanQuery : originalQuery;
          var results = wikiFuseEngine.search(searchTarget);
          
          if (results.length > 0) {
              var bestMatch = results[0].item;
              saveRecent(originalQuery);
              location.href = resolvePath(bestMatch.href);
              return;
          }
          
          // '역'을 붙이거나 뗀 결과도 한 번 더 찾아봄
          var altTarget = hasYeok ? originalQuery : originalQuery + "역";
          var altResults = wikiFuseEngine.search(altTarget);
          if (altResults.length > 0) {
              var altBestMatch = altResults[0].item;
              saveRecent(originalQuery);
              location.href = resolvePath(altBestMatch.href);
              return;
          }
      }

      // 4순위: 없으면 검색 페이지로 토스
      saveRecent(originalQuery);
      var searchUrl = "효빈위키 검색.html?q=" + encodeURIComponent(originalQuery);
      location.href = resolvePath(searchUrl);
  }

  window.handleSearch = function(inputId){
    var input = document.getElementById(inputId || 'searchInput');
    if(input) performSmartMove(input.value.trim()); 
  };

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
    if (document.getElementById('hb-quick-nav')) return;

    const style = document.createElement('style');
    style.innerHTML = `
        .hb-quick-nav { position: fixed; bottom: 30px; right: 30px; display: flex; flex-direction: column; gap: 12px; z-index: 99999; }
        .hb-quick-nav-btn { background: #ffffff; border: 1px solid #e5e7eb; color: #4b5563; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; transition: all 0.2s ease; }
        .hb-quick-nav-btn:hover { background: #f3f4f6; color: #111827; }
        .hb-quick-nav-list { border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
        .hb-quick-nav-group { display: flex; flex-direction: column; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); overflow: hidden; border: 1px solid #e5e7eb; }
        .hb-quick-nav-group .hb-quick-nav-btn { border: none; border-bottom: 1px solid #e5e7eb; border-radius: 0; box-shadow: none; }
        .hb-quick-nav-group .hb-quick-nav-btn:last-child { border-bottom: none; }
    `;
    document.head.appendChild(style);

    const nav = document.createElement('div');
    nav.className = 'hb-quick-nav';
    nav.id = 'hb-quick-nav';

    const listBtn = document.createElement('button');
    listBtn.className = 'hb-quick-nav-btn hb-quick-nav-list';
    listBtn.title = '목차로 이동';
    listBtn.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>';
    
    listBtn.onclick = function() {
        const toc = document.querySelector('#toc-box, .toc, #toc');
        if (toc) {
            const y = toc.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    };

    const group = document.createElement('div');
    group.className = 'hb-quick-nav-group';

    const upBtn = document.createElement('button');
    upBtn.className = 'hb-quick-nav-btn';
    upBtn.title = '맨 위로';
    upBtn.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>';
    upBtn.onclick = function() { window.scrollTo({top: 0, behavior: 'smooth'}); };

    const downBtn = document.createElement('button');
    downBtn.className = 'hb-quick-nav-btn';
    downBtn.title = '맨 아래로';
    downBtn.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>';
    downBtn.onclick = function() { window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'}); };

    group.appendChild(upBtn);
    group.appendChild(downBtn);
    nav.appendChild(listBtn);
    nav.appendChild(group);
    document.body.appendChild(nav);
});

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.wiki-footnote-section') || document.getElementById('footnote-list')) return;
    const container = document.querySelector('.wiki-container');
    if (!container) return;

    const rawFootnotes = container.querySelectorAll('.wiki-fn, .wiki-tooltip, .wiki-tooltip-trigger, .fn-ref, .wiki-fn-link, .wiki-fn-trigger, .fn-link, .sup-ref, .custom-fn-link, .footnote-link, .footnote-ref, a[title], span[title], sup[onclick*="wiki-footnote-tooltip"], span[onclick*="wiki-footnote-tooltip"], [data-note]');
    
    const footnotes = Array.from(rawFootnotes).filter(fn => {
        if (fn.closest('.action-group') || fn.closest('nav') || fn.classList.contains('action-btn') || fn.getAttribute('href') === '즐겨찾기.html') return false;
        if (fn.classList.contains('fn-backlink') || fn.classList.contains('footnote-back') || fn.classList.contains('back-link')) return false;
        
        const hasData = fn.hasAttribute('data-tooltip') || fn.hasAttribute('title') || fn.hasAttribute('data-note') || (fn.hasAttribute('onclick') && fn.getAttribute('onclick').includes('innerHTML'));
        if (!hasData) return false;

        const isOfficialFnClass = fn.matches('.wiki-fn, .wiki-tooltip, .wiki-tooltip-trigger, .fn-ref, .wiki-fn-link, .wiki-fn-trigger, .fn-link, .sup-ref, .custom-fn-link, .footnote-link, .footnote-ref, [data-note], sup[onclick*="wiki-footnote-tooltip"], span[onclick*="wiki-footnote-tooltip"]');
        const textStr = fn.textContent.trim();
        const looksLikeFnText = (textStr.startsWith('[') && textStr.endsWith(']')) || textStr === '*' || textStr === '';
        
        if (!isOfficialFnClass && !looksLikeFnText) return false; 
        return true;
    });

    if (footnotes.length === 0) return; 

    const fnSection = document.createElement('div');
    fnSection.className = 'wiki-footnote-section';
    fnSection.style.marginTop = "40px";
    fnSection.style.paddingTop = "20px";
    fnSection.style.borderTop = "1px solid var(--wiki-border)";
    fnSection.innerHTML = '<h2 class="wiki-heading-2" style="margin-top:0; border-bottom:none;">각주</h2><ul class="wiki-footnote-list" style="list-style:none; padding-left:0; font-size:0.85rem; color:var(--wiki-text);"></ul>';
    
    const fnList = fnSection.querySelector('.wiki-footnote-list');

    footnotes.forEach((fn, index) => {
        let tooltipText = fn.getAttribute('data-tooltip') || fn.getAttribute('data-note') || fn.getAttribute('title');

        if (!tooltipText && fn.hasAttribute('onclick')) {
            const match = fn.getAttribute('onclick').match(/innerHTML\s*=\s*'([^']+)'/);
            if (match) tooltipText = match[1];
            else tooltipText = "내용 없음"; 
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

    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.parentNode.insertBefore(fnSection, footerContainer);
    } else {
        container.appendChild(fnSection);
    }
});

// 즐겨찾기 로직 1 (버튼 강제 생성)
document.addEventListener("DOMContentLoaded", function() {
    const pageTitle = document.title.replace(" - 효빈위키", "").trim();
    const pageUrl = window.location.pathname.split("/").pop();

    function toggleBookmark(btnElement) {
        let bookmarks = JSON.parse(localStorage.getItem('hyobinBookmarks')) || [];
        const existingIndex = bookmarks.findIndex(b => b.url === pageUrl);

        if (existingIndex > -1) {
            bookmarks.splice(existingIndex, 1);
            alert('즐겨찾기에서 해제되었습니다.');
            btnElement.style.color = ''; 
        } else {
            bookmarks.push({ title: pageTitle, url: pageUrl });
            alert('즐겨찾기에 추가되었습니다.');
            btnElement.style.color = '#FFCC11'; 
        }
        localStorage.setItem('hyobinBookmarks', JSON.stringify(bookmarks));
    }

    function applyStarColor(btnElement) {
        let bookmarks = JSON.parse(localStorage.getItem('hyobinBookmarks')) || [];
        if (bookmarks.some(b => b.url === pageUrl)) {
            btnElement.style.color = '#FFCC11';
        }
    }

    const allElements = document.querySelectorAll('a, div, span, button');
    let starFound = false;

    allElements.forEach(el => {
        if (el.textContent.trim() === '★' && el.children.length === 0) {
            if (el.tagName.toLowerCase() === 'a') el.href = 'javascript:void(0);'; 
            el.style.cursor = 'pointer';
            el.onclick = function(e) {
                e.preventDefault(); 
                toggleBookmark(el);
            };
            applyStarColor(el);
            starFound = true;
        }
    });

    if (!starFound) {
        const historyBtn = Array.from(allElements).find(el => el.textContent.trim() === '역사');
        if (historyBtn && historyBtn.parentElement) {
            const newStarBtn = document.createElement(historyBtn.tagName);
            newStarBtn.className = historyBtn.className; 
            newStarBtn.style.cursor = 'pointer';
            newStarBtn.textContent = '★';
            
            if (newStarBtn.tagName.toLowerCase() === 'a') {
                newStarBtn.href = 'javascript:void(0);';
            }
            newStarBtn.onclick = function(e) {
                e.preventDefault();
                toggleBookmark(newStarBtn);
            };
            historyBtn.parentElement.insertBefore(newStarBtn, historyBtn.nextSibling);
            applyStarColor(newStarBtn);
        }
    }
});

// 내 즐겨찾기 메뉴 추가
document.addEventListener("DOMContentLoaded", function() {
    const navElements = document.querySelectorAll('a, span, li, div');
    let targetNode = null;

    for (let el of navElements) {
        if (el.textContent.trim() === '최근 토론' && el.children.length === 0) {
            targetNode = el;
            break;
        }
    }

    if (targetNode && targetNode.parentElement) {
        const myFavLink = document.createElement('a');
        myFavLink.href = '즐겨찾기.html';
        myFavLink.innerHTML = '⭐ 내 즐겨찾기';
        myFavLink.style.marginLeft = '12px'; 
        myFavLink.style.color = '#ffffff'; 
        myFavLink.style.textDecoration = 'none'; 
        myFavLink.style.opacity = '0.9'; 

        myFavLink.onmouseover = function() { this.style.opacity = '1'; this.style.textDecoration = 'underline'; };
        myFavLink.onmouseout = function() { this.style.opacity = '0.9'; this.style.textDecoration = 'none'; };

        targetNode.parentElement.insertBefore(myFavLink, targetNode.nextSibling);
    }
});

// 즐겨찾기 로직 2 (기존 텍스트 교체)
document.addEventListener("DOMContentLoaded", function() {
    const pageTitle = document.title.replace(" - 효빈위키", "").trim();
    const pageUrl = decodeURIComponent(window.location.pathname.split("/").pop());

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let targetNode = null;

    while (walker.nextNode()) {
        const node = walker.currentNode;
        const text = node.nodeValue.trim();
        if ((text.startsWith('☆') || text.startsWith('★')) && !node.parentElement.closest('nav')) {
            targetNode = node;
            break; 
        }
    }

    if (targetNode) {
        const originalText = targetNode.nodeValue.trim();
        const numText = originalText.replace(/[☆★]/g, ''); 
        
        const starBtn = document.createElement('span');
        starBtn.style.cursor = 'pointer';
        starBtn.style.display = 'inline-block';
        
        if (targetNode.parentElement.tagName.toLowerCase() === 'a') {
            targetNode.parentElement.href = 'javascript:void(0);';
            targetNode.parentElement.onclick = function(e) { e.preventDefault(); };
        }

        let bookmarks = JSON.parse(localStorage.getItem('hyobinBookmarks')) || [];
        if (bookmarks.some(b => b.url === pageUrl)) {
            starBtn.textContent = '★' + numText;
            starBtn.style.color = '#FFCC11'; 
        } else {
            starBtn.textContent = '☆' + numText;
        }

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

        targetNode.parentNode.replaceChild(starBtn, targetNode);
    }
});

// 즐겨찾기 로직 3 (동적 문서 지원)
document.addEventListener("DOMContentLoaded", function() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let targetNode = null;
    let isNewInsertion = false; 

    while (walker.nextNode()) {
        const node = walker.currentNode;
        const text = node.nodeValue.trim();
        if ((text.startsWith('☆') || text.startsWith('★')) && !node.parentElement.closest('nav')) {
            targetNode = node;
            break;
        }
    }

    let historyBtn = null;
    if (!targetNode) {
        const allElements = document.querySelectorAll('a, button, span, div');
        for (let el of allElements) {
            if (el.textContent.trim() === '역사' && !el.closest('nav')) {
                historyBtn = el;
                isNewInsertion = true;
                break;
            }
        }
    }

    if (targetNode || historyBtn) {
        let numText = '';
        if (targetNode) {
            numText = targetNode.nodeValue.trim().replace(/[☆★]/g, ''); 
        }

        const starBtn = document.createElement('a');
        starBtn.style.cursor = 'pointer';
        starBtn.href = 'javascript:void(0);'; 
        
        if (historyBtn) {
            starBtn.className = historyBtn.className;
        } else if (targetNode && targetNode.parentElement.tagName.toLowerCase() === 'a') {
            starBtn.className = targetNode.parentElement.className;
        } else if (targetNode) {
            starBtn.className = 'wiki-btn'; 
        }

        function getLivePageInfo() {
            const liveTitle = document.title.replace(" - 효빈위키", "").trim();
            const liveUrl = decodeURIComponent(window.location.pathname.split("/").pop() + window.location.search + window.location.hash);
            return { title: liveTitle, url: liveUrl };
        }

        function updateStarUI() {
            const info = getLivePageInfo();
            let bookmarks = JSON.parse(localStorage.getItem('hyobinBookmarks')) || [];
            
            if (bookmarks.some(b => b.url === info.url)) {
                starBtn.textContent = '★' + numText;
                starBtn.style.color = '#FFCC11'; 
            } else {
                starBtn.textContent = '☆' + numText;
                starBtn.style.color = '';
            }
        }

        window.addEventListener('hashchange', updateStarUI);
        setTimeout(updateStarUI, 200);

        starBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); 
            
            const info = getLivePageInfo(); 
            let currentBookmarks = JSON.parse(localStorage.getItem('hyobinBookmarks')) || [];
            const existingIndex = currentBookmarks.findIndex(b => b.url === info.url);

            if (existingIndex > -1) {
                currentBookmarks.splice(existingIndex, 1);
                alert(`'${info.title}' 문서를 즐겨찾기에서 해제했습니다.`);
            } else {
                currentBookmarks.push({ title: info.title, url: info.url });
                alert(`'${info.title}' 문서를 즐겨찾기에 추가했습니다!`);
            }
            
            localStorage.setItem('hyobinBookmarks', JSON.stringify(currentBookmarks));
            updateStarUI(); 
        });

        if (isNewInsertion && historyBtn) {
            historyBtn.parentNode.insertBefore(starBtn, historyBtn.nextSibling);
        } else if (targetNode) {
            if (targetNode.parentElement.tagName.toLowerCase() === 'a') {
                 targetNode.parentElement.replaceWith(starBtn); 
            } else {
                 targetNode.parentNode.replaceChild(starBtn, targetNode);
            }
        }
    }
});

// 분류(카테고리) 자동 변환
document.addEventListener("DOMContentLoaded", function() {
    const tags = document.querySelectorAll('div, p');
    tags.forEach(tag => {
        if (tag.textContent.includes('분류:') && tag.querySelectorAll('div, p').length === 0) {
            const links = tag.querySelectorAll('a');
            links.forEach(link => {
                const catName = link.innerText.trim();
                if (catName && !catName.includes('분류')) {
                    link.href = "javascript:void(0);"; 
                    link.onclick = function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        window.location.href = "분류.html#" + encodeURIComponent(catName);
                    };
                }
            });
        }
    });
});

// [dday] 치환기
function parseDdayTags() {
    const ddayRegex = /\[dday\((\d{4}-\d{2}-\d{2})\)\][^\)]*/g;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    const nodesToProcess = [];

    while (node = walker.nextNode()) {
        if (ddayRegex.test(node.nodeValue)) {
            nodesToProcess.push(node);
        }
    }

    nodesToProcess.forEach(node => {
        node.nodeValue = node.nodeValue.replace(/\[dday\((\d{4}-\d{2}-\d{2})\)\][^\)]*/g, (match, dateStr) => {
            const targetDate = new Date(dateStr);
            const today = new Date();
            
            const diffTime = today - targetDate;
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            
            let years = today.getFullYear() - targetDate.getFullYear();
            const m = today.getMonth() - targetDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < targetDate.getDate())) {
                years--;
            }
            
            return `${diffDays.toLocaleString()}일, ${years}주년`;
        });
    });
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', parseDdayTags);
} else {
    parseDdayTags();
}

// [youtube] 치환기
function convertYoutubeLinks() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
        if (node.nodeValue.includes('[youtube(')) {
            textNodes.push(node);
        }
    }
    textNodes.forEach(n => {
        const tempSpan = document.createElement('span');
        tempSpan.innerHTML = n.nodeValue.replace(/\[youtube\(([a-zA-Z0-9_\-]+)[^\]]*\)\]/gi, (match, videoId) => {
            return `<iframe width="100%" style="max-width: 560px; aspect-ratio: 16/9; border-radius: 8px; margin: 10px auto; display: inline-block;" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        });
        n.parentNode.replaceChild(tempSpan, n);
    });
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', convertYoutubeLinks);
} else {
    convertYoutubeLinks();
}