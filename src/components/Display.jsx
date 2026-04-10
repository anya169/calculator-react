import React from 'react';

function Display({ value }) {
    return (
        <div className="mb-3">
            <input
                type="text"
                className="form-control calculator-display"
                value={value}
                readOnly
            />
        </div>
    );
}

export default Display;