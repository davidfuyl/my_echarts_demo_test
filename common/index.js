(function() {
  // 1.初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定图表的配置项和数据
  option = {
    color: ["#3398DB"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "25%",
      top: "5%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        // data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        //x轴更换数据
        data: ["教育", "旅游", "游戏", "电商", "AI", "IT", "Net"],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          //设置x轴字体颜色和样式
          textStyle: {
            // color: 'red',
            // fontSize: "10"
          }
          // axisLine: {
          //   show: false
          // }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        //y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "red"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        //柱子宽度
        barWidth: "45%",
        //更改x轴数据
        data: [10, 52, 200, 334, 390, 330, 220],
        //修改柱子为圆角
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})();

/* =================================================================================== */

(function() {
  // 1.初始化echarts实例
  var myChartOfWaterLine = echarts.init(document.querySelector(".line .chart"));
  // 指定图表的配置项和数据

  var colors = ["#5793f3", "#d14a61", "#675bba"];

  option = {
    color: colors,

    tooltip: {
      trigger: "none",
      axisPointer: {
        type: "cross"
      }
    },
    legend: {
      data: ["2019 降水量", "2018 降水量"],
      top: "-5"
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "20%",
      top: "5%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: colors[1]
          }
        },
        axisPointer: {
          label: {
            formatter: function(params) {
              return (
                "降水量  " +
                params.value +
                (params.seriesData.length
                  ? "：" + params.seriesData[0].data
                  : "")
              );
            }
          }
        },
        data: [
          "2018-1",
          "2018-2",
          "2018-3",
          "2018-4",
          "2018-5",
          "2018-6",
          "2018-7",
          "2018-8",
          "2018-9",
          "2018-10",
          "2018-11",
          "2018-12"
        ]
      },
      {
        type: "category",
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: colors[0]
          }
        },
        axisPointer: {
          label: {
            formatter: function(params) {
              return (
                "降水量  " +
                params.value +
                (params.seriesData.length
                  ? "：" + params.seriesData[0].data
                  : "")
              );
            }
          }
        },
        data: [
          "2019-1",
          "2019-2",
          "2019-3",
          "2019-4",
          "2019-5",
          "2019-6",
          "2019-7",
          "2019-8",
          "2019-9",
          "2019-10",
          "2019-11",
          "2019-12"
        ]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "2019 降水量",
        type: "line",
        xAxisIndex: 1,
        smooth: true,
        data: [
          2.6,
          5.9,
          9.0,
          26.4,
          28.7,
          70.7,
          175.6,
          182.2,
          48.7,
          18.8,
          6.0,
          2.3
        ]
      },
      {
        name: "2018 降水量",
        type: "line",
        smooth: true,
        data: [
          3.9,
          5.9,
          11.1,
          18.7,
          48.3,
          69.2,
          231.6,
          46.6,
          55.4,
          18.4,
          10.3,
          0.7
        ]
      }
    ]
  };

  myChartOfWaterLine.setOption(option);
})();

/* ================================================================================ */

(function() {
  var myCustomerPieChart = echarts.init(document.querySelector(".pie .chart"));

  option = {
    title: {
      // text: "某站点用户访问来源",
      // subtext: "纯属虚构",
      left: "center"
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      left: "0", //图例距离左的距离
      top: "0",
      y: "center", //图例上下居中
      data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "50%",
        center: ["60%", "40%"],
        data: [
          { value: 335, name: "直接访问" },
          { value: 310, name: "邮件营销" },
          { value: 234, name: "联盟广告" },
          { value: 135, name: "视频广告" },
          { value: 1548, name: "搜索引擎" }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };

  myCustomerPieChart.setOption(option);
})();

/* ================================================================================== */

(function() {
  var myProfitChart = echarts.init(document.querySelector(".profits .chart"));

  // Generate data
  var category = [];
  var dottedBase = +new Date();
  var lineData = [];
  var barData = [];

  for (var i = 0; i < 20; i++) {
    var date = new Date((dottedBase += 3600 * 24 * 1000));
    category.push(
      [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("-")
    );
    var b = Math.random() * 200;
    var d = Math.random() * 200;
    barData.push(b);
    lineData.push(d + b);
  }

  // option
  option = {
    // backgroundColor: "#0f375f",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
      data: ["line", "bar"],
      textStyle: {
        color: "#ccc"
      }
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "22%",
      top: "15%",
      width: "420",
      height: "100",
      containLabel: true
    },
    xAxis: {
      data: category,
      axisLine: {
        lineStyle: {
          color: "#ccc",
          left: 0
        }
      }
    },
    yAxis: {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: "#ccc"
        }
      }
    },
    series: [
      {
        name: "line",
        type: "line",
        smooth: true,
        showAllSymbol: true,
        symbol: "emptyCircle",
        symbolSize: 15,
        data: lineData
      },
      {
        name: "bar",
        type: "bar",
        barWidth: 10,
        itemStyle: {
          barBorderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#14c8d4" },
            { offset: 1, color: "#43eec6" }
          ])
        },
        data: barData
      },
      {
        name: "line",
        type: "bar",
        barGap: "-100%",
        barWidth: 10,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(20,200,212,0.5)" },
            { offset: 0.2, color: "rgba(20,200,212,0.2)" },
            { offset: 1, color: "rgba(20,200,212,0)" }
          ])
        },
        z: -12,
        data: lineData
      },
      {
        name: "dotted",
        type: "pictorialBar",
        symbol: "rect",
        itemStyle: {
          color: "#0f375f"
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
      }
    ]
  };
  myProfitChart.setOption(option);
})();

/* =========================================================================== */

(function() {
  myChartTempreature = echarts.init(
    document.querySelector(".tempreature .chart")
  );

  option = {
    title: {
      // text: "未来一周气温变化",
      // subtext: "纯属虚构"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["最高气温", "最低气温"]
    },
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: "none"
        },
        dataView: { readOnly: false },
        magicType: { type: ["line", "bar"] },
        restore: {},
        saveAsImage: {}
      }
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "22%",
      top: "15%",
      containLabel: true
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value} °C"
      }
    },
    series: [
      {
        name: "最高气温",
        type: "line",
        data: [11, 11, 15, 13, 12, 13, 10],
        markPoint: {
          data: [
            { type: "max", name: "最大值" },
            { type: "min", name: "最小值" }
          ]
        },
        markLine: {
          data: [{ type: "average", name: "平均值" }]
        }
      },
      {
        name: "最低气温",
        type: "line",
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
          data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
        },
        markLine: {
          data: [
            { type: "average", name: "平均值" },
            [
              {
                symbol: "none",
                x: "90%",
                yAxis: "max"
              },
              {
                symbol: "circle",
                label: {
                  position: "start",
                  formatter: "最大值"
                },
                type: "max",
                name: "最高点"
              }
            ]
          ]
        }
      }
    ]
  };
  myChartTempreature.setOption(option);
})();

/* ================================water volume======================================== */

(function() {
  myWaterVolumeChart = echarts.init(
    document.querySelector(".waterVolume .chart")
  );

  var colors = ["#5793f3", "#d14a61", "#675bba"];

  option = {
    color: colors,

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross"
      }
    },
    grid: {
      right: "20%"
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ["蒸发量", "降水量", "平均温度"]
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true
        },
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ]
      }
    ],
    yAxis: [
      {
        type: "value",
        name: "蒸发量",
        min: 0,
        max: 250,
        position: "right",
        axisLine: {
          lineStyle: {
            // color: colors[0]
            color: "black" //改变y轴数据显示颜色
          }
        },
        axisLabel: {
          formatter: "{value} ml"
        }
      },
      {
        type: "value",
        name: "降水量",
        min: 0,
        max: 250,
        position: "right",
        offset: 50,
        axisLine: {
          lineStyle: {
            // color: colors[1]
            color: "black"
          }
        },
        axisLabel: {
          formatter: "{value} ml"
        }
      },
      {
        type: "value",
        name: "温度",
        min: 0,
        max: 25,
        position: "left",
        axisLine: {
          lineStyle: {
            // color: colors[2]
            color: "black"
          }
        },
        axisLabel: {
          formatter: "{value} °C"
        }
      }
    ],
    series: [
      {
        name: "蒸发量",
        type: "bar",
        data: [
          2.0,
          4.9,
          7.0,
          23.2,
          25.6,
          76.7,
          135.6,
          162.2,
          32.6,
          20.0,
          6.4,
          3.3
        ]
      },
      {
        name: "降水量",
        type: "bar",
        yAxisIndex: 1,
        data: [
          2.6,
          5.9,
          9.0,
          26.4,
          28.7,
          70.7,
          175.6,
          182.2,
          48.7,
          18.8,
          6.0,
          2.3
        ]
      },
      {
        name: "平均温度",
        type: "line",
        yAxisIndex: 2,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    ]
  };
  myWaterVolumeChart.setOption(option);
})();

/* ==============================center part=============================== */
(function() {
  var productVolumeChart = echarts.init(
    document.querySelector(".mapPanel .chart2")
  );

  setTimeout(function() {
    option = {
      legend: {
        top: "2"
      },
      tooltip: {
        trigger: "axis",
        showContent: false
      },
      dataset: {
        source: [
          ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
          ["Matcha Latte", 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
          ["Milk Tea", 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
          ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
          ["Walnut Brownie", 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
        ]
      },
      xAxis: { type: "category" },
      yAxis: { gridIndex: 0 },
      grid: {
        top: "55%",
        left: "10%",
        right: "10%",
        bottom: "5%"
      },
      series: [
        { type: "line", smooth: true, seriesLayoutBy: "row" },
        { type: "line", smooth: true, seriesLayoutBy: "row" },
        { type: "line", smooth: true, seriesLayoutBy: "row" },
        { type: "line", smooth: true, seriesLayoutBy: "row" },
        {
          type: "pie",
          id: "pie",
          radius: "30%",
          top: "5%",
          center: ["50%", "25%"],
          label: {
            formatter: "{b}: {@2012} ({d}%)"
          },
          encode: {
            itemName: "product",
            value: "2012",
            tooltip: "2012"
          }
        }
      ]
    };

    productVolumeChart.on("updateAxisPointer", function(event) {
      var xAxisInfo = event.axesInfo[0];
      if (xAxisInfo) {
        var dimension = xAxisInfo.value + 1;
        productVolumeChart.setOption({
          series: {
            id: "pie",
            label: {
              formatter: "{b}: {@[" + dimension + "]} ({d}%)"
            },
            encode: {
              value: dimension,
              tooltip: dimension
            }
          }
        });
      }
    });
    productVolumeChart.setOption(option);
  });
})();
