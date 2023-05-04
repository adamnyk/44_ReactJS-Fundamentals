import { render, screen } from '@testing-library/react';
import App from './App';

// smoke test
it("renders iwthout crashing", () => {
	render(<App />);
});

// snapshot test
it("matches snapshot", () => {
	const { asFragment } = render(<App />);
	expect(asFragment()).toMatchSnapshot();
});
