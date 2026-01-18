/* HyobinWiki Core Search (aliases + autocomplete)
   - Works on static HTML (no server required)
   - Requires: wiki_index.js (optional but recommended)
   Usage on every page:
     <script src="assets/wiki_index.js"></script>
     <script src="assets/hb_wiki_core.js"></script>
*/

(function(){
  "use strict";

  // ---------- utils ----------
  function norm(s){ return (s||"").toString().trim(); }
  // '_' and spaces are treated the same
  function toKey(s){
    return norm(s)
      .replace(/_/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }
  function toCompactKey(s){
    return toKey(s).replace(/\s+/g, "");
  }
  function hrefBaseName(href){
    try{
      const h = (href||"").split("?")[0].split("#")[0];
      const base = h.replace(/^.*\//, "").replace(/\.html$/i, "");
      return decodeURIComponent(base);
    }catch(e){
      return (href||"").replace(/^.*\//, "").replace(/\.html.*$/i, "");
    }
  }

  // ---------- page index ----------
  function collectWikiLinksFallback(){
    const a = Array.from(document.querySelectorAll("a[href]"));
    const seen = new Set();
    const list = [];
    a.forEach(el=>{
      const href = el.getAttribute("href") || "";
      if(/^https?:\/\//i.test(href)) return;
      if(href.startsWith("#")) return;
      if(!/\.html(\?|#|$)/i.test(href)) return;

      const base = hrefBaseName(href);
      const titleText = norm(el.textContent);
      const title = titleText || base.replace(/_/g," ").trim();
      const key = toKey(title);
      const uniq = key+"|"+href;
      if(seen.has(uniq)) return;
      seen.add(uniq);
      list.push({ title, href });
    });
    return list;
  }

  const PAGES = Array.isArray(window.HB_WIKI_PAGES) && window.HB_WIKI_PAGES.length
    ? window.HB_WIKI_PAGES
    : collectWikiLinksFallback();

  // ---------- aliases ----------
  // You can also add ad-hoc aliases in any page before this script loads:
  //   window.HB_WIKI_ALIASES = { "line1": "1호선.html", ... }
  const RAW_ALIASES = window.HB_WIKI_ALIASES || {};

  // normalized alias maps for fast lookup
  const ALIAS_KEY_MAP = Object.create(null);
  const ALIAS_COMPACT_MAP = Object.create(null);

  function addAlias(alias, href){
    const a = norm(alias);
    const h = norm(href);
    if(!a || !h) return;
    ALIAS_KEY_MAP[toKey(a)] = h;
    ALIAS_COMPACT_MAP[toCompactKey(a)] = h;
  }

  Object.keys(RAW_ALIASES).forEach(k=> addAlias(k, RAW_ALIASES[k]));

  // also add titles as aliases, so "파일명/표기변형"에 강해짐
  PAGES.forEach(p=>{
    addAlias(p.title, p.href);
    const base = hrefBaseName(p.href);
    addAlias(base, p.href);
    addAlias(base.replace(/_/g," "), p.href);
  });

  function resolveAlias(q){
    const k = toKey(q);
    if(ALIAS_KEY_MAP[k]) return ALIAS_KEY_MAP[k];
    const ck = toCompactKey(q);
    if(ALIAS_COMPACT_MAP[ck]) return ALIAS_COMPACT_MAP[ck];
    return null;
  }

  // ---------- scoring ----------
  function score(page, q){
    const qk = toKey(q);
    const qc = toCompactKey(q);
    const tk = toKey(page.title);
    const tc = toCompactKey(page.title);
    const bk = toKey(hrefBaseName(page.href));
    const bc = toCompactKey(hrefBaseName(page.href));

    if(!qk) return 0;

    if(tk === qk || bk === qk) return 120;
    if(tk.startsWith(qk) || bk.startsWith(qk)) return 80;
    if(tk.includes(qk) || bk.includes(qk)) return 55;

    if(qc && (tc.includes(qc) || bc.includes(qc))) return 35;

    return 0;
  }

  // ---------- recent searches ----------
  const MAX_RECENT = 8;
  const RECENT_KEY = "hb_recent_searches";

  function loadRecent(){
    try{ return JSON.parse(localStorage.getItem(RECENT_KEY)||"[]") || []; }catch(e){ return []; }
  }
  function saveRecent(list){
    try{ localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0,MAX_RECENT))); }catch(e){}
  }
  function pushRecent(q){
    q = norm(q);
    if(!q) return;
    const k = toKey(q);
    const list = loadRecent().filter(x=>toKey(x)!==k);
    list.unshift(q);
    saveRecent(list);
  }

  // ---------- UI helpers ----------
  function ensureDropdown(input, wrap){
    const wrapEl = wrap || input.parentElement;
    if(wrapEl && getComputedStyle(wrapEl).position === "static") wrapEl.style.position = "relative";

    let dd = wrapEl.querySelector(`.hb-autocomplete[data-for="${input.id}"]`);
    if(!dd){
      dd = document.createElement("div");
      dd.className = "hb-autocomplete";
      dd.dataset.for = input.id;
      dd.style.position = "absolute";
      dd.style.left = "0";
      dd.style.right = "0";
      dd.style.top = "100%";
      dd.style.marginTop = "8px";
      dd.style.background = "var(--wiki-box-bg, white)";
      dd.style.border = "1px solid rgba(0,0,0,0.12)";
      dd.style.borderRadius = "12px";
      dd.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
      dd.style.overflow = "hidden";
      dd.style.zIndex = "9999";
      dd.style.maxHeight = "280px";
      dd.style.overflowY = "auto";
      dd.style.display = "none";
      wrapEl.appendChild(dd);
    }
    return dd;
  }
  function hide(dd){ if(dd) dd.style.display = "none"; }
  function show(dd){ if(dd) dd.style.display = "block"; }

  function renderDropdown(dd, input, q){
    dd.innerHTML = "";
    const query = norm(q);
    const recent = loadRecent();

    const mkRow = (label, cb, muted=false, rightText="") => {
      const row = document.createElement("button");
      row.type = "button";
      row.style.display = "flex";
      row.style.width = "100%";
      row.style.alignItems = "center";
      row.style.justifyContent = "space-between";
      row.style.gap = "12px";
      row.style.padding = "10px 12px";
      row.style.fontSize = "13px";
      row.style.background = "var(--wiki-box-bg, white)";
      row.style.border = "0";
      row.style.textAlign = "left";
      row.style.cursor = muted ? "default" : "pointer";
      row.onmouseenter = ()=>{ if(!muted) row.style.background = "rgba(0,0,0,0.04)"; };
      row.onmouseleave = ()=>{ row.style.background = "var(--wiki-box-bg, white)"; };
      row.innerHTML = `
        <span style="color:${muted?'#888':'var(--wiki-text, #111)'}">${label}</span>
        ${rightText ? `<span style="font-size:11px; color:#888;">${rightText}</span>` : ""}
      `;
      if(!muted) row.addEventListener("click", cb);
      dd.appendChild(row);
      return row;
    };

    if(!query){
      const head = mkRow("최근 검색어", ()=>{}, true);
      head.style.fontWeight = "900";
      if(recent.length===0){
        mkRow("검색어를 입력하세요", ()=>{}, true);
      }else{
        recent.forEach(r=>{
          mkRow(r, ()=>{ input.value=r; window.handleSearch(input.id); });
        });
        const clear = mkRow("최근 검색어 지우기", ()=>{
          saveRecent([]);
          renderDropdown(dd,input,"");
        });
        clear.style.color = "#b91c1c";
      }
      show(dd);
      return;
    }

    // alias hit shown first if exists
    const aliasHref = resolveAlias(query);
    if(aliasHref){
      mkRow(`↪ 별칭: ${query}`, ()=>{
        pushRecent(query);
        location.href = aliasHref;
      }, false, aliasHref).style.fontWeight = "900";
    }

    const matches = PAGES
      .map(p=>({p, s: score(p, query)}))
      .filter(x=>x.s>0)
      .sort((a,b)=> b.s-a.s || a.p.title.localeCompare(b.p.title,'ko'))
      .slice(0, 10)
      .map(x=>x.p);

    if(matches.length===0){
      mkRow("일치하는 문서가 없습니다", ()=>{}, true);
    }else{
      matches.forEach(p=>{
        mkRow(p.title, ()=>{
          pushRecent(query);
          location.href = p.href;
        }, false, p.href);
      });
    }
    show(dd);
  }

  function showModalResults(query, items){
    let modal = document.getElementById("hb-search-modal");
    if(!modal){
      modal = document.createElement("div");
      modal.id = "hb-search-modal";
      modal.style.position="fixed";
      modal.style.inset="0";
      modal.style.background="rgba(0,0,0,0.4)";
      modal.style.zIndex="10000";
      modal.style.display="none";
      modal.innerHTML = `
        <div data-close="1" style="position:absolute; inset:0;"></div>
        <div style="position:relative; margin:80px auto 0; width:min(820px,94vw); background:var(--wiki-box-bg, white); color:var(--wiki-text, #111); border-radius:18px; overflow:hidden; box-shadow:0 20px 50px rgba(0,0,0,0.35); border:1px solid rgba(0,0,0,0.08);">
          <div style="display:flex; align-items:center; justify-content:space-between; padding:12px 14px; border-bottom:1px solid rgba(0,0,0,0.08);">
            <div style="font-weight:900; font-size:14px;">검색 결과</div>
            <button type="button" data-close="1" style="padding:6px 10px; border-radius:10px; border:0; background:rgba(0,0,0,0.04); cursor:pointer; color:inherit;">닫기</button>
          </div>
          <div style="padding:12px 14px;">
            <div id="hb-search-meta" style="font-size:12px; color:#888; margin-bottom:10px;"></div>
            <div id="hb-search-list" style="border-top:1px solid rgba(0,0,0,0.06);"></div>
          </div>
        </div>
      `;
      modal.addEventListener("click", (e)=>{
        const t = e.target;
        if(t && t.getAttribute && t.getAttribute("data-close")==="1") close();
      });
      document.body.appendChild(modal);
    }

    const meta = modal.querySelector("#hb-search-meta");
    const list = modal.querySelector("#hb-search-list");
    meta.textContent = `“${query}” 결과 ${items.length}건`;
    list.innerHTML = "";

    if(items.length===0){
      const empty = document.createElement("div");
      empty.style.padding="12px 0";
      empty.style.color="#888";
      empty.style.fontSize="13px";
      empty.textContent="일치하는 문서가 없습니다.";
      list.appendChild(empty);
    }else{
      items.slice(0,30).forEach(p=>{
        const row = document.createElement("a");
        row.href = p.href;
        row.style.display="block";
        row.style.padding="12px 6px";
        row.style.textDecoration="none";
        row.style.color="inherit";
        row.style.borderBottom="1px solid rgba(0,0,0,0.06)";
        row.innerHTML = `
          <div style="font-weight:900; margin-bottom:3px;">${p.title}</div>
          <div style="font-size:12px; color:#888;">${p.href}</div>
        `;
        list.appendChild(row);
      });
    }

    function open(){ modal.style.display="block"; document.body.style.overflow="hidden"; }
    function close(){ modal.style.display="none"; document.body.style.overflow=""; }
    modal._hbClose = close;
    open();
  }

  // ---------- main search ----------
  window.handleSearch = function(inputId){
    const input = document.getElementById(inputId);
    if(!input) return;
    const qRaw = norm(input.value);
    if(!qRaw) return;

    // bus shortcut rule
    if(/^\d+$/.test(qRaw)){
      pushRecent(qRaw);
      location.href = `bus_${qRaw}.html`;
      return;
    }

    // alias redirect first
    const aliasHref = resolveAlias(qRaw);
    if(aliasHref){
      pushRecent(qRaw);
      location.href = aliasHref;
      return;
    }

    // exact match (title/file)
    const qk = toKey(qRaw);
    const exact = PAGES.find(p=>{
      const tk = toKey(p.title);
      const bk = toKey(hrefBaseName(p.href));
      return tk===qk || bk===qk;
    });
    if(exact){
      pushRecent(qRaw);
      location.href = exact.href;
      return;
    }

    // partial matches -> modal
    const matches = PAGES
      .map(p=>({p, s: score(p, qRaw)}))
      .filter(x=>x.s>0)
      .sort((a,b)=> b.s-a.s || a.p.title.localeCompare(b.p.title,'ko'))
      .map(x=>x.p);

    pushRecent(qRaw);

    if(matches.length===0){
      // fallback: turn spaces into underscores for filename style
      const file = qRaw.replace(/\s+/g, "_");
      location.href = `${encodeURIComponent(file)}.html`;
      return;
    }
    showModalResults(qRaw, matches);
  };

  function attachAutocomplete(inputId, wrapId){
    const input = document.getElementById(inputId);
    if(!input) return;
    const wrap = wrapId ? document.getElementById(wrapId) : input.parentElement;
    const dd = ensureDropdown(input, wrap);

    input.addEventListener("keydown", (e)=>{
      if(e.key==="Enter"){
        e.preventDefault();
        hide(dd);
        window.handleSearch(input.id);
      }else if(e.key==="Escape"){
        hide(dd);
        input.blur();
      }
    });

    input.addEventListener("input", ()=> renderDropdown(dd, input, input.value));
    input.addEventListener("focus", ()=> renderDropdown(dd, input, input.value));

    document.addEventListener("click", (e)=>{
      if(!e.target) return;
      if(wrap && wrap.contains(e.target)) return;
      hide(dd);
    });
  }

  // auto-attach to common ids (safe on any page)
  attachAutocomplete("headerSearchInput", "hb-header-search-wrap");
  attachAutocomplete("mainSearchInput", "hb-main-search-wrap");

})();
