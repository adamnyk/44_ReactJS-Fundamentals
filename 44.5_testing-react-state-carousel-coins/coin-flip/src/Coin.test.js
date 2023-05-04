import React from "react";
import { render, fireEvent, queryByTestId } from "@testing-library/react";
import Coin from "./Coin";

// Mocks Math.random to return a specific first and second value when run
beforeEach(function () {
	jest
		.spyOn(Math, "random")
		.mockReturnValueOnce(0.25) // first call
		.mockReturnValueOnce(0.75) // second call then to default
        .mockReturnValueOnce(0.25)
        .mockReturnValueOnce(0.75)
        .mockReturnValueOnce(0.25)
        .mockReturnValueOnce(0.75);
    });

afterEach(function () {
	Math.random.mockRestore();
});

// smoke test
it("renders wthout crashing", () => {
	render(<Coin />);
});

// snapshot test
it("matches snapshot", () => {
	const { asFragment } = render(<Coin />);
	expect(asFragment()).toMatchSnapshot();
});