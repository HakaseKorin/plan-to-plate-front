import Form from './common/form';
import Joi from 'joi-browser'
import { login } from '../services/loginService'

class Login extends Form {
    state = { 
        data: { email: '', password: ''},
        errors: {},
    } 

    schema = {
        email: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
    };

    async doSubmit() {
        const res = await login(this.state.data);
        console.log('doSubmit', res)
    }

    render() { 
        return (
            <div>
                <h1 className='mb-3'>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('email', "Username")}
                    {this.renderInput('password', "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}
 
export default Login;