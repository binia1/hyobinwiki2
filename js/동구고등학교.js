document.addEventListener("DOMContentLoaded", function() {
    const navContainers = document.querySelectorAll('.hb-동구고등학교-nav');
    if(navContainers.length === 0) return;

    const navHTML = `
        <div style="border: 2px solid #ccc; background-color: #f8f9fa; border-radius: 8px; margin: 30px 0; overflow: hidden;">
            <div style="background-color: #003366; color: white; text-align: center; padding: 10px; font-weight: bold; font-size: 1.1rem; border-bottom: 2px solid #00509d;">
                효빈광역시 동구의 고등학교
            </div>
            
            <div style="text-align: center; padding: 10px; border-bottom: 1px solid #ccc; font-size: 0.85rem; background-color: #eef2f7;">
                <span style="display:inline-block; border-bottom: 2px solid #4A90E2; margin: 0 5px; padding-bottom: 2px;">남자고등학교</span> ,
                <span style="display:inline-block; border-bottom: 2px solid #E24A68; margin: 0 5px; padding-bottom: 2px;">여자고등학교</span> ,
                <span style="display:inline-block; border-bottom: 2px solid #888; margin: 0 5px; padding-bottom: 2px;">이외 남녀공학</span>
            </div>

            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.95rem; background-color: #fff;">
                <tbody>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee; background-color: #E7F1FF;">
                            <a href="효빈동고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">효빈동고등학교</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee; background-color: #FFF0F5;">
                            <a href="효빈동여자고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">효빈동여자고등학교</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="사가당고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">사가당고등학교</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="덕현고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">덕현고등학교</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; background-color: #FFF0F5;">
                            <a href="덕현여자고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">덕현여자고등학교</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; ">
                            <a href="전천고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">전천고등학교</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee;">
                            <a href="효빈정보고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">효빈정보고등학교</a>
                        </td>
                        <td style="width: 25%; padding: 12px;"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    navContainers.forEach(container => {
        container.innerHTML = navHTML;
    });
});