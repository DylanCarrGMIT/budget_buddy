import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import {ArcElement, Tooltip, Legend} from 'chart.js';
import Chart from "chart.js/auto";
var categories = [];
var amounts = [];
//reads from local storage, then populates the arrays that chart.js will use
if(JSON.parse(localStorage.getItem("category") != null))
{
 categories = JSON.parse(localStorage.getItem("category"));
 amounts = JSON.parse(localStorage.getItem("amount"));
}




const state = {
  labels: categories,
  datasets: [
    {
      label: 'Amount Spent',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: amounts
    }
  ]
}

export default class ChartApp extends React.Component {
  render() {
    return (
      <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Amount spent in each category',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}
