document.addEventListener('DOMContentLoaded', function() {
    // Sample data for the first pie chart
    var data1 = {
      labels: ['Process 1', 'Process 2', 'Process 3'],
      datasets: [{
        data: [20, 50, 30],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
  
    // Get the canvas element for the first chart
    var ctx1 = document.getElementById('Process').getContext('2d');
  
    // Create the first pie chart
    var Process = new Chart(ctx1, {
      type: 'pie',
      data: data1,
    });
  
    // Sample data for the second pie chart
    var data2 = {
      labels: ['Site 1', 'Site 2', 'Site 3'],
      datasets: [{
        data: [40, 20, 40],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
  
    // Get the canvas element for the second chart
    var ctx2 = document.getElementById('Site').getContext('2d');
  
    // Create the second pie chart
    var Site = new Chart(ctx2, {
      type: 'pie',
      data: data2,
    });
  
    // Sample data for the bar chart
    var data = {
      labels: ['Activity 1', 'Activity 2', 'Activity 3'],
      datasets: [{
        label: 'User Activity',
        data: [50, 70, 30],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)'
        ],
        borderWidth: 1
      }]
    };
  
    // Get the canvas element for the bar chart
    var ctx = document.getElementById('Activity').getContext('2d');
  
    // Create the bar chart
    var Activity = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
  