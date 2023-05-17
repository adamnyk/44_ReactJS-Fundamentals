import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("Box renders", () => {
	render(<NewBoxForm />);
});

it("matches snapshot", function () {
	const { asFragment } = render(<NewBoxForm />);
	expect(asFragment()).toMatchSnapshot();
});
