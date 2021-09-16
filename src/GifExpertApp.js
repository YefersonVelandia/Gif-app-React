import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertAPP = () => {

    const [categories, setCategories] = useState(['one punch', 'samurai', 'Dragon Ball'])


    return (
        <>
            <h2>GifExpertApp</h2> 
            {/* comunicacion entre componentes */}
            <AddCategory setCategories = {setCategories} />
            <hr />            

            <ol>
                {
                    categories.map( category =>{
                        return <li key={ category }> {category }</li>
                    })
                }
            </ol>
        </>
    )
}
