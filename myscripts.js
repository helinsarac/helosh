var data = {
  // A labels array that can contain any sort of values
  labels: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [1455900, 2383700, 5806000, 2937300, 6572200, 6559573, 3463070, 3477101, 3335777, 3469250, 3492263]
  ]
};

// As options we currently only set a static size of 300x200 px. We can also omit this and use aspect ratio containers
// as you saw in the previous example
var options = {
  width: 300,
  height: 200
};

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object. As a third parameter we pass in our custom options.
new Chartist.Bar('.ct-chart', data, options);