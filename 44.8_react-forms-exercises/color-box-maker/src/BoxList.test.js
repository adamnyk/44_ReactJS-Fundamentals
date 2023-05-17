import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("Box renders", () => {
	render(<BoxList />);
});

it("matches snapshot", function () {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});

it("should show height & width dimensions", function () {
	const { queryByText, getByLabelText } = render(<BoxList />);
	const heightInput = getByLabelText("Height:");
	const widthInput = getByLabelText("Width:");

	expect(queryByText("350px")).not.toBeInTheDocument();
	expect(queryByText("250px")).not.toBeInTheDocument();

	fireEvent.change(heightInput, { target: { value: 350 } });
	fireEvent.change(widthInput, { target: { value: 250 } });

	expect(queryByText("350px")).toBeInTheDocument();
	expect(queryByText("250px")).toBeInTheDocument();
});

it("should add new box", function () {
	const { queryByText, getByLabelText, queryByTestId } = render(<BoxList />);
	const colorInput = getByLabelText("Color:");
	const heightInput = getByLabelText("Height:");
	const widthInput = getByLabelText("Width:");
	const submitBtn = queryByText("Make box");
	expect(queryByTestId("colored-box")).not.toBeInTheDocument();
	fireEvent.change(colorInput, { target: { value: "#1d7bd3" } });
	fireEvent.change(heightInput, { target: { value: 300 } });
	fireEvent.change(widthInput, { target: { value: 125 } });
	fireEvent.click(submitBtn);
	expect(queryByTestId("colored-box")).toBeInTheDocument();
	expect(queryByTestId("colored-box")).toHaveStyle({
		backgroundColor: "#1d7bd3",
		height: "300px",
		width: "125px",
	});
});

it("should delete a box", function () {
	const { queryByText, getByLabelText, queryByTestId } = render(<BoxList />);
	const colorInput = getByLabelText("Color:");
	const heightInput = getByLabelText("Height:");
	const widthInput = getByLabelText("Width:");
	const submitBtn = queryByText("Make box");
	expect(queryByTestId("colored-box")).not.toBeInTheDocument();
	fireEvent.change(colorInput, { target: { value: "#1d7bd3" } });
	fireEvent.change(heightInput, { target: { value: 300 } });
	fireEvent.change(widthInput, { target: { value: 125 } });
	fireEvent.click(submitBtn);
	expect(queryByTestId("colored-box")).toBeInTheDocument();
	expect(queryByTestId("colored-box")).toHaveStyle({
		backgroundColor: "#1d7bd3",
		height: "300px",
		width: "125px",
	});
	const deleteBtn = queryByText("x");
	fireEvent.click(deleteBtn);
	expect(queryByTestId("colored-box")).not.toBeInTheDocument();
});
