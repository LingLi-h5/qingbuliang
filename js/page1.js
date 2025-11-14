   // 清补凉历史数据
        const historyData = [
            {
                year: "唐代",
                title: "起源时期",
                image: "https://images.unsplash.com/photo-1597810744367-2d1e5d4d3a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "清补凉最早可追溯至唐代，当时称为'清凉饮'，是宫廷贵族夏季消暑的饮品。主要原料包括绿豆、薏米、莲子等，具有清热解毒的功效。唐代医学家孙思邈在《千金要方》中记载了类似配方，用于治疗暑热引起的不适。"
            },
            {
                year: "宋代",
                title: "民间普及",
                image: "https://images.unsplash.com/photo-1597810744367-2d1e5d4d3a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "宋代时期，随着商品经济的发展，清补凉逐渐从宫廷传入民间，成为普通百姓夏季常饮的甜品。配方开始多样化，增加了红枣、桂圆、百合等食材，更加注重养生功效。宋代饮食文化繁荣，各类甜品小吃盛行，清补凉因其独特的药用价值备受青睐。"
            },
            {
                year: "明代",
                title: "配方完善",
                image: "https://images.unsplash.com/photo-1597810744367-2d1e5d4d3a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "明代医药学家李时珍在《本草纲目》中详细记载了清补凉的多味药材及其功效，使其配方更加系统化。此时清补凉已成为具有明确食疗功效的传统饮品。明代中后期，随着海上贸易发展，一些海外食材如西米、椰浆等也开始融入清补凉配方中。"
            },
            {
                year: "清代",
                title: "名称确立",
                image: "https://images.unsplash.com/photo-1597810744367-2d1e5d4d3a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "清代时期，'清补凉'这一名称正式确立。随着南北文化交流，清补凉的制作方法传播到更多地区，并开始出现地方特色版本。广东、广西、海南等地形成了各具特色的清补凉流派。清代饮食文献《随园食单》中也有关于清补凉制作方法的记载。"
            },
            {
                year: "民国",
                title: "商业化发展",
                image: "https://images.unsplash.com/photo-1597810744367-2d1e5d4d3a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "民国时期，清补凉开始走向商业化，出现了专门售卖清补凉的店铺。制作工艺更加精细，配料更加丰富，成为夏季街头常见的小吃。随着城市化进程，清补凉从家庭自制逐渐转变为商业产品，出现了多种包装形式和销售渠道。"
            },
            {
                year: "现代",
                title: "创新与传承",
                image: "https://images.unsplash.com/photo-1597810744367-2d1e5d4d3a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                description: "现代清补凉在保留传统配方的基础上不断创新，出现了多种新口味和形式。同时，作为非物质文化遗产，清补凉的文化价值也受到更多重视。现代食品科技让清补凉实现了工业化生产，同时保留了传统手工制作的精髓，使其成为享誉海内外的中华传统美食。"
            }
        ];

        // 初始化DOM元素
        const timePoints = document.querySelectorAll('.time-point');
        const cardContainer = document.querySelector('.card-container');
        const cardImage = document.querySelector('.card-image');
        const cardTitle = document.querySelector('.card-content h2');
        const cardDescription = document.querySelector('.card-content p');

        // 设置默认激活第一个时间点
        timePoints[0].classList.add('active');

        // 为每个时间点添加点击事件
        timePoints.forEach(point => {
            point.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                
                // 移除所有active类
                timePoints.forEach(p => p.classList.remove('active'));
                
                // 为当前点击的时间点添加active类
                this.classList.add('active');
                
                // 更新卡片内容
                updateCard(index);
            });
        });

        // 更新卡片内容的函数
        function updateCard(index) {
            const data = historyData[index];
            
            // 添加淡出效果
            cardContainer.classList.remove('active');
            
            // 短暂延迟后更新内容并淡入
            setTimeout(() => {
                cardImage.style.backgroundImage = `url(${data.image})`;
                cardTitle.textContent = `${data.year} - ${data.title}`;
                cardDescription.textContent = data.description;
                
                cardContainer.classList.add('active');
            }, 300);
        }