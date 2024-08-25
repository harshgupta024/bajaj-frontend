// src/components/InputForm.js

import React, { useState } from 'react';

const InputForm = ({ setResponse, setError }) => {
    const [jsonInput, setJsonInput] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const parsedInput = JSON.parse(jsonInput);
            const response = await fetch('https://your-backend-endpoint/bfhl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(parsedInput),
            });
            const result = await response.json();
            setResponse(result);
            setError('');
        } catch (error) {
            setError('Invalid JSON or network error');
            setResponse(null);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder='Enter JSON here'
                rows={4}
                cols={50}
            />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default InputForm;
