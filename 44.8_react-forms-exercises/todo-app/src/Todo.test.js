import { render } from '@testing-library/react';
import Todo from './Todo';

it('Todo renders', () => {
    render(<Todo />);
  });
  
it("matches snapshot", function () {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
  });