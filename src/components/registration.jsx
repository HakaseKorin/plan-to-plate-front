import Form from "./common/form";
import Joi from 'joi-browser'

class Registration extends Form {
    constructor(props) {
        super(props)
    }

    state = {
        data: {
            username: "",
            password: "",
            confirm: ""
        },
        errors: {}
    }

    schema = {
        username: Joi.string(),
        password: Joi.string(),
        confirm: Joi.string(),
    }

    doSubmit() {
        // const errors = {...this.state.errors}
        // const errorMessage = this.validatePassword();
        // if (errorMessage) errors["password"] = errorMessage;
        // else delete errors["password"]

        const data = {...this.state.data}
        console.log(data);
        // this.setState({errors})
    }

    render() { 
        return (
            <div>
                <h1>Registration</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("confirm", "Confirm Password", "password")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }

    validatePassword() {
        return this.state.data.password === this.state.data.confirm ?
             null : "The entered passwords do not match"
    }
}
 
export default Registration;