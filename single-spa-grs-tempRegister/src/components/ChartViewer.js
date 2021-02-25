import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function ChartViewer(props) {
    let XAXISRANGE = 777600000
    
  const series = [
    {
        name: "xx",
      data: props.data.slice()
    }
  ];
  const options = {
    chart: {
      id: 'realtime',
      height: 350,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Dynamic Updating Chart',
      align: 'left'
    },
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime',
      range: XAXISRANGE
    },
    yaxis: {
      max: 100
    },
    legend: {
      show: false
    },
  }

  return (
    <div id="chart">
      <Chart 
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
}
