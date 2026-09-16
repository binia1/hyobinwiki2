document.addEventListener("DOMContentLoaded", function() {
    const navContainers = document.querySelectorAll('.hb-안천구고등학교-nav');
    if(navContainers.length === 0) return;

    const navHTML = `
        <div style="border: 2px solid #ccc; background-color: #f8f9fa; border-radius: 8px; margin: 30px 0; overflow: hidden;">
            <div style="background-color: #8B0000; color: white; text-align: center; padding: 10px; font-weight: bold; font-size: 1.1rem; border-bottom: 2px solid #5C0000;">
                효빈광역시 안천구의 고등학교
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
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee; background-color: #E7F1FF;">
                            <a href="안천고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">안천고</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee; background-color: #E7F1FF;">
                            <a href="이자고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">이자고</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee; background-color: #FFF0F5;">
                            <a href="안천여자고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">안천여고</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee; background-color: #FFF0F5;">
                            <a href="당가여자고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">당가여고</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee; background-color: #FFF0F5;">
                            <a href="이자여자고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">이자여고</a>
                        </td>
                        <td style="width: 25%; padding: 12px;">
                            <a href="효빈농생명고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">◈효빈농생명고</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="당가고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">당가고</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="북택고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">북택고</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="안천과학고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">▣안천과학고등학교</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="안천정보고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">◈안천정보고</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                            <a href="영색무고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">영색무고</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-bottom: 1px solid #eee;">
                            <a href="제택고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">제택고</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee;">
                            <a href="창건고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">창건고</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee;">
                            <a href="팔망성고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">팔망성고</a>
                        </td>
                        <td style="width: 25%; padding: 12px; border-right: 1px solid #eee;">
                            <a href="하가고등학교.html" style="color: #0022AA; text-decoration: none; font-weight: bold;">하가고</a>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    `;

    navContainers.forEach(container => {
        container.innerHTML = navHTML;
    });
});