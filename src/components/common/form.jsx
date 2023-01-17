import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input'

class Form extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        data: {},
        errors: {},
    }

    // requires a valid schema to function

    renderButton(label) {
        return (
            <button 
            className="btn btn-primary"
            disabled={this.validate()}
            >{label}
            </button>
        );
    };

    renderInput(name, label, type='text') {
        const { data, errors } = this.state;

        return (
            <Input
            type={type}
            name={name}
            value={data[name]}
            label={label}
            onChange={this.handleChange}
            error={errors[name]}
            />
        );
    }

    validate() {
        const options = { abortEarly:false }
        const { error } = Joi.validate(this.state.data, this.schema, options );
        console.log(error)

        if (!error) return null;

        const errors = {};
        for (let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;
    }

    validateProperty({ name, value}){
        const obj = { [name]: value } // dynamic naming using es6
        const schema = { [name]: this.schema[name]} // reads from schema to reference specifc schema for either user or pass
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }

    
    handleSubmit(e){
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit();
    }

    handleChange({ currentTarget:input }){
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({ data, errors });
    }
}
 
export default Form;