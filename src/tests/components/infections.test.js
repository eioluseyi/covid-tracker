import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { DataContext } from "../../App";
import { Infections } from "../../components/Infections";

const wrapper = ({ children }) => {
	const [country, setCountry] = useState("ng");
	return (
		<DataContext.Provider value={{ country, setCountry: setCountry }}>
			{children}
		</DataContext.Provider>
	);
};

test("renders infections graph", () => {
	render(<Infections />, { wrapper });

	const title = screen.getByText(/infections/i);
	expect(title).toBeInTheDocument();

	/**
	 * Expect TODAY to be selected
	 * userClick MONTH
	 * Expect MONTH to be selected
	 * userClick YEAR
	 * Expect YEAR to be selected
	 * userClick TODAY
	 * Expect TODAY to be selected
	 */

	const today = screen.getByText(/today/i);
	expect(today).toHaveClass("active");

	const month = screen.getByText(/month/i);
	userEvent.click(month);
	expect;
	expect(today).not.toHaveClass("active");
	expect(month).toHaveClass("active");

	const year = screen.getByText(/year/i);
	userEvent.click(year);
	expect(month).not.toHaveClass("active");
	expect(year).toHaveClass("active");

	userEvent.click(today);
	expect(year).not.toHaveClass("active");
	expect(today).toHaveClass("active");

	const loader = screen.getAllByTitle(/loader/i);
	expect(loader[0]).toBeInTheDocument();
});
