import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSummit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 3) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('')
        }


    }
    return (
        <form onSubmit={handleSummit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    )
}

AddCategory.protTypes = {
    setCategories: PropTypes.func.isRequired
}