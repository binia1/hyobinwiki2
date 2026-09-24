


function applyAutoLinks() {
    // 버스 번호 자동 증식 로직
    const expandedMap = { ...wikiLinkMap };
    Object.keys(wikiLinkMap).forEach(key => {

        // 🚨 [수정 완료] url 변수를 꺼내서 공용으로 만듦!
        const url = wikiLinkMap[key]; 

        const match = key.match(/^bus_(\d+)$/i);
        if (match) {
            const num = match[1];
            expandedMap[`효빈버스 ${num}`] = url;
            expandedMap[`효빈버스_${num}`] = url;
            expandedMap[`효빈버스${num}`] = url;
            expandedMap[`효빈 ${num}`] = url;
            expandedMap[`효빈_${num}`] = url;
            expandedMap[`효빈${num}`] = url;
        }

        // 💡 띄어쓰기를 완전히 제거한 '무호흡 버전' 키워드 자동 생성!
        const noSpaceKey = key.replace(/\s+/g, ''); 
        
        // 원본 이름에 띄어쓰기가 존재했다면, 띄어쓰기 없는 버전도 딕셔너리에 추가
        if (key !== noSpaceKey) {
            expandedMap[noSpaceKey] = url; 
        }
    });

    // 💡 [수정 1] 성능 미치게 올리는 소문자 전용 딕셔너리 (find() 함수로 인한 렉 완전 방지)
    const lowerCaseMap = {};
    Object.keys(expandedMap).forEach(k => {
        lowerCaseMap[k.toLowerCase()] = expandedMap[k];
    });

    const keywords = Object.keys(expandedMap).sort((a, b) => b.length - a.length);
    if (keywords.length === 0) return;

    const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escapedKeywords = keywords.map(escapeRegExp);
    const regexStr = `(${escapedKeywords.join('|')})`;
    const testRegex = new RegExp(regexStr, 'i'); 
    const replaceRegex = new RegExp(regexStr, 'gi');

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    const nodesToReplace = [];

const forbiddenSelectors = [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
        '.txt-lvl-1', '#page-title', 
        'a', 'nav', 'button', 'header', 'footer', 'summary',
        '.category-box', '#toc-box', '.wiki-fn-content',
        '.wiki-btn-group', '.nav-box-header', '.nav-table th',
        '#lovelive-all-nav-container', '#lovelive-nav-container',
        '.nav-box', '.wiki-macro-toc', 
        'script', 'style', 'textarea', 'noscript', 'title',
        '.no-autolink', '#hyobin-police-offices', // <--- 여기 ID를 넣으세요
        'svg', 'canvas',     
        '#wiki-footer-area','#bangdream-nav-zone'
    ].join(', ');

// 💡 3. 카멜레온 스텔스 구역
const preserveStyleSelectors = [
    '.infobox', '.nav-line-name', 'th', '.infobox-top-label', '.nav-box-body td',
    'span[style*="color"]', 'span[style*="background"]', 
    '.opacity-80', '.text-sm', '.leading-none', 
    '.subway-badge', '.wiki-badge', '.line-badge', 'span[style*="font-size"]','div[style*="font-size"]',
    '.l1', '.l2', '.l3', '.l4', '.l5', '.l6', '.l7', '.l8', '.lbinhyo', 
    '.wiki-fn', '.namu-head', '.namu-title', '.city', '.kind', '.badge', '.rounded', '.route-tab', '.text-white', 'summary', 'details', 'table', '.bus-badge',
    '.hb-guide-icon', '.hb-project-header', '.hb-project-footer', '.hb-structure-header', '.hb-badge',
    // 👇 구역(컨테이너) 자체를 통째로 스텔스 처리
    'nav', '.wiki-navbox-header', '.wiki-navbox-footer', '.wiki-navbox', '.red-link', '.blue-link',
    
    // 🚨 [추가] 교통카드 실물 디자인 강제 변색 방어막!
    '.transport-card', '.card-title', '.card-subtitle', '.card-footer', '.logo-box'
].join(', ');

    
    while (walker.nextNode()) {
        const node = walker.currentNode;
        const parent = node.parentElement;
        if (!parent) continue;

        if (parent.closest(forbiddenSelectors)) continue;

        if (testRegex.test(node.nodeValue)) {
            nodesToReplace.push(node);
        }
    }

    let replaceCount = 0;
    nodesToReplace.forEach(node => {
        const parent = node.parentNode;
        if (!parent) return; // 방어 로직

        const isPreserveZone = parent.closest(preserveStyleSelectors);
        const safeText = node.nodeValue.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        
        const span = document.createElement('span');
        
        span.innerHTML = safeText.replace(replaceRegex, (match) => {
            // 💡 [수정 2] O(1)로 한 방에 찾고, encodeURI로 띄어쓰기 URL 안전하게 처리
            let targetUrl = lowerCaseMap[match.toLowerCase()];
            if (!targetUrl) return match;
            
// [수정 후]
// 🚨 진짜 해결책: targetUrl에 띄어쓰기가 있다면 무조건 언더바(_)로 치환!
targetUrl = targetUrl.replace(/ /g, '_'); 
let safeUrl = encodeURI(targetUrl);

            if (isPreserveZone) {
                return `<a href="${safeUrl}" style="color: inherit !important; text-decoration: none !important; font-weight: inherit !important; font-size: inherit !important;">${match}</a>`;
            } else {
                return `<a href="${safeUrl}" class="wiki-link">${match}</a>`;
            }
        });
        
        // 💡 [수정 3] DOM 꼬임 방지를 위해 가장 안전하게 태그 unwrap 처리
        parent.replaceChild(span, node);
        while (span.firstChild) {
            parent.insertBefore(span.firstChild, span);
        }
        parent.removeChild(span);

        replaceCount++;
    });

    console.log(`[AutoLink] 노선표 및 뱃지 보호 완료! 총 ${replaceCount}곳 변환.`);

    // =========================================================================
    // 💡 [수정 완료] 하드코딩된 A 태그 교정 로직을 전역 딕셔너리가 살아있는 이 안에 통합!
    // =========================================================================
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        let href = link.getAttribute('href');
        
        if (!href || href.startsWith('http') || href.startsWith('#')) return;

        try {
            // decodeURI보다 안전한 decodeURIComponent 사용
            let decodedHref = decodeURIComponent(href);
            let rawName = decodedHref.replace(/\.html$/i, '');
            
            // 띄어쓰기/언더바 싹 날린 소문자로 변환 (예: "하나조노_타에" -> "하나조노타에")
            let noSpaceTarget = rawName.replace(/[\s_]+/g, '').toLowerCase();

            // 위에서 만든 초고속 딕셔너리에서 바로 검색
            let realTargetUrl = lowerCaseMap[noSpaceTarget];
            
            if (!realTargetUrl) {
                realTargetUrl = lowerCaseMap[rawName.toLowerCase()];
            }

            if (realTargetUrl) {
                link.setAttribute('href', encodeURI(realTargetUrl));
            }
        } catch (e) {
            // 심각하게 깨진 URL만 무시
        }
    });
    console.log("[AutoLink] 하드코딩 A 태그 띄어쓰기/언더바 교정 완료!");
}

// 💡 [제일 중요] 문서 렌더링이 다 끝나면 스크립트가 무조건 한 번 돌아가게 하는 스위치!
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyAutoLinks);
} else {
    applyAutoLinks();
}

// =========================================================================
// [효빈위키 파일 문서 모달 전용 스크립트 - 내용 생략 없는 100% 통합 풀버전 (오류 수정완료)]
// =========================================================================

window.handleFileSearch = () => {
    const fileSearchInput = document.getElementById('fileSearchInput');
    if (fileSearchInput && fileSearchInput.value.trim()) {
        location.href = fileSearchInput.value.trim() + '.html';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. 모달 전용 CSS
    const filePageStyle = document.createElement('style');
    filePageStyle.innerHTML = `
        .zoomable-image { 
            cursor: zoom-in; 
        }
        #global-file-page-modal { 
            display: none; 
            position: fixed; 
            z-index: 9999999; 
            left: 0; 
            top: 0; 
            width: 100vw; 
            height: 100vh; 
            background-color: #ffffff; 
            overflow-y: auto; 
            overflow-x: hidden; 
            animation: slideUp 0.3s ease-out; 
            font-family: 'Noto Sans KR', sans-serif; 
            color: #373a3c; 
        }
        #file-page-navbar { 
            position: sticky; 
            top: 0; 
            background-color: #7777AA !important; 
            color: white; 
            padding: 10px 20px; 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            z-index: 1000; 
            box-shadow: 0 2px 5px rgba(0,0,0,0.1); 
        }
        .file-page-close-btn { 
            background-color: rgba(0,0,0,0.2); 
            border-radius: 4px; 
            padding: 6px 16px; 
            font-weight: bold; 
            cursor: pointer; 
            font-size: 14px; 
        }
        .file-page-close-btn:hover { 
            background-color: rgba(0,0,0,0.4); 
        }
        #file-page-content { 
            max-width: 1000px; 
            margin: 0 auto; 
            padding: 40px 20px 40px 20px; 
            min-height: calc(100vh - 250px); 
        }
        .file-page-header-container { 
            display: flex; 
            justify-content: space-between; 
            align-items: flex-end; 
            border-bottom: 1px solid #ccc; 
            padding-bottom: 10px; 
            margin-bottom: 20px; 
            flex-wrap: wrap; 
            gap: 10px; 
        }
        .file-page-title { 
            font-size: 2.2rem; 
            font-weight: 800; 
            margin: 0; 
            color: #000; 
            word-break: break-all; 
        }
        .file-page-tools { 
            display: flex; 
            gap: 4px; 
        }
        .file-page-tool-btn { 
            border: 1px solid #ccc; 
            background: #fff; 
            padding: 5px 12px; 
            border-radius: 4px; 
            font-size: 12px; 
            font-weight: bold; 
            color: #333; 
            cursor: pointer; 
        }
        .file-page-tool-btn:hover { 
            background: #f4f4f4; 
        }
        .file-page-img-wrapper { 
            text-align: center; 
            margin-bottom: 15px; 
            position: relative; 
            min-height: 200px; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            overflow: visible; 
        }
        #file-page-main-img { 
            max-width: 100%; 
            max-height: 70vh; 
            border: 1px solid #ddd; 
            padding: 10px; 
            background: #fff; 
            cursor: grab; 
            user-select: none; 
            -webkit-user-drag: none; 
            box-shadow: 0 2px 8px rgba(0,0,0,0.05); 
            transform-origin: center center; 
        }
        #file-page-main-img:active { 
            cursor: grabbing; 
        }
        #file-modal-desc { 
            text-align: center; 
            font-size: 1.05rem; 
            font-weight: bold; 
            color: #444; 
            margin-bottom: 5px; 
            padding: 0 10px; 
            word-break: keep-all; 
        }
        .zoom-hint-text { 
            text-align: center; 
            font-size: 12px; 
            color: #888; 
            margin-bottom: 30px; 
            font-weight: bold; 
        }
        .file-warning-box { 
            border: 1px solid #ccc; 
            border-top: 3px solid #d9534f; 
            background: #fdfdfd; 
            padding: 20px; 
            margin-bottom: 40px; 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
        }
        .file-warning-text { 
            font-size: 0.9rem; 
            line-height: 1.6; 
            color: #444; 
            flex: 1; 
            padding-right: 20px; 
        }
        .file-warning-text strong { 
            font-size: 1.1rem; 
            color: #000; 
            display: block; 
            margin-bottom: 10px; 
        }
        .file-warning-icon { 
            font-size: 60px; 
            font-weight: 900; 
            color: #d9534f; 
            line-height: 1; 
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1); 
            user-select: none; 
        }
        .file-info-h3 { 
            font-size: 1.5rem; 
            font-weight: bold; 
            border-bottom: 2px solid #ddd; 
            padding-bottom: 8px; 
            margin-bottom: 15px; 
            color: #000; 
            display: flex; 
            align-items: center; 
            gap: 8px; 
            margin-top: 35px; 
        }
        .file-info-h3::before { 
            content: 'v'; 
            display: inline-block; 
            font-size: 1rem; 
            color: #888; 
            transform: scaleY(0.6); 
        }
        .file-info-table { 
            width: 100%; 
            border-collapse: collapse; 
            border: 1px solid #ccc; 
            font-size: 0.9rem; 
            max-width: 600px; 
        }
        .file-info-table th { 
            background-color: #f5f5f5; 
            border: 1px solid #ccc; 
            padding: 10px; 
            width: 120px; 
            text-align: center; 
            color: #333; 
        }
        .file-info-table td { 
            border: 1px solid #ccc; 
            padding: 10px 15px; 
        }
        .file-desc-box { 
            border: 1px solid #ccc; 
            padding: 15px 20px; 
            background: #fff; 
            border-radius: 4px; 
            font-size: 0.95rem; 
            line-height: 1.6; 
            color: #333; 
            max-width: 800px; 
        }
        
        /* 모달 전용 검색 드롭다운 스타일 */
        #fileSearchDropdown { 
            display: none; 
            position: absolute; 
            top: 100%; 
            left: 0; 
            width: 100%; 
            background: #fff; 
            border: 1px solid #ccc; 
            border-top: none; 
            max-height: 250px; 
            overflow-y: auto; 
            z-index: 1001; 
            box-shadow: 0 4px 6px rgba(0,0,0,0.1); 
            border-radius: 0 0 4px 4px; 
            color: black; 
            margin-top: 2px; 
        }
        .file-dropdown-item { 
            padding: 8px 12px; 
            cursor: pointer; 
            border-bottom: 1px solid #eee; 
            font-size: 0.85rem; 
            text-align: left;
        }
        .file-dropdown-item:hover { 
            background-color: #f0f0f0; 
        }
        @keyframes slideUp { 
            from { transform: translateY(20px); opacity: 0; } 
            to { transform: translateY(0); opacity: 1; } 
        }
    `;
    document.head.appendChild(filePageStyle);

    // 2. 모달 HTML 구조
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'global-file-page-modal';
    modalOverlay.innerHTML = `
        <div id="file-page-navbar">
            <div style="display: flex; align-items: center; gap: 15px;">
                <div class="file-page-close-btn" onclick="closeFilePageModal()">← 문서로 돌아가기</div>
                <div style="font-weight:900; font-size: 18px; letter-spacing:-1px; cursor:pointer;" onclick="location.href='index.html'">HyobinWiki 파일 뷰어</div>
            </div>
            
            <div style="position: relative; display: flex; align-items: center; gap: 4px;">
                <input type="text" id="fileSearchInput" autocomplete="off" placeholder="역명 검색" class="p-1.5 px-4 rounded text-black text-sm w-80 focus:outline-none shadow-inner" onkeypress="if(event.keyCode==13) handleFileSearch()">
                <button onclick="handleFileSearch()" class="bg-[#555588] p-1.5 px-5 rounded text-sm hover:bg-[#444477] font-bold transition-colors" style="border:none; color:white; cursor:pointer;">검색</button>
                <div id="fileSearchDropdown"></div>
            </div>
        </div>
        <div id="file-page-content">
            <div class="file-page-header-container">
                <h1 class="file-page-title">파일:<span id="file-modal-filename">이미지</span></h1>
                <div class="file-page-tools">
                    <button class="file-page-tool-btn" onclick="resetZoom()">크기 초기화</button>
                    <button class="file-page-tool-btn" onclick="window.open(document.getElementById('file-page-main-img').src, '_blank')">원본 보기</button>
                </div>
            </div>
            <div class="file-warning-box">
                <div class="file-warning-text">
                    <strong>이 파일은 효빈위키에서 제한된 한도 안에서 쓰입니다.</strong>
                    본 이미지는 퍼블릭 도메인 혹은 자유이용 저작물이 아닌, 독점적 저작권이 존재하는 이미지입니다. 효빈위키는 본 이미지를 <span style="color:#0055AA; font-weight:bold; text-decoration:underline;">제한된 한도</span> 안에서 이용합니다.<br><br>
                    <span style="font-size: 0.85rem; color:#666;">
                    ※ 다음과 같은 사항을 참조하시기 바랍니다.<br>
                    1. 권리자는 하단 이미지가 효빈위키에 게시되어 권리자의 정당한 권리를 침해한다고 여겨진다면 권리침해 도움말 문서 참고 후 문의해 주세요.<br>
                    2. 이 이미지를 업로드하거나 재사용하는 경우 법적 책임이 부과될 수 있음을 숙지해 주세요.<br>
                    3. 이 이미지의 출처는 효빈위키가 아닙니다. 이미지를 재사용하는 경우 효빈위키를 출처로 작성하지 마세요.
                    </span>
                </div>
                <div class="file-warning-icon">ⓒ</div>
            </div>
            <div class="file-page-img-wrapper">
                <img id="file-page-main-img" src="" alt="파일 원본 이미지">
            </div>
            <div class="zoom-hint-text">💡 이미지 위에서 마우스 휠을 굴려 확대/축소하고, 드래그하여 이동할 수 있습니다. (더블클릭 시 초기화)</div>
            <h3 class="file-info-h3">1. 기본 정보</h3>
            <table class="file-info-table">
                <tbody>
                    <tr><th>출처</th><td>효빈교통공사 및 효빈위키 유저 기여</td></tr>
                    <tr><th>날짜</th><td>최근 수정됨</td></tr>
                    <tr><th>저작자</th><td>해당 이미지 원작자 및 효빈위키</td></tr>
                    <tr><th>저작권</th><td><span style="color:#d9534f; font-weight:bold;">제한적 이용 (Copyrighted)</span></td></tr>
                    <tr><th>기타 정보</th><td id="file-modal-extra-info">해당 파일에 대한 추가 정보가 등록되지 않았습니다.</td></tr>
                </tbody>
            </table>
            <h3 class="file-info-h3">2. 이미지 설명</h3>
            <div class="file-desc-box"><span id="file-modal-desc">효빈위키에 업로드된 문서용 이미지입니다.</span></div>
        </div>
        <div id="modal-footer-container"></div>
    `;
    document.body.appendChild(modalOverlay);

    // 3. 본문 푸터 복사 로직
    setTimeout(() => {
        const mainFooter = document.querySelector('footer'); 
        const modalFooterContainer = document.getElementById('modal-footer-container');
        if (mainFooter && modalFooterContainer && modalFooterContainer.innerHTML.trim() === '') {
            modalFooterContainer.appendChild(mainFooter.cloneNode(true));
        }
    }, 300);

    // 4. 모달 제어 변수 및 함수
    const modalImg = document.getElementById('file-page-main-img');
    const filenameSpan = document.getElementById('file-modal-filename');
    const descSpan = document.getElementById('file-modal-desc');

    window.closeFilePageModal = () => { 
        modalOverlay.style.display = 'none'; 
        document.body.style.overflow = 'auto'; 
        resetZoom(); 
    };

    let currentScale = 1, translateX = 0, translateY = 0, isDragging = false, startX = 0, startY = 0;
    const MIN_SCALE = 0.5, MAX_SCALE = 5.0, SCALE_STEP = 0.2; 
    
    window.resetZoom = () => { 
        currentScale = 1; 
        translateX = 0; 
        translateY = 0; 
        updateTransform(true); 
    };

    const updateTransform = (useTransition = false) => {
        modalImg.style.transition = useTransition ? 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)' : 'none';
        modalImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
    };

    modalImg.addEventListener('wheel', (e) => { 
        e.preventDefault(); 
        currentScale += (e.deltaY < 0) ? SCALE_STEP : -SCALE_STEP; 
        currentScale = Math.min(Math.max(MIN_SCALE, currentScale), MAX_SCALE); 
        updateTransform(false); 
    }, { passive: false });

    modalImg.addEventListener('mousedown', (e) => { 
        e.preventDefault(); 
        isDragging = true; 
        startX = e.clientX - translateX; 
        startY = e.clientY - translateY; 
        updateTransform(false); 
    });

    window.addEventListener('mousemove', (e) => { 
        if (!isDragging) return; 
        translateX = e.clientX - startX; 
        translateY = e.clientY - startY; 
        updateTransform(false); 
    });

    window.addEventListener('mouseup', () => { 
        isDragging = false; 
    });

    modalImg.addEventListener('dblclick', (e) => { 
        e.preventDefault(); 
        e.stopPropagation(); 
        resetZoom(); 
    });

    // 5. 문서 내 모든 이미지에 모달 열기 이벤트 부여
    const images = document.querySelectorAll('img:not(#file-page-main-img)');
    images.forEach(img => {
        img.classList.add('zoomable-image');
        img.setAttribute('title', '더블클릭하여 파일 문서 보기');
        img.addEventListener('dblclick', () => {
            let rawFilename = img.getAttribute('src');
            if(rawFilename) {
                let parts = rawFilename.split('/');
                filenameSpan.innerText = decodeURIComponent(parts[parts.length - 1]);
            } else { 
                filenameSpan.innerText = "알수없는_이미지.webp"; 
            }
            
            let imgAlt = img.getAttribute('alt');
            descSpan.innerHTML = (imgAlt && imgAlt.trim() !== '') ? imgAlt : "효빈위키 문서용 참고 이미지입니다.";

            modalImg.src = img.src;
            modalOverlay.style.display = 'block';
            document.body.style.overflow = 'hidden'; 
            modalOverlay.scrollTop = 0;
            resetZoom(); 
        });
    });

    // 6. 모달 검색창 드롭다운(자동완성) 렌더링 로직 (문법 오류 수정됨!)
    const fileSearchInput = document.getElementById('fileSearchInput');
    const fileSearchDropdown = document.getElementById('fileSearchDropdown');
    
    if(fileSearchInput && fileSearchDropdown) {
        fileSearchInput.addEventListener('input', function() {
            const query = this.value.trim().toLowerCase();
            
            fileSearchDropdown.innerHTML = '';
            
            if(query.length > 0) {
                let searchResults = []; 
                
                // 🔥 여기서 에러났던 기호를 완벽하게 고쳤습니다 🔥
                searchResults.push({ name: `"${query}" 문서로 이동`, url: `${query}.html` });
                
                searchResults.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'file-dropdown-item';
                    div.textContent = item.name;
                    div.onclick = function() {
                        location.href = item.url;
                    };
                    fileSearchDropdown.appendChild(div);
                });
                
                fileSearchDropdown.style.display = 'block';
            } else {
                fileSearchDropdown.style.display = 'none';
            }
        });

        document.addEventListener('click', function(e) {
            if(e.target !== fileSearchInput && e.target !== fileSearchDropdown) {
                fileSearchDropdown.style.display = 'none';
            }
        });
    }
    // =========================================================================
    // 주석 툴팁 스크립트 (기존 기능)
    // =========================================================================
    const tooltip = document.getElementById('wiki-fn-tooltip');
    const fnLinks = document.querySelectorAll('.wiki-fn-link');
    
    if (tooltip) {
        fnLinks.forEach(link => {
            link.addEventListener('mouseenter', (e) => {
                const anchor = link.querySelector('a');
                if (!anchor) return;
                const targetId = anchor.getAttribute('href').substring(1);
                const footnoteItem = document.getElementById(targetId);
                if (footnoteItem) {
                    tooltip.innerHTML = footnoteItem.innerHTML.replace(/<a.*class="wiki-back-link".*>.*<\/a>/g, '').trim();
                    tooltip.style.display = 'block';
                }
            });
            link.addEventListener('mousemove', (e) => {
                tooltip.style.left = (e.pageX + 15) + 'px';
                tooltip.style.top = (e.pageY + 15) + 'px';
            });
            link.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });
        });
    }
});

// =========================================================================
// [효빈위키 전역 적용 스크립트 - 궁극의 안정성 패치]
// 1. 스크립트 중복 실행 방지 (어떤 js 파일에 넣어도 1번만 실행됨)
// 2. 이벤트 위임(Event Delegation)으로 동적/지연 로딩 이미지 100% 인식
// 3. 효빈위키식 '파일:' 문서 모달, 사이드바, 푸터 자동 적용
// =========================================================================

// 💡 스크립트가 두 번 이상 중복 실행되어 뷰어가 고장나는 것을 원천 차단
if (!window.__HB_WIKI_CORE_LOADED__) {
    window.__HB_WIKI_CORE_LOADED__ = true;

    // 배열을 완벽하게 무작위로 섞는 셔플 함수
    function shuffleArray(array) {
        let curId = array.length;
        while (0 !== curId) {
            let randId = Math.floor(Math.random() * curId);
            curId -= 1;
            let tmp = array[curId];
            array[curId] = array[randId];
            array[randId] = tmp;
        }
        return array;
    }

    // 💡 스마트 검색 로직
    function performSmartSearch(query) {
        if (!query) return;
        let targetHref = query + '.html'; 
        
        if (window.HB_WIKI_ALIASES && window.HB_WIKI_ALIASES[query]) {
            targetHref = window.HB_WIKI_ALIASES[query];
        } else if (window.HB_WIKI_PAGES) {
            const matchedPage = window.HB_WIKI_PAGES.find(p => p.title === query);
            if (matchedPage) targetHref = matchedPage.href;
        }
        location.href = targetHref;
    }

    // 전역 파일 뷰어 및 메인 검색창 함수 오버라이드
    window.handleFileSearch = () => {
        const input = document.getElementById('fileSearchInput');
        if (input) performSmartSearch(input.value.trim());
    };

    window.handleSearch = () => {
        const input = document.getElementById('searchInput');
        if (input) performSmartSearch(input.value.trim());
    };

    document.addEventListener('DOMContentLoaded', () => {

        // =====================================================================
        // [1] 사이드바 및 모달 CSS 동적 추가
        // =====================================================================
        const globalStyles = document.createElement('style');
        globalStyles.innerHTML = `
            /* 💡 모든 컨테이너 내 이미지에 돋보기 커서 일괄 적용 (클래스 부여 필요 없음) */
            .wiki-container img:not(#file-page-main-img) { cursor: zoom-in; }
            
            #global-file-page-modal {
                display: none; position: fixed; z-index: 9999999; left: 0; top: 0; width: 100vw; height: 100vh;
                background-color: #ffffff; overflow-y: auto; overflow-x: hidden;
                animation: slideUp 0.3s ease-out; font-family: 'Noto Sans KR', sans-serif; color: #373a3c;
            }
            #file-page-navbar {
                position: sticky; top: 0; background-color: #7777AA !important; color: white;
                padding: 10px 20px; display: flex; justify-content: space-between; align-items: center;
                z-index: 1000; box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            .file-page-close-btn {
                background-color: rgba(0,0,0,0.2); border-radius: 4px; padding: 6px 16px;
                font-weight: bold; cursor: pointer; transition: background 0.2s; font-size: 14px;
            }
            .file-page-close-btn:hover { background-color: rgba(0,0,0,0.4); }
            #file-page-content { max-width: 1000px; margin: 0 auto; padding: 40px 20px 40px 20px; min-height: calc(100vh - 250px); }
            .file-page-header-container { display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1px solid #ccc; padding-bottom: 10px; margin-bottom: 20px; flex-wrap: wrap; gap: 10px; }
            .file-page-title { font-size: 2.2rem; font-weight: 800; margin: 0; color: #000; word-break: break-all; }
            .file-page-tools { display: flex; gap: 4px; }
            .file-page-tool-btn { border: 1px solid #ccc; background: #fff; padding: 5px 12px; border-radius: 4px; font-size: 12px; font-weight: bold; color: #333; cursor: pointer; display: flex; align-items: center; gap: 4px; }
            .file-page-tool-btn:hover { background: #f4f4f4; }
            .file-page-img-wrapper { text-align: center; margin-bottom: 15px; position: relative; min-height: 200px; display: flex; justify-content: center; align-items: center; overflow: visible; }
            
            #file-page-main-img {
                max-width: 100%; max-height: 70vh; border: 1px solid #ddd; padding: 10px; background: #fff;
                cursor: grab; user-select: none; -webkit-user-drag: none;
                box-shadow: 0 2px 8px rgba(0,0,0,0.05); transform-origin: center center;
                object-fit: contain; display: inline-block;
            }
            #file-page-main-img:active { cursor: grabbing; }
            
            #file-modal-desc { text-align: center; font-size: 1.05rem; font-weight: bold; color: #444; margin-bottom: 5px; padding: 0 10px; word-break: keep-all; }
            .zoom-hint-text { text-align: center; font-size: 12px; color: #888; margin-bottom: 30px; font-weight: bold; }
            .file-warning-box { border: 1px solid #ccc; border-top: 3px solid #d9534f; background: #fdfdfd; padding: 20px; margin-bottom: 40px; display: flex; justify-content: space-between; align-items: center; }
            .file-warning-text { font-size: 0.9rem; line-height: 1.6; color: #444; flex: 1; padding-right: 20px; }
            .file-warning-text strong { font-size: 1.1rem; color: #000; display: block; margin-bottom: 10px; }
            .file-warning-icon { font-size: 60px; font-weight: 900; color: #d9534f; line-height: 1; text-shadow: 2px 2px 4px rgba(0,0,0,0.1); user-select: none; }
            .file-info-h3 { font-size: 1.5rem; font-weight: bold; border-bottom: 2px solid #ddd; padding-bottom: 8px; margin-bottom: 15px; color: #000; display: flex; align-items: center; gap: 8px; margin-top: 35px; }
            .file-info-h3::before { content: 'v'; display: inline-block; font-size: 1rem; color: #888; transform: scaleY(0.6); }
            .file-info-table { width: 100%; border-collapse: collapse; border: 1px solid #ccc; font-size: 0.9rem; max-width: 600px; }
            .file-info-table th { background-color: #f5f5f5; border: 1px solid #ccc; padding: 10px; width: 120px; text-align: center; color: #333; }
            .file-info-table td { border: 1px solid #ccc; padding: 10px 15px; }
            .file-desc-box { border: 1px solid #ccc; padding: 15px 20px; background: #fff; border-radius: 4px; font-size: 0.95rem; line-height: 1.6; color: #333; max-width: 800px; }
            .modal-wiki-footer { padding: 50px 20px; background-color: #f0f0f0; border-top: 1px solid #ccc; color: #777; font-size: 0.8rem; line-height: 1.8; margin-top: auto; }
            .modal-wiki-footer-container { max-width: 1200px; margin: 0 auto; text-align: center; font-weight: bold; opacity: 0.7; }
            @media (min-width: 768px) { .modal-wiki-footer-container { text-align: left; } }
            .modal-wiki-footer-disclaimer { padding-top: 15px; border-top: 1px solid #ddd; }
            @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

            /* 사이드바 반응형 레이아웃 CSS */
            .wiki-sidebar { 
                display: none; width: 320px; flex-shrink: 0; font-family: 'Noto Sans KR', sans-serif; box-sizing: border-box;
            }
            @media (min-width: 1200px) { 
                body.has-sidebar-layout { display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; }
                body.has-sidebar-layout > nav, body.has-sidebar-layout > footer, body.has-sidebar-layout > .wiki-footer { width: 100%; flex: 0 0 100%; }
                body.has-sidebar-layout > .wiki-container { flex: 0 1 1150px; margin: 0 20px 0 auto !important; max-width: 1150px !important; }
                body.has-sidebar-layout > .wiki-sidebar { display: block; flex: 0 0 320px; margin: 0 auto 0 0; }
            }

            .sidebar-box { background: #fff; border: 1px solid var(--wiki-border, #ccc); border-radius: 4px; margin-top: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); overflow: hidden; }
            .sidebar-title { background: #f9f9f9; padding: 12px 15px; margin: 0; border-bottom: 1px solid var(--wiki-border, #ccc); font-size: 0.95rem; font-weight: 900; color: #333; display: flex; justify-content: space-between; align-items: center; }
            .sidebar-list { list-style: none; padding: 0; margin: 0; font-size: 0.85rem; }
            .sidebar-list li { border-bottom: 1px solid #eee; }
            .sidebar-list li:last-child { border-bottom: none; }
            .sidebar-list a { display: flex; align-items: center; padding: 10px 15px; color: #333; text-decoration: none; transition: background 0.2s; }
            .sidebar-list a:hover { background: #f0f0f0; color: var(--wiki-link, #0055AA); }
            .sidebar-list a .time { margin-left: auto; font-size: 0.75rem; color: #999; white-space: nowrap; }
            .sidebar-list a .truncate-text { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1; }
            
            .rank-list .rank { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; background: #eee; border-radius: 3px; font-weight: 900; color: #555; margin-right: 10px; font-size: 0.75rem; flex-shrink: 0; }
            .rank-list li:nth-child(1) .rank { background: var(--wiki-main, #7777AA); color: white; }
            .rank-list li:nth-child(2) .rank { background: #8888bb; color: white; }
            .rank-list li:nth-child(3) .rank { background: #aaaacc; color: white; }
            .news-icon { margin-right: 8px; color: #0055aa; font-size: 0.6rem; }
        `;
        document.head.appendChild(globalStyles);

        // =====================================================================
        // [2] 사이드바 레이아웃 (DOM 위치 보존)
        // =====================================================================
        const container = document.querySelector('.wiki-container');
        if (container && !document.querySelector('.wiki-sidebar')) {
            const sidebar = document.createElement('aside');
            sidebar.className = 'wiki-sidebar';
            sidebar.innerHTML = `
                <div class="sidebar-box">
                    <h4 class="sidebar-title"><span>📈 실시간 검색어</span></h4>
                    <ol class="sidebar-list rank-list" id="sidebar-trending-list">
                        <li style="padding: 15px; text-align: center; color: #888;">데이터를 불러오는 중...</li>
                    </ol>
                </div>

                <div class="sidebar-box">
                    <h4 class="sidebar-title">
                        <span>📰 효빈일보 주요 뉴스</span>
                        <a href="https://binia1.github.io/hyobinilbo/" target="_blank" style="font-size: 0.75rem; color: #888; font-weight: normal; text-decoration: none;">더보기</a>
                    </h4>
                    <ul class="sidebar-list" id="sidebar-news-list">
                        <li style="padding: 15px; text-align: center; color: #888;">로딩 중...</li>
                    </ul>
                </div>

                <div class="sidebar-box">
                    <h4 class="sidebar-title"><span>🔄 최근 변경</span></h4>
                    <ul class="sidebar-list" id="sidebar-recent-list">
                        <li style="padding: 15px; text-align: center; color: #888;">문서 목록을 불러오는 중...</li>
                    </ul>
                </div>
<div class="sidebar-box">
                    <h4 class="sidebar-title"><span>광고</span></h4>
                    <div id="ad-container" style="padding: 10px; text-align: center;">
                        <p style="color:#888; font-size:12px;">로딩 중...</p>
                    </div>
                </div>
            `;
            
            container.parentNode.insertBefore(sidebar, container.nextSibling);
            document.body.classList.add('has-sidebar-layout');

            // 💡 1. 실시간 검색어 완벽 랜덤 생성
            const populateTrendingList = () => {
                const trendingList = document.getElementById('sidebar-trending-list');
                if(!trendingList) return;
                
                if (window.HB_WIKI_PAGES && window.HB_WIKI_PAGES.length > 0) {
                    trendingList.innerHTML = '';
                    
                    let keywordPool = [...window.HB_WIKI_PAGES];
                    if (window.HB_WIKI_ALIASES) {
                        for (const [alias, href] of Object.entries(window.HB_WIKI_ALIASES)) {
                            keywordPool.push({ title: alias, href: href });
                        }
                    }
                    
                    const shuffledKeywords = shuffleArray(keywordPool).slice(0, 10);
                    const statuses = ['-', '▲ 1', '▲ 2', '▲ 3', '▼ 1', '▼ 2', 'NEW'];
                    
                    shuffledKeywords.forEach((item, i) => {
                        const li = document.createElement('li');
                        const a = document.createElement('a');
                        a.href = item.href; 
                        
                        const status = statuses[Math.floor(Math.random() * statuses.length)];
                        let timeColor = '#999';
                        if(status.includes('▲')) timeColor = '#ee0022';
                        else if(status.includes('▼')) timeColor = '#0077dd';
                        else if(status === 'NEW') timeColor = '#00ccaa';

                        a.innerHTML = `<span class="rank">${i + 1}</span><span class="truncate-text">${item.title}</span><span class="time" style="color:${timeColor}; font-weight:bold;">${status}</span>`;
                        li.appendChild(a);
                        trendingList.appendChild(li);
                    });
                } else {
                    setTimeout(populateTrendingList, 300);
                }
            };
            populateTrendingList();

            // 💡 2. 효빈일보 뉴스 연동
            const populateNewsList = () => {
                const newsList = document.getElementById('sidebar-news-list');
                if(!newsList) return;

                fetch('news_list.html')
                    .then(response => {
                        if(!response.ok) throw new Error("news_list.html을 찾을 수 없습니다.");
                        return response.text();
                    })
                    .then(html => {
                        const match = html.match(/const\s+NEWS_DATABASE\s*=\s*(\[[\s\S]*?\]);/);
                        let newsData = [];
                        if (match) {
                            try {
                                newsData = new Function("return " + match[1])();
                            } catch (e) {}
                        }
                        
                        if (newsData && newsData.length > 0) {
                            const shuffled = shuffleArray([...newsData]).slice(0, 5);
                            newsList.innerHTML = '';
                            shuffled.forEach(news => {
                                const li = document.createElement('li');
                                const a = document.createElement('a');
                                
                                let targetUrl = "https://binia1.github.io/hyobinilbo/";
                                if (news.url) {
                                    if (news.url.startsWith('http')) {
                                        targetUrl = news.url;
                                    } else {
                                        targetUrl = "https://binia1.github.io/hyobinilbo/" + news.url.replace(/^\//, '');
                                    }
                                }
                                
                                a.href = targetUrl;
                                a.target = "_blank"; 
                                a.innerHTML = `<span class="news-icon">■</span><span class="truncate-text">${news.title}</span>`;
                                li.appendChild(a);
                                newsList.appendChild(li);
                            });
                        } else {
                            throw new Error("뉴스 배열을 찾을 수 없음");
                        }
                    })
                    .catch(err => {
                        const fallbackNews = [
                            { title: "효빈 1호선 연장구간, 본격 시운전 돌입", url: "news_1.html" },
                            { title: "박효빈 시장, '창전선 조기 개통 적극 추진'", url: "news_2.html" },
                            { title: "두청운수 파업 위기, 노사 극적 타결", url: "news_3.html" },
                            { title: "중구 상권 부활 신호탄? 명일동 재개발 승인", url: "news_4.html" },
                            { title: "효빈항여객터미널, 연간 여객 100만 돌파", url: "news_5.html" }
                        ];
                        const shuffled = shuffleArray([...fallbackNews]).slice(0, 5);
                        newsList.innerHTML = '';
                        shuffled.forEach(news => {
                            const li = document.createElement('li');
                            const a = document.createElement('a');
                            a.href = "https://binia1.github.io/hyobinilbo/" + news.url;
                            a.target = "_blank";
                            a.innerHTML = `<span class="news-icon">■</span><span class="truncate-text">${news.title}</span>`;
                            li.appendChild(a);
                            newsList.appendChild(li);
                        });
                    });
            };
            populateNewsList();

            // 💡 3. 최근 변경
            const populateRecentList = () => {
                const recentList = document.getElementById('sidebar-recent-list');
                if (!recentList) return;
                
                if (window.HB_WIKI_PAGES && window.HB_WIKI_PAGES.length > 0) {
                    recentList.innerHTML = '';
                    const shuffledPages = shuffleArray([...window.HB_WIKI_PAGES]).slice(0, 10);
                    let times = Array.from({length: 10}, () => Math.floor(Math.random() * 59) + 1).sort((a, b) => a - b);
                    
                    shuffledPages.forEach((page, i) => {
                        const li = document.createElement('li');
                        const a = document.createElement('a');
                        a.href = page.href;
                        
                        const titleSpan = document.createElement('span');
                        titleSpan.className = 'truncate-text';
                        titleSpan.innerText = page.title;
                        
                        const timeSpan = document.createElement('span');
                        timeSpan.className = 'time';
                        timeSpan.innerText = times[i] + '분 전';
                        
                        a.appendChild(titleSpan);
                        a.appendChild(timeSpan);
                        li.appendChild(a);
                        recentList.appendChild(li);
                    });
                } else {
                    setTimeout(populateRecentList, 300);
                }
            };
populateRecentList();
            
            // 💡 광고 생성 함수 추가
            const populateAds = () => {
                const adContainer = document.getElementById("ad-banner-top");
                if (!adContainer) return;

                const ads = [
                    { title: "효빈지하철 2호선 하루빈과 함께!", img: "이미지/하루빈_광고.webp", link: "효빈도시철도.html" },
                    { title: "제4회 효빈 애니메이션 페스티벌", img: "이미지/haf_banner.webp", link: "효빈축제.html" },
                    { title: "박효빈 시장의 발전 계획", img: "이미지/mayor_ad.webp", link: "박효빈.html" }
                ];

                const randomAd = ads[Math.floor(Math.random() * ads.length)];
                adContainer.innerHTML = `
                    <a href="${randomAd.link}" style="text-decoration:none; color:inherit;">
                        <img src="${randomAd.img}" style="width:100%; border-radius:4px; margin-bottom:5px;">
                        <p style="font-size:0.8rem; margin:0;">${randomAd.title}</p>
                    </a>
                `;
            };
            populateAds(); // 실행
        } // 이 닫는 중괄호는 원래 있던 거 유지!
        
        // =====================================================================
        // [3] 파일 페이지 모달 렌더링 및 💡이벤트 위임(Event Delegation)💡
        // =====================================================================
        if (!document.getElementById('global-file-page-modal')) {
            const modalOverlay = document.createElement('div');
            modalOverlay.id = 'global-file-page-modal';
            
            modalOverlay.innerHTML = `
                <div id="file-page-navbar">
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div class="file-page-close-btn" onclick="closeFilePageModal()">← 문서로 돌아가기</div>
                        <div style="font-weight:900; font-size: 18px; letter-spacing:-1px; cursor:pointer;" onclick="location.href='index.html'">HyobinWiki 파일 뷰어</div>
                    </div>
                    <div class="flex items-center gap-2">
                        <input type="text" id="fileSearchInput" placeholder="역명 검색" class="p-1.5 px-4 rounded text-black text-sm w-80 focus:outline-none shadow-inner" onkeypress="if(event.keyCode==13) handleFileSearch()">
                        <button onclick="handleFileSearch()" class="bg-[#555588] p-1.5 px-5 rounded text-sm hover:bg-[#444477] font-bold transition-colors" style="border:none; color:white; cursor:pointer;">검색</button>
                    </div>
                </div>
                <div id="file-page-content">
                    <div class="file-page-header-container">
                        <h1 class="file-page-title">파일:<span id="file-modal-filename">이미지</span></h1>
                        <div class="file-page-tools">
                            <button class="file-page-tool-btn">☆</button>
                            <button class="file-page-tool-btn">편집</button>
                            <button class="file-page-tool-btn">토론</button>
                            <button class="file-page-tool-btn">역사</button>
                        </div>
                    </div>

                    <div class="file-warning-box">
                        <div class="file-warning-text">
                            <strong>이 파일은 효빈위키에서 제한된 한도 안에서 쓰입니다.</strong>
                            본 이미지는 퍼블릭 도메인 혹은 자유이용 저작물이 아닌, 독점적 저작권이 존재하는 이미지입니다. 효빈위키는 본 이미지를 <span style="color:#0055AA; font-weight:bold; text-decoration:underline;">제한된 한도</span> 안에서 이용합니다.<br><br>
                            <span style="font-size: 0.85rem; color:#666;">
                            ※ 다음과 같은 사항을 참조하시기 바랍니다.<br>
                            1. 권리자는 하단 이미지가 효빈위키에 게시되어 권리자의 정당한 권리를 침해한다고 여겨진다면 권리침해 도움말 문서 참고 후 문의해 주세요.<br>
                            2. 이 이미지를 업로드하거나 재사용하는 경우 법적 책임이 부과될 수 있음을 숙지해 주세요.<br>
                            3. 이 이미지의 출처는 효빈위키가 아닙니다. 이미지를 재사용하는 경우 효빈위키를 출처로 작성하지 마세요.
                            </span>
                        </div>
                        <div class="file-warning-icon">ⓒ</div>
                    </div>

                    <div class="file-page-img-wrapper">
                        <img id="file-page-main-img" alt="파일 원본 이미지">
                    </div>
                    
                    <div class="zoom-hint-text">💡 이미지 위에서 마우스 휠을 굴려 확대/축소하고, 드래그하여 이동할 수 있습니다. (더블클릭 시 초기화)</div>

                    <h3 class="file-info-h3">1. 기본 정보</h3>
                    <table class="file-info-table">
                        <tbody>
                            <tr><th>출처</th><td>효빈교통공사 및 효빈위키 유저 기여</td></tr>
                            <tr><th>날짜</th><td>최근 수정됨</td></tr>
                            <tr><th>저작자</th><td>해당 이미지 원작자 및 효빈위키</td></tr>
                            <tr><th>저작권</th><td><span style="color:#d9534f; font-weight:bold;">제한적 이용 (Copyrighted)</span></td></tr>
                            <tr><th>기타 정보</th><td id="file-modal-extra-info">해당 파일에 대한 추가 정보가 등록되지 않았습니다.</td></tr>
                        </tbody>
                    </table>

                    <h3 class="file-info-h3">2. 이미지 설명</h3>
                    <div class="file-desc-box">
                        <span id="file-modal-desc">효빈위키에 업로드된 문서용 이미지입니다.</span>
                    </div>
                </div>

                <footer class="modal-wiki-footer">
                    <div class="modal-wiki-footer-container">
                        <div class="modal-wiki-footer-disclaimer">
                            이 저작물은 <span class="font-bold text-black">CC BY-NC-SA 2.0 KR</span>에 따라 이용할 수 있습니다.<br>
                            기여하신 문서의 저작권은 각 기여자에게 있으며, 각 기여자는 기여하신 부분의 저작권을 갖습니다.<br><br>
                            효빈위키는 백과사전이 아니며 검증되지 않았거나, 편향적이거나, 잘못된 서술이 있을 수 있습니다.
                        </div>
                    </div>
                </footer>
            `;
            
            document.body.appendChild(modalOverlay);
        }

        const modalOverlay = document.getElementById('global-file-page-modal');
        const modalImg = document.getElementById('file-page-main-img');
        const filenameSpan = document.getElementById('file-modal-filename');
        const descSpan = document.getElementById('file-modal-desc');

        // 전역 모달 닫기
        window.closeFilePageModal = () => {
            modalOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
            resetZoom();
        };

        // 줌 및 패닝 로직
        let currentScale = 1, translateX = 0, translateY = 0, isDragging = false, startX = 0, startY = 0;
        const MIN_SCALE = 0.5, MAX_SCALE = 5.0, SCALE_STEP = 0.2; 

        const updateTransform = (useTransition = false) => {
            if(!modalImg) return;
            modalImg.style.transition = useTransition ? 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)' : 'none';
            modalImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
        };

        const resetZoom = () => {
            currentScale = 1; translateX = 0; translateY = 0;
            updateTransform(true); 
        };

        if(modalImg) {
            modalImg.addEventListener('wheel', (e) => {
                e.preventDefault(); 
                if (e.deltaY < 0) currentScale += SCALE_STEP; else currentScale -= SCALE_STEP; 
                currentScale = Math.min(Math.max(MIN_SCALE, currentScale), MAX_SCALE);
                updateTransform(false);
            }, { passive: false });

            modalImg.addEventListener('mousedown', (e) => {
                e.preventDefault(); isDragging = true;
                startX = e.clientX - translateX; startY = e.clientY - translateY;
                updateTransform(false); 
            });

            window.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                translateX = e.clientX - startX; translateY = e.clientY - startY;
                updateTransform(false);
            });

            window.addEventListener('mouseup', () => { isDragging = false; });
            modalImg.addEventListener('dblclick', (e) => { e.preventDefault(); e.stopPropagation(); resetZoom(); });
        }

        // 💡 핵심: 이벤트 위임 (Event Delegation)
        // document.body에 이벤트를 걸어, 이미지가 언제 추가되든 무조건 낚아챔
        document.body.addEventListener('dblclick', (e) => {
            // 더블클릭한 대상이 이미지(img)이고, 모달 창 내부의 큰 이미지가 아닐 때만 실행
            if (e.target.tagName === 'IMG' && e.target.id !== 'file-page-main-img') {
                e.preventDefault();
                
                if (!modalOverlay || !modalImg) return; // 모달이 렌더링 안 됐으면 무시

                // 이미지 소스 주입
                modalImg.src = e.target.src;

                // 파일명 추출
                let rawFilename = e.target.getAttribute('src');
                if(rawFilename) {
                    let parts = rawFilename.split('/');
                    let rawName = parts[parts.length - 1];
                    try { filenameSpan.innerText = decodeURIComponent(rawName); }
                    catch(err) { filenameSpan.innerText = rawName; }
                } else {
                    filenameSpan.innerText = "알수없는_이미지.webp";
                }
                
                // 설명(alt) 추출
                let imgAlt = e.target.getAttribute('alt');
                if(imgAlt && imgAlt.trim() !== '') descSpan.innerText = imgAlt; 
                else descSpan.innerText = "효빈위키 문서용 참고 이미지입니다.";

                // 모달 띄우기
                modalOverlay.style.display = 'block';
                document.body.style.overflow = 'hidden'; 
                modalOverlay.scrollTop = 0;
                resetZoom(); 
            }
        });

        // =====================================================================
        // [4] 전역 푸터(Footer) 일괄 수정
        // =====================================================================
        const footerElement = document.querySelector('.wiki-footer');
        if (footerElement) {
            footerElement.innerHTML = `
                <div class="wiki-footer-container text-center md:text-left font-bold opacity-70">
                    <div class="wiki-footer-disclaimer">
                        이 저작물은 <span class="font-bold text-black">CC BY-NC-SA 2.0 KR</span>에 따라 이용할 수 있습니다.<br>
                        기여하신 문서의 저작권은 각 기여자에게 있으며, 각 기여자는 기여하신 부분의 저작권을 갖습니다.<br><br>
                        효빈위키는 백과사전이 아니며 검증되지 않았거나, 편향적이거나, 잘못된 서술이 있을 수 있습니다.
                    </div>
                </div>
            `;
        }

        // =====================================================================
        // [5] 주석 툴팁 스크립트
        // =====================================================================
        const tooltip = document.getElementById('wiki-fn-tooltip');
        const fnLinks = document.querySelectorAll('.wiki-fn-link');
        if (tooltip) {
            fnLinks.forEach(link => {
                link.addEventListener('mouseenter', (e) => {
                    const anchor = link.querySelector('a');
                    if (!anchor) return;
                    const targetId = anchor.getAttribute('href').substring(1);
                    const footnoteItem = document.getElementById(targetId);
                    if (footnoteItem) {
                        tooltip.innerHTML = footnoteItem.innerHTML.replace(/<a.*class="wiki-back-link".*>.*<\/a>/g, '').trim();
                        tooltip.style.display = 'block';
                    }
                });
                link.addEventListener('mousemove', (e) => {
                    tooltip.style.left = (e.pageX + 15) + 'px';
                    tooltip.style.top = (e.pageY + 15) + 'px';
                });
                link.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });
            });
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    let tooltip = document.getElementById('wiki-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'wiki-tooltip';
        tooltip.style.cssText = 'position: absolute; background: white; border: 1px solid #999; padding: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); max-width: 350px; z-index: 9999; font-size: 0.85rem; border-radius: 4px; line-height: 1.4; color: #333; pointer-events: none; display: none;';
        document.body.appendChild(tooltip);
    }

    // data-content가 있는 경우와 #fn- 링크 형태를 모두 잡아냅니다.
    const fnLinks = document.querySelectorAll('.wiki-fn-link, a[href^="#fn-"]');
    fnLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            let content = link.getAttribute('data-content');
            
            // data-content가 없다면 href(#fn-...)를 추적해서 하단 각주 내용을 가져옴
            if (!content) {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    const target = document.querySelector(href);
                    if (target) {
                        let clone = target.cloneNode(true);
                        const backLink = clone.querySelector('a[href^="#rfn-"]');
                        if (backLink) backLink.remove();
                        content = clone.innerHTML;
                    }
                }
            }

            if (content) {
                tooltip.innerHTML = content;
                tooltip.style.display = 'block';
            }
        });

        link.addEventListener('mousemove', (e) => {
            tooltip.style.left = (e.pageX + 15) + 'px';
            tooltip.style.top = (e.pageY + 15) + 'px';
        });

        link.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. 랜덤 광고 삽입 로직 (좌우 배치 유지 + 이미지 2배 뻥튀기 버전)
    // ==========================================
    const ads = [
        { title: "효빈지하철 2호선 하루빈과 함께!", img: "이미지/하루빈_2호선래핑.webp", link: "효빈도시철도.html" },
        { title: "제17회 효빈 애니메이션 페스티벌", img: "이미지/HAF광고.webp", link: "HAF.html" },
        { title: "박효빈 시장의 발전 계획", img: "이미지/효빈광역시청.webp", link: "박효빈.html" },
        { title: "즐거운 일상의 시작, 효빈교통공사!", img: "이미지/효빈광역시광고.webp", link: "효빈교통공사.html" },
        { title: "제작진이 WD-40을 들이마시고 만든 쁘띠 레일루미네!", img: "이미지/쁘띠레일루미네.webp", link: "쁘띠 레일루미네.html" },
        { title: "펜타곤시티 입주민 모집: 길 잃을 걱정 없는 5각형의 미학", img: "이미지/펜타곤시티.webp", link: "산곡건설.html" },
        { title: "철근보다 감성을 붓습니다. 산곡건설, 당신의 로망을 시공합니다.", img: "이미지/산곡건설.webp", link: "산곡건설.html" },
        { title: "스퀘어시티 입주 시작: 세상에서 가장 완벽한 폴리곤을 소유하세요.", img: "이미지/스퀘어시티.webp", link: "산곡건설.html" },
        { title: "HUDC의 아파트가 지겨울 때, 튼튼한 기하학의 산곡건설", img: "이미지/산곡건설_로고.webp", link: "산곡건설.html" },
        { title: "글로벌 인재와 실무 기술의 만남, 대찬대학교", img: "이미지/대찬대학교.webp", link: "대찬대학교.html" },
        { title: "당신의 최애가 달립니다! 칠양여객 이타샤 버스", img: "이미지/시즈쿠간선버스.webp", link: "칠양여객.html" },
        { title: "【신규 역장 특전】 지금 접속 시 무료 300연차 & 사능동 소금빵 500개 지급! 리세마라 0티어 [UR 골든 아워 박라미] 확정 획득 찬스!", img: "이미지/레일루미네_스마일_페스티벌.webp", link: "레일루미네_스마일 페스티벌.html" },
        { title: "🚨국회의원도 기겁한 논란의 그 게임! '효빈 집 침실' 배경 풀더빙 상호작용 업데이트! 당장 플레이하세요", img: "이미지/효빈집침실.webp", link: "레일루미네_스마일 페스티벌.html" },
        { title: "\"선배님 이름 조별과제에서 뺍니다? 찡긋~💕\" 어뮤즈의 광견 [SSR 전노아] 한정 픽업 진행 중! (지금 다운로드)", img: "이미지/전노아_과잠2.webp", link: "레일루미네_스마일_페스티벌_게임.html" },
        { title: "Lv.1 짬처리 역무원 박빛나 ➡️ Lv.99 단말기 퀵드로우 마스터! 당신만의 철도 미소녀를 육성하세요!", img: "이미지/박빛나.webp", link: "레일루미네_스마일_페스티벌_게임.html" },{ 
  title: "🚨[경보] \"오빠... 방금 다른 역무원 뽑은 거야...?\" GPS 우정 팔찌 위치 추적 가동! [UR 흑묘 임세하] 픽업", 
  img: "이미지/임세하.webp", 
  link: "임세하.html" 
},
{ 
  title: "정비복 속에 봉인된 B87의 압도적 중장갑! 효빈대 기계공학과 수석의 끈적한(?) 특별 과외가 시작됩니다!", 
  img: "이미지/임세하_수영복.webp", 
  link: "임세하.html" 
},
{ 
  title: "【신규 유저 보상】 지금 가입 시 '부활의 영약 WD-40' 100개 & 퍼지바 500개 즉시 지급! 3천만원짜리 모터를 수리하세요!", 
  img: "이미지/임세하_프로필.webp", 
  link: "임세하.html" 
}
    ];

    const injectAd = () => {
        // 이미 광고가 삽입되어 있으면 중단
        if (document.getElementById('wiki-inserted-ad')) return;

        // 우선순위: 1.카테고리박스 2.컨텍스트영역
        const selectors = ['.category-box', '#wiki-context-area', '.wiki-context-area'];
        let target = null;
        
        for (let sel of selectors) {
            target = document.querySelector(sel);
            if (target) break;
        }

        // 타겟을 찾았다면 광고 생성 및 삽입
        if (target) {
            const randomAd = ads[Math.floor(Math.random() * ads.length)];
            const adDiv = document.createElement('div');
            
            adDiv.id = 'wiki-inserted-ad'; 
            
            // 💡 2번 솔루션: 왼쪽 이미지 영역을 280px로 뻥튀기! (머리 짤림은 contain으로 완벽 방어)
            adDiv.innerHTML = `
                <div style="width: 100%; max-width: 728px; margin: 20px auto; border: 1px solid #e5e5e5; border-radius: 8px; background-color: #fafafa; box-shadow: 0 2px 6px rgba(0,0,0,0.05); overflow: hidden;">
                    <a href="${randomAd.link}" style="display: flex; align-items: center; text-decoration: none; color: inherit; padding: 0;">
                        <div style="width: 280px; height: 160px; flex-shrink: 0; background-color: #fff; display: flex; align-items: center; justify-content: center; border-right: 1px solid #eaeaea;">
                            <img src="${randomAd.img}" style="width: 100%; height: 100%; object-fit: contain;">
                        </div>
                        <div style="flex: 1; padding: 20px; display: flex; flex-direction: column; gap: 8px; text-align: left;">
                            <span style="align-self: flex-start; font-size: 11px; font-weight: bold; color: #fff; background-color: #ff4757; padding: 3px 8px; border-radius: 4px; letter-spacing: 0.5px;">AD</span>
                            <p style="font-size: 1.15rem; font-weight: bold; margin: 0; color: #222; line-height: 1.4; word-break: keep-all;">${randomAd.title}</p>
                        </div>
                    </a>
                </div>
            `;
            // 타겟 바로 위에 삽입
            target.parentNode.insertBefore(adDiv, target);
        }
    };

    injectAd();


    // ==========================================
    // 2. 분류(카테고리) 링크 해시 자동 변환 로직
    // ==========================================
    const categoryTargets = ['.category-box', '#wiki-context-area', '.wiki-context-area'];
    
    categoryTargets.forEach(selector => {
        const container = document.querySelector(selector);
        if (container) {
            const links = container.querySelectorAll('a');
            links.forEach(link => {
                const text = link.textContent.trim();
                
                // '분류:' 텍스트가 포함된 링크는 제외하고 카테고리명만 링크로 변환
                if (text && !text.includes('분류:')) {
                    link.href = '분류.html#' + encodeURIComponent(text);
                    link.removeAttribute('onclick');
                }
            });
        }
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const ageElements = document.querySelectorAll(".calc-age");
    const today = new Date(); // 현재 접속한 시각 (오늘 날짜)

    ageElements.forEach(function(el) {
        const birthDateStr = el.getAttribute("data-birthdate");
        const birthYearStr = el.getAttribute("data-birthyear");

        let age = 0;

        // 1) 생년월일(YYYY-MM-DD)이 모두 있는 경우 -> 정확한 만 나이 계산
        if (birthDateStr) {
            const birthDate = new Date(birthDateStr);
            age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            
            // 오늘 날짜 기준으로 생일이 지나지 않았으면 1살 빼기
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
        } 
        // 2) 연도(YYYY)만 있는 경우 -> 연도 기준 계산 (생일 미설정 캐릭터 등)
        else if (birthYearStr) {
            age = today.getFullYear() - parseInt(birthYearStr, 10);
        } else {
            return; // 속성이 둘 다 없으면 계산하지 않음
        }

        // 계산된 만 나이 숫자로 HTML 텍스트 교체
        el.textContent = age;
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('nav');
    if (!navbar) return;

    // [예외 처리] URL이나 문서 제목에 '블라인드'(또는 blind)가 포함된 페이지는 상단 바를 숨기지 않고 항상 고정함
    const currentPath = decodeURIComponent(window.location.pathname + window.location.href).toLowerCase();
    const pageTitle = document.title.toLowerCase();
    if (currentPath.includes('블라인드') || currentPath.includes('blind') || pageTitle.includes('블라인드') || pageTitle.includes('blind')) {
        return; // 스크롤 이벤트를 등록하지 않고 여기서 즉시 종료!
    }

    // 부드럽게 나타나고 사라지도록 애니메이션 효과 적용
    navbar.style.transition = 'transform 0.3s ease-in-out';

    // 스크롤 감지
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 페이지 맨 위(50px 이내)에 도달했을 때만 바를 보여주고, 그 외에는 숨김
        if (scrollTop > 50) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    });
});
// ============================================================================
// 페이지 로드 시 공통 CSS 주입, 모달 HTML 주입(없는 경우만), 설정 초기화
// ============================================================================
document.addEventListener('DOMContentLoaded', function() {
    // 1. 네비게이션 바 스크롤 효과 (맨 위 50px에 도달했을 때만 표시)
    const navbar = document.querySelector('nav');
    if (navbar) {
        navbar.style.transition = 'transform 0.3s ease-in-out';
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 50) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
        });
    }

    // 2. 공통 모달 및 다크 모드 개선 CSS는 문서에 없으면 어떤 페이지든 무조건 주입
    if (!document.getElementById('hyobin-modal-styles')) {
        const modalStyle = `
            <style id="hyobin-modal-styles">
                .modal-overlay {
                    position: fixed !important; top: 0; left: 0; width: 100%; height: 100%;
                    background-color: rgba(0, 0, 0, 0.65); display: none;
                    justify-content: center; align-items: center; z-index: 99999 !important;
                    backdrop-filter: blur(2px);
                }
                .modal-overlay.active, .modal-overlay.show, .modal-overlay.open {
                    display: flex !important;
                }
                .modal-window {
                    background-color: #ffffff; padding: 24px; border-radius: 10px;
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3); width: 90%; max-width: 400px;
                    position: relative; box-sizing: border-box; font-family: inherit; color: #222;
                    border: 1px solid #e5e7eb;
                }
                body.dark-mode { background-color: #1f2023 !important; color: #ddd !important; }
                body.dark-mode nav { background-color: #33334d !important; }
                body.dark-mode .modal-window { background-color: #2a2d30; color: #eee; border-color: #444; }
                body.dark-mode .modal-header { border-bottom: 1px solid #444; color: #fff; }
                body.dark-mode .modal-input { background-color: #1a1a24; border-color: #444; color: #fff; }
                body.dark-mode .modal-input:focus { border-color: #8888cc; }
                .modal-header {
                    font-size: 1.15rem; font-weight: bold; margin-bottom: 18px; padding-bottom: 12px;
                    border-bottom: 1px solid #f0f0f0; display: flex; justify-content: space-between; align-items: center;
                }
                .close-btn { cursor: pointer; font-size: 1.5rem; color: #888; line-height: 1; }
                .close-btn:hover { color: #ef4444; }
                .modal-input {
                    width: 100%; padding: 11px 14px; margin-bottom: 12px; border: 1px solid #ccc;
                    border-radius: 6px; font-size: 0.9rem; box-sizing: border-box; background-color: #fafafa;
                }
                .modal-input:focus { outline: none; border-color: #7777AA; background-color: #fff; }
                .modal-btn {
                    width: 100%; background-color: #666699; color: white; padding: 11px; border: none;
                    border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s; margin-top: 6px;
                }
                .modal-btn:hover { background-color: #555588; }
                .modal-btn-sub { background-color: #6b7280; margin-top: 8px; }
                .modal-btn-sub:hover { background-color: #4b5563; }
                .modal-link { color: #666699; cursor: pointer; font-weight: bold; text-decoration: underline; }
                body.dark-mode .modal-link { color: #6699ff; }
                .setting-item { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; font-size: 0.95rem; }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', modalStyle);
    }

    // 3. 문서 내에 모달창 HTML이 없을 때만(일반 문서들) 모달 HTML 구조를 생성하여 주입
    if (!document.getElementById('loginModal')) {
        const modalHTML = `
            <div id="loginModal" class="modal-overlay" style="display: none;">
                <div class="modal-window">
                    <div class="modal-header">
                        <span>로그인</span>
                        <span class="close-btn" onclick="toggleModal('loginModal')">&times;</span>
                    </div>
                    <div id="loginErrorMsg" style="font-size: 0.8rem; color: #ef4444; margin-bottom: 12px; display: none;"></div>
                    <input type="text" id="loginId" class="modal-input" placeholder="아이디" autocomplete="username">
                    <input type="password" id="loginPw" class="modal-input" placeholder="비밀번호" autocomplete="current-password" onkeypress="if(event.keyCode==13) doLogin()">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 14px; font-size: 0.8rem; color: #6b7280;">
                        <label style="cursor: pointer;"><input type="checkbox" id="keepLogin" style="accent-color: #7777AA;"> 로그인 상태 유지</label>
                        <span class="modal-link" onclick="alert('효빈위키 관리자에게 문의 바랍니다.');">비밀번호 찾기</span>
                    </div>
                    <button class="modal-btn" onclick="doLogin()">로그인</button>
                    <div style="font-size: 0.75rem; margin-top: 14px; text-align: center; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 12px;">
                        계정이 없으신가요? <span class="modal-link" onclick="toggleModal('loginModal'); toggleModal('signupModal');">회원가입</span>
                    </div>
                </div>
            </div>

            <div id="signupModal" class="modal-overlay" style="display: none;">
                <div class="modal-window">
                    <div class="modal-header">
                        <span>회원가입</span>
                        <span class="close-btn" onclick="toggleModal('signupModal')">&times;</span>
                    </div>
                    <div id="signupErrorMsg" style="font-size: 0.8rem; color: #ef4444; margin-bottom: 12px; display: none;"></div>
                    <input type="text" id="signupId" class="modal-input" placeholder="사용할 아이디 (2자 이상)" autocomplete="username">
                    <input type="password" id="signupPw" class="modal-input" placeholder="비밀번호 (4자 이상)" autocomplete="new-password">
                    <input type="password" id="signupPwConfirm" class="modal-input" placeholder="비밀번호 확인" autocomplete="new-password" onkeypress="if(event.keyCode==13) doSignup()">
                    <button class="modal-btn" onclick="doSignup()">가입하기</button>
                    <div style="font-size: 0.75rem; margin-top: 14px; text-align: center; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 12px;">
                        이미 계정이 있으신가요? <span class="modal-link" onclick="toggleModal('signupModal'); toggleModal('loginModal');">로그인</span>
                    </div>
                </div>
            </div>

            <div id="settingsModal" class="modal-overlay" style="display: none;">
                <div class="modal-window">
                    <div class="modal-header">
                        <span>⚙️ 효빈위키 환경설정</span>
                        <span class="close-btn" onclick="toggleModal('settingsModal')">&times;</span>
                    </div>
                    <div class="setting-item">
                        <span>🌙 다크 모드</span>
                        <input type="checkbox" id="darkModeCheck" onchange="toggleDarkMode()" style="width: 18px; height: 18px; accent-color: #7777AA; cursor: pointer;">
                    </div>
                    <div class="setting-item">
                        <span>📐 레이아웃 너비</span>
                        <select id="layoutSelect" onchange="changeLayout(this.value)" style="padding: 6px; border-radius: 4px; border: 1px solid #ccc; background: white; color: #222;">
                            <option value="normal">고정폭 (기본)</option>
                            <option value="wide">광폭 (전체 화면)</option>
                        </select>
                    </div>
                    <div style="margin-bottom: 16px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.95rem;">
                            <span>🔠 글자 크기</span>
                            <span id="fontSizeVal" style="font-weight: bold; color: #6699ff;">100%</span>
                        </div>
                        <input type="range" id="fontSizeRange" min="80" max="130" value="100" step="5" style="width: 100%; accent-color: #7777AA; cursor: pointer;" oninput="changeFontSize(this.value)">
                    </div>
                    <button class="modal-btn mt-4" onclick="toggleModal('settingsModal')">설정 저장 및 닫기</button>
                    <button class="modal-btn modal-btn-sub" onclick="resetSettings()">기본값으로 초기화</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    // 4. [핵심 수정] 저장된 환경설정 적용은 모달 존재 여부와 상관없이 무조건 실행!
    if (localStorage.getItem('hyobin_dark_mode') === 'true') {
        document.body.classList.add('dark-mode');
        const darkCheck = document.getElementById('darkModeCheck');
        if (darkCheck) darkCheck.checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        const darkCheck = document.getElementById('darkModeCheck');
        if (darkCheck) darkCheck.checked = false;
    }

    const savedFontSize = localStorage.getItem('hyobin_font_size');
    if (savedFontSize) {
        document.body.style.fontSize = (savedFontSize / 100) + 'rem';
        const fontRange = document.getElementById('fontSizeRange');
        const fontVal = document.getElementById('fontSizeVal');
        if (fontRange) fontRange.value = savedFontSize;
        if (fontVal) fontVal.textContent = savedFontSize + '%';
    }

    const savedLayout = localStorage.getItem('hyobin_layout');
    if (savedLayout && typeof changeLayout === 'function') {
        changeLayout(savedLayout);
        const layoutSel = document.getElementById('layoutSelect');
        if (layoutSel) layoutSel.value = savedLayout;
    }

    // 5. 상단 네비게이션 로그인 상태 UI 반영 역시 무조건 실행!
    if (typeof updateAuthUI === 'function') {
        updateAuthUI();
    }
});

// 브라우저 기본 자동완성(최근 검색어) 팝업 영구 차단
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('headerSearchInput');
    if (searchInput) searchInput.setAttribute('autocomplete', 'off');
});


document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll('table tr');
    
    rows.forEach(tr => {
        const trText = tr.innerText;
        let badgeClass = '';
        
        if (trText.includes('광역')) badgeClass = 'badge-widearea';
        else if (trText.includes('공항')) badgeClass = 'badge-airport';
        else if (trText.includes('급행')) badgeClass = 'badge-express';
        else if (trText.includes('간선')) badgeClass = 'badge-trunk';
        else if (trText.includes('지선')) badgeClass = 'badge-branch';
        else if (trText.includes('순환')) badgeClass = 'badge-circular';
        else if (trText.includes('마을')) badgeClass = 'badge-village';
        
        if (badgeClass) {
            const links = tr.querySelectorAll('a');
            links.forEach(link => {
                const linkText = link.innerText.trim();
                
                // 각주 클래스이거나 [1], [2] 같은 대괄호 형태의 각주 링크는 무조건 제외
                if (link.classList.contains('wiki-fn') || /^\[\d+\]$/.test(linkText)) {
                    return;
                }
                
                // 링크 텍스트에 숫자가 포함되어 있고, 아직 뱃지가 없으면 부여
                if (/\d/.test(linkText) && !link.classList.contains('transport-badge')) {
                    link.classList.add('transport-badge', badgeClass);
                }
            });
        }
    });
});

// ==========================================
// 💡 인포박스(프로필) 일괄 접기/펼치기 기능
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    // 모든 인포박스를 찾습니다.
    const infoboxes = document.querySelectorAll('.infobox');
    
    infoboxes.forEach(infobox => {
        const titleDiv = infobox.querySelector('.infobox-title');
        if (!titleDiv) return; // 타이틀이 없으면 패스

        // 버튼 위치를 우측 상단에 고정하기 위해 타이틀 박스에 relative 속성 부여
        titleDiv.style.position = 'relative';

        // [접기] 버튼 생성
        const toggleBtn = document.createElement('span');
        toggleBtn.innerText = '[접기]';
        toggleBtn.style.cssText = 'position: absolute; right: 12px; top: 50%; transform: translateY(-50%); font-size: 0.85rem; cursor: pointer; color: #fff; font-weight: normal; opacity: 0.9; background: rgba(0,0,0,0.2); padding: 2px 6px; border-radius: 4px; transition: background 0.2s;';
        
        // 마우스 올렸을 때 호버 효과
        toggleBtn.onmouseover = function() { this.style.background = 'rgba(0,0,0,0.4)'; };
        toggleBtn.onmouseout = function() { this.style.background = 'rgba(0,0,0,0.2)'; };

        // 클릭 이벤트 설정
        toggleBtn.addEventListener('click', function() {
            // is-collapsed 클래스를 토글하여 상태 저장
            const isCollapsed = infobox.classList.toggle('is-collapsed');
            toggleBtn.innerText = isCollapsed ? '[펼치기]' : '[접기]';
            
            // 타이틀 박스를 제외한 인포박스 안의 모든 내용(사진, 표 등)을 숨기거나 보이기
            Array.from(infobox.children).forEach(child => {
                if (child !== titleDiv) {
                    child.style.display = isCollapsed ? 'none' : '';
                }
            });
        });

        // 타이틀 박스에 버튼 추가
        titleDiv.appendChild(toggleBtn);
    });
});
// ==========================================
// 💡 카테고리 박스 첫 줄 자동 접기/펼치기 기능 (CSS 높이 제어 방식)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const categoryBoxes = document.querySelectorAll('.category-box');
    
    categoryBoxes.forEach(box => {
        const titleSpan = box.querySelector('.font-bold');
        if (!titleSpan) return;

        box.style.position = 'relative';
        box.style.paddingRight = '70px';

        // '분류:'를 제외한 나머지 링크 및 텍스트를 담을 래퍼 생성
        const contentWrapper = document.createElement('span');
        contentWrapper.style.cssText = 'display: inline-block; max-height: 1.8em; overflow: hidden; vertical-align: bottom; width: 100%;';

        const nodesToMove = [];
        box.childNodes.forEach(node => {
            if (node !== titleSpan) {
                nodesToMove.push(node);
            }
        });
        nodesToMove.forEach(node => contentWrapper.appendChild(node));
        box.appendChild(contentWrapper);

        // [펼치기] 버튼 생성
        const toggleBtn = document.createElement('span');
        toggleBtn.innerText = '[펼치기]';
        toggleBtn.style.cssText = 'position: absolute; right: 12px; top: 50%; transform: translateY(-50%); font-size: 0.8rem; cursor: pointer; color: #555; font-weight: bold; background: #eaeaea; padding: 2px 6px; border-radius: 4px; transition: background 0.2s;';
        
        toggleBtn.onmouseover = function() { this.style.background = '#d4d4d4'; };
        toggleBtn.onmouseout = function() { this.style.background = '#eaeaea'; };

        box.appendChild(toggleBtn);

        // 초기 상태: 접힘 (첫 줄만 노출)
        box.classList.add('is-collapsed');

        // 클릭 이벤트 설정 (첫 클릭부터 정확히 작동)
        toggleBtn.addEventListener('click', function() {
            const isCollapsed = box.classList.toggle('is-collapsed');
            toggleBtn.innerText = isCollapsed ? '[펼치기]' : '[접기]';
            contentWrapper.style.maxHeight = isCollapsed ? '1.8em' : 'none';
        });
    });
});

// ==========================================
// 💡 효빈위키 스타일 섹션 접기/펼치기 + 우측 [편집] 버튼 (안정성 개선 버전)
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    // 레이아웃 충돌 방지를 위한 스타일 시트 동적 주입
    if (!document.getElementById('wiki-fold-edit-style')) {
        const style = document.createElement('style');
        style.id = 'wiki-fold-edit-style';
        style.innerHTML = `
            h2, h3 {
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                position: relative !important;
            }
            .wiki-heading-left {
                display: flex;
                align-items: center;
                flex-grow: 1;
                overflow: hidden;
            }
            .wiki-fold-btn {
                font-size: 0.65em;
                cursor: pointer;
                color: #888;
                margin-right: 6px;
                user-select: none;
                font-weight: normal;
                flex-shrink: 0;
            }
            .wiki-edit-btn {
                font-size: 0.55em;
                font-weight: normal;
                color: #0056b3;
                text-decoration: none;
                cursor: pointer;
                margin-left: 10px;
                user-select: none;
                flex-shrink: 0;
            }
            .wiki-edit-btn:hover {
                text-decoration: underline;
            }
        `;
        document.head.appendChild(style);
    }

    const headings = document.querySelectorAll('h2, h3');

    headings.forEach((heading, index) => {
        if (heading.querySelector('.wiki-fold-btn')) return;

        // 기존 제목 내부의 HTML 보존
        const originalHTML = heading.innerHTML;
        const match = originalHTML.match(/^(\s*\d+(?:\.\d+)*\.)/);

        const leftContainer = document.createElement('span');
        leftContainer.className = 'wiki-heading-left';

        const toggleBtn = document.createElement('span');
        toggleBtn.className = 'wiki-fold-btn';
        toggleBtn.innerText = '▼';

        const textSpan = document.createElement('span');

        if (match) {
            const numberPart = match[1];
            const restPart = originalHTML.substring(numberPart.length);
            textSpan.innerHTML = numberPart + restPart;
            leftContainer.appendChild(toggleBtn);
            leftContainer.appendChild(textSpan);
        } else {
            leftContainer.appendChild(toggleBtn);
            const textNode = document.createElement('span');
            textNode.innerHTML = originalHTML;
            leftContainer.appendChild(textNode);
        }

        // 우측 끝 [편집] 버튼 생성
        const editBtn = document.createElement('a');
        editBtn.className = 'wiki-edit-btn';
        editBtn.innerText = '[편집]';
        
        const sectionId = heading.id || `s-${index + 1}`;
        heading.id = sectionId;
        editBtn.href = `edit.html?section=${sectionId}`;
        
        // 편집 버튼 클릭 시 접기/펼치기 토글 충돌 방지
        editBtn.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        // 헤더 초기화 후 좌측(토글+제목)과 우측(편집) 배치
        heading.innerHTML = '';
        heading.appendChild(leftContainer);
        heading.appendChild(editBtn);

        // 섹션 내용 래퍼(Wrapper) 생성 및 이동 로직
        const wrapper = document.createElement('div');
        wrapper.className = 'section-content-wrapper';
        
        let curr = heading.nextSibling;
        const headingLevel = parseInt(heading.tagName.substring(1));
        const nodesToMove = [];

        while (curr) {
            if (curr.nodeType === Node.ELEMENT_NODE) {
                const tag = curr.tagName;
                if (headingLevel === 2 && tag === 'H2') break;
                if (headingLevel === 3 && (tag === 'H2' || tag === 'H3')) break;
            }
            let nextNode = curr.nextSibling;
            nodesToMove.push(curr);
            curr = nextNode;
        }

        nodesToMove.forEach(node => wrapper.appendChild(node));
        heading.parentNode.insertBefore(wrapper, heading.nextElementSibling);

        let isCollapsed = false;

        // 접기/펼치기 토글 이벤트
        toggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            isCollapsed = !isCollapsed;
            toggleBtn.innerText = isCollapsed ? '▶' : '▼';
            wrapper.style.display = isCollapsed ? 'none' : '';
        });
    });
});
// 1. 전역 최상위 goToLink 함수 (동음이의어 사전 매칭 + 새 탭 허용)
window.goToLink = function(filename, event) {
    // 마우스 휠 클릭(가운데 클릭)이나 Ctrl+클릭 시 브라우저 기본 새 탭 열기 허용
    if (event && (event.button === 1 || event.ctrlKey || event.metaKey)) return;
    if (event) event.preventDefault();

    if (!filename || filename.startsWith('#')) return;

    const namuKeywords = ['대한민국', '국립대학', '사립대학', '박효빈'];
    const pureName = filename.replace('.html', '');
    const searchName = pureName.replace(/_/g, ' '); 

    // ① 효빈위키 예외 키워드 처리
    if (namuKeywords.includes(searchName) || filename.includes('namu.wiki')) {
        window.open(`https://namu.wiki/w/${encodeURIComponent(searchName)}`, '_blank');
        return;
    }

    // ② 핵심! 동음이의어(HB_WIKI_ALIASES) 매칭 확인
    if (window.HB_WIKI_ALIASES && window.HB_WIKI_ALIASES[pureName]) {
        location.href = window.HB_WIKI_ALIASES[pureName]; 
        return;
    }

    // ③ 일반 이동
    location.href = filename;
};

// 2. 뷰포트에 새로 생기는 동적 요소(인포박스, JS 로드 템플릿 등)까지 실시간 추적하여 링크와 마우스 휠 살리기
function autoPatchWikiLinks() {
    document.querySelectorAll('a[onclick*="goToLink"], a.wiki-link, a.hb-link').forEach(a => {
        let onclickAttr = a.getAttribute('onclick');
        
        if (onclickAttr) {
            const match = onclickAttr.match(/goToLink\s*\(\s*'([^']+)'/);
            if (match && match[1]) {
                const url = match[1];
                a.setAttribute('href', url); // 브라우저가 진짜 링크로 인식하게 만들어 휠 클릭(새 탭) 활성화
                a.setAttribute('onclick', `goToLink('${url}', event); return false;`);
            }
        }
    });
}

// 페이지가 처음 열릴 때 및 인포박스 등 자바스크립트로 내용이 나중에 채워질 때 자동 실행
document.addEventListener("DOMContentLoaded", () => {
    autoPatchWikiLinks();
    
    // 동적으로 생성되는 HTML(대찬대학교 인포박스 등)을 실시간 감시하여 링크 자동 보정
    const observer = new MutationObserver(() => {
        autoPatchWikiLinks();
    });
    observer.observe(document.body, { childList: true, subtree: true });
});