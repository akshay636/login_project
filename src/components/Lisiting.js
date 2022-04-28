import React, { Component } from 'react';

import '../styles/listing.css'
export default class Lisiting extends Component {
   componentDidMount(){
        fetch("https://reqres.in/api/login", {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
            //body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(data => {
                //localStorage.setItem('auth', JSON.stringify(data))
               this.setState({
                   list:[data]
               })
               console.log('stateeee',this.state);
            })
     }
  render()
   {              
  return (
      <div>
     <section>

  <h1>Data</h1>
  <div className="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Year</th>
          <th>Color</th>
          <th>pantone_value</th>
        </tr>
      </thead>
    </table>
  </div>
  <div className="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
      {this.state?.list[0]['data']?.map((val)=>{
          return(
              <>
              <tr>
          <td>{val.id}</td>
          <td>{val.name}</td>
          <td>{val.year}</td>
          <td>{val.color}</td>
          <td>{val.pantone_value}</td>
        </tr>
       
              </>
          )
      })}
        
      </tbody>
    </table>
  </div>
</section>


      </div>
    );
  }
}
