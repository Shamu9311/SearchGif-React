import { useState } from "react"
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['One Punch']);

  const onAddCategory = ( newCategory: string) => {
    if ( categories.includes( newCategory) ) return;
    setCategories([ newCategory, ...categories ]);
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory 
        // setCategories={ setCategories }
        onNewCategory={ (value: string) => onAddCategory(value) }
      />

      {/* Listado de gifs */}
      { 
        categories.map( (category) => (
          <GifGrid key={category} category={category}/>
        ))
      }

        {/* Gif item */}
    </>
  )
}
