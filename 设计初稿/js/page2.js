 // 模拟清补凉在中国的分布数据
        const qingbuliangData = [
            {name: '海南', value: 95, type: 'high', description: '清补凉的发源地，街头巷尾随处可见'},
            {name: '广东', value: 85, type: 'high', description: '深受欢迎的夏季甜品，各大糖水店均有售'},
            {name: '广西', value: 80, type: 'high', description: '与海南类似，是当地传统甜品'},
            {name: '福建', value: 70, type: 'medium', description: '主要在闽南地区流行'},
            {name: '台湾', value: 65, type: 'medium', description: '受闽南文化影响，有一定市场'},
            {name: '云南', value: 60, type: 'medium', description: '部分地区有售，尤其旅游区'},
            {name: '贵州', value: 55, type: 'medium', description: '逐渐流行的地方特色甜品'},
            {name: '湖南', value: 45, type: 'low', description: '主要在大城市的部分甜品店有售'},
            {name: '湖北', value: 40, type: 'low', description: '少数甜品店引进的地方特色'},
            {name: '四川', value: 35, type: 'low', description: '偶尔可见的特色甜品'},
            {name: '江西', value: 30, type: 'low', description: '少数地方有售'},
            {name: '浙江', value: 25, type: 'low', description: '主要在大城市的部分店铺'},
            {name: '江苏', value: 20, type: 'low', description: '少数甜品店有售'},
            {name: '上海', value: 15, type: 'low', description: '少数特色甜品店引进'},
            {name: '北京', value: 10, type: 'low', description: '少数海南菜餐厅有售'},
            {name: '天津', value: 8, type: 'low', description: '极少数店铺有售'},
            {name: '河北', value: 5, type: 'none', description: '几乎无分布'},
            {name: '河南', value: 5, type: 'none', description: '几乎无分布'},
            {name: '山东', value: 5, type: 'none', description: '几乎无分布'},
            {name: '山西', value: 3, type: 'none', description: '几乎无分布'},
            {name: '陕西', value: 3, type: 'none', description: '几乎无分布'},
            {name: '甘肃', value: 2, type: 'none', description: '几乎无分布'},
            {name: '青海', value: 1, type: 'none', description: '几乎无分布'},
            {name: '新疆', value: 1, type: 'none', description: '几乎无分布'},
            {name: '西藏', value: 1, type: 'none', description: '几乎无分布'},
            {name: '内蒙古', value: 2, type: 'none', description: '几乎无分布'},
            {name: '黑龙江', value: 3, type: 'none', description: '几乎无分布'},
            {name: '吉林', value: 3, type: 'none', description: '几乎无分布'},
            {name: '辽宁', value: 4, type: 'none', description: '几乎无分布'},
            {name: '重庆', value: 20, type: 'low', description: '少数甜品店有售'},
            {name: '安徽', value: 15, type: 'low', description: '少数地方有售'},
            {name: '香港', value: 50, type: 'medium', description: '部分糖水店有售'},
            {name: '澳门', value: 45, type: 'medium', description: '部分甜品店有售'}
        ];

        // 初始化ECharts实例
        const chartDom = document.getElementById('map');
        const myChart = echarts.init(chartDom);

        // 配置项
        const option = {
            title: {
                show: false
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    if (params.data) {
                        return `<b>${params.name}</b><br/>
                                清补凉普及度: ${params.data.value}%<br/>
                                ${params.data.description}`;
                    }
                    return `<b>${params.name}</b><br/>暂无数据`;
                }
            },
            visualMap: {
                type: 'piecewise',
                pieces: [
                    {min: 80, max: 100, label: '高分布区域', color: '#ff6b6b'},
                    {min: 50, max: 79, label: '中分布区域', color: '#ffa726'},
                    {min: 10, max: 49, label: '低分布区域', color: '#4ecdc4'},
                    {min: 0, max: 9, label: '无分布区域', color: '#c7c7c7'}
                ],
                left: 'left',
                top: 'bottom',
                textStyle: {
                    color: '#333'
                }
            },
            series: [
                {
                    name: '清补凉分布',
                    type: 'map',
                    map: 'china',
                    roam: true,
                    emphasis: {
                        label: {
                            show: true
                        },
                        itemStyle: {
                            areaColor: '#ffd700'
                        }
                    },
                    data: qingbuliangData,
                    nameMap: {
                        '海南': '海南',
                        '广东': '广东',
                        '广西': '广西',
                        '福建': '福建',
                        '台湾': '台湾',
                        '云南': '云南',
                        '贵州': '贵州',
                        '湖南': '湖南',
                        '湖北': '湖北',
                        '四川': '四川',
                        '江西': '江西',
                        '浙江': '浙江',
                        '江苏': '江苏',
                        '上海': '上海',
                        '北京': '北京',
                        '天津': '天津',
                        '河北': '河北',
                        '河南': '河南',
                        '山东': '山东',
                        '山西': '山西',
                        '陕西': '陕西',
                        '甘肃': '甘肃',
                        '青海': '青海',
                        '新疆': '新疆',
                        '西藏': '西藏',
                        '内蒙古': '内蒙古',
                        '黑龙江': '黑龙江',
                        '吉林': '吉林',
                        '辽宁': '辽宁',
                        '重庆': '重庆',
                        '安徽': '安徽',
                        '香港': '香港',
                        '澳门': '澳门'
                    }
                }
            ]
        };

        // 使用配置项和数据显示图表
        myChart.setOption(option);

        // 添加窗口大小变化时的响应式行为
        window.addEventListener('resize', function() {
            myChart.resize();
        });

        // 自定义图例交互
        document.querySelectorAll('.legend-item').forEach(item => {
            item.addEventListener('click', function() {
                const type = this.getAttribute('data-type');
                filterMap(type);
            });
        });

        // 筛选地图显示
        function filterMap(type) {
            let filteredData;
            
            switch(type) {
                case 'high':
                    filteredData = qingbuliangData.filter(item => item.value >= 80);
                    break;
                case 'medium':
                    filteredData = qingbuliangData.filter(item => item.value >= 50 && item.value < 80);
                    break;
                case 'low':
                    filteredData = qingbuliangData.filter(item => item.value >= 10 && item.value < 50);
                    break;
                case 'none':
                    filteredData = qingbuliangData.filter(item => item.value < 10);
                    break;
                default:
                    filteredData = qingbuliangData;
            }
            
            myChart.setOption({
                series: [{
                    data: filteredData
                }]
            });
        }


        // 添加点击省份的交互
        myChart.on('click', function(params) {
            if (params.componentType === 'series') {
                alert(`您点击了 ${params.name}\n清补凉普及度: ${params.data.value}%\n${params.data.description}`);
            }
        });