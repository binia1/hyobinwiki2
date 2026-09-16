document.addEventListener("DOMContentLoaded", function() {
    const navContainers = document.querySelectorAll('.hb-안천구중학교-nav');
    if(navContainers.length === 0) return;

    const navHTML = `
        <div style="border: 2px solid #ccc; background-color: #f8f9fa; border-radius: 8px; margin: 30px 0; overflow: hidden;">
            <div style="background-color: #2E8B57; color: white; text-align: center; padding: 10px; font-weight: bold; font-size: 1.1rem; border-bottom: 2px solid #1E5128;">
                효빈광역시 안천구의 중학교
            </div>
            
            <div style="text-align: center; padding: 10px; border-bottom: 1px solid #ccc; font-size: 0.85rem; background-color: #eef2f7;">
                <span style="display:inline-block; border-bottom: 2px solid #4A90E2; margin: 0 5px; padding-bottom: 2px;">남자중학교</span> ,
                <span style="display:inline-block; border-bottom: 2px solid #E24A68; margin: 0 5px; padding-bottom: 2px;">여자중학교</span> ,
                <span style="display:inline-block; border-bottom: 2px solid #888; margin: 0 5px; padding-bottom: 2px;">이외 남녀공학</span>
            </div>

            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.95rem; background-color: #fff;">
                <tbody>
                    <tr>
                        <td style="width: 20%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="군남중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">군남중</a>
                        </td>
                        <td style="width: 20%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="능천중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">능천중</a>
                        </td>
                        <td style="width: 20%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="당가중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">당가중</a>
                        </td>
                        <td style="width: 20%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="백합중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">백합중</a>
                        </td>
                        <td style="width: 20%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="북택중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">북택중</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="서수중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">서수중</a>
                        </td>
                        <td style="width: 20%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="성저중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">성저중</a>
                        </td>
                        <td style="width: 20%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="신동중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">신동중</a>
                        </td>
                        <td style="width: 20%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="안천중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">안천중</a>
                        </td>
                        <td style="width: 20%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="영색무중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">영색무중</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="원선중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">원선중</a>
                        </td>
                        <td style="width: 20%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee; background-color: #FFF0F5;">
                            <a href="이자여자중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">이자여중</a>
                        </td>
                        <td style="width: 20%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="이자중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">이자중</a>
                        </td>
                        <td style="width: 20%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="제택중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">제택중</a>
                        </td>
                        <td style="width: 20%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="창건중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">창건중</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 20%; padding: 12px; border-right: 1px solid #eee;">
                            <a href="탄자중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">탄자중</a>
                        </td>
                        <td style="width: 20%; padding: 12px; border-right: 1px solid #eee;">
                            <a href="팔망성중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">팔망성중</a>
                        </td>
                        <td style="width: 20%; padding: 12px; border-right: 1px solid #eee;">
                            <a href="하가중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">하가중</a>
                        </td>
                        <td style="width: 20%; padding: 12px; border-right: 1px solid #eee;">
                            <a href="하구중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">하구중</a>
                        </td>
                        <td style="width: 20%; padding: 12px;"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    navContainers.forEach(container => {
        container.innerHTML = navHTML;
    });
});