import React, { useState } from 'react';
import './styles/Transactions.css'; // Import the CSS file for styling

// Reusable Table Component
const Table = ({ headings, data, onAddRow }) => {
    const [newRow, setNewRow] = useState({});

    const handleInputChange = (e, key) => {
        setNewRow({ ...newRow, [key]: e.target.value });
    };

    const handleAddRow = () => {
        if (Object.keys(newRow).length > 0) {
            onAddRow(newRow);
            setNewRow({}); // Reset newRow after adding
        }
    };

    return (
        <div className="table-container">
            <table className="transaction-table">
                <thead>
                    <tr>
                        {headings.map((heading, index) => (
                            <th key={index}>{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {/* Render existing rows */}
                    {data.map((row, index) => (
                        <tr key={index}>
                            {headings.map((heading, i) => (
                                <td key={i}>{row[heading] || ''}</td>
                            ))}
                        </tr>
                    ))}

                    {/* Render input fields for new row */}
                    <tr>
                        {headings.map((heading, index) => (
                            <td key={index}>
                                <input
                                    type="text"
                                    value={newRow[heading] || ''}
                                    onChange={(e) => handleInputChange(e, heading)}
                                    placeholder={`Enter ${heading}`}
                                />
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <button onClick={handleAddRow}>Add Row</button>
        </div>
    );
};
export default Table;