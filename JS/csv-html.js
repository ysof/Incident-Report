// Function to convert CSV to HTML table
function generateHtmlTable(csvData, manualLinks) {
  var table = '<table class="tg">\n<thead>\n<tr>';
  var rows = csvData.split('\n');

  for (var i = 0; i < rows.length; i++) {
      var cells = rows[i].split(',');

      if (i === 0) {
          // Header row
          for (var j = 0; j < cells.length; j++) {
              table += '<th class="tg-3xi5">' + cells[j] + '</th>';
          }
          table += '</tr>\n</thead>\n<tbody>';
      } else {
          // Data rows
          table += '<tr>';
          for (var j = 0; j < cells.length; j++) {
              if (j === cells.length - 1 && cells[j] !== '' && manualLinks[i - 1]) {
                  // If it's the last column and contains a URL and manual link is provided
                  table += '<td class="tg-0pky"><a href="' + manualLinks[i - 1] + '" target="_blank">More Info</a></td>';
              } else {
                  table += '<td class="tg-0pky">' + cells[j] + '</td>';
              }
          }
          table += '</tr>';
      }
  }

  table += '</tbody>\n</table>';
  return table;
}

// Function to load CSV file and generate HTML table
function loadCsvAndGenerateTable(csvFilePath, manualLinks) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var htmlTable = generateHtmlTable(this.responseText, manualLinks);
          document.getElementById("table-container").innerHTML = htmlTable;
      }
  };
  xhttp.open("GET", csvFilePath, true);
  xhttp.send();
}

// Manually provide links in the same order as CSV rows
var manualLinks = [
  'incidents-Users.html#Y.Zaqout',
  'incidents-Users.html#K.Alwis'
];

// Load CSV and generate table (replace 'report.csv' with your actual CSV file path)
var csvFilePath = 'report.csv';
loadCsvAndGenerateTable(csvFilePath, manualLinks);
