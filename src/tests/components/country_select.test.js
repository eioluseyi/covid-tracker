import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { DataContext } from "../../App";
import { CountrySelect } from "../../components/CountrySelect";

const wrapper = ({ children }) => {
	const [country, setCountry] = useState("ng");
	return (
		<DataContext.Provider value={{ country, setCountry: setCountry }}>
			{children}
		</DataContext.Provider>
	);
};

test("renders country select dropdown", () => {
	render(<CountrySelect />, { wrapper });

	const dropDown = screen.getByTestId(/country__select/i);
	expect(dropDown).toBeInTheDocument();
	expect(dropDown).toHaveValue("ng");
	userEvent.selectOptions(dropDown, "us");
	expect(dropDown).toHaveValue("us");
	userEvent.selectOptions(dropDown, "ng");
	expect(dropDown).toHaveValue("ng");
});
