import { useState } from "react";
import "./NewTodoForm.css";

import { TextField, Button, FormControl, FormLabel} from '@mui/material';


const NewTodoForm = ({addTodo}) => {

    const INITIAL_STATE = {text:""}
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({...formData, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //prevent page refresh
        addTodo(formData);
        setFormData(INITIAL_STATE) //reset form after submit
    }
    

	return (
        <form
            className="NewTodoForm"
            onSubmit={handleSubmit}
        >
        <FormControl>
    
            <TextField
                name="text" 
                id="text" 
                type="text" 
                variant="outlined"
                size="small"
                label="Todo"
                value={formData.text}
                onChange={handleChange}
                autoFocus='true'
                inputProps={{ "data-testid": "text-input" }}
                />
            
            <Button 
                variant="contained" 
                type="submit"
                size="small" 
                sx={{ margin: 2, display:'inline'}}
                style={{ maxWidth: '50px', maxHeight: '50px', minWidth: '30px', minHeight: '30px', fontSize: 12 }}
                >
                Add
            </Button>
        </FormControl>
		</form>
	);  
};

export default NewTodoForm;
