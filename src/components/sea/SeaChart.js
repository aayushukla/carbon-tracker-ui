// import { Bar } from "react-chartjs-2";
// export const SeaChart = ({ chartData }) => {
//   return (
//     <div className="chart-container">
//       <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
//       <Bar
//         data={chartData}
//         options={{
//           plugins: {
//             title: {
//               display: true,
//               text: "Users Gained between 2016-2020"
//             },
//             legend: {
//               display: false
//             }
//           }
//         }}
//       />
//     </div>
//   );
// };


import { Bar } from "react-chartjs-2";

function SeaChart(props) {
    console.log("sea records from seacharts", props.seaRecord[0].fuelCost)
return (

	<div style={{height:"30%", marginTop: '-2%'}}>
	<h3 style={{fontSize: '20px'}}>Sea Transport Cost Graph</h3>
	<div style={{ maxWidth: "550px", height: '200px'}}>
		<Bar
		data={{
			// Name of the variables on x-axies for each bar
			labels: ["Fuel Cost", "Labour cost", "Bill"],
			datasets: [
			{
				// Label for bars
				label: "total count/value",
				// Data or value of your each variable
				data: [props.seaRecord[0].fuelCost, props.seaRecord[0].laborCost, props.seaRecord[0].bill],
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

export default SeaChart;
