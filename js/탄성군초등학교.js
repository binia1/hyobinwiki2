document.addEventListener("DOMContentLoaded", function() {
    const navContainers = document.querySelectorAll('.hb-탄성군초등학교-nav');
    if(navContainers.length === 0) return;

    const navHTML = `
        <div style="border: 2px solid #ccc; background-color: #f8f9fa; border-radius: 8px; margin: 30px 0; overflow: hidden;">
            <div style="background-color: #3CB371; color: white; text-align: center; padding: 10px; font-weight: bold; font-size: 1.1rem; border-bottom: 2px solid #2E8B57;">
                효빈광역시 탄성군의 초등학교
            </div>
            
            <div style="text-align: center; padding: 10px; border-bottom: 1px solid #ccc; font-size: 0.85rem; background-color: #eef2f7;">
                <span style="display:inline-block; border-bottom: 2px solid #4A90E2; margin: 0 5px; padding-bottom: 2px;">남자초등학교</span> ,
                <span style="display:inline-block; border-bottom: 2px solid #E24A68; margin: 0 5px; padding-bottom: 2px;">여자초등학교</span> ,
                <span style="display:inline-block; border-bottom: 2px solid #888; margin: 0 5px; padding-bottom: 2px;">이외 남녀공학</span>
            </div>

            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.95rem; background-color: #fff;">
                <tbody>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="계층초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">계층초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="고무초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">고무초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="고해초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">고해초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="공리초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">공리초</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="도변초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">도변초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="도향초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">도향초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="루비초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">루비초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="무한초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">무한초</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="미성초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">미성초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="미우초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">미우초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="서목초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">서목초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="성규초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">성규초</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="소원초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">소원초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="소춘초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">소춘초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="수안초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">수안초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="승남초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">승남초</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="앵내초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">앵내초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="야진초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">야진초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="영왕초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">영왕초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="요우초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">요우초</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="윤부초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">윤부초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="은염초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">은염초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="이와초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">이와초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="입리초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">입리초</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="잠재초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">잠재초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="정근초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">정근초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="정명초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">정명초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="천가초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">천가초</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="탄성초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">탄성초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="토영초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">토영초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="파래초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">파래초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="표명초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">표명초</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee;">
                            <a href="흑택초등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">흑택초</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee;"></td>
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