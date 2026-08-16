    document.querySelectorAll('.wiki-fn').forEach(a => {
        // 1. href 속성에서 타겟 ID (fn-1 등) 추출
        const targetId = a.getAttribute('href')?.substring(1);
        if (!targetId) return;

        // 2. 수동으로 작성된 하단 각주 div 요소 찾기
        const manualDiv = document.getElementById(targetId);
        if (manualDiv) {
            // 3. '[1] ' 같은 말머리를 정규식으로 떼어내고 순수 텍스트만 추출
            const realText = manualDiv.innerHTML.replace(/\[\d+\]\s*/, '').trim();
            
            // 4. a 태그의 data-note에 진짜 각주 내용을 강제 삽입
            a.setAttribute('data-note', realText);
            
            // 5. 화면에 중복으로 뜨지 않게 기존 수동 각주 덩어리 완전 삭제
            manualDiv.remove();
        }
    });