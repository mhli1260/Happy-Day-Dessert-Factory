var year1week = {
    x: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    y: [10, 18, 15, 19, 15, 13, 12],
    mode: 'lines+text+markers',
    text: ['10', '18', '15', '19', '15', '13', '12'],
    textposition: 'top',
    name:'this year'
  };
  
  var year2week = {
    x: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    y: [11, 14, 16, 18, 16, 12, 11],
    mode: 'lines+text+markers',
    text: ['11', '14', '16', '18', '16', '12', '11'],
    textposition: 'top',
    name:'last year'
  };
  
  
  var data = [ year1week, year2week ];
  
  var layout = {
    title:'Average hours I worked every day of the week',
    xaxis:{title:{text:'Days of the week'}},
    yaxis:{title:{text:'Hours'}}
  };
  
  Plotly.newPlot('mydays', data, layout);