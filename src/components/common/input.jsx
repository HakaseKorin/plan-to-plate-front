import React from 'react';

const Input = ({name ,label, error, ...rest}) => {
    return (
        <div className='form-group mb-3 row'>
            <label htmlFor={name} className='col-sm-2 col-form-label'>{ label }</label>
            <div className='col-sm-10'>
                <input
                {...rest}
                id={name}
                name={name}
                className='form-control'
                />
                {error && <div className='alert alert-danger'>{error}</div>}

            </div>
        </div>
    );
}
 
export default Input;