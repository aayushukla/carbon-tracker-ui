

import { Bar } from "react-chartjs-2";

function RoadChart(props) {
    console.log("sea records from seacharts", props)
return (

	<div style={{height:"30%", marginTop: '-2%'}}>
	<h3 style={{fontSize: '20px'}}>Road Transport Cost Graph</h3>
	<div style={{ maxWidth: "550px", height: '200px'}}>
		<Bar
		data={{
			// Name of the variables on x-axies for each bar
			labels: ["Fuel Cost", "Labour cost", "CO2"],
			datasets: [
			{
				// Label for bars
				label: "total count/value",
				// Data or value of your each variable
				data: [props.roadRecord[0].fuelCost, props.roadRecord[0].laborCost, props.roadRecord[0].co2],
				// Color of each bar
				backgroundColor: ["#82B1D6", "#B1D6F3", "#659BC6", "#1F659E"],
				// Border color of each bar
				borderColor: ["#82B1D6", "#B1D6F3", "#659BC6", "#3F7BAB"],
				borderWidth: 0.5,
			},
			],
		}}
		// Height of graph
		height={400}
		options={{
			maintainAspectRatio: false,
			scales: {
			yAxes: [
				{
				ticks: {
					// The y-axis value will start from zero
					beginAtZero: true,
				},
				},
			],
			},
			legend: {
			labels: {
				fontSize: 15,
			},
			},
		}}
		/>
	</div>
	</div>
);
}

export default RoadChart;
