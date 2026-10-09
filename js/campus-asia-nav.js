(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.getElementById("nav-campus-asia-container");
        if (!container) return;

        // 대학 아이템 생성 헬퍼 (로고 + 명칭 + 파란색/빨간색 링크)
        const u = (name, logo, link = null, isRed = false) => `
            <div class="inline-flex items-center justify-center my-0.5">
                <img src="이미지/${logo}" class="w-3.5 h-3.5 mr-1 object-contain inline-block align-[-2px]" onerror="this.style.display='none';"/>
                <a class="${isRed ? 'text-[#d32f2f]' : 'text-[#0275d8]'} hover:underline cursor-pointer"${link ? ` onclick="goToLink('${link}')"` : ""}>${name}</a>
            </div>
        `;

        const templateHTML = `
            <div class="border border-gray-300 mb-5 text-[11px] font-sans bg-white clear-both w-full shadow-sm rounded-sm overflow-hidden">
                
                <!-- 상단 헤더 영역 (사진과 동일한 은은한 블루-레드 그라데이션 배너) -->
                <div class="text-center py-2.5 px-3 flex justify-center items-center gap-2 border-b border-gray-200" style="background: linear-gradient(90deg, #dceefb 0%, #ffffff 50%, #fdecee 100%);">
                    <img src="이미지/Campus_Asia_로고.webp" class="h-6 object-contain" onerror="this.src='이미지/Campus_Asia_로고.webp'; this.onerror=function(){this.style.display='none';};"/>
                    <span class="text-[15px] font-bold text-[#005BAC] tracking-tight">CAMPUS Asia 한일중</span>
                </div>
                
                <!-- 토글 상세 영역 (기본 열림) -->
                <details class="nw-details group" >

                    <summary class="list-none block w-full text-center bg-gray-50 border-b border-gray-300 py-1 text-[11px] font-bold text-gray-700 cursor-pointer select-none hover:bg-gray-100 transition-colors [&::-webkit-details-marker]:hidden">
                        [ 펼치기 · 접기 ]
                    </summary>
                    
                    <div class="w-full overflow-x-auto">
                        <table class="w-full border-collapse text-[11px] text-center table-fixed min-w-[700px]">
                            <colgroup>
                                <col class="w-[20%]">
                                <col class="w-[20%]">
                                <col class="w-[20%]">
                                <col class="w-[20%]">
                                <col class="w-[20%]">
                            </colgroup>
                            <tbody>
                                <!-- 테이블 컬럼 헤더 -->
                                <tr>
                                    <th class="bg-[#f8f9fa] border border-gray-300 py-1.5 px-2 font-bold text-center text-gray-800">사업단</th>
                                    <th colspan="4" class="bg-[#f8f9fa] border border-gray-300 py-1.5 px-2 font-bold text-center text-gray-800">참여대학</th>
                                </tr>
                                
                                <!-- 1. ENGAGE -->
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">ENGAGE</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('고려대학교', '고려대학교.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('와세다대학', '와세다대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('베이징대학', '베이징대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('난양이공대학', '난양이공대학.webp')}</td>
                                </tr>
                                
                                <!-- 2. Risk Management -->
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">Risk Management</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('고려대학교', '고려대학교.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('고베대학', '고베대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('푸단대학', '푸단대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep leading-tight">
                                        ${u('쭐랄롱꼰 대학교', '쭐랄롱꼰대학교.webp')}<br/>
                                        ${u('라오스 국립대학교', '라오스국립대학교.webp', null, true)}
                                    </td>
                                </tr>
                                
                                <!-- 3. Joint Campus -->
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">Joint Campus</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('동서대학교', '동서대학교.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep leading-tight">
                                        ${u('리츠메이칸대학', '리츠메이칸대학.webp')}<br/>
                                        ${u('리츠메이칸APU', '리츠메이칸APU.webp')}
                                    </td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('광둥외어외무대학', '광둥외어외무대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                </tr>
                                
                                <!-- 4. Energy & Environment Science & Technology -->
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep leading-tight">Energy & Environment<br/>Science & Technology</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('부산대학교', '이미지/svg/부산대.svg')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('규슈대학', '규슈대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('상하이교통대학', '상하이교통대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('말레이시아 공과대학교', '말레이시아공과대학교.webp')}</td>
                                </tr>
                                
                                <!-- 5. BESETO DDMP -->
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">BESETO DDMP</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('서울대학교', '이미지/svg/서울대.svg')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('도쿄대학', '도쿄대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('베이징대학', '베이징대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('싱가포르 국립대학', '싱가포르국립대학.webp')}</td>
                                </tr>
                                
                                <!-- 6. Jus Commune (2행 구성) -->
                                <tr>
                                    <th rowspan="2" class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">Jus Commune</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('서울대학교', '이미지/svg/서울대.svg')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('나고야대학', '나고야대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('중국인민대학', '중국인민대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('싱가포르 국립대학', '싱가포르국립대학.webp')}</td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('성균관대학교', '성균관대학교.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep leading-tight">
                                        ${u('칭화대학', '칭화대학.webp')}<br/>
                                        ${u('상하이교통대학', '상하이교통대학.webp')}
                                    </td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                </tr>
                                
                                <!-- 7. TKT -->
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">TKT</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('한국과학기술원', '한국과학기술원.svg')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('도쿄공업대학', '도쿄공업대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('칭화대학', '칭화대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('난양이공대학', '난양이공대학.webp')}</td>
                                </tr>
                                
                                <!-- 8. SUAE Asia -->
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">SUAE Asia</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('부산대학교', '이미지/svg/부산대.svg')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('규슈대학', '규슈대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('퉁지대학', '퉁지대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('싱가포르 국립대학', '싱가포르국립대학.webp')}</td>
                                </tr>
                                
                                <!-- 9. NLIE Project -->
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">NLIE Project</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('성균관대학교', '성균관대학교.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('나가사키대학', '나가사키대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('산둥대학', '산둥대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep leading-tight">
                                        ${u('난양이공대학', '난양이공대학.webp')}<br/>
                                        ${u('라오스 국립대학교', '라오스국립대학교.webp', null, true)}
                                    </td>
                                </tr>
                                
                                <!-- 10. CAMPH (2행 구성) -->
                                <tr>
                                    <th rowspan="2" class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">CAMPH</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('연세대학교', '연세대학교.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep leading-tight">
                                        ${u('칭화대학', '칭화대학.webp')}<br/>
                                        ${u('베이징대학', '베이징대학.webp')}
                                    </td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('광동제약대학', '광동제약대학.webp')}</td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('오사카대학', '오사카대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep leading-tight">
                                        ${u('톈진중의약대학', '톈진중의약대학.webp')}<br/>
                                        ${u('상하이교통대학', '상하이교통대학.webp')}
                                    </td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('마히돌 대학교', '마히돌대학교.webp')}</td>
                                </tr>
                                
                                <!-- 11. Design Leadership (2행 구성) -->
                                <tr>
                                    <th rowspan="2" class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">Design Leadership</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('연세대학교 미래캠퍼스', '연세대학교.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('치바대학', '치바대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('저장대학', '저장대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep leading-tight">${u('톤부리 킹몽꿋 공과대학교', '톤부리킹몽꿋공과대학교.webp', null, true)}</td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('시바우라공업대학', '시바우라공업대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('마히돌 대학교', '마히돌대학교.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('말레이시아 공과대학교', '말레이시아공과대학교.webp')}</td>
                                </tr>
                                
                                <!-- 12. KGC Int'l. Co-work & Joint MFA Project of Animation -->
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep leading-tight">KGC Int'l. Co-work<br/>& Joint MFA Project<br/>of Animation</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('한국예술종합학교', '한국예술종합학교.svg')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('도쿄예술대학', '도쿄예술대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('중국전매대학', '중국전매대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('실라빠껀 대학교', '실라빠껀대학교.webp')}</td>
                                </tr>
                                
                                <!-- 13. Marine Science & Technology ERASMUS (2행 구성) -->
                                <tr>
                                    <th rowspan="2" class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep leading-tight">Marine Science<br/>& Technology ERASMUS</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('한국해양대학교', '이미지/svg/한국해양대학교.svg')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('도쿄해양대학', '도쿄해양대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('상하이해양대학', '상하이해양대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep leading-tight">
                                        ${u('쭐랄롱꼰 대학교', '쭐랄롱꼰대학교.webp', null, true)}<br/>
                                        ${u('말라야 대학교', '말라야대학교.webp')}
                                    </td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep leading-tight">
                                        ${u('카셋삿 대학교', '카셋삿대학교.webp', null, true)}<br/>
                                        ${u('보고르 농과대학교', '보고르농과대학교.webp')}
                                    </td>
                                </tr>
                                
                                <!-- 14. AFIMA Leaders Program -->
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">AFIMA Leaders Program</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('부경대학교', '이미지/svg/국립부경대학교.svg')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('나가사키대학', '나가사키대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('중국해양대학', '중국해양대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep leading-tight">${u('말레이시아 트렝가누 대학교', '말레이시아트렝가누대학교.webp', null, true)}</td>
                                </tr>
                                
                                <!-- 15. A³I -->
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">A³I</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('부경대학교', '이미지/svg/국립부경대학교.svg')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('야마나시대학', '야마나시대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('항저우전자과학기술대학', '항저우전자과학기술대학.webp', null, true)}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep leading-tight">${u('말레이시아 펄리스 대학교', '말레이시아펄리스대학교.webp', null, true)}</td>
                                </tr>
                                
                                <!-- 16. The ACE -->
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">The ACE</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('서울대학교', '이미지/svg/서울대.svg')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('릿쿄대학', '릿쿄대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('베이징대학', '베이징대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('싱가포르 국립대학', '싱가포르국립대학.webp')}</td>
                                </tr>
                                
                                <!-- 17. MGLD (2행 구성) -->
                                <tr>
                                    <th rowspan="2" class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep leading-tight">MGLD<sup>[1]</sup><br/>through Asian-Model<br/>Dentistry Consortium</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('서울대학교', '이미지/svg/서울대.svg')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('도호쿠대학', '도호쿠대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('베이징대학', '베이징대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('쭐랄롱꼰 대학교', '쭐랄롱꼰대학교.webp', null, true)}</td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('연세대학교', '연세대학교.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('쓰촨대학', '쓰촨대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('인도네시아 대학교', '인도네시아대학교.webp')}</td>
                                </tr>
                                
                                <!-- 18. DPP-EPM (2행 구성) -->
                                <tr>
                                    <th rowspan="2" class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep leading-tight">DPP-EPM<sup>[2]</sup><br/>Contributing to Solving<br/>Global-Scale Issues</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('한국교원대학교', '한국교원대학교.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('츠쿠바대학', '츠쿠바대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('화둥사범대학', '화둥사범대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('말레이시아 공과대학교', '말레이시아공과대학교.webp')}</td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('콘캔 대학교', '콘캔대학교.webp', null, true)}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('반둥 공과대학교', '반둥공과대학교.webp')}</td>
                                </tr>
                                
                                <!-- 19. ICHRDP (2행 구성) -->
                                <tr>
                                    <th rowspan="2" class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep leading-tight">ICHRDP<sup>[3]</sup><br/>in Asia to Foster<br/>Inclusive Minds</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('한국외국어대학교', '한국외국어대학교.svg')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('히로시마대학', '히로시마대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('베이징사범대학', '베이징사범대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep leading-tight">${u('인도네시아 교육대학교', '인도네시아교육대학교.svg', null, true)}</td>
                                </tr>
                                <tr>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('창춘대학', '창춘대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('카셋삿 대학교', '카셋삿대학교.webp')}</td>
                                </tr>
                                
                                <!-- 20. FHR for C-Zeroization in Asia Countries -->
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep leading-tight">FHR<sup>[4]</sup> for C-Zeroization<br/>in Asia Countries</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('한국해양대학교', '이미지/svg/한국해양대학교.svg')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('나고야대학', '나고야대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('상하이교통대학', '상하이교통대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('쭐랄롱꼰 대학교', '쭐랄롱꼰대학교.webp')}</td>
                                </tr>
                                
                                <!-- 21. EKK (덕빈권 효빈대학교 신설 사업단) -->
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">EKK</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('효빈대학교', '효빈대_로고.webp', '효빈대학교.html')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('도쿄공업대학', '도쿄공업대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('상하이교통대학', '상하이교통대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('싱가포르 국립대학', '싱가포르국립대학.webp')}</td>
                                </tr>
                                
                                <!-- ================= [비활성 사업단] ================= -->
                                <tr>
                                    <th colspan="5" class="bg-[#f8f9fa] border-y border-gray-300 py-1.5 font-bold text-center text-gray-800">
                                        비활성 사업단
                                    </th>
                                </tr>
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">Common Good</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('성균관대학교', '성균관대학교.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('오카야마대학', '오카야마대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('지린대학', '지린대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                </tr>
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">IGPTE</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('서울교육대학교', '서울교육대학교.svg')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('도쿄학예대학', '도쿄학예대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('베이징사범대학', '베이징사범대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                </tr>
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">Campus Asia CJK</th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('서울대학교', '이미지/svg/서울대.svg')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('도쿄대학', '도쿄대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('베이징대학', '베이징대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                </tr>
                                <tr>
                                    <th class="bg-white border border-gray-200 p-2 font-semibold text-gray-800 align-middle break-keep">BEST Alliance <sup>[5]#</sup></th>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('서울대학교', '이미지/svg/서울대.svg')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('히토츠바시대학', '히토츠바시대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep">${u('베이징대학', '베이징대학.webp')}</td>
                                    <td class="bg-white border border-gray-200 p-2 align-middle break-keep"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <!-- 하단 주석 영역 -->
                    <div class="bg-gray-50 p-3 text-[10px] text-gray-600 border-t border-gray-200 text-left leading-relaxed">
                        <div><b>[1]</b> Multimodal Global Leaders Development</div>
                        <div><b>[2]</b> Development Program for Professionals in Educational Policy Management</div>
                        <div><b>[3]</b> International Collaborative Human Resources Development Program</div>
                        <div><b>[4]</b> Fostering Humans Resources</div>
                        <div><b>[5]</b> 2023년 기준 복수학위, 교환학생, 교류행사 등 서울대, 히토츠바시, 북경대 3개교 간 적극 진행 중이며 캠퍼스아시아와 별개로 폐지설이 돌았으나 적어도 2025년까지는 변동 사항 없을 예정</div>
                    </div>
                </details>
            </div>
        `;

        container.innerHTML = templateHTML;
    });
})();