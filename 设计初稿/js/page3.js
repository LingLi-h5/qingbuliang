  // 清补凉制作步骤数据
        const steps = [
            {
                id: 1,
                title: "准备食材",
                description: "精选红豆、绿豆、薏米、西米、红枣、花生等优质原料",
                media: {
                    type: "image",
                    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                detail: {
                    title: "食材准备阶段",
                    content: "海南清补凉的食材选择非常讲究。需要准备红豆、绿豆、薏米、西米、红枣、龙眼肉、花生等多种原料。每种食材都需要经过精心挑选，确保新鲜、干净。红豆和绿豆需要提前浸泡4-6小时，薏米浸泡2小时，这样煮出来的口感才会更加软糯。",
                    media: {
                        type: "image",
                        src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    }
                }
            },
            {
                id: 2,
                title: "煮制豆类",
                description: "将红豆、绿豆分别煮熟至软糯但保持形状完整",
                media: {
                    type: "image",
                    src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                detail: {
                    title: "豆类煮制技巧",
                    content: "煮豆类是制作清补凉的关键步骤。红豆和绿豆需要分开煮制，因为它们的煮熟时间不同。红豆需要煮约40-50分钟，绿豆约30分钟。煮的时候要控制火候，先用大火煮沸，然后转小火慢煮，这样豆子才能煮得软糯但不会烂成泥。煮好后要立即用冷水冲洗，防止豆子继续变软。",
                    media: {
                        type: "video",
                        src: "https://example.com/videos/boiling-beans.mp4" // 替换为实际视频URL
                    }
                }
            },
            {
                id: 3,
                title: "处理薏米西米",
                description: "薏米煮熟，西米煮至透明后过冷水保持Q弹",
                media: {
                    type: "image",
                    src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                detail: {
                    title: "薏米与西米的处理",
                    content: "薏米需要提前浸泡2小时，然后煮约30分钟至软糯。西米的煮制需要技巧：水沸腾后下西米，煮10分钟左右，期间要不停搅拌防止粘锅。当西米中间只剩小白点时关火，焖5分钟至完全透明。煮好的西米要立即用冷水冲洗，洗去表面黏液，这样西米才会Q弹爽滑。",
                    media: {
                        type: "image",
                        src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    }
                }
            },
            {
                id: 4,
                title: "准备椰奶",
                description: "新鲜椰子取汁或使用优质椰浆，加入适量糖调味",
                media: {
                    type: "image",
                    src: "https://images.unsplash.com/photo-1570194065650-2f276c69d1f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                detail: {
                    title: "椰奶的制作",
                    content: "正宗的海南清补凉使用新鲜椰肉榨取的椰奶。将新鲜椰肉切碎，加入适量温水，用搅拌机打碎后过滤取汁。如果使用市售椰浆，需要按1:1的比例加水稀释。根据个人口味加入适量白糖或冰糖，搅拌均匀至糖完全溶解。椰奶的浓淡会影响整体口感，需要恰到好处。",
                    media: {
                        type: "video",
                        src: "https://example.com/videos/making-coconut-milk.mp4" // 替换为实际视频URL
                    }
                }
            },
            {
                id: 5,
                title: "混合食材",
                description: "将所有煮好的食材按比例混合，保持口感层次",
                media: {
                    type: "image",
                    src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                detail: {
                    title: "食材混合技巧",
                    content: "混合食材时要注意比例和顺序。一般按照豆类:薏米:西米:果干=2:1:1:1的比例搭配。先放入豆类和薏米，再加入西米，最后撒上红枣、龙眼肉和花生。轻轻搅拌均匀，避免过度搅拌导致食材破碎。每种食材都要保持其独特的口感和形状。",
                    media: {
                        type: "image",
                        src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    }
                }
            },
            {
                id: 6,
                title: "加入椰奶",
                description: "将调好味的椰奶倒入混合食材中，冷藏后口感更佳",
                media: {
                    type: "image",
                    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                detail: {
                    title: "椰奶的加入",
                    content: "将调好味的椰奶缓缓倒入混合好的食材中，椰奶的量要刚好没过所有食材。轻轻搅拌使椰奶均匀分布。此时可以尝一下甜度，根据需要调整。做好的清补凉最好冷藏1-2小时后再食用，这样各种食材的味道会更好地融合，口感也更加清凉爽口。",
                    media: {
                        type: "video",
                        src: "https://example.com/videos/pouring-coconut-milk.mp4" // 替换为实际视频URL
                    }
                }
            },
            {
                id: 7,
                title: "装饰与享用",
                description: "撒上烤花生碎、葡萄干等装饰，冰镇后风味最佳",
                media: {
                    type: "image",
                    src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                },
                detail: {
                    title: "最后的装饰",
                    content: "在装碗的清补凉上撒上烤香的花生碎、葡萄干或时令水果丁作为装饰。传统的海南清补凉还会加入少许碎冰，在炎热的夏天更加消暑解渴。清补凉最好现做现吃，保持食材的新鲜口感。在海南，清补凉不仅是甜品，更是夏日里的一道清凉风景。",
                    media: {
                        type: "image",
                        src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    }
                }
            }
        ];

        // 初始化变量
        let currentStep = 0;
        const timeline = document.getElementById('timeline');
        const detailPanel = document.getElementById('detail-panel');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        // 动态生成步骤
        steps.forEach((step, index) => {
            const stepElement = document.createElement('div');
            stepElement.className = 'step';
            if (index === 0) stepElement.classList.add('active');
            
            let mediaElement;
            if (step.media.type === 'video') {
                mediaElement = `<video class="step-video" muted loop>
                    <source src="${step.media.src}" type="video/mp4">
                    您的浏览器不支持视频播放
                </video>`;
            } else {
                mediaElement = `<img class="step-image" src="${step.media.src}" alt="${step.title}">`;
            }
            
            stepElement.innerHTML = `
                <div class="step-media">
                    ${mediaElement}
                    <div class="step-number">${step.id}</div>
                </div>
                <div class="step-info">
                    <h3 class="step-title">${step.title}</h3>
                    <p class="step-desc">${step.description}</p>
                </div>
            `;
            
            stepElement.addEventListener('click', () => {
                setCurrentStep(index);
            });
            
            timeline.appendChild(stepElement);
        });

        // 设置当前步骤
        function setCurrentStep(index) {
            currentStep = index;
            updateDisplay();
        }

        // 更新显示
        function updateDisplay() {
            // 更新步骤激活状态
            document.querySelectorAll('.step').forEach((step, index) => {
                if (index === currentStep) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });
            
            // 更新导航按钮
            prevBtn.disabled = currentStep === 0;
            nextBtn.disabled = currentStep === steps.length - 1;
            
            // 更新详细面板
            updateDetailPanel();
            
            // 滚动时间轴到当前步骤
            const stepWidth = document.querySelector('.step').offsetWidth + 40;
            timeline.style.transform = `translateX(-${currentStep * stepWidth}px)`;
        }

        // 更新详细面板
        function updateDetailPanel() {
            const step = steps[currentStep];
            
            let detailMediaElement;
            if (step.detail.media.type === 'video') {
                detailMediaElement = `
                    <video class="detail-video" controls autoplay>
                        <source src="${step.detail.media.src}" type="video/mp4">
                        您的浏览器不支持视频播放
                    </video>
                `;
            } else {
                detailMediaElement = `<img class="detail-image" src="${step.detail.media.src}" alt="${step.detail.title}">`;
            }
            
            detailPanel.innerHTML = `
                <h2 class="detail-title">${step.detail.title}</h2>
                <div class="detail-content">
                    <div class="detail-text">
                        <p>${step.detail.content}</p>
                    </div>
                    <div class="detail-media">
                        ${detailMediaElement}
                    </div>
                </div>
            `;
            
            detailPanel.classList.add('active');
        }

        // 事件监听
        prevBtn.addEventListener('click', () => {
            if (currentStep > 0) {
                setCurrentStep(currentStep - 1);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentStep < steps.length - 1) {
                setCurrentStep(currentStep + 1);
            }
        });

        // 初始化显示
        updateDisplay();