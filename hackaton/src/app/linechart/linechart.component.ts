import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
    LineChart=[];
 
  
  
  ngOnInit(){
    Chart.defaults.LineWithLine = Chart.defaults.line;
Chart.controllers.LineWithLine = Chart.controllers.line.extend({
   draw: function(ease) {
      Chart.controllers.line.prototype.draw.call(this, ease);

      if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
         var activePoint = this.chart.tooltip._active[0],
             ctx = this.chart.ctx,
             x = activePoint.tooltipPosition().x,
             topY = this.chart.scales['y-axis-0'].top,
             bottomY = this.chart.scales['y-axis-0'].bottom;

         // draw line
         ctx.save();
         ctx.beginPath();
         ctx.moveTo(x, topY);
         ctx.lineTo(x, bottomY);
         ctx.lineWidth = 2;
         ctx.strokeStyle = '#07C';
         ctx.stroke();
         ctx.restore();
      }
   }
});

var chart = new Chart("linechart", {
   type: 'LineWithLine',
   data: {
      labels: ['1987', '1992', '1997', '2002', '2007', '2012'],
      datasets: [{
         label: 'First Dataset',
         data: [50, 100, 120, 250, 370,200],
         backgroundColor: 'rgba(0, 119, 24, 0.8)',
         borderColor: 'rgba(0, 119, 24, 0.3)',
         fill: false
      },
      {
        label: 'Second Dataset',
        data: [28, 48, 100, 190, 286, 327, 190],
        fill: false,
        borderColor: '#565656'
    },
    {
        label: 'third Dataset',
        data: [50, 75, 100, 150, 175, 200, 250],
        fill: false,
        borderColor: 'blue'
    },
    {
        label: 'fourth Dataset',
        data: [50, 175, 200, 350, 375, 390, 250],
        fill: false,
        borderColor: 'orange'
    }
    ],
      
   },
   options: {
      responsive: false,
      tooltips: {
         intersect: false
      },
      scales: {
         yAxes: [{
            ticks: {
               beginAtZero: true
            }
         }]
      }
   }
});
  }
}
