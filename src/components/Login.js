import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


export class Login extends React.Component{

    constructor(props){
        super(props);
        this.state ={password:"",email:""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserEmail = this.handleUserEmail.bind(this);
        this.handleUserPassword = this.handleUserPassword.bind(this);

    }
    handleUserEmail(uemail){
        this.setState({email: uemail.target.value});
    }
    handleUserPassword(upass){
        this.setState({password: upass.target.value});
    }

    handleSubmit(){
        if (localStorage.getItem("email") === this.state.email && localStorage.getItem("password") === this.state.password){
            console.log("ASDadsadasdadad")
            localStorage.setItem("isLoggedIn", true);
            this.props.handleLogin();
        }else{
            alert("El usuario no se encuentra registrado !!")
        }
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                
                <main className="layout" onSubmit={this.handleSubmit}>
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Task Planner</Typography>
                        <form className="form" >
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input
                                 id="email" 
                                 name="email" 
                                 autoComplete="email" 
                                 value = {this.state.email}
                                 onChange = {this.handleUserEmail}
                                 autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value = {this.state.password}
                                    onChange = {this.handleUserPassword}
                                    autoFocus

                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Login 
                            </Button>
                            <br></br>
                            <br></br>
                            <div >
                              <Grid>
                                <Grid item xs >
                                  <Link href="#" variant="body2">
                                    Forgot password?
                                  </Link>
                                </Grid>
                                <br></br>
                                <Grid item xs >
                                  <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                  </Link>
                                </Grid>
                              </Grid>

                            </div>
                           
                            
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}