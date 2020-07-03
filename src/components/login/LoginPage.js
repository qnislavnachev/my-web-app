import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid/Grid";
import './Login.css'
import Paper from "@material-ui/core/Paper/Paper";
import PageRedirect from "../core/PageRedirect";
import Error from "../core/Error";
import authorize from 'src/components/login/Security'

const styles = {
    borderColor: '#24a2ee',
    color: '#24a2ee'
};

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameError: '',
            passwordError: '',
            authenticationError: '',
            redirect: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    };

    validateInput() {
        this.setState({
            usernameError: '',
            passwordError: '',
            authenticationError: ''
        });

        let hasSyntacticErrors = false;

        if (!this.state.username.includes("@")) {
            hasSyntacticErrors = true;
            this.setState({usernameError: 'Invalid email address.'});
        }

        if (this.state.password.length < 6) {
            hasSyntacticErrors = true;
            this.setState({passwordError: 'Invalid password.'});
        }

        return true
    }

    handleSubmit() {
        authorize(this.state.username, this.state.password)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <PageRedirect to={'/hello'} active={this.state.redirect}/>

                <Paper elevation={5} className={'login-form'}>
                    <Grid container justify={'center'} alignItems={"center"} spacing={24}>

                        <Grid item lg={9}>
                            <TextField value={this.state.username} error={this.state.usernameError.length > 0}
                                       helperText={this.state.usernameError}
                                       label={'Email'}
                                       onChange={this.handleChange('username')} fullWidth/>
                        </Grid>

                        <Grid item lg={9}>
                            <TextField error={this.state.passwordError.length > 0}
                                       helperText={this.state.passwordError}
                                       label={'Password'}
                                       type='password'
                                       onChange={this.handleChange('password')} fullWidth/>
                        </Grid>

                        <Grid item lg={9}>
                            <Button type={'submit'} style={styles} variant='outlined' size='large'
                                    fullWidth>Login</Button>
                        </Grid>
                    </Grid>

                    <Error message={this.state.authenticationError}/>
                </Paper>
            </form>
        )
    }
}

export default LoginPage;