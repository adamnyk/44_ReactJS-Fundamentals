import { useState } from "react";
import "./NewBoxForm.css";

const NewBoxForm = ({addBox}) => {

    const INITIAL_STATE = {color:"black", height:50, width:50}
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({...formData, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(formData);
        // setFormData(INITIAL_STATE) //use to reset form after submit
    }
    

	return (
        <form
            className="NewBoxForm"
            onSubmit={handleSubmit}
        >
			<div className="NewBoxForm-input-group">
                <label htmlFor="color">Color:</label>
                <input 
                                name="color" 
                                id="color" 
                                type="color" 
                                value={formData.color}
                                onChange={handleChange}
                />
                                <span>{formData.color}</span>

            </div>

            <div className="NewBoxForm-input-group">
                <label htmlFor="height">Height:</label>
                    <input
                        name="height"
                        id="height"
                        type="range"
                        min={50}
                        max={500}
                        step={25}
                        value={formData.height}
                        onChange={handleChange}
                        />
                <span>{formData.height}px</span>
            </div>

            <div className="NewBoxForm-input-group">
                <label htmlFor="width">Width:</label>
                    <input
                        name="width"
                        id="width"
                        type="range"
                        min={50}
                        max={500}
                        step={25}
                        value={formData.width}
                        onChange={handleChange}
                    />
                <span>{formData.width}px</span>
            </div>

            <button>Make box</button>
		</form>
	);
};

export default NewBoxForm;
