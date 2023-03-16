import { useState } from "react"


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
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}
