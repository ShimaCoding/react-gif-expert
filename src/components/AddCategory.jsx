import { useState } from 'react';
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue(''); // Clear the input after submission
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Agregar categoría"
                value={inputValue}
                onChange={handleInputChange}
            />   
        </form>
    );
};
