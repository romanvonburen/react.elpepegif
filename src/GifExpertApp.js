import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState (['Thrillers']);
    //const handleAdd = () => {
    //    setCategories( cats => [...cats, 'Horror Movies']);
    //}
    return (
        <>
            <h1 className="animate__animated animate__zoomInDown">EL PEPE GIF</h1>
            <AddCategory setCategories={ setCategories } />
            <hr />
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key= { category }
                            category={ category} 
                        />
                    ))
                }
            </ol>

        </>
    )
}