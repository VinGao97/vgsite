const ctx = document.getElementById('myChart').getContext('2d');
let xlabel= [];
let ydata= [];
$(`#stock-search`).click(function(){
  let xlabel= [];
  let ydata= [];  
	var searchValue = $('#stock-name').val();
	$.getJSON(`https://sandbox.iexapis.com/stable/stock/${searchValue}/chart/1m?token=Tpk_ebbdaa330a95420bb4bf541fe97672c2`,
	function(data){
		console.log(data);
		for (x = 0; x < 22; x++){
			const time = data[`${x}`].label;
			xlabel.push(time);
			const value = data[`${x}`].high;
			ydata.push(value);
			console.log(value);
      console.log(time);
    }

		//draw the chart after you fetch the data
		const myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: xlabel,
				datasets: [{
					label: "Highs of the month",
					data: ydata,
					borderWidth: 1
					}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							callback: function(value, index, values) {
							return '$' + value;
							}
						}
					}]
				}
			}
    });
	});
});