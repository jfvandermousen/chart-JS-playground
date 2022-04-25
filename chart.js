
      const expensesChart = document.getElementById('expensesChart').getContext('2d');
      const workHoursChart = document.getElementById('workHoursChart').getContext('2d');

      getData();
  
        async function getData() {
            const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
            console.log(response);
            const data = await response.json();
            console.log(data);
            length = data.data.length;
            console.log(length);
  
            labels = [];
            values = [];
            for (i = 0; i < length; i++) {
                labels.unshift(data.data[i].Year);
                values.unshift(data.data[i].Population);
            };


      new Chart(document.getElementById('usPopulation'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: [
                      'rgb(255, 99, 132,1)',
                      'rgb(75, 192, 192, 1)',
                      'rgb(255, 205, 86, 1)',
                      'rgb(201, 203, 207, 1)',
                      'rgb(54, 162, 235, 1)',
                      'rgb(154, 162, 235, 1)',
                    ],

              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(155, 200, 64, 1)'
              ],
              borderWidth: 1
              ,
                    data: values
                }
            ]
        },
        options: {
            plugins: {
              title: {
                display: true,
                text: 'U.S population for the last years'
            },
          },
            layout: {
              padding: 5
          }
        }
    });

}

      const workhoursChart = new Chart(workHoursChart, {
        type: 'bar',
        data: {
            labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'],
            datasets: [{
                label: 'Heures de travail',
                data: [7, 8, 7, 4, 7, 2,1],
                fill: true,
                pointHoverBackgroundColor: 'purple',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(155, 200, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(155, 200, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          plugins: {
              title: {
                  display: true,
                  text: 'Période du 28 mars au 3 avril 2022'
              }
          },
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            layout: {
              padding: 5
          }
        }
    });

      const expenseschart = new Chart(expensesChart, {
        type: 'doughnut',
        data: data = {
            labels: [
              'Loyer + charges',
              'Nourriture',
              'Loisirs',
              'Autres'
            ],
            datasets: [{
              label: 'Dépenses',
              data: [60, 20, 15,5],
              backgroundColor: [
                '#274C77',
                '#6096BA',
                '#A3CEF1',
                '#E7ECEF',
              ],
              hoverOffset: 4
            }]
          },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: '% Dépenses mensuelles'
                }
            },
        }
        })
        
    Chart.defaults.font.size = 9;

    