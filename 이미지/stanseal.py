import cv2

# 1. 이미지 불러오기 및 흑백 변환
image = cv2.imread('hwan_san_chae.webp')
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# 2. 노이즈 제거 (디테일을 살리기 위해 미디언 블러 사용)
blurred = cv2.medianBlur(gray, 5)

# 3. 핵심: 적응형 이진화 (Adaptive Thresholding)
# 주변 영역(blockSize)과 비교해 선과 형태를 따내므로 흰머리 윤곽이 보존됩니다.
stencil = cv2.adaptiveThreshold(
    blurred, 
    255, 
    cv2.ADAPTIVE_THRESH_MEAN_C, 
    cv2.THRESH_BINARY, 
    blockSize=31,  # 이 숫자를 조절해 덩어리감 변경 (홀수만 가능: 11, 15, 21...)
    C=10           # 이 숫자를 낮추면 선이 굵어지고, 높이면 선이 얇아짐
)

# 4. 결과 저장
cv2.imwrite('hwan_san_chae_stencil_pro.jpg', stencil)