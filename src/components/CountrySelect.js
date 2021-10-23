import { useContext } from "react";
import { DataContext } from "../App";

export const CountrySelect = () => {
	const country_list = [
		{ label: "Nigeria", value: "ng" },
		{ label: "USA", value: "us" }
	];
	const { country, setCountry } = useContext(DataContext);

	return (
		<div className="countries">
			<select
				value={country}
				data-testid="country__select"
				onChange={e => setCountry(e.target.value)}>
				<option value="" disabled>
					- Choose Country -
				</option>
				{country_list.map(cl => (
					<option key={cl.value} value={cl.value}>
						{cl.label}
					</option>
				))}
			</select>
		</div>
	);
};
