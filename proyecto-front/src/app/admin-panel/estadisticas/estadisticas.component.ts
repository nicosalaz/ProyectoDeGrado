import { Component, OnInit } from '@angular/core';
import { AllserviceService } from 'src/app/share/services/allservice.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {

  basicData: any;

  basicOptions: any;
  data: any;

    options: any;
  constructor(private servicesAll: AllserviceService){}
  ngOnInit() {
      this.servicesAll.getArboles().subscribe((ele)=>{
        console.log(ele);
        
      })
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.basicData = {
          labels: ['Request Pendientes', 'Request Aceptados', 'Request Rechazados'],
          datasets: [
              {
                  label: 'Reques Especies arboreas',
                  data: [540, 325, 702, 620],
                  backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                  borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
                  borderWidth: 1
              }
          ]
      };

      this.basicOptions = {
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              x: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };

      const documentStyles = getComputedStyle(document.documentElement);
      const textColors = documentStyle.getPropertyValue('--text-color');

      this.data = {
          labels: ['Arboles', 'Palmas', 'Arbusto'],
          datasets: [
              {
                  data: [1401, 325, 702],
                  backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyles.getPropertyValue('--yellow-500'), documentStyles.getPropertyValue('--green-500')],
                  hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyles.getPropertyValue('--yellow-400'), documentStyles.getPropertyValue('--green-400')]
              }
          ]
      };

      this.options = {
          plugins: {
              legend: {
                  labels: {
                      usePointStyle: true,
                      color: textColors
                  }
              }
          }
      };
  }

}
