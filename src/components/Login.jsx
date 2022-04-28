import React  from 'react'
class Login extends React.Component{
    
    render() 
    {
        console.log('state',this.props);
        return(<>
             <form >
                            <h3>Login</h3>
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Email or Phone" id="username" onChange={(e) => {
                                this.props.setState({
                                    email: e.target.value
                                })
                            }} />
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="Password" id="password" onChange={(e) => {
                                this.props.setState({
                                    password: e.target.value
                                })
                            }} />
                            <button type="button" onClick={() => this.props.login()}>Log In</button>
                            <button type="button" onClick={() => this.props.setState({
                                isRegister:true
                            })}>Register Now</button>
                            <div className="social">
                                <div className="go"><i className="fab fa-google"></i>  Google</div>
                                <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                            </div>
                        </form>
        </>)
    }
}
export default Login