document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("villain-nav-container");
    if (container) {
        container.innerHTML = `
            <div class="navbox shadow-xl border border-gray-300 rounded-lg overflow-hidden">
                <div class="navbox-title text-2xl font-bold bg-gray-900 text-center py-3 border-b border-gray-300">
                    효빈위키 주요 빌런 및 전범(戰犯) 목록
                </div>
                <div class="navbox-content bg-white p-5">
                    <ul class="list-disc list-inside grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-lg font-medium text-gray-700">
                        <li>
                            <a href="제미나이 지랄 모음집.html" class="wiki-link text-red-600 font-bold hover:underline">제미나이 지랄 모음집</a>
                        </li>
                        <li>
                            <a href="제미나이.html" class="wiki-link text-red-600 font-bold hover:underline">제미나이</a>
                        </li>
                        <li>
                            <a href="윤재훈.html" class="wiki-link hover:underline">윤재훈</a>
                        </li>
                        <li>
                            <a href="윤대환.html" class="wiki-link hover:underline">윤대환</a>
                        </li>
                        <li>
                            <a href="윤석열.html" class="wiki-link hover:underline">윤석열</a>
                        </li>
                        <li>
                            <a href="동구대 쓰레기 5인방.html" class="wiki-link hover:underline">동구대 쓰레기 5인방</a>
                        </li>
                        <li>
                            <a href="ㅈ포초_빌런목록.html" class="wiki-link hover:underline">ㅈ포초 관련 빌런 목록</a>
                        </li>
                        <li>
                            <a href="안농운.html" class="wiki-link hover:underline">안농운</a>
                        </li>
                        <li>
                            <a href="경철래.html" class="wiki-link hover:underline">경철래</a>
                        </li>
                        <li>
                            <a href="임대석.html" class="wiki-link hover:underline">임대석</a>
                        </li>
                        <li>
                            <a href="주민우.html" class="wiki-link hover:underline">주민우</a>
                        </li>
                        <li>
                            <a href="장동우.html" class="wiki-link hover:underline">장동우</a>
                        </li>
                        <li>
                            <a href="윤만우.html" class="wiki-link hover:underline">윤만우</a>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }
});