import React from 'react';

// not in use
const Button = ({label, onClick, ...rest}) => {
    return (
        <button 
        className='btn btn-primary mx-3'
        onClick={onClick}
        {...rest}>{label}</button>
    );
}

export default Button;