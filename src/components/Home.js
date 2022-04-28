import React from "react";
import { Navigate } from "react-router";
import Navbar from "./Navbar";
class Home extends React.Component {
    
    render() {
       
        return (
            <>
             <Navbar/>
               <h1>Welcome user you re succesfully loged in</h1>
            </>)
    }

}
export default Home;