import Form from './common/form';
import Joi from 'joi-browser';

class recipeForm extends Form {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        data: {
            name: "",
            yield: "",
            ingredients: [],
            directions: []
        },
        errors: {},
    }
    
    schema = {
        _id: Joi.string(),
        name: Joi.string(),
        yield: Joi.number(),
        ingredients: Joi.array(),
        directions: Joi.array(),
    }

    render() { 
        return (
            <div>
                <h1 className='mb-3'>Recipe Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name")}
                    {this.renderInput("yield", "Yield", "number")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}
 
export default recipeForm;