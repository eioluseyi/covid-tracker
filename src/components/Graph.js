import { Loader } from "./Loader";
import { Line } from "react-chartjs-2";

export const Graph = ({
	graphInfo = { labels: [], values: [] },
	loading,
	label
}) => {
	const data = {
		labels: graphInfo.labels,
		datasets: [
			{
				label: label,
				data: graphInfo.values,
				fill: false,
				backgroundColor: "rgb(90, 90, 90)",
				borderColor: "rgba(90, 90, 90, 0.2)"
			}
		]
	};

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true
					}
				}
			]
		}
	};

	return (
		<div className="graph">
			{loading ? <Loader /> : <Line data={data} options={options} />}
		</div>
	);
};
