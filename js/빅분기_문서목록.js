document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("bigdata-cert-nav-container");

    if (container) {
        // 직접 작성해주신 원본 HTML 코드 (수정 절대 없음)
        container.innerHTML = `
        <div class="wiki-nav-box" id="bigbunNav">
            <div class="wiki-nav-header">
                📊 빅데이터분석기사 필기 전체 문서 목록
            </div>
            <div class="wiki-nav-toggle" onclick="document.getElementById('bigbunNavContent').classList.toggle('active')">
                [ 펼치기 · 접기 ]
            </div>
            <div class="wiki-nav-content" id="bigbunNavContent">
                <table class="wiki-nav-table">
                    <tbody>
                        <tr>
                            <th class="bg-nav-red" style="width: 18%;">제1과목<br>빅데이터 분석 기획</th>
                            <td>
                                <span class="wiki-nav-item"><a href="빅분기1-1.html">빅분기1-1</a></span>
                                <span class="wiki-nav-item"><a href="빅분기1-2-1.html">빅분기1-2-1</a></span>
                                <span class="wiki-nav-item"><a href="빅분기1-2-2.html">빅분기1-2-2</a></span>
                                <span class="wiki-nav-item"><a href="빅분기1-2-3.html">빅분기1-2-3</a></span>
                                <span class="wiki-nav-item"><a href="빅분기1-3-1.html">빅분기1-3-1</a></span>
                                <span class="wiki-nav-item"><a href="빅분기1-3-2.html">빅분기1-3-2</a></span>
                                <span class="wiki-nav-item"><a href="빅분기1-3-3.html">빅분기1-3-3</a></span>
                                <span class="wiki-nav-item"><a href="빅분기1-3-4.html">빅분기1-3-4</a></span>
                                <span class="wiki-nav-item"><a href="빅분기1-4-1.html">빅분기1-4-1</a></span>
                                <span class="wiki-nav-item"><a href="빅분기1-4-2.html">빅분기1-4-2</a></span>
                                <span class="wiki-nav-item"><a href="빅분기1-5-1.html">빅분기1-5-1</a></span>
                                <span class="wiki-nav-item"><a href="빅분기1-5-2.html">빅분기1-5-2</a></span>
                                <span class="wiki-nav-item"><a href="빅분기1-6.html">빅분기1-6</a></span>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-nav-blue">제2과목<br>빅데이터 탐색</th>
                            <td>
                                <span class="wiki-nav-item"><a href="빅분기2-1.html">빅분기2-1</a></span>
                                <span class="wiki-nav-item"><a href="빅분기2-2.html">빅분기2-2</a></span>
                                <span class="wiki-nav-item"><a href="빅분기2-3.html">빅분기2-3</a></span>
 <span class="wiki-nav-item"><a href="빅분기2-4.html">빅분기2-4</a></span>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-nav-red">제3과목<br>빅데이터 모델링</th>
                            <td>
                                <span class="wiki-nav-item"><a href="빅분기3-1-1.html">빅분기3-1-1</a></span>
                                <span class="wiki-nav-item"><a href="빅분기3-1-2.html">빅분기3-1-2</a></span>
                                <span class="wiki-nav-item"><a href="빅분기3-1-3.html">빅분기3-1-3</a></span>
                                <span class="wiki-nav-item"><a href="빅분기3-2.html">빅분기3-2</a></span>
                                <span class="wiki-nav-item"><a href="빅분기3-3-1.html">빅분기3-3-1</a></span>

                                <span class="wiki-nav-item"><a href="빅분기3-3-2.html">빅분기3-3-2</a></span>
                                <span class="wiki-nav-item"><a href="빅분기3-3-3.html">빅분기3-3-3</a></span>
                                <span class="wiki-nav-item"><a href="빅분기3-3-4.html">빅분기3-3-4</a></span>
                                <span class="wiki-nav-item"><a href="빅분기3-4-1.html">빅분기3-4-1</a></span>
                                <span class="wiki-nav-item"><a href="빅분기3-4-2.html">빅분기3-4-2</a></span>
                                <span class="wiki-nav-item"><a href="빅분기3-4-3.html">빅분기3-4-3</a></span>
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-nav-blue">제4과목<br>빅데이터 결과 해석</th>
                            <td>
                                <span class="wiki-nav-item"><a href="빅분기4-1.html">빅분기4-1</a></span>
                                <span class="wiki-nav-item"><a href="빅분기4-2.html">빅분기4-2</a></span>
                                <span class="wiki-nav-item"><a href="빅분기4-3.html">빅분기4-3</a></span>
                                <span class="wiki-nav-item"><a href="빅분기4-4.html">빅분기4-4</a></span>
                                <span class="wiki-nav-item"><a href="빅분기4-5.html">빅분기4-5</a></span>
                                <span class="wiki-nav-item"><a href="빅분기4-6.html">빅분기4-6</a></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div> <!-- wiki-container end -->
        `;
    }
});