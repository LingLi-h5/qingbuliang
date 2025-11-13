 // 初始化所有图表
        document.addEventListener('DOMContentLoaded', function() {
            // 初始化图表
            const pieChart = echarts.init(document.getElementById('pieChart'));
            const barChart = echarts.init(document.getElementById('barChart'));
            const lineChart = echarts.init(document.getElementById('lineChart'));

            // 饼图配置 - 各环节产值占比
            const pieOption = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c}亿元 ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    right: 10,
                    top: 'center',
                    data: ['原料种植', '生产加工', '包装运输', '品牌营销', '零售渠道']
                },
                series: [
                    {
                        name: '产值占比',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        center: ['40%', '50%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '18',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 1.2, name: '原料种植', itemStyle: {color: '#27ae60'}},
                            {value: 1.8, name: '生产加工', itemStyle: {color: '#f39c12'}},
                            {value: 0.9, name: '包装运输', itemStyle: {color: '#3498db'}},
                            {value: 1.5, name: '品牌营销', itemStyle: {color: '#9b59b6'}},
                            {value: 0.6, name: '零售渠道', itemStyle: {color: '#e74c3c'}}
                        ]
                    }
                ]
            };

            // 柱状图配置 - 产业链就业人数分布
            const barOption = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    formatter: '{b}: {c}人'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['原料种植', '原料加工', '生产制作', '物流运输', '品牌销售', '市场拓展'],
                    axisLabel: {
                        interval: 0,
                        rotate: 30
                    }
                },
                yAxis: {
                    type: 'value',
                    name: '就业人数(人)'
                },
                series: [
                    {
                        name: '就业人数',
                        type: 'bar',
                        barWidth: '60%',
                        data: [
                            {value: 650, itemStyle: {color: '#27ae60'}},
                            {value: 450, itemStyle: {color: '#2ecc71'}},
                            {value: 350, itemStyle: {color: '#f39c12'}},
                            {value: 250, itemStyle: {color: '#e67e22'}},
                            {value: 200, itemStyle: {color: '#d35400'}},
                            {value: 150, itemStyle: {color: '#c0392b'}}
                        ]
                    }
                ]
            };

            // 折线图配置 - 产业链年产值增长趋势
            const lineOption = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['原料种植', '生产加工', '品牌销售', '总产业链'],
                    top: '5%'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    top: '15%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['2018', '2019', '2020', '2021', '2022', '2023']
                },
                yAxis: {
                    type: 'value',
                    name: '产值(亿元)'
                },
                series: [
                    {
                        name: '原料种植',
                        type: 'line',
                        data: [1.2, 1.5, 1.8, 2.2, 2.5, 3.0],
                        smooth: true,
                        lineStyle: { width: 3 },
                        itemStyle: { color: '#27ae60' }
                    },
                    {
                        name: '生产加工',
                        type: 'line',
                        data: [0.8, 1.2, 1.5, 2.0, 2.8, 3.5],
                        smooth: true,
                        lineStyle: { width: 3 },
                        itemStyle: { color: '#f39c12' }
                    },
                    {
                        name: '品牌销售',
                        type: 'line',
                        data: [0.5, 0.8, 1.2, 1.8, 2.5, 3.2],
                        smooth: true,
                        lineStyle: { width: 3 },
                        itemStyle: { color: '#d35400' }
                    },
                    {
                        name: '总产业链',
                        type: 'line',
                        data: [2.5, 3.5, 4.5, 6.0, 7.8, 9.7],
                        smooth: true,
                        lineStyle: {
                            width: 4,
                            type: 'dashed'
                        },
                        itemStyle: { color: '#c0392b' }
                    }
                ]
            };

            // 渲染图表
            pieChart.setOption(pieOption);
            barChart.setOption(barOption);
            lineChart.setOption(lineOption);

            // 窗口大小变化时重绘图表
            window.addEventListener('resize', function() {
                pieChart.resize();
                barChart.resize();
                lineChart.resize();
            });

            // 添加图表点击事件
            pieChart.on('click', function(params) {
                alert('您点击了: ' + params.name + '\n产值: ' + params.value + '亿元\n占比: ' + params.percent + '%');
            });

            barChart.on('click', function(params) {
                alert('您点击了: ' + params.name + '\n就业人数: ' + params.value + '人');
            });
            
            lineChart.on('click', function(params) {
                alert('您点击了: ' + params.seriesName + '\n年份: ' + params.name + '\n产值: ' + params.value + '亿元');
            });
        });