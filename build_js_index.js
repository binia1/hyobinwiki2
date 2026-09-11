const fs = require('fs');
const path = require('path');
const vm = require('vm');

// 1. [고정 구역] 수동으로 설정한 별칭 (aliasMap)
const MANUAL_ALIASES = {
    "럽라": "lovelive_nav", "러브라이브": "lovelive_nav", "뮤즈": "lovelive_muse_nav", "니지동": "lovelive_niji_nav",
    "리에라": "lovelive_liella_nav", "하스노소라": "lovelive_hasu_nav", "방도리": "bangdream-nav", "뱅드림": "bangdream-nav",
    "미개통": "틀_미개통노선도", "효빈미개통": "틀_미개통노선도", "덕남미개통": "노선도_덕남권", "덕북미개통": "노선도_덕북권",
    "효빈전철": "틀_효빈광역시전철노선", "효빈교통": "틀_효빈광역시의_교통", "효빈버스": "효빈시내버스목록",
    "안천구": "안천구행정", "남구": "남구행정", "동구": "동구행정", "서구": "서구행정", "북구": "북구행정", "중구": "중구행정",
    "창전구": "창전구행정", "청엽구": "청엽구행정", "탄성군": "탄성군행정", "시장": "민선효빈광역시장", "효빈시장": "전체효빈광역시장",
    "국회의원": "효빈22대국회의원", "느금마": "neugumma"
};

// 2. [고정 구역] 문서 설명 데이터 (specificDB)
const MANUAL_SPECIFIC_DB = {
    "ad_logic": { title: "스크립트:ad_logic", categories: ["시스템 스크립트"], overview: "배너 광고(AdSense) 송출 및 위치 제어를 담당하는 루트 스크립트입니다." },
    "틀_미개통노선도": { title: "틀:미개통노선도 (효빈권)", categories: ["노선도 틀", "효빈광역시 틀"], overview: "효빈광역시 관내 공사중/계획중인 전철 노선 상태를 시각화합니다." }
};

// 3. [자동 스캔 구역] 스캔할 디렉토리 설정
const directoriesToScan = [
    { dir: './', prefix: '' },
    { dir: './assets', prefix: 'assets/' },
    { dir: './js', prefix: 'js/' }
];

const ignoreFiles = ['build_index.js', 'build_js_index.js', 'separate_univ.py'];
const outputPath = './assets/js_paths.js';
const spaLogPath = './new_spa_aliases.txt';

// ★ 이전 실행에서 이미 스캔된 파일 목록 가져오기
let previouslyScanned = {};
if (fs.existsSync(outputPath)) {
    try {
        const currentContent = fs.readFileSync(outputPath, 'utf8');
        const sandbox = { window: {} };
        vm.createContext(sandbox);
        vm.runInContext(currentContent, sandbox);
        if (sandbox.window.filePaths) {
            previouslyScanned = sandbox.window.filePaths;
        }
    } catch (e) {
        console.log("[경고] 기존 인덱스를 읽지 못했습니다. 처음부터 스캔합니다.");
    }
}

const filePaths = {};
let totalFiles = 0;
const spaSnippets = [];

directoriesToScan.forEach(({ dir, prefix }) => {
    if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            if (fs.statSync(path.join(dir, file)).isFile() && file.endsWith('.js') && !ignoreFiles.includes(file)) {
                const fileNameWithoutExt = file.replace('.js', '');
                filePaths[fileNameWithoutExt] = prefix;
                totalFiles++;

                // ★ 핵심 수정: 빈 문자열 값 버그를 피하기 위해 'in' 연산자로 키의 존재 여부만 확실하게 검사
                if (!(fileNameWithoutExt in previouslyScanned) && !(fileNameWithoutExt in MANUAL_ALIASES)) {
                    spaSnippets.push(`    "${fileNameWithoutExt}": "틀_뷰어_SPA.html#${fileNameWithoutExt}",`);
                }
            }
        });
    }
});

const sortedFilePaths = Object.keys(filePaths).sort().reduce((acc, key) => {
    acc[key] = filePaths[key];
    return acc;
}, {});

// 통합 인덱스(js_paths.js) 생성
const outputContent = `/**
 * HyobinWiki JS Master Index (Auto-Generated & Fixed Aliases)
 * 업데이트: ${new Date().toLocaleString()}
 */

window.filePaths = ${JSON.stringify(sortedFilePaths, null, 4)};
window.aliasMap = ${JSON.stringify(MANUAL_ALIASES, null, 4)};
window.specificDB = ${JSON.stringify(MANUAL_SPECIFIC_DB, null, 4)};
`;

fs.writeFileSync(outputPath, outputContent, 'utf8');

console.log('-------------------------------------------');
console.log(`✅ JS 마스터 인덱스 갱신 완료!`);
console.log(`📊 전체 등록 파일: ${totalFiles}개`);

// 추출된 스니펫 처리
if (spaSnippets.length > 0) {
    const logContent = `// 이번에 새롭게 추가된 JS 파일들의 SPA 링크입니다.\n// 아래 코드를 복사해서 build_js_index.js의 MANUAL_ALIASES 안에 붙여넣으세요.\n// 한 번 추출된 파일은 다음 실행부터 이 텍스트 파일에 나오지 않습니다.\n\n${spaSnippets.join('\n')}\n`;
    fs.writeFileSync(spaLogPath, logContent, 'utf8');
    console.log(`🔥 새롭게 발견된 ${spaSnippets.length}개의 SPA 링크가 [new_spa_aliases.txt]에 추출되었습니다.`);
} else {
    fs.writeFileSync(spaLogPath, "// 이번 실행에서 새롭게 추가할 JS 파일이 없습니다.\n", 'utf8');
    console.log(`📝 새로 추가된 파일이 없어 추출 파일이 비워졌습니다.`);
}
console.log('-------------------------------------------');