import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

// smoke test
it("renders iwthout crashing", () => {
	render(<Carousel />);
});

// snapshot test
it("matches snapshot", () => {
	const { asFragment } = render(<Carousel />);
	expect(asFragment()).toMatchSnapshot();
});

// testing arrows
it("works when you click on the right arrow", function () {
	const { queryByTestId, queryByAltText } = render(<Carousel />);

	// expect the first image to show, but not the second
	expect(
		queryByAltText("Photo by Richard Pasquarella on Unsplash")
	).toBeInTheDocument();
	expect(
		queryByAltText("Photo by Pratik Patel on Unsplash")
	).not.toBeInTheDocument();

	// move forward in the carousel
	const rightArrow = queryByTestId("right-arrow");
	fireEvent.click(rightArrow);

	// expect the second image to show, but not the first
	expect(
		queryByAltText("Photo by Richard Pasquarella on Unsplash")
	).not.toBeInTheDocument();
	expect(
		queryByAltText("Photo by Pratik Patel on Unsplash")
	).toBeInTheDocument();
});

it("works when you click on the left arrow", function () {
	const { queryByTestId, queryByAltText } = render(<Carousel />);

	// move forward in the carousel
	const rightArrow = queryByTestId("right-arrow");
	fireEvent.click(rightArrow);

	// expect the first image to show, but not the second
	expect(
		queryByAltText("Photo by Pratik Patel on Unsplash")
	).toBeInTheDocument();
	expect(
		queryByAltText("Photo by Richard Pasquarel la on Unsplash")
	).not.toBeInTheDocument();

	// move backwards in the carousel
	const leftArrow = queryByTestId("left-arrow");
	fireEvent.click(leftArrow);

	// expect the first image to show, but not the second
	expect(
		queryByAltText("Photo by Richard Pasquarella on Unsplash")
	).toBeInTheDocument();
	expect(
		queryByAltText("Photo by Pratik Patel on Unsplash")
	).not.toBeInTheDocument();
});

it("hides left arrow when the first image is displayed", function () {
	const { queryByTestId, queryByAltText } = render(<Carousel />);

	// expect the first image to show, but not the second
	expect(
		queryByAltText("Photo by Richard Pasquarella on Unsplash")
	).toBeInTheDocument();
	expect(
		queryByAltText("Photo by Pratik Patel on Unsplash")
	).not.toBeInTheDocument();

	// expect the left arrow to be hidden, but not the right arrow
	const leftArrow = queryByTestId("left-arrow");
	const rightArrow = queryByTestId("right-arrow");

	expect(leftArrow).toHaveClass('hidden');
	expect(rightArrow).not.toHaveClass('hidden');
});

it("hides right arrow when the last image is displayed", function () {
	const { queryByTestId, queryByAltText } = render(<Carousel />);

	// move forward in the carousel two times to the last image
	const rightArrow = queryByTestId("right-arrow");
	fireEvent.click(rightArrow);
	fireEvent.click(rightArrow);

	// expect the third image to show
	expect(queryByAltText("Photo by Josh Post on Unsplash")).toBeInTheDocument();

	// expect the right arrow to be hidden, but not the left arrow
	const leftArrow = queryByTestId("left-arrow");

	expect(rightArrow).toHaveClass("hidden");
	expect(leftArrow).not.toHaveClass("hidden");
});
