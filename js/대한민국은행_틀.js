document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("korea-all-banks-nav-container");
    if (container) {
        container.innerHTML = `
<div class="mb-4 border border-[#ccc] shadow-sm" style="font-size: 0.9em;">
<div class="bank-nav-header text-white" style="background-image: linear-gradient(120deg, #fff 5%, #000 5.1% 9%, #fff 9.1% 10%, #000 10.1% 14%, #fff 14.1% 15%, #000 15.1% 19%, #fff 19.1% 81%, #cd313a 81.1% 90%, #0047a0 90.1%); color: black; text-shadow: 0px 0px 2px rgba(255,255,255,0.8);">
<span style="display: inline-flex; width: 27px; padding: 1px; background: rgba(45,47,52,.2); vertical-align: middle; margin-right: 5px;">
<img alt="태극기" onerror="this.style.display='none'" src="이미지/대한민국_국기.webp" style="width: 100%;"/>
</span>
<a class="text-black no-underline hover:underline font-bold" href="대한민국.html">대한민국</a>의 <a class="text-black no-underline hover:underline font-bold" href="은행.html">은행</a>
</div>
<div class="bg-[#f9f9f9]">
<div class="cursor-pointer text-center p-1 text-xs text-gray-500 hover:bg-gray-200 transition-colors select-none" onclick="toggleNav('bank-nav', 'bank-label')">
                    [<span id="bank-label">펼치기</span>]
                </div>
<div id="bank-nav" style="max-height: 0px; overflow: hidden; transition: max-height 0.3s ease-out;">
<table class="w-full text-center m-0 border-collapse text-xs">
<!-- 중앙은행 -->
<tr>
<td class="bg-black text-white font-bold border border-white" colspan="2">중앙은행</td>
<td class="text-left pl-2 border border-[#ccc]" colspan="4">
<a class="wiki-link" href="한국은행.html">한국은행</a><span class="text-[9px] align-super">⊛</span>
</td>
</tr>
<!-- 국내은행 -->
<tr>
<td class="bg-[#cd313a] text-white font-bold w-[10%] border border-white" rowspan="5">국내<br/>은행</td>
<td class="bank-nav-section border border-[#ccc]">시중은행</td>
<td class="text-left pl-2 border border-[#ccc]" colspan="4">
<a class="wiki-link" href="신한은행.html">신한은행</a> · 
                                <a class="wiki-link" href="우리은행.html">우리은행</a> · 
                                <a class="wiki-link" href="SC제일은행.html">SC제일은행</a> · 
                                <a class="wiki-link" href="하나은행.html">하나은행</a> · 
                                <a class="wiki-link" href="KB국민은행.html">KB국민은행</a> · 
                                <a class="wiki-link" href="한국씨티은행.html">한국씨티은행</a><span class="text-[9px] align-super">⊛</span> · 
                                <a class="wiki-link" href="iM뱅크.html">iM뱅크</a>
</td>
</tr>
<tr>
<td class="bank-nav-section border border-[#ccc]">국책은행</td>
<td class="text-left pl-2 border border-[#ccc]" colspan="4">
<a class="wiki-link" href="한국산업은행.html">한국산업은행</a> · 
                                <a class="wiki-link" href="IBK기업은행.html">IBK기업은행</a> · 
                                <a class="wiki-link" href="한국수출입은행.html">한국수출입은행</a><span class="text-[9px] align-super">⊛</span>
</td>
</tr>
<tr>
<td class="bank-nav-section border border-[#ccc]">특수은행</td>
<td class="text-left pl-2 border border-[#ccc]" colspan="4">
<a class="wiki-link" href="NH농협은행.html">NH농협은행</a> · 
                                <a class="wiki-link" href="Sh수협은행.html">Sh수협은행</a>
</td>
</tr>
<tr>
<td class="bank-nav-section border border-[#ccc]">지방은행</td>
<td class="text-left pl-2 border border-[#ccc]" colspan="4">
<a class="wiki-link" href="BNK부산은행.html">BNK부산은행</a> · 
                                <a class="wiki-link" href="광주은행.html">광주은행</a> · 
                                <a class="wiki-link" href="제주은행.html">제주은행</a> · 
                                <a class="wiki-link" href="전북은행.html">전북은행</a> · 
                                <a class="wiki-link" href="BNK경남은행.html">BNK경남은행</a> · 
                                <strong><a class="wiki-link" href="효빈은행.html">효빈은행</a></strong> · 
                                <a class="wiki-link" href="덕북은행.html">덕북은행</a>
</td>
</tr>
<tr>
<td class="bank-nav-section border border-[#ccc]">인터넷<br/>전문은행</td>
<td class="text-left pl-2 border border-[#ccc]" colspan="4">
<a class="wiki-link" href="케이뱅크.html">케이뱅크</a> · 
                                <a class="wiki-link" href="카카오뱅크.html">카카오뱅크</a> · 
                                <a class="wiki-link" href="토스뱅크.html">토스뱅크</a>
</td>
</tr>
<!-- 외국은행 -->
<tr>
<td class="bg-[#0047a0] text-white font-bold border border-white" colspan="2">외국은행의<br/>국내지점</td>
<td class="border border-[#ccc] p-0" colspan="4">
<table class="w-full text-left text-xs m-0 border-none">
<tr class="border-b border-[#ccc]">
<td class="bank-nav-section w-[15%] text-center border-r border-[#ccc]">미국</td>
<td class="pl-2">
<a class="wiki-link" href="JP모간_체이스.html">JP모간 체이스</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="모건_스탠리.html">모건 스탠리</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="뱅크_오브_아메리카.html">뱅크 오브 아메리카</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="웰스_파고.html">웰스 파고</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="BNY멜론.html">BNY멜론</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="스테이트_스트리트.html">스테이트 스트리트</a><span class="text-[9px] align-super">⊛</span>
</td>
</tr>
<tr class="border-b border-[#ccc]">
<td class="bank-nav-section text-center border-r border-[#ccc]">유럽</td>
<td class="pl-2">
<a class="wiki-link" href="도이체방크.html">도이체방크</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="UBS.html">UBS</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="HSBC.html">HSBC</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="BNP_파리바.html">BNP 파리바</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="크레디_아그리콜.html">크레디 아그리콜</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="소시에테_제네랄.html">소시에테 제네랄</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="ING(기업).html">ING</a> · 
                                            <a class="wiki-link" href="바덴뷔르템베르크_주립은행.html">LBBW</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="유바프은행.html">유바프은행</a><span class="text-[9px] align-super">⊛</span>
</td>
</tr>
<tr class="border-b border-[#ccc]">
<td class="bank-nav-section text-center border-r border-[#ccc]">일본</td>
<td class="pl-2">
<a class="wiki-link" href="미즈호은행.html">미즈호은행</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="미쓰비시_UFJ_은행.html">미쓰비시 UFJ 은행</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="미쓰이스미토모은행.html">미쓰이스미토모은행</a><span class="text-[9px] align-super">⊛</span>
</td>
</tr>
<tr class="border-b border-[#ccc]">
<td class="bank-nav-section text-center border-r border-[#ccc]">중국</td>
<td class="pl-2">
<a class="wiki-link" href="중국공상은행.html">중국공상은행</a> · 
                                            <a class="wiki-link" href="중국농업은행.html">중국농업은행</a> · 
                                            <a class="wiki-link" href="중국건설은행.html">중국건설은행</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="중국은행.html">중국은행</a> · 
                                            <a class="wiki-link" href="교통은행.html">교통은행</a> · 
                                            <a class="wiki-link" href="중국광대은행.html">중국광대은행</a>
</td>
</tr>
<tr>
<td class="bank-nav-section text-center border-r border-[#ccc]">기타</td>
<td class="pl-2">
<a class="wiki-link" href="싱가포르개발은행.html">DBS</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="OCBC.html">OCBC</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="대화은행.html">대화은행</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="인도네시아느가라은행.html">BNI</a> · 
                                            <a class="wiki-link" href="스테이트_뱅크_오브_인디아.html">SBI</a> · 
                                            <a class="wiki-link" href="ANZ_뱅크.html">ANZ</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="메트로은행.html">메트로은행</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="파키스탄국립은행.html">파키스탄국립은행</a><span class="text-[9px] align-super">⊛</span> · 
                                            <a class="wiki-link" href="멜라트은행.html">멜라트은행</a><span class="text-[9px] align-super">⊛</span>
</td>
</tr>
</table>
</td>
</tr>
<!-- 주석 -->
<tr>
<td class="bg-[#203741] text-white text-left pl-4 text-[10px] border border-white" colspan="6">
                                ⊛: <a class="text-white underline" href="소매금융.html">소매금융</a> 미취급 은행<br/>
<a class="text-white underline" href="은행연합회.html">은행연합회</a> 사원은행 소개 기준
                            </td>
</tr>
<!-- 같이보기 -->
<tr>
<td class="bg-black text-white font-bold border border-white p-1" colspan="6">
                                같이 보기: 
                                <a class="text-white hover:underline" href="대한민국의_비은행예금취급기관.html">대한민국의 비은행예금취급기관</a> | 
                                <a class="text-white hover:underline" href="대한민국의_증권사.html">대한민국의 증권사</a> | 
                                <a class="text-white hover:underline" href="대한민국의_없어진_은행.html">대한민국의 없어진 은행</a> | 
                                <a class="text-white hover:underline" href="BIC.html">SWIFT 코드 보기</a>
</td>
</tr>
</table>
</div>
</div>
</div>
        `;
    }
});