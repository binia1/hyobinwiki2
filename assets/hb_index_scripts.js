// ====== [ assets/hb_index_scripts.js ] ======
// 효빈위키 대문 인라인 스크립트 분리용 (기존 파일과 독립됨, 충돌 방지 패치 완료)

// 초기 로드 시 저장된 설정 적용 (다른 스크립트의 onload를 덮어쓰지 않도록 addEventListener로 변경)
window.addEventListener('DOMContentLoaded', function() {
    // 로그인 상태 확인
    const user = localStorage.getItem('hb_user');
    if (user) {
        setLoginState(user);
    }

    // 다크모드 확인
    const isDark = localStorage.getItem('hb_dark_mode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
        const darkModeCheck = document.getElementById('darkModeCheck');
        if(darkModeCheck) darkModeCheck.checked = true;
    }

    // 폰트 크기 확인
    const fontSize = localStorage.getItem('hb_font_size');
    if (fontSize) {
        document.body.style.fontSize = fontSize + '%';
        const fontSizeRange = document.getElementById('fontSizeRange');
        const fontSizeVal = document.getElementById('fontSizeVal');
        if(fontSizeRange) fontSizeRange.value = fontSize;
        if(fontSizeVal) fontSizeVal.innerText = fontSize + '%';
    }
});


// 3. 맵핑
const noticeData = {};
fixedNotices.forEach(n => noticeData[n.id] = n);
randomNotices.forEach(n => noticeData[n.id] = n);

// 4. HTML에 공지사항을 그려주는 함수 (고정 5개 + 랜덤 5개 = 10개)
window.renderNotices = function() {
    const ul = document.querySelector('.notice-list');
    if(!ul) return;
    
    ul.innerHTML = ''; 

    // 고정 공지 5개 렌더링
    fixedNotices.forEach((n) => {
        let badge = '<span class="font-bold text-[#7777AA]">[필독]</span>';
        if(n.title.includes('[행사]')) badge = '<span class="font-bold text-pink-500">[행사]</span>';
        if(n.title.includes('[경고]')) badge = '<span class="font-bold text-red-500">[경고]</span>';
        if(n.title.includes('[공지]')) badge = '<span class="font-bold text-[#7777AA]">[공지]</span>';
        if(n.title.includes('[안내]')) badge = '<span class="font-bold text-gray-500">[안내]</span>';
        
        let displayTitle = n.title.replace(/\[.*?\]\s*/, '');
        ul.innerHTML += `<li onclick="openNotice('${n.id}')">${badge} ${displayTitle}</li>`;
    });

    ul.innerHTML += `<div class="border-b border-gray-200 my-2 border-dashed"></div>`;

    // 랜덤 공지 30개 중 5개 렌더링 (원래 코드 기준)
    let shuffled = [...randomNotices].sort(() => 0.5 - Math.random());
    let selectedRandoms = shuffled.slice(0, 5);

    selectedRandoms.forEach(n => {
        let badge = '<span class="font-bold text-gray-500">[안내]</span>';
        if(n.title.includes('[토론]')) badge = '<span class="font-bold text-blue-500">[토론]</span>';
        if(n.title.includes('[모집]')) badge = '<span class="font-bold text-green-600">[모집]</span>';
        if(n.title.includes('[점검]')) badge = '<span class="font-bold text-orange-500">[점검]</span>';
        if(n.title.includes('[경고]')) badge = '<span class="font-bold text-red-500">[경고]</span>';
        if(n.title.includes('[프로젝트]')) badge = '<span class="font-bold text-purple-500">[프젝]</span>';
        if(n.title.includes('[공지]')) badge = '<span class="font-bold text-[#7777AA]">[공지]</span>';
        if(n.title.includes('[수정요청]')) badge = '<span class="font-bold text-indigo-500">[수정]</span>';

        let displayTitle = n.title.replace(/\[.*?\]\s*/, ''); 
        ul.innerHTML += `<li onclick="openNotice('${n.id}')">${badge} ${displayTitle}</li>`;
    });
};

// 공지사항 열기 함수
window.openNotice = function(id) {
    const data = noticeData[id];
    if (data) {
        document.getElementById('noticeTitle').innerText = data.title;
        document.getElementById('noticeContent').innerText = data.content;
        toggleModal('noticeModal');
    }
}

// 기본 검색 기능 (숫자 입력 시 버스 문서로 이동)
function handleSearch(inputId) {
    const id = inputId || 'headerSearchInput';
    const inputElement = document.getElementById(id);
    if (!inputElement) return;
    const query = inputElement.value.trim();
    
    if (query) {
        const isNumber = /^\d+$/.test(query);
        if (isNumber) {
            window.location.href = "bus_" + query + ".html";
        } else {
            window.location.href = query + ".html";
        }
    } else {
        showMsg('문서 제목을 입력해주세요.');
    }
}

// 메시지 박스
function showMsg(text) {
    const box = document.getElementById('wiki-msg-box');
    box.innerText = text; 
    box.style.display = 'block';
    setTimeout(() => { box.style.display = 'none'; }, 2000);
}

// 모달 토글
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
        // 포커스 설정
        if(modalId === 'loginModal') {
            setTimeout(() => document.getElementById('loginId').focus(), 100);
        } else if(modalId === 'signupModal') {
            setTimeout(() => document.getElementById('signupId').focus(), 100);
        }
    }
}

// --- 회원가입 및 로그인 로직 ---
function doSignup() {
    const id = document.getElementById('signupId').value.trim();
    const pw = document.getElementById('signupPw').value;
    const pwConfirm = document.getElementById('signupPwConfirm').value;

    if (!id || !pw) {
        showMsg('아이디와 비밀번호를 모두 입력해주세요.');
        return;
    }
    if (pw !== pwConfirm) {
        showMsg('비밀번호가 일치하지 않습니다.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('hb_db_users') || '{}');

    if (users[id]) {
        showMsg('이미 존재하는 아이디입니다.');
        return;
    }

    users[id] = pw;
    localStorage.setItem('hb_db_users', JSON.stringify(users));

    showMsg('회원가입 완료! 로그인해주세요.');
    toggleModal('signupModal');
    toggleModal('loginModal');
    
    document.getElementById('loginId').value = id;
    document.getElementById('loginPw').focus();
}

function doLogin() {
    const id = document.getElementById('loginId').value.trim();
    const pw = document.getElementById('loginPw').value;

    if (!id || !pw) {
        showMsg('아이디와 비밀번호를 입력하세요.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('hb_db_users') || '{}');

    if (users.hasOwnProperty(id)) {
        if (users[id] === pw) {
            localStorage.setItem('hb_user', id);
            setLoginState(id);
            toggleModal('loginModal');
            showMsg(id + '님 환영합니다!');
        } else {
            showMsg('비밀번호가 틀렸습니다.');
        }
    } else {
        showMsg('존재하지 않는 아이디입니다. 회원가입을 해주세요.');
    }
}

function doLogout() {
    localStorage.removeItem('hb_user');
    location.reload();
}

function setLoginState(username) {
    const container = document.getElementById('auth-buttons');
    container.innerHTML = `
        <button class="bg-[#555] text-white text-xs px-2 py-0.5 rounded cursor-default">👤 ${username}</button>
        <button onclick="doLogout()" class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-0.5 rounded transition-colors">로그아웃</button>
        <button onclick="toggleModal('settingsModal')" class="bg-[#666699] hover:bg-[#555588] text-white text-xs px-2 py-0.5 rounded transition-colors">설정</button>
    `;
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('hb_dark_mode', isDark);
}

function changeFontSize(val) {
    document.body.style.fontSize = val + '%';
    document.getElementById('fontSizeVal').innerText = val + '%';
    localStorage.setItem('hb_font_size', val);
}

// 기존 window.onclick을 덮어쓰지 않도록 addEventListener로 수정
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = 'none';
    }
});

// ===== HyobinWiki Search Enhancer (index) =====
(function(){
    const MAX_RECENT = 8;
    const RECENT_KEY = "hb_recent_searches";

    function norm(s){ return (s||"").toString().trim(); }
    // 띄어쓰기까지 전부 무시하고 비교하도록 강화
    function normKey(s){ return norm(s).toLowerCase().replace(/\s+/g, ""); }

    function loadRecent(){
        try{ return JSON.parse(localStorage.getItem(RECENT_KEY)||"[]") || []; }catch(e){ return []; }
    }
    function saveRecent(list){
        try{ localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0,MAX_RECENT))); }catch(e){}
    }
    function pushRecent(q){
        q = norm(q);
        if(!q) return;
        const list = loadRecent().filter(x=>normKey(x)!==normKey(q));
        list.unshift(q);
        saveRecent(list);
    }

    function ensureDropdown(input){
        // HTML 업데이트로 mainSearchInput가 사라졌으므로, headerSearchInput에 맞춰서 설정
        const wrap = input.parentElement;
        if(wrap && getComputedStyle(wrap).position === "static") wrap.style.position = "relative";

        let dd = wrap.querySelector(".hb-autocomplete");
        if(!dd){
            dd = document.createElement("div");
            dd.className = "hb-autocomplete";
            dd.style.position = "absolute";
            // 네비게이션 바 우측에 맞춰서 드롭다운 생성 (디자인 개선)
            dd.style.right = "0";
            dd.style.left = "auto";
            dd.style.top = "100%";
            dd.style.marginTop = "8px";
            dd.style.width = "280px"; 
            dd.style.background = "white";
            dd.style.border = "1px solid rgba(0,0,0,0.12)";
            dd.style.borderRadius = "8px";
            dd.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
            dd.style.overflow = "hidden";
            dd.style.zIndex = "9999";
            dd.style.maxHeight = "280px";
            dd.style.overflowY = "auto";
            dd.style.display = "none";
            wrap.appendChild(dd);
        }
        return dd;
    }

    function hideDropdown(dd){ if(dd) dd.style.display = "none"; }
    function showDropdown(dd){ if(dd) dd.style.display = "block"; }

    // [핵심 패치] 대문 HTML 링크 대신 wiki_index.js의 1000개 데이터 전체를 긁어오도록 수정!
    function getCombinedWikiList() {
        const list = [];
        const seen = new Set();

        // 1. 원본 파일 목록 가져오기
        const pages = window.HB_WIKI_PAGES || [];
        pages.forEach(p => {
            const title = typeof p === "string" ? p : p.title;
            const href = typeof p === "string" ? p + ".html" : (p.href || p.title + ".html");
            const key = normKey(title);
            if(!seen.has(key)) {
                seen.add(key);
                list.push({title: title, href: href});
            }
        });

        // 2. 별칭(Aliases) 목록 싹 다 가져오기
        const aliases = window.HB_WIKI_ALIASES || {};
        for(let alias in aliases) {
            const href = aliases[alias];
            const key = normKey(alias);
            if(!seen.has(key)) {
                seen.add(key);
                list.push({title: alias, href: href});
            }
        }
        return list;
    }

    // 전역 변수로 검색 리스트 선언
    let WIKI_LIST = [];

    function score(item, q){
        const t = normKey(item.title);
        const k = normKey(q);
        if(!k) return 0;
        if(t === k) return 100;
        if(t.startsWith(k)) return 60;
        if(t.includes(k)) return 30;
        return 0;
    }

    function renderDropdown(dd, input, q){
        dd.innerHTML = "";
        const query = norm(q);
        const recent = loadRecent();

        const mkRow = (label, cb, muted=false) => {
            const row = document.createElement("button");
            row.type="button";
            row.style.display="flex";
            row.style.width="100%";
            row.style.alignItems="center";
            row.style.justifyContent="space-between";
            row.style.gap="12px";
            row.style.padding="10px 12px";
            row.style.fontSize="13px";
            row.style.background="white";
            row.style.border="0";
            row.style.textAlign="left";
            row.style.cursor= muted ? "default" : "pointer";
            row.onmouseenter=()=>{ if(!muted) row.style.background="rgba(0,0,0,0.04)"; };
            row.onmouseleave=()=>{ row.style.background="white"; };
            row.innerHTML = `<span style="color:${muted?'#888':'#111'}">${label}</span>`;
            if(!muted) row.addEventListener("click", cb);
            dd.appendChild(row);
            return row;
        };

        if(!query){
            mkRow("최근 검색어", ()=>{}, true).style.fontWeight="800";
            if(recent.length===0){
                mkRow("검색어를 입력하세요", ()=>{}, true);
            } else {
                recent.forEach(r=>{
                    mkRow(r, ()=>{ input.value=r; window.handleSearch(input.id); });
                });
                const clear = mkRow("최근 검색어 지우기", ()=>{
                    saveRecent([]);
                    renderDropdown(dd,input,"");
                });
                clear.style.color="#b91c1c";
            }
            showDropdown(dd);
            return;
        }

        const matches = WIKI_LIST
            .map(it=>({it, s: score(it, query)}))
            .filter(x=>x.s>0)
            .sort((a,b)=>b.s-a.s || a.it.title.localeCompare(b.it.title))
            .slice(0,8)
            .map(x=>x.it);

        if(matches.length===0){
            mkRow("일치하는 문서가 없습니다", ()=>{}, true);
        } else {
            matches.forEach(it=>{
                mkRow(it.title, ()=>{
                    pushRecent(query);
                    location.href = it.href;
                });
            });
        }
        showDropdown(dd);
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
                <div style="position:relative; margin:80px auto 0; width:min(820px,94vw); background:white; border-radius:18px; overflow:hidden; box-shadow:0 20px 50px rgba(0,0,0,0.35);">
                    <div style="display:flex; align-items:center; justify-content:space-between; padding:12px 14px; border-bottom:1px solid rgba(0,0,0,0.08);">
                        <div style="font-weight:900; font-size:14px;">검색 결과</div>
                        <button type="button" data-close="1" style="padding:6px 10px; border-radius:10px; border:0; background:rgba(0,0,0,0.04); cursor:pointer;">닫기</button>
                    </div>
                    <div style="padding:12px 14px;">
                        <div id="hb-search-meta" style="font-size:12px; color:#666; margin-bottom:10px;"></div>
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
            empty.style.color="#666";
            empty.style.fontSize="13px";
            empty.textContent = "일치하는 문서가 없습니다.";
            list.appendChild(empty);
        } else {
            items.slice(0,30).forEach(it=>{
                const row = document.createElement("a");
                row.href = it.href;
                row.style.display="block";
                row.style.padding="12px 6px";
                row.style.textDecoration="none";
                row.style.color="#111";
                row.style.borderBottom="1px solid rgba(0,0,0,0.06)";
                row.innerHTML = `<div style="font-weight:800; margin-bottom:3px;">${it.title}</div>
                                 <div style="font-size:12px; color:#666;">${it.href}</div>`;
                list.appendChild(row);
            });
        }

        function open(){ modal.style.display="block"; document.body.style.overflow="hidden"; }
        function close(){ modal.style.display="none"; document.body.style.overflow=""; }
        modal._hbClose = close;
        open();
    }

    // Override/upgrade handleSearch
    window.handleSearch = function(inputId){
        const input = document.getElementById(inputId);
        if(!input) return;
        const q = norm(input.value);
        if(!q) return;

        if(/^\d+$/.test(q)){
            pushRecent(q);
            location.href = `bus_${q}.html`;
            return;
        }

        const k = normKey(q);
        const exact = WIKI_LIST.find(it=>normKey(it.title)===k);
        if(exact){
            pushRecent(q);
            location.href = exact.href;
            return;
        }

        const matches = WIKI_LIST
            .map(it=>({it, s: score(it, q)}))
            .filter(x=>x.s>0)
            .sort((a,b)=>b.s-a.s || a.it.title.localeCompare(b.it.title))
            .map(x=>x.it);

        pushRecent(q);

        if(matches.length===0){
            location.href = `${encodeURIComponent(q)}.html`;
            return;
        }
        // 팝업 띄우는 함수 대신 효빈위키 검색.html로 이동하도록 처리
        location.href = encodeURI("효빈위키 검색.html") + "?q=" + encodeURIComponent(q);
    };

    // DOMContentLoaded 이후 바인딩
    window.addEventListener('DOMContentLoaded', () => {
        // [핵심 패치] 페이지 로드가 끝나면 DB를 전부 읽어서 WIKI_LIST 세팅!
        setTimeout(() => {
            WIKI_LIST = getCombinedWikiList();
        }, 100);

        // 중앙 검색창 대신 상단 네비게이션 검색창을 타겟으로 지정
        const input = document.getElementById("headerSearchInput");
        if(!input) return;
        const dd = ensureDropdown(input);

        input.addEventListener("keydown", (e)=>{
            if(e.key==="Enter"){
                e.preventDefault();
                hideDropdown(dd);
                window.handleSearch(input.id);
            } else if(e.key==="Escape"){
                hideDropdown(dd);
                input.blur();
            }
        });

        input.addEventListener("input", ()=>{
            renderDropdown(dd, input, input.value);
        });
        input.addEventListener("focus", ()=>{
            renderDropdown(dd, input, input.value);
        });

        document.addEventListener("click", (e)=>{
            if(!e.target) return;
            const wrap = input.parentElement;
            if(wrap && wrap.contains(e.target)) return;
            hideDropdown(dd);
        });
    });
})();

// ====== [ 자동 추천 문서 & 최근 변경 내역 & 인기 검색어 (랜덤 시뮬레이션) ] ======

// 배열에서 원하는 개수만큼 중복 없이 랜덤으로 뽑아주는 함수
function getRandomDocs(count) {
    if (!window.HB_WIKI_PAGES || window.HB_WIKI_PAGES.length === 0) return [];
    
    let result = [];
    let usedIndices = new Set();
    let max = window.HB_WIKI_PAGES.length;
    let actualCount = Math.min(count, max);
    
    while (result.length < actualCount) {
        let randIndex = Math.floor(Math.random() * max);
        if (!usedIndices.has(randIndex)) {
            usedIndices.add(randIndex);
            result.push(window.HB_WIKI_PAGES[randIndex]);
        }
    }
    return result;
}

// 오늘의 추천 문서 업데이트
window.updateRecommend = function() {
    const docs = getRandomDocs(1);
    if(docs.length === 0) return;
    const doc = docs[0];

    const titleEl = document.getElementById('recommend-title');
    const imgEl = document.getElementById('recommend-img');
    const descEl = document.getElementById('recommend-desc');

    if(titleEl && imgEl && descEl) {
        titleEl.innerText = doc.title;
        titleEl.href = doc.href;
        
        // 1. 이미지 파일명 기본 세팅
        let imgFileName = doc.title;
        
        // 2. 역 문서인지 확인 (예: '도변역' 또는 '효빈역(일반열차)')
        if (doc.title.endsWith('역') || doc.title.includes('역(')) {
            imgFileName = doc.title + '_승강장'; // 역_승강장.webp 매칭
        }
        
        imgEl.src = '이미지/' + imgFileName + '.webp';
        
        // 3. 에러 시 대체 로고 (한국어 규칙 무시하고 hyobin1.webp 적용)
        imgEl.onerror = function() { 
            this.onerror = null; // 무한루프 방지
            this.src = '이미지/hyobin1.webp'; 
        };
        
        descEl.innerText = "수많은 효빈위키 문서 중 무작위 알고리즘을 통해 선정된 오늘의 추천 문서입니다. 위키러 여러분의 많은 기여와 내용 보충을 부탁드립니다!";
    }
};

// 최근 변경 내역 업데이트 (위키 감성 눈속임)
window.updateRecentChanges = function() {
    const docs = getRandomDocs(5); 
    if(docs.length === 0) return;
    
    const table = document.getElementById('recent-changes-table');
    if(!table) return;
    
    table.innerHTML = ''; 

    docs.forEach(doc => {
        const timeStr = Math.floor(Math.random() * 59 + 1) + (Math.random() > 0.5 ? '분 전' : '초 전');
        const byteChange = Math.floor(Math.random() * 1000) - 300; 
        
        let byteStr = '';
        if (byteChange > 0) {
            byteStr = `<span class="text-green-600 text-xs">(+${byteChange})</span>`;
        } else if (byteChange < 0) {
            byteStr = `<span class="text-red-500 text-xs">(${byteChange})</span>`;
        } else {
            byteStr = `<span class="text-gray-500 text-xs">(0)</span>`;
        }

        const row = `
            <tr>
                <td><a href="${doc.href}" class="wiki-link">${doc.title}</a></td>
                <td class="text-right"><span class="time-badge">${timeStr}</span> ${byteStr}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
};

// 실시간 인기 검색어 업데이트
window.updatePopularSearches = function() {
    const docs = getRandomDocs(5);
    if(docs.length === 0) return;
    
    const list = document.getElementById('popular-searches-list');
    if(!list) return;
    
    list.innerHTML = ''; 

    docs.forEach(doc => {
        const li = `<li><a href="${doc.href}" class="wiki-link text-[var(--wiki-text)]">${doc.title}</a></li>`;
        list.innerHTML += li;
    });
};

// =========================================================================
// 통합 DOMContentLoaded 이벤트 (공지사항 렌더링 + 추천/최근변경 업데이트)
// =========================================================================
window.addEventListener('DOMContentLoaded', () => {
    // 1. 공지사항 렌더링 실행
    if(typeof renderNotices === 'function') {
        renderNotices();
    }

    // 2. 파일 목록 기반 추천 문서, 최근 변경 내역 등 실행
    setTimeout(() => {
        if(window.HB_WIKI_PAGES && window.HB_WIKI_PAGES.length > 0) {
            updateRecommend();
            updateRecentChanges();
            updatePopularSearches();
        }
    }, 100);
});

// ====== [ 추가 패치: '더보기' 드롭다운 메뉴 및 임의의 문서 이동 로직 ] ======

window.addEventListener('DOMContentLoaded', () => {
    // 1. 네비게이션 바에서 '더보기' 버튼 자동 탐색 (HTML 수정 불필요)
    const moreBtn = Array.from(document.querySelectorAll('a')).find(el => el.textContent.includes('더보기'));
    
    if (moreBtn) {
        // 기존 href 이동 막기
        moreBtn.href = "javascript:void(0);";
        
        // 클릭 이벤트 바인딩
        moreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMoreDropdown(moreBtn);
        });
    }

    // 외부 클릭 시 드롭다운 닫기
    document.addEventListener('click', (e) => {
        const menu = document.getElementById('hb-more-dropdown');
        if (menu && menu.style.display === 'block') {
            if (e.target !== moreBtn && !moreBtn.contains(e.target) && !menu.contains(e.target)) {
                menu.style.display = 'none';
            }
        }
    });
});

// 더보기 메뉴 토글 함수
function toggleMoreDropdown(btn) {
    let menu = document.getElementById('hb-more-dropdown');
    
    // 메뉴가 없으면 최초 1회 생성
    if (!menu) {
        menu = document.createElement('div');
        menu.id = 'hb-more-dropdown';
        menu.style.position = 'absolute';
        menu.style.background = 'var(--wiki-box-bg, #ffffff)';
        menu.style.border = '1px solid var(--wiki-border, #ccc)';
        menu.style.borderRadius = '6px';
        menu.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        menu.style.padding = '5px 0';
        menu.style.zIndex = '10001';
        menu.style.minWidth = '130px';
        menu.style.display = 'none';
        
        // 다크모드 대응을 위한 전환 효과
        menu.style.transition = 'background-color 0.3s, border-color 0.3s';

        // 위키 표준 더보기 메뉴 리스트
        const menuItems = [
            { text: '🎲 임의의 문서', action: 'window.goToRandomPage()' },
            { text: '📂 파일 올리기', href: '파일_올리기.html' },
            { text: '📝 필요한 문서', href: '필요한_문서.html' },
            { text: '📊 위키 통계', href: '통계.html' },
            { text: '❓ 도움말', href: '도움말.html' }
        ];

        menuItems.forEach(item => {
            const a = document.createElement('a');
            a.innerText = item.text;
            a.style.display = 'block';
            a.style.padding = '10px 16px';
            a.style.color = 'var(--wiki-text, #333)';
            a.style.textDecoration = 'none';
            a.style.fontSize = '13px';
            a.style.fontWeight = 'bold';
            a.style.cursor = 'pointer';
            
            if (item.href) {
                a.href = item.href;
            } else if (item.action) {
                a.setAttribute('onclick', item.action);
            }

            // 마우스 호버 효과 (다크모드 변수 활용)
            a.onmouseenter = () => a.style.background = 'var(--wiki-gray-bg, #f0f0f0)';
            a.onmouseleave = () => a.style.background = 'transparent';

            menu.appendChild(a);
        });

        document.body.appendChild(menu);
    }

    // 메뉴 열기 / 닫기
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        const rect = btn.getBoundingClientRect();
        // 버튼 바로 아래에 위치 계산
        menu.style.top = (rect.bottom + window.scrollY + 8) + 'px';
        
        // 화면 오른쪽 밖으로 넘어가지 않도록 위치 보정
        if (rect.left + 130 > window.innerWidth) {
            menu.style.right = (window.innerWidth - rect.right - window.scrollX) + 'px';
            menu.style.left = 'auto';
        } else {
            menu.style.left = (rect.left + window.scrollX) + 'px';
            menu.style.right = 'auto';
        }
        
        menu.style.display = 'block';
    }
}

// 임의의 문서(Random Page) 이동 함수
window.goToRandomPage = function() {
    if (window.HB_WIKI_PAGES && window.HB_WIKI_PAGES.length > 0) {
        // 배열에서 랜덤하게 하나 뽑기
        const randIndex = Math.floor(Math.random() * window.HB_WIKI_PAGES.length);
        const doc = window.HB_WIKI_PAGES[randIndex];
        
        // 문자열인지 객체인지 판별하여 href 추출
        const href = typeof doc === "string" ? doc + ".html" : (doc.href || doc.title + ".html");
        
        // 이동
        location.href = href;
    } else {
        if(typeof showMsg === 'function') {
            showMsg("문서 데이터가 로드되지 않았습니다.");
        } else {
            alert("문서 데이터가 로드되지 않았습니다.");
        }
        // 메뉴 창 닫기
        const menu = document.getElementById('hb-more-dropdown');
        if(menu) menu.style.display = 'none';
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const categoryBox = document.querySelector('.category-box');
    
    if (!categoryBox) return;

    // 카테고리 텍스트를 가져와서 '|' 기준으로 나누고 양옆 공백을 제거하여 배열로 만듭니다.
    const categories = categoryBox.innerText.split('|').map(category => category.trim());
    
    // 카테고리 항목 중 하나라도 '초등학교', '중학교', '고등학교'로 "끝나는" 것이 있는지 확인
    const isTargetSchool = categories.some(category => 
        category.endsWith('초등학교') || 
        category.endsWith('중학교') || 
        category.endsWith('고등학교')
    );
    
    // 카테고리 항목 중 '대학교'로 끝나는 것이 있는지 확인
    const isUniversity = categories.some(category => category.endsWith('대학교'));

    // 조건을 만족할 경우에만 스크립트 삽입
    if (isTargetSchool && !isUniversity) {
        const script = document.createElement('script');
        script.src = 'assets/틀_교육기관.js'; 
        categoryBox.parentNode.insertBefore(script, categoryBox.nextSibling);
    }
});
document.addEventListener('DOMContentLoaded', () => {

    // 1. 검색창 엔터 및 버튼 클릭 이벤트 강제 바인딩
    const searchInput = document.getElementById('headerSearchInput') || document.getElementById('searchInput');
    
    if (searchInput) {
        const executeSearch = () => {
            const query = searchInput.value.trim();
            if (!query) {
                alert('검색어를 입력해주세요.');
                return;
            }

            // [안전장치 1] HB_WIKI_ALIASES가 존재하는지 안전하게 체크 후 별칭 검사
            if (typeof window.HB_WIKI_ALIASES !== 'undefined' && window.HB_WIKI_ALIASES && window.HB_WIKI_ALIASES[query]) {
                const targetUrl = window.HB_WIKI_ALIASES[query];
                
                // URL에서 경로와 해시(#)를 분리
                const [urlPath, hash] = targetUrl.split('#');
                
                // 파라미터는 무조건 해시보다 앞쪽(urlPath)에 결합
                const separator = urlPath.includes('?') ? '&' : '?';
                let finalUrl = `${urlPath}${separator}from=${encodeURIComponent(query)}`;
                
                // 원래 해시가 존재했다면 맨 마지막에 다시 부착
                if (hash) {
                    finalUrl += `#${hash}`;
                }
                
                window.location.href = finalUrl;
                return;
            }

            // [안전장치 2] 정식 문서 목록(HB_WIKI_PAGES) 확인
            if (typeof window.HB_WIKI_PAGES !== 'undefined' && window.HB_WIKI_PAGES) {
                const matched = window.HB_WIKI_PAGES.find(p => p.title === query);
                if (matched) {
                    window.location.href = matched.href;
                    return;
                }
            }

            // 둘 다 없으면 기본 검색 페이지로
            window.location.href = `효빈위키 검색.html?q=${encodeURIComponent(query)}`;
        };

        // 기존 이벤트 중복 방지 후 새로 등록
        searchInput.removeEventListener('keydown', searchInput._wikiKeyDownHandler);
        searchInput._wikiKeyDownHandler = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                executeSearch();
            }
        };
        searchInput.addEventListener('keydown', searchInput._wikiKeyDownHandler);

        const searchBtn = searchInput.nextElementSibling;
        if (searchBtn && searchBtn.tagName === 'BUTTON') {
            searchBtn.removeEventListener('click', searchBtn._wikiClickHandler);
            searchBtn._wikiClickHandler = (e) => {
                e.preventDefault();
                executeSearch();
            };
            searchBtn.addEventListener('click', searchBtn._wikiClickHandler);
        }
    }

    // 2. 파란 박스(넘어옴 배너) 생성 로직
    const allBanners = document.querySelectorAll('#wiki-redirect-banner, .wiki-redirect-banner');
    allBanners.forEach(banner => banner.remove());

    const urlParams = new URLSearchParams(window.location.search);
    const fromAlias = urlParams.get('from');

    if (fromAlias) {
        const titleEl = document.querySelector('.txt-lvl-1') || document.querySelector('h1') || document.querySelector('.wiki-title');
        let actualTitle = document.title.replace(' - 효빈위키', '').trim();
        if (titleEl) {
            actualTitle = titleEl.textContent.trim();
        }

        if (fromAlias !== actualTitle) {
            const bannerDiv = document.createElement('div');
            bannerDiv.id = 'wiki-redirect-banner';
            bannerDiv.className = 'wiki-redirect-banner';
            bannerDiv.style.cssText = `
                border: 1px solid #b8d4e9;
                background-color: #e5f0fa;
                color: #222;
                padding: 10px 15px;
                margin: 0 0 15px 0;
                border-radius: 4px;
                font-size: 0.95rem;
                display: block !important;
            `;
            bannerDiv.innerHTML = `<a href="javascript:void(0)" style="color: #0275d8; text-decoration: none; font-weight: bold;">${fromAlias}</a>(으)로부터 넘어옴`;

            const adBox = document.getElementById('wiki-inserted-ad');
            const categoryBox = document.querySelector('.category-box');
            const titleArea = document.querySelector('.title-area');

            if (adBox) {
                adBox.parentNode.insertBefore(bannerDiv, adBox);
            } else if (categoryBox) {
                categoryBox.parentNode.insertBefore(bannerDiv, categoryBox);
            } else if (titleArea) {
                titleArea.parentNode.insertBefore(bannerDiv, titleArea.nextSibling);
            } else {
                const container = document.querySelector('.wiki-container');
                if (container) container.prepend(bannerDiv);
            }
        }
    }
});