import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'

export const GifExpertAPP = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);


    return (
        <>
            <h2>GifExpertApp</h2> 
            {/* comunicacion entre componentes */}
            <AddCategory setCategories = {setCategories} />
            <hr />            

            <ol>
                {
                    categories.map( category =>(
                        <GifGrid 
                            key = { category }
                            category = { category } 
                        />
                    ))
                }
            </ol>
        </>
    )
}
