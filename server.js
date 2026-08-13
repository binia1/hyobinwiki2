const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors()); // HTML에서 이 서버에 접속할 수 있도록 허락해 줌

// 코스피 현재 가격을 가져오는 API (한국투자증권 API 예시)
app.get('/api/kospi', async (req, res) => {
    try {
        // 한국투자증권 API 토큰 발급 및 실시간 주가 조회 로직 (문서 참고 필요)
        // 아래는 가상의 증권사 API 호출 예시입니다.
        /*
        const response = await axios.get('https://openapi.koreainvestment.com/uapi/...', {
            headers: {
                'Authorization': 'Bearer 내_시크릿_토큰',
                'appkey': '내_앱키',
                'appsecret': '내_앱시크릿'
            }
        });
        */
        
        // 연습용 가짜(Mock) 데이터 넘겨주기 (실제로는 위에서 받은 response.data 값을 넘김)
        const currentKospiPrice = 211500; 
        
        res.json({ price: currentKospiPrice });
    } catch (error) {
        res.status(500).json({ message: "서버 오류" });
    }
});

// 서버를 3000번 포트에서 실행
app.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});