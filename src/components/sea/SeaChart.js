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

	<div style={{height:"1%", marginTop: "-3%"}}>
	<h4 style={{fontSize: "18px", display: 'flex', justifyContent: 'left'}}>Sea Transport Cost Graph</h4>
	<div style={{ maxWidth: "500px", height: "200px"}}>
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
				backgroundColor: ["aqua", "green", "red", "yellow"],
				// Border color of each bar
				borderColor: ["aqua", "green", "red", "yellow"],
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
