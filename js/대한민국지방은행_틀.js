document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("korea-regional-banks-nav-container");
    if (container) {
        container.innerHTML = `
            <div class="mb-4 border border-[#ccc] shadow-sm" style="font-size: 0.9em;">
                <div class="bank-nav-header" style="background-image: linear-gradient(120deg, #fff 5%, #000 5%, #000 9%, #fff 9%, #fff 10%, #000 10%, #000 14%, #fff 14%, #fff 15%, #000 15%, #000 19%, #fff 19%, #fff 81%, #cd313a 81%, #cd313a 90%, #0047a0 90%);">
                    <span style="display: inline-flex; width: 27px; padding: 1px; background: rgba(45,47,52,.2); vertical-align: middle; margin-right: 5px;">
                        <img alt="태극기" onerror="this.style.display='none'" src="이미지/대한민국_국기.webp" style="width: 100%;"/>
                    </span>
                    <a class="text-black no-underline hover:underline font-bold" href="대한민국.html">대한민국</a>의 <a class="text-black no-underline hover:underline font-bold" href="지방은행.html">지방은행</a>
                </div>
                <div class="bg-[#f9f9f9]">
                    <table class="w-full text-center m-0 border-collapse text-xs">
                        <tr>
                            <td class="w-[14.2%] border border-[#ccc] p-2"><a class="wiki-link" href="BNK부산은행.html">BNK부산은행</a></td>
                            <td class="w-[14.2%] border border-[#ccc] p-2"><a class="wiki-link" href="광주은행.html">광주은행</a></td>
                            <td class="w-[14.2%] border border-[#ccc] p-2"><a class="wiki-link" href="제주은행.html">제주은행</a></td>
                            <td class="w-[14.2%] border border-[#ccc] p-2"><a class="wiki-link" href="전북은행.html">전북은행</a></td>
                            <td class="w-[14.2%] border border-[#ccc] p-2"><a class="wiki-link" href="BNK경남은행.html">BNK경남은행</a></td>
                            <td class="w-[14.2%] border border-[#ccc] p-2 bg-yellow-100 font-bold"><a class="wiki-link" href="효빈은행.html">효빈은행</a></td>
                            <td class="w-[14.2%] border border-[#ccc] p-2"><a class="wiki-link" href="덕북은행.html">덕북은행</a></td>
                        </tr>
                        <tr>
                            <td class="bg-gray-100 text-gray-500 text-[10px] p-1 border border-[#ccc]" colspan="7">
                                <a class="hover:underline" href="금융공동망.html">지로코드</a>순 정렬
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        `;
    }
});