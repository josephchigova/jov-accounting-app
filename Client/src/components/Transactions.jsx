import React, { useState } from 'react';
import './styles/Transactions.css'; // Import the CSS file for styling
import Table from './Table';

// Transactions Component
const Transactions = () => {
    const headings = [
        "Name of Customer",
        "Name of Gadget",
        "Date of Purchase (Date)",
        "Form of Payment",
        "Price",
        "Cost",
        "Profit",
    ];

    const [data, setData] = useState([]);

    const handleAddRow = (newRow) => {
        setData([...data, newRow]);
    };

    return (
        <div className="customersContainer">
            <h1>Transactions</h1>
            <Table headings={headings} data={data} onAddRow={handleAddRow} />
        </div>
    );
};

export default Transactions;