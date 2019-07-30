import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Jay17Jul';
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
      labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016','2017','2018','2019'],
      datasets: [{
         label: 'Statistics',
         data: [50, 20, 500, 200, 370, 600, 10,125,425,100],
         backgroundColor: 'rgba(0, 119, 24, 0.8)',
         borderColor: 'rgba(0, 119, 24, 0.3)',
         fill: false
      }]
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
