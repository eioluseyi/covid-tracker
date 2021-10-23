import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { DataContext } from "../../App";
import { Vaccinations } from "../../components/Vaccinations";

const wrapper = ({ children }) => {
	const [country, setCountry] = useState("ng");
	return (
		<DataContext.Provider value={{ country, setCountry: setCountry }}>
			{children}
		</DataContext.Provider>
	);
};

test("renders vaccinations graph", () => {
	render(<Vaccinations />, { wrapper });

	const linkElement = screen.getByText(/vaccinations/i);
	expect(linkElement).toBeInTheDocument();

	/**
	 * Expect 1ST DOSE to be selected
	 * userClick 2ND DOSE
	 * Expect 2ND DOSE to be selected
	 */

	const d1 = screen.getByText(/1st dose/i);
	expect(d1).toHaveClass("active");

	const d2 = screen.getByText(/2nd dose/i);
	userEvent.click(d2);
	expect(d1).not.toHaveClass("active");
	expect(d2).toHaveClass("active");

	userEvent.click(d1);
	expect(d2).not.toHaveClass("active");
	expect(d1).toHaveClass("active");

	const loader = screen.getAllByTitle(/loader/i);
	expect(loader[0]).toBeInTheDocument();
});
