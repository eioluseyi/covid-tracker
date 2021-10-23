import { DataSelector } from "./DataSelector";

export const CardHeader = ({ cardTitle, selectors, range, setRange }) => {
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
