const fs = require('fs/promises');
const path = require('path');

// 검사할 최상위 폴더 (현재 폴더 기준)
const targetDir = './'; 

// 하위 폴더까지 뒤져서 모든 HTML 파일을 찾는 함수
async function scanHtmlFiles(dir, fileList = []) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        // node_modules, .git, assets 등은 패스
        if (entry.isDirectory() && !['node_modules', '.git', 'assets'].includes(entry.name)) {
            await scanHtmlFiles(fullPath, fileList);
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            fileList.push(fullPath);
        }
    }
    return fileList;
}

async function fixHighways() {
    try {
        console.log('🚧 HTML 문서에서 고속도로 아이콘을 찾아 일괄 통일합니다...\n');
        
        const htmlFiles = await scanHtmlFiles(targetDir);
        let totalReplaced = 0;
        let modifiedFiles = 0;

        // 찾을 문자열 정규식: 
        // 1. 이미지/고속국도_숫자호선.svg
        // 2. 이미지/대한민국_고속국도_제숫자호선.png
        const regex = /이미지\/(고속국도_\d+호선\.svg|대한민국_고속국도_제\d+호선\.png)/g;

        for (const file of htmlFiles) {
            const content = await fs.readFile(file, 'utf-8');
            
            // 해당 문서에 변경할 고속도로 이미지가 있다면
            if (regex.test(content)) {
                // 몇 개나 있는지 카운트
                const matchCount = content.match(regex).length;
                
                // 일괄 찾아바꾸기
                const newContent = content.replace(regex, '이미지/대한민국_고속국도.png');
                
                // 파일 덮어쓰기
                await fs.writeFile(file, newContent, 'utf-8');
                
                console.log(`✅ [수정됨] ${file} (총 ${matchCount}개 경로 변경)`);
                totalReplaced += matchCount;
                modifiedFiles++;
            }
        }

        if (totalReplaced === 0) {
            console.log('🤷 변경할 고속도로 아이콘이 없습니다.');
        } else {
            console.log(`\n🎉 작업 완료! 총 ${modifiedFiles}개의 문서에서 ${totalReplaced}개의 아이콘을 '이미지/대한민국_고속국도.png'로 통일했습니다.`);
            console.log(`👉 잊지 말고 '이미지' 폴더 안에 '대한민국_고속국도.png' 파일을 딱 하나만 넣어두세요!`);
        }

    } catch (error) {
        console.error('❌ 스크립트 실행 중 오류가 발생했습니다:', error);
    }
}

// 스크립트 실행
fixHighways();