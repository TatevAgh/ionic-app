import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent  implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const ctx = document.getElementById('chart-pie') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Green', 'Blue', 'Orange', 'Pink'],
        datasets: [{
          data: [30, 10, 5, 15, 30],
          backgroundColor: ['red', 'green', 'blue', 'orange', 'pink'],
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          }
        }
      }
    })
  }

}
