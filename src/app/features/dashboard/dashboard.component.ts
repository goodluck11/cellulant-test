import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartConfiguration, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  date = new Date();
  tagValue = ['a10', 'c12', 'tag'];
  listOfOption: Array<{ label: string; value: string }> = [];
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [11, 48, 20, 31, 16, 25, 27],
        label: 'Series A',
        backgroundColor: 'rgba(91,178,45,0.1)',
        borderColor: 'rgba(91,178,45,1)',
        borderWidth: 1,
        capBezierPoints: true,
        angle: 10,
        barThickness: 10,
        pointBackgroundColor: 'rgb(91,178,45)',
        pointBorderColor: '#fff',
        pointRadius: 6,
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.2)',
        fill: 'origin',
      }
    ],
    labels: ['Oct-1', 'Oct-2', 'Oct-3', 'Oct-4', 'Oct-5', 'Oct-6', 'Oct-7']
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      x: {},
      'y-axis-0':
        {
          position: 'left',
          bounds: "data",
          grid: {
            display: false,
          },
          min: 0,
          max: 60
        },
    },

    plugins: {
      legend: {display: false},
    }
  };

  public lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;


  constructor() {
  }

  ngOnInit(): void {
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 1; i < 2; i++) {
      children.push({label: i.toString(2) + i, value: i.toString(2) + i});
    }
    this.listOfOption = children;
  }

  onChange($event: any) {

  }
}
