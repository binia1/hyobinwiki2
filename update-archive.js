const fs = require('fs/promises');
const path = require('path');

// 설정: 이미지 폴더 경로와 출력될 JS 파일 경로
const imageFolder = './이미지'; 
const outputJsFile = './assets/image_data.js';

// 허용할 이미지 확장자
const allowedExtensions = ['.webp', '.webp', '.jpeg', '.gif', '.webp', '.svg'];

async function updateArchive() {
    try {
        console.log('🔍 이미지 폴더를 스캔하는 중...');

        // 1. 이미지 폴더 읽기
        const files = await fs.readdir(imageFolder);
        
        // 2. 이미지 파일만 필터링
        const imageFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return allowedExtensions.includes(ext);
        });

        if (imageFiles.length === 0) {
            console.log('⚠️ 이미지 폴더에 파일이 없습니다.');
            return;
        }

        // 3. 자바스크립트 배열 형태로 텍스트 생성
        // JSON.stringify를 사용하면 안전한 배열 문자열이 만들어집니다.
        const jsContent = `// 이 파일은 Node.js 스크립트(update-archive.js)에 의해 자동 생성되었습니다.
// 직접 수정하지 마시고 스크립트를 다시 실행해 주세요.

const imageFiles = ${JSON.stringify(imageFiles, null, 4)};
`;

        // 4. assets 폴더가 없다면 생성
        await fs.mkdir('./assets', { recursive: true });

        // 5. image_data.js 파일 쓰기
        await fs.writeFile(outputJsFile, jsContent, 'utf8');

        console.log(`🎉 성공! 총 ${imageFiles.length}개의 이미지 목록이 '${outputJsFile}'에 업데이트되었습니다.`);
        console.log(`👉 이제 새로고침하여 업그레이드된 아카이브를 확인해 보세요.`);

    } catch (error) {
        console.error('❌ 작업 중 오류가 발생했습니다:', error);
    }
}

updateArchive();