  // 清补凉材料数据
        const ingredients = [
            {
                id: 1,
                name: "红豆",
                color: "#e74c3c",
                icon: "🫘",
                description: "富含蛋白质和纤维，有助于补血养心",
                details: "红豆含有丰富的B族维生素和铁质，具有利水消肿、清热解毒的功效。"
            },
            {
                id: 2,
                name: "绿豆",
                color: "#27ae60",
                icon: "🫘",
                description: "清热解毒，消暑止渴",
                details: "绿豆性凉，含有丰富的蛋白质和多种维生素，是夏季消暑佳品。"
            },
            {
                id: 3,
                name: "薏米",
                color: "#f1c40f",
                icon: "🌾",
                description: "利水渗湿，健脾止泻",
                details: "薏米含有丰富的膳食纤维和多种矿物质，有助于改善水肿和消化不良。"
            },
            {
                id: 4,
                name: "莲子",
                color: "#e67e22",
                icon: "🌰",
                description: "养心安神，健脾补肾",
                details: "莲子含有多种生物碱和维生素，对心悸失眠有很好的缓解作用。"
            },
            {
                id: 5,
                name: "红枣",
                color: "#c0392b",
                icon: "🍒",
                description: "补中益气，养血安神",
                details: "红枣富含维生素C和环磷酸腺苷，能提高人体免疫力。"
            },
            {
                id: 6,
                name: "桂圆",
                color: "#d35400",
                icon: "🍇",
                description: "补心脾，益气血",
                details: "桂圆含有丰富的葡萄糖、蔗糖和蛋白质，对神经衰弱有改善作用。"
            },
            {
                id: 7,
                name: "银耳",
                color: "#ecf0f1",
                icon: "🍄",
                description: "滋阴润肺，养胃生津",
                details: "银耳富含胶质和多种氨基酸，是传统的美容养颜佳品。"
            },
            {
                id: 8,
                name: "椰奶",
                color: "#f7f9f9",
                icon: "🥥",
                description: "清凉解渴，补充能量",
                details: "椰奶含有丰富的维生素和矿物质，能为身体快速补充能量。"
            }
        ];

        // 选中的材料
        let selectedIngredients = [];

        // 初始化页面
        function initPage() {
            const container = document.getElementById('ingredientsContainer');
            
            ingredients.forEach(ingredient => {
                const card = document.createElement('div');
                card.className = 'card';
                card.dataset.id = ingredient.id;
                
                card.innerHTML = `
                    <div class="card-icon" style="background-color: ${ingredient.color}">
                        ${ingredient.icon}
                    </div>
                    <h3>${ingredient.name}</h3>
                    <p>${ingredient.description}</p>
                    <div class="more-info">
                        <p>${ingredient.details}</p>
                    </div>
                `;
                
                card.addEventListener('click', () => toggleIngredient(ingredient.id));
                
                container.appendChild(card);
            });
            
            // 添加按钮事件监听
            document.getElementById('completeBtn').addEventListener('click', showCompletionModal);
            document.getElementById('closeModal').addEventListener('click', closeModal);
        }

        // 切换材料选择状态
        function toggleIngredient(id) {
            const card = document.querySelector(`.card[data-id="${id}"]`);
            const index = selectedIngredients.indexOf(id);
            
            if (index === -1) {
                // 如果未选中且未达到最大数量
                if (selectedIngredients.length < 8) {
                    selectedIngredients.push(id);
                    card.classList.add('selected');
                    card.classList.add('active');
                }
            } else {
                // 如果已选中，则取消选择
                selectedIngredients.splice(index, 1);
                card.classList.remove('selected');
                card.classList.remove('active');
            }
            
            updateBowl();
        }

        // 更新碗中的内容
        function updateBowl() {
            const bowlContent = document.getElementById('bowlContent');
            const ingredientsVisual = document.getElementById('ingredientsVisual');
            
            // 更新碗的填充高度
            const fillPercentage = selectedIngredients.length / 8 * 100;
            bowlContent.style.height = `${fillPercentage}%`;
            
            // 清空之前的材料
            ingredientsVisual.innerHTML = '';
            
            // 添加选中的材料
            selectedIngredients.forEach(id => {
                const ingredient = ingredients.find(item => item.id === id);
                if (ingredient) {
                    const element = document.createElement('div');
                    element.className = 'ingredient';
                    element.style.backgroundColor = ingredient.color;
                    element.style.opacity = '1';
                    element.style.transform = 'scale(1)';
                    
                    // 随机位置
                    const left = Math.random() * 80 + 10;
                    const bottom = Math.random() * 60 + 10;
                    element.style.left = `${left}%`;
                    element.style.bottom = `${bottom}%`;
                    
                    ingredientsVisual.appendChild(element);
                }
            });
        }

        // 显示完成弹窗
        function showCompletionModal() {
            if (selectedIngredients.length === 0) {
                alert('请至少选择一种材料！');
                return;
            }

            const modalOverlay = document.getElementById('modalOverlay');
            const modalContent = document.getElementById('modalContent');
            const selectedIngredientsList = document.getElementById('selectedIngredientsList');
            const modalDescription = document.getElementById('modalDescription');

            // 清空之前的列表
            selectedIngredientsList.innerHTML = '';

            // 添加选中的材料
            selectedIngredients.forEach(id => {
                const ingredient = ingredients.find(item => item.id === id);
                if (ingredient) {
                    const element = document.createElement('div');
                    element.className = 'selected-ingredient';
                    element.textContent = ingredient.name;
                    selectedIngredientsList.appendChild(element);
                }
            });

            // 生成描述
            let description = '您制作的清补凉包含了';
            selectedIngredients.forEach((id, index) => {
                const ingredient = ingredients.find(item => item.id === id);
                if (ingredient) {
                    if (index === selectedIngredients.length - 1 && selectedIngredients.length > 1) {
                        description += '和';
                    }
                    description += ingredient.name;
                    if (index < selectedIngredients.length - 1 && selectedIngredients.length > 2) {
                        description += '、';
                    }
                }
            });
            
            description += '。这是一碗';
            
            // 根据材料数量添加评价
            if (selectedIngredients.length <= 2) {
                description += '清爽简约的清补凉，适合炎热的夏日。';
            } else if (selectedIngredients.length <= 5) {
                description += '营养均衡的清补凉，既有清凉解暑的功效，又有滋补养生的作用。';
            } else {
                description += '丰富多样的豪华版清补凉，各种食材相互搭配，功效全面！';
            }
            
            modalDescription.textContent = description;

            // 显示弹窗
            modalOverlay.style.display = 'flex';
            setTimeout(() => {
                modalContent.classList.add('show');
            }, 10);
        }

        // 关闭弹窗
        function closeModal() {
            const modalOverlay = document.getElementById('modalOverlay');
            const modalContent = document.getElementById('modalContent');
            
            modalContent.classList.remove('show');
            setTimeout(() => {
                modalOverlay.style.display = 'none';
            }, 300);
        }

        // 页面加载完成后初始化
        document.addEventListener('DOMContentLoaded', initPage);