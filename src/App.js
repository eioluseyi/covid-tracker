import "./App.css";
import { createContext, useState } from "react";
import { Infections } from "./components/Infections";
import { Vaccinations } from "./components/Vaccinations";
import { CountrySelect } from "./components/CountrySelect";

export const DataContext = createContext();

function App() {
	const [country, setCountry] = useState("ng");

	return (
		<DataContext.Provider value={{ country, setCountry: setCountry }}>
			<div className="App">
				<CountrySelect />
				<Infections />
				<Vaccinations />
			</div>
		</DataContext.Provider>
	);
}

export default App;
