document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // --- IndexedDB 초기화 및 도우미 함수 (Promise 기반) ---
    const DB_NAME = 'HyobinBlindDB';
    const STORE_NAME = 'commentsStore';

    const initDB = () => {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, 1);
            request.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME); // pageId를 Key로 사용
                }
            };
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    };

    const getCommentsDB = async (pageId) => {
        const db = await initDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const request = store.get(pageId);
            request.onsuccess = () => resolve(request.result || []);
            request.onerror = () => reject(request.error);
        });
    };

    const setCommentsDB = async (pageId, comments) => {
        const db = await initDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const request = store.put(comments, pageId);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    };

    // --- 엄청난 규모의 회사/기관 리스트 배열 생성 ---
    const companyList = [
        "새회사", "효빈광역시청", "효빈경찰서", "대법원", "삼성전자", "LG전자", "희산공업", "회주공업", "두청운수", "더불어민주당", "자영업자", "무직",
        "효빈광역시상수도", "효빈광역시하수도", "효빈관광공사", "효빈교통공사", "효빈도시공사", "효빈시설공단", "효빈환경공단", "효빈문화공사",
        "효빈경제진흥원", "효빈글로벌도시재단", "효빈디자인진흥원", "효빈문화재단", "효빈연구원", "효빈광역시사회서비스원", "효빈신용보증재단", "효빈성평등가족과 평생교육진흥원", "효빈의료원", "효빈정보산업진흥원", "효빈테크노파크", "만화애니메이션의전당", "효빈산업과학혁신원", "효빈문화회관", "효빈애니메이션본부",
        "HSCO", "효빈 컬쳐레스풀",
        "북구청", "남구청", "동구청", "중구청", "서구청", "청엽구청", "창전구청", "안천구청", "탄성군청",
        "덕북도청", "강주시청", "계성시청", "군천시청", "서진시청", "서해시청", "약산시청", "전산시청", "천주시청", "빈주시청", "기도군청", "낭원군청", "덕현군청", "모제군청", "반양군청", "상안군청", "선곡군청", "저천군청", "치원군청",
        "덕남도청", "매성시청", "비천시청", "방산시청", "마진시청", "하정시청", "낙주시청", "덕주시청", "곡천군청", "매산군청", "석창군청", "분주군청", "고포군청", "인곡군청", "관수군청", "운진군청", "두원군청", "원안군청",
        "빈주도시철도공사", "덕주도시철도공사", "칠양여객", "효빈여객", "소진여객", "청엽여객", "송포여객", "입포여객", "임천여객", "이자여객", "창전여객", "판주여객", "효안교통", "내삼여객", "월주여객", "중성여객", "남주여객", "오진여객", "청선여객", "탄성여객", "안천고속", "덕빈고속", "대교여객", "대산고속", "효빈고속"
    ];
    
    const generateOptions = () => companyList.map(c => `<option value="${c}">${c}</option>`).join('');

    // 1. 페이지 고유 ID 자동 추출 (파일명 기준)
    let pageId = 'blind_default';
    const url = decodeURIComponent(window.location.href);
    const match = url.match(/효빈블라인드(\d+)/);
    if (match) pageId = 'blind_post_' + match[1];

    // 2. 검색 기능
    const searchInput = document.getElementById('searchInput');
    if(searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) window.location.href = `효빈블라인드_메인.html?search=${encodeURIComponent(query)}`;
            }
        });
    }

    // 3. 메인 댓글 입력창에 '회사 선택' 드롭다운 동적 추가
    const mainInputArea = document.querySelector('.comment-area .flex.gap-3');
    if (mainInputArea && !document.getElementById('mainCompanySelect')) {
        const selectHTML = `
            <select id="mainCompanySelect" class="w-32 px-3 py-2 border border-gray-300 rounded-full text-sm font-bold text-gray-700 focus:outline-none focus:border-blind-red bg-white cursor-pointer">
                ${generateOptions()}
            </select>
        `;
        mainInputArea.insertAdjacentHTML('afterbegin', selectHTML);
    }

    // 4. 기존 하드코딩된 댓글들에 고유 ID 부여 및 '답글' 버튼 일괄 추가
    let hcIndex = 0;
    document.querySelectorAll('.comment-item, .reply-item').forEach(el => {
        if (!el.dataset.id) el.dataset.id = 'hc_' + (hcIndex++);
        
        const btnGroup = el.querySelector('.flex.gap-2');
        if (btnGroup && !btnGroup.closest('.border-t') && !btnGroup.querySelector('[data-lucide="message-square"]')) {
            btnGroup.insertAdjacentHTML('beforeend', `
                <button class="icon-btn reply-btn" data-target="${el.dataset.id}">
                    <i data-lucide="message-square" class="w-4 h-4"></i> <span class="like-count">답글</span>
                </button>
            `);
        }
    });
    lucide.createIcons();

    // 5. 댓글 및 답글 생성 HTML 템플릿 함수
    const commentListArea = document.getElementById('comments-list');
    const mainCommentInput = document.getElementById('commentInput');
    const mainSubmitBtn = document.getElementById('submitCommentBtn');

    const generateCommentHTML = (c, isNew, isReply) => {
        const highlightStyle = isNew ? 'background-color: #fff9fa; border-left: 3px solid #da3238;' : '';
        const className = isReply ? 'reply-item' : 'comment-item';
        const displayCompany = c.company || '새회사';
        
        let companyColor = 'text-[#37acc9]';
        if (displayCompany === '새회사') companyColor = 'text-amber-500';
        else if (displayCompany === '더불어민주당') companyColor = 'text-blue-500';
        else if (displayCompany === '무직' || displayCompany === '효빈시의회' || displayCompany === '두청운수') companyColor = 'text-[#da3238]';

        const deleteBtnHTML = c.isMine ? `
            <button class="icon-btn delete-btn text-gray-400 hover:text-red-500 transition" data-target="${c.id}" title="삭제">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
        ` : '';

        return `
            <div class="${className}" style="${highlightStyle}" data-id="${c.id}">
                <div class="flex justify-between items-start mb-1">
                    <span class="company-tag font-bold ${companyColor}">${displayCompany} <span class="text-[11px] text-gray-400 font-normal ml-1">${c.time}</span></span>
                    <div class="flex gap-2">
                        <button class="icon-btn ${c.isLiked ? 'liked' : ''}" data-id="${c.id}">
                            <i data-lucide="thumbs-up" class="w-4 h-4"></i> <span class="like-count">${c.likes}</span>
                        </button>
                        <button class="icon-btn ${c.isDisliked ? 'disliked' : ''}" data-id="${c.id}">
                            <i data-lucide="thumbs-down" class="w-4 h-4"></i> <span class="like-count">${c.dislikes}</span>
                        </button>
                        <button class="icon-btn reply-btn" data-target="${c.id}">
                            <i data-lucide="message-square" class="w-4 h-4"></i> <span class="like-count">답글</span>
                        </button>
                        ${deleteBtnHTML}
                    </div>
                </div>
                <p class="text-sm font-bold text-gray-800 mb-1">익명</p>
                <p class="text-sm text-gray-700 whitespace-pre-wrap">${c.text}</p>
            </div>
        `;
    };

    const addMainComment = (c, isNew = true) => {
        commentListArea.insertAdjacentHTML('beforeend', generateCommentHTML(c, isNew, false));
        if (window.lucide) lucide.createIcons();
    };

    const insertReplyAfterParentBlock = (replyObj, parentId, isNew = true) => {
        let targetEl = document.querySelector(`[data-id="${parentId}"]`);
        if (!targetEl) {
            addMainComment(replyObj, isNew);
            return;
        }

        let insertAfterEl = targetEl;
        if (targetEl.classList.contains('comment-item')) {
            while (insertAfterEl.nextElementSibling && insertAfterEl.nextElementSibling.classList.contains('reply-item')) {
                insertAfterEl = insertAfterEl.nextElementSibling;
            }
        }
        
        insertAfterEl.insertAdjacentHTML('afterend', generateCommentHTML(replyObj, isNew, true));
        if (window.lucide) lucide.createIcons();
    };

    // 6. IndexedDB 데이터 로드 (async)
    const loadComments = async () => {
        const comments = await getCommentsDB(pageId);
        const updatedComments = comments.map(c => ({
            id: c.id || Date.now() + Math.random(),
            parentId: c.parentId || null,
            company: c.company || '새회사',
            text: c.text,
            time: c.time,
            likes: c.likes || 0,
            isLiked: c.isLiked || false,
            dislikes: c.dislikes || 0,
            isDisliked: c.isDisliked || false,
            isMine: c.isMine || false
        }));
        
        await setCommentsDB(pageId, updatedComments);
        
        updatedComments.forEach(c => {
            if (c.parentId) insertReplyAfterParentBlock(c, c.parentId, false);
            else addMainComment(c, false);
        });
    };

    // 7. 메인 댓글 등록 (async)
    const submitMainComment = async () => {
        if (!mainCommentInput) return;
        const text = mainCommentInput.value.trim();
        if (!text) return;

        const companySelect = document.getElementById('mainCompanySelect');
        const selectedCompany = companySelect ? companySelect.value : '새회사';

        const now = new Date();
        const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        const newComment = { id: Date.now(), parentId: null, company: selectedCompany, text, time, likes: 0, isLiked: false, dislikes: 0, isDisliked: false, isMine: true };
        
        addMainComment(newComment, true);
        
        // DB에 저장
        const comments = await getCommentsDB(pageId);
        comments.push(newComment);
        await setCommentsDB(pageId, comments);

        mainCommentInput.value = '';
        commentListArea.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    if (mainSubmitBtn) mainSubmitBtn.addEventListener('click', submitMainComment);
    if (mainCommentInput) mainCommentInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') submitMainComment(); });

    // 8. 통합 클릭 이벤트 위임 (async 처리)
    document.addEventListener('click', async (e) => {
        
        // -- 8-0. 삭제 버튼 클릭 --
        const deleteBtn = e.target.closest('.delete-btn');
        if (deleteBtn) {
            if (!confirm('정말로 이 댓글을 삭제하시겠습니까?')) return;
            
            const targetId = deleteBtn.dataset.target;
            const commentEl = document.querySelector(`[data-id="${targetId}"]`);
            if (commentEl) commentEl.remove();

            let comments = await getCommentsDB(pageId);
            comments = comments.filter(c => c.id != targetId && c.parentId != targetId);
            await setCommentsDB(pageId, comments);
            
            document.querySelectorAll('.reply-item').forEach(replyEl => {
                if(!document.querySelector(`[data-id="${targetId}"]`) && replyEl.dataset.parentId == targetId) {
                    replyEl.remove();
                }
            });
            return;
        }

        // -- 8-1. 답글 쓰기 버튼 클릭 시 인라인 입력창 토글 --
        const replyBtn = e.target.closest('.reply-btn');
        if (replyBtn) {
            const targetId = replyBtn.dataset.target;
            const container = document.querySelector(`[data-id="${targetId}"]`);
            if (!container) return;

            let existingBox = container.nextElementSibling;
            if (existingBox && existingBox.classList.contains('reply-input-box')) {
                existingBox.remove();
                return;
            }
            
            document.querySelectorAll('.reply-input-box').forEach(el => el.remove());
            
            const boxHTML = `
                <div class="reply-input-box px-5 py-3 bg-gray-100 flex gap-2 border-b border-gray-200" style="padding-left: 40px;">
                    <select id="inlineCompanySelect_${targetId}" class="w-28 px-2 py-2 border border-gray-300 rounded-full text-xs font-bold text-gray-700 focus:outline-none focus:border-blind-red bg-white cursor-pointer">
                        ${generateOptions()}
                    </select>
                    <input type="text" class="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-blind-red" placeholder="답글을 남겨주세요." id="inlineReplyInput">
                    <button class="bg-blind-red text-white font-bold px-4 py-2 rounded-full text-sm hover:bg-red-700 transition" id="inlineReplySubmit" data-parent="${targetId}">등록</button>
                </div>
            `;
            container.insertAdjacentHTML('afterend', boxHTML);
            document.getElementById('inlineReplyInput').focus();
            return;
        }

        // -- 8-2. 인라인 답글 [등록] 버튼 클릭 (async) --
        const inlineSubmit = e.target.closest('#inlineReplySubmit');
        if (inlineSubmit) {
            const parentId = inlineSubmit.dataset.parent;
            const inputEl = document.getElementById('inlineReplyInput');
            const companySelect = document.getElementById(`inlineCompanySelect_${parentId}`);
            
            const text = inputEl.value.trim();
            const selectedCompany = companySelect ? companySelect.value : '새회사';
            if (!text) return;
            
            const now = new Date();
            const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
            
            const newReply = { id: Date.now(), parentId, company: selectedCompany, text, time, likes: 0, isLiked: false, dislikes: 0, isDisliked: false, isMine: true };
            
            inlineSubmit.closest('.reply-input-box').remove();
            insertReplyAfterParentBlock(newReply, parentId, true);
            
            const comments = await getCommentsDB(pageId);
            comments.push(newReply);
            await setCommentsDB(pageId, comments);
            return;
        }

        // -- 8-3. 좋아요 / 싫어요 처리 (async) --
        const btn = e.target.closest('.icon-btn');
        if (!btn || btn.classList.contains('reply-btn') || btn.classList.contains('delete-btn')) return;
        if (btn.querySelector('[data-lucide="message-square"]') || btn.querySelector('[data-lucide="trash-2"]')) return;

        const isUpvote = btn.querySelector('[data-lucide="thumbs-up"]') !== null;
        const isDownvote = btn.querySelector('[data-lucide="thumbs-down"]') !== null;
        if (!isUpvote && !isDownvote) return;

        const container = btn.parentElement;
        const upBtn = Array.from(container.querySelectorAll('.icon-btn')).find(b => b.querySelector('[data-lucide="thumbs-up"]'));
        const downBtn = Array.from(container.querySelectorAll('.icon-btn')).find(b => b.querySelector('[data-lucide="thumbs-down"]'));

        const ensureCountSpan = (button) => {
            if(!button) return null;
            let countEl = button.querySelector('.font-bold') || button.querySelector('.like-count') || button.querySelector('span:not(.font-bold)');
            if (!countEl) {
                let textNode = Array.from(button.childNodes).find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim().length > 0);
                if (textNode) {
                    const span = document.createElement('span');
                    span.className = 'like-count ml-1';
                    span.textContent = textNode.textContent.trim();
                    button.replaceChild(span, textNode);
                    countEl = span;
                }
            }
            return countEl;
        };

        let upCountEl = ensureCountSpan(upBtn);
        let downCountEl = ensureCountSpan(downBtn);

        let upCount = upCountEl ? (parseInt(upCountEl.textContent.replace(/,/g, '')) || 0) : 0;
        let downCount = downCountEl ? (parseInt(downCountEl.textContent.replace(/,/g, '')) || 0) : 0; // 수정된 부분

        let isLiked = upBtn && upBtn.classList.contains('liked');
        let isDisliked = downBtn && downBtn.classList.contains('disliked');

        if (isUpvote) {
            if (isLiked) { upBtn.classList.remove('liked'); upCount--; isLiked = false; } 
            else { upBtn.classList.add('liked'); upCount++; isLiked = true;
                if (isDisliked && downBtn) { downBtn.classList.remove('disliked'); downCount--; isDisliked = false; }
            }
        } else if (isDownvote) {
            if (isDisliked) { downBtn.classList.remove('disliked'); downCount--; isDisliked = false; } 
            else { downBtn.classList.add('disliked'); downCount++; isDisliked = true;
                if (isLiked && upBtn) { upBtn.classList.remove('liked'); upCount--; isLiked = false; }
            }
        }

        if (upCountEl) upCountEl.textContent = upCount.toLocaleString();
        if (downCountEl) downCountEl.textContent = downCount.toLocaleString();

        const commentId = btn.dataset.id || (upBtn && upBtn.dataset.id) || (downBtn && downBtn.dataset.id);
        if (commentId && !commentId.includes('main_post')) {
            const comments = await getCommentsDB(pageId);
            const commentIndex = comments.findIndex(c => c.id == commentId);
            if (commentIndex !== -1) {
                comments[commentIndex].likes = upCount;
                comments[commentIndex].isLiked = isLiked;
                comments[commentIndex].dislikes = downCount;
                comments[commentIndex].isDisliked = isDisliked;
                await setCommentsDB(pageId, comments);
            }
        }
    });

    // 9. 인라인 답글 입력창 엔터키 지원
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.target.id === 'inlineReplyInput') {
            const submitBtn = document.getElementById('inlineReplySubmit');
            if (submitBtn) submitBtn.click();
        }
    });

    // 로딩 로직 실행
    loadComments();
});