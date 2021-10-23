export const DataSelector = ({ title = "", value = "", range, setRange }) => {
	return (
		<button
			className={range === value ? "active" : ""}
			onClick={() => setRange(value)}>
			{title}
		</button>
	);
};
