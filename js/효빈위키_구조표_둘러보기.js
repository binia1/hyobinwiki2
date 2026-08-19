document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("hyobinwiki-structure-container");
    
    if (container) {
        container.innerHTML = `
        <style>
            /* 구조표 삽입 스타일 (CSS 변수 호환 및 폴백 적용) */
            .hb-structure-container { border: 1px solid var(--wiki-main, #7777AA); margin-bottom: 30px; background-color: var(--wiki-box-bg, #ffffff); margin-top: 15px; }
            .hb-structure-header { background-color: var(--wiki-main, #7777AA); color: white; padding: 8px 15px; font-weight: bold; font-size: 1rem; display: flex; align-items: center; gap: 8px; }
            .hb-structure-row { display: flex; border-bottom: 1px solid var(--wiki-border, #ccc); padding: 8px 15px; align-items: flex-start; }
            .hb-structure-row:last-child { border-bottom: none; }
            .hb-badge { background-color: var(--wiki-main, #7777AA); color: white; font-weight: bold; font-size: 0.8rem; padding: 3px 8px; border-radius: 4px; white-space: nowrap; margin-right: 15px; min-width: 80px; text-align: center; }
            .hb-structure-links { font-size: 0.85rem; line-height: 1.8; }
            .hb-structure-links a { color: var(--wiki-text, #373a3c); text-decoration: none; font-weight: 500; }
            .hb-structure-links a:hover { color: var(--wiki-link, #0055AA); text-decoration: underline; }
            .hb-structure-links .separator { margin: 0 6px; color: #999; }
        </style>

        <div class="hb-structure-container shadow-sm">
            <div class="hb-structure-header">📘 효빈위키의 규정</div>
            <div class="hb-structure-row">
                <div class="hb-badge">기본방침</div>
                <div class="hb-structure-links">
                    <a href="문서_관리_방침.html">문서 관리 방침</a> <span class="separator">·</span> 
                    <a href="토론_관리_방침.html">토론 관리 방침</a> <span class="separator">·</span> 
                    <a href="이용자_관리_방침.html">이용자 관리 방침</a> <span class="separator">·</span> 
                    <a href="운영_관리_방침.html">운영 관리 방침 ( <a href="운영진_선출.html">운영진 선출</a>)</a>
                </div>
            </div>
            <div class="hb-structure-row">
                <div class="hb-badge">편집지침</div>
                <div class="hb-structure-links">
                    <a href="일반_문서.html">일반 문서</a> <span class="separator">·</span> 
                    <a href="특수_문서.html">특수 문서</a> <span class="separator">·</span> 
                    <a href="특정_분야.html">특정 분야</a> (<a href="효빈위키_편집지침_특정분야_인문사회.html">인문사회</a>·<a href="효빈위키_편집지침_특정분야_과학기술.html">과학기술</a>·<a href="효빈위키_편집지침_특정분야_문화예술.html">문화예술</a>) <span class="separator">·</span> 
                    <a href="등재_기준.html">등재 기준</a> <span class="separator">·</span> 
                    <a href="표제어.html">표제어</a>
                </div>
            </div>
            <div class="hb-structure-row">
                <div class="hb-badge">편집합의</div>
                <div class="hb-structure-links">
                    <a href="합의_일반_문서.html">일반 문서</a> <span class="separator">·</span> 
                    <a href="합의_특수_문서.html">특수 문서</a> <span class="separator">·</span> 
                    <a href="합의_특정_분야.html">특정 분야</a> (<a href="효빈위키_편집합의_특정분야_인문사회.html">인문사회</a>·<a href="효빈위키_편집합의_특정분야_과학기술.html">과학기술</a>·<a href="효빈위키_편집합의_특정분야_문화예술.html">문화예술</a>·<a href="효빈위키_편집합의_특정분야_창작물.html">창작물</a>) <span class="separator">·</span> 
                    <a href="합의_등재_기준.html">등재 기준</a>
                </div>
            </div>
            <div class="hb-structure-row">
                <div class="hb-badge">프로젝트</div>
                <div class="hb-structure-links">
                    <a href="프로젝트_지침.html">프로젝트 지침</a>
                </div>
            </div>
            
            <div class="hb-structure-header mt-4">❓ 효빈위키의 도움말</div>
            <div class="hb-structure-row">
                <div class="hb-badge">FAQ</div>
                <div class="hb-structure-links">
                    <a href="효빈위키_FAQ.html#s-1" class="font-bold">효빈위키</a> <span class="separator">·</span> 
                    <a href="효빈위키_FAQ.html#s-2">계정</a> <span class="separator">·</span> 
                    <a href="효빈위키_FAQ.html#s-3">문서 열람</a> <span class="separator">·</span> 
                    <a href="효빈위키_FAQ.html#s-4">편집 및 역사 페이지</a> <span class="separator">·</span> 
                    <a href="효빈위키_FAQ.html#s-5">이미지 업로드</a> <span class="separator">·</span> 
                    <a href="효빈위키_FAQ.html#s-6">문서 이동</a> <span class="separator">·</span> 
                    <a href="효빈위키_FAQ.html#s-7">기타 문의</a>
                </div>
            </div>
            <div class="hb-structure-row">
                <div class="hb-badge">도움말</div>
                <div class="hb-structure-links">
                    <a href="기능_도움말.html">기능</a> <span class="separator">·</span> 
                    <a href="편집_도움말.html">편집</a> <span class="separator">·</span> 
                    <a href="문법_도움말.html" class="font-bold">문법</a> (<a href="문법_도움말_심화.html" class="font-bold">심화</a>·<a href="문법_도움말_수식.html" class="font-bold">수식</a>·<a href="문법_도움말_개발.html" class="font-bold">개발</a>) <span class="separator">·</span> 
                    <a href="토론_도움말.html">토론</a> <span class="separator">·</span> 
                    <a href="설정_도움말.html">설정</a> <span class="separator">·</span> 
                    <a href="소명_도움말.html">소명</a> <span class="separator">·</span> 
                    <a href="권리침해_도움말.html">권리침해</a> <span class="separator">·</span> 
                    <a href="자주_하는_실수.html">자주 하는 실수</a> <span class="separator">·</span> 
                    <a href="문서_삭제식_이동.html">문서 삭제식 이동</a> <span class="separator">·</span> 
                    <a href="더미.html">더미</a>
                </div>
            </div>

            <div class="hb-structure-header mt-4">📢 효빈위키의 운영</div>
            <div class="hb-structure-row">
                <div class="hb-badge">운영진</div>
                <div class="hb-structure-links">
                    <a href="관리자.html">관리자</a> <span class="separator">·</span> 
                    <a href="중재자.html">중재자</a> <span class="separator">·</span> 
                    <a href="역대_운영진.html">역대 운영진</a> <span class="separator">·</span> 
                    <a href="운영진_지원.html">운영진 지원</a> <span class="separator">·</span> 
                    <a href="운영_도움말.html">운영 도움말</a> (<a href="운영_도움말_관리.html">관리</a>·<a href="운영_도움말_중재.html">중재</a>·<a href="운영_도움말_권한.html">권한</a>) <span class="separator">·</span> 
                    <a href="운영위원회.html" class="font-bold">운영위원회</a> (<a href="운영위원회_의견제시.html" class="font-bold">의견제시</a>) <span class="separator">·</span> 
                    <a href="운영회의.html">운영회의</a> (<a href="운영회의_시행규칙.html" class="font-bold">시행규칙</a>·<a href="운영회의_안건건의.html" class="font-bold">안건 건의</a>) <span class="separator">·</span> 
                    <a href="운영진_임명_회의.html">운영진 임명 회의</a> (<a href="운영진_임명_회의_진행중인_회의.html">진행 중인 회의</a>)
                </div>
            </div>
            <div class="hb-structure-row">
                <div class="hb-badge">기타</div>
                <div class="hb-structure-links">
                    <a href="접근_제한_문서.html">접근 제한 (<a href="접근_제한_문서_문서_목록.html">문서 목록</a>)</a> <span class="separator">·</span> 
                    <a href="봇_리스트.html">봇 리스트</a> <span class="separator">·</span> 
                    <a href="투명성_보고서.html">투명성 보고서</a> <span class="separator">·</span> 
                    <a href="소급_적용_규정.html">소급 적용 규정 일람</a> <span class="separator">·</span> 
                    <a href="공지_목록.html">공지 목록</a> <span class="separator">·</span> 
                    <a href="규정_개정_토론_시행규칙.html">규정 개정 토론 시행규칙</a>
                </div>
            </div>
            
            <div class="hb-structure-header mt-4">⚙️ 효빈위키의 기능</div>
            <div class="hb-structure-row">
                <div class="hb-badge">메타 문서</div>
                <div class="hb-structure-links">
                    <a href="분류.html">분류</a> (<a href="분류_파일.html">파일</a>·<a href="분류_템플릿.html">템플릿</a>) <span class="separator">·</span> 
                    <a href="프로젝트_목록.html">프로젝트</a> <span class="separator">·</span> 
                    <a href="틀.html" class="font-bold">틀</a> <span class="separator">·</span> 
                    <a href="보존문서.html">보존문서</a> <span class="separator">·</span> 
                    <a href="주요_페이지_링크.html">주요 페이지 링크</a> <span class="separator">·</span> 
                    <a href="문서_작성_요청.html">문서 작성 요청</a>
                </div>
            </div>
            <div class="hb-structure-row">
                <div class="hb-badge">기능</div>
                <div class="hb-structure-links">
                    <a href="계정.html">계정</a> (<a href="계정_내_문서함.html">내 문서함</a>) <span class="separator">·</span> 
                    <a href="게시판.html">게시판</a> <span class="separator">·</span> 
                    <a href="연습장.html">연습장</a> (토론) <span class="separator">·</span> 
                    <a href="엔진.html">엔진</a> (<a href="엔진_업데이트.html">업데이트</a>) <span class="separator">·</span> 
                    <a href="통계.html">통계</a>
                </div>
            </div>
        </div>
        `;
    }
});