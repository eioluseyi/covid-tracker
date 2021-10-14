import { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getData } from "../api";
import { DataContext } from "../App";

const Loader = () => {
	return <div className="loader"></div>;
};

const Graph = ({ graphInfo = { labels: [], values: [] }, loading }) => {
	const data = {
		labels: graphInfo.labels,
		datasets: [
			{
				label: "",
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

const DataSelector = ({ title = "", value = "", range, setRange }) => {
	return (
		<button
			className={range === value ? "active" : ""}
			onClick={() => setRange(value)}>
			{title}
		</button>
	);
};

const CardHeader = ({ cardTitle, selectors, range, setRange }) => {
	return (
		<div className="card__header">
			<div className="title">{cardTitle}</div>
			<div className="selectors">
				{selectors.map((sel, i) => (
					<DataSelector
						key={i}
						title={sel.title}
						value={sel.value}
						range={range}
						setRange={setRange}
					/>
				))}
			</div>
		</div>
	);
};

const Card = ({ cardTitle = "", selectors = [] }) => {
	const [range, setRange] = useState("1");
	const [graphInfo, setGraphInfo] = useState();
	const [loading, setLoading] = useState(false);
	const country = useContext(DataContext);

	useEffect(() => {
		setLoading(true);
		getData({ type: cardTitle, range, country })
			.then(res => {
				setLoading(false);

				let gi = {
					labels: res?.[0]?.data ? Object.keys(res?.[0]?.data) : [],
					values: res?.[0]?.data ? Object.values(res?.[0]?.data) : []
				};

				setGraphInfo(gi);
			})
			.catch(err => {
				setLoading(false);
				console.error(err);
			});
		// eslint-disable-next-line
	}, [range, country]);

	return (
		<div className="card">
			<CardHeader
				cardTitle={cardTitle}
				selectors={selectors}
				range={range}
				setRange={setRange}
			/>
			<Graph graphInfo={graphInfo} loading={loading} />
		</div>
	);
};

const Infections = () => {
	return (
		<Card
			cardTitle="infections"
			selectors={[
				{ title: "TODAY", value: "1" },
				{ title: "1 MONTH", value: "2" },
				{ title: "1 YEAR", value: "3" }
			]}
		/>
	);
};

const Vaccinations = () => {
	return (
		<Card
			cardTitle="vaccinations"
			selectors={[
				{ title: "1ST DOSE", value: "1" },
				{ title: "2ND DOSE", value: "2" }
			]}
		/>
	);
};

export { Loader, Infections, Vaccinations };
