// ====== [ assets/hb_index_scripts.js ] ======
// 효빈위키 대문 인라인 스크립트 분리용 (충돌 검색 로직 완벽 제거 버전)

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

// ====== [ 공지사항 데이터 (고정 5개 + 랜덤 풀 120개 통합팩) ] ======
const noticeData = {};
if (typeof fixedNotices !== 'undefined') {
    fixedNotices.forEach(n => noticeData[n.id] = n);
}
if (typeof randomNotices !== 'undefined') {
    randomNotices.forEach(n => noticeData[n.id] = n);
}

// HTML에 공지사항을 그려주는 함수
window.renderNotices = function() {
    const ul = document.querySelector('.notice-list');
    if(!ul) return;
    
    ul.innerHTML = ''; 

    if (typeof fixedNotices !== 'undefined') {
        fixedNotices.forEach((n) => {
            let badge = '<span class="font-bold text-[#7777AA]">[필독]</span>';
            if(n.title.includes('[행사]')) badge = '<span class="font-bold text-pink-500">[행사]</span>';
            if(n.title.includes('[경고]')) badge = '<span class="font-bold text-red-500">[경고]</span>';
            if(n.title.includes('[공지]')) badge = '<span class="font-bold text-[#7777AA]">[공지]</span>';
            if(n.title.includes('[안내]')) badge = '<span class="font-bold text-gray-500">[안내]</span>';
            
            let displayTitle = n.title.replace(/\[.*?\]\s*/, '');
            ul.innerHTML += `<li onclick="openNotice('${n.id}')">${badge} ${displayTitle}</li>`;
        });
    }

    ul.innerHTML += `<div class="border-b border-gray-200 my-2 border-dashed"></div>`;

    if (typeof randomNotices !== 'undefined') {
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
    }
};

window.openNotice = function(id) {
    const data = noticeData[id];
    if (data) {
        document.getElementById('noticeTitle').innerText = data.title;
        document.getElementById('noticeContent').innerText = data.content;
        toggleModal('noticeModal');
    }
}

// 메시지 박스
function showMsg(text) {
    const box = document.getElementById('wiki-msg-box');
    if(box) {
        box.innerText = text; 
        box.style.display = 'block';
        setTimeout(() => { box.style.display = 'none'; }, 2000);
    } else {
        alert(text);
    }
}

// 모달 토글
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if(!modal) return;
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
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

    if (!id || !pw) { showMsg('아이디와 비밀번호를 모두 입력해주세요.'); return; }
    if (pw !== pwConfirm) { showMsg('비밀번호가 일치하지 않습니다.'); return; }

    const users = JSON.parse(localStorage.getItem('hb_db_users') || '{}');
    if (users[id]) { showMsg('이미 존재하는 아이디입니다.'); return; }

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

    if (!id || !pw) { showMsg('아이디와 비밀번호를 입력하세요.'); return; }

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
    if(!container) return;
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
    const fsVal = document.getElementById('fontSizeVal');
    if(fsVal) fsVal.innerText = val + '%';
    localStorage.setItem('hb_font_size', val);
}

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = 'none';
    }
});


// ====== [ 자동 추천 문서 & 최근 변경 내역 & 인기 검색어 (랜덤 시뮬레이션) ] ======
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
        
        let imgFileName = doc.title;
        if (doc.title.endsWith('역') || doc.title.includes('역(')) {
            imgFileName = doc.title + '_승강장'; 
        }
        
        imgEl.src = '이미지/' + imgFileName + '.webp';
        imgEl.onerror = function() { 
            this.onerror = null; 
            this.src = '이미지/hyobin1.webp'; 
        };
        
        descEl.innerText = "수많은 효빈위키 문서 중 무작위 알고리즘을 통해 선정된 오늘의 추천 문서입니다. 위키러 여러분의 많은 기여와 내용 보충을 부탁드립니다!";
    }
};

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
        if (byteChange > 0) byteStr = `<span class="text-green-600 text-xs">(+${byteChange})</span>`;
        else if (byteChange < 0) byteStr = `<span class="text-red-500 text-xs">(${byteChange})</span>`;
        else byteStr = `<span class="text-gray-500 text-xs">(0)</span>`;

        const row = `
            <tr>
                <td><a href="${doc.href}" class="wiki-link">${doc.title}</a></td>
                <td class="text-right"><span class="time-badge">${timeStr}</span> ${byteStr}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
};

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

window.addEventListener('DOMContentLoaded', () => {
    if(typeof renderNotices === 'function') renderNotices();

    setTimeout(() => {
        if(window.HB_WIKI_PAGES && window.HB_WIKI_PAGES.length > 0) {
            updateRecommend();
            updateRecentChanges();
            updatePopularSearches();
        }
    }, 100);
});

// ====== [ '더보기' 드롭다운 메뉴 및 임의의 문서 이동 로직 ] ======
window.addEventListener('DOMContentLoaded', () => {
    const moreBtn = Array.from(document.querySelectorAll('a')).find(el => el.textContent.includes('더보기'));
    
    if (moreBtn) {
        moreBtn.href = "javascript:void(0);";
        moreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMoreDropdown(moreBtn);
        });
    }

    document.addEventListener('click', (e) => {
        const menu = document.getElementById('hb-more-dropdown');
        if (menu && menu.style.display === 'block') {
            if (moreBtn && e.target !== moreBtn && !moreBtn.contains(e.target) && !menu.contains(e.target)) {
                menu.style.display = 'none';
            }
        }
    });
});

function toggleMoreDropdown(btn) {
    let menu = document.getElementById('hb-more-dropdown');
    
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
        menu.style.transition = 'background-color 0.3s, border-color 0.3s';

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
            
            if (item.href) a.href = item.href;
            else if (item.action) a.setAttribute('onclick', item.action);

            a.onmouseenter = () => a.style.background = 'var(--wiki-gray-bg, #f0f0f0)';
            a.onmouseleave = () => a.style.background = 'transparent';

            menu.appendChild(a);
        });

        document.body.appendChild(menu);
    }

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        const rect = btn.getBoundingClientRect();
        menu.style.top = (rect.bottom + window.scrollY + 8) + 'px';
        
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

window.goToRandomPage = function() {
    if (window.HB_WIKI_PAGES && window.HB_WIKI_PAGES.length > 0) {
        const randIndex = Math.floor(Math.random() * window.HB_WIKI_PAGES.length);
        const doc = window.HB_WIKI_PAGES[randIndex];
        const href = typeof doc === "string" ? doc + ".html" : (doc.href || doc.title + ".html");
        location.href = href;
    } else {
        if(typeof showMsg === 'function') showMsg("문서 데이터가 로드되지 않았습니다.");
        else alert("문서 데이터가 로드되지 않았습니다.");
        
        const menu = document.getElementById('hb-more-dropdown');
        if(menu) menu.style.display = 'none';
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const categoryBox = document.querySelector('.category-box');
    if (!categoryBox) return;

    const categories = categoryBox.innerText.split('|').map(category => category.trim());
    const isTargetSchool = categories.some(category => 
        category.endsWith('초등학교') || 
        category.endsWith('중학교') || 
        category.endsWith('고등학교')
    );
    const isUniversity = categories.some(category => category.endsWith('대학교'));

    if (isTargetSchool && !isUniversity) {
        const script = document.createElement('script');
        script.src = 'assets/틀_교육기관.js'; 
        categoryBox.parentNode.insertBefore(script, categoryBox.nextSibling);
    }
});

// ====== [ 문서 넘어옴 배너 (파란 박스) 생성 로직 ] ======
document.addEventListener('DOMContentLoaded', () => {
    const allBanners = document.querySelectorAll('#wiki-redirect-banner, .wiki-redirect-banner');
    allBanners.forEach(banner => banner.remove());

    const urlParams = new URLSearchParams(window.location.search);
    const fromAlias = urlParams.get('from');

    if (fromAlias) {
        const titleEl = document.querySelector('.txt-lvl-1') || document.querySelector('h1') || document.querySelector('.wiki-title');
        let actualTitle = document.title.replace(' - 효빈위키', '').trim();
        if (titleEl) actualTitle = titleEl.textContent.trim();

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