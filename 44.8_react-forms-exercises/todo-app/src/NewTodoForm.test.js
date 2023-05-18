import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it('NewTodoForm renders', () => {
    render(<NewTodoForm />);
  });
  
it("matches snapshot", function () {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
  });