document.addEventListener("DOMContentLoaded", function() {
    const navContainers = document.querySelectorAll('.hb-탄성군고등학교-nav');
    if(navContainers.length === 0) return;

    const navHTML = `
        <div style="border: 2px solid #ccc; background-color: #f8f9fa; border-radius: 8px; margin: 30px 0; overflow: hidden;">
            <div style="background-color: #A23467; color: white; text-align: center; padding: 10px; font-weight: bold; font-size: 1.1rem; border-bottom: 2px solid #7a1f4b;">
                효빈광역시 탄성군의 고등학교
            </div>
            
            <div style="text-align: center; padding: 10px; border-bottom: 1px solid #ccc; font-size: 0.85rem; background-color: #eef2f7;">
                <span style="display:inline-block; border-bottom: 2px solid #4A90E2; margin: 0 5px; padding-bottom: 2px;">남자고등학교</span> ,
                <span style="display:inline-block; border-bottom: 2px solid #E24A68; margin: 0 5px; padding-bottom: 2px;">여자고등학교</span> ,
                <span style="display:inline-block; border-bottom: 2px solid #888; margin: 0 5px; padding-bottom: 2px;">이외 남녀공학</span>
                <br>
                <span style="font-size: 0.75rem; color: #666; margin-top: 5px; display: inline-block;">※: 자사고, ⊙: 자공고, ▣: 특목고, ◈: 특성화고, 이외 일반계고</span>
            </div>

            <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 0.95rem; background-color: #fff;">
                <tbody>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="고해고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">고해고</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="도변고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">도변고</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee; background-color: #FFF0F5;">
                            <a href="도변여자고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">도변여고</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="서목고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">서목고</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="소원고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">소원고</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="앵내고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">앵내고</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="야진고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">야진고</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="탄성고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">탄성고</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee;">
                            <a href="탄성과학고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">▣탄성과고</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee;">
                            <a href="탄성상업고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">◈탄성상고</a>
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