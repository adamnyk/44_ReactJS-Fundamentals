import React from "react";
import { render, fireEvent, queryByTestId } from "@testing-library/react";
import CoinGame from "./CoinGame";

// Mocks Math.random to return a specific first and second value when run
beforeEach(function () {
	jest
		.spyOn(Math, "random")
		.mockReturnValueOnce(0.25) // first call
		.mockReturnValueOnce(0.75); // second call then to default
});

afterEach(function () {
	Math.random.mockRestore();
});

// smoke test
it("renders iwthout crashing", () => {
	render(<CoinGame />);
});

// snapshot test
it("matches snapshot", () => {
	const { asFragment } = render(<CoinGame />);
	expect(asFragment()).toMatchSnapshot();
});

// testing elements
it("should not render the coin on start", function () {
	const { queryByAltText } = render(<CoinGame />);

	// expect the first image to show, but not the second
	expect(queryByAltText("heads")).not.toBeInTheDocument();
	expect(queryByAltText("tails")).not.toBeInTheDocument();
});

it("should show the coin when pressing the flip button", function () {
	const { queryByAltText, queryByTestId } = render(<CoinGame />);

	const flipButton = queryByTestId("flip-button");
	fireEvent.click(flipButton);

	// expect the coin to show, heads, when pressing the flip button
	expect(queryByAltText("heads")).toBeInTheDocument();

	// expect the coin to show, tails, when pressing the flip button
	fireEvent.click(flipButton);
	expect(queryByAltText("tails")).toBeInTheDocument();
});

it("should have all counters start at 0", function () {
	const { queryByText, queryByAltText } = render(<CoinGame />);

	expect(queryByAltText("tails")).not.toBeInTheDocument();
	expect(queryByAltText("heads")).not.toBeInTheDocument();

	// counters should all be 0 at start
	expect(queryByText("Heads: 0")).toBeInTheDocument();
	expect(queryByText("Tails: 0")).toBeInTheDocument();
	expect(queryByText("Total flips: 0")).toBeInTheDocument();
});

it("should count flips correctly", function () {
	const { queryByText, queryByAltText, queryByTestId } = render(<CoinGame />);

	// expect to count heads correctly
	const flipButton = queryByTestId("flip-button");
	fireEvent.click(flipButton);
	expect(queryByAltText("heads")).toBeInTheDocument();
	expect(queryByAltText("tails")).not.toBeInTheDocument();

	expect(queryByText("Heads: 1")).toBeInTheDocument();
	expect(queryByText("Tails: 0")).toBeInTheDocument();
	expect(queryByText("Total flips: 1")).toBeInTheDocument();

	// expect the coin to show, tails, when pressing the flip button
	fireEvent.click(flipButton);
	expect(queryByAltText("tails")).toBeInTheDocument();
	expect(queryByAltText("heads")).not.toBeInTheDocument();

	expect(queryByText("Heads: 1")).toBeInTheDocument();
	expect(queryByText("Tails: 1")).toBeInTheDocument();
	expect(queryByText("Total flips: 2")).toBeInTheDocument();
});
