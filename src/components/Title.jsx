import React from 'react';

const Title = ({ className = '', children }) => {
    return (
        <h1 className={`text-4xl text-center font-bold  ${className}`}>
            {children}
        </h1>
    );
};

export default Title;
