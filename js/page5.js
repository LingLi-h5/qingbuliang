 // 对话数据
        const dialogues = [
            {
                character: '小北',
                text: '小海，听说你们村通过清补凉产业实现了乡村振兴，这是真的吗？',
                position: 'left'
            },
            {
                character: '小海',
                text: '是的！我们村的清补凉产业不仅保留了传统工艺，还创造了就业机会，让年轻人愿意返乡工作。',
                position: 'right'
            },
            {
                character: '小北',
                text: '太棒了！我一直关注乡村振兴案例，能详细告诉我这是怎么做到的吗？',
                position: 'left'
            },
            {
                character: '小海',
                text: '我们建立了完整的产业链：本地农民种植原料，合作社统一收购，加工厂标准化生产，还结合了乡村旅游！',
                position: 'right'
            },
            {
                character: '小北',
                text: '这真是乡村振兴的好模式！一碗清补凉竟然能带动这么多产业发展。',
                position: 'left'
            },
            {
                character: '小海',
                text: '是啊，传统美食也能成为乡村振兴的新引擎！我们计划把这种模式推广到更多乡村。',
                position: 'right'
            },
            {
                character: '小北',
                text: '农民的收入有提高吗？',
                position: 'left'
            },
            {
                character: '小海',
                text: '通过"公司+合作社+农户"模式，农民收入提高了30%，还解决了200多人的就业问题。',
                position: 'right'
            },
            {
                character: '小北',
                text: '这真是太好了！希望更多乡村能像你们一样，找到适合自己的振兴之路。',
                position: 'left'
            },
            {
                character: '小海',
                text: '谢谢！一碗清补凉，激活一方经济，富裕一方百姓，这就是我们的乡村振兴故事！',
                position: 'right'
            }
        ];

        document.addEventListener('DOMContentLoaded', function() {
            const dialoguesContainer = document.querySelector('.dialogues-container');
            const clickHint = document.getElementById('clickHint');
            const character1 = document.getElementById('character1');
            const character2 = document.getElementById('character2');
            
            let currentDialogue = 0;
            let activeCharacter = null;
            
            // 显示对话
            function showDialogue(character) {
                if (currentDialogue >= dialogues.length) {
                    clickHint.textContent = "对话结束";
                    return;
                }
                
                const dialogue = dialogues[currentDialogue];
                
                // 检查点击的角色是否与对话匹配
                if (character !== dialogue.character) {
                    return;
                }
                
                // 移除之前的对话气泡
                const existingBubbles = dialoguesContainer.querySelectorAll('.dialogue-bubble');
                existingBubbles.forEach(bubble => {
                    bubble.classList.remove('active');
                    setTimeout(() => bubble.remove(), 400);
                });
                
                // 创建新的对话气泡
                const bubble = document.createElement('div');
                bubble.className = `dialogue-bubble ${dialogue.position === 'left' ? 'dialogue-left' : 'dialogue-right'}`;
                bubble.textContent = dialogue.text;
                
                dialoguesContainer.appendChild(bubble);
                
                // 触发动画
                setTimeout(() => {
                    bubble.classList.add('active');
                }, 50);
                
                currentDialogue++;
                
                // 更新提示
                if (currentDialogue >= dialogues.length) {
                    clickHint.textContent = "对话结束";
                } else {
                    const nextSpeaker = dialogues[currentDialogue].character;
                    clickHint.textContent = `请点击${nextSpeaker}继续对话`;
                }
            }
            
            // 角色点击事件
            character1.addEventListener('click', function() {
                showDialogue('小海');
            });
            
            character2.addEventListener('click', function() {
                showDialogue('小北');
            });
            
            // 初始提示
            clickHint.textContent = `请点击${dialogues[0].character}开始对话`;
        });