import { fireEvent, render } from '@testing-library/react';
import TodoList from './TodoList';

it('TodoList renders', () => {
    render(<TodoList />);
  });
  
it("matches snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
  });

it("should add new todo", function () {
	const { queryByText, queryByTestId } = render(<TodoList />);
	const textInput = queryByTestId("text-input");
	const submitBtn = queryByText("Add");
	expect(queryByText("return library book")).not.toBeInTheDocument();
	fireEvent.change(textInput, { target: { value: "return library book" } });
	fireEvent.click(submitBtn);
	expect(queryByText("return library book")).toBeInTheDocument();

});

it("should delete a todo", function () {
	const { queryByText, queryByTestId } = render(<TodoList />);
	const textInput = queryByTestId("text-input");
	const submitBtn = queryByText("Add");
	expect(queryByText("return library book")).not.toBeInTheDocument();
	fireEvent.change(textInput, { target: { value: "return library book" } });
	fireEvent.click(submitBtn);
	expect(queryByText("return library book")).toBeInTheDocument(); 

	const deleteBtn = queryByTestId("delete-button")
	fireEvent.click(deleteBtn);
	expect(queryByText("return library book")).not.toBeInTheDocument();

});
