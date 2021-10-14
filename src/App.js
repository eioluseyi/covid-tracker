import "./App.css";
import { Line } from "react-chartjs-2";
import ChartGeo from "chartjs-chart-geo";

const DataSelector = ({ title = "", value = "" }) => {
	return <button>{title}</button>;
};

const CardHeader = ({ title = "", selectors = [] }) => {
	return (
		<div className="card__header">
			<div className="title">{title}</div>
			<div className="selectors">
				{selectors.map((sel, i) => (
					<DataSelector key={i} title={sel.title} value={sel.value} />
				))}
			</div>
		</div>
	);
};

const Graph = graphInfo => {
	const data = {
		labels: ["1", "2", "3", "4", "5", "6"],
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3, 5, 2, 3],
				fill: false,
				backgroundColor: "rgb(255, 99, 132)",
				borderColor: "rgba(255, 99, 132, 0.2)"
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
			<Line data={data} options={options} />
		</div>
	);
};

const Card = ({ title = "", selectors = [], graphInfo = {} }) => {
	return (
		<div className="card">
			<CardHeader title={title} selectors={selectors} />
			<Graph graphInfo={graphInfo} />
		</div>
	);
};

const Infections = () => {
	return (
		<Card
			title="Infections"
			selectors={[
				{ title: "TODAY", value: "1" },
				{ title: "1 MONTH", value: "2" },
				{ title: "1 YEAR", value: "3" }
			]}
		/>
	);
};

const Vaccinations = () => {
	return <div>Vaccinations</div>;
};

function App() {
	const country_list = [{ name: "Nigeria" }];
	return (
		<div className="App">
			<div className="countries">
				<select>
					{country_list.map(cl => (
						<option>{cl.name}</option>
					))}
				</select>
			</div>
			<Infections />
			<Vaccinations />
		</div>
	);
}

export default App;
