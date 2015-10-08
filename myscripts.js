

/*1st graph*/
new Chartist.Line('#chart1', {
  labels: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
  series: [
    [1455900, 2383700, 5806000, 2937300, 6572200, 6559573, 3463070, 3477101, 3335777, 3469250, 3492263]
  ]
}, {
  fullWidth: true,

  chartPadding: {
    right: 40
  }
});

/*2nd graph*/
var data = {
  labels: ['Asia and the Pacific 41%', 'Africa 21%', 'Europe 19%', 'Middle East and North Africa 13%', 'Americas 6%'],
  series: [41, 21, 19, 13, 6]
};

var options = {
  labelInterpolationFnc: function(value) {
    return value[0]
  }
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    chartPadding: 30,
    labelOffset: 100,
    labelDirection: 'explode',
    labelInterpolationFnc: function(value) {
      return value;
    }
  }],
  ['screen and (min-width: 1024px)', {
    labelOffset: 80,
    chartPadding: 20
  }]
];

new Chartist.Pie('#chart2', data, options, responsiveOptions);
/*3nd graph*/
var data = {
  labels: ['Myanmar', 'Cote d\'Ivoire','Thailand', 'Latvia', 'Dominican Republic', 'Russia', 'Syria', 'Iraq', 'Kuwait', 'Estonia', 'Saudi Arabia', 'Malaysia', 'Ukraine', 'Brunei Darussalam', 'Sweden', 'Kenya', 'Germany', 'Kyrgyzstan', 'Viet Nam', 'Poland'],
    series: [
    [810000, 700000, 506197, 267789, 210000, 178000, 160000, 120000, 93000, 91281, 70000, 40000, 33271, 20524, 20450, 20000, 11709, 11425, 11000, 10825]
  ]
};

var options = {
  seriesBarDistance: 15
  
};

var responsiveOptions = [
  ['screen and (min-width: 641px) and (max-width: 1024px)', {
    seriesBarDistance: 10,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value;
      }
    }
  }],
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

new Chartist.Bar('#chart3', data, options, responsiveOptions);