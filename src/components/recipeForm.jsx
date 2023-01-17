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
            ingredients: "",
            directions: ""
        },
        errors: {},
    }
    
    schema = {
        _id: Joi.string(),
        name: Joi.string(),
        yield: Joi.number(),
        ingredients: Joi.string(),
        directions: Joi.string(),
    }

    render() {
        return (
            <div>
                <h1 className='mb-3'>Recipe Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name")}
                    {this.renderInput("yield", "Serves", "number")}
                    {this.renderTextArea("ingredients", "Ingredients")}
                    {this.renderTextArea("directions", "Directions")}
                    {this.renderButton("Save", null)}
                </form>
            </div>
        );
    }
}
 
export default recipeForm;