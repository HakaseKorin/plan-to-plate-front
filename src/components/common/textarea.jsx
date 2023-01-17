import React from 'react';

const TextArea = ({name, label, error, ...rest}) => {
    return (
        <div className='form-group mb-3 row'>
            <label htmlFor={name} className='col-sm-2 col-form-label'>{ label }</label>
            <div className='col-sm-10'>
                <textarea 
                    className='form-control' 
                    name={name} 
                    id={name} 
                    rows="3"
                    {...rest} 
                />
                {error && <div className='alert alert-danger'>{error}</div>}
            </div>
        </div>
    );
}
 
export default TextArea;