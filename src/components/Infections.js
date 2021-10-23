import { Card } from "./Card";

export const Infections = () => {
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
