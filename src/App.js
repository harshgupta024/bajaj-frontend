// src/App.js

import React, { useState } from 'react';
import InputForm from './components/InputForm';
import DropdownFilter from './components/DropdownFilter';
import ResultDisplay from './components/ResultDisplay';

const App = () => {
    const [response, setResponse] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [error, setError] = useState('');

    return (
        <div>
            <h1>BFHL Challenge</h1>
            <InputForm setResponse={setResponse} setError={setError} />
            {response && (
                <>
                    <DropdownFilter setSelectedFilters={setSelectedFilters} />
                    <ResultDisplay response={response} selectedFilters={selectedFilters} />
                </>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default App;
