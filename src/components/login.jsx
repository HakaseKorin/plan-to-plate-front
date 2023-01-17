import Form from './common/form';
import Joi from 'joi-browser'

class Login extends Form {
    state = { 
        data: { username: '', password: ''},
        errors: {},
    } 

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
    };

    doSubmit() {
        console.log("Login Submitted");
    }

    render() { 
        return (
            <div>
                <h1 className='mb-3'>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', "Username")}
                    {this.renderInput('password', "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}
 
export default Login;