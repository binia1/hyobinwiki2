// make_list.js
const fs = require('fs');
const path = require('path');

// 현재 폴더를 읽어서 .html 파일만 걸러냄
const files = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'));

// JSON 형식으로 변환 (index.html 등은 제외하고 싶다면 추가 처리 가능)
const result = files.map(file => {
    return {
        title: file.replace('.html', ''),
        href: file
    };
});

// data.json 이라는 파일로 자동 생성
fs.writeFileSync('wiki_list.json', JSON.stringify(result, null, 2), 'utf-8');
console.log('✅ 위키 문서 목록이 wiki_list.json으로 자동 생성되었습니다!');