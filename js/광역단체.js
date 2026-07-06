const nationalNavContent = `
<div class="nav-box rounded overflow-hidden shadow-sm" style="--nav-color: #7777AA;">
    <div class="nav-box-header" onclick="toggleNav('natNav', 'natLabel')" style="background-color: #7777AA !important; color: white !important;">
        <span>🇰🇷 대한민국의 광역자치단체</span>
        <span class="text-[10px] bg-white/20 px-2 py-0.5 rounded nav-toggle-btn" id="natLabel">[접기]</span>
    </div>
    <div class="nav-box-body" id="natNav" style="max-height: 2000px; overflow: hidden; transition: max-height 0.3s ease;">
        <table class="nav-table text-xs">
            <tr><th style="background-color: #7777AA !important; color: white !important;">특별시</th><td>
            <div class="flex justify-center">
            <a class="admin-item" href="https://namu.wiki/w/서울특별시" target="_blank"><div class="admin-logo-space"></div><span class="admin-name">서울특별시</span></a>
            </div>
            </td></tr>
            <tr><th style="background-color: #7777AA !important; color: white !important;">광역시</th><td>
            <div class="flex flex-wrap justify-center gap-1">
            <a class="admin-item" href="https://namu.wiki/w/부산광역시" target="_blank"><div class="admin-logo-space"></div><span class="admin-name">부산광역시</span></a>
            <a class="admin-item" href="https://namu.wiki/w/대구광역시" target="_blank"><div class="admin-logo-space"></div><span class="admin-name">대구광역시</span></a>
            <a class="admin-item" href="https://namu.wiki/w/인천광역시" target="_blank"><div class="admin-logo-space"></div><span class="admin-name">인천광역시</span></a>
            <a class="admin-item" href="https://namu.wiki/w/광주광역시" target="_blank"><div class="admin-logo-space"></div><span class="admin-name">광주광역시</span></a>
            <a class="admin-item" href="https://namu.wiki/w/대전광역시" target="_blank"><div class="admin-logo-space"></div><span class="admin-name">대전광역시</span></a>
            <a class="admin-item" href="https://namu.wiki/w/울산광역시" target="_blank"><div class="admin-logo-space"></div><span class="admin-name">울산광역시</span></a>
            <a class="admin-item border-2 border-[#7777AA] rounded" href="효빈광역시.html"><div class="admin-logo-space bg-[#7777AA33]"></div><span class="admin-name font-bold text-[#7777AA]">효빈광역시</span></a>
            </div>
            </td></tr>
            <tr><th style="background-color: #7777AA !important; color: white !important;">특별자치시</th><td>
            <div class="flex justify-center"><a class="admin-item" href="https://namu.wiki/w/세종특별자치시" target="_blank"><div class="admin-logo-space"></div><span class="admin-name">세종특별자치시</span></a></div>
            </td></tr>
            <tr><th style="background-color: #7777AA !important; color: white !important;">도</th><td>
            <div class="flex flex-wrap justify-center gap-1">
            <a class="admin-item font-bold" href="https://namu.wiki/w/경기도" target="_blank"><div class="admin-logo-space"></div><span class="admin-name">경기도</span></a>
            <a class="admin-item" href="https://namu.wiki/w/충청북도" target="_blank"><div class="admin-logo-space"></div><span class="admin-name">충청북도</span></a>
            <a class="admin-item" href="https://namu.wiki/w/충청남도" target="_blank"><div class="admin-logo-space"></div><span class="admin-name">충청남도</span></a>
            <a class="admin-item" href="https://namu.wiki/w/전라남도" target="_blank"><div class="admin-logo-space"></div><span class="admin-name">전라남도</span></a>
            <a class="admin-item" href="https://namu.wiki/w/경상북도" target="_blank"><div class="admin-logo-space"></div><span class="admin-name">경상북도</span></a>
            <a class="admin-item" href="https://namu.wiki/w/경상남도" target="_blank"><div class="admin-logo-space"></div><span class="admin-name">경상남도</span></a>
            <a class="admin-item italic font-bold border border-[#7777AA] rounded px-1" href="덕빈북도.html"><div class="admin-logo-space"></div><span class="admin-name text-green-600">덕빈북도</span></a>
            <a class="admin-item italic font-bold border border-[#7777AA] rounded px-1" href="덕빈남도.html"><div class="admin-logo-space"></div><span class="admin-name text-blue-600">덕빈남도</span></a>
            </div>
            </td></tr>
            <tr><th style="background-color: #7777AA !important; color: white !important;">특별자치도</th><td>
            <div class="flex flex-wrap justify-center gap-1">
            <a class="admin-item" href="https://namu.wiki/w/강원특별자치도" target="_blank"><div class="admin-logo-space"></div><span class="admin-name">강원특별자치도</span></a>
            <a class="admin-item" href="https://namu.wiki/w/전북특별자치도" target="_blank"><div class="admin-logo-space"></div><span class="admin-name">전북특별자치도</span></a>
            <a class="admin-item" href="https://namu.wiki/w/제주특별자치도" target="_blank"><div class="admin-logo-space"></div><span class="admin-name">제주특별자치도</span></a>
            </div>
            </td></tr>
        </table>
    </div>
</div>
`;

// 지정된 위치에 HTML 꽂아넣기
document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('load-national-nav');
    if (target) {
        target.innerHTML = nationalNavContent;
    }
});