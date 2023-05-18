import "./Todo.css";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';



const Todo = ({ text, id, remove }) => {
	return (
		<div className="Todo">
			<div className="Todo-text">{text}</div>
			
			<IconButton
				aria-label="delete"
				onClick={() => remove(id)}
				data-testid="delete-button"
			>
				<DeleteIcon />
			</IconButton>
		</div>
	);  
};

export default Todo;
