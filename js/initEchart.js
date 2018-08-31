// 初始化echarts
function initEcharts(data) {
    var myChart = echarts.init(document.getElementById("pulmonary"));
    console.log(data);
 
    var option = {
        grid: {
         left: '16%',
         top: '12%'   ,
         bottom: '16%',
         right: '16%'
        }, 
        tooltip: {
            trigger: 'item',
            formatter: function(data) {
                let arr = data.seriesName.split(',');
                return '肺结核' + '<br><span style="display: inline-block;margin-right: 5px;border-radius: 10px;width: 9px;height: 9px;background-color:' + data.color +'"></span>' + arr[data.dataIndex] + ': ' + data.value;
            }
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 1],
            min: 0,
            max: 1,
            axisLabel: {
             fontSize: 16,
             color: '#3870a9',
             fontFamily: 'Microsoft YaHei'
            },
        },
        yAxis: [
            {
                type: 'category',
                data: ['陈旧', '正常', '正常'],
                axisLabel: {
                 fontSize: 16,
                 color: '#fff',
                 fontFamily: 'Microsoft YaHei'
                },
                
            },
            {
                type: 'category',
                data: ['活动', '结核', '异常'],
                axisLabel: {
                 fontSize: 16,
                 color: '#fff',
                 fontFamily: 'Microsoft YaHei'
                },
            }
        ],
        series:[{
            name: '活动性,疑似度,异常度',
            type: 'bar',
            data: [data.activeScore.toFixed(2), data.tbScore.toFixed(2), data.abnormalScore.toFixed(2)],
            itemStyle: {
                normal: {
                    barBorderRadius: [15, 15, 15, 15],
                    color: '#4ad2ff'
                }
            },
            barWidth: 20
        }]
    };

    myChart.setOption(option);  
    resize(myChart);
}   

// 响应式
function resize(echart) {
    window.onresize = function() {
        echart.resize();
    }
}

// 获取数据设置为选中状态
function setChecked(data, ele){
    for(let i = 0 ; i < ele.length; i++){
        if(ele.eq(i).val() == data){ 
            ele.eq(i).parent().addClass("radio-success")
               .siblings().removeClass("radio-success");
        }
    }
}
