    document.addEventListener("DOMContentLoaded", function() {
        // 1. <title> 태그에서 지자체 이름만 쏙 빼오기 
        // (예: "동구청 - 효빈위키" -> "동구청", "남구청(효빈) - 효빈위키" -> "남구청(효빈)")
        let officeName = document.title.split('-')[0].trim();

        // 2. ★ 효빈광역시청 본청은 통합 템플릿이 아닌, 기존에 만든 '전용 별도 페이지'로 연결 ★
        if (officeName === "효빈광역시청") {
            const mainLinks = {
                "엑스": "효빈광역시청 엑스.html",
                "페이스북": "효빈광역시청 페이스북.html",
                "인스타그램": "효빈광역시청 인스타그램.html",
                "블로그": "효빈광역시청 블로그.html",
                "유튜브": "효빈광역시청 유튜브.html"
            };
            
            document.querySelectorAll('.sns-links a').forEach(link => {
                const snsType = link.getAttribute('data-sns');
                if (snsType && mainLinks[snsType]) {
                    link.href = mainLinks[snsType];
                }
            });
            return; // 본청 링크를 맞췄으므로 여기서 즉시 스크립트 종료!
        }

        // 3. 나머지 구/군청들을 위한 '통합 템플릿' 파일명 매핑
        const templateMap = {
            "엑스": "통합_엑스.html",
            "페이스북": "통합_페이스북.html",
            "인스타그램": "통합_인스타그램.html",
            "블로그": "통합_블로그.html",
            "유튜브": "통합_유튜브.html"
        };

        // 4. 나머지 지자체는 통합 템플릿에 ?region=꼬리표를 달아서 일괄 변경!
        document.querySelectorAll('.sns-links a').forEach(link => {
            const snsType = link.getAttribute('data-sns');
            if (snsType && templateMap[snsType]) {
                // 결과 예: "통합_블로그.html?region=동구청"
                link.href = templateMap[snsType] + "?region=" + encodeURIComponent(officeName);
            }
        });
    });