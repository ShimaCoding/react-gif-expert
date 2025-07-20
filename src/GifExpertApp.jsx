import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);
    const onAddCategory = ( newCategory ) => {
        if (categories.includes(newCategory)) return; // Prevent adding duplicate categories
        setcategories([newCategory, ...categories]);
    };
    return (
        <>
            <h1>Gif Expert App</h1>
            <p>Welcome to the Gif Expert App! Here you can find a variety of GIFs.</p>
            <AddCategory onNewCategory={onAddCategory}/>
            {categories.map(category => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
}