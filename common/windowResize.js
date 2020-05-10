//给window添加resize时间，让图表适配屏幕的缩放
window.addEventListener("rezise", function() {
  //让图表适配屏幕变化
  myChart.resize();
  productVolumeChart.resize();
  myWaterVolumeChart.resize();
  myChartTempreature.resize();
  myProfitChart.resize();
  myCustomerPieChart.resize();
  myChartOfWaterLine.resize();
});
