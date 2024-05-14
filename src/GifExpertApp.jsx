import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {

    //  DEFINE UN ESTADO INICIAL
    let [categories, setCategories] = useState(['One Punch']);

    // FUNCION RECIBE EL VALOR DE LA CATEGORIA Y LO AÑADE AL ARRAY
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) { return };
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* Titulo  */}
            <h1>GifExpertApp</h1>

            {/* Componente envia valor valor para añadir categoria */}
            <AddCategory newCategoria={value => onAddCategory(value)} />


            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            };

            {/* <GifGrid category={category => categories.map(category)}/> */}



        </>)
}

