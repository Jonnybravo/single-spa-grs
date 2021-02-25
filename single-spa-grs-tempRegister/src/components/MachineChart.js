import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ReactApexChart  from "react-apexcharts";

import ChartViewer from './ChartViewer';

import {updateLastValue} from './../redux/actions'


function MachineChart(props) {

  const dispatch = useDispatch();

  const [lastDate, updateLastDate] = useState(777600000);
  const [data, updateData] = useState([
    {
      "x": 86400000,
      "y": 64
    },
    {
      "x": 172800000,
      "y": 34
    },
    {
      "x": 259200000,
      "y": 69
    },
    {
      "x": 345600000,
      "y": 31
    },
    {
      "x": 432000000,
      "y": 54
    },
    {
      "x": 518400000,
      "y": 76
    },
    {
      "x": 604800000,
      "y": 59
    },
    {
      "x": 691200000,
      "y": 25
    },
    {
      "x": 777600000,
      "y": 34
    }
  ]);
  let TICKINTERVAL = 86400000

  useEffect(() => {

      const interval = setInterval(() => {
        const range = {
                  min: 10,
                  max: 90,
                }

        let newDate = lastDate + TICKINTERVAL;
        updateLastDate(newDate)

        let newData = {
          x: newDate,
          y: Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
        }
        
        
        let array = [...data, newData];
        array.shift();
        
        console.log(newData, array, props.globalEventDistributor)
        updateData(array.length > 20 ? array.slice(10) : array);
        props.globalEventDistributor.dispatch({type: 'GED_NEW_TEMP', payload: {id: 0, value: newData.y}})
        // props.globalEventDistributor.dispatch({type: 'INCREMENT'})

      }, 500);
      return () => {
        window.clearInterval(interval);
      };

    // window.setInterval(() => {
    //   getNewSeries(lastDate, {
    //     min: 10,
    //     max: 90,
    //   });

    //   ApexCharts.exec("realtime", "updateSeries", [
    //     {
    //       data: data,
    //     },
    //   ]);
    // }, 1000);
  }, [data]);

  const globalIncrement = () => {
    props.globalEventDistributor.dispatch({ type: 'INCREMENT' });
};

  // const getNewSeries = (baseval, yrange) => {
  //   var newDate = baseval + TICKINTERVAL;
  //   lastDate = newDate
  
  //   // for(var i = 0; i< data.length - 10; i++) {
  //   //   // IMPORTANT
  //   //   // we reset the x and y of the data which is out of drawing area
  //   //   // to prevent memory leaks
  //   //   data[i].x = newDate - XAXISRANGE - TICKINTERVAL
  //   //   data[i].y = 0
  //   // }
  
  //   data.push({
  //     x: newDate,
  //     y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  //   })
  // }

  return (
    <button onClick={globalIncrement}>global increment</button>
    // <ChartViewer data={data} title="Realtime data" />
  );
}

export default MachineChart;
