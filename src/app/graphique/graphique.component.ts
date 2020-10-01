import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.css']
})
export class GraphiqueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('camember', this.camember);
  } 

public camember: any = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Détail des produits vendus'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Hight-Tech',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: 'Services',
        y: 11.84
      }, {
        name: 'Biens immobiliers',
        y: 10.85
      }, {
        name: 'Agro-alimentaire',
        y: 4.67
      }, {
        name: 'Automobile',
        y: 4.18
      }, {
        name: 'Aéronautique',
        y: 7.05
      }]
    }]
  }
}
