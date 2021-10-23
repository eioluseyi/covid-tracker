import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("renders and tests that all components are working simultaneously", () => {
	render(<App />);

	// CountrySelect ==========================================
	const dropDown = screen.getByTestId(/country__select/i);
	expect(dropDown).toBeInTheDocument();
	expect(dropDown).toHaveValue("ng");
	userEvent.selectOptions(dropDown, "us");
	expect(dropDown).toHaveValue("us");
	userEvent.selectOptions(dropDown, "ng");
	expect(dropDown).toHaveValue("ng");

	// Infections =====================================
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

	// Vaccinations =======================================
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
	expect(loader[1]).toBeInTheDocument();
});

test("checks if the card components re-render on country change", () => {
	render(<App />);

	const dropDown = screen.getByTestId(/country__select/i);
	userEvent.selectOptions(dropDown, "us");

	const loader = screen.getAllByTitle(/loader/i);
	expect(loader[0]).toBeInTheDocument();
	expect(loader[1]).toBeInTheDocument();
});
