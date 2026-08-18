document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("lottemart-maxx-branch-nav-container");
    
    if (container) {
        container.innerHTML = `
        <div style="margin-bottom: 20px;">
            <table class="maxx-table" style="width: 100%; border: 2px solid var(--maxx-green, #00A775);">
                <tr>
                    <td style="background-color: var(--maxx-text-dark, #222222); text-align: center; padding: 15px; border-bottom: none !important;">
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px;">
                            <a class="wiki-link" href="#">
                                <img alt="롯데마트 맥스 로고" onerror="this.style.display='none'; this.parentNode.insertAdjacentHTML('afterbegin', '<span style=\\'color:#00A775; font-weight:900; font-size:2rem;\\'>LOTTE Mart MAXX</span>');" src="이미지/롯데마트맥스.svg" style="height: 40px;"/>
                            </a>
                            <span style="font-size: 1.1rem !important; font-weight: bold; color: #fff;">
                                롯데마트 맥스 지점
                            </span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0; background-color: #fff; border-top: none !important;">
                        <details open>
                            <summary style="background-color: var(--maxx-text-dark, #222222); color: white; padding: 8px 15px; cursor: pointer; font-weight: bold; list-style: none; display: flex; justify-content: center; align-items: center; border-top: 1px solid #333;">
                                <span style="font-size: 0.9rem; margin: 0 auto;">[ 펼치기 · 접기 ]</span>
                            </summary>
                            <div class="details-content" style="padding: 10px;">
                                <table style="width: 100%; border: none; text-align: center;">
                                    <tr>
                                        <td><a class="wiki-link" href="금천점.html" style="color:var(--maxx-green, #00A775); font-weight:bold;">금천점</a></td>
                                        <td><a class="wiki-link" href="영등포점.html" style="color:var(--maxx-green, #00A775); font-weight:bold;">영등포점</a></td>
                                        <td><a class="wiki-link" href="롯데마트_맥스_송천점.html" style="color:var(--maxx-green, #00A775); font-weight:bold;">송천점</a></td>
                                    </tr>
                                    <tr>
                                        <td><a class="wiki-link" href="상무점.html" style="color:var(--maxx-green, #00A775); font-weight:bold;">상무점</a></td>
                                        <td><a class="wiki-link" href="창전점.html" style="color:var(--maxx-green, #00A775); font-weight:bold;">창전점</a></td>
                                        <td><a class="wiki-link" href="창원중앙점.html" style="color:var(--maxx-green, #00A775); font-weight:bold;">창원중앙점</a></td>
                                    </tr>
                                </table>
                                <div style="margin-top: 10px; padding: 5px; background-color: var(--maxx-green, #00A775); text-align: center; border-radius: 4px;">
                                    <a href="롯데마트_지점.html" style="color: white; font-weight: bold; text-decoration: none;">롯데마트/지점</a>
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