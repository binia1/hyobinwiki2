(function() {
    const renderEmartBranchesNav = () => {
        const container = document.getElementById('emart-hyobin-branches-nav-container');
        if (!container) return;

        container.innerHTML = `
<table class="emart-table" style="width: 100%; border: 2px solid #fcb417;">
    <tr>
        <td style="background-color: #fcb417; text-align: center; padding: 10px;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
                <a href="이마트.html" class="wiki-link"><img src="이미지/이마트_로고.webp" alt="이마트 로고" style="height: 35px;"></a>
                <span style="font-size: 1.2rem !important; font-weight: bold; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">
                    이마트 <span style="font-size: 0.9em;">효빈광역시 지점</span>
                </span>
            </div>
        </td>
    </tr>
    <tr>
        <td style="padding: 0; background-color: #fff;">
            <details open>
                <summary style="background-color: #f9f9f9; color: #333; border-bottom: 1px solid #eee; padding: 5px; cursor: pointer;">
                    <span style="font-size: 0.9rem;">지점 목록 펼치기</span>
                </summary>
                <div class="details-content" style="padding: 10px;">
                    <table style="width: 100%; border: none;">
                        <tr>
                            <td><a href="이마트_효빈점.html" class="wiki-link">효빈점</a><br><span class="small-text">중구 리사동</span></td>
                            <td><a href="이마트_효빈고속버스터미널점.html" class="wiki-link">효빈고속버스터미널점</a><br><span class="small-text">북구 해서동</span></td>
                            <td><a href="이마트_월천점.html" class="wiki-link">월천점</a><br><span class="small-text">남구 월천동</span></td>
                            <td><a href="이마트_안천점.html" class="wiki-link">안천점</a><br><span class="small-text">안천구 제택동</span></td>
                        </tr>
                        <tr>
                            <td><a href="이마트_중수점.html" class="wiki-link">중수점</a><br><span class="small-text">북구 중수동</span></td>
                            <td><a href="이마트_마잡점.html" class="wiki-link">마잡점</a><br><span class="small-text">청엽구 마잡동</span></td>
                            <td><a href="이마트_사복점.html" class="wiki-link">사복점</a><br><span class="small-text">서구 사복동</span></td>
                            <td><a href="이마트_창전점.html" class="wiki-link">창전점</a><br><span class="small-text">창전구 창전동</span></td>
                        </tr>
                    </table>
                </div>
            </details>
        </td>
    </tr>
</table>
        `;
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderEmartBranchesNav);
    } else {
        renderEmartBranchesNav();
    }
})();