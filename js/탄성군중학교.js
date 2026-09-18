document.addEventListener("DOMContentLoaded", function() {
    const navContainers = document.querySelectorAll('.hb-탄성군중학교-nav');
    if(navContainers.length === 0) return;

    const navHTML = `
        <div style="border: 2px solid #ccc; background-color: #f8f9fa; border-radius: 8px; margin: 30px 0; overflow: hidden;">
            <div style="background-color: #2E8B57; color: white; text-align: center; padding: 10px; font-weight: bold; font-size: 1.1rem; border-bottom: 2px solid #1b5e20;">
                효빈광역시 탄성군의 중학교
            </div>
            
            <div style="text-align: center; padding: 10px; border-bottom: 1px solid #ccc; font-size: 0.85rem; background-color: #eef2f7;">
                <span style="display:inline-block; border-bottom: 2px solid #4A90E2; margin: 0 5px; padding-bottom: 2px;">남자중학교</span> ,
                <span style="display:inline-block; border-bottom: 2px solid #E24A68; margin: 0 5px; padding-bottom: 2px;">여자중학교</span> ,
                <span style="display:inline-block; border-bottom: 2px solid #888; margin: 0 5px; padding-bottom: 2px;">이외 남녀공학</span>
            </div>

            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.95rem; background-color: #fff;">
                <tbody>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="고무중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">고무중</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="고해중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">고해중</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="공리중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">공리중</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee; background-color: #FFF0F5;">
                            <a href="도변여자중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">도변여중</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="도변중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">도변중</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="도향중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">도향중</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="루비중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">루비중</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="미우중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">미우중</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="서목중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">서목중</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="소원중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">소원중</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="승남중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">승남중</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="앵내중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">앵내중</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="야진중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">야진중</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="요우중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">요우중</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="윤부중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">윤부중</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="잠재중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">잠재중</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="정근중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">정근중</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="천가중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">천가중</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee; background-color: #E7F1FF;">
                            <a href="탄성남자중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">탄성남중</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee; background-color: #FFF0F5;">
                            <a href="탄성여자중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">탄성여중</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee;">
                            <a href="탄성중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">탄성중</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee;">
                            <a href="흑택중학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">흑택중</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee;"></td>
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