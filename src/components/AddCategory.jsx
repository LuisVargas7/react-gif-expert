import { useState } from "react"
import { GifExpertApp } from "../GifExpertApp";

export const AddCategory = ({ newCategoria }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (cambioImput) => {
        setInputValue(cambioImput.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 2){return}
        newCategoria(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                placeholder="Buscar Gifts"
                value={inputValue}
                onChange={(cambioImput) => onInputChange(cambioImput)}
            />
        </form>
    )
}