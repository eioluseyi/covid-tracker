import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders infections graph", () => {
	render(<App />);
	const title = screen.getByText(/infections/i);
	expect(title).toBeInTheDocument();

	const linkElement = screen.getByText(/day/i);
	expect(linkElement).toBeInTheDocument();

	/**
	 * Expect DAY to be selected
	 * userClick MONTH
	 * Expect MONTH to be selected
	 */
});

test("renders vaccinations graph", () => {
	render(<App />);
	const linkElement = screen.getByText(/vaccinations/i);
	expect(linkElement).toBeInTheDocument();
});
