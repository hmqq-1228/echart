$(function(){
        $('#box').fullpage({
            sectionsColor:['#262829', '#262829', '#262829', '#262829','#262829', '#262829', '#262829', '#262829','#262829'],
            continuousVertical:true,
            anchors: ['page1', 'page2', 'page3', 'page4','page5', 'page6', 'page7', 'page8','page9'],
            menu:'#menu',
            resize:false
        })

    });
    
    var myChart1 = echarts.init(document.getElementById("main1"));
    var myChart2 = echarts.init(document.getElementById("main2"));
    var myChart3 = echarts.init(document.getElementById("main3"));
    var myChart4 = echarts.init(document.getElementById("main4"));
    var myChart5 = echarts.init(document.getElementById("main5"));
    var myChart6 = echarts.init(document.getElementById("main6"));
    var myChart7 = echarts.init(document.getElementById("main7"));
    var myChart8 = echarts.init(document.getElementById("main8"));
    var myChart9 = echarts.init(document.getElementById("main9"));
    var myChart10 = echarts.init(document.getElementById("main10"));
    var myChart11 = echarts.init(document.getElementById("main11"));
    var myChart12 = echarts.init(document.getElementById("main12"));
    var myChart13 = echarts.init(document.getElementById("main13"));
    var myChart14 = echarts.init(document.getElementById("main14"));
    var myChart15 = echarts.init(document.getElementById("main15"));
    var myChart16 = echarts.init(document.getElementById("main16"));
    var myChart17 = echarts.init(document.getElementById("main17"));
    var myChart18 = echarts.init(document.getElementById("main18"));
    var myChart19 = echarts.init(document.getElementById("main19"));

option1 = {
    title: {
        text: '今日客流数据统计',
        textStyle:{
        	color:"#00fff9"
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ["8:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","24:00"],
        axisLabel: {
                show: true,
                textStyle: {
                    color: '#49BDCA'
                }
           },
         axisLine:{
            	show:false
            },
        axisTick:{
            show:false
        }
    },
    yAxis: {
        type: 'value',
         axisLabel: {
                show: true,
                textStyle: {
                    color: '#49BDCA'
                }
          },
          min:0,
          max:40,
        axisLine:{
            	show:false
            },
        axisTick:{
            show:false
        }
    },
    series: [
        {
            name:'客流量',
            type:'line',
            lineStyle:{
            	normal:{
            		color:"#00fff9"
            	},
            },
            itemStyle:{
            	normal:{
            		color:"#fff"
            	},
            },
            data:[0,10.4,14, 19, 9, 7, 27,18,0],
            smooth:true
        }
    ]
};
    myChart1.setOption(option1);
    
option2 = {
    title : {
        text: '今日到店年龄分布',
        textStyle:{
            color:"#00fff9"
        },
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '40%'],
            data:[
                {
                    value:250,
                    name:'0-18岁'
                },
                {
                    value:125,
                    name:'31-40岁'
                },
                {
                    value:125,
                    name:'40岁以上'
                },
                {
                    value:500,
                    name:'19-30岁'
                },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label:{
                normal:{
                    color:"#49BDCA",

                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            color:[
                "#fff",
                "#00fff9",
                "#1E5F6F",
                "#49BDCA"
            ]
        },{
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '40%'],
            data:[
                {
                    value:250,
                    name:'0-18岁'
                },
                {
                    value:125,
                    name:'31-40岁'
                },
                {
                    value:125,
                    name:'40岁以上'
                },
                {
                    value:500,
                    name:'19-30岁'
                },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label:{
                normal:{
                    color:"#000",
                    position:"inside",
                    formatter:"{d}%",
                    fontSize:10,
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            color:[
                "#fff",
                "#00fff9",
                "#1E5F6F",
                "#49BDCA"
            ]
        }
    ]
};
myChart2.setOption(option2);

option3 = {
    title: {
        text: '今年到店年龄比例',
        textStyle:{
            color:"#00fff9"
        },
        x:'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a}:{c}%"
    },
    xAxis: {
        data: [],
        type:'value',
        show:false,
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        show:false,
        axisTick: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        name:'男人',
        data:[64],
        stack: 'income',
        barWidth: 30,
        color:["#00fff9"],
        label: {
            normal: {
                show: true,
                color:"#178590",
                position: 'inside',
                formatter: function(obj) {
                    return obj.value + '%';
                }
            }
        }
    },{
        type:'bar',
        name:'女人',
        data:[36],
        stack: 'income',
        barWidth: 30,
        color:["#1E5F6F"],
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(obj) {
                    return obj.value + '%';
                }
            }
        }
    }]
};
myChart3.setOption(option3);

option4 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} :{d}%"
    },
    series: [{
        name: '交易占比',
        type: 'pie',
        radius: ['60%', '70%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 50.02,
            name: '零售交易额',
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#FF3C78',
                        fontSize: 30
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#49BDCA'
                }
            },
        }, {
            value: 49.98,
            name: '其他',
            label: {
                normal: {
                    formatter: '\n零售交易额占比',
                    textStyle: {
                        color: '#FF3C78',
                        fontSize: 20,

                    }
                }
            },
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#1E5F6F'
                }
            },
            hoverAnimation: false
        }]
    }]
};
myChart4.setOption(option4);

var count = 360;
var percent=0.863;
var visibleCount=count*percent;
var data = [];
for (var i = 0; i < visibleCount; i++) {
    data.push([1,i]);
}
for (var i = visibleCount; i < count; i++) {
    data.push([1,0]);
}

option5 = {
    color: ['#1E5F6F'],
    title: {
        text: (percent * 100) +'%',
        subtext:"今日出勤率",
        subtextStyle:{
            color:'#49BDCA',
            fontSize:20,
            fontWeight:'normal',
            fontFamily:'华文细黑',
        },
        textStyle:{
            color:'#00fff9',
            fontSize:30,
            fontWeight:'normal',
            fontFamily:'华文细黑',
        },
        x: 'center',
        y: 'center'
    },
    visualMap: [{
        show: false,
        dimension: 1,
        seriesIndex:2,
        min: 0,
        max: visibleCount,
        inRange: {
            colorAlpha: [0,1]
        }
    }],
    series: [
        {
            type: 'pie',
            radius : ['84%', '85%'],
            center: ['50%', '50%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: data
        },
        {
            type: 'pie',
            radius : ['95%', '96%'],
            center: ['50%', '50%'],
            silent: true,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: data
        },
        {
            type: 'pie',
            radius : ['85%', '95%'],
            center: ['50%', '50%'],
            silent: true,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: data
        }
    ]
};
myChart5.setOption(option5);

option6 = {
    grid: {
        left: '0%',
        right: '8%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    xAxis : [
        {
            type : 'category',
            data : [
                {
                    value:"周一\n10/10",
                    textStyle:{
                        color:"#49BDCA"
                    }
                },
                {
                    value:'周二\n10/11',
                    textStyle:{
                        color:"#49BDCA"
                    }
                },
                {
                    value:'周三\n10/12',
                    textStyle:{
                        color:"#49BDCA"
                    }
                },
                {
                    value: '周四\n10/13',
                    textStyle:{
                        color:"#49BDCA"
                    }
                },
                {
                    value:'周五\n10/14',
                    textStyle:{
                        color:"#49BDCA"
                    }
                },
                {
                    value:'周六\n10/15',
                    textStyle:{
                        color:"#49BDCA"
                    }
                },
                {
                    value:'周日\n10/16',
                    textStyle:{
                        color:"#49BDCA"
                    }
                }
            ],
            axisTick: {
                show:false,
            },
            axisLine: {
                show:false,
            }
        }
    ],
    yAxis : [
        {
            show:false,
            axisTick: {
                show:false,
            },
            axisLine: {
                show:false,
            }
        }
    ],
    series : [
        {
            name:'出勤率:',
            type:'bar',
            barWidth: '25%',
            barGap:100,
            data:[70.2, 91.4, 81.9, 100, 100, 79.3, 94.1]
        },

    ],
    label: {
        normal: {
            show: true,
            position: 'top',
            formatter: '{c}%',
            color:"#00fff9",
            fontSize:16
        }
    },
    itemStyle: {
        normal: {

            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00fff9'
            }, {
                offset: 1,
                color: '#252B2C'
            }]),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
        }
    }
};
myChart6.setOption(option6);

option7 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['在线屏幕']
    },
    series: [{
        name: '在线屏幕百分比',
        type: 'pie',
        radius: ['60%', '70%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 208,
            name: '在线',
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 26,
                        color: '#00fff9',
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#178590'
                }
            },
        }, {
            value: 16,
            name: '离线',
            label: {
                normal: {
                    formatter: '\n在线屏幕占比',
                    textStyle: {
                        color: '#178590',
                        fontSize: 16
                    }
                }
            },
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#00fff9'
                }
            },
            hoverAnimation: false
        }]
    }]
};
myChart7.setOption(option7);

option8 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} :{c} "
    },
    title: {
        text: '在线离线屏幕比例',
        textStyle:{
            color:"#00fff9"
        },
        x:'left'
    },
    xAxis: {
        data: [],
        type:'value',
        show:false,
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        show:false,
        axisTick: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        name:'在线',
        data:[208],
        stack: 'income',
        barWidth: 30,
        color:["#00fff9"],
        label: {
            normal: {
                show: true,
                color:"#178590",
                position: 'inside',
                formatter: function(obj) {
                    return obj.value;
                }
            }
        }
    },{
        type:'bar',
        name:'离线',
        data:[16],
        stack: 'income',
        barWidth: 30,
        color:["#1E5F6F"],
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: function(obj) {
                    return obj.value ;
                }
            }
        }
    }]
};
myChart8.setOption(option8);

option9 = {
    title: {
        text: '屏幕在线离线数量',
        textStyle:{
            color:"#00fff9"
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}"
    },
    grid: {
        left: '0%',
        right: '8%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        data: ['在线','离线'],
        axisLine:{
            lineStyle:{
                color:"#178590"
            }
        },
        axisTick:{
                show:false
        }
    },
    yAxis: {
        axisLine:{
            lineStyle:{
                color:"#178590"
            }
        },
        axisTick:{
            show:false
        },
        splitLine: {
            lineStyle: {
                color: '#414d5d',
                type: 'solid'
            }
        }
    },
    series: [{
        name: '数量',
        type: 'bar',
        barWidth: 50,
        data: [208, 16],
        color:["#178590"],
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}',
                color:"#00fff9",
                fontSize:16
            }
        },
    }]
};
myChart9.setOption(option9);

var data_val=[2220, 1682, 2791, 3000, 4090, 3230, 2910],
    xAxis_val=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var data_val1=[0,0,0,0,0,0,0];
var option10 = {
    backgroundColor:'#293042',
    grid:{
        left:10,
        top:'10%',
        bottom:20,
        right:40,
        containLabel:true
    },
    tooltip:{
        show:true,
        backgroundColor:'#384157',
        borderColor:'#384157',
        borderWidth:1,
        formatter:'{b}:{c}',
        extraCssText:'box-shadow: 0 0 5px rgba(0, 0, 0, 1)'
    },
    legend:{
        right:0,
        top:0,
        data:['距离'],
        textStyle:{
            color :'#00fff9'
        }
    },
    title: {
        text: '检测',
        x:'15%',
        top: '1%',
        textStyle:{
            color :'#00fff9'
        }
    },
    xAxis: {
        data: xAxis_val,
        boundaryGap:false,
        axisLine:{
            show:false
        },
        axisLabel: {
            textStyle: {
                color: '#00fff9'
            }
        },
        axisTick:{
            show:false
        }
    },
    yAxis: {
        ayisLine:{
            show:false
        },
        axisLabel: {
            textStyle: {
                color: '#00fff9'
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'#2e3547'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#00fff9'
            }
        }
    },

    series: [
        {
            type: 'bar',
            name:'linedemo',


            tooltip:{
                show:false
            },
            animation:false,
            barWidth:1.4,
            hoverAnimation:false,
            data:data_val,
            itemStyle:{
                normal:{
                    color:'#00fff9',
                    opacity:0.6,
                    label:{
                        show:false
                    }
                }
            }
        },
        {
            type: 'line',
            name:'距离',

            animation:false,
            symbol:'circle',

            hoverAnimation:false,
            data:data_val1,
            itemStyle:{
                normal:{
                    color:'#00fff9',
                    opacity:0,
                }
            },
            lineStyle:{
                normal:{
                    width:1,
                    color:'#00fff9',
                    opacity:1
                }
            }
        },
        {
            type: 'line',
            name:'linedemo',
            smooth:true,
            symbolSize:10,
            animation:false,
            lineWidth:1.2,
            hoverAnimation:false,
            data:data_val,
            symbol:'circle',
            itemStyle:{
                normal:{
                    color:'#00fff9',
                    shadowBlur: 40,
                    label:{
                        show:true,
                        position:'top',
                        textStyle:{
                            color:'#00fff9',

                        }
                    }
                }
            },
            areaStyle:{
                normal:{
                    color:'#00fff9',
                    opacity:0.08
                }
            }

        }
    ]
};
myChart10.setOption(option10);

var data = [];
var data2 = [];


for (var i = 0; i < 10; i++) {
    data.push(
        [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 40)
        ]
    );
    data2.push(
        [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100)
        ]
    );
}

var axisCommon = {
    axisLabel: {
        textStyle: {
            color: '#00fff9'
        }
    },
    axisTick: {
        lineStyle: {
            color: '#00fff9'
        }
    },
    axisLine: {
        lineStyle: {
            color: '#00fff9'
        }
    },
    splitLine: {
        lineStyle: {
            color: '#333',
            type: 'solid'
        }
    }
};

option11 = {
    title:{
        text:"气泡图",
        textStyle:{
            color :'#00fff9'
        }
    },
    color: ['#00fff9', '#178590'],
    xAxis: axisCommon,
    yAxis: axisCommon,
    visualMap: {
        show: false,
        max: 100,
        inRange: {
            symbolSize: [10, 40]
        }
    },
    series: [
        {
            type: 'scatter',
            data: data
        },
        {
            type: 'scatter',
            data: data2
        }
    ],
    animationDelay: function (idx) {
        return idx * 50;
    },
    animationEasing: 'elasticOut'
};

myChart11.clear();
setTimeout(function () {
    var zr = myChart11.getZr();
    myChart11.off('click');
    myChart11.on('click', function (param) {
        var seriesModel = myChart.getModel().getSeriesByIndex(param.seriesIndex);
        var data = seriesModel.getData();
        var coordSys = seriesModel.coordinateSystem;
        var color = data.getItemVisual(param.dataIndex, 'color');
        var symbolSize = data.getItemVisual(param.dataIndex, 'symbolSize');
        var pt1 = coordSys.dataToPoint(param.value);
        var pt2 = coordSys.dataToPoint([param.value[0], 0]);
        var line = new echarts.graphic.Line({
            shape: {
                x1: pt1[0],
                y1: pt1[1],
                x2: pt1[0],
                y2: pt1[1]
            },
            style: {
                stroke: color,
                opacity: 0.6
            },
            z: 100
        });

        line.animate('shape')
            .when(300, {
                y1: pt1[1]
            })
            .when(500, {
                y1: pt1[1] * 0.7 + 0.3 * pt2[1],
                y2: pt2[1]
            })
            .when(1000, {
                y1: pt1[1],
                y2: pt1[1]
            })
            .done(function () {
                zr.remove(line);
            })
            .start(function (t) {
                var y = Math.sin(t * Math.PI) * 0.5;
                if (t >= 0.5) {
                    y = 1 - y;
                }
                return y;
            });

        var circle = new echarts.graphic.Circle({
            shape: {
                cx: pt2[0],
                cy: pt2[1],
                r: 0
            },
            style: {
                fill: color
            },
            z: 100
        });
        var circle2 = new echarts.graphic.Circle({
            shape: {
                cx: pt1[0],
                cy: pt1[1],
                r: symbolSize
            },
            style: {
                fill: color,
                opacity: 0.4
            }
        });
        circle2.animateTo({
            shape: {
                r: symbolSize * 1.5
            },
            style: {
                opacity: 0
            }
        }, 400, function () {
            zr.remove(circle2);
        })

        circle.animate('shape')
            .when(250, {
                r: 6
            })
            .when(500, {
                r: 0
            })
            .delay(500)
            .done(function () {
                zr.remove(circle);
            })
            .start(function (t) {
                var y = Math.sin(t * Math.PI) * 0.5;
                if (t >= 0.5) {
                    y = 1 - y;
                }
                return y;
            });


        zr.add(circle);
        zr.add(circle2);
        zr.add(line);
    });
});
myChart11.setOption(option11);

option12 = {
    title:{
       text:"漏斗图",
       textStyle:{
           color:"#00fff9"
       }
    },
    color: [ '#01F9F3', '#178590', '#49BDCA', '#0BA1FC'],
    series: [{
        name: '',
        type: 'funnel',
        left: '10%',
        width: '80%',
        gap: 10,
        label: {
            normal: {
                position: 'left',
                formatter: '{b}',
                textStyle: {
                    fontSize: 12
                }
            },
            emphasis: {
                position: 'inside',
                formatter: '{b}',
                textStyle: {
                    fontSize: 12
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                opacity: 0.7
            }
        },
        data: [ {
            value: 80,
            reveal: 1265,
            name: '里水'
        }, {
            value: 60,
            reveal: 783,
            name: '西樵'
        }, {
            value: 40,
            reveal: 678,
            name: '九江'
        }, {
            value: 20,
            reveal: 536,
            name: '丹灶',
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            }
        }]
    }, {
        name: '',
        type: 'funnel',
        left: '10%',
        width: '80%',
        gap: 10,
        label: {
            normal: {
                show:false,
                position: 'inside',
                formatter:function(obj){
                    return obj.data.reveal;
                },
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            },
            emphasis: {
                position: 'inside',
                formatter:function(obj){
                    return obj.data.reveal;
                }
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                opacity: 0.5,
                borderColor: '#fff',
                borderWidth: 1
            }
        },
        data: [ {
            value: 80,
            reveal: 1265,
            name: '里水'
        }, {
            value: 60,
            reveal: 783,
            name: '西樵'
        }, {
            value: 40,
            reveal: 678,
            name: '九江'
        }, {
            value: 20,
            reveal: 536,
            name: '丹灶',
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                },
                emphasis: {
                    show: true,
                    length: 30,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            }
        }]
    }]
};
myChart12.setOption(option12);

var geoCoordMap = {
    '安徽省铜陵':[	117.81154,	30.945515],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '贵阳': [106.6992, 26.7682],
    '西安': [109.1162, 34.2004],
    '深圳': [114.5435, 22.5439],
    '济南': [117.1582, 36.8701],
    '海口': [110.3893, 19.8516],
    '沈阳': [123.1238, 42.1216],
    '武汉': [114.3896, 30.6628],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '成都': [103.9526, 30.7617],
    '拉萨': [91.1865, 30.1465],
    '天津': [117.4219, 39.4189],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '哈尔滨': [127.9688, 45.368],
    '北京': [116.4551, 40.2539],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '乌鲁木齐': [87.9236, 43.5883],
    '上海': [121.4648, 31.2891]
};

var data = [{
    name: '长春',
    value: 90
}, {
    name: '长沙',
    value: 10
}, {
    name: '贵阳',
    value: 20
}, {
    name: '西安',
    value: 20
}, {
    name: '深圳',
    value: 20
}, {
    name: '济南',
    value: 50
}, {
    name: '海口',
    value: 58
}, {
    name: '沈阳',
    value: 64
}, {
    name: '武汉',
    value: 68
}, {
    name: '昆明',
    value: 45
}, {
    name: '杭州',
    value: 68
}, {
    name: '成都',
    value: 49
}, {
    name: '拉萨',
    value: 66
}, {
    name: '天津',
    value: 86
}, {
    name: '合肥',
    value: 58
}, {
    name: '呼和浩特',
    value: 59
}, {
    name: '哈尔滨',
    value: 95
}, {
    name: '北京',
    value: 68
}, {
    name: '南京',
    value: 56
}, {
    name: '南宁',
    value: 89
}, {
    name: '南昌',
    value: 48
}, {
    name: '乌鲁木齐',
    value: 49
}, {
    name: '上海',
    value: 78
}];

function formtGCData(geoData, data, srcNam, dest) {
    var tGeoDt = [];
    if (dest) {
        for (var i = 0, len = data.length; i < len; i++) {
            if (srcNam != data[i].name) {
                tGeoDt.push({
                    coords: [geoData[srcNam], geoData[data[i].name]]
                });
            }
        }
    } else {
        for (var i = 0, len = data.length; i < len; i++) {
            if (srcNam != data[i].name) {
                tGeoDt.push({
                    coords: [geoData[data[i].name], geoData[srcNam]]
                });
            }
        }
    }
    return tGeoDt;
}

function formtVData(geoData, data, srcNam) {
    var tGeoDt = [];
    for (var i = 0, len = data.length; i < len; i++) {
        var tNam = data[i].name
        if (srcNam != tNam) {
            tGeoDt.push({
                name: tNam,
                value: geoData[tNam]
            });
        }

    }
    tGeoDt.push({
        name: srcNam,
        value: geoData[srcNam],
        symbolSize: 8,
        itemStyle: {
            normal: {
                color: 'red',
                borderColor: '#000'
            }
        }
    });
    return tGeoDt;
}

//var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
var planePath = 'arrow';

option = {
    backgroundColor: '#404a59',
    title: {
        text: '市场物资到达图',
        left: '5',
        top: '10px',
        itemStyle: {
            normal: {
                borderColor: 'rgba(100,149,237,1)',
                borderWidth: 0.5,
                areaStyle: {
                    color: '#1b1b1b'
                }
            }
        }
    },
    tooltip: {
        trigger: 'item',
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        silent: true,
        itemStyle: {
            normal: {
                areaColor: '#37376e',
                borderColor: '#000'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [{

        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.1,
            color: '#db9982',
            symbol: planePath,
            symbolSize: 8
        },
        lineStyle: {
            normal: {
                color: '#a6c84c',
                width: 1,
                opacity: 0.4,
                curveness: 0.2
            }
        },
      //  data: formtGCData(geoCoordMap, data, '贵阳', true)
    }, {

        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 6,
            trailLength: 0.1,
            color: 'maroon',
            symbol: planePath,
            symbolSize: 8
        },
        lineStyle: {
            normal: {
                color: '#a6c84c',
                width: 1,
                opacity: 0.4,
                curveness: 0.2
            }
        },
        data: formtGCData(geoCoordMap, data, '贵阳', false)
    }, {

        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            period: 4,
            scale: 2.5,
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: 5,
        itemStyle: {
            normal: {
                color: '#0D6695',
                borderColor: 'gold'
            }
        },

        data: formtVData(geoCoordMap, data, '贵阳')
    }]
};
myChart12.setOption(option12);

(function () {
    require.config({
        paths: {
            echarts: 'js/js'
        },
        packages: [
            {
                name: 'BMap',
                location: 'js/src',
                main: 'main'
            }
        ]
    });

    require(
    [
        'echarts',
        'BMap',
        'echarts/chart/map'
    ],
    function (echarts, BMapExtension) {

        // 初始化地图
        var BMapExt = new BMapExtension($('#main13')[0], BMap, echarts,{
            enableMapClick: false
        });
        var map = BMapExt.getMap();
        var container = BMapExt.getEchartsContainer();

        var startPoint = {
            x: 104.114129,
            y: 37.550339
        };

        var point = new BMap.Point(startPoint.x, startPoint.y);
        map.centerAndZoom(point, 5);
        map.enableScrollWheelZoom(true);
        // 地图自定义样式
        map.setMapStyle({
            styleJson: [
                  {
                       "featureType": "water",
                       "elementType": "all",
                       "stylers": {
                            "color": "#044161"
                       }
                  },
                  {
                       "featureType": "land",
                       "elementType": "all",
                       "stylers": {
                            "color": "#004981"
                       }
                  },
                  {
                       "featureType": "boundary",
                       "elementType": "geometry",
                       "stylers": {
                            "color": "#064f85"
                       }
                  },
                  {
                       "featureType": "railway",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "highway",
                       "elementType": "geometry",
                       "stylers": {
                            "color": "#004981"
                       }
                  },
                  {
                       "featureType": "highway",
                       "elementType": "geometry.fill",
                       "stylers": {
                            "color": "#005b96",
                            "lightness": 1
                       }
                  },
                  {
                       "featureType": "highway",
                       "elementType": "labels",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "arterial",
                       "elementType": "geometry",
                       "stylers": {
                            "color": "#004981"
                       }
                  },
                  {
                       "featureType": "arterial",
                       "elementType": "geometry.fill",
                       "stylers": {
                            "color": "#00508b"
                       }
                  },
                  {
                       "featureType": "poi",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "green",
                       "elementType": "all",
                       "stylers": {
                            "color": "#056197",
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "subway",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "manmade",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "local",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "arterial",
                       "elementType": "labels",
                       "stylers": {
                            "visibility": "off"
                       }
                  },
                  {
                       "featureType": "boundary",
                       "elementType": "geometry.fill",
                       "stylers": {
                            "color": "#029fd4"
                       }
                  },
                  {
                       "featureType": "building",
                       "elementType": "all",
                       "stylers": {
                            "color": "#1a5787"
                       }
                  },
                  {
                       "featureType": "label",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "off"
                       }
                  }
            ]
        });

        var option = {
            color: ['gold','aqua','lime'],
            title : {
                text: '企业概况',
                // subtext:'数据纯属虚构',
                y:30,
                x:50,
                textStyle : {
                    color: '#00fff9',
                    fontSize:40
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: function (v) {
                    return v[1].replace(':', ' > ');
                }
            },
            legend: {
                orient: 'horizontal',
                y:50,
                x:'center',
                data:['北京', '上海', '广州'],
                selectedMode: 'single',
                selected:{
                    '上海' : false,
                    '广州' : false
                },
                textStyle : {
                    color: '#fff'
                }
            },
            toolbox: {
                show : true,
                orient : 'vertical',
                x: 'right',
                y: 'center',
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            dataRange: {
                min : 0,
                max : 100,
                range: {
                    start: 10,
                    end: 90
                },
                x: 'right',
                calculable : true,
                color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
                textStyle:{
                    color:'#fff'
                }
            },
            series : [
                {
                    name:'北京',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    geoCoord: {
                        '上海': [121.4648,31.2891],
                        '东莞': [113.8953,22.901],
                        '东营': [118.7073,37.5513],
                        '中山': [113.4229,22.478],
                        '临汾': [111.4783,36.1615],
                        '临沂': [118.3118,35.2936],
                        '丹东': [124.541,40.4242],
                        '丽水': [119.5642,28.1854],
                        '乌鲁木齐': [87.9236,43.5883],
                        '佛山': [112.8955,23.1097],
                        '保定': [115.0488,39.0948],
                        '兰州': [103.5901,36.3043],
                        '包头': [110.3467,41.4899],
                        '北京': [116.4551,40.2539],
                        '北海': [109.314,21.6211],
                        '南京': [118.8062,31.9208],
                        '南宁': [108.479,23.1152],
                        '南昌': [116.0046,28.6633],
                        '南通': [121.1023,32.1625],
                        '厦门': [118.1689,24.6478],
                        '台州': [121.1353,28.6688],
                        '合肥': [117.29,32.0581],
                        '呼和浩特': [111.4124,40.4901],
                        '咸阳': [108.4131,34.8706],
                        '哈尔滨': [127.9688,45.368],
                        '唐山': [118.4766,39.6826],
                        '嘉兴': [120.9155,30.6354],
                        '大同': [113.7854,39.8035],
                        '大连': [122.2229,39.4409],
                        '天津': [117.4219,39.4189],
                        '太原': [112.3352,37.9413],
                        '威海': [121.9482,37.1393],
                        '宁波': [121.5967,29.6466],
                        '宝鸡': [107.1826,34.3433],
                        '宿迁': [118.5535,33.7775],
                        '常州': [119.4543,31.5582],
                        '广州': [113.5107,23.2196],
                        '廊坊': [116.521,39.0509],
                        '延安': [109.1052,36.4252],
                        '张家口': [115.1477,40.8527],
                        '徐州': [117.5208,34.3268],
                        '德州': [116.6858,37.2107],
                        '惠州': [114.6204,23.1647],
                        '成都': [103.9526,30.7617],
                        '扬州': [119.4653,32.8162],
                        '承德': [117.5757,41.4075],
                        '拉萨': [91.1865,30.1465],
                        '无锡': [120.3442,31.5527],
                        '日照': [119.2786,35.5023],
                        '昆明': [102.9199,25.4663],
                        '杭州': [119.5313,29.8773],
                        '枣庄': [117.323,34.8926],
                        '柳州': [109.3799,24.9774],
                        '株洲': [113.5327,27.0319],
                        '武汉': [114.3896,30.6628],
                        '汕头': [117.1692,23.3405],
                        '江门': [112.6318,22.1484],
                        '沈阳': [123.1238,42.1216],
                        '沧州': [116.8286,38.2104],
                        '河源': [114.917,23.9722],
                        '泉州': [118.3228,25.1147],
                        '泰安': [117.0264,36.0516],
                        '泰州': [120.0586,32.5525],
                        '济南': [117.1582,36.8701],
                        '济宁': [116.8286,35.3375],
                        '海口': [110.3893,19.8516],
                        '淄博': [118.0371,36.6064],
                        '淮安': [118.927,33.4039],
                        '深圳': [114.5435,22.5439],
                        '清远': [112.9175,24.3292],
                        '温州': [120.498,27.8119],
                        '渭南': [109.7864,35.0299],
                        '湖州': [119.8608,30.7782],
                        '湘潭': [112.5439,27.7075],
                        '滨州': [117.8174,37.4963],
                        '潍坊': [119.0918,36.524],
                        '烟台': [120.7397,37.5128],
                        '玉溪': [101.9312,23.8898],
                        '珠海': [113.7305,22.1155],
                        '盐城': [120.2234,33.5577],
                        '盘锦': [121.9482,41.0449],
                        '石家庄': [114.4995,38.1006],
                        '福州': [119.4543,25.9222],
                        '秦皇岛': [119.2126,40.0232],
                        '绍兴': [120.564,29.7565],
                        '聊城': [115.9167,36.4032],
                        '肇庆': [112.1265,23.5822],
                        '舟山': [122.2559,30.2234],
                        '苏州': [120.6519,31.3989],
                        '莱芜': [117.6526,36.2714],
                        '菏泽': [115.6201,35.2057],
                        '营口': [122.4316,40.4297],
                        '葫芦岛': [120.1575,40.578],
                        '衡水': [115.8838,37.7161],
                        '衢州': [118.6853,28.8666],
                        '西宁': [101.4038,36.8207],
                        '西安': [109.1162,34.2004],
                        '贵阳': [106.6992,26.7682],
                        '连云港': [119.1248,34.552],
                        '邢台': [114.8071,37.2821],
                        '邯郸': [114.4775,36.535],
                        '郑州': [113.4668,34.6234],
                        '鄂尔多斯': [108.9734,39.2487],
                        '重庆': [107.7539,30.1904],
                        '金华': [120.0037,29.1028],
                        '铜川': [109.0393,35.1947],
                        '银川': [106.3586,38.1775],
                        '镇江': [119.4763,31.9702],
                        '长春': [125.8154,44.2584],
                        '长沙': [113.0823,28.2568],
                        '长治': [112.8625,36.4746],
                        '阳泉': [113.4778,38.0951],
                        '青岛': [120.4651,36.3373],
                        '韶关': [113.7964,24.7028]
                    },

                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'北京'}, {name:'上海',value:95}],
                            [{name:'北京'}, {name:'广州',value:90}],
                            [{name:'北京'}, {name:'大连',value:80}],
                            [{name:'北京'}, {name:'南宁',value:70}],
                            [{name:'北京'}, {name:'南昌',value:60}],
                            [{name:'北京'}, {name:'拉萨',value:50}],
                            [{name:'北京'}, {name:'长春',value:40}],
                            [{name:'北京'}, {name:'包头',value:30}],
                            [{name:'北京'}, {name:'重庆',value:20}],
                            [{name:'北京'}, {name:'常州',value:10}]
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 10 + v/10
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                            {name:'上海',value:95},
                            {name:'广州',value:90},
                            {name:'大连',value:80},
                            {name:'南宁',value:70},
                            {name:'南昌',value:60},
                            {name:'拉萨',value:50},
                            {name:'长春',value:40},
                            {name:'包头',value:30},
                            {name:'重庆',value:20},
                            {name:'常州',value:10}
                        ]
                    }

                },
                {
                    name:'上海',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'上海'},{name:'包头',value:95}],
                            [{name:'上海'},{name:'昆明',value:90}],
                            [{name:'上海'},{name:'广州',value:80}],
                            [{name:'上海'},{name:'郑州',value:70}],
                            [{name:'上海'},{name:'长春',value:60}],
                            [{name:'上海'},{name:'重庆',value:50}],
                            [{name:'上海'},{name:'长沙',value:40}],
                            [{name:'上海'},{name:'北京',value:30}],
                            [{name:'上海'},{name:'丹东',value:20}],
                            [{name:'上海'},{name:'大连',value:10}]
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 10 + v/10
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                            {name:'包头',value:95},
                            {name:'昆明',value:90},
                            {name:'广州',value:80},
                            {name:'郑州',value:70},
                            {name:'长春',value:60},
                            {name:'重庆',value:50},
                            {name:'长沙',value:40},
                            {name:'北京',value:30},
                            {name:'丹东',value:20},
                            {name:'大连',value:10}
                        ]
                    }
                },
                {
                    name:'广州',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        effect : {
                            show: true,
                            scaleSize: 1,
                            period: 30,
                            color: '#fff',
                            shadowBlur: 10
                        },
                        itemStyle : {
                            normal: {
                                borderWidth:1,
                                lineStyle: {
                                    type: 'solid',
                                    shadowBlur: 10
                                }
                            }
                        },
                        data : [
                            [{name:'广州'},{name:'福州',value:95}],
                            [{name:'广州'},{name:'太原',value:90}],
                            [{name:'广州'},{name:'长春',value:80}],
                            [{name:'广州'},{name:'重庆',value:70}],
                            [{name:'广州'},{name:'西安',value:60}],
                            [{name:'广州'},{name:'成都',value:50}],
                            [{name:'广州'},{name:'常州',value:40}],
                            [{name:'广州'},{name:'北京',value:30}],
                            [{name:'广州'},{name:'北海',value:20}],
                            [{name:'广州'},{name:'海口',value:10}]
                        ]
                    },
                    markPoint : {
                        symbol:'emptyCircle',
                        symbolSize : function (v){
                            return 10 + v/10
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                            {name:'福州',value:95},
                            {name:'太原',value:90},
                            {name:'长春',value:80},
                            {name:'重庆',value:70},
                            {name:'西安',value:60},
                            {name:'成都',value:50},
                            {name:'常州',value:40},
                            {name:'北京',value:30},
                            {name:'北海',value:20},
                            {name:'海口',value:10}
                        ]
                    }
                },
                {
                    name:'全国',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markLine : {
                        smooth:true,
                        symbol: ['none', 'circle'],
                        symbolSize : 1,
                        itemStyle : {
                            normal: {
                                color:'#fff',
                                borderWidth:1,
                                borderColor:'rgba(30,144,255,0.5)'
                            }
                        },
                        data : [
                            [{name:'北京'},{name:'包头'}],
                            [{name:'北京'},{name:'北海'}],
                            [{name:'北京'},{name:'广州'}],
                            [{name:'北京'},{name:'郑州'}],
                            [{name:'北京'},{name:'长春'}],
                            [{name:'北京'},{name:'长治'}],
                            [{name:'北京'},{name:'重庆'}],
                            [{name:'北京'},{name:'长沙'}],
                            [{name:'北京'},{name:'成都'}],
                            [{name:'北京'},{name:'常州'}],
                            [{name:'北京'},{name:'丹东'}],
                            [{name:'北京'},{name:'大连'}],
                            [{name:'北京'},{name:'东营'}],
                            [{name:'北京'},{name:'延安'}],
                            [{name:'北京'},{name:'福州'}],
                            [{name:'北京'},{name:'海口'}],
                            [{name:'北京'},{name:'呼和浩特'}],
                            [{name:'北京'},{name:'合肥'}],
                            [{name:'北京'},{name:'杭州'}],
                            [{name:'北京'},{name:'哈尔滨'}],
                            [{name:'北京'},{name:'舟山'}],
                            [{name:'北京'},{name:'银川'}],
                            [{name:'北京'},{name:'衢州'}],
                            [{name:'北京'},{name:'南昌'}],
                            [{name:'北京'},{name:'昆明'}],
                            [{name:'北京'},{name:'贵阳'}],
                            [{name:'北京'},{name:'兰州'}],
                            [{name:'北京'},{name:'拉萨'}],
                            [{name:'北京'},{name:'连云港'}],
                            [{name:'北京'},{name:'临沂'}],
                            [{name:'北京'},{name:'柳州'}],
                            [{name:'北京'},{name:'宁波'}],
                            [{name:'北京'},{name:'南京'}],
                            [{name:'北京'},{name:'南宁'}],
                            [{name:'北京'},{name:'南通'}],
                            [{name:'北京'},{name:'上海'}],
                            [{name:'北京'},{name:'沈阳'}],
                            [{name:'北京'},{name:'西安'}],
                            [{name:'北京'},{name:'汕头'}],
                            [{name:'北京'},{name:'深圳'}],
                            [{name:'北京'},{name:'青岛'}],
                            [{name:'北京'},{name:'济南'}],
                            [{name:'北京'},{name:'太原'}],
                            [{name:'北京'},{name:'乌鲁木齐'}],
                            [{name:'北京'},{name:'潍坊'}],
                            [{name:'北京'},{name:'威海'}],
                            [{name:'北京'},{name:'温州'}],
                            [{name:'北京'},{name:'武汉'}],
                            [{name:'北京'},{name:'无锡'}],
                            [{name:'北京'},{name:'厦门'}],
                            [{name:'北京'},{name:'西宁'}],
                            [{name:'北京'},{name:'徐州'}],
                            [{name:'北京'},{name:'烟台'}],
                            [{name:'北京'},{name:'盐城'}],
                            [{name:'北京'},{name:'珠海'}],
                            [{name:'上海'},{name:'包头'}],
                            [{name:'上海'},{name:'北海'}],
                            [{name:'上海'},{name:'广州'}],
                            [{name:'上海'},{name:'郑州'}],
                            [{name:'上海'},{name:'长春'}],
                            [{name:'上海'},{name:'重庆'}],
                            [{name:'上海'},{name:'长沙'}],
                            [{name:'上海'},{name:'成都'}],
                            [{name:'上海'},{name:'丹东'}],
                            [{name:'上海'},{name:'大连'}],
                            [{name:'上海'},{name:'福州'}],
                            [{name:'上海'},{name:'海口'}],
                            [{name:'上海'},{name:'呼和浩特'}],
                            [{name:'上海'},{name:'合肥'}],
                            [{name:'上海'},{name:'哈尔滨'}],
                            [{name:'上海'},{name:'舟山'}],
                            [{name:'上海'},{name:'银川'}],
                            [{name:'上海'},{name:'南昌'}],
                            [{name:'上海'},{name:'昆明'}],
                            [{name:'上海'},{name:'贵阳'}],
                            [{name:'上海'},{name:'兰州'}],
                            [{name:'上海'},{name:'拉萨'}],
                            [{name:'上海'},{name:'连云港'}],
                            [{name:'上海'},{name:'临沂'}],
                            [{name:'上海'},{name:'柳州'}],
                            [{name:'上海'},{name:'宁波'}],
                            [{name:'上海'},{name:'南宁'}],
                            [{name:'上海'},{name:'北京'}],
                            [{name:'上海'},{name:'沈阳'}],
                            [{name:'上海'},{name:'秦皇岛'}],
                            [{name:'上海'},{name:'西安'}],
                            [{name:'上海'},{name:'石家庄'}],
                            [{name:'上海'},{name:'汕头'}],
                            [{name:'上海'},{name:'深圳'}],
                            [{name:'上海'},{name:'青岛'}],
                            [{name:'上海'},{name:'济南'}],
                            [{name:'上海'},{name:'天津'}],
                            [{name:'上海'},{name:'太原'}],
                            [{name:'上海'},{name:'乌鲁木齐'}],
                            [{name:'上海'},{name:'潍坊'}],
                            [{name:'上海'},{name:'威海'}],
                            [{name:'上海'},{name:'温州'}],
                            [{name:'上海'},{name:'武汉'}],
                            [{name:'上海'},{name:'厦门'}],
                            [{name:'上海'},{name:'西宁'}],
                            [{name:'上海'},{name:'徐州'}],
                            [{name:'上海'},{name:'烟台'}],
                            [{name:'上海'},{name:'珠海'}],
                            [{name:'广州'},{name:'北海'}],
                            [{name:'广州'},{name:'郑州'}],
                            [{name:'广州'},{name:'长春'}],
                            [{name:'广州'},{name:'重庆'}],
                            [{name:'广州'},{name:'长沙'}],
                            [{name:'广州'},{name:'成都'}],
                            [{name:'广州'},{name:'常州'}],
                            [{name:'广州'},{name:'大连'}],
                            [{name:'广州'},{name:'福州'}],
                            [{name:'广州'},{name:'海口'}],
                            [{name:'广州'},{name:'呼和浩特'}],
                            [{name:'广州'},{name:'合肥'}],
                            [{name:'广州'},{name:'杭州'}],
                            [{name:'广州'},{name:'哈尔滨'}],
                            [{name:'广州'},{name:'舟山'}],
                            [{name:'广州'},{name:'银川'}],
                            [{name:'广州'},{name:'南昌'}],
                            [{name:'广州'},{name:'昆明'}],
                            [{name:'广州'},{name:'贵阳'}],
                            [{name:'广州'},{name:'兰州'}],
                            [{name:'广州'},{name:'拉萨'}],
                            [{name:'广州'},{name:'连云港'}],
                            [{name:'广州'},{name:'临沂'}],
                            [{name:'广州'},{name:'柳州'}],
                            [{name:'广州'},{name:'宁波'}],
                            [{name:'广州'},{name:'南京'}],
                            [{name:'广州'},{name:'南宁'}],
                            [{name:'广州'},{name:'南通'}],
                            [{name:'广州'},{name:'北京'}],
                            [{name:'广州'},{name:'上海'}],
                            [{name:'广州'},{name:'沈阳'}],
                            [{name:'广州'},{name:'西安'}],
                            [{name:'广州'},{name:'石家庄'}],
                            [{name:'广州'},{name:'汕头'}],
                            [{name:'广州'},{name:'青岛'}],
                            [{name:'广州'},{name:'济南'}],
                            [{name:'广州'},{name:'天津'}],
                            [{name:'广州'},{name:'太原'}],
                            [{name:'广州'},{name:'乌鲁木齐'}],
                            [{name:'广州'},{name:'温州'}],
                            [{name:'广州'},{name:'武汉'}],
                            [{name:'广州'},{name:'无锡'}],
                            [{name:'广州'},{name:'厦门'}],
                            [{name:'广州'},{name:'西宁'}],
                            [{name:'广州'},{name:'徐州'}],
                            [{name:'广州'},{name:'烟台'}],
                            [{name:'广州'},{name:'盐城'}]
                        ]
                    }
                }
            ]
        };

        var myChart = BMapExt.initECharts(container);
        BMapExt.setOption(option);
    }
);
})();
option14 = {
    title : [{
        text: '店铺报修统计数据',
        textStyle:{
            color:"#00fff9",
            fontSize:25
        }
    },{
        text:'100',
        x:'center',
        top: '46%',
        textStyle: {
            color: '#66FFFB',
            fontWeight: 'normal',
            fontSize: 14
        }
    },{
        text:'报修总数',
        x:'center',
        top: '50%',
        textStyle: {
            color: '#66FFFB',
            fontWeight: 'normal',
            fontSize: 18
        }
    }],
    calculable : true,
    series : [
        {
            name:'报修统计',
            type:'pie',
            radius : [50, 100],
            center : ['50%', '50%'],
            roseType : 'radius',
            data:[
                {value:25, name:'正在维修中 25',label:{normal:{fontSize:20}}},
                {value:20, name:'未处理维修 20',label:{normal:{fontSize:20}}},
                {value:5, name:'已处理还未修 5',label:{normal:{fontSize:20}}},
                {value:50, name:'已完成维修 50',label:{normal:{fontSize:20}}}
            ],
            label:{
                normal:{
                    formatter:"{b}",
                    color:"#00fff9"
                },
            },
            labelLine:{
                normal:{
                    lineStyle:{
                        color:"#fff"
                    }
                }
            },
            color:[
                "#49BDCA",
                "#1E5F6F",
                "#00fff9",
                "#fff",
            ]
        }
    ]
};
myChart14.setOption(option14);

option15 = {
    tooltip: {
        formatter: "{a}：{c}"
    },
     title: {
                text:"维修效率：平均维修时速18小时/次",
                textStyle: { 
                    fontSize: 26,
                    color: '#00fff9',
                },
                 x:"center",
                 y:"bottom"
            },
    series: [{
            name: '维修速度',
            type: 'gauge',
            min: 0,
            max: 24,
            startAngle: 180,
            endAngle: 0,
            splitNumber: 8,
            radius: '50%',
            axisLine: { 
                lineStyle: { 
                    color:[[1,'cyan']],
                    width: 3,
                }
            },
            axisLabel: {
                show:true,
                distance: -60,
                textStyle: {
                	fontSize:20,
                    color: '#00fff9',
                }
            },
            axisTick: { 
                show:false,
            },
            splitLine: { 
                show:false,
            },
            pointer: { 
                width: 3,
            },
            detail: {
                offsetCenter: [0, '50%'],
                textStyle: { 
                    color: '#fff'
                }
            },
            data: [{
                value: 18,
            }]
        },



    ]
};
myChart15.setOption(option15);

option16 = {
    title: {
        text: '光照设备情况柱形图',
        textStyle:{
            color:"#00fff9",
            fontSize:30,
            fontWeight:"normal"
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}"
    },
    grid: {
        left: '0%',
        right: '8%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        data: ['在线灯具','不在线灯具',"设备异常"],
        axisLine:{
            lineStyle:{
                color:"#178590"
            }
        },
        axisTick:{
                show:false
        }
    },
    yAxis: {
        axisLine:{
            lineStyle:{
                color:"#178590"
            }
        },
        axisTick:{
            show:false
        },
        splitLine: {
            lineStyle: {
                color: '#414d5d',
                type: 'solid'
            }
        }
    },
    series: [{
        name: '数量',
        type: 'bar',
        barWidth: 50,
        data: [200,10,5],
        color:["#178590"],
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}',
                color:"#00fff9",
                fontSize:16
            }
        },
    }]
};
myChart16.setOption(option16);

option17 = {
    title : {
        text: '光照设备情况饼图',
        textStyle:{
            color:"#00fff9",
            fontSize:30,
            fontWeight:"normal"
        },
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {
                    value:200,
                    name:'在线灯具'
                },
                {
                    value:10,
                    name:'不在线灯具'
                },
                {
                    value:5,
                    name:'设备异常'
                }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label:{
                normal:{
                    color:"#49BDCA",
                    formatter:"{b}:{d}%",
                    fontSize:20,
                }
            },
            color:[
                "#1E5F6F",
                "#49BDCA",
                "#00fff9"
            ]
        }
    ]
};
myChart17.setOption(option17);

var noise = getNoiseHelper();
    var xData = [];
    var yData = [];
    noise.seed(Math.random());
    function generateData(theta, min, max) {
        var data = [];
        for (var i = 0; i <= 200; i++) {
            for (var j = 0; j <= 100; j++) {
                // var x = (max - min) * i / 200 + min;
                // var y = (max - min) * j / 100 + min;
                data.push([i, j, noise.perlin2(i / 40, j / 20) + 0.5]);
                // data.push([i, j, normalDist(theta, x) * normalDist(theta, y)]);
            }
            xData.push(i);
        }
        for (var j = 0; j < 100; j++) {
            yData.push(j);
        }
        return data;
    }
    var data = generateData(2, -5, 5);

    var option18 = {
        tooltip: {},
        xAxis: {
            type: 'category',
            data: xData,
            axisLabel:{
                color:'#fff',
                fontSize:16
            }
        },
        yAxis: {
            type: 'category',
            data: yData,
            axisLabel:{
                color:'#fff',
                fontSize:16
            }
        },
        visualMap: {
            min: 0,
            max: 1,
            calculable: true,
            realtime: false,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            textStyle:{
                color:'#fff'
            }
        },
        series: [{
            name: 'Gaussian',
            type: 'heatmap',
            data: data,
            itemStyle: {
                emphasis: {
                    borderColor: '#333',
                    borderWidth: 1
                }
            },
            progressive: 1000,
            animation: false
        }]
    };



///////////////////////////////////////////////////////////////////////////
// Simplex and perlin noise helper from https://github.com/josephg/noisejs
///////////////////////////////////////////////////////////////////////////
    function getNoiseHelper(global) {

        var module = {};

        function Grad(x, y, z) {
            this.x = x; this.y = y; this.z = z;
        }

        Grad.prototype.dot2 = function(x, y) {
            return this.x*x + this.y*y;
        };

        Grad.prototype.dot3 = function(x, y, z) {
            return this.x*x + this.y*y + this.z*z;
        };

        var grad3 = [new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
            new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
            new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)];

        var p = [151,160,137,91,90,15,
            131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,
            190, 6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,
            88,237,149,56,87,174,20,125,136,171,168, 68,175,74,165,71,134,139,48,27,166,
            77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,
            102,143,54, 65,25,63,161, 1,216,80,73,209,76,132,187,208, 89,18,169,200,196,
            135,130,116,188,159,86,164,100,109,198,173,186, 3,64,52,217,226,250,124,123,
            5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,
            223,183,170,213,119,248,152, 2,44,154,163, 70,221,153,101,155,167, 43,172,9,
            129,22,39,253, 19,98,108,110,79,113,224,232,178,185, 112,104,218,246,97,228,
            251,34,242,193,238,210,144,12,191,179,162,241, 81,51,145,235,249,14,239,107,
            49,192,214, 31,181,199,106,157,184, 84,204,176,115,121,50,45,127, 4,150,254,
            138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];
        // To remove the need for index wrapping, double the permutation table length
        var perm = new Array(512);
        var gradP = new Array(512);

        // This isn't a very good seeding function, but it works ok. It supports 2^16
        // different seed values. Write something better if you need more seeds.
        module.seed = function(seed) {
            if(seed > 0 && seed < 1) {
                // Scale the seed out
                seed *= 65536;
            }

            seed = Math.floor(seed);
            if(seed < 256) {
                seed |= seed << 8;
            }

            for(var i = 0; i < 256; i++) {
                var v;
                if (i & 1) {
                    v = p[i] ^ (seed & 255);
                } else {
                    v = p[i] ^ ((seed>>8) & 255);
                }

                perm[i] = perm[i + 256] = v;
                gradP[i] = gradP[i + 256] = grad3[v % 12];
            }
        };

        module.seed(0);

        /*
        for(var i=0; i<256; i++) {
          perm[i] = perm[i + 256] = p[i];
          gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
        }*/

        // Skewing and unskewing factors for 2, 3, and 4 dimensions
        var F2 = 0.5*(Math.sqrt(3)-1);
        var G2 = (3-Math.sqrt(3))/6;

        var F3 = 1/3;
        var G3 = 1/6;

        // 2D simplex noise
        module.simplex2 = function(xin, yin) {
            var n0, n1, n2; // Noise contributions from the three corners
            // Skew the input space to determine which simplex cell we're in
            var s = (xin+yin)*F2; // Hairy factor for 2D
            var i = Math.floor(xin+s);
            var j = Math.floor(yin+s);
            var t = (i+j)*G2;
            var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
            var y0 = yin-j+t;
            // For the 2D case, the simplex shape is an equilateral triangle.
            // Determine which simplex we are in.
            var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
            if(x0>y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
                i1=1; j1=0;
            } else {    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
                i1=0; j1=1;
            }
            // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
            // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
            // c = (3-sqrt(3))/6
            var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
            var y1 = y0 - j1 + G2;
            var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
            var y2 = y0 - 1 + 2 * G2;
            // Work out the hashed gradient indices of the three simplex corners
            i &= 255;
            j &= 255;
            var gi0 = gradP[i+perm[j]];
            var gi1 = gradP[i+i1+perm[j+j1]];
            var gi2 = gradP[i+1+perm[j+1]];
            // Calculate the contribution from the three corners
            var t0 = 0.5 - x0*x0-y0*y0;
            if(t0<0) {
                n0 = 0;
            } else {
                t0 *= t0;
                n0 = t0 * t0 * gi0.dot2(x0, y0);  // (x,y) of grad3 used for 2D gradient
            }
            var t1 = 0.5 - x1*x1-y1*y1;
            if(t1<0) {
                n1 = 0;
            } else {
                t1 *= t1;
                n1 = t1 * t1 * gi1.dot2(x1, y1);
            }
            var t2 = 0.5 - x2*x2-y2*y2;
            if(t2<0) {
                n2 = 0;
            } else {
                t2 *= t2;
                n2 = t2 * t2 * gi2.dot2(x2, y2);
            }
            // Add contributions from each corner to get the final noise value.
            // The result is scaled to return values in the interval [-1,1].
            return 70 * (n0 + n1 + n2);
        };

        // 3D simplex noise
        module.simplex3 = function(xin, yin, zin) {
            var n0, n1, n2, n3; // Noise contributions from the four corners

            // Skew the input space to determine which simplex cell we're in
            var s = (xin+yin+zin)*F3; // Hairy factor for 2D
            var i = Math.floor(xin+s);
            var j = Math.floor(yin+s);
            var k = Math.floor(zin+s);

            var t = (i+j+k)*G3;
            var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
            var y0 = yin-j+t;
            var z0 = zin-k+t;

            // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
            // Determine which simplex we are in.
            var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
            var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
            if(x0 >= y0) {
                if(y0 >= z0)      { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; }
                else if(x0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; }
                else              { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; }
            } else {
                if(y0 < z0)      { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; }
                else if(x0 < z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; }
                else             { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; }
            }
            // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
            // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
            // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
            // c = 1/6.
            var x1 = x0 - i1 + G3; // Offsets for second corner
            var y1 = y0 - j1 + G3;
            var z1 = z0 - k1 + G3;

            var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
            var y2 = y0 - j2 + 2 * G3;
            var z2 = z0 - k2 + 2 * G3;

            var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
            var y3 = y0 - 1 + 3 * G3;
            var z3 = z0 - 1 + 3 * G3;

            // Work out the hashed gradient indices of the four simplex corners
            i &= 255;
            j &= 255;
            k &= 255;
            var gi0 = gradP[i+   perm[j+   perm[k   ]]];
            var gi1 = gradP[i+i1+perm[j+j1+perm[k+k1]]];
            var gi2 = gradP[i+i2+perm[j+j2+perm[k+k2]]];
            var gi3 = gradP[i+ 1+perm[j+ 1+perm[k+ 1]]];

            // Calculate the contribution from the four corners
            var t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
            if(t0<0) {
                n0 = 0;
            } else {
                t0 *= t0;
                n0 = t0 * t0 * gi0.dot3(x0, y0, z0);  // (x,y) of grad3 used for 2D gradient
            }
            var t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
            if(t1<0) {
                n1 = 0;
            } else {
                t1 *= t1;
                n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
            }
            var t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
            if(t2<0) {
                n2 = 0;
            } else {
                t2 *= t2;
                n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
            }
            var t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
            if(t3<0) {
                n3 = 0;
            } else {
                t3 *= t3;
                n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
            }
            // Add contributions from each corner to get the final noise value.
            // The result is scaled to return values in the interval [-1,1].
            return 32 * (n0 + n1 + n2 + n3);

        };

        // ##### Perlin noise stuff

        function fade(t) {
            return t*t*t*(t*(t*6-15)+10);
        }

        function lerp(a, b, t) {
            return (1-t)*a + t*b;
        }

        // 2D Perlin Noise
        module.perlin2 = function(x, y) {
            // Find unit grid cell containing point
            var X = Math.floor(x), Y = Math.floor(y);
            // Get relative xy coordinates of point within that cell
            x = x - X; y = y - Y;
            // Wrap the integer cells at 255 (smaller integer period can be introduced here)
            X = X & 255; Y = Y & 255;

            // Calculate noise contributions from each of the four corners
            var n00 = gradP[X+perm[Y]].dot2(x, y);
            var n01 = gradP[X+perm[Y+1]].dot2(x, y-1);
            var n10 = gradP[X+1+perm[Y]].dot2(x-1, y);
            var n11 = gradP[X+1+perm[Y+1]].dot2(x-1, y-1);

            // Compute the fade curve value for x
            var u = fade(x);

            // Interpolate the four results
            return lerp(
                lerp(n00, n10, u),
                lerp(n01, n11, u),
                fade(y));
        };

        // 3D Perlin Noise
        module.perlin3 = function(x, y, z) {
            // Find unit grid cell containing point
            var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
            // Get relative xyz coordinates of point within that cell
            x = x - X; y = y - Y; z = z - Z;
            // Wrap the integer cells at 255 (smaller integer period can be introduced here)
            X = X & 255; Y = Y & 255; Z = Z & 255;

            // Calculate noise contributions from each of the eight corners
            var n000 = gradP[X+  perm[Y+  perm[Z  ]]].dot3(x,   y,     z);
            var n001 = gradP[X+  perm[Y+  perm[Z+1]]].dot3(x,   y,   z-1);
            var n010 = gradP[X+  perm[Y+1+perm[Z  ]]].dot3(x,   y-1,   z);
            var n011 = gradP[X+  perm[Y+1+perm[Z+1]]].dot3(x,   y-1, z-1);
            var n100 = gradP[X+1+perm[Y+  perm[Z  ]]].dot3(x-1,   y,   z);
            var n101 = gradP[X+1+perm[Y+  perm[Z+1]]].dot3(x-1,   y, z-1);
            var n110 = gradP[X+1+perm[Y+1+perm[Z  ]]].dot3(x-1, y-1,   z);
            var n111 = gradP[X+1+perm[Y+1+perm[Z+1]]].dot3(x-1, y-1, z-1);

            // Compute the fade curve value for x, y, z
            var u = fade(x);
            var v = fade(y);
            var w = fade(z);

            // Interpolate
            return lerp(
                lerp(
                    lerp(n000, n100, u),
                    lerp(n001, n101, u), w),
                lerp(
                    lerp(n010, n110, u),
                    lerp(n011, n111, u), w),
                v);
        };


        return module;
    }
myChart18.setOption(option18);

placeHolderStyle = {
    normal: {
        label: {
            show: false,
            position: "center"
        },
        labelLine: {
            show: false
        },
        color: "#dedede",
        borderColor: "#dedede",
        borderWidth: 0
    },
    emphasis: {
        color: "#dedede",
        borderColor: "#dedede",
        borderWidth: 0
    }
};
option19 = {
    color: ['#FF3C78', '#fff', '#49BDCA', '#fff', "#48D1CC"],
    series: [{
        name: '值',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [199, 200],
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    textStyle: {
                        fontSize: 20
                    },
                    position: 'outside'
                },
                labelLine: {
                    show: true,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 8,
                shadowBlur: 40,
                borderColor: "#FF3C78",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 2.5,
            name: '到场：25%'
        }, {
            value: 7.5,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
//      name: '白',
        type: 'pie',
        clockWise: false,
        radius: [180, 180],
        hoverAnimation: false,
        data: [{
            value: 1
        }]
    }, {
        name: '值',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [159, 160],
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    textStyle: {
                        fontSize: 20
                    },
                },
                labelLine: {
                    show: true,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 8,
                shadowBlur: 40,
                borderColor: "#49BDCA",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 4.4,
            name: '未到场：44%'
        }, {
            value: 5.6,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
//      name: '白',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: [140, 140],
        data: [{
            value: 1
        }]
    }, {
        name: '值',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [119, 120],
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    textStyle: {
                        fontSize: 20
                    },
                },
                labelLine: {
                    show: true,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 8,
                shadowBlur: 40,
                borderColor: "#48D1CC",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 0.31,
            name: '请假：31%',
            
        }, {
            value: 0.69,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        type: 'pie',
        color: ['#48D1CC', '#FF8C00', "	#DB7093"],
        data: [{
            value: '',
            name: '合理率'
        }, {
            value: '',
            name: '未到场率'
        }, {
            value: '',
            name: '到场率'
        }]
    }, {
//      name: '白',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [100, 100],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 1,
            label: {
                normal: {
                    formatter: '会场签到率',
                    textStyle: {
                        color: '#00fff9',
                        fontSize: 26
                    }
                }
            }
        }, {
            tooltip: {
                show: false
            },
        }]
    }]
};
myChart19.setOption(option19);