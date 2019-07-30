import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  PieChart=[];
  
  ngOnInit() {
    this.PieChart = new  Chart('pieChart', {
      type: 'pie',
      data: {
        labels:["Data Value1", "Data value2","Data Value3"],
        datasets: [{
          label:'first set',
          data: [700,300,100],
          backgroundColor: ['yellow','pink','blue'],
          borderWidth: 1  
        }
      ]

      },
      options: {
        title:{
          text:"pie chart",
          display: true
        },
        responsive: false,
        display:true
      }
    });
  }

}
