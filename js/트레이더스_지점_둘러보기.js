document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("traders-branch-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div style="margin-bottom: 20px;">
            <table class="traders-table" style="width: 100%; border: 2px solid var(--traders-green, #a0d170);">
                <tr>
                    <td style="background-color: var(--traders-green, #a0d170); text-align: center; padding: 15px; border-bottom: none !important;">
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px;">
                            <img alt="트레이더스 홀세일 클럽 로고" onerror="this.style.display='none'; this.parentNode.insertAdjacentHTML('afterbegin', '<span style=\\'color:#231815; font-weight:900; font-size:1.5rem;\\'>TRADERS<br>WHOLESALE CLUB</span>');" src="이미지/트레이더스_홀세일_클럽_로고.svg" style="height: 40px;"/>
                            <span style="font-size: 1.1rem !important; font-weight: bold; color: var(--traders-text, #231815);">
                                트레이더스 홀세일 클럽 지점
                            </span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0; background-color: #fff; border-top: none !important;">
                        <details open>
                            <summary style="background-color: #fff; color: #333; padding: 8px 15px; cursor: pointer; font-weight: bold; list-style: none; display: flex; justify-content: center; align-items: center; border-top: 1px solid var(--traders-green, #a0d170); border-bottom: 1px solid #eee;">
                                <span style="font-size: 0.9rem; margin: 0 auto;">[ 펼치기 · 접기 ]</span>
                            </summary>
                            <div class="details-content" style="padding: 10px;">
                                <table style="width: 100%; border: none; text-align: center;">
                                    <tr>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20구성점" target="_blank">구성점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20송림점" target="_blank">송림점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20월평점" target="_blank">월평점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20서면점" target="_blank">서면점</a></td>
                                    </tr>
                                    <tr>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20비산점" target="_blank">비산점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20안산점" target="_blank">안산점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20천안아산점" target="_blank">천안아산점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20양산점" target="_blank">양산점</a></td>
                                    </tr>
                                    <tr>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20수원점" target="_blank">수원점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20킨텍스점" target="_blank">일산점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20하남점" target="_blank">하남점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20고양점" target="_blank">고양점</a></td>
                                    </tr>
                                    <tr>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20군포점" target="_blank">군포점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20김포점" target="_blank">김포점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20위례점" target="_blank">위례점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20월계점" target="_blank">월계점</a></td>
                                    </tr>
                                    <tr>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20부천점" target="_blank">부천점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20명지점" target="_blank">명지점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20안성점" target="_blank">안성점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20연산점" target="_blank">연산점</a></td>
                                    </tr>
                                    <tr>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20동탄점" target="_blank">동탄점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20수원화서점" target="_blank">수원화서점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20마곡점" target="_blank">마곡점</a></td>
                                        <td><a class="wiki-link" href="https://namu.wiki/w/트레이더스%20홀세일%20클럽%20구월점" target="_blank">구월점</a></td>
                                    </tr>
                                    <tr>
                                        <td><a class="wiki-link" href="트레이더스_홀세일_클럽_효빈점.html">효빈점</a></td>
                                        <td><a class="wiki-link" href="트레이더스_홀세일_클럽_평당곽산점.html">평당곽산점</a></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td colspan="4" style="background-color: var(--traders-green, #a0d170); color: var(--traders-text, #231815); font-weight: bold;">개점 예정 매장</td>
                                    </tr>
                                    <tr>
                                        <td><span style="color: #808080;">의정부점</span><br/><span class="small-text" style="font-size: 0.8em; color: #666;">(2026 예정)</span></td>
                                        <td><span style="color: #808080;">원주점</span><br/><span class="small-text" style="font-size: 0.8em; color: #666;">(2027 예정)</span></td>
                                        <td><a class="wiki-link" href="트레이더스_홀세일_클럽_흑택점.html" style="color: #333;">흑택점</a><br/><span class="small-text" style="font-size: 0.8em; color: #666;">(2027 예정)</span></td>
                                        <td><span style="color: #808080;">청주점</span><br/><span class="small-text" style="font-size: 0.8em; color: #666;">(미정)</span></td>
                                    </tr>
                                </table>
                                <div style="margin-top: 10px; padding: 5px; background-color: var(--traders-dark, #231815); text-align: center; border-radius: 4px;">
                                    <a class="wiki-link" href="https://namu.wiki/w/이마트/지점" style="color: white; font-weight: bold; text-decoration: none;" target="_blank">이마트/지점</a>
                                </div>
                            </div>
                        </details>
                    </td>
                </tr>
            </table>
        </div>
        `;
    }
});