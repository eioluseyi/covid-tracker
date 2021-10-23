import { Card } from "./Card";

export const Vaccinations = () => {
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
