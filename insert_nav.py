import os
import glob

# 주입할 CSS 코드
CSS_INJECT = """
        /* 효빈위키 전용 하단 내비게이션 틀 CSS */
        .wiki-nav-box { margin: 40px auto 10px; border: 1px solid var(--wiki-border); border-radius: 4px; background: var(--wiki-bg); overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .wiki-nav-header { display: flex; align-items: center; justify-content: center; padding: 12px; font-weight: 900; font-size: 1.1rem; color: #fff; background: linear-gradient(to right, #005BAC, #00CCAA); letter-spacing: 1px; }
        .wiki-nav-toggle { text-align: center; padding: 6px; background: var(--wiki-gray-bg); border-bottom: 1px solid var(--wiki-border); border-top: 1px solid var(--wiki-border); cursor: pointer; font-size: 0.85rem; user-select: none; color: var(--wiki-text); font-weight: bold; }
        .wiki-nav-toggle:hover { filter: brightness(0.95); }
        .wiki-nav-content { display: none; }
        .wiki-nav-content.active { display: block; }
        .wiki-nav-table { width: 100%; border-collapse: collapse; text-align: center; margin: 0; font-size: 0.9rem; }
        .wiki-nav-table th, .wiki-nav-table td { border: 1px solid var(--wiki-border); padding: 12px; }
        .wiki-nav-table th { color: #fff; font-weight: bold; vertical-align: middle; }
        .wiki-nav-table td { text-align: left; line-height: 1.8; word-break: keep-all; }
        .bg-nav-red { background-color: #D81C2F; } /* 효빈 시내버스 급행 레드 */
        .bg-nav-blue { background-color: #485EC6; } /* 효빈 시내버스 광역 블루 */
        .wiki-nav-item { display: inline-block; margin-right: 12px; white-space: nowrap; }
        .wiki-nav-item a { color: var(--wiki-link); text-decoration: none; font-weight: 500; transition: color 0.2s; }
        .wiki-nav-item a:hover { color: #FF4F91; text-decoration: underline; font-weight: bold; }
"""

# 주입할 HTML 코드
HTML_INJECT = """
        <!-- 나무위키식 하단 내비게이션 틀 시작 -->
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
                            </td>
                        </tr>
                        <tr>
                            <th class="bg-nav-red">제3과목<br>빅데이터 모델링</th>
                            <td>
                                <span class="wiki-nav-item"><a href="빅분기3-1-1.html">빅분기3-1-1</a></span>
                                <span class="wiki-nav-item"><a href="빅분기3-1-2.html">빅분기3-1-2</a></span>
                                <span class="wiki-nav-item"><a href="빅분기3-1-3.html">빅분기3-1-3</a></span>
                                <span class="wiki-nav-item"><a href="빅분기3-2.html">빅분기3-2</a></span>
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
        </div>
        <!-- 나무위키식 하단 내비게이션 틀 끝 -->
"""

# 현재 폴더의 모든 빅분기*.html 파일을 찾음
html_files = glob.glob("빅분기*.html")

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 이미 주입되어 있는지 확인 (중복 방지)
    if "wiki-nav-box" in content:
        print(f"[스킵] {filepath} 에는 이미 내비게이션 틀이 있습니다.")
        continue

    # CSS 주입: </style> 태그 바로 앞에 삽입
    if "</style>" in content:
        content = content.replace("</style>", CSS_INJECT + "\n    </style>")
    
    # HTML 주입: </div> <!-- wiki-container end --> 태그 바로 앞에 삽입
    target_tag = "</div> <!-- wiki-container end -->"
    if target_tag in content:
        content = content.replace(target_tag, HTML_INJECT + "\n    " + target_tag)
    else:
        # 혹시 저 주석이 없는 파일이라면 footer 바로 위에 삽입
        content = content.replace("<footer", HTML_INJECT + "\n    <footer")

    # 파일 덮어쓰기
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        print(f"[완료] {filepath} 에 내비게이션 틀 삽입 성공!")

print("🎉 모든 파일 처리가 완료되었습니다!")