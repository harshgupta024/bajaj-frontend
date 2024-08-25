// src/components/ResultDisplay.js

import React from 'react';

const ResultDisplay = ({ response, selectedFilters }) => {
    if (!response) return null;

    const filteredResponse = selectedFilters.reduce((acc, filter) => {
        acc[filter] = response[filter];
        return acc;
    }, {});

    return (
        <div>
            <h3>Filtered Response:</h3>
            <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
        </div>
    );
};

export default ResultDisplay;
