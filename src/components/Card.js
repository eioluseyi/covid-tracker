import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import { CardHeader } from "./CardHeader";
import { Graph } from "./Graph";
import { getData } from "../api";

export const Card = ({ cardTitle = "", selectors = [] }) => {
	const [range, setRange] = useState("1");
	const [graphInfo, setGraphInfo] = useState();
	const [loading, setLoading] = useState(false);
	const { country } = useContext(DataContext);

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

	const label =
		cardTitle === "infections" ? "No. of cases" : "No. of vaccinated people";

	return (
		<div className="card">
			<CardHeader
				cardTitle={cardTitle}
				selectors={selectors}
				range={range}
				setRange={setRange}
			/>
			<Graph graphInfo={graphInfo} loading={loading} label={label} />
		</div>
	);
};
