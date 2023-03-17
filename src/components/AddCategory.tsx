import { useState } from "react";
import PropTypes from 'prop-types';


export const AddCategory = ( { onNewCategory }: any ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( { target }: any ) => {
        setInputValue( target.value)
    }

    const onSubmit = (event: any) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        // setCategories( (categories: string[]) => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim() )
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}