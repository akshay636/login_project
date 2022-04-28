import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Protected from './Protected'
import React from "react";
import '../styles/auth.css'
import { Navigate, useNavigate } from "react-router";
import Lisiting from "./Lisiting";
import Home from "./Home";
import Login from './Login'

class Auth extends React.Component {
    
    constructor() {
        super()
        this.state={
            isRegister:false,
            home:false
          
        }
    //    this.login()
    }
    componentDidMount(){
 
        console.log(this.props,'--------props')
    }
    

    login(e) {
        fetch("https://reqres.in/api/login", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(data => {
                 if(data['error']){
                       this.setState({
                           home:false
                       })
                 }
                 else{
                    localStorage.setItem('auth', JSON.stringify(data?.token))
                    console.log('.....working......', data);
                    this.setState({    
                        home: true
                    })
                 }          
            })  
    }
    render() {
          
        return (
            <>
                <div className="background">
                </div>
                <h1>Hell </h1>
              {  <FontAwesomeIcon icon={faEllipsisV}/>}
                {!this.state.isRegister ?
                   <Login
                       setState={this.setState}
                       login={this.login}
                       
                   />
                        :
                    <div>
                        <form >
                            <h3>Register</h3>
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Email or Phone" id="username" onChange={(e) => {
                                this.setState({
                                    email: e.target.value
                                })
                            }} />
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Password" id="password" onChange={(e) => {
                                this.setState({
                                    password: e.target.value
                                })
                            }} />
                            <button type="button" onClick={() => this.login()}>Register</button>
                            <button type="button" onClick={()=>this.setState({isRegister:false})}>Log In</button>
                            <div className="social">
                                <div className="go"><i className="fab fa-google"></i>  Google</div>
                                <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                            </div>
                        </form>
                    </div>
                }
                {this.state.home?<Protected cmp={Home}/>:<></>}
            </>
        )
    }
}
export default Auth