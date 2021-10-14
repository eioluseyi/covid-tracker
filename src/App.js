import "./App.css";
import { createContext, useState } from "react";
import { Infections, Vaccinations } from "./components";

export const DataContext = createContext();

function App() {
	const country_list = [
		{ label: "Nigeria", value: "ng" },
		{ label: "USA", value: "us" }
	];
	const [country, setCountry] = useState("ng");

	return (
		<DataContext.Provider value={country}>
			<div className="App">
				<div className="countries">
					<select value={country} onChange={e => setCountry(e.target.value)}>
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
				<Infections />
				<Vaccinations />
			</div>
		</DataContext.Provider>
	);
}

export default App;
