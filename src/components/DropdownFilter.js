// src/components/DropdownFilter.js

import React from 'react';

const DropdownFilter = ({ setSelectedFilters }) => {
    const handleChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedFilters(selectedOptions);
    };

    return (
        <select multiple={true} onChange={handleChange}>
            <option value='alphabets'>Alphabets</option>
            <option value='numbers'>Numbers</option>
            <option value='highest_lowercase_alphabet'>Highest Lowercase Alphabet</option>
        </select>
    );
};

export default DropdownFilter;
