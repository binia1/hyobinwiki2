const hyobinNavContent = `
<div class="nav-box rounded overflow-hidden shadow-sm" style="--nav-color: #7777AA;">
    <div class="nav-box-header" onclick="toggleNav('localNav', 'localLabel')" style="background-color: #7777AA !important; color: white !important;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
            <img onerror="this.style.display='none'" src="이미지/hyobin1.webp" style="height: 18px; width: auto;"/>
            <span>효빈광역시의 행정구역</span>
        </div>
        <span class="text-[10px] bg-white/20 px-2 py-0.5 rounded nav-toggle-btn" id="localLabel">[접기]</span>
    </div>
    <div class="nav-box-body" id="localNav" style="max-height: 2000px; overflow: hidden; transition: max-height 0.3s ease;">
        <table class="nav-table text-xs">
            <tr>
                <th style="background-color: #7777AA !important; color: white !important;">자치구</th>
                <td>
                    <div class="grid grid-cols-4 md:grid-cols-8 gap-1 text-center font-bold justify-center">
                        <a class="admin-item" href="중구.html">
                            <div class="admin-logo-space" style="display: flex; align-items: center; justify-content: center; overflow: hidden;">
                                <img alt="중구" src="이미지/중구.webp" style="max-width: 100%; max-height: 100%; object-fit: contain;"/>
                            </div>
                            <span class="admin-name">중구</span>
                        </a>
                        <a class="admin-item" href="동구.html">
                            <div class="admin-logo-space" style="display: flex; align-items: center; justify-content: center; overflow: hidden;">
                                <img alt="동구" src="이미지/동구.webp" style="max-width: 100%; max-height: 100%; object-fit: contain;"/>
                            </div>
                            <span class="admin-name">동구</span>
                        </a>
                        <a class="admin-item" href="서구.html">
                            <div class="admin-logo-space" style="display: flex; align-items: center; justify-content: center; overflow: hidden;">
                                <img alt="서구" src="이미지/서구.webp" style="max-width: 100%; max-height: 100%; object-fit: contain;"/>
                            </div>
                            <span class="admin-name">서구</span>
                        </a>
                        <a class="admin-item" href="남구.html">
                            <div class="admin-logo-space" style="display: flex; align-items: center; justify-content: center; overflow: hidden;">
                                <img alt="남구" src="이미지/남구.webp" style="max-width: 100%; max-height: 100%; object-fit: contain;"/>
                            </div>
                            <span class="admin-name">남구</span>
                        </a>
                        <a class="admin-item" href="북구.html">
                            <div class="admin-logo-space" style="display: flex; align-items: center; justify-content: center; overflow: hidden;">
                                <img alt="북구" src="이미지/북구.webp" style="max-width: 100%; max-height: 100%; object-fit: contain;"/>
                            </div>
                            <span class="admin-name">북구</span>
                        </a>
                        <a class="admin-item" href="청엽구.html">
                            <div class="admin-logo-space" style="display: flex; align-items: center; justify-content: center; overflow: hidden;">
                                <img alt="청엽구" src="이미지/청엽구.webp" style="max-width: 100%; max-height: 100%; object-fit: contain;"/>
                            </div>
                            <span class="admin-name">청엽구</span>
                        </a>
                        <a class="admin-item" href="안천구.html">
                            <div class="admin-logo-space" style="display: flex; align-items: center; justify-content: center; overflow: hidden;">
                                <img alt="안천구" src="이미지/안천구.webp" style="max-width: 100%; max-height: 100%; object-fit: contain;"/>
                            </div>
                            <span class="admin-name">안천구</span>
                        </a>
                        <a class="admin-item" href="창전구.html">
                            <div class="admin-logo-space" style="display: flex; align-items: center; justify-content: center; overflow: hidden;">
                                <img alt="창전구" src="이미지/창전구.webp" style="max-width: 100%; max-height: 100%; object-fit: contain;"/>
                            </div>
                            <span class="admin-name">창전구</span>
                        </a>
                    </div>
                </td>
            </tr>
            <tr>
                <th style="background-color: #7777AA !important; color: white !important;">자치군</th>
                <td>
                    <div class="flex justify-center">
                        <a class="admin-item font-bold" href="탄성군.html">
                            <div class="admin-logo-space" style="display: flex; align-items: center; justify-content: center; overflow: hidden;">
                                <img alt="탄성군" src="이미지/탄성군.webp" style="max-width: 100%; max-height: 100%; object-fit: contain;"/>
                            </div>
                            <span class="admin-name">탄성군</span>
                        </a>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</div>
`;

// 지정된 위치에 HTML 꽂아넣기
document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('load-hyobin-nav');
    if (target) {
        target.innerHTML = hyobinNavContent;
    }
});